import { useState } from 'react';
import classes from './Counter.module.scss';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className={classes.div}>{counter}</div>
      <button
        className={classes.button}
        onClick={() => setCounter(counter + 1)}
      >
        Add me
      </button>
    </>
  );
}
