// import React, { useState } from 'react';

// export default function CountAlertTask() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     // Use a functional update to ensure we are getting the latest count
//     setTimeout(() => {
//       setCount(prevCount => {
//         alert(prevCount); // Use the previous count value directly
//         return prevCount;
//       });
//     }, 3000);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Show Count</button>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
//     </div>
//   );
// }
