import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { getUserById, getAllUsers, showCryptoData, setCryptoData } from "../../store/actions/actionCreators";
import "./UserProfile.css";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';




  //===================================================================================//
  //===================================================================================//
  
const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  //   '& > *': {
  //     margin: theme.spacing(1),
  //   },
  // },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));
  //===================================================================================//
  //===================================================================================//
  


const UserProfile = (props) => {



  //===================================================================================//
  //===================================================================================//
  
  useEffect(() => {
    window.localStorage.getItem("jwtToken");
    let token = window.localStorage.getItem("jwtToken");
    let decoded = jwt_decode(token);
    console.log(decoded);
    console.log(props)
    props.getAllUsers();
    props.getUserById(decoded.id);
    // props.showCryptoData()
    // props.selectedUser.userCollection.map((value)=>{
    //   let gatheredCollection =   props.showCryptoData(value)
      
    //   console.log(gatheredCollection)
    //   console.log(value)
    //   return gatheredCollection
    // })


  }, []);

  console.log(props);
  const classes = useStyles();

  //===================================================================================//
  //===================================================================================//
  
  return (
    <div>
    

      <div className="user__profile__container">
        <div className="user__profile__stats">
          {/* <img /> */}
          <div className="user__profile__avatar">

          <Avatar src="/broken-image.jpg" className={classes.large}  />
          </div>
          <h1>{props.selectedUser.email}</h1>
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
          <div>
            {props.selectedUser.userCollection.map((value) => {
              //  console.log(value)
              <div>{value}</div>;
  
            })}
          </div>
          {props.selectedUser.username}
          {props.selectedUser.userCollection.map((value)=>{
            // if{value === selected}
            // props.showCryptoData(value)
            return <div>{value}</div>
          })}
        </div>
      </div>
    </div>
  );
};
  //===================================================================================//
  //===================================================================================//
  
const mapStateToProps = (state) => {
  return {
    cryptoData: state.cryptoData,
    userData: state.userData,
    selectedUser: state.selectedUser,
    selectedCryptoDisplay: state.selectedCryptoDisplay,
  };
};
export default connect(mapStateToProps, { getUserById, getAllUsers, showCryptoData,setCryptoData })(
  UserProfile
);
