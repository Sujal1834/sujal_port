import React,{useEffect} from 'react'
import Educard from './educard'
import deg from '../assets/result/Degree.jpg'
import res10 from '../assets/result/result_10.jpg'
import res12 from '../assets/result/result_12.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { IconSchool } from '@tabler/icons-react';

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,       // animation duration (ms)
      once: true,          // only animate once
      easing: 'ease-in-out',
    });
  }, []);
  return (
  <>
  <div className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 md:px-12 lg:px-24" id="education">

      <h2 className="text-center text-4xl font-extrabold text-gray-800 dark:text-white mb-12 relative">
        <span className='flex items-center justify-center'>
          <IconSchool size={50} strokeWidth={1.5} className="text-indigo-500" />&nbsp;
          EDUCATION</span>
        <span className="block mx-auto mt-3 w-24 h-1 bg-blue-600 rounded"></span>
      </h2>

      <div className="space-y-8">
        <div data-aos="fade-up" data-aos-delay="0">
        <Educard name="B.Sc. (CA & IT)" clgname="K.S. School of Business Management & Information Technology" result="Grade" val="A+" image={deg} view="Degree"/>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
        <Educard name="HSC" clgname="Gyanjyot Vidhyavihar" result="Marks" val="564/700" image={res12} view="Result"/>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
        <Educard name="SSC" clgname="Gyanjyot Vidhyavihar" result="Marks" val="437/600" image={res10} view="Result"/>
        </div>

      </div>
  </div>
</>
  )
}

export default Education

{/* <div className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-24" id="education">
  
//   <h2 className="text-center text-4xl font-extrabold text-gray-800 dark:text-white mb-12 relative">
//     EDUCATION
//     <span className="block mx-auto mt-3 w-24 h-1 bg-blue-600 rounded"></span>
//   </h2>

//   <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
   
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
//       <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">B.Sc. (CA & IT)</h3>
//       <p className="text-gray-700 dark:text-gray-300 mb-1">K.S. School of Business Management & IT</p>
//       <p className="text-sm text-gray-600 dark:text-gray-400">Grade: <span className="text-green-600 dark:text-green-400 font-medium">A+</span></p>
//       <div className="flex flex-col sm:flex-row gap-3 mt-4">
//         <a href="documents/degree.html" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
//           <img src="image/icons/see.png" alt="see" className="w-5 h-5" /> View
//         </a>
//         <a href="image/certificates/Degree.JPG" download="Degree_Certificate.jpg" className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300">
//           <img src="image/icons/down.png" alt="download" className="w-5 h-5" /> Download
//         </a>
//       </div>
//     </div>

//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
//       <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">HSC</h3>
//       <p className="text-gray-700 dark:text-gray-300 mb-1">Gyanjyot Vidhyavihar</p>
//       <p className="text-sm text-gray-600 dark:text-gray-400">Marks: <span className="text-green-600 dark:text-green-400 font-medium">564/700</span></p>
//       <div className="flex flex-col sm:flex-row gap-3 mt-4">
//         <a href="documents/12_result.html" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
//           <img src="image/icons/see.png" alt="see" className="w-5 h-5" /> View
//         </a>
//         <a href="image/certificates/result_12.JPG" download="12th_result.jpg" className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300">
//           <img src="image/icons/down.png" alt="download" className="w-5 h-5" /> Download
//         </a>
//       </div>
//     </div>

//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
//       <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">SSC</h3>
//       <p className="text-gray-700 dark:text-gray-300 mb-1">Gyanjyot Vidhyavihar</p>
//       <p className="text-sm text-gray-600 dark:text-gray-400">Marks: <span className="text-green-600 dark:text-green-400 font-medium">437/600</span></p>
//       <div className="flex flex-col sm:flex-row gap-3 mt-4">
//         <a href="documents/10_result.html" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
//           <img src="image/icons/see.png" alt="see" className="w-5 h-5" /> View
//         </a>
//         <a href="image/certificates/result_10.JPG" download="10th_result.jpg" className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300">
//           <img src="image/icons/down.png" alt="download" className="w-5 h-5" /> Download
//         </a>
//       </div>
//     </div>
//   </div>
</div> */}


 {/* <section id="education" className="bg-gradient-to-br from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6 sm:px-10 lg:px-24">
  
  <div className="text-center mb-16">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white">
      Education
    </h2>
    <div className="mt-4 h-1 w-24 mx-auto bg-blue-600 rounded"></div>
    <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
      My academic background and qualifications over the years.
    </p>
  </div>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    
    <div className="group bg-white/90 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">B.Sc. (CA & IT)</h3>
        <p className="text-gray-700 dark:text-gray-300">K.S. School of Business Management & IT</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Grade: <span className="font-medium text-green-600 dark:text-green-400">A+</span></p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <a href="documents/degree.html" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          <img src="image/icons/see.png" alt="see" className="w-5 h-5"/> View
        </a>
        <a href="image/certificates/Degree.JPG" download="Degree_Certificate.jpg" className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
          <img src="image/icons/down.png" alt="download" className="w-5 h-5"/> Download
        </a>
      </div>
    </div>

    <div className="group bg-white/90 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">HSC</h3>
        <p className="text-gray-700 dark:text-gray-300">Gyanjyot Vidhyavihar</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Marks: <span className="font-medium text-green-600 dark:text-green-400">564 / 700</span></p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <a href="documents/12_result.html" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          <img src="image/icons/see.png" alt="see" className="w-5 h-5"/> View
        </a>
        <a href="image/certificates/result_12.JPG" download="12th_result.jpg" className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
          <img src="image/icons/down.png" alt="download" className="w-5 h-5"/> Download
        </a>
      </div>
    </div>

    <div className="group bg-white/90 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">SSC</h3>
        <p className="text-gray-700 dark:text-gray-300">Gyanjyot Vidhyavihar</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Marks: <span className="font-medium text-green-600 dark:text-green-400">437 / 600</span></p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <a href="documents/10_result.html" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          <img src="image/icons/see.png" alt="see" className="w-5 h-5"/> View
        </a>
        <a href="image/certificates/result_10.JPG" download="10th_result.jpg" className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
          <img src="image/icons/down.png" alt="download" className="w-5 h-5"/> Download
        </a>
      </div>
    </div>
  </div>
</section>  */}