import { Event } from '../types/Event';

export const mockEvents: { [key: string]: Event } = {
  '1': {
    id: '1',
    title: 'Tech Innovation Conference',
    description: 'Join us for a day of cutting-edge technology discussions and networking.',
    date: '2025-09-15',
    time: '10:00 AM',
    location: 'San Francisco Convention Center',
    host: 'Tech Conference',
    tags: ['Technology', 'Innovation', 'Networking']
  },
  '2': {
    id: '2',
    title: 'Global Music Festival',
    description: 'Experience live performances from around the world.',
    date: '2025-04-22',
    time: '7:00 PM',
    location: 'Global Music Arena',
    host: 'Music Festival',
    tags: ['Music', 'Live Stream', 'Entertainment']
  },
  '3': {
    id: '3',
    title: 'Culinary Masterclass',
    description: 'Learn cooking techniques from world-class chefs.',
    date: '2025-06-10',
    time: '6:00 PM',
    location: 'Culinary Arts Studio',
    host: 'Cooking Masterclass',
    tags: ['Cooking', 'Masterclass', 'Culinary']
  }
};

export const fetchEventById = async (eventId: string): Promise<Event> => {
  const event = mockEvents[eventId];
  
  if (!event) {
    throw new Error(`Event with ID ${eventId} not found`);
  }
  
  return event;
};

const parseEventDateTime = (dateStr: string, timeStr: string): Date => {
  // Convert 12-hour time to 24-hour time
  const normalizedTime = timeStr.replace(/^(\d+):(\d+)\s*(AM|PM)$/i, (_, h, m, period) => {
    let hours = parseInt(h, 10);
    if (period.toUpperCase() === 'PM' && hours !== 12) hours += 12;
    if (period.toUpperCase() === 'AM' && hours === 12) hours = 0;
    return `${hours.toString().padStart(2, '0')}:${m}`;
  });

  return new Date(`${dateStr}T${normalizedTime}:00`);
};

export const fetchUpcomingEvents = async (limit: number = 3): Promise<Event[]> => {
  const now = new Date();
  
  return Object.values(mockEvents)
    .filter(event => {
      const eventDate = parseEventDateTime(event.date, event.time);
      return eventDate > now;
    })
    .sort((a, b) => {
      const dateA = parseEventDateTime(a.date, a.time);
      const dateB = parseEventDateTime(b.date, b.time);
      return dateA.getTime() - dateB.getTime();
    })
    .slice(0, limit);
};
