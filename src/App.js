import './App.css';
import {useState} from 'react'
import Slider from './Components/Slider/Slider'


function App() {
  return (
    <div className="App">
      <h3>Custome Slider</h3>
      <p><q>Fully Customizable Slider Carousel using React useState Hook</q></p>
      <span>Without using any external Library</span>
      <Slider />
    </div>
  );
}

export default App;
