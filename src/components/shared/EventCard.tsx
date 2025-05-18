import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { Event } from '../../types/Event';
import CountdownClock from './CountdownClock';

interface EventCardProps {
  event: Event;
  showCountdown?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, showCountdown = true }) => {
  const parseEventDateTime = (dateStr: string, timeStr: string): Date => {
    const normalizedTime = timeStr.replace(/^(\d+):(\d+)\s*(AM|PM)$/i, (_, h, m, period) => {
      let hours = parseInt(h, 10);
      if (period.toUpperCase() === 'PM' && hours !== 12) hours += 12;
      if (period.toUpperCase() === 'AM' && hours === 12) hours = 0;
      return `${hours.toString().padStart(2, '0')}:${m}`;
    });

    return new Date(`${dateStr}T${normalizedTime}:00`);
  };

  const eventDate = parseEventDateTime(event.date, event.time);
  
  return (
    <Card className="w-1/8 h-1/8">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
            <CardDescription>{event.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>
              {eventDate.toLocaleDateString()} at {event.time}
            </span>
          </div>
      
          {showCountdown && (
            <div className="mt-4">
              <CountdownClock targetDate={eventDate} />
            </div>
          )}
        
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-1/2 btn">
          <Link to={`/events/${event.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
