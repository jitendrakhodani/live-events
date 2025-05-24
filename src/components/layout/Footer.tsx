import React from 'react';

import SocialBar from '../SocialBar';
const Footer: React.FC = () => {
  return (
    <footer className="footer border-t border-border py-3 container flex h-14 max-w-screen-2xl items-center justify-between">
         <div>
          <h3 className="text-lg font-medium text-foreground">NowCast</h3>
          <p className="text-sm text-foreground">
          {/* Drive Awareness. Deliver Impact. Connect through live events. */}
          Connect through live events.
          </p>
        </div>
       
        <div className="flex items-center gap-2 text-foreground">Connect with us: <SocialBar /></div>
        <div><p className="text-xs text-foreground">
            © {new Date().getFullYear()} NowCast. All rights reserved.
          </p></div> 
    </footer>
  );
};

//https://medium.com/@uidesign0005/the-role-of-a-live-streaming-agency-71e2ea24d5f4
//https://www.blushiftcreative.com/blogs/consistency-in-tiktok-live-streaming
export default Footer;
