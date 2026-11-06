
import { useState } from 'react'

function Counter({ title, points, onEarn }) {
  const [sessions, setSessions] = useState(0)

  function completeSession() {
    setSessions(sessions + 1)
    onEarn(points)
  }

  return (
    <section className="card">
      <p className="eyebrow">PRACTICE TRACKER</p>
      <h2>{title}</h2>
      <p className="big-number">{sessions}</p>
      <p>Sessions completed</p>
      <button onClick={completeSession}>Complete session +{points} XP</button>
    </section>
  )
}

export default Counter
