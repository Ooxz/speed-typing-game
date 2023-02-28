import React, {useState, useEffect} from 'react';

export default function App() {

  const STARTING_TIME = 10

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [gameStart, setGameStart] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  console.log(text)

    function handleChange(event) {
      const {value} = event.target
      setText(value)
    }
    console.log(gameStart)

    useEffect(() => {
      setTimeout(() => {
        if(timeRemaining > 0 && gameStart){
          setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1)
        } else if (timeRemaining <= 0){
          endGame()
        }
        
       
      }, 1000)
    }, [timeRemaining, gameStart])

    function handleCount(text) {
      const wordsArr = text.trim().split(" ")
      const filteredWords = wordsArr.filter(word => word !== "")
      return filteredWords.length
    }

    console.log(handleCount(text))

      function startGame() {
        setGameStart(true)
        setTimeRemaining(STARTING_TIME)
        setButtonDisabled(true)
        setText("")
      }

      function endGame() {
        setGameStart(false)
        setButtonDisabled(false)
      }

  return(
    <div>
    <h1>How fast do you type?</h1>
    <textarea
    value={text}
    onChange={handleChange}
    disabled={gameStart === false ? true : false}
    />
    <h4>Time remaining : {timeRemaining}</h4>
    <button onClick={startGame} disabled={buttonDisabled}>Start</button>
    <h1>Word count: {handleCount(text)}</h1>
    </div>
  )
}