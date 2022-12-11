const Header = (props) => {
  console.log("component \"Header\" run");
  console.log(props);
  return (
    <h1>{props.courseName}</h1>
  )
}


const Content = (props) => {
  console.log("component \"Content2\" run");
  console.log(props);
  return (
    <div>
      <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises} />
      <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises} />
      <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercises} />
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
      <p>Total number of exercises is {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}.</p>
    </div>
  )
}


const App = () => {

  console.log("component \"App\" run");
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>

      <Header courseName={course.name} />
      <Content course={course} />
      <Total course={course} />

    </div>
  )
}

export default App