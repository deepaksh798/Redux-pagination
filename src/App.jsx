import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from './features/dataSlice';

function App() {
  
  const dispatch = useDispatch()

  const state = useSelector((state) => state.cardData)

  if(state.isLoading === true) {
    <h1>Loading...</h1>
    }

  return (
    <>
      <div>
        <button onClick={() => dispatch(fetchData())}>Fetch data</button>
        {state.data && state.data.map((data,index) => (
          <div key={index}>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
        
        ))}
        
      </div>
    </>
  )
}

export default App
