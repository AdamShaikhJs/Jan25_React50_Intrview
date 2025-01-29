import React from 'react';

export default function CountTask() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setTimeout(() => {
      alert(count);
    }, 3000);
  }



  function handleClickSol() {
    // Use a functional update to ensure we are getting the latest count
    setTimeout(() => {
      setCount(prevCount => {
        alert(prevCount); // Use the previous count value directly
        return prevCount;
      });
    }, 3000);
  }


  return (
    <main>
      <button onClick={handleClick}>Show Count</button>
      <button onClick={handleClickSol}>Show Count SOl</button>
      <button onClick={() => setCount((pre) => pre + 1)}>Increment</button>
      <p>instead of directly using the count state in the setTimeout, we’re using the functional update approach inside setTimeout. The setCount function takes a callback, and the prevCount argument in the callback always refers to the most up-to-date value of the state.
      Inside the setTimeout, we call alert(prevCount) to ensure that we always display the latest count state.</p>
    </main>
  );
}


