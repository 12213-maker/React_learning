/* eslint-disable */

import React, { memo } from 'react'
import useCounter from '../../store/zusand';

const Zusand = memo(() => {
  const { count, obj, increment, decrement, handlerC } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <p>obj.c :{obj.a.b.c}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={()=>handlerC(4)}>handlerC</button>
    </div>
  );
})

export default Zusand