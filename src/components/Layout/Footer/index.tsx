import React, { FC } from 'react'
import Link from 'next/link'

const Footer: FC = () => {
  return (
    <footer className='bg-darkmode relative z-1 border-t border-dark_border px-6'>
      <div className='container mx-auto max-w-6xl px-4 py-16'>
        <div className='grid md:grid-cols-12 grid-cols-1 gap-8'>
          <div className='md:col-span-4 col-span-12'>
            <Link href='/' className='flex items-center gap-2 mb-6'>
              <div className='w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm'>
                M
              </div>
              <span className='text-xl font-bold text-white'>Maulid</span>
            </Link>
            <p className='text-white/50 text-base leading-relaxed max-w-xs'>
              Passionate web developer specializing in Node.js, PHP, and Next.js. 
              Building modern web applications that make a difference.
            </p>
          </div>
          <div className='md:col-span-4 col-span-12'>
            <h3 className='text-lg font-bold text-white pb-6'>Quick Links</h3>
            <ul className='space-y-3'>
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/#about' },
                { label: 'Skills', href: '/#skills' },
                { label: 'Projects', href: '/#projects' },
                { label: 'Contact', href: '/#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className='text-white/50 hover:text-primary transition-colors text-base'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='md:col-span-4 col-span-12'>
            <h3 className='text-lg font-bold text-white pb-6'>Contact</h3>
            <div className='space-y-4'>
              <div>
                <p className='text-white/50 text-sm'>Phone</p>
                <Link
                  href='tel:0742700833'
                  className='text-white hover:text-primary transition-colors text-lg font-semibold'>
                  0742700833
                </Link>
              </div>
              <div>
                <p className='text-white/50 text-sm'>Email</p>
                <Link
                  href='mailto:hamisimaulid064@gmail.com'
                  className='text-white hover:text-primary transition-colors text-base break-all'>
                  hamisimaulid064@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center p-7 border-t border-solid border-dark_border'>
        <p className='text-base text-white/50'>
          © {new Date().getFullYear()} Maulid Mwalimu. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
