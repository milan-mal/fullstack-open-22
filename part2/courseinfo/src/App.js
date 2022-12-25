const Header = ({ courseName }) => <h1>{courseName}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

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

const Course = ({ course }) => 
    <div>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
    </div>

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

/*   return (
    <div>
    <Header course={course} />
    <Content parts={parts} />
    <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
    )
 */
export default App