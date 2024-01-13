import React from 'react'

interface PillVariants {
  type: {
    information: string
    danger: string
    success: string
    amber: string
  }
}

const pillVariants: PillVariants = {
  type: {
    information: 'bg-gradient-to-tr from-emerald-100 to-sky-100 text-sky-600',
    danger: 'bg-gradient-to-tr from-red-200 to-rose-200 text-red-600',
    success: 'bg-gradient-to-tr from-emerald-200 to-green-200 text-green-600',
    amber: 'bg-gradient-to-tr from-amber-200 to-amber-200 text-amber-600'
  }
}

interface PillProps {
  children: React.ReactNode
  type?: keyof PillVariants['type']
  className?: string
}

export function Pill ({ children, type = 'information', className }: PillProps) {
  const typeStyle = pillVariants.type[type]
  const combinedStyle = `text-center shadow rounded-full flex gap-2 justify-center items-center px-6 py-4 ${typeStyle}`

  return (
    <span className={`${combinedStyle} ${className}`}>
      {children}
    </span>
  )
}
