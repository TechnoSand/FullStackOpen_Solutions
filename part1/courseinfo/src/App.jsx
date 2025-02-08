const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
return (
  <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <>
    <Part part={props.P1.name} exercises={props.P1.exercises}/>
    <Part part={props.P2.name} exercises={props.P2.exercises}/>
    <Part part={props.P3.name} exercises={props.P3.exercises}/>
    </>

  )
}

const Total = (props) => {
  return (
    <>
    Number of exercises {props.total}
    </>
  )
}

const App = () => {
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
        <Content P1={part1} P2={part2} P3={part3} />
        <Total total={part1.exercises+part2.exercises+part3.exercises} />
      </div>
    )
  }

export default App