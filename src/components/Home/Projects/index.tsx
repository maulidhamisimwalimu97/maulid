'use client'
import { Icon } from '@iconify/react'

const projectsData = [
  {
    title: 'Auntie Vee Tourism Website',
    tech: ['PHP', 'MySQL', 'HTML/CSS'],
    description: 'A comprehensive tourism platform showcasing travel destinations, tour packages, and booking management for Auntie Vee Tours.',
    color: 'from-blue-500 to-cyan-500',
    icon: 'mdi:airplane'
  },
  {
    title: 'Habitat Herous Tourism Website',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    description: 'Tourism website featuring wildlife habitats, conservation information, and safari booking system for Habitat Herous.',
    color: 'from-green-500 to-emerald-500',
    icon: 'mdi:tree'
  },
  {
    title: 'Family Genealogy',
    tech: ['Node.js', 'MongoDB', 'Express'],
    description: 'A family tree management system built with Node.js that allows users to trace and document their family lineage.',
    color: 'from-purple-500 to-pink-500',
    icon: 'mdi:family-tree'
  },
  {
    title: 'AfyaStock',
    tech: ['Node.js', 'Express', 'MongoDB'],
    description: 'Healthcare inventory management system for tracking medical supplies, stock levels, and automated reordering.',
    color: 'from-red-500 to-orange-500',
    icon: 'mdi:medical-bag'
  },
  {
    title: 'TangaRide',
    tech: ['Node.js', 'Next.js', 'MongoDB'],
    description: 'Ride-hailing and transportation platform built with Next.js and Node.js for seamless travel booking.',
    color: 'from-yellow-500 to-amber-500',
    icon: 'mdi:car'
  },
  {
    title: 'NurunJema Website',
    tech: ['Next.js', 'Node.js', 'Tailwind CSS'],
    description: 'A modern web application built with Next.js and Node.js, delivering a responsive and engaging user experience.',
    color: 'from-indigo-500 to-purple-500',
    icon: 'mdi:web'
  }
]

const Projects = () => {
  return (
    <section className='bg-section dark:bg-darkmode' id='projects'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            My Projects
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-4 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Featured Work
        </h2>
        <p
          className='text-base text-grey dark:text-white/50 md:text-center pb-12 max-w-2xl mx-auto'
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-duration='1000'>
          A collection of projects demonstrating my expertise across various domains
        </p>
        <div className='grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7'>
          {projectsData.map((project, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 150}`}
              data-aos-duration='1000'
              className='md:col-span-6 sm:col-span-4 col-span-1 bg-white dark:bg-darkmode rounded-xl overflow-hidden shadow-service hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group'>
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className='p-7'>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon icon={project.icon} width='28' height='28' className='text-white' />
                </div>
                <h3 className='text-xl font-bold text-midnight_text dark:text-white mb-3'>
                  {project.title}
                </h3>
                <p className='text-grey dark:text-white/70 text-base leading-relaxed mb-5'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary dark:bg-primary/20'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
