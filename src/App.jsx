import React, { useState } from 'react'
import "./App.css"

const App = () => {
const [count, setCount] = useState(0)
const increment = ()=> setCount(count+1)
const decrement = ()=> setCount(count-1)
const reset = ()=> setCount(0)

  return (
    <>
    <div className='container'>
    <h1>Welcome To Counter App</h1>
    <span className='count'>{count}</span>
    <div className="buttons">
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subtract</button>
      <button onClick={reset}>Reset</button>
    </div>
    </div>
    
    </>
  )
}

export default App
