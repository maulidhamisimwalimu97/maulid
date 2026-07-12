'use client'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { getImgPath } from '@/utils/image'

const About = () => {
  return (
    <section className='bg-section dark:bg-darkmode' id='about'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            About Me
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-12 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Turning Ideas Into Digital Experiences
        </h2>
        <div className='grid md:grid-cols-12 grid-cols-1 gap-8 items-center'>
          <div
            className='md:col-span-5 col-span-12'
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='relative'>
              <div className='w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden'>
                <Image
                  src={getImgPath('/images/logo/maulid.jpeg')}
                  alt='Maulid Mwalimu'
                  width={500}
                  height={500}
                  quality={100}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='absolute -bottom-4 -right-4 bg-success text-white rounded-xl p-4 shadow-lg'>
                <p className='text-2xl font-bold'>1+</p>
                <p className='text-xs'>Years</p>
              </div>
            </div>
          </div>
          <div
            className='md:col-span-7 col-span-12 space-y-6'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <p className='text-grey dark:text-white/70 text-lg leading-relaxed'>
              I'm a passionate <strong className='text-midnight_text dark:text-white'>full-stack web developer</strong> with experience building efficient, scalable, and reliable web applications. 
              I work with technologies such as <strong className='text-midnight_text dark:text-white'>Next.js, Node.js, PHP, and MySQL</strong>, focusing on clean architecture, performance, and maintainable code.
            </p>
            <p className='text-grey dark:text-white/70 text-lg leading-relaxed'>
              I enjoy solving real-world technical problems, improving system reliability, and building digital solutions that support smooth user experiences. 
              As a freelance developer, I've worked with companies like <strong className='text-midnight_text dark:text-white'>Jaftech Company Limited</strong> and <strong className='text-midnight_text dark:text-white'>Global Horizon Company Limited</strong>, delivering end-to-end web solutions from concept to deployment.
            </p>
            <div className='grid grid-cols-2 gap-4 pt-4'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                  <Icon icon='mdi:school' width='20' height='20' className='text-primary' />
                </div>
                <div>
                  <p className='text-sm text-grey dark:text-white/50'>Education</p>
                  <p className='text-midnight_text dark:text-white font-semibold text-sm'>BSc IT & Systems</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-lg bg-green-400/10 flex items-center justify-center'>
                  <Icon icon='mdi:code-braces' width='20' height='20' className='text-green-600' />
                </div>
                <div>
                  <p className='text-sm text-grey dark:text-white/50'>Projects</p>
                  <p className='text-midnight_text dark:text-white font-semibold text-sm'>7+ Completed</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-lg bg-purple-400/10 flex items-center justify-center'>
                  <Icon icon='mdi:language-javascript' width='20' height='20' className='text-purple-600' />
                </div>
                <div>
                  <p className='text-sm text-grey dark:text-white/50'>Specialty</p>
                  <p className='text-midnight_text dark:text-white font-semibold text-sm'>Full-Stack Web</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center'>
                  <Icon icon='mdi:briefcase-outline' width='20' height='20' className='text-amber-600' />
                </div>
                <div>
                  <p className='text-sm text-grey dark:text-white/50'>Work</p>
                  <p className='text-midnight_text dark:text-white font-semibold text-sm'>Freelance Dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
