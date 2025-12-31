import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./component/gretting/Greeting";
import MyButton from "./component/stateChange/MyButton";
import UserDetails from "./component/userDetails/UserDetails";
import Map from "./component/map/Map";
import Deposit from "./component/deposit/Deposit";
import Counter from "./component/deposit/Counter";
import ApiReq from "./component/deposit/ApiReq";
import Home from "./component/SearchEngineApp/SearchEngineHome/Home";
// import MyButton from "./MyButton";
// import Greeting from "./Greeting";

const array = [
  {
    first_name: "Jefferson",
    last_name: "Lars",
    post: 10,
    followers: 25,
    following: 10,
    location: "vizag",
    country: "RU",
  },
  {
    first_name: "Gracia",
    last_name: "Sindall",
    post: 2,
    followers: 2,
    following: 2,
    location: "vzm",
    country: "AU",
  },
  {
    first_name: "Averil",
    last_name: "Dungate",
    post: 3,
    followers: 3,
    following: 3,
    location: "Grand Am",
    country: "BR",
  },
  {
    first_name: "Israel",
    last_name: "Futcher",
    post: 4,
    followers: 4,
    following: 4,
    location: "Countach",
    country: "US",
  },
  {
    first_name: "Harley",
    last_name: "Harcus",
    post: 5,
    followers: 5,
    following: 5,
    location: "Murciélago",
    country: "TR",
  },
];
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(array);

  const handleClickHere = () => {
    console.log("click here");
  };

  const handleSubmitHere = () => {
    console.log("submit here..");
  };

  const handlePayHere = () => {
    console.log("pay here..");
  };

  const handleDoneHere = () => {
    console.log("Done here..");
  };

  let userAuthenticated = true;
  let content;

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      {/* <MyButton buttonText="Click here" color="blue"  handleClickHere={handleClickHere}/>
      <MyButton buttonText="submit" color="green" handleSubmitHere={handleSubmitHere}/>
      <MyButton buttonText= "Pay" color="gray" handlePayHere={handlePayHere} />
      <MyButton buttonText="Done" color="yellow" handleDoneHere={handleDoneHere}/> */}

      {/* {userAuthenticated ? (
        <h3 className="App">user authenticated..</h3>
      ) : (
        <h3>user not authenticated..</h3>
      )} */}

      {/* <Greeting/> */}
      {/* <h2>{count}</h2> */}

      {/* <MyButton setCount={handleClick} />
      <MyButton setCount={handleClick} /> */}
      {/* 
      <UserDetails
        first_name={data[0].first_name}
        last_name={data[0].last_name}
        country={data[0].country}
        location={data[0].location}
        post={data[0].post}
        followers={data[0].followers}
        following={data[0].following}
      />

      <UserDetails
        first_name={data[1].first_name}
        last_name={data[1].last_name}
        country={data[1].country}
        location={data[1].location}
        post={data[1].post}
        followers={data[1].followers}
        following={data[1].following}
      />


      <UserDetails
        first_name={data[2].first_name}
        last_name={data[2].last_name}
        country={data[2].country}
        location={data[2].location}
        post={data[2].post}
        followers={data[2].followers}
        following={data[2].following}
      />


      <UserDetails
        first_name={data[4].first_name}
        last_name={data[4].last_name}
        country={data[4].country}
        location={data[4].location}
        post={data[4].post}
        followers={data[4].followers}
        following={data[4].following}
      />


      <UserDetails
        first_name={data[3].first_name}
        last_name={data[3].last_name}
        country={data[3].country}
        location={data[3].location}
        post={data[3].post}
        followers={data[3].followers}
        following={data[3].following}
      /> */}

      {/* {data.map((user, index) => (
        <UserDetails
          key={index}
          first_name={user.first_name}
          last_name={user.last_name}
          country={user.country}
          location={user.location}
          post={user.post}
          followers={user.followers}
          following={user.following}
        /> 
     ))} */}

      {/* <Map/> */}

      {/* <Deposit /> */}
      {/* <Counter /> */}

      <ApiReq/>

      {/* <Home/> */}
    </>
  );
}

export default App;
