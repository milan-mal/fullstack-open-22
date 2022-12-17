import { useState } from 'react'

const StatisticLine = ({ statType, statValue, statUnit }) => (
  <div>
    <p>{statType}: {statValue} {statUnit}</p>
  </div>
)

const Statistics = ({ good, neutral, bad }) => {
  
  let sumFeedb = good + neutral + bad

  if (sumFeedb > 0) {
    let averageFeedb = (good - bad) / sumFeedb
    let positiveFeedb = good / sumFeedb * 100

    return (
      <div>
        <h1>statistics</h1>
        <StatisticLine statType='good' statValue={good} />
        <StatisticLine statType='neutral' statValue={neutral} />
        <StatisticLine statType='bad' statValue={bad} />
        <StatisticLine statType='all' statValue={sumFeedb} />
        <StatisticLine statType='average' statValue={averageFeedb} />
        <StatisticLine statType='positive' statValue={positiveFeedb} statUnit='%'/>
      </div>
    )
  }

  return <p>No feedback given</p>
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App