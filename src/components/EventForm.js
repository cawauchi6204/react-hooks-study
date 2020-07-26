import React, { useState } from "react"

import { CREATE_EVENT, DELETE_ALL_EVENTS } from "../actions"

const EventForm = ({ state, dispatch }) => {
    // const [state, dispatch] = useReducer(reducer, [])
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
            type: CREATE_EVENT,
            title,
            body
        })

        setTitle('')
        setBody('')
        // actionにはtypeが絶対に必要
    }

    const deleteAllEvents = e => {
        e.preventDefault()
        const result = window.confirm('全てのイベントを本当に削除しても良いですか?')
        if (result) dispatch({
            type: DELETE_ALL_EVENTS
        })
    }

    const unCreatable = title === '' || body === ''
    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
                <div className="form-group">
                    {/* <Event state={state} dispatch={dispatch} /> */}
                    <label htmlFor="formEventTitle">タイトル</label>
                    <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="formEventBody">ボディー</label>
                    <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
                </div>
                <button disabled={unCreatable} className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
                <button disabled={state.length === 0} className="btn btn-danger" onClick={deleteAllEvents}>全てのイベントを削除する</button>
            </form>
        </>
    )
}

export default EventForm
