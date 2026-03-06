import { useState } from 'react'
import './App.css'
import TimerForm from './component/TimerForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Timer</h1>
      <TimerForm />
    </main>
  )
}

export default App
