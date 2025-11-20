import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { sculptureList } from './data';

function App() {
  const [index, setIndex] = useState(0);
  const sculpture = sculptureList[index];
  const [showMore,setShowMore]=useState(false);
  function handleNextClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    }
    else {
      setIndex(0);
    }
  }
  function handlePreviousClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
    else{
      setIndex(sculptureList.length-1);
    }

  }
  function handleShowClick(){
    setShowMore(!showMore);
  }
  return (
    <>
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} by {sculpture.artist}</i>
      </h2>
      <h3>{index + 1} of {sculptureList.length}</h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p></p>
      <button onClick={handleShowClick}> {showMore?"Hide":"Show"} Details</button>
      {showMore&& <p>{sculpture.description}</p>}
    </>
  )
}

export default App
