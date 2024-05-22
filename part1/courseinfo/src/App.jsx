
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  const parts = props.parts
  return (
    <div>
      <p>
        {parts[0].part} {parts[0].exercises}
      </p>
      <p>
        {parts[1].part} {parts[1].exercises}
      </p>
      <p>
        {parts[2].part} {parts[2].exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14},
  ]
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  )
}

export default App