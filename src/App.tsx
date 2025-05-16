import { useState } from 'react'
import './App.css'

/**
 * This defines our React functional component called App.
 * React components are functions that !! return JSX !! (the stuff that renders on the page).
 */
function App() {
  let count: number = 4;
  let active: boolean = true;

  /**
   * use state always needs to be in the form  const [value, setter]
   * value → the current data
   * setValue → a function to change it (and re-render the component)
   */
  const [index, setIndex] = useState<number>(0);
  const [name, setName] = useState<string>("")
  const [tempName, setTempName] = useState<string>("")


  const handleClick = () => {
    setIndex((curr) => (curr + 1) % 3)
  }

  const currentValue = () => {
    if (index == 0) return `Count is: ${count}`
    if (index == 1) return `Name is: ${name}`
    if (index == 2) return `Active status: ${active}`
  }

  const change_name = () => {
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(e.target.value)
  }

  const pressedEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setName(tempName);
      setTempName("");

    }
  }

  return (
  <div className="App">
    <h1>{currentValue()}</h1>
    <button onClick={handleClick}>Cycle</button>
    <p>input name</p>
    <input 
    type="text"
    value={tempName}
    onChange={handleInputChange}
    onKeyDown={pressedEnter}
    placeholder='type name'
    />

  </div>
  );
}

export default App
