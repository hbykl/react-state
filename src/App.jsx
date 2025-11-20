import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { sculptureList } from './data';
function handleNextClick() {
  alert("Next");
}
function handlePreviousClick() {
  alert("Previous");
}
function App() {
  const index = 0;
  const sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handlePreviousClick}>Previous</button>
      <h2>
        <i>{sculpture.name} by {sculpture.artist}</i>
      </h2>
      <h3>{index + 1} of {sculptureList.length}</h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  )
}

export default App
