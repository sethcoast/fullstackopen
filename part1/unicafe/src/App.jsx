import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avg, setAvg] = useState(0)
  const [posPercent, setPosPercent] = useState(0)

  const handleGood = () => {
    const newGood = good + 1
    setGood(newGood)
    const newAvg = (newGood - bad)/(newGood + bad + neutral)
    setAvg(newAvg)
    const newPosPerc = newGood / (newGood + bad + neutral)
    setPosPercent(newPosPerc)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    const newAvg = (good - bad)/(good + bad + newNeutral)
    setAvg(newAvg)
    const newPosPerc = good / (good + bad + newNeutral)
    setPosPercent(newPosPerc)
  }

  const handleBad = () => {
    const newBad = bad + 1
    setBad(newBad)
    const newAvg = (good - newBad)/(good + newBad + neutral)
    setAvg(newAvg)
    const newPosPerc = good / (good + newBad + neutral)
    setPosPercent(newPosPerc)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="Neutral"/>
      <Button onClick={handleBad} text="Bad"/>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>average {avg}</p>
      <p>positive {posPercent}%</p>
    </div>
  )
}

export default App