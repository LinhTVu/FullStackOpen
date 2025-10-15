import { useState } from 'react'



const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = (props.good-props.bad)/(props.good+props.neutral+props.bad)
  const positive = props.good/(props.good+props.neutral+props.bad)*100
  if (props.allClick === 0) {
    return (
      <div>
      <h1>statistics</h1>
      No feedback given
      </div>
    )
    }
    return (
    <div>
      <h1>statistics</h1>
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{props.good}</td> 
            </tr> 
            <tr>
              <td>neutral</td>
              <td>{props.neutral}</td> 
            </tr> 
            <tr>
              <td>bad</td>
              <td>{props.bad}</td> 
            </tr> 
            <tr>
              <td>total</td>
              <td>{total}</td> 
            </tr> 
            <tr>
              <td>average</td>
              <td>{average.toFixed(1)}</td> 
            </tr>
            <tr>
              <td>positive</td>
              <td>{positive.toFixed(1)}%</td> 
            </tr>           
          </tbody>
        </table>

    </div>
  )
}
//calculating and assigning stats


const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClick, setAll] = useState(0)


  const handleGoodClick = () => {
    const updatedGood = good + 1
      setGood(updatedGood)
      setAll(updatedGood + neutral + bad)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
      setNeutral(updatedNeutral)
      setAll(good + updatedNeutral + bad)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
      setBad(updatedBad)
      setAll(good + neutral + updatedBad)
  }
  console.log(allClick)



  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      
      <Statistics allClick = {allClick} good = {good} neutral = {neutral} bad={bad} />
    </div>
    )
    }

export default App