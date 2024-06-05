
// let count=0;
// function HandleButtonClick(){
//     count+=1;
//     console.log(count)
// }

import { useState } from "react";



export default function Counter(){
    let [count,setCount] =useState(0);
    function HandleButtonClick(){
        setCount(count+1)
         //   count+=1;
          //  console.log(count)
         } 
   // console.log(arr)
    return (
        <>
        <button onClick={HandleButtonClick}>Count is : {count} </button>
        </>
    );
}