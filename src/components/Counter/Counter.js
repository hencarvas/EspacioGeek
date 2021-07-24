import React, { useState } from 'react';


const Contador = ({ inicial, stock }) => {
  const [count, setCount] = useState(1);
  const add = () => {
    if (count === stock) {
      setCount(count);
    } else {
      setCount(count + 1);
    }
  };
  const min = () => {
  if (count === inicial){
   setCount (count);
  } else {
    setCount(count - 1)
  };
}

  return (
    <div className="contador">
      <button className="btn" onClick={min}> - </button>
      <p>{count}</p>
      <button className="btn" onClick={add}> + </button>
    </div>

  );


};

export default Contador;
