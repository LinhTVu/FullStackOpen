
import { useState } from 'react'

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}  
// define the function to generate random integer within a range

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
 const [selected, setSelected] = useState(0)
// declare a state var named selected which will be changed by setSelected function

const handleNext = () => {
  const random = getRandomInteger(0, 7)
  setSelected(random)
  console.log(random)
}
// define function to handle click-next event, which generates a random integer between 0 and 7
// this integer is then passed to setSelected function to update the state variable selected

const [vote, setVote] = useState(Array(anecdotes.length).fill(0))
// create an array to hold the votes for each anecdote

const handleVote = () => {
  setVote(prev => {
    const next = [...prev]
    next[selected] +=1
  return next
  }
)
}
// console.log(next)
// define function to handle click-vote event, which adds 1 to the vote count of current anecdote
  
const maxVote = Math.max (...vote)
const indexOfMax = vote.indexOf(maxVote)

return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>    
      <button onClick={handleVote}>vote</button> 
      <button onClick={handleNext}>next anecdote</button>
      <h1>Anecdote with most vote</h1>
      <p>{anecdotes[indexOfMax]}</p>
    </div>
  )
}

export default App


