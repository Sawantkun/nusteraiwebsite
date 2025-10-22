import React from 'react'
import Hero from '../sections/Hero'
import Features from '../sections/Features'
import About from '../sections/About'
import Pricing from '../sections/Pricing'
import Projects from '../sections/Projects'
import Services from '../sections/Services'
import CaseStudies from '../sections/CaseStudies'

const LandingPage = () => {
  return (
    <div className="pt-24 bg-gray-950">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="casestudies">
        <CaseStudies />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
    </div>
  )
}

export default LandingPage