import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
    
        <Image src='https://media.githubusercontent.com/media/TejasBhati/portfolio/main/public/hero/tejas.png' width={200} height={200} priority alt='TEJASBHATI'  quality={90} />
     
    </Link>
  );
}

export default Logo;
