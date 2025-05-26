import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ml-20">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1 
            className="text-4xl font-bold text-gray-700 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Have questions or need assistance? We're here to help! Reach out to us and we'll get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-16 w-[90rem]">
          {/* Contact Form */}
          <motion.div 
            className="bg-white p-8 pr-32 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <Input id="first-name" type="text" placeholder="John" className="w-full" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <Input id="last-name" type="text" placeholder="Doe" className="w-full" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="you@example.com" className="w-full" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" type="text" placeholder="How can we help?" className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Your message here..." 
                  className="w-full"
                />
              </div>
              <div className="pt-2">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors duration-200"
                  variant="default"
                  size="default"
                >
                  <Send className="w-5 h-5 mr-2 text-white" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="p-6 bg-black/70 w-[500px] relative -left-32 top-32 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full">
                    <Mail className="w-6 h-6 text-black/70" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Email Us</h3>
                    <p className="text-white">chetan.suchak@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full">
                    <Phone className="w-6 h-6 text-black/70" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Call Us</h3>
                    <p className="text-white">+91 9096250250</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-black/70" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Visit Us</h3>
                    <p className="text-white">Sun Empire, Sun City Road<br />Pune - Maharashtra.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
