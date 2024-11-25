import React from 'react'
import '../TicTacToe.css'

const Square = ({isPlayer1, onClick}) => {
  return (
<div className='border-[4px] border-black/90 m-1'>
  <div onClick={onClick} className='cartoon-x border-[8px] h-20 w-20 sm:h-28 sm:w-28 border-black/30 bg-black/5  flex justify-center items-center'>
      <div className = {isPlayer1}> </div>
    </div>
</div>
  )
}

export default Square
