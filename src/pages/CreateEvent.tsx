import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useEvents } from '@/hooks/useEvents';
import PageLayout from '@/components/layout/PageLayout';
import useAuth from '@/hooks/useAuth';

const createEventSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  asset_url: z.string().url('Invalid URL').optional().or(z.literal('')),
  event_timestamp: z.string().refine(val => !isNaN(Date.parse(val)), { 
    message: 'Invalid date and time' 
  }),
  topic: z.string().min(3, 'Topic must be at least 3 characters'),
  venue: z.string().min(3, 'Venue must be at least 3 characters'),
  speakers: z.string().refine(
    val => {
      if (!val) return true;
      const speakers = val.split(',').map(s => s.trim());
      return speakers.every(s => s.length > 0);
    },
    { message: 'Enter valid speaker names separated by commas' }
  ),
  extra_data: z.record(z.any()).optional(),
});

type CreateEventFormData = z.infer<typeof createEventSchema>;

const CreateEvent: React.FC = () => {
  const navigate = useNavigate();
  const { createEvent, isCreating } = useEvents();
  
  const { register, handleSubmit, formState: { errors } } = useForm<CreateEventFormData>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      event_timestamp: new Date().toISOString().slice(0, 16), // Default to now
    },
  });

  const { user } = useAuth(); // Get current user

  const onSubmit = async (formData: CreateEventFormData) => {
    try {
      // Create base event data with required fields
      const eventData: any = {
        title: formData.title,
        description: formData.description,
        event_timestamp: formData.event_timestamp,
        topic: formData.topic,
        venue: formData.venue,
        speakers: formData.speakers ? formData.speakers.split(',').map(s => s.trim()) : [],
        created_by: user?.id || 'anonymous',
        created_at: new Date().toISOString(),
      };

      // Only add asset_url if it has a value
      if (formData.asset_url) {
        eventData.asset_url = formData.asset_url;
      }
      
      await createEvent(eventData);
      navigate('/events');
    } catch (error) {
      console.error('Failed to create event:', error);
      // You might want to show a toast notification here
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-6 text-white">Create New Event</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">Title *</label>
                <Input
                  {...register('title')}
                  placeholder="Event title"
                  className={`bg-white/20 border-white/30 text-white ${errors.title ? 'border-red-500' : ''}`}
                />
                {errors.title && <p className="text-red-300 text-sm mt-1">{errors.title.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">Date & Time *</label>
                <Input
                  type="datetime-local"
                  {...register('event_timestamp')}
                  className={`bg-white/20 border-white/30 text-white ${errors.event_timestamp ? 'border-red-500' : ''}`}
                />
                {errors.event_timestamp && <p className="text-red-300 text-sm mt-1">{errors.event_timestamp.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">Topic *</label>
                <Input
                  {...register('topic')}
                  placeholder="Event topic"
                  className={`bg-white/20 border-white/30 text-white ${errors.topic ? 'border-red-500' : ''}`}
                />
                {errors.topic && <p className="text-red-300 text-sm mt-1">{errors.topic.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">Venue *</label>
                <Input
                  {...register('venue')}
                  placeholder="Event venue"
                  className={`bg-white/20 border-white/30 text-white ${errors.venue ? 'border-red-500' : ''}`}
                />
                {errors.venue && <p className="text-red-300 text-sm mt-1">{errors.venue.message}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-white/80">Speakers (comma separated)</label>
                <Input
                  {...register('speakers')}
                  placeholder="Speaker 1, Speaker 2, ..."
                  className={`bg-white/20 border-white/30 text-white ${errors.speakers ? 'border-red-500' : ''}`}
                />
                {errors.speakers && <p className="text-red-300 text-sm mt-1">{errors.speakers.message}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-white/80">Asset URL (optional)</label>
                <Input
                  type="url"
                  {...register('asset_url')}
                  placeholder="https://example.com/asset.jpg"
                  className={`bg-white/20 border-white/30 text-white ${errors.asset_url ? 'border-red-500' : ''}`}
                />
                {errors.asset_url && <p className="text-red-300 text-sm mt-1">{errors.asset_url.message}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-white/80">Description *</label>
                <Textarea
                  {...register('description')}
                  placeholder="Detailed event description..."
                  rows={4}
                  className={`bg-white/20 border-white/30 text-white ${errors.description ? 'border-red-500' : ''}`}
                />
                {errors.description && <p className="text-red-300 text-sm mt-1">{errors.description.message}</p>}
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <Button
                type="button"
                variant="outline"
                className="text-white border-white/30 hover:bg-white/10"
                onClick={() => navigate(-1)}
                disabled={isCreating}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white"
                disabled={isCreating}
              >
                {isCreating ? 'Creating Event...' : 'Create Event'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default CreateEvent;
