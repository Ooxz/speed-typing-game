import React from 'react';
import useHook from "./assets/useHook"

export default function App() {
  
  const{
    text, 
    timeRemaining, 
    gameStart, 
    buttonDisabled, 
    textareaRef, 
    wordCount,
    startGame, 
    handleChange, 
  } = useHook(10)

  return(
    <div>
    <h1>How fast do you type?</h1>
    <textarea
    ref={textareaRef}
    value={text}
    onChange={handleChange}
    disabled={!gameStart}
    />
    <h4>Time remaining : {timeRemaining}</h4>
    <button onClick={startGame} disabled={buttonDisabled}>Start</button>
    <h1>Word count: {wordCount}</h1>
    </div>
  )
}