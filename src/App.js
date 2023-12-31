
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  // const [swname,setSwname]=
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
      // document.title="TextUtils-Light mode";
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled!", "success");
      // document.title="TextUtils-Dark mode";
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode}
          toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar /> */}

        <div className='container my-3'>
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below" mode={mode} />}/>
              
           
            
            <Route exact path="/about" element={<About />}/>
              
           


          </Routes>

          {/* <About/> */}
        </div>
      </Router>

    </>

  );
}

export default App;
