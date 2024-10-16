import React from 'react'

const Square = ({colorValue, hexValue, isTxtColorBlack}) => {
  return (
    <div>
      <section className='square' style={{
        backgroundColor: colorValue,
        color: (isTxtColorBlack == true) ? "#000" : "#fff"
      }}>
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p>
      </section>
    </div>
  )
}

Square.defaultProps = {
    colorValue: "cyan"
}

export default Square
