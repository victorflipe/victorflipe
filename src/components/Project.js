import React from "react"

const Project = ({ name, link, children}) => (
    <a className="p-5 block border rounded-xl bg-orange-50 hover:bg-orange-100 hover:border hover:border-orange-300 hover:rounded-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none delay-300 cursor-pointer w-[20rem] text-center h-[11rem] shadow-md" href={link} rel="noreferrer" target="_blank">
      <p className="font-semibold text-lg">{name}</p> 
      <div className=" h-full text-gray-500 text-sm flex items-center">
        {children}
      </div>
    </a>
)

export default Project