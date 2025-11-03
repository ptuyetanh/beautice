import React from 'react'

export default function ButtonDefault({name, handleSubmit}) {
  return (
    <button className="btn-default" onClick={handleSubmit}>{name}</button>
  )
}
