import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CalendarIcon} from "lucide-react";
import { Event } from '../../types/Event';
import CountdownClock from './CountdownClock';
import { useEventStore } from '../../stores/useEventStore';

interface EventCardProps {
  event: Event;
  showCountdown?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, showCountdown = true }) => {
  
  
  return (
    <Card className="w-[350px] h-[200px]">
      <CardHeader>
        <div className="flex justify-between items-start">
            <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <CardDescription>{event.description}</CardDescription>
          <div className="flex items-center text-sm">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>
              {event.event_timestamp}
            </span>
          </div>
          {showCountdown && (
            <div className="mt-4">
              {/* <CountdownClock targetDate={event.event_timestamp} /> */}
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
