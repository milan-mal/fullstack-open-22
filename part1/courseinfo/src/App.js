const Header = (props) => {
  console.log("component \"Header\" run");
  console.log(props);
  return (
    <h1>{props.course}</h1>
  )
}


const Content = (props) => {
  console.log("component \"Content2\" run");
  console.log(props);
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  )
}


const Part = (props) => {
  console.log("component \"Part\" run");
  console.log(props);
  return (
    <div>
      <p>{props.part}: {props.exercise} exercises</p>
    </div>
  )
}


const Total = (props) => {
  console.log("component \"Total\" run");
  console.log(props);
  return (
    <div>
      <p>Total number of exercises is {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}.</p>
    </div>
  )
}


const App = () => {

  console.log("component \"App\" run");
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>

      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />

    </div>
  )
}

export default App