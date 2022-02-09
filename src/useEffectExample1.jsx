import React, { useEffect, useState, useRef, useCallback } from "react";
export default function Level03() {
  console.log("renderLevel03");
  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);

  /*   const start = () => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
      //setCount(count + 1);
    }, 500);
  };
  const stop = () => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
 */

  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 500);
  }, []);
  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  /*  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount((c) => c + 1);
    }, 500);
    return () => clearTimeout(timeout);
  }, [count]);
 */

  /*   useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []); */
  /*  When the new state is calculated using the previous state, you can update the state with a callback: */

  /*  useEffect(() => {
    const interval = setInterval(() => {
      // using callback on useState re-render component 
      setCount((c) => c + 1);
      // setCount(count + 1);
    }, 300);
     //console.log("renderLevel03"); 
    return () => clearInterval(interval);
  }, []);
 */

  return (
    <div>
      count ={">"} {count}
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
}
