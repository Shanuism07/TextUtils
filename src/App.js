import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  return (
    <>
<Navbar title = "TextUtils" aboutText = "About TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
    <TextForm showAlert={showAlert} mode={mode} toggleMode={toggleMode} heading = "Enter the text to analyze"/>
</div>
</>  
  );
}

export default App;
