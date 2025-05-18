import React, { useState, useEffect } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { useParams } from 'react-router-dom';
import { Event } from '../types/Event';
import { fetchEventById } from '../services/eventService';
import { Container, Typography, Card } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TimerIcon from '@mui/icons-material/Timer';
import YouTube from 'react-youtube';

import CountdownClock from '../components/shared/CountdownClock';

const EventDetails: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvent = async () => {
      try {
        if (eventId) {
          const fetchedEvent = await fetchEventById(eventId);
          setEvent(fetchedEvent);
        }
      } catch (err) {
        setError('Failed to load event details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadEvent();
  }, [eventId]);

  useEffect(() => {
    if (event && event.date && event.time) {
      // Parse event date and time
      const parseEventDate = (dateStr: string, timeStr: string) => {
        try {
          // Convert 12-hour time to 24-hour time if needed
          const normalizedTime = timeStr.replace(/^(\d+):(\d+)\s*(AM|PM)$/i, (_, h, m, period) => {
            let hours = parseInt(h, 10);
            if (period.toUpperCase() === 'PM' && hours !== 12) {
              hours += 12;
            } else if (period.toUpperCase() === 'AM' && hours === 12) {
              hours = 0;
            }
            return `${hours.toString().padStart(2, '0')}:${m}`;
          });

          const fullDateTimeString = `${dateStr}T${normalizedTime}:00`;
          return new Date(fullDateTimeString);
        } catch (error) {
          console.error('Error parsing date:', error);
          return new Date(0);
        }
      };

      const eventDate = parseEventDate(event.date, event.time);
      
      // Validate the date
      if (isNaN(eventDate.getTime())) {
        console.warn('Invalid event date or time:', {
          date: event.date,
          time: event.time,
          parsedDate: eventDate
        });
      }
    }
  }, [event]);

  if (loading) return <Typography>Loading event details...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!event) return <Typography>Event not found</Typography>;

  // Parse date with more robust method
  const parseEventDate = (dateStr: string, timeStr: string) => {
    try {
      // Convert 12-hour time to 24-hour time if needed
      const normalizedTime = timeStr.replace(/^(\d+):(\d+)\s*(AM|PM)$/i, (_, h, m, period) => {
        let hours = parseInt(h, 10);
        if (period.toUpperCase() === 'PM' && hours !== 12) {
          hours += 12;
        } else if (period.toUpperCase() === 'AM' && hours === 12) {
          hours = 0;
        }
        return `${hours.toString().padStart(2, '0')}:${m}`;
      });

      const fullDateTimeString = `${dateStr}T${normalizedTime}:00`;
      const parsedDate = new Date(fullDateTimeString);

      console.log('Date parsing details:', {
        originalDate: dateStr,
        originalTime: timeStr,
        normalizedTime,
        fullDateTimeString,
        parsedDate,
        isValidDate: !isNaN(parsedDate.getTime())
      });

      return parsedDate;
    } catch (error) {
      console.error('Error parsing date:', error);
      return new Date(0);
    }
  };

  const eventDate = parseEventDate(event.date, event.time);
  const isFutureEvent = eventDate > new Date();
  const isPastEvent = eventDate < new Date();


  return (
    <PageLayout>
      <div className="flex items-center flex-grow w-full px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-[80%] mx-auto text-white">
          <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
          <div className="mt-2 text-white/90">
            {event.description}
          </div>
          <div className="mt-4">
            <div className="space-y-4 w-full">
              <div className="flex items-center space-x-2">
                <CalendarTodayIcon className="h-5 w-5" />
                <span>{eventDate.toLocaleDateString()} at {event.time}</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <LocationOnIcon className="h-5 w-5" />
                <span>{event.location}</span>
              </div> */}
              {isFutureEvent && (
                <div className="mt-4">
                  <CountdownClock targetDate={eventDate} />
                </div>
              )}
              {isPastEvent && (
                <div className="aspect-video rounded-lg overflow-hidden">
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EventDetails;
