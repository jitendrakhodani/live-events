import { useState, useEffect } from 'react';
import { Event } from '../types/Event';
import { mockEvents } from '../services/eventService';

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Use mock events for now
    setEvents(Object.values(mockEvents));
    setLoading(false);
  }, []);

  return { events, loading };
};
