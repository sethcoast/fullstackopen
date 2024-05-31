import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ratings}) => {

  return (
    <div>
      <h1>statistics</h1>
      <p>good {ratings.good}</p>
      <p>neutral {ratings.neutral}</p>
      <p>bad {ratings.bad}</p>
      <p>average {ratings.avg}</p>
      <p>positive {ratings.posPercent}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [ratings, setRatings] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    avg: 0,
    posPercent: 0
  })
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avg, setAvg] = useState(0)
  const [posPercent, setPosPercent] = useState(0)

  const handleGood = () => {
    const newGood = ratings.good + 1
    const newRatings = {
      ...ratings,
      good: newGood,
      avg: (newGood - ratings.bad)/(newGood + ratings.bad + ratings.neutral),
      posPercent: (newGood / (newGood + ratings.bad + ratings.neutral)) * 100
    }
    setRatings(newRatings)
  }

  const handleNeutral = () => {
    const newNeutral = ratings.neutral + 1
    const newRatings = {
      ...ratings,
      neutral: newNeutral,
      avg: (ratings.good - ratings.bad)/(ratings.good + ratings.bad + newNeutral),
      posPercent: (ratings.good / (ratings.good + ratings.bad + newNeutral)) * 100
    }
    setRatings(newRatings)
  }

  const handleBad = () => {
    const newBad = ratings.bad + 1
    const newRatings = {
      ...ratings,
      bad: newBad,
      avg: (ratings.good - newBad)/(ratings.good + newBad + ratings.neutral),
      posPercent: (ratings.good / (ratings.good + newBad + ratings.neutral)) * 100
    }
    setRatings(newRatings)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="Neutral"/>
      <Button onClick={handleBad} text="Bad"/>
      <Statistics ratings={ratings}/>
    </div>
  )
}

export default App