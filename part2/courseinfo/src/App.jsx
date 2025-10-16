const Course = (props) => {
  return (
      <div>
        <h1>{props.course.name}</h1>
        <ul>
          {props.course.parts.map(x => <li key = {x.id}> {x.name} {x.exercises} </li>)}
        </ul>
        <b>total of {' '}   
          {props.course.parts.reduce(function(sum, noex){
          return sum + noex.exercises},0)
          } exercises</b>
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