import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Counter.css';
import Display from './display';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [num, setNum] = React.useState(0);

  
  const red = Math.round((count / 100) * 255);
  const blue = Math.round(((100 - count) / 100) * 255);
  const backgroundColor = `rgb(${red}, 0, ${blue})`;

  const pageWrapperStyle = {
    backgroundColor: backgroundColor,
    margin: 0,
    padding: 0,
    height: '150vh',
    transition: 'background-color 0.5s ease', 
  };

  const entered_number = (e) => {
    const value = e.target.value;
    if (value === '') {
      setNum('');
      return;
    }
    const entered_value = parseInt(e.target.value, 10);
    if (!isNaN(entered_value) && entered_value >= 0 && entered_value <= 100) {
      setNum(entered_value);
    } 
    else {
      toast.warn("Lütfen 0 ile 100 arasında bir sayı girin.");
    }
  };

  function handleClick() {

    const artisMiktari = Number(num) || 0;

    if (count + artisMiktari <= 100) {
      const yeniDeger = count + artisMiktari;
      setCount(yeniDeger);
      toast(`Sayaç: ${yeniDeger}`);

      
    } else {
      toast.error("Sayaç 100'ü geçemez!");
    }

   
    const fontFamily = ['Arial', 'Verdana', 'Courier New', 'Georgia', 'Times New Roman'];
    const randomFont = fontFamily[Math.floor(Math.random() * fontFamily.length)];
    document.body.style.fontFamily = randomFont;
  }

  return (
    <div style={pageWrapperStyle}>
      <label className='increaseAmount'>Artış Miktarı: </label>
      <input
        type='number'
        value={num}
        onChange={entered_number}
        className='input'
      />
      
      <Display currentCount={count} />
      <br />
      <button className="increment" onClick={handleClick}>Increment</button>
      
      <ToastContainer position='top-center' autoClose={2000}/>
    </div>
  );
};

export default Counter;