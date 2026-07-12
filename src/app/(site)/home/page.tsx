import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import About from '@/components/Home/About';
import Skills from '@/components/Home/Skills';
import Resume from '@/components/Home/Resume';
import Projects from '@/components/Home/Projects';
import Contact from '@/components/Home/Contact';

export const metadata: Metadata = {
  title: "Maulid Mwalimu | Freelance Web Developer Portfolio",
  description: "Freelance web developer specializing in Node.js, PHP, and Next.js. Available for remote work.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </main>
  )
}
