import React, { Children } from 'react'

const Container = ({ children,className }) => {
  return (
    <div className={`mx-auto w-[1600px] ${className}`}>
      {children}
    </div>
  )
}

export default Container