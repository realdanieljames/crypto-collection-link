import React,{useEffect} from "react";
import './UserProfile.css'

const UserProfile = (props) => {
  console.log(props)

  useEffect(()=>{
    
  })
  return (
    <div>
      <div>
        <button>Click here!</button>
      </div>

      <div className="user__profile__container">
        <div className="user__profile__stats">
            <img/>
            <h1>Profile Name</h1>
            <h3>Following <br/>100</h3>
            <h3>Followers <br/>100</h3>

            <h2>Collection Rank #:1</h2>
            <h2>Highest Rank #:1</h2>
            <h2>Lowest Rank #:1</h2>
        </div>

        <div className="user__profile__feed">

        </div>

        <div className="user__crypto__collection">
        <h1>
            Collection Value 
        </h1>
        <h1>
            $4,419,000
        </h1>
        </div>
        

      </div>
    </div>
  );
};

export default UserProfile;
