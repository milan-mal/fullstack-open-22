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
      <Part part={props.part1.name} exercise={props.part1.exercises} />
      <Part part={props.part2.name} exercise={props.part2.exercises} />
      <Part part={props.part3.name} exercise={props.part3.exercises} />
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
      <p>Total number of exercises is {props.exercisesTotal}.</p>
    </div>
  )
}


const App = () => {

  console.log("component \"App\" run");

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>

      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercisesTotal={part1.exercises + part2.exercises + part3.exercises} />

    </div>
  )
}

export default App