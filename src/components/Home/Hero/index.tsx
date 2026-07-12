'use client'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Hero = () => {
  return (
    <section className='relative md:pt-44 pt-28 bg-white dark:bg-darklight bg-cover text-white overflow-hidden'>
      <div className='absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-blue-400/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl'></div>
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
        <div
          className='md:col-span-7 col-span-12 p-4 md:px-4 px-0 space-y-6 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='flex gap-2 items-center'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              Freelance Web Developer
            </span>
          </div>
          <h1 className='text-midnight_text font-bold dark:text-white text-4xl md:text-6xl md:leading-[1.15]'>
            I'm{' '}
            <span className='text-primary'>Maulid Mwalimu</span>
          </h1>
          <p className='text-grey dark:text-white/70 text-xl font-semibold max-w-xl'>
            Full-stack web developer with experience building modern web applications using Node.js, PHP, and Next.js.
          </p>
          <div className='flex items-center gap-4 flex-wrap'>
            <a
              href='#projects'
              className='py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition duration-300 px-8 inline-flex items-center gap-2'>
              View Projects
              <Icon icon='mdi:arrow-right' width='20' height='20' />
            </a>
            <a
              href='#contact'
              className='py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition duration-300 px-8'>
              Contact Me
            </a>
          </div>
          <div className='flex items-center gap-6 pt-4'>
            <div className='flex -space-x-2'>
              <div className='w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm border-2 border-white dark:border-darklight'>
                N
              </div>
              <div className='w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center text-green-600 font-bold text-sm border-2 border-white dark:border-darklight'>
                P
              </div>
              <div className='w-10 h-10 rounded-full bg-purple-400/20 flex items-center justify-center text-purple-600 font-bold text-sm border-2 border-white dark:border-darklight'>
                N
              </div>
            </div>
            <div>
              <p className='text-sm font-normal text-grey max-w-56 dark:text-white/50'>
                <span className='text-primary font-semibold'>Node.js</span> ·{' '}
                <span className='text-green-600 font-semibold'>PHP</span> ·{' '}
                <span className='text-purple-600 font-semibold'>Next.js</span>
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 col-span-12 flex items-center justify-center relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-full backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon icon='mdi:code-tags' width='48' height='48' className='text-primary' />
                </div>
                <h3 className="text-midnight_text dark:text-white font-bold text-2xl">1+</h3>
                <p className="text-grey dark:text-white/50 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
