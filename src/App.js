import "./App.css";
import Navbar from "./Component/Navbar";
import Form from "./Component/Form";
import { useState } from "react";
import Alert from "./Component/Alert";
import { Switch, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import About from "./Component/About";

function App() {
  const[Mode, setMode]=useState('light');
  const[alert, setalert]=useState(null);

  const showalert=(msg,type)=>{
    setalert({
      message : msg,
      type : type
    })
    setTimeout(()=>{
      setalert(null);
    },1500);
  }
  const toggle=()=>{
    if(Mode==='light'){
      console.log("dark");
      setMode('dark');
      document.body.style.backgroundColor= '#0F4C75';
      showalert("Dark mode Enabled", "dark");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showalert("Light mode Enabled", "light");

    }
  };
  return (
    
    <>
    <BrowserRouter>
    <Navbar title="Drakroom" Mode={Mode} toggle={toggle} />
    <Alert alert={alert}/>
        <Routes>
          <Route path="/" element={<Form  Mode={Mode} toggle={toggle} showalert={showalert}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
