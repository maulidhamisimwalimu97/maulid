'use client'
import { Icon } from '@iconify/react'

const Contact = () => {
  return (
    <section className='overflow-x-hidden bg-darkmode dark:bg-darklight' id='contact'>
      <div className='container mx-auto max-w-6xl px-4 py-16'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-sm text-white'>
            Get In Touch
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-white text-center pt-7 pb-4 md:w-4/6 w-full m-auto'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Let's Work Together
        </h2>
        <p
          className='text-base text-white/50 text-center pb-12 max-w-2xl mx-auto'
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-duration='1000'>
          Have a project in mind? Let's build something amazing together.
        </p>
        <div className='max-w-3xl mx-auto'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
            <div
              className='bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='1000'>
              <div className='w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-5'>
                <Icon icon='mdi:phone' width='28' height='28' className='text-primary' />
              </div>
              <h3 className='text-white text-lg font-semibold mb-2'>Phone</h3>
              <a href='tel:0742700833' className='text-white/70 hover:text-primary transition-colors text-base'>
                0742700833
              </a>
            </div>
            <div
              className='bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300'
              data-aos='fade-up'
              data-aos-delay='400'
              data-aos-duration='1000'>
              <div className='w-14 h-14 rounded-xl bg-green-400/20 flex items-center justify-center mb-5'>
                <Icon icon='mdi:email' width='28' height='28' className='text-green-400' />
              </div>
              <h3 className='text-white text-lg font-semibold mb-2'>Email</h3>
              <a href='mailto:hamisimaulid064@gmail.com' className='text-white/70 hover:text-green-400 transition-colors text-base break-all'>
                hamisimaulid064@gmail.com
              </a>
            </div>
          </div>
          <div
            className='bg-white/5 backdrop-blur-sm rounded-xl p-8 mt-6 text-center hover:bg-white/10 transition-all duration-300'
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-duration='1000'>
            <div className='w-14 h-14 rounded-xl bg-purple-400/20 flex items-center justify-center mb-5 mx-auto'>
              <Icon icon='mdi:account-tie' width='28' height='28' className='text-purple-400' />
            </div>
            <h3 className='text-white text-lg font-semibold mb-3'>Maulid Mwalimu</h3>
            <p className='text-white/50 text-base mb-4'>
              Bachelor of Science in Information Technology and Systems
            </p>
            <div className='flex items-center justify-center gap-3'>
              <span className='text-white/50'>Available for freelance work</span>
              <span className='w-2 h-2 rounded-full bg-success animate-pulse'></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
