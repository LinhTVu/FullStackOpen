import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  // persons: array of all saved contacts, updated by setPersons function
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [newFilter, setNewFilter] = useState('')

  // newName: text currently typed into input box, updated by setNewName function
  // showAll: a boolean to indicate whether to display full or changed list, updated by setShowAll function
  
  const personsToShow = showAll
    ? persons  
    : persons.filter(x => x.name.toLowerCase().includes(newFilter.toLowerCase()))
    console.log('list personstoshow' + personsToShow)
    console.log(personsToShow.length)
  // create list personsToShow = full or changed persons list depending on showAll value

  const addContact = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const  personObject = {
      name: newName,
      number: newNumber
    }
  
   const alreadyExist = persons.find (x=> x.name===newName)
    if (alreadyExist  !== undefined   ) {
     alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons (persons.concat(personObject))
      setNewName ('')
      setNewNumber ('')
    }
  }

  // function to check if submitted name already exists, and add to array if not

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  } 
  const handleFilter = (event) => {
    console.log(event.target.value)
    console.log(newFilter)
    setNewFilter(event.target.value)
  // processes the text input and set as newName, Number, Filter

    if (event.target.value === '') {
      setShowAll(true)
    }
    else {
      setShowAll(false)
    }
    console.log(showAll)
  }
  // prepare condition to display persons list by checking when input exists

  return (
    <div>
      <h2>Phonebook</h2>
      <p> filter shown with:
          <span> <input value = {newFilter} onChange = {handleFilter} /> </span> </p> 
      <h2>add a new</h2>
          <p>name: 
          <span> <input value = {newName} onChange = {handleNameChange} /> </span>  </p> 
          <p> number:
          <span> <input value = {newNumber} onChange = {handleNumberChange} /> </span> </p> 
          <p> <button onClick= {addContact}> add</button> </p> 
            
      {/* add a form with button that when clicked will submit */}

      <h2>Numbers</h2>
      <ul>{personsToShow.map(x => <li key={x.id}>  {x.name} {x.number}</li>
      )}
      </ul>
      {/* display array persons.name */}
    </div>
  )
}


export default App