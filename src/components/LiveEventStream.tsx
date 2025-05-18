import React, { useState } from 'react';
import YouTube from 'react-youtube';
import EventCountdown from './EventCountdown';
import LiveChat from './LiveChat';

interface LiveEventStreamProps {
  videoId: string;
  eventStartTime: Date;
}

const LiveEventStream: React.FC<LiveEventStreamProps> = ({ videoId, eventStartTime }) => {
  const [isEventLive, setIsEventLive] = useState(false);

  const opts = {
    height: '720',
    width: '1280',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event: { target: any }) => {
    // Access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-3 gap-4">
      <div className="col-span-2">
        {isEventLive ? (
          <YouTube videoId={videoId} opts={opts} onReady={onReady} />
        ) : (
          <EventCountdown eventStartTime={eventStartTime} />
        )}
      </div>
      <div>
        <LiveChat />
      </div>
    </div>
  );
};

export default LiveEventStream;
