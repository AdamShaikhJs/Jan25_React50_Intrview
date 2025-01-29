import React from 'react';

export default function CountTask() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setTimeout(() => {
      alert(count);
    }, 3000);

  }

  return (
    <div>
      <button onClick={handleClick}>Show Count</button>
      <button onClick={() => setCount((pre) => pre + 1)}>Increment</button>
    </div>
  );
}


