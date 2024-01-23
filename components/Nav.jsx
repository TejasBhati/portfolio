//next links
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

//next hooks
const links = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'my projects' },
  { path: '/contact', name: 'contact' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        const isActive = path === link.path;

        return (
          <Link href={link.path} key={index}>
            <motion.div
              className={`capitalize ${linkStyles}`}
              style={{ position: 'relative' }}
            >
              <div>{link.name}</div>
              {isActive && (
                <motion.span
                  initial={{ y: '-100%' }}
                  animate={{ y: 0 }}
                  transition={{ type: 'tween' }}
                  layoutId='underline'
                  className={`${underlineStyles}`}
                />
              )}
            </motion.div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
