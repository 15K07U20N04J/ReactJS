import { useState } from 'react'
import './App.css'

function App() {
  // let [count, setCount] = useState(0)
  let [count, setCount] = useState(0)

  const addByOne = () => {

    if(count + 1 <= 20) {
      count = count + 1
      setCount(count)
    }
    console.log("Count is",count);
  }

  const ReduceByOne = () => {
    if(count - 1 > -1) {
      count = count - 1
      setCount(count)
    }
    console.log("Count is",count);
  }

  return (
    <>
      <div className="main-content">
        <h1>Counter with chai aur react</h1>
        <h2>Counter value : {count}</h2>
        <button onClick={addByOne}>Add Value</button>
        <button onClick={ReduceByOne}>Remove Value</button>
      </div>
    </>
  )
}

export default App
