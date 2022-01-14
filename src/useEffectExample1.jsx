import React, { useEffect, useState } from "react";
export default function Level03() {
  console.log("renderLevel03");
  const [count, setCount] = useState(0);
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
  useEffect(() => {
    const interval = setInterval(() => {
      /* using callback on useState re-render component */
      setCount((c) => c + 1);
      // setCount(count + 1);
    }, 300);
    /* console.log("renderLevel03"); */
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      count ={">"} {count}
    </div>
  );
}
