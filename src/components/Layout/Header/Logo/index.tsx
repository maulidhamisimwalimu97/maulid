import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link
      href='/home'
      aria-label='Maulid Mwalimu'
      className='flex items-center gap-2 group'>
      <span className='text-midnight_text dark:text-white font-extrabold text-lg md:text-2xl tracking-tight whitespace-nowrap group-hover:text-primary transition-colors duration-300'>
        Mwalimu Dev
      </span>
    </Link>
  );
};

export default Logo;
