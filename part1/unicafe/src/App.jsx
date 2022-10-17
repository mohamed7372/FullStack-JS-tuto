import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
      <h1>Statistics</h1>
      <p>good 6</p>
      <p>netral 2</p>
      <p>bad 1</p>
    </div>
  )
}

export default App