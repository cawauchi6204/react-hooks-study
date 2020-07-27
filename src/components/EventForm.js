import React, { useState, useContext } from "react"

import { CREATE_EVENT, DELETE_ALL_EVENTS, ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from "../actions"

import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const EventForm = () => {
    const { state, dispatch } = useContext(AppContext)
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
        dispatch({
            type: ADD_OPERATION_LOG,
            description: 'イベントを作成しました',
            operatedAt: timeCurrentIso8601()
        })

        setTitle('')
        setBody('')
        // actionにはtypeが絶対に必要
    }

    const deleteAllEvents = e => {
        e.preventDefault()
        const result = window.confirm('全てのイベントを本当に削除しても良いですか?')
        if (result) {
            dispatch({
                type: DELETE_ALL_EVENTS
            })
            dispatch({
                type: DELETE_ALL_OPERATION_LOGS,
                description: '全てのイベントを削除しました',
                operatadAt: timeCurrentIso8601()
            })
        }
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
                <button disabled={state.events.length === 0} className="btn btn-danger" onClick={deleteAllEvents}>全てのイベントを削除する</button>
            </form>
        </>
    )
}

export default EventForm
