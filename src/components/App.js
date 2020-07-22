import React, { useReducer, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Event from './Event.js'

import reducer from '../reducers/index'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  //  第一引数にはreducerを渡す
  //  第二引数にはdefaultの状態の指定
  //  第三引数は初期化時のみ発火したいコールバックがあれば指定する
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  // reducerで扱うものはevent
  const addEvent = e => {
    e.preventDefault()
    console.log({ title, body })
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })

    setTitle('')
    setBody('')
    // actionにはtypeが絶対に必要
  }
  return (
    <div className="App container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;