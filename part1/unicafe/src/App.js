import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let sumFeedb = good + neutral + bad
  let averageFeedb = (good + neutral + bad) / 3
  let positiveFeedb = good / sumFeedb * 100

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {sumFeedb}</p>
      <p>average: {averageFeedb}</p>
      <p>positive: {positiveFeedb} %</p>
    </div>
  )
}

export default App