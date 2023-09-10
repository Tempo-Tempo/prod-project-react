import { useState } from "react";
import classes from  "./Counter.module.scss";

export const Counter = () => {
   const [count, setCount] = useState(0)

   const incerment = () => {
      setCount(count + 1);
   }

   return (

      <div>
         <h1 className={classes.btn}>{count}</h1>
         <button onClick={incerment}>increment</button>
      </div>
   )
}
