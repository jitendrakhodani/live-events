import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import FeatureCard from '@/components/FeatureCard';
import { cn } from '@/lib/utils';
import { Meteors } from '@/components/ui/meteros';
import { Sparkles } from '@/components/Sparkels';

import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { UserRoundCheck, TvMinimalPlay, CalendarClock, ChartPie, BellRing, Vote } from 'lucide-react';


const features = [
  {
    title: 'Live Event Streaming',
    description: 'Easily stream your events through YouTube Live with embedded video support for a seamless user experience.',
    icon: <TvMinimalPlay color='#4e80e4' size={32} />
  },
  {
    title: 'Secure Access & Registration',
    description: 'Invite-only access, gated registration, and audience verification features.',
    icon: <UserRoundCheck color='#4e80e4' size={32} />
  },
  {
    title: 'Event Management',
    description: 'One place to create, manage, and track all your events.',
    icon: <CalendarClock color='#4e80e4' size={32} />
  },
  {
    title: 'Audience Analytics',
    description: 'Get real-time insights on registrations, attendance, and engagement with detailed business metrics. ',//Know who watched what, when, and for how long.
    icon: <ChartPie color='#4e80e4' size={32} />
  },
  {
    title: 'Automated Invitations & Reminders',
    description: 'Integrated email invites, calendar links, and real-time reminders.',
    icon: <BellRing color='#4e80e4' size={32} />

  },
  {
    title: 'Interactive Q&A & Polls',
    description: 'Enable optional interactivity layers on top of the YouTube stream.',
    icon: <Vote color='#4e80e4' size={32} />
  }
];

const featureBg = [
  '/images/feature_bg.jpeg',
  '/images/feature_bg1.jpeg',
  '/images/feature_bg2.jpeg',
  '/images/feature_bg3.jpeg',
  '/images/feature_bg4.jpeg',
  '/images/feature_bg5.jpeg'
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === featureBg.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
        <div className="mx-auto px-4 py-8">
       
        {/* <Meteors number={20} /> */}
        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
        <div className="relative">
       
          {/* Background starts here */}
            <div className='absolute -top-80 right-5'>
              <svg width="451" height="651" viewBox="0 0 451 451" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none h-[90%]"><path fillRule="evenodd" clipRule="evenodd" d="M0 650.5V0.5H1V650.5H0Z" fill="url(#paint0_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M50 650.5V0.5H51V650.5H50Z" fill="url(#paint1_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M100 650.5V0.5H101V650.5H100Z" fill="url(#paint2_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M150 650.5V0.5H151V650.5H150Z" fill="url(#paint3_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M200 650.5V0.5H201V650.5H200Z" fill="url(#paint4_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M250 650.5V0.5H251V650.5H250Z" fill="url(#paint5_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M300 650.5V0.5H301V650.5H300Z" fill="url(#paint6_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M350 650.5V0.5H351V650.5H350Z" fill="url(#paint7_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M400 650.5V0.5H401V650.5H400Z" fill="url(#paint8_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M450 650.5V0.5H451V650.5H450Z" fill="url(#paint9_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M500 650.5V0.5H501V650.5H500Z" fill="url(#paint10_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M550 650.5V0.5H551V650.5H550Z" fill="url(#paint11_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M600 650.5V0.5H601V650.5H600Z" fill="url(#paint12_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650 650.5V0.5H651V650.5H650Z" fill="url(#paint13_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 1H0.5V0H650.5V1Z" fill="url(#paint14_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 51H0.5V50H650.5V51Z" fill="url(#paint15_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 101H0.5V100H650.5V101Z" fill="url(#paint16_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 151H0.5V150H650.5V151Z" fill="url(#paint17_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 201H0.5V200H650.5V201Z" fill="url(#paint18_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 251H0.5V250H650.5V251Z" fill="url(#paint19_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 301H0.5V300H650.5V301Z" fill="url(#paint20_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 351H0.5V350H650.5V351Z" fill="url(#paint21_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 401H0.5V400H650.5V401Z" fill="url(#paint22_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 451H0.5V450H650.5V451Z" fill="url(#paint23_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 501H0.5V500H650.5V501Z" fill="url(#paint24_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 551H0.5V550H650.5V551Z" fill="url(#paint25_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 601H0.5V600H650.5V601Z" fill="url(#paint26_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 651H0.5V650H650.5V651Z" fill="url(#paint27_radial_2007_2664)" fillOpacity="0.8"></path><path d="M350 501H301V550H350V501Z" fill="white" fillOpacity="0.02"></path><path d="M450 301H401V350H450V301Z" fill="white" fillOpacity="0.02"></path><path d="M400 101H351V150H400V101Z" fill="white" fillOpacity="0.02"></path>
                <defs>
                  <radialGradient id="paint0_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint1_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint2_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint3_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint4_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint5_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint6_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint7_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint8_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint9_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint10_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint11_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint12_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint13_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint14_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint15_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint16_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint17_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint18_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint19_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint20_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint21_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint22_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint23_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint24_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint25_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint26_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint27_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient>
                </defs>
              </svg>
            </div>
            <div className='absolute top-[80px] right-[180px]'>
              <svg width="451" height="651" viewBox="0 0 451 451" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none h-[90%]"><path fillRule="evenodd" clipRule="evenodd" d="M0 650.5V0.5H1V650.5H0Z" fill="url(#paint0_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M50 650.5V0.5H51V650.5H50Z" fill="url(#paint1_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M100 650.5V0.5H101V650.5H100Z" fill="url(#paint2_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M150 650.5V0.5H151V650.5H150Z" fill="url(#paint3_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M200 650.5V0.5H201V650.5H200Z" fill="url(#paint4_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M250 650.5V0.5H251V650.5H250Z" fill="url(#paint5_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M300 650.5V0.5H301V650.5H300Z" fill="url(#paint6_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M350 650.5V0.5H351V650.5H350Z" fill="url(#paint7_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M400 650.5V0.5H401V650.5H400Z" fill="url(#paint8_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M450 650.5V0.5H451V650.5H450Z" fill="url(#paint9_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M500 650.5V0.5H501V650.5H500Z" fill="url(#paint10_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M550 650.5V0.5H551V650.5H550Z" fill="url(#paint11_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M600 650.5V0.5H601V650.5H600Z" fill="url(#paint12_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650 650.5V0.5H651V650.5H650Z" fill="url(#paint13_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 1H0.5V0H650.5V1Z" fill="url(#paint14_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 51H0.5V50H650.5V51Z" fill="url(#paint15_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 101H0.5V100H650.5V101Z" fill="url(#paint16_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 151H0.5V150H650.5V151Z" fill="url(#paint17_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 201H0.5V200H650.5V201Z" fill="url(#paint18_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 251H0.5V250H650.5V251Z" fill="url(#paint19_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 301H0.5V300H650.5V301Z" fill="url(#paint20_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 351H0.5V350H650.5V351Z" fill="url(#paint21_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 401H0.5V400H650.5V401Z" fill="url(#paint22_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 451H0.5V450H650.5V451Z" fill="url(#paint23_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 501H0.5V500H650.5V501Z" fill="url(#paint24_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 551H0.5V550H650.5V551Z" fill="url(#paint25_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 601H0.5V600H650.5V601Z" fill="url(#paint26_radial_2007_2664)" fillOpacity="0.8"></path><path fillRule="evenodd" clipRule="evenodd" d="M650.5 651H0.5V650H650.5V651Z" fill="url(#paint27_radial_2007_2664)" fillOpacity="0.8"></path><path d="M350 501H301V550H350V501Z" fill="white" fillOpacity="0.02"></path><path d="M450 301H401V350H450V301Z" fill="white" fillOpacity="0.02"></path><path d="M400 101H351V150H400V101Z" fill="white" fillOpacity="0.02"></path>
                <defs>
                  <radialGradient id="paint0_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint1_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint2_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint3_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint4_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint5_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint6_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint7_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint8_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint9_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint10_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint11_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint12_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint13_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint14_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint15_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint16_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint17_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint18_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint19_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint20_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint21_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint22_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint23_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint24_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint25_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint26_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint27_radial_2007_2664" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(326 326) rotate(90) scale(325 326)"><stop stopColor="#2B2E41" stopOpacity="0.23"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient>
                </defs>
              </svg>
            </div>
            </div>
          <div className='flex justify-center'>
            <div>
              <Sparkles />
              {/* <div className="mb-8 absolute z-10">
                <p className="text-2xl animate-fade-up bg-gradient-to-l inline-block from-blue-600 via-[#6e8ae9] to-[#9932cc] bg-clip-text text-transparent">Discover and join live events happening around the world</p>
              </div>
             */}
            </div>
         
          </div>
          {/* Background ends here */}
          {/* <div className="mb-8 absolute">
          <span className="relative flex size-3 rotate-45 top-[200px] right-[300px]">
            <span className="absolute inline-flex h-full w-full animate-[ping_2s_ease-in-out_infinite]  bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex size-3 opacity-50 bg-sky-500"></span>
          </span>
          </div> */}
          {/* <AnimationContainer className="top-[120px] left-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" opacity="0.5" width="52px" height="52px" viewBox="0 0 24 24" fill="none" color="#0ea5e9" stroke-width="2"><path d="M3 12C9.26752 12 12 9.36306 12 3C12 9.36306 14.7134 12 21 12C14.7134 12 12 14.7134 12 21C12 14.7134 9.26752 12 3 12Z" fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" stroke-linejoin="round"/></svg>
          </AnimationContainer>
           <AnimationContainer className="top-[400px] right-[100px]">
            <svg xmlns="http://www.w3.org/2000/svg" opacity="0.6" width="52px" height="52px" viewBox="0 0 24 24" stroke-width="2" fill="none" color="#0ea5e9"><g clip-path="url(#clip0_4161_11243)"><path fillRule="evenodd" clipRule="evenodd" d="M12 3.25C7.16751 3.25 3.25 7.16751 3.25 12C3.25 16.8325 7.16751 20.75 12 20.75C16.8325 20.75 20.75 16.8325 20.75 12C20.75 7.16751 16.8325 3.25 12 3.25ZM6.53446 16.0852C6.13404 16.1912 5.89536 16.6018 6.00136 17.0022C6.10736 17.4026 6.51789 17.6413 6.91831 17.5353C8.84734 17.0246 11.1324 16.1498 13.4861 14.9763C15.8301 13.8076 17.8965 12.5151 19.4629 11.2864C19.7888 11.0307 19.8457 10.5593 19.5901 10.2334C19.3344 9.90748 18.863 9.85052 18.5371 10.1062C17.0645 11.2613 15.0874 12.5018 12.8168 13.6339C10.5367 14.7707 8.34755 15.6053 6.53446 16.0852Z" fill="#0ea5e9"/><path d="M20.3362 6.75517C19.692 6.7149 18.7864 6.81696 17.6707 7.07848L17.3284 5.61807C18.5107 5.34091 19.5777 5.20483 20.4298 5.25809C21.221 5.30754 22.1187 5.54277 22.5088 6.3253C22.8733 7.05631 22.5866 7.85359 22.2063 8.47634C21.8023 9.13788 21.1496 9.84681 20.3373 10.5618L19.3462 9.43583C20.1058 8.76729 20.6337 8.17332 20.9261 7.69458C21.2421 7.17704 21.1674 6.99665 21.1664 6.9946C21.1637 6.98919 21.0413 6.79924 20.3362 6.75517Z" fill="#0ea5e9"/><path d="M5.83733 17.7912C4.77744 18.0097 3.81846 18.1043 3.04701 18.0288C2.3208 17.9577 1.51151 17.7069 1.14704 16.9759C0.757762 16.1951 1.10781 15.3387 1.54249 14.6784C2.01041 13.9677 2.75773 13.1996 3.68638 12.4243L4.64771 13.5757C3.77169 14.3071 3.14866 14.9666 2.79537 15.5032C2.40884 16.0904 2.48682 16.3013 2.48945 16.3066C2.49047 16.3086 2.58957 16.4769 3.19309 16.5359C3.75138 16.5906 4.54349 16.5264 5.53452 16.3221L5.83733 17.7912Z" fill="#0ea5e9"/></g><defs><clipPath id="clip0_4161_11243"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
          </AnimationContainer>
       <AnimationContainer className="top-[80px] left-[200px]">
            <svg xmlns="http://www.w3.org/2000/svg" opacity="0.5" width="52px" height="52px" viewBox="0 0 24 24" stroke-width="2" fill="none" color="#0ea5e9"><path fillRule="evenodd" clipRule="evenodd" d="M12 4.15039C10.8087 4.15039 9.42076 4.17798 8.06649 4.21628L8.01146 4.21784C6.63265 4.25681 5.52112 4.28823 4.64461 4.43318C3.73199 4.58411 2.97386 4.87211 2.36772 5.49563C1.75996 6.12082 1.49451 6.89404 1.3699 7.81907C1.24996 8.70944 1.24998 9.83697 1.25 11.2382V11.2382V12.7627V12.7627C1.24998 14.1639 1.24996 15.2914 1.3699 16.1818C1.4945 17.1068 1.75996 17.88 2.36771 18.5052C2.97384 19.1287 3.73195 19.4167 4.64456 19.5676C5.52106 19.7126 6.63258 19.744 8.01137 19.783H8.0114L8.06639 19.7846C9.42068 19.8229 10.8087 19.8505 12 19.8505C13.1913 19.8505 14.5793 19.8229 15.9336 19.7846L15.9886 19.783H15.9886C17.3674 19.744 18.4789 19.7126 19.3554 19.5676C20.2681 19.4167 21.0262 19.1287 21.6323 18.5052C22.24 17.88 22.5055 17.1068 22.6301 16.1818C22.75 15.2914 22.75 14.1639 22.75 12.7627V11.2381C22.75 9.83696 22.75 8.70944 22.6301 7.81907C22.5055 6.89404 22.24 6.12082 21.6323 5.49563C21.0261 4.87211 20.268 4.58411 19.3554 4.43318C18.4789 4.28823 17.3674 4.25681 15.9885 4.21784L15.9335 4.21628C14.5792 4.17798 13.1913 4.15039 12 4.15039ZM10.8721 14.6512C10.64 14.7838 10.3548 14.7829 10.1236 14.6487C9.89232 14.5145 9.75 14.2674 9.75 14V10C9.75 9.73265 9.89232 9.48551 10.1236 9.35132C10.3548 9.21713 10.64 9.21617 10.8721 9.34882L14.3721 11.3488C14.6058 11.4823 14.75 11.7309 14.75 12C14.75 12.2691 14.6058 12.5177 14.3721 12.6512L10.8721 14.6512Z" fill="#0ea5e9"/></svg>
          </AnimationContainer>
         <AnimationContainer className="top-[200px] right-[100px] translate-[y]">
            <svg xmlns="http://www.w3.org/2000/svg" width="52px" height="52px" viewBox="0 0 24 24" stroke-width="2" fill="none" color="#0ea5e9"><path d="M7 18V17C7 14.2386 9.23858 12 12 12V12C14.7614 12 17 14.2386 17 17V18" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 18V17C1 15.3431 2.34315 14 4 14V14" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 18V17C23 15.3431 21.6569 14 20 14V14" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </AnimationContainer>  */}
          {/* <div className='flex w-[80%] justify-left flex-wrap gap-4'>
            {features.map((feature, index) => (
              <>
              <FeatureCard key={index} feature={feature} />
              
              </>
            ))}
          </div> */}
          <div className="h-[540px] min-h-[1em] ml-8 mt-8">
             <motion.div 
               className="px-4 py-2 w-[800px]"
              initial={{ x: -100 }}
              animate={{ x: 10 }}
              transition={{ duration: 1 }}
             >
                  <motion.h1 
                  className="text-3xl font-bold mb-4 mt-4 text-blue-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}  
                  >Broadcast High-Impact Enterprise Events</motion.h1>
                    <motion.p 
                    className="text-gray-600 text-xl mb-4 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                    >Stream product launches, annual meetings, and announcements directly to your audience via YouTube Live—branded, reliable, and interactive with NowCast.</motion.p>
                  <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                  transition={{ duration: 1, delay: 0.5 }}
                >
                    <Button className="mt-4 mb-4 bg-blue-600 hover:bg-blue-700 text-white" onClick={() => navigate('/events/create')}>Start Streaming Smarter</Button>
                    <Link to="/contact" className="ml-8 mt-4 mb-4  text-blue-600">Request a Demo</Link>
                </motion.div>
                </motion.div>
                <motion.div 
                  className="absolute top-[200px] right-0 hero-bg w-[500px]" 
                  initial={{ right: -100 }} animate={{ right: 10 }} 
                  transition={{ duration: 1 }}
                >
                    <img src='/images/people_ws.jpeg' alt="People at an event" />
                </motion.div>
        </div>
        </motion.div>
        <motion.h1 
                  className="text-3xl font-bold mb-4 mt-4 text-blue-600  ml-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  >Platform Features</motion.h1>
        <div className='flex justify-left items-center'>
       
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className='flex flex-wrap gap-4 justify-left ml-8 w-[70%]'
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </motion.div>
          <div className="relative h-[340px] w-[550px] overflow-hidden ml-8 mt-4 right-8">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <img 
                  src={featureBg[currentImageIndex]} 
                  alt="Feature showcase" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
                </div>
      </div>
    </PageLayout>
  );
};

export default Home;
