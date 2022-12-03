import React,{useState,useEffect} from 'react';
import "./App.scss";
import Home from "../Home";
import {Routes,Route} from "react-router-dom";
import {context} from "../context";

const App = () => {

  const [data,setData]=useState([]);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(res=> setData(res))
    .catch(error=> alert("Error"));
  },[])

  return (
    <>
      <context.Provider value={{data}}>
        <Routes>
           <Route path="/" element={<Home/>} />
        </Routes>
      </context.Provider>
    </>
  );
};

export default App;