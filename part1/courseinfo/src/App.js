const Header = (props) => {
  console.log("component \"Header\" run");
  return (
    <h1>{props.course}</h1>
  )
}


const Content = (props) => {
  console.log("component \"Content\" run");
  return (
    <div>
      <Part part={props.part1} exercise={props.exercises1} />
      <Part part={props.part2} exercise={props.exercises2} />
      <Part part={props.part3} exercise={props.exercises3} />
    </div>
  )
}


const Part = (props) => {
  console.log("component \"Part\" run");
  return (
    <div>
      <p>{props.part}: {props.exercise} exercises</p>
    </div>
  )
}


const Total = (props) => {
  console.log("component \"Total\" run");
  return (
    <div>
      <p>Total number of exercises is {props.exercisesTotal}.</p>
    </div>
  )
}


const App = () => {

  console.log("component \"App\" run");

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>

      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercisesTotal={exercises1 + exercises2 + exercises3} />

    </div>
  )
}

export default App