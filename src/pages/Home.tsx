import React from 'react';
import PageLayout from '../components/layout/PageLayout';


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
  
  return (
    <PageLayout>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white-900 mb-2 intro-text">Welcome to NowCast</h1>
            <p className="text-white-600 text-lg intro-text">Discover and join live events happening around the world</p>
          </div>
         
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
