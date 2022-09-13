
import React, { useState } from 'react'


export default function Form(props){
    const[ text, nxttext]=useState("Enter the text") ;
    const[ newtxt, newnewtxt]=useState("") ;
    const handleclickUC =()=>{
        console.log("Clicked the UC button");
        newnewtxt(text.toUpperCase());
        document.getElementById("exampleFormControlTextarea1").value=newtxt;
        props.showalert("Text converted to uppercase", "success");
    }
    const handlechange =(event) =>{
        console.log("on change")
        nxttext(event.target.value);

    }
    const handleclickLC =()=>{
        console.log("Clicked the LC button");
        newnewtxt(text.toLowerCase());
        document.getElementById("exampleFormControlTextarea1").value=newtxt;
        props.showalert("Text converted to lowercase", "success");
    }
    const handleclickLine =()=>{
        let str = text.toLowerCase().split(' ');
        for(var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        newnewtxt(str.join(' '));
        props.showalert("Text converted to Sentencecase", "success");
      }
      const handleCopy=()=>{
        var copyText = document.getElementById("exampleFormControlTextarea1");
       
        navigator.clipboard.writeText(copyText.value);
        props.showalert("Copied the text", "success");
      }
      const handleClear=()=>{
        var copyText = document.getElementById("exampleFormControlTextarea1");
        copyText.value='';
        nxttext('');
        newnewtxt('');
      }
      return(
        <>
    <div className={`container my-3 text-${props.Mode==="light"?"dark":"light"}`}>
    <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label display-4 m-2">Text Analyzer-<p className="text-muted display-6">Convert to 
  UpperCase, LowerCase, SentenceCase</p></label>
  <textarea style={{backgroundColor:props.Mode==="dark"?"#1B262C":"white",color:props.Mode==="dark"?"white":"dark"}}
  className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Enter text here" onChange={handlechange}></textarea>
  <button className="btn btn-primary m-2" type="button" onClick={handleclickUC}>To Uppercase</button>
  <button className="btn btn-primary m-2" type="button" onClick={handleclickLC}>To Lowercase</button>
  <button className="btn btn-primary m-2" type="button" onClick={handleclickLine}>SentenceCase</button>
  <button className="btn btn-primary m-2" type="button" onClick={handleCopy}>Copy to clipboard</button>
  <button className="btn btn-primary m-2" type="button" onClick={handleClear}>Clear</button>
  </div>
  <div>
    <h3>Summary</h3>
    <h5>Input Text</h5>
    <p>{text.length===0?"Enter text inside textarea":text}</p>
    <h5>Changed Text</h5>
    <p>{newtxt.length===0?"Enter text and click the desired button to change":newtxt}</p>
  </div>
  <div>
    <p style={{fontSize:'1.5rem'}}>Total number of words are <strong>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</strong> and total number of character <strong> {text.length}</strong> </p>
    <p style={{fontSize:'1.5rem'}}>Average time needed to read <strong>{(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)*0.4} Sec</strong></p>
  </div>
    </div>

    </>

);
}