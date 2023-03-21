// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //will tells whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)  => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', "success")
      document.title = "TextUtils - Dark Mode";

      //Bad User Experience: Yeh sirf samjhane ke liye btaya ke title kese change hota rehta attention lene ke liye kch apps main 
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', "success")
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
   {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
   {/* <Navbar /> */}
   {/* <BrowserRouter> */}
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert = {alert}/>
   <div className="container my-3">
      {/* /users --> Component 1
          /users/home --> Component 2
      React path ko partial match krta hai isliye complete path matching ke liye exact use krte hai */}
      
      {/* <Routes>
          <Route exact path="/about" element={<About />} />
          
          < Route exact path="/" element= {<TextForm heading="Enter the text to analyse: " mode={mode}/>} /> 
      </Routes> */}

   <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
   {/* <About/> */}

   </div>
   {/* </BrowserRouter>  */}
    </>
  );
}

export default App;
