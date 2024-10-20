import React from 'react'

const MagicButton = ({title,icon,handleClick,otherClasses ,position}:
    {
        title:string; icon:React.ReactNode; handleClick?:()=>void;otherClasses?:string; position:string
    }
    
) => {
  return (
    <div className='items-center justify-center flex '>
      <button className="p-[3px] absolute ">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    {position =='left' && icon }
    {title}
    {position =='left' && icon }

     </div>
    </button>
    </div>
  )
}

export default MagicButton
