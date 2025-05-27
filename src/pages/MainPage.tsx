import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './MainPage.css'

/**
 * This defines our React functional component called MainPage.
 * React components are functions that !! return JSX !! (the stuff that renders on the page).
 */
function MainPage() {
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


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(e.target.value)
  }


  const pressedEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setName(tempName);
      setTempName("");
    }
  }

  const navigate = useNavigate()

  return (
  <div className="App">
    <h1>{currentValue()}</h1>
    <div>
      <div>
        <button className='buttons-cont' onClick={handleClick}>Cycle</button>
        <button onClick={() => navigate('/PicTest')}>Go to picstest</button>
        <button onClick={() => navigate('/TestingPage')}>Go to tests</button>
      </div>
    <input 
    type="text"
    value={tempName}
    onChange={handleInputChange}
    onKeyDown={pressedEnter}
    placeholder='type name'
    />
    </div>
    <h1>{count}</h1>
  </div>
  );
}
/* you need to give button containers
 their own classname for them to use css
  like in line 53*/
export default MainPage