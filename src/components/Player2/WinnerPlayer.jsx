import React from 'react'
import { NavLink } from 'react-router-dom';

const WinnerPlayer = ({isVisible, winner, isPlayer1, playAgain}) => {
    if(!isVisible) return;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center text-white '>
      <div className='w-[280px] h-[270px] border-2 border-blue-300 relative top-28 shadow-[2px_2px_3px_3px_rgba(109,40,217)]
      '> 
        <div className='bg-[url("https://img.freepik.com/free-photo/black-brick-wall-textured-background_53876-63572.jpg?ga=GA1.1.1705782801.1730307492&semt=ais_hybrid")] h-[268px]'>
            <div className=''>
            <div className='text-xl font-bold rounded-md flex justify-between p-5'>
                  <div className={isPlayer1 === 'x-shape' ? "o-shape" : "x-shape"}></div>
                  <div className='ml-10 text-2xl'> { winner === 'x-shape' ? " PLAYER 1 WINS !!!" : " PLAYER 2 WINS !!!"} </div>
             </div>
            <div className='flex flex-col justify-center items-center mt-10 mb-10 space-y-5
            '>
            <button onClick={playAgain} className='h-10 w-40  active:scale-90 duration-300 ease-out rounded-md border hover:bg-white/50 border-yellow-700 bg-gradient-to-b from-blue-900 font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'> PLAY AGAIN </button>
            <NavLink to='/'>
            <button className='h-10 w-40  active:scale-90 duration-300 ease-out rounded-md border hover:bg-white/50 border-yellow-700 bg-gradient-to-b from-blue-900 font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'> GO BACK </button>
            </NavLink>
            </div>
            </div>
        </div>  
       </div>
    </div>
  )
}

export default WinnerPlayer
