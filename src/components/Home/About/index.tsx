'use client'
import { Icon } from '@iconify/react'

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
              <div className='w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-2xl flex items-center justify-center'>
                <Icon icon='mdi:account-tie' width='120' height='120' className='text-primary/40' />
              </div>
              <div className='absolute -bottom-4 -right-4 bg-primary text-white rounded-xl p-4 shadow-lg'>
                <p className='text-2xl font-bold'>3+</p>
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
              I'm a passionate web developer with a <strong className='text-midnight_text dark:text-white'>Bachelor of Science in Information Technology and Systems</strong>. 
              With over 3 years of hands-on experience, I specialize in building robust, scalable, and user-friendly web applications.
            </p>
            <p className='text-grey dark:text-white/70 text-lg leading-relaxed'>
              My expertise spans across <strong className='text-midnight_text dark:text-white'>Node.js, PHP, and Next.js</strong>, 
              allowing me to deliver end-to-end solutions from concept to deployment. I'm driven by a passion for clean code, 
              modern architecture, and creating digital experiences that make a difference.
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
                  <p className='text-midnight_text dark:text-white font-semibold text-sm'>6+ Completed</p>
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
                  <Icon icon='mdi:server' width='20' height='20' className='text-amber-600' />
                </div>
                <div>
                  <p className='text-sm text-grey dark:text-white/50'>Backend</p>
                  <p className='text-midnight_text dark:text-white font-semibold text-sm'>Node.js & PHP</p>
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
