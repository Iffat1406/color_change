import React from 'react'

const Toggle = ({toggleTxtColor, isTxtColorBlack}) => {
    let nextTextColor = isTxtColorBlack ? 'White' : 'Black'
  return (
    <div>
          <button
      type="button"
      style={{cursor: 'pointer'}}
      onClick={() => {toggleTxtColor(!isTxtColorBlack)}}
    >
      Toggle Text Color to {nextTextColor}
    </button>
      
    </div>
  )
}

export default Toggle
