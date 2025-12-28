import React from "react";

const array = [
  {
    name: "ganesh",
    state: "Andhra Pradesh",
    gender: "male",
  },

  {
    name: "saikiran",
    state: "Andhra Pradesh",
    gender: "female",
  },

  {
    name: "harish",
    state: "TG",
    gender: "male",
  },

  {
    name: "chandu",
    state: "Andhra Pradesh",
    gender: "male",
  },
  {
    name: "ravi",
    state: "Andhra Pradesh",
    gender: "male",
  },
];

const Map = () => {
  return (
    <>
      <div>
        {array.map((ele, index) => {
          return (
            <div key={index}>
              <h3> {index}. {ele.name} - {ele.gender} - {ele.state}</h3>
            
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Map;
