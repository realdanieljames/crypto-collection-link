import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { getUserById, getAllUsers } from "../../store/actions/actionCreators";
import "./UserProfile.css";
import Avatar from '@material-ui/core/Avatar';

const UserProfile = (props) => {
  window.localStorage.getItem("jwtToken");
  let token = window.localStorage.getItem("jwtToken");
  let decoded = jwt_decode(token);
  console.log(decoded);
  //===================================================================================//
  //===================================================================================//
  
  // const [loggedInUser, setLoggedInUser] = useState({})
  
  //===================================================================================//
  //===================================================================================//
  useEffect(() => {
    props.getAllUsers();
    props.getUserById(decoded.id);
    // setLoggedInUser(props.selectedUser)
    // console.log(loggedInUser)
  }, []);

  console.log(props);


  return (
    <div>
      <div>
        <button>Click here!</button>
      </div>

      <div className="user__profile__container">
        <div className="user__profile__stats">
          <img />
          <Avatar src="/broken-image.jpg" height={'1000px'} />
          <h1>Profile Name{props.selectedUser.email}</h1>
          <h3>
            Following <br />
            100
          </h3>
          <h3>
            Followers <br />
            100
          </h3>

          <h2>Collection Rank #:1</h2>
          <h2>Highest Rank #:1</h2>
          <h2>Lowest Rank #:1</h2>
        </div>

        <div className="user__profile__feed"></div>

        <div className="user__crypto__collection">
          <h1>Collection Value</h1>
          <h1>$4,419,000</h1>
          {props.selectedUser.username}
        </div>
        <div>
          {/* ({props.selectedUser.userCollection.map((value) => {
            //  console.log(value)
            // <div>{value}</div>;

          })}) */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    selectedUser: state.selectedUser,
  };
};
export default connect(mapStateToProps, { getUserById, getAllUsers })(
  UserProfile
);
