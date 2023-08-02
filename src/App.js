import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BuildForm from './Components/BuildForm';
import Output from './Components/Output';
import Templates from './Components/Templates';
import './App.css';

function App() {
const [currentTemplate, setsCurrentTemplate] = useState({})
const [formInput, setsFormInput] = useState("")
const [currentHTML, setsCurrentHTML] = useState("")

  return (
    <div>
      <Routes>
        <Route path="/" element={<Templates setsCurrentTemplate={setsCurrentTemplate} setsCurrentHTML={setsCurrentHTML}/> } />
        <Route path="/build" element={<BuildForm currentTemplate={currentTemplate} formInput={formInput} setsFormInput={setsFormInput} currentHTML={currentHTML} setsCurrentHTML={setsCurrentHTML} />}/>
        <Route path="/output" element={<Output formInput={formInput} currentHTML={currentHTML} setsCurrentHTML={setsCurrentHTML}/>}/>
      </Routes>
      </div>
  );
}

export default App;
