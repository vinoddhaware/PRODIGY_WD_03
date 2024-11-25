import React, { useEffect, useState } from 'react'
import '../components/TicTacToe.css'
import WinnerPlayer from '../components/Player1/WinnerPlayer'
import DrawGame from '../components/DrawGame'
import Square from '../components/Player1/Square'

const Player1 = () => {
    const [showModal, setShowModal] = useState(false)
    const [showModal1, setShowModal1] = useState(false)
    const [boxes, setBoxes] = useState(Array(9).fill(null))
    const [isPlayer1, setIsPlayer1] = useState(true)
    const [winner, setWinner] = useState(null)
    const [drawGame, setDrawGame] = useState(null)
    const checkWinner = (boxes) =>{
        const winningPossibilities = [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6]
        ]
        for(let row of winningPossibilities){
            const [a, b,c] = row
            if(boxes[a] != null && boxes[a] === boxes[b] && boxes[a] === boxes[c]){
                return boxes[a]
            }
        }
        return null
    }
    useEffect(() => {
        if(!isPlayer1 && !winner) {
            const timer = setTimeout(() => {
                    aiMove();
            }, 1000);
            return () => clearInterval(timer)
        }
    }, [isPlayer1, winner])

    const handleBoxClick = (index) =>{
        if(boxes[index] != null) return;       
        const updateValue = [...boxes]
        updateValue[index] = "x-shape" 
        setBoxes(updateValue)
        setIsPlayer1(false)
        let isWinner = checkWinner(updateValue)
        if(isWinner){
            setWinner(isWinner)
            if(isWinner) return setShowModal(true);
        } else if (!updateValue.includes(null)){
            setDrawGame(true)
            setShowModal1(true)
        }
    }
    const aiMove = () =>{
        const emptySquares = boxes.reduce((acc, val, index) => val === null ? [...acc, index]: acc, [])
        if(emptySquares.length > 0){
            const randomIndex = Math.floor(Math.random() * emptySquares.length)
            const newBoxes = [...boxes]
            newBoxes[emptySquares[randomIndex]] = 'o-shape'
            setBoxes(newBoxes)
            setIsPlayer1(true)
        let isWinner = checkWinner(newBoxes)
        setWinner(isWinner)
        if(isWinner) return setShowModal(true);
        let draw = true
        boxes.map((curArr) => {
            if(curArr === null){
                return draw = false
            } 
        })
        if(draw){
            setShowModal1(true)
            setDrawGame(true)
        } 
    }
}
const playAgain = () =>{
    setBoxes(Array(9).fill(null))
    setShowModal(false)
    setShowModal1(false)
    setIsPlayer1(true)
    setWinner(null)
    setDrawGame(null)
    }
    
  return (
<>
    <div className='flex justify-center items-center bg-black'>
    <div className='w-[500px] h-screen bg-[url("https://img.freepik.com/free-photo/black-brick-wall-textured-background_53876-63572.jpg?ga=GA1.1.1705782801.1730307492&semt=ais_hybrid")] pb-10'>
    { 
        isPlayer1 ? 
            <h1 className='text-3xl font-bold font-serif text-center m-3 text-white'>Player 1 to move</h1>
        : 
            <h1 className='text-3xl font-bold font-serif text-center text-white m-3'>AI to move</h1> 
    } 
            <div className='box-row flex justify-center'>
                <div className='row-1'> 
                    <Square isPlayer1 = {boxes[0]} onClick = {() => handleBoxClick(0)}  />    
                    <Square isPlayer1 = {boxes[1]} onClick = {() => handleBoxClick(1)} />    
                    <Square isPlayer1 = {boxes[2]} onClick = {() => handleBoxClick(2)} />    
                </div>
                <div className='row-2'>
                    <Square isPlayer1 = {boxes[3]} onClick = {() => handleBoxClick(3)} />    
                    <Square isPlayer1 = {boxes[4]} onClick = {() => handleBoxClick(4)} />    
                    <Square isPlayer1 = {boxes[5]} onClick = {() => handleBoxClick(5)} />    
                </div>
                <div className='row-3'>
                    <Square isPlayer1 = {boxes[6]} onClick = {() => handleBoxClick(6)} />    
                    <Square isPlayer1 = {boxes[7]} onClick = {() => handleBoxClick(7)} />    
                    <Square isPlayer1 = {boxes[8]} onClick = {() => handleBoxClick(8)} />    
                </div>
            </div>
        </div>
    </div>
    <WinnerPlayer boxes = {boxes} isVisible = {showModal} winner = {winner} isPlayer1 = {isPlayer1} playAgain={playAgain} />
    <DrawGame isVisible = {showModal1} playAgain={playAgain} setDrawGame = {setDrawGame} />
</>
  )
}

export default Player1
