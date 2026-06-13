import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className='flex items-center gap-2'>
      <div className='w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm'>
        M
      </div>
      <span className='text-xl font-bold text-midnight_text dark:text-white'>
        Maulid
      </span>
    </Link>
  );
};

export default Logo;
