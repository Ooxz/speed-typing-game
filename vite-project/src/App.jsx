import React, {useState} from 'react';

export default function App() {
  const [text, setText] = useState("");
  console.log(text)

    function handleChange(event) {
      const {value} = event.target
      setText(value)
    }

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
    <h4>Time remaining : ???</h4>
    <button onClick={() => console.log(handleCount(text))}>Start</button>
    <h1>Word count: ???</h1>
    </div>
  )
}