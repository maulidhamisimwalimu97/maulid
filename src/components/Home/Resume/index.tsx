'use client'
import { Icon } from '@iconify/react'
import { experience, education } from '@/app/api/data'

const Resume = () => {
  return (
    <section className='bg-section dark:bg-darkmode' id='resume'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-2 gap-12'>
          <div
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                Experience
              </span>
            </div>
            <h2 className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text pt-7 pb-8 dark:text-white'>
              Work Experience
            </h2>
            <div className='space-y-6'>
              {experience.map((item, index) => (
                <div
                  key={index}
                  data-aos='fade-up'
                  data-aos-delay={`${index * 200}`}
                  data-aos-duration='1000'
                  className='bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-primary/20'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 mt-1'>
                      <Icon icon='mdi:briefcase-outline' width='24' height='24' className='text-primary' />
                    </div>
                    <div className='flex-1'>
                      <div className='flex flex-wrap items-center gap-2 mb-1'>
                        <h3 className='text-lg font-bold text-midnight_text dark:text-white'>
                          {item.title}
                        </h3>
                        <span className='px-2 py-0.5 text-xs font-medium rounded-full bg-success/10 text-success'>
                          {item.type}
                        </span>
                      </div>
                      <p className='text-primary font-semibold text-base mb-1'>
                        {item.company}
                      </p>
                      <p className='text-grey dark:text-white/50 text-sm mb-3'>
                        {item.period}
                      </p>
                      <p className='text-grey dark:text-white/70 text-sm leading-relaxed'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                Education
              </span>
            </div>
            <h2 className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text pt-7 pb-8 dark:text-white'>
              Education
            </h2>
            <div className='space-y-6'>
              {education.map((item, index) => (
                <div
                  key={index}
                  data-aos='fade-up'
                  data-aos-delay={`${index * 200}`}
                  data-aos-duration='1000'
                  className='bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-primary/20'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-xl bg-purple-400/20 flex items-center justify-center shrink-0 mt-1'>
                      <Icon icon='mdi:school-outline' width='24' height='24' className='text-purple-400' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-lg font-bold text-midnight_text dark:text-white mb-1'>
                        {item.degree}
                      </h3>
                      <p className='text-primary font-semibold text-base mb-1'>
                        {item.institution}
                      </p>
                      <p className='text-grey dark:text-white/50 text-sm mb-3'>
                        {item.period}
                      </p>
                      <p className='text-grey dark:text-white/70 text-sm leading-relaxed'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className='mt-10'
              data-aos='fade-up'
              data-aos-delay='400'
              data-aos-duration='1000'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white mb-4'>
                Languages & Tools
              </h3>
              <div className='flex flex-wrap gap-2'>
                {['Node.js', 'PHP', 'Next.js', 'React', 'JavaScript', 'TypeScript', 'MySQL', 'Express', 'Tailwind CSS', 'Git'].map((tech, i) => (
                  <span
                    key={i}
                    className='px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary dark:bg-primary/20 hover:bg-primary hover:text-white transition-colors duration-300 cursor-default'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
