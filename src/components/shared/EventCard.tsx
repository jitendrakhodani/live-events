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
    <Card className="w-[350px] h-[200px] rounded-md bg-white/10 backdrop-blur-sm border border-gray-300 shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
            <CardTitle className="text-xl text-gray-700">{event.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="">
          <CardDescription className="text-gray-600">{event.description}</CardDescription>
          <div className="flex items-center text-sm text-gray-600 mt-2">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>
              {new Date(event.event_timestamp).toLocaleString()}
            </span>
          </div>
          {showCountdown && (
            <div className="mt-4 text-gray-700">
              {/* <CountdownClock targetDate={event.event_timestamp} /> */}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-1/2 btn btn-primary  hover:bg-primary/80 z-20" >
          <Link to={`/events/${event.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
      <svg width="100%" height="80" viewBox="0 0 700 150" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 z-10">
  
  <defs>
<path id="sineWave" d="M0 75 Q 150 25 300 75 T 600 75 T 900 75 T 1200 75" />
</defs>

<g className="wave-group">
<use className="wave-line" href="#sineWave" x="0" y="0" />
<use className="wave-line" href="#sineWave" x="800" y="0" />

<use className="wave-line second" href="#sineWave" x="0" y="30" />
<use className="wave-line second" href="#sineWave" x="800" y="30" />

<use className="wave-line third" href="#sineWave" x="0" y="60" />
<use className="wave-line third" href="#sineWave" x="800" y="60" />
</g>
</svg>
    </Card>
  );
};

export default EventCard;
