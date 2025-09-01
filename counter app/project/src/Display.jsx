import React from "react";
import './display.css';

function DisplayCount({ currentCount }) {
  return (
    <div className='count'>
      Counter: {currentCount}
    </div>
  );
}

export default DisplayCount;