import React, { useState } from "react";
import PostItem from "./PostItem";

const ApiReq = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] =  useState();

  const fetchData = async () => {
    try {
      setLoading(true);
      let URL = "https://jsonplaceholder.typicode.com/posts";
      let response = await fetch(URL); // promise (success or failure)
      let data = await response.json(); //to convert json to object.
      console.log("data ", data);
      setPost(data);
      setLoading(false);
    } catch (error) {
        setIsError(true);
      setLoading(false);
      console.log("error :- ", error.message);
      setError(error.message);
    }
  };
  console.log("posts", post);


  if(isError){
    return <h2>{error}</h2> 
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div>ApiReq</div>

      <button onClick={fetchData}>Get Post</button>

      {post.length > 0 && post.map((ele, index) => {
        return (
          <div key={index}>
            <PostItem ele={ele} index={index} />
          </div>
        );
      })}
    </>
  );
};

export default ApiReq;
