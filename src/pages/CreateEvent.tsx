import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const createEventSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  youtubeLink: z.string().url('Invalid YouTube URL'),
  startTime: z.string().refine(val => !isNaN(Date.parse(val)), { message: 'Invalid date' }),
});

type CreateEventFormData = z.infer<typeof createEventSchema>;

const CreateEvent: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { control, register, handleSubmit, formState: { errors } } = useForm<CreateEventFormData>({
    resolver: zodResolver(createEventSchema)
  });

  const onSubmit = async (data: CreateEventFormData) => {
    setIsSubmitting(true);
    try {
      // Implement event creation logic
      console.log('Event created:', {
        ...data,
        startTime: new Date(data.startTime)
      });
      // TODO: Add actual event creation API call
    } catch (error) {
      console.error('Event creation failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <div className="flex items-center justify-center flex-grow w-full px-4">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Create New Event</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Input 
                type="text" 
                placeholder="Event Title" 
                {...register('title')}
                className={`bg-white/20 border-white/70 text-white placeholder:text-white/70 ${errors.title ? 'border-red-500' : ''}`}
              />
              {errors.title && <p className="text-red-300 text-sm">{errors.title.message}</p>}
            </div>

            <div className="space-y-2">
              <Input 
                type="text" 
                placeholder="Event Description" 
                {...register('description')}
                className={`bg-white/20 border-white/70 text-white placeholder:text-white/70 ${errors.description ? 'border-red-500' : ''}`}
              />
              {errors.description && <p className="text-red-300 text-sm">{errors.description.message}</p>}
            </div>

            <div className="space-y-2">
              <Input 
                type="url" 
                placeholder="YouTube Link" 
                {...register('youtubeLink')}
                className={`bg-white/20 border-white/70 text-white placeholder:text-white/70 ${errors.youtubeLink ? 'border-red-500' : ''}`}
              />
              {errors.youtubeLink && <p className="text-red-300 text-sm">{errors.youtubeLink.message}</p>}
            </div>

            <div className="space-y-2">
              <Input 
                type="datetime-local" 
                {...register('startTime')}
                className={`bg-white/20 border-white/70 text-white ${errors.startTime ? 'border-red-500' : ''}`}
              />
              {errors.startTime && <p className="text-red-300 text-sm">{errors.startTime.message}</p>}
            </div>

            <Button 
              type="submit" 
              variant="ghost" 
              className="mx-auto text-white btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create Event'}
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default CreateEvent;
