<<<<<<< HEAD

const Header = (props) => {
  return (
  <div>
    <h1>{props.course}</h1>
  </div>
  )
}
const Part1 = (props) => {
  return (
  <div>
    <p>
      {props.part1} {props.exercises1}
    </p>
    </div>
    )
  }
const Part2 = (props) => {
  return (
  <div>
    <p>
      {props.part2} {props.exercises2}
    </p>
    </div>
    )
  }
const Part3 = (props) => {
  return (
  <div>
    <p>
      {props.part3} {props.exercises3}
    </p>
    </div>
    )
  }
const Content = (props) => {
  return (
  <div>
    <p>
      <Part1/>
      {props.part1} {props.exercises1}
    </p>
    <p>
      <Part2/>
      {props.part2} {props.exercises2}
    </p>
    <p>
      <Part3/>
      {props.part3} {props.exercises3}
    </p>
  </div>
  )
}
const Total = (props) => {
  return (
  <div>
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  </div>
  )
}
const App = (props) => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1}  part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
=======
const Header = (props) => {
  return (
  <div>
    <h1>{props.course.name}</h1>
  </div>
  )
}

const Content = (props) => {
 return (
    <div>
      {props.course.parts.map(part => (
        <p key={part.name}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  )
}

const Total = (props) => {
  const exercisestotal = props.course.parts.reduce((sum,part) => sum + part.exercises,0)
  return (
    <p>Number of exercises {exercisestotal}</p>
  )
}



const App = () => {
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
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />

>>>>>>> 752aaba (P1.3-1.5)
    </div>
  )
}
export default App
