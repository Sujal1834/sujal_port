import React from 'react'
import profilephoto from '../assets/profile/profile1.png'
import { useEffect,useState } from 'react'

const section1 = () => {

    const fullText = 'Sujal Parmar';
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        if (!isDeleting) {
          // Typing forward
          setText(fullText.slice(0, index + 1));
          setIndex(index + 1);
  
          if (index + 1 === fullText.length) {
            setIsDeleting(true);
          }
        } else {
          // Deleting
          setText(fullText.slice(0, index - 1));
          setIndex(index - 1);
  
          if (index - 1 === 0) {
            setIsDeleting(false);
          }
        }
      }, 150);
  
      return () => clearTimeout(timer);
    }, [index, isDeleting]);


  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-around gap-40 px-10 py-20 bg-slate-100 mx-auto h-auto">
        
        <div className="relative w-64 h-64 sm:w-72 sm:h-72">
        <div className="absolute inset-0 rounded-full custom-gradient shadow-2xl shadow-black scale-110 animate-pulse"></div>
        <img src={profilephoto} alt="profile picture" className="relative w-200 h-90" />
        </div>
        
        <div className="text-center md:text-left flex flex-col gap-3 sm:items-left items-center">
          <p className="text-lg text-gray-700">Hello,</p>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              I am <span className="inline-block align-bottom text-left md:text-left sm:text-left text-bgcolor" style={{ width: '12ch' }}>{text}<span classNameName="blinking-cursor text-black font-thin ml-1">|</span> </span>
          </h1>
          <p className="mt-4 text-xl text-gray-800">MScIT Student / Tech Enthusiast</p>
        </div>

    </section>

  )
}

export default section1