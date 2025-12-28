import React, { useState } from "react";

const MyButton = (props) => {
  //   const [count, setCount] = useState(0);

  const { setCount } = props;

  return (
    <div>
      <button onClick={setCount}>Click Me</button>
    </div>
  );
};

export default MyButton;
