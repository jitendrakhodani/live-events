import React from 'react';


import Card from './Card';
import { Feature } from '../types/Feature';
import { Meteors } from './ui/meteros';
import { SparklesCore } from './ui/sparkels';

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  
  
  return (
    <Card className="w-[350px] h-[180px] shadow-lg shadow-blue-500/50 hover:shadow-2xl animate-fade-right animate-once animate-duration-1000 animate-ease-in">
    {/* <SparklesCore
     background="transparent"
     minSize={0.4}
     maxSize={1}
     particleDensity={100}
     className="w-full h-full"
     particleColor="#2563eb"
    /> */}
      {/* <CardHeader>
        <div className="flex justify-between items-start">
            <CardTitle className="mb-2 text-blue-400">{feature.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <CardDescription className="text-sm text-black-300">{feature.description}</CardDescription>
        </div>
      </CardContent>   */}
       
    </Card>
  );
};

export default FeatureCard;
