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
      {good + bad + neutral == 0 ?
        (<p>No feedback given</p>)
        :
        (<Statistics good={good} neutral={neutral} bad={bad}/>)
      }
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      <StatisticLine text={'good'} value={good}/>
      <StatisticLine text={'neutral'} value={neutral}/>
      <StatisticLine text={'bad'} value={bad}/>
      <StatisticLine text={'all'} value={good + neutral + bad}/>
      <StatisticLine text={'average'} value={(good + bad*-1) / (good + neutral + bad)}/>
      <StatisticLine text={'positive'} value={(good * 100) / (good + neutral + bad) + ' %'} />
    </>
  )
}

const StatisticLine = props => <p>{props.text} {props.value}</p>

export default App