import React from 'react';
import { useEvents } from '../hooks/useEvents';
import { Event } from '../types/Event';
import { SearchIcon } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import EventCard from '../components/shared/EventCard';
import { motion } from 'framer-motion';

const BrowseEvents: React.FC = () => {
  const { events, isLoading } = useEvents();
  
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredEvents = events.filter((event: Event) => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8 rounded-lg bg-white/10 backdrop-blur-sm">
        <div className="flex items-center mb-8 gap-16 mx-32">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-gray-600">Events</h1>
          </div>
          <div className="w-[30%] relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none text-gray-900">
              <SearchIcon className="h-5 w-5 text-gray-900" />
            </div>
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 text-gray-600 placeholder-gray-900 rounded-sm pl-10 pr-4 py-3 ring-1 focus:outline-none focus:ring-1 focus:border-primary"
            />
          </div>
        </div>
        {isLoading ? (
          <div className="text-center text-gray-900">Loading events...</div>
        ) : (
          <div className="flex flex-wrap gap-8 isolation justify-center">
            {filteredEvents.length === 0 ? (
              <div className="text-center text-gray-900">No events found matching your search.</div>
            ) : (
              filteredEvents.map((event: Event) => (
                <motion.div 
                className="text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                  <EventCard event={event} showCountdown={false}/>
              </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default BrowseEvents;
