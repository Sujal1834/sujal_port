import React from 'react'

const Footer = () => {
  return (
    // <footer className="bg-gradient-to-b from-slate-900 from-0% via-violet-950 via-40% to-cyan-400 to-100% text-white pt-5 px-6 pb-20 sm:bg-gradient-to-r">
    <footer className="custom-gradient-b text-white pt-5 px-6 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-30">
          <div>
            <h4 className="text-lg font-semibold mb-2">Links</h4>
            <ul className="space-y-1">
              <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
              <li><a href="#education" className="hover:text-cyan-400">Education</a></li>
              <li><a href="project" className="hover:text-cyan-400">Project</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <ul className="space-y-1 text-gray-300">
              <li><a href="tel:9879666236" className="hover:text-cyan-400">Phone: 9879666236</a></li>
              <li><a href="mailto:parmarsujal1410@gmail.com" className="hover:text-cyan-400">Email: parmarsujal1410@gmail.com</a></li>
              <li>Address: Chandlodiya</li>
            </ul>
          </div>
        </div>

        {/* <div className="flex flex-col gap-3 w-full md:w-1/3">
          <span className="text-lg font-semibold">Send Feedback!</span>
          <div className="flex items-center border border-gray-700 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Your feedback..."
              className="w-full px-3 py-2 text-black focus:outline-none"
            />
            <button className="bg-white px-4 py-2 hover:bg-slate-400 transition">
              <img src={send} alt="Send" className="w-5 h-5" />
            </button>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer