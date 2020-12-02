import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function Counter() {

    const counter = useSelector(state => state.counter);
    const input = useSelector(state => state.text);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{counter.number}</h1>
            <button onClick={ ()=> dispatch({type: 'MINUS_ONE'}) }>-</button>
            <button onClick={ ()=> dispatch({type: 'ADD_ONE'}) }>+</button>
            <button onClick={ ()=> dispatch({type: 'BG_SET'}) }>color</button>

            <h1>{input.text}</h1>
            <input onChange={ (e)=> dispatch({type: 'GET_TEXT', payload: e.target.value}) } />

            
        </div>
    )
}

//input text or number
//input radio
//input checkbox
//input select
//input textarea
//input file

