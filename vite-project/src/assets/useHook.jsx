import React, {useState, useEffect, useRef} from 'react';

function useHook(startingTime = "10") {
	const STARTING_TIME = 10
	const textareaRef = useRef(null)
  
	const [text, setText] = useState("");
	const [timeRemaining, setTimeRemaining] = useState(startingTime)
	const [gameStart, setGameStart] = useState(false)
	const [buttonDisabled, setButtonDisabled] = useState(false)
	const [wordCount, setWordCount] = useState(0)
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
		  setTimeRemaining(startingTime)
		  setButtonDisabled(true)
		  setText("")
		  setWordCount("0")
		  textareaRef.current.disabled = false
		  textareaRef.current.focus()
		  console.log(textareaRef)
	
		  
		  
		}
  
		function endGame() {
		  setGameStart(false)
		  setWordCount(handleCount(text))
		  setButtonDisabled(false)
		}
	

		return {text, timeRemaining, gameStart, buttonDisabled, textareaRef, wordCount, startGame, handleChange, handleCount}
}

export default useHook