const Header = ({ courseName }) => <h2>{courseName}</h2>

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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course =>
        <Course
          key={course.id} course={course}
        />
      )}
    </div>
  )

}

export default App