import { create } from 'zustand';
import { Event } from '../types/Event';
import { get } from 'http';
import { updateEvent } from '@/services/eventService';
import { set } from 'react-hook-form';

interface EventState {
  events: Event[];
  eventId: number | null;
  setEvents: (events: Event[]) => void;
  addEvent: (event: Event) => void;
  updateEvent: (id: number, event: Partial<Event>) => void;
  removeEvent: (id: number) => void;
  getEventById: (id: number) => Event | undefined;
  setActiveEventId: (id: number) => void;
}

export const useEventStore = create<EventState>((set, get) => ({
  events: [],
  eventId: null,
  setActiveEventId: (id: number) => {
    const event = get().events.find((event) => event.id === id);
    if (event) {
      set({ eventId: id });
    }
  },
  setEvents: (events) => set({ events }),
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  updateEvent: (id, updates) =>
    set((state) => ({
      events: state.events.map((event) =>
        event.id === id ? { ...event, ...updates } : event
      ),
    })),
  removeEvent: (id) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== id),
      })), 
    getEventById: (id) =>
      get().events.find((event) => event.id === id)
}));
