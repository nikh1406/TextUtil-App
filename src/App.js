// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled" , "success");

    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
      <Alert  alert={alert}/>
      <div className="container my-3">
        <Textform showAlert={showAlert}heading = "Enter text to analyze below" mode = {mode} />
        {/* <p>--------------------------------------------------------</p> */}
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
