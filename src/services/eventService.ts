import { Event } from '../types/Event';
import supabase from '../utils/index';

type EventInput = Omit<Event, 'id'>;

export const fetchAllEvents = async (): Promise<Event[]> => {
  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .order('event_timestamp', { ascending: true });
    
  if (error) {
    console.error('Error fetching events:', error);
    throw error;
  }

  return events || [];
};

export const fetchEventById = async (eventId: number): Promise<Event | null> => {
  const { data: event, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', eventId)
    .single();
    
  if (error) {
    console.error(`Error fetching event ${eventId}:`, error);
    throw error;
  }

  return event || null;
};

export const createEvent = async (eventData: EventInput): Promise<Event | null> => {
  const { data: createdEvent, error } = await supabase
    .from('events')
    .insert([eventData])
    .select()
    .single();
    
  if (error) {
    console.error('Error creating event:', error);
    throw error;
  }

  return createdEvent || null;
};

export const updateEvent = async (eventId: number, updates: Partial<EventInput>): Promise<Event | null> => {
  const { data: updatedEvent, error } = await supabase
    .from('events')
    .update(updates)
    .eq('id', eventId)
    .select()
    .single();
    
  if (error) {
    console.error(`Error updating event ${eventId}:`, error);
    throw error;
  }

  return updatedEvent || null;
};

export const deleteEvent = async (eventId: number): Promise<void> => {
  const { error } = await supabase
    .from('events')
    .delete()
    .eq('id', eventId);
    
  if (error) {
    console.error(`Error deleting event ${eventId}:`, error);
    throw error;
  }
};