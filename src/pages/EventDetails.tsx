import React, { useState, useEffect } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { useParams } from 'react-router-dom';
import { Event } from '../types/Event';
import { Container, Typography, Card } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TimerIcon from '@mui/icons-material/Timer';
import YouTube from 'react-youtube';

import CountdownClock from '../components/shared/CountdownClock';
import { useEvents } from '../hooks/useEvents';

const EventDetails: React.FC = () => {
  const { eventId: eventIdParam } = useParams<{ eventId: string }>();
  const { getEventById } = useEvents();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [event, setEvent] = useState<Event | null>(null);
  
  // Parse the event ID from URL and validate it
  const eventId = eventIdParam ? parseInt(eventIdParam, 10) : null;

  useEffect(() => {
    const fetchEvent = async () => {
      if (!eventId) {
        setError('No event ID provided in the URL');
        setLoading(false);
        return;
      }
      
      if (isNaN(eventId)) {
        setError('Invalid event ID format');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const fetchedEvent = await getEventById(eventId);
        setEvent(fetchedEvent);
        if (!fetchedEvent) {
          setError('Event not found');
        }
      } catch (err) {
        console.error('Error fetching event:', err);
        setError('Failed to load event. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId, getEventById]);

  if (loading) return <Typography>Loading event details...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!event) return <Typography>Event not found</Typography>;
 
  const eventDate = new Date(event.event_timestamp || '');
  const isFutureEvent = eventDate > new Date();

  return (
    <PageLayout>
      <div className="flex items-center flex-grow w-full px-4 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-[80%] mx-auto text-white">
          <h1 className="text-3xl font-bold mb-2">{event?.title}</h1>
          <div className="mt-2 text-white/90">
            {event?.description}
          </div>
          <div className="mt-4">
            <div className="space-y-4 w-full">
              {isFutureEvent && (<div className="flex items-center space-x-2">
                <CalendarTodayIcon className="h-5 w-5" />
                <span>{eventDate.toLocaleString()}</span>
              </div>)}
                <div className="mt-4">
                  {isFutureEvent && (
                    <CountdownClock targetDate={eventDate} />
                  )}
                </div>              
                {!isFutureEvent && <div className="aspect-video rounded-lg overflow-hidden">
                  <YouTube
                    videoId="YPfCfoGaMNY"
                    style={{ width: '100%', height: '100%' }}
                    opts={{
                      height: '100%',
                      width: '100%',
                      playerVars: {
                        autoplay: 0,
                        controls: 1,
                        showinfo: 0,
                        rel: 0,
                      },
                    }}
                  />
                </div>}
              
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EventDetails;
