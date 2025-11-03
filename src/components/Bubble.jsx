import React from 'react'

function Bubble({className,bubble}) {
  return (
    <div className={className}>
      <img src={bubble} alt={className} />
    </div>
    )
}
export default Bubble;
