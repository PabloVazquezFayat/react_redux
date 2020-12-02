import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function Counter() {

    const counter = useSelector(state => state.counter);
    const input = useSelector(state => state.text);
    const { data } = useSelector(state => state.data);
    const dispatch = useDispatch();

    const [name, setName] = useState({});

    const getData = async()=> {
        if(!data.data){
            const { data } = await axios.get('http://localhost:4000/api/characters/read/1');
            dispatch({type: 'GET_DATA', payload: data});
        }
    }

    const sendData = async(update)=> {

        const updatedCharacter = data.data.find((char)=> char._id === update.id);
        updatedCharacter.name = update.name;

        const updatedData = await axios.put('http://localhost:4000/api/characters/update', updatedCharacter);

        return updatedData;
    }

    const characterList = ()=> {
        if(data.length !== 0){
            return data.data.map((char, i)=>{
                return  <li key={i}>
                            <p>{char.name}</p>
                            <input onChange={ (e)=> setName({id: char._id, name: e.target.value}) } />
                            <button onClick={async ()=> {
                                const updatedData =  await sendData(name);
                                if(updatedData){
                                    dispatch({type: 'GET_DATA', payload: data});
                                }
                            }}>Save</button>
                        </li>
            });
        }
    }

    // setTimeout(getData, 1000);
    getData();

    return (
        <div>
            <h1>{counter.number}</h1>
            <button onClick={ ()=> dispatch({type: 'MINUS_ONE'}) }>-</button>
            <button onClick={ ()=> dispatch({type: 'ADD_ONE'}) }>+</button>
            <button onClick={ ()=> dispatch({type: 'BG_SET'}) }>color</button>

            <h1>{input.text}</h1>
            <input onChange={ (e)=> dispatch({type: 'GET_TEXT', payload: e.target.value}) } />

            <ul>{characterList()}</ul>

        </div>
    )
}

