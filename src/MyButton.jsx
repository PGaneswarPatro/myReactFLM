import React from "react";

const MyButton = (properties) => {
  const { buttonText:text,  color:textColor, handleSubmitHere} = properties;
 
  return (
    <div>
      {/* <button style={{ color: textColor }} onClick={handleSubmitHere}>{text}</button>
      <h3 style={{color:textColor}}>Hello Dunia...</h3> */}


    </div>
  );
};

export default MyButton;
