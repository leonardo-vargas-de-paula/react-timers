import { useState } from 'react'
import styles from './App.module.css'
import TimerForm from './components/TimerForm'

function App() {
  const [timers, setTimers] = useState([])

  return (
    <main className={styles.main}> 
      <h1 className={styles.title}>Timer</h1>
      <TimerForm setTimer={setTimers}/>
      <div className={styles.timers}>
        {timers.map((timer)=>(
          <h3 key={timer.id}>{timer.name}</h3>
        ))}
      </div>
    </main>
  )
}

export default App
