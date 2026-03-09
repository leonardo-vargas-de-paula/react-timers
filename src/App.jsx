import { useState } from 'react'
import styles from './App.module.css'
import TimerForm from './components/TimerForm'

function App() {
  const [timers, setTimers] = useState([
    {name: "teste1", duration: 3},
    {name: "teste2", duration: 5}
  ])

  return (
    <main className={styles.main}> 
      <h1 className={styles.title}>Timer</h1>
      <TimerForm />
      <div className={styles.timers}>
        {timers.map((timer)=>(
          <h3>{timer.name}</h3>
        ))}
      </div>
    </main>
  )
}

export default App
