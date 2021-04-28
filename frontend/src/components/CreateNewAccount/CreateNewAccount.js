import {useState, useRef, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import validator from 'validator'




 const CreateNewAccount = (props) => {
   console.log(props)
  const [open, setOpen] = useState(false);
  const emailRef = useRef()
  const passwordRef = useRef()
  const userNameRef = useRef()
  const [emailError, setEmailError] = useState(false)



  // const [username, setUserName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  //=============================================================================================================//
  //=============================================================================================================//

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const userToken = window.localStorage.jwtToken
// const decodedJwtToken =  jwt_decode(userToken)



  //=============================================================================================================//
  //=============================================================================================================//
 const createAccountSubmitButton = async (e)=>{
    // e.preventDefault()
    console.log(e)
    if(!validator.isEmail(emailRef.current.value)){
        setEmailError(true)
        return
    }else {
        setEmailError(false)
    }

    try {
        // console.log('hello');
        // console.log(emailRef.current.value)
        
        let success = await axios.post("http://localhost:3001/api/users/register", {
        // username: username,
        //   email: email,
        //   password: password,
          username: userNameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
      })
      
      window.localStorage.setItem("jwtToken", success.data.token)
        console.log(success);
         if(success.status === 200){
             alert(`${userNameRef.current.value} Successfully Created an Account`)
             handleClose()
         }
    } catch (error) {
        console.log(error);
        if(error){
          alert(`There was an error in input fields, please check Username, Email ,and Password then Try Again`)
      }
    }
}


  //=============================================================================================================//
  //=============================================================================================================//
const logout = async (e)=>{
  // e.preventDefault()
window.localStorage.removeItem("jwtToken")  

  alert(` Successfully Logged OUT`)
  
  console.log(props)

}


  //=============================================================================================================//
  //=============================================================================================================//
const checkForToken =()=>{
  if(window.localStorage.getItem('jwtToken')){
  // console.log('hter')
    let token = window.localStorage.getItem("jwtToken")
    let decoded = jwt_decode(token)
    // console.log(decoded.email)
    // return window.localStorage.getItem('jwtToken')
    return 'Logout'
    // window.localStorage.getItem('jwtToken')?window.localStorage.jwtToken.email: 'Login'
  }
  else return 'Create New Account'
  }


  //=============================================================================================================//
  //=============================================================================================================//
return (
    <div>

        {/* <span className="create__account__button" onClick={userToken? logout:handleClickOpen}>{userToken?'Logout': 'Create New Account'} </span> */}
        <span className="create__account__button" onClick={userToken? logout:handleClickOpen}>{checkForToken()} </span>
        {/* <span className="create__account__button" onClick={handleClickOpen}>Create New Account </span> */}

      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth='xs'  aria-labelledby="form-dialog-title">
        
        <DialogContent>
          <DialogTitle id="form-dialog-title"><h1>Create an Account</h1><h3>It's quick and easy.</h3> </DialogTitle>
          {/* <DialogContentText> */}
       
          {/* </DialogContentText> */}
          {/* <hr/> */}


{/* //=============================================================================================================// */}
{/* //=============================================================================================================// */}
          <TextField
            // autoFocus
            // size='normal'
            variant='outlined'
            margin="dense"
            id="username"
            label="Username"
            // type="email"
            fullWidth
            inputRef={userNameRef}
            // onChange={e => setUserName(e.target.value)}
          />

          {/* <hr/> */}
          <TextField

            // size='normal'
            variant='outlined'
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            inputRef={emailRef}
            // onChange={e => setEmail(e.target.value)}
          />
          <br/>
          <TextField
            // size='normal'
            variant='outlined'
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            inputRef={passwordRef}
            // onChange={e => setPassword(e.target.value)}
          />
          <TextField
            // size='normal'
            variant='outlined'
            margin="dense"
            id="confirm password"
            label="Confirm Password"
            type="password"
            fullWidth
            
          />
          {/* <hr/> */}

        <h3>Already have an account? <a href="">Click here to Log In.</a></h3>
        </DialogContent>
        {/* <hr/>
      <hr/>
      <hr/>
      <hr/> */}

{/* //=============================================================================================================// */}
{/* //=============================================================================================================// */}

        <DialogActions>
          {/* <button  style={{backgroundColor: 'yellow', fontSize:'15px', borderRadius:'7px', padding: '10px', color: 'black'}} onClick={handleClose} >
           {'<<<< ❌ Sign up Later'}
          </button> */}
          <button style={{backgroundColor: 'yellow',  fontSize:'15px', borderRadius:'7px', padding: '10px',  marginBottom: '20%'}} onClick={createAccountSubmitButton} >
            Create Account ➕
          </button>
        </DialogActions>

      </Dialog>
    </div>



  );
};

export default CreateNewAccount;