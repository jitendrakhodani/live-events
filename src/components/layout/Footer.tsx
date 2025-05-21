import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer border-t border-border py-3 container flex h-14 max-w-screen-2xl items-center justify-between">
      
         <div>
          <h3 className="text-lg font-medium">NowCast</h3>
          <p className="text-sm text-foreground">
          {/* Drive Awareness. Deliver Impact. Connect through live events. */}
          Connect through live events.
          </p>
        </div>
       
        <div>
          <div className="flex space-x-4">
           <span className="text-md font-medium">Connect With Us</span>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </a>
          </div> 
          
        </div>
        <div><p className="text-xs text-foreground">
            © {new Date().getFullYear()} NowCast. All rights reserved.
          </p></div> 
      
    </footer>
  );
};

//https://medium.com/@uidesign0005/the-role-of-a-live-streaming-agency-71e2ea24d5f4
//https://www.blushiftcreative.com/blogs/consistency-in-tiktok-live-streaming
export default Footer;
