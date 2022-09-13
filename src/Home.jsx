import React from 'react';
import { useDispatch,useSelector } from 'react-redux';

const Home = () => {
    const dispatch=useDispatch();

    const {c}=useSelector(state=>state.custom);

    const addBtn=()=>{
        dispatch({
            type:"increment",
        })
    };
    const subBtn=()=>{
        dispatch({
            type:"decrement",
        })
    };

    const valueBtn=()=>{
        dispatch({
            type:"incrementByValue",
            payload:10,
        })
    };

  return (
    <div>
        <h1>{c}</h1>
        <button onClick={addBtn}>Increment</button>
        <button onClick={subBtn}>Decrement</button>
        <button onClick={valueBtn}>IncrementBy10</button>

    </div>
  )
}

export default Home
