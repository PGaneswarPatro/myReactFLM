import React, { useState } from "react";
import user from "../User.json";

const Home = () => {
  const [name, setName] = useState("");

  const checkName = (name) => {
    user.filter((ele) => {
        console.log("name",ele.name)
      return ele.name == name;
    });
  };

  const handleInput = (e) => {
    // console.log(e.target.value);
    const inputName = e.target.value;
      setName(inputName);
      if (inputName == checkName(name)) {
        console.log("name match:- ", inputName);
    }
  };
  return (
    <div>
      <h1>Search engine</h1>
      <input type="text" onChange={handleInput} />
      <h3>{name}</h3>
    </div>
  );
};

export default Home;
