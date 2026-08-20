import React from 'react'
import { cn } from '@/lib/utils'

const MagicButton = ({ title, icon, handleClick, otherClasses, position, type = 'button', disabled }:
  {
    title: string; icon: React.ReactNode; handleClick?: () => void; otherClasses?: string; position?: string; type?: 'button' | 'submit'; disabled?: boolean
  }

) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6366f1_0%,#a855f7_50%,#6366f1_100%)]" />
      <span
        className={cn(
          "inline-flex h-full w-full items-center justify-center gap-2 rounded-[7px] bg-black px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl transition-colors duration-200 hover:bg-black/80",
          otherClasses
        )}
      >
        {position === 'left' && icon}
        {title}
        {position !== 'left' && icon}
      </span>
    </button>
  )
}

export default MagicButton
