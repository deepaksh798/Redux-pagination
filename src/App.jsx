import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from './features/dataSlice';

function App() {
  
  const dispatch = useDispatch()

  const state = useSelector((state) => state.cardData)

  useEffect(() => {
      setTimeout(() => {
      console.log("here");
      const fatchdataFunc = () => {
        dispatch(fetchData())
      }
      fatchdataFunc();
    }, 5000);
    }, [])
    
  return (
    <>
        {/* <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => dispatch(fetchData())}>Fetch data</button> */}
        <div >
        {state.data ? <div className="grid md:grid-cols-3 gap-4">
          { state.data.map((data,index) => (
          <a key={index} href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">{data.body}</p>
            </div>
          </a>   
          ))}
          </div>
          : <h1 className='text-5xl'>Loading...</h1> }
      </div>     
    </>
  )
}

export default App
