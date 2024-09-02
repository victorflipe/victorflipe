import * as React from 'react'

const Technology = ({name, type, active, children}) => {
    
    return (
        <div className={`technology flex flex-col items-center justify-evenly w-32 h-32 border rounded-lg border-gray-200 shadow-sm cursor-pointer backdrop-blur-sm bg-white/40`}>
            
            {children}
            
            <div className='flex flex-col items-center'>
                <div>
                    <span className={`${active ? "text-gray-500" : "text-gray-400"} text-t font-semibold`}>{name}</span>
                    <span className={`absolute inline-flex h-1 w-2 rounded-full ${active ? "bg-green-500" : "bg-orange-400"} opacity-75 delay-700`}></span>
                </div>
                <span className="text-sm font-normal text-gray-400 capitalize">{type}</span>
            </div>
        </div>
    )
}

export default Technology