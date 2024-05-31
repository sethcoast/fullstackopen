import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const Statistics = ({ratings}) => {
  if (ratings.good==0 && ratings.neutral==0&& ratings.bad==0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else {

    return (
      <div>
        <StatisticLine text="good" value={ratings.good}/>
        <StatisticLine text="neutral" value={ratings.neutral}/>
        <StatisticLine text="bad" value={ratings.bad}/>
        <StatisticLine text="average" value={ratings.avg}/>
        <StatisticLine text="positive percentage" value={ratings.posPercent}/>
      </div>
    )
  }
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
      <h1>statistics</h1>
      <Statistics ratings={ratings}/>
    </div>
  )
}

export default App