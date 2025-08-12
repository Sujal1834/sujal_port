import React from 'react'

const Procard = (props) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-110 transform transition-transform duration-1000">
          <img src={props.image} alt="Project 1" className="w-full h-60 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{props.name}</h3>
            <p className="text-gray-600 mb-3">{props.desc}</p>
            <p className="text-sm text-blue-600">{props.lang}</p>
          </div>
        </div>
  )
}

export default Procard