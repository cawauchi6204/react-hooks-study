import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const devide3 = () => setCount(previousCount => {
    if (previousCount % 3 === 0) {
      return previousCount / 3
    } else {
      return previousCount;
    }
  })

  const increment2 = () => setCount(previousCount => previousCount + 1)

  const decrement2 = () => setCount(previousCount => previousCount - 1)

  const calculate2 = () => setCount(count * 2)



  const reset = () => setCount(0)
  // useStateは配列を返す
  // 引数には初期値を入れる
  return (
    <>
      <div className="App">
        count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={calculate2}>*2</button>
        <button onClick={devide3}>3の時だけ3でわる</button>
      </div>
    </>
  );
}

export default App;
