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

export default Course