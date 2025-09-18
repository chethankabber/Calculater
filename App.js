import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import Input from "./components/input";
import {useState} from "react";
import * as math from 'mathjs';


const App = () => {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  
console.log(text);
  const addToText = (val) => {

    setText((text) => [...text, val+" "]);
  }

  const resetAll = () => {
    setText("");
    setResult("");
  }

  const calculateResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  }


  return (
    <div className="App">
    <div className='containerCal'>
      <h1>Calculater</h1>
      <Input text = {text} result={result}/>
      
      <div className='row'>
        <Button symbol={"1"} handleClick={addToText} />
        <Button symbol={"2"} handleClick={addToText}/>
        <Button symbol={"3"} handleClick={addToText}/>
        <Button symbol={"+"} color={"#b5f04f"} handleClick={addToText}/>
      </div>
      <div className='row'>
        <Button symbol={"4"} handleClick={addToText}/>
        <Button symbol={"5"} handleClick={addToText}/>
        <Button symbol={"6"} handleClick={addToText}/>
        <Button symbol={"-"} color={"#b5f04f"} handleClick={addToText}/>
      </div>
      <div className='row'>
        <Button symbol={"7"} handleClick={addToText}/>
        <Button symbol={"8"} handleClick={addToText}/>
        <Button symbol={"9"} handleClick={addToText}/>
        <Button symbol={"*"} color={"#b5f04f"} handleClick={addToText}/>
      </div>
      <div className='row'>
        <Button symbol={"."} color={"#b5f04f"} handleClick={addToText}/>
        <Button symbol={"0"} handleClick={addToText} />
        <Button symbol={"/"} color={"#b5f04f"} handleClick={addToText}/>
        <Button symbol={"="} color={"#b5f04f"} handleClick={calculateResult}/>
      </div>
      <div className='clearBtn'>
        <Button symbol={"Clear"} color={"#e02424"} handleClick={resetAll}/>
      </div>
      
    </div>
    </div>
  );
}

export default App;
