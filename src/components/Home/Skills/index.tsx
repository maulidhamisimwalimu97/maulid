'use client'
import { Icon } from '@iconify/react'

const skillsData = [
  { name: 'Node.js', icon: 'mdi:nodejs', color: 'text-green-600', bg: 'bg-green-400/10' },
  { name: 'PHP', icon: 'mdi:language-php', color: 'text-blue-600', bg: 'bg-blue-400/10' },
  { name: 'Next.js', icon: 'mdi:react', color: 'text-purple-600', bg: 'bg-purple-400/10' },
  { name: 'React', icon: 'mdi:react', color: 'text-cyan-600', bg: 'bg-cyan-400/10' },
  { name: 'TypeScript', icon: 'mdi:language-typescript', color: 'text-blue-500', bg: 'bg-blue-400/10' },
  { name: 'JavaScript', icon: 'mdi:language-javascript', color: 'text-yellow-500', bg: 'bg-yellow-400/10' },
  { name: 'Bootstrap', icon: 'mdi:bootstrap', color: 'text-purple-600', bg: 'bg-purple-400/10' },
  { name: 'MySQL', icon: 'mdi:database-outline', color: 'text-orange-500', bg: 'bg-orange-400/10' },
  { name: 'Tailwind CSS', icon: 'mdi:tailwind', color: 'text-teal-500', bg: 'bg-teal-400/10' },
  { name: 'Git', icon: 'mdi:git', color: 'text-red-500', bg: 'bg-red-400/10' },
  { name: 'REST API', icon: 'mdi:api', color: 'text-indigo-500', bg: 'bg-indigo-400/10' },
  { name: 'HTML/CSS', icon: 'mdi:language-html5', color: 'text-orange-500', bg: 'bg-orange-400/10' },
]

const Skills = () => {
  return (
    <section className='bg-white dark:bg-darklight' id='skills'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            Skills & Technologies
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-4 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Technologies I Work With
        </h2>
        <p
          className='text-base text-grey dark:text-white/50 md:text-center pb-12 max-w-2xl mx-auto'
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-duration='1000'>
          A comprehensive toolkit I use to bring ideas to life
        </p>
        <div className='grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-5'>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 80}`}
              data-aos-duration='800'
              className='md:col-span-3 sm:col-span-4 col-span-1 bg-section dark:bg-darkmode flex items-center gap-4 p-5 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group'>
              <div className={`w-12 h-12 rounded-lg ${skill.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon icon={skill.icon} width='24' height='24' className={skill.color} />
              </div>
              <span className='text-midnight_text dark:text-white font-semibold text-base'>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
