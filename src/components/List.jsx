import React from 'react'

const List = ({ className, text }) => {
  return (
    <div className={`text-lg font-dm font-normal text-primary hover:text-secondary hover:cursor-pointer hover:font-bold ${className}`}>{text}</div>
  )
}

export default List