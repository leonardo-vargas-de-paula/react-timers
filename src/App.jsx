import { useState } from 'react'
import styles from './App.module.css'
import TimerForm from './component/TimerForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className={styles.main}> 
      <h1 className={styles.title}>Timer</h1>
      <TimerForm />
    </main>
  )
}

export default App
