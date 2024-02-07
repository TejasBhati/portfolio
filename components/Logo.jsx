import Link from 'next/link';
import Image from 'next/image';
import TejasLogo from '@/public/logo_tejas.svg'

const Logo = () => {
  return (
    <Link href='/'>
    
        <Image src={TejasLogo} width={200} height={200} priority alt='' />
     
    </Link>
  );
}

export default Logo;
