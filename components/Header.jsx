'use client'
import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation';
import ThemeToggler from './ThemeToggler'
import Nav from './Nav'
import MobileNav from './MobileNav'

// const Header = () => {
//   const [header, setHeader] = useState(false);
//   const pathname = usePathname();
//   useEffect(() => {
//     const scrollYPos = window.addEventListener('scroll', () => {
//       window.scrollY > 50 ? setHeader(true) : setHeader(false);
//     });
//     // remove event
//     return () => window.removeEventListener('scroll', scrollYPos);
//   });
//   return (
//     <header className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent' :'py-6 dark:bg-transparent'}sticky top-0 z-30 transition-all`}>
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center">
//           <Logo />
//           <div className='flex items-center gap-x-6'>
//             {/*Nav*/}
//             <Nav containerStyles='hidden xl:flex gap-x-8 items-center' linkStyles='relative hover:text-primary transition-all' underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full' />
//             <ThemeToggler />
//             {/* mobile Nav*/}
//             <div className='xl:hidden'>
//               <MobileNav />
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once during component mount

  return (
    <header className={`${header ? 'py-5 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}>
      <div className="container mx-auto">
       <div className="flex justify-between items-center">
         <Logo />
         <div className='flex items-center gap-x-6'>
           {/*Nav*/}
           <Nav containerStyles='hidden xl:flex gap-x-8 items-center' linkStyles='relative hover:text-primary transition-all' underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full' />
          <ThemeToggler />
           {/* mobile Nav*/}
           <div className='xl:hidden'>
             <MobileNav />
           </div>
         </div>
      </div>
   </div>
    </header>
  );
};

export default Header;
