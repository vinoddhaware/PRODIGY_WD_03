import React from 'react'

const Square = ({value}) => {
  return (
    <div className='border-[4px] border-black/90 m-1'>
        <div className='cartoon-x border-[8px] h-20 w-20 sm:h-28 sm:w-28 border-black/30 bg-black/5 flex justify-center items-center'>
            <div> {value} </div>
        </div>   
     </div>
  )
}

export default Square
