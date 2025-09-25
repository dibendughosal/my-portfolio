import Contact from "./Contact"
import Gallery from "./Gallery"
import HeroSection from "./HeroSection"
import Projects from "./Projects"
import { ScrollReveal } from "./ScrollReveal"
import Skills from "./Skills"

const Body = () => {
  return (
    <div className="max-w-full -z-2">
      <HeroSection/>
      <ScrollReveal>
        <Projects/>
      </ScrollReveal>
      <ScrollReveal>
        <Skills/>
      </ScrollReveal>
      <ScrollReveal>
        <Gallery/> 
      </ScrollReveal>
      <ScrollReveal>
        <Contact/>
      </ScrollReveal>
    </div>
  )
}

export default Body;
