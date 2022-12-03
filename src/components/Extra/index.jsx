import React from 'react';
import Extra2 from "./Extra2"
import {context} from "../context";
import { useContext } from 'react';

const Extra = () => {

  const data=useContext(context);
  console.log(data);

  return (
    <>
      <div className="card p-5 shadow-lg mx-auto w-75 mt-5 bg-warning">
        <h2 className="text-center text-white">Extra Page</h2> 
        <Extra2 />
     </div> 
    </>
  );
};

export default Extra;