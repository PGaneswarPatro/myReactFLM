import React from "react";

const PostItem = ({ ele, index }) => {
  //   const { ele, index } = props;
  return (
    <>
      <div key={index}>
        <p>
          {index} title:- {ele.title}
        </p>
        <p>
          {index} body:- {ele.body}
        </p>
      </div>
    </>
  );
};

export default PostItem;
