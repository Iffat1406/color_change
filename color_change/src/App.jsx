import React, { useState } from 'react'
import Square from './component/Square'
import Form from './component/Form'

const App = () => {
 const [colorValue, setColorValue] = useState('')
 const [hexValue, setHexValue] = useState('')
 const [isTxtColorBlack, toggleTxtColor] = useState(false)

  return (
    <div className='App'>
      <Square colorValue={colorValue} hexValue={hexValue} isTxtColorBlack={isTxtColorBlack}/>
      <Form colorValue={colorValue} setColorValue={setColorValue} setHexValue={setHexValue} toggleTxtColor={toggleTxtColor} isTxtColorBlack ={isTxtColorBlack}/>
    </div>
  )
}

export default App
