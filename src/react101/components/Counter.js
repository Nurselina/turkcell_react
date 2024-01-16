import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(1);

    useEffect(() => {
     let interval = setInterval(() => {
        console.log("interval");
        setCount((prev) => prev +1) 
      }, 2000)
      return () => clearInterval(interval);
    })

   /*  useEffect(() =>{
      console.log("Bir state değişti.");
    })
 
    useEffect(() => {"Component mount edildi."}, [])

    useEffect(() => {"Count state değişti."}, [count])
 */
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() =>setCount(count + amount) }>Arttır</button>
        <hr />
        <div>Arttırma: +{amount} </div>
        <button onClick={() => setAmount(1)}>+1</button>
        <button onClick={() => setAmount(3)}>+3</button>
        <button onClick={() => setAmount(10)}>+10</button>
    </div>
  )
}
