import React from 'react';
import { Card } from "../../components/ui/card"
import { CircularProgress } from "../../components/ui/circular-progress";

interface CountdownClockProps {
  targetDate: Date;
}

interface TimeUnit {
  value: number;
  label: string;
  max: number;
}

const CountdownClock: React.FC<CountdownClockProps> = ({ targetDate }) => {
  const [timeUnits, setTimeUnits] = React.useState<TimeUnit[]>([
    { value: 0, label: 'Days', max: 365 },
    { value: 0, label: 'Hours', max: 24 },
    { value: 0, label: 'Minutes', max: 60 },
    { value: 0, label: 'Seconds', max: 60 }
  ]);

  React.useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeUnits([
          { value: days, label: 'Days', max: 365 },
          { value: hours, label: 'Hours', max: 24 },
          { value: minutes, label: 'Minutes', max: 60 },
          { value: seconds, label: 'Seconds', max: 60 }
        ]);
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial update

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 pt-2 countdown-clock relative">
      <div className='absolute -top-4 left-4 bg-white/10 rounded-sm p-1 title text-white'>Event Begins In:</div>
      {timeUnits.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center justify-center transition-colors">
          <CircularProgress 
            value={(unit.value / unit.max) * 100}
            size={65}
            strokeWidth={8}
            className="mb-2"
          >
            <div className="text-xl font-bold">{unit.value}</div>
          </CircularProgress>
          <div className="text-sm font-medium text-white">{unit.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownClock;
