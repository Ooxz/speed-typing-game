import React, {useState, useEffect} from 'react';

export default function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5)
  console.log(text)

    function handleChange(event) {
      const {value} = event.target
      setText(value)
    }

    useEffect(() => {
      setTimeout(() => {
        if(timeRemaining > 0){
          setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1)
        } 
        
       
      }, 1000)
    }, [timeRemaining])

    function handleCount(text) {
      const wordsArr = text.trim().split(" ")
      const filteredWords = wordsArr.filter(word => word !== "")
      return filteredWords.length
    }

    console.log(handleCount(text))


  return(
    <div>
    <h1>How fast do you type?</h1>
    <textarea
    value={text}
    onChange={handleChange}
    />
    <h4>Time remaining : {timeRemaining}</h4>
    <button onClick={() => console.log(handleCount(text))}>Start</button>
    <h1>Word count: ???</h1>
    </div>
  )
}