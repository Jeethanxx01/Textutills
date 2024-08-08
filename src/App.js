import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{usestate} from 'react';
import Alert from './components/Alert';

function App() {
  const toggleMode= () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#121212';
      showAlert("dark mode has been enabled","success");
    }

    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode  has been enabled","success");
    }
  }
  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type: type,
    })
    setTimeout(() => {
      setAlert('null');
    }, 1500);
  }
  const [alert,setAlert]=useState('null');
  const [mode,setmode]=useState('light');
  return (
    <>
    <Navbar title="textutills" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert} />
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze" mode={mode}/></div>
    </>
  );
}

export default App;
