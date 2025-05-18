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
    <footer className="footer border-t border-border py-3">
      <div className="container max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-medium">NowCast</h3>
          <p className="text-sm text-foreground">
            Connecting people through live events.
          </p>
        </div>
       
        <div className="w-full">
          {/* <h4 className="text-md font-medium mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
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
          </div> */}
         
        </div>
        <div> <p className="mt-4 text-xs text-foreground">
            © {new Date().getFullYear()} NowCast. All rights reserved.
          </p></div>
      </div>
    </footer>
  );
};

//https://medium.com/@uidesign0005/the-role-of-a-live-streaming-agency-71e2ea24d5f4
//https://www.blushiftcreative.com/blogs/consistency-in-tiktok-live-streaming
export default Footer;
