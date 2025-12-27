import React, { Children } from 'react'

const Image = ({ children, src, alt, className }) => {
  return (
    <img src={src} alt={alt} className={className} />
  )
}

export default Image