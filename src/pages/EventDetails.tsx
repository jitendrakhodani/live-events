import React, { useState, useEffect } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { useParams } from 'react-router-dom';
import { Event } from '../types/Event';

import YouTube from 'react-youtube';

import CountdownClock from '../components/shared/CountdownClock';
import { useEvents } from '../hooks/useEvents';
import { extractYouTubeVideoID } from '../lib/utils';

const EventDetails: React.FC = () => {
  const { eventId: eventIdParam } = useParams<{ eventId: string }>();
  const { getEventById } = useEvents();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [event, setEvent] = useState<Event | null>(null);
  const [videoId, setVideoId] = useState<string | null>(null);
  
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
        setVideoId(extractYouTubeVideoID(fetchedEvent?.asset_url || ''));
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

  if (loading) return <span>Loading event details...</span>;
  if (error) return <span color="error">{error}</span>;
  if (!event) return <span>Event not found</span>;
 
  const eventDate = new Date(event.event_timestamp || '');
  const isFutureEvent = eventDate > new Date();

  return (
    <PageLayout>
      <div className="flex items-center flex-grow w-full px-4 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-[80%] mx-auto text-gray-900 shadow-lg grid grid-cols-2 gap-4 border border-gray-300">
          <div className="">
          <h1 className="text-3xl font-bold mb-2 text-gray-700">{event?.title}</h1>
          <div className="mt-2 text-gray-700">
            {event?.description}
          </div>
          <div className="mt-4">
            <div className="space-y-4 w-full">
              {isFutureEvent && (<div className="flex items-center space-x-2 text-gray-700">
                <span>{eventDate.toLocaleString()}</span>
              </div>)}
                <div className="mt-4">
                  {isFutureEvent && (
                    <CountdownClock targetDate={eventDate} />
                  )}
                </div>              
            </div>
          </div>
          </div>
          {isFutureEvent && (
            <div className="drop-shadow-xl m-auto">
              <img src="../src/styles/you-live.webp" alt="" className=''/>
            </div>
          )}
          
          {!isFutureEvent && videoId && <div className="aspect-video rounded-lg overflow-hidden">
                  <YouTube
                    videoId={videoId}
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
    </PageLayout>
  );
};

export default EventDetails;
