import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
    
        <Image src='https://media.githubusercontent.com/media/TejasBhati/portfolio/5a0962c6ff03ee91d2817253d820ff7dc46fe9b3/public/tejaslogo.svg' width={200} height={200} priority alt='TEJASBHATI'  quality={90} />
     
    </Link>
  );
}

export default Logo;
