import React, { useState, useEffect } from 'react';

const App = props => {

  const [state, setState] = useState(props)
  const { name, price } = state
  // この分割代入の知識が浅い

  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate')
  })
  useEffect(() => {
    console.log('This callback is for name only')
  }, [name])
  // 第一引数に関数を受け取れる
  // 第二引数にからの配列を渡すとcomponentDidMountは実行されない
  // 第二引数の配列にプロバティを渡すとそのコンポーネントに変化があったときのみレンダリングされる
  // 状態が変わるごとにレンダリングが行われる
  // useEffectはレンダリングのあとで実行される


  return (
    <>
      <p>
        現在の{name}は{price}円です。
        <button onClick={() => setState({ ...state, price: price + 1 })}>+1</button>
        <button onClick={() => setState({ ...state, price: price - 1 })}>-1</button>
        <button onClick={() => setState(props)}>Reset</button>
        <input value={name} onChange={e => setState({ ...state, name: e.target.value })} />
      </p>
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App;
