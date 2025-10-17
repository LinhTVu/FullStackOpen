
const Course = (props) => {
  const eachCourse = 
    return 
      name
      exercises
      sum
  // a function for each course
  return (
      <div>
        <h3>Web development curriculum</h3>
        <ul>{props.courses.reduce(eachCourse(x=> <li key={x.id}> {x.name}

        </ul>
      // parse each course and apply the eachCourse function
      // 
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
      <Course courses={courses} />
    </div>
  )
}

export default App
