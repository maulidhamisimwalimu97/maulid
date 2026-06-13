import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import About from '@/components/Home/About';
import Skills from '@/components/Home/Skills';
import Projects from '@/components/Home/Projects';
import Contact from '@/components/Home/Contact';

export const metadata: Metadata = {
  title: "Maulid Mwalimu | Web Developer Portfolio",
  description: "Passionate web developer specializing in Node.js, PHP, and Next.js",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
