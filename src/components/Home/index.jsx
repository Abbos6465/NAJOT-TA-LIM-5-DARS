import React from "react";
import "./Home.scss";
import Extra from "../Extra";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="card p-5 shadow-lg mx-auto w-100 mt-5">
          <h1 className="text-center text-danger">Home Page</h1>
          <Extra/>
            <button className="btn btn-outline-warning m-5 w-50 mx-auto fw-bold" onClick={()=>reverse(data)}>Send</button>
        </div>
      </div>
    </>
  );
};

export default Home;
