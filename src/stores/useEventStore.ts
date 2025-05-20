import { create } from 'zustand';
import { Event } from '../types/Event';

interface EventState {
  events: Event[];
  setEvents: (events: Event[]) => void;
  addEvent: (event: Event) => void;
  updateEvent: (id: number, event: Partial<Event>) => void;
  removeEvent: (id: number) => void;
}

export const useEventStore = create<EventState>((set) => ({
  events: [],
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
}));
