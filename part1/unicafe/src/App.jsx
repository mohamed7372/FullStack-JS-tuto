import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>Statistics</h1>
      <Statistics title={'good'} stat={good}/>
      <Statistics title={'neutral'} stat={neutral}/>
      <Statistics title={'bad'} stat={bad}/>
      <Statistics title={'all'} stat={good + neutral + bad}/>
      <Statistics title={'average'} stat={(good + bad*-1) / (good + neutral + bad)}/>
      <Statistics title={'positive'} stat={(good * 100) / (good + neutral + bad) + ' %'} />
    </div>
  )
}

const Statistics = (props) => {
  return(<p>{props.title} {props.stat}</p>)
}

export default App