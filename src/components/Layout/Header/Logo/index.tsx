import Link from 'next/link';
import Image from 'next/image';
import { getImgPath } from '@/utils/image';

const Logo: React.FC = () => {
  return (
    <Link href="/home" className='flex items-center overflow-visible'>
      <Image
        src={getImgPath('/images/logo/logo.png')}
        alt='Maulid'
        width={150}
        height={60}
        className='h-16 w-auto object-contain -my-4'
        priority
      />
    </Link>
  );
};

export default Logo;
