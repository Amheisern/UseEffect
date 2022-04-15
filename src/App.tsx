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
  // If we need to do something just once when the component first mounts
  // we can provide an empty change list and useEffect will only run once.
  useEffect(function () {
    console.log(`This runs once when the component first mounts`)
  }, [])
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
