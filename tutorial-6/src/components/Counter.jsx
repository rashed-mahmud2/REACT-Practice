import { useState } from "react";

export default function Counter() {
     let [count, setCount] = useState(0);
     let [message, setMessage] = useState("");

     function increment() {
      // ekhane (count + 1) use korle, count = current value or latest value; so if we use count + 1, we mean  current value + 1; here current value alaways 0 in first render; and in 2nd render of rerender the current value will be 4;
        setCount(count + 1)  // 0 + 1 = 1     4 + 1 = 5    8 + 1 = 9
        setCount(count + 1)  // 0 + 1 = 1     4 + 1 = 5    8 + 1 = 9
        setCount(count + 1)  // 0 + 1 = 1     4 + 1 = 5    8 + 1 = 9
      // ar setCount() funciton er vitore ekta parameter niye aro ekta function pass korle parameter ekhane previous value e replace koreprevCount = Previous value; We should use it Only when we want to sure, we add value form the privous value. 
        setCount(prevCount => prevCount + 1)  // 1 + 1 = 2    5 + 1 = 6    9 + 1 = 10
        setCount(prevCount => prevCount + 1)  // 2 + 1 = 3    6 + 1 = 7    10 + 1 = 11
        setCount(prevCount => prevCount + 1)  // 3 + 1 = 4    7 + 1 = 8    11 + 1 = 12
        setMessage("hellow")
        
      //   console.log(count);
        
     }


    return (
       <>
         <h1>Count : {count}</h1>
         <h2>Message : {message}</h2>
         <button onClick={increment}>Increment</button>
         
       </>
    )
}

