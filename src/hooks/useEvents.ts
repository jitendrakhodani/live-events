import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Event } from '../types/Event';
import { fetchAllEvents, fetchEventById, createEvent, updateEvent, deleteEvent } from '../services/eventService';
import { useEventStore } from '../stores/useEventStore';

type EventInput = Omit<Event, 'id'>;
const EVENTS_QUERY_KEY = 'events';

export const useEvents = () => {
  const { events, setEvents, addEvent, updateEvent: updateEventInStore, removeEvent } = useEventStore();
  const queryClient = useQueryClient();

  // Fetch all events
  const { data, isLoading, error } = useQuery<Event[]>({
    queryKey: [EVENTS_QUERY_KEY],
    queryFn: async () => {
      const data = await fetchAllEvents();
      if (data) {
        setEvents(data);
      }
      return data || [];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Create event mutation
  const createEventMutation = useMutation<Event | null, Error, EventInput>({
    mutationFn: (newEvent) => createEvent(newEvent),
    onSuccess: (newEvent) => {
      if (newEvent) {
        queryClient.setQueryData<Event[]>([EVENTS_QUERY_KEY], (old = []) => [...old, newEvent]);
        addEvent(newEvent);
      }
    },
  });

  // Update event mutation
  const updateEventMutation = useMutation<Event | null, Error, { id: number; updates: Partial<Event> }>({
    mutationFn: ({ id, updates }) => updateEvent(id, updates as Event),
    onSuccess: (updatedEvent, { id }) => {
      if (updatedEvent) {
        queryClient.setQueryData<Event[]>([EVENTS_QUERY_KEY], (old = []) =>
          old.map(event => (event.id === id ? { ...event, ...updatedEvent } : event))
        );
        updateEventInStore(id, updatedEvent);
      }
    },
  });

  // Delete event mutation
  const deleteEventMutation = useMutation<void, Error, number>({
    mutationFn: (id) => deleteEvent(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData<Event[]>([EVENTS_QUERY_KEY], (old = []) =>
        old.filter(event => event.id !== id)
      );
      removeEvent(id);
    },
  });

  // Get a single event by ID, checking local store first, then API if not found
  const getEventById = async (id: number): Promise<Event | null> => {
    // First check local store
    const localEvent = events.find(event => event.id === id);
    if (localEvent) return localEvent;

    // If not found in local store, fetch from API
    try {
      const fetchedEvent = await fetchEventById(id);
      if (fetchedEvent) {
        // Add to local store for future use
        addEvent(fetchedEvent);
      }
      return fetchedEvent;
    } catch (err) {
      console.error('Error fetching event:', err);
      throw new Error('Failed to fetch event');
    }
  };

  return {
    events: data || events,
    isLoading,
    loading: isLoading, // For backward compatibility
    error,
    getEventById,
    createEvent: createEventMutation.mutateAsync,
    updateEvent: updateEventMutation.mutateAsync,
    deleteEvent: deleteEventMutation.mutateAsync,
    isCreating: createEventMutation.isPending,
    isUpdating: updateEventMutation.isPending,
    isDeleting: deleteEventMutation.isPending,
  };
};
