import React, { useState, useEffect } from 'react'

export function App() {
  const [count, setCount] = useState(0)
  // const listOfDataToWatchForChanges = [count] ..Don't need if called in line below
  // useEffect takes two arguments a function AND an array of values to watch for changes
  //further simplifies the code by calling theCountChanged function in line.
  useEffect(
    function () {
      console.log(`Wow, the count is now ${count}`)
    },
    [count]
  )

  function handleClickButton() {
    setCount(count + 1)
  }
  // function theCountChanged() {
  //   console.log(`Wow, the count changed and is now ${count}`)
  // }
  return (
    <div>
      <p>
        Count: {count} <button onClick={handleClickButton}>Click Me</button>
      </p>
    </div>
  )
}
