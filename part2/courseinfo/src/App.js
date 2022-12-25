const Header = ({ courseName }) => <h1>{courseName}</h1>

const Total = ({ partsExercises }) => 
  <b>
    total of {
      partsExercises.reduce((total, num) => total + num, 0)
    } exercises
  </b>

const Part = ({ part }) => 
    <p>
      {part.name} {part.exercises}
    </p>

const Content = ({ courseParts }) => 
  courseParts.map(part => 
    <Part
      key={part.id} part={part}
    />
  )

const Course = ({ course }) => {
  const partsExercises = course.parts.map(part => part.exercises)
  return (
    <div>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
      <Total partsExercises={partsExercises} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App