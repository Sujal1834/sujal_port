import React from 'react'
import seeimg from '../assets/icons/see.png'
import downimg from '../assets/icons/down.png'

const educard = (props) => {
  return (
    <div className="bg-slate-200  rounded-lg p-6 md:p-8 shadow-md hover:shadow-xl transition duration-300">
        <div className="space-y-2">
            <p className="text-xl sm:text-2xl font-semibold text-blue-700 ">{props.name}</p>
            <p className="text-gray-700 ">{props.clgname}</p>
            <p className="text-sm text-gray-600 ">{props.result} : <span className="font-medium text-green-600">{props.val}</span></p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a href={props.image} className="flex items-center gap-2 text-blue-600 hover:text-blue-800  transition">
                <img src={seeimg} alt="see" className="w-5 h-5" /> View {props.view}
              </a>
              <a href={props.image} download={props.image} className="flex items-center gap-2 text-green-600 hover:text-green-800 transition">
                <img src={downimg} alt="download" className="w-5 h-5" /> Download
              </a>
            </div>
        </div>
    </div> 
  )
}

export default educard