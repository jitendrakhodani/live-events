import React from 'react';


import Card from './Card';
import { Feature } from '../types/Feature';
import { Meteors } from './ui/meteros';
import { SparklesCore } from './ui/sparkels';
import { CardHeader, CardTitle, CardContent, CardDescription } from "./ui/card";

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  
  
  return (
    <Card className="w-[370px] h-[130px] shadow-lg shadow-blue-500/50 hover:shadow-2xl">
     <SparklesCore
     background="transparent"
     minSize={1}
     maxSize={2}
     particleDensity={20}
     className="w-[370px] h-[130px] absolute"
     particleColor="#2563eb"
    />  
       <CardHeader>
        <div className="flex items-center">
          {feature.icon && (
            <div className="flex items-center">
              {feature.icon}
            </div>
          )}
            <CardTitle className="mb-2 pt-2 ml-4 text-[#4e80e4]">{feature.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <CardDescription className="text-sm text-black-300">{feature.description}</CardDescription>
        </div>
      </CardContent>
       
    </Card>
  );
};

export default FeatureCard;
