import React from 'react';
import { useEvents } from '../hooks/useEvents';
import { Event } from '../types/Event';
import { SearchIcon } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import EventCard from '../components/shared/EventCard';

const BrowseEvents: React.FC = () => {
  const { events, isLoading } = useEvents();
  
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredEvents = events.filter((event: Event) => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8 gap-16 justify-center">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">Events</h1>
          </div>
          <div className="w-[30%] relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="h-5 w-5 text-white/70" />
            </div>
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 text-white/70 placeholder-white/40 rounded-sm pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            />
          </div>
        </div>
        {isLoading ? (
          <div className="text-center text-white/70">Loading events...</div>
        ) : (
          <div className="flex flex-wrap gap-8 isolation justify-center">
            {filteredEvents.length === 0 ? (
              <div className="text-center text-white/70">No events found matching your search.</div>
            ) : (
              filteredEvents.map((event: Event) => (
                  <EventCard event={event} showCountdown={false}/>
              ))
            )}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default BrowseEvents;
