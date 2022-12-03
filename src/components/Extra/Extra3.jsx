import React,{useContext} from 'react';
import {context} from "../context";

const Extra3 = () => {

  const data=useContext(context);
  console.log(data);

  return (
    <>
      <div className="card p-5 shadow-lg mx-auto w-75 mt-5 bg-info">
        <h4 className="text-center text-white">Extra-3 Page</h4> 
        <p></p>
     </div> 
    </>
  );
};

export default Extra3;