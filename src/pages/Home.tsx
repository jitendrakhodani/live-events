import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { useEffect, useState } from 'react';
import { Event } from '../types/Event';
import { fetchUpcomingEvents } from '../services/eventService';
import EventCard from '../components/shared/EventCard';
import { CalendarIcon, ClockIcon, UserIcon } from 'lucide-react';

const features = [
  {
    title: 'Live Streaming',
    description: 'Stream your events in real-time'
  },
  {
    title: 'Interactive',
    description: 'Engage with your audience'
  },
  {
    title: 'Global Reach',
    description: 'Connect with global audience'
  }
];

const Home: React.FC = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const events = await fetchUpcomingEvents(3);
        setUpcomingEvents(events);
      } catch (error) {
        console.error('Failed to load upcoming events:', error);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white-900 mb-2 intro-text">Welcome to NowCast</h1>
            <p className="text-white-600 text-lg intro-text">Discover and join live events happening around the world</p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            {loading ? (
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              </div>
            ) : (
              upcomingEvents.map((event) => (
                <Link key={event.id} to={`/events/${event.id}`} className="block">
                  <div className="bg-white rounded-lg shadow-sm p-6 transition-transform hover:scale-105">
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">{event.title}</h2>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="text-sm text-gray-500 space-y-1">
                      <p><CalendarIcon className="inline-block mr-2 h-4 w-4 text-gray-400" />{event.date}</p>
                      <p><ClockIcon className="inline-block mr-2 h-4 w-4 text-gray-400" />{event.time}</p>
                      <p><UserIcon className="inline-block mr-2 h-4 w-4 text-gray-400" />{event.host}</p>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium">
                      View Details
                    </Button>
                  </div>
                </Link>
              ))
            )}
          </div> */}
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
