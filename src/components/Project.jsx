import React,{useEffect} from 'react'
import Procard from './Procard'
import proj1 from '../assets/project/project1.png'
import proj2 from '../assets/project/project2.png'
import proj3 from '../assets/project/project3.JPG'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Project = () => {
  useEffect(() => {
      AOS.init({
        duration: 500,       // animation duration (ms)
        once: true,          // only animate once
        easing: 'ease-in-out',
      });
    }, []);
  return (
    <>
    <div className="bg-slate-200 py-20 px-10 sm:px-6 lg:px-8" id='project'>
      <h2 className="text-center text-4xl font-extrabold text-gray-800 dark:text-white mb-12 relative">
        PROJECT
        <span className="block mx-auto mt-3 w-24 h-1 bg-blue-600 rounded"></span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div data-aos="fade-up" data-aos-delay="0">
          <Procard name="One" desc="hello this is my first project" lang="HTML • CSS • JavaScript" image={proj1}/>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <Procard name="Two" desc="hello this is my second project" lang="React • Tailwind CSS" image={proj2}/>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <Procard name="Three" desc="hello this is my third project" lang="Next.js • TypeScript" image={proj3}/>
        </div>

      </div>
    </div>
    </>
  )
}

export default Project