import React, { useState } from 'react'
import circle_icon from '../components/Assets/circle.png'
import cross_icon from '../components/Assets/cross.png'
import tic_icon from '../components/Assets/tic.png'
import tac_icon from '../components/Assets/tac.png'
import toe_icon from '../components/Assets/toe.png'
import Square from '../components/Home/Square'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const [game, setGame] = useState([
        <img src={tic_icon} className=''/>,
        <img src={cross_icon} className='sm:size-[89px]'/>,
        <img src={circle_icon} className=''/>,
        <img src={cross_icon} className='sm:size-[89px]'/>,
        <img src={tac_icon} className=''/>,
        <img src={cross_icon} className='sm:size-[89px]'/>,
        <img src={circle_icon} className=''/>,
        <img src={cross_icon} className='sm:size-[89px]'/>,
        <img src={toe_icon} className=''/>
    ])

  return (
        <>
        <div className='flex justify-center items-center bg-black'>
        <div className='w-[500px] h-screen bg-[url("https://img.freepik.com/free-photo/black-brick-wall-textured-background_53876-63572.jpg?ga=GA1.1.1705782801.1730307492&semt=ais_hybrid")] pb-10'>

            <h1 className='text-3xl font-bold font-serif text-center m-3 text-white'> Let's Play the Game! </h1>
                <div className='box-row flex justify-center'>
                    <div className='row-1'> 
                        <Square value = {game[0]}  />    
                        <Square value = {game[1]} />    
                        <Square value = {game[2]} />    
                    </div>
                    <div className='row-2'>
                        <Square value = {game[3]} />    
                        <Square value = {game[4]} />    
                        <Square value = {game[5]} />    
                    </div>
                    <div className='row-3'>
                        <Square value = {game[6]} />    
                        <Square value = {game[7]} />    
                        <Square value = {game[8]} />    
                    </div>
                </div>
                <div className='flex justify-center'>
                <div className='flex flex-col mt-6 '>
                    <NavLink to='/player1'>
                    <button  className="h-12 w-40 my-3 active:scale-90 duration-300 ease-out rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">1 Player</button>
                    </NavLink>
                    <NavLink to='/Player2'>
                    <button className="h-12 w-40 active:scale-90 duration-300 ease-out rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">2 Players</button>
                    </NavLink>
                </div>
                </div>
        </div>
        </div>
        </>
  )
}

export default Home
