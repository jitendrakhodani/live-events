import React from 'react';
import { cn } from '../../lib/utils';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "h-screen w-full bg-white bg-[radial-gradient(#c4c9d3b5_1px,transparent_1px)] [background-size:16px_16px]",
      className
    )}>
      {children}
    </div>
  );
};
// linear-gradient(96deg, #53b2fe, #065af3)
export default PageLayout;


{/* <div className="my-5 mr-5 relative overflow-hidden" >

<label htmlFor="website" className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${focused === 4 ? "from-blue-400 to-purple-400" : "from-gray-600 to-gray-600"}`}>Company website</label>

<input type="text" name="website" id="website" placeholder="www.my-website.com"
  className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
  onFocus={() => setFocused(4)}
  onBlur={() => setFocused(null)}
/>

<span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ease-in transform ${focused === 4 ? "w-full" : "w-0"}`} aria-hidden="true"/>
</div> */}


// <div className="my-5 mr-5 relative overflow-hidden" >
        
//         <label htmlFor="phone-number" className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${focused === 6 ? "from-purple-400 to-red-400" : "from-gray-600 to-gray-600"}`}>Phone number</label>
        
//         <input type="text" name="phone-number" id="phone-number" placeholder="(+262) 639-429662"
//           className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
//           onFocus={() => setFocused(6)}
//           onBlur={() => setFocused(null)}
//         />
        
//         <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-red-400 transition-all duration-300 ease-in transform ${focused === 6 ? "w-full" : "w-0"}`} aria-hidden="true"/>
//       </div>