import { useState } from 'react'
import './App.css'

function App() {
  const [count,setcount] = useState(0)
const handleClick = ()=>{
  setcount(count + 1)
}
  return (
    <>
      <div>
      Hello World
      <p>{count}</p>
      <button onClick={handleClick}>Click me</button>
        </div>
    </>
  )
}

export default App
