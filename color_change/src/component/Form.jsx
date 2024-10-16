import React from 'react'
import colorNames from 'colornames'
import Toggle from './Toggle'

const Form = ({setColorValue, colorValue, setHexValue, toggleTxtColor, isTxtColorBlack}) => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
         <label>Add color name</label>
         <input 
            autoFocus
            type='text'
            placeholder='Add color name'
            required
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))
            }}
         />

         <Toggle toggleTxtColor={toggleTxtColor} isTxtColorBlack={isTxtColorBlack}/>
      </form>
    </div>
  )
}

export default Form
