import React, { useState } from "react";
import style from "./UserDetails.module.css";

const UserDetails = (props) => {
  const [user, setUser] = useState();
  const [follow, setFollow] = useState("Follow");
//   const [data, setData] = useState(array);


  const handleFollow = () => {
    if (follow === "Follow") {
      setFollow("UnFollow");
    } else {
      setFollow("Follow");
    }
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.userDetailsContainer}>
        <div className={style.imgContainer}>
          <img
            className={style.profileImage}
            src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?t=st=1766918512~exp=1766922112~hmac=bd057821211684a55bffab18f9d1534c00a0779b31bbe75306851c50b9439be9"
            alt="image"
          />
        </div>
        <div>
          <div>
            
                 <h3>{props.first_name} {props.last_name}</h3>
            
          </div>
          <div>
            <p>{props.location} {props.country}</p>
          </div>
        </div>

        <div className={style.blocks}>
          <h3>{props.post}</h3>
          <p>karma</p>
        </div>

        <div>
          <h3>{props.followers}</h3>
          <p>followers</p>
        </div>

        <div>
          <h3>{props.following}</h3>
          <p>posts</p>
        </div>

        <div className={style.followBtn}>
          <button onClick={handleFollow}>{follow}</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
