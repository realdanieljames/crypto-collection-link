import {useState, useRef} from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from 'axios'
import jwt_decode from "jwt-decode";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';





//=============================================================================================================//
//=============================================================================================================//

// async function loginUser(credentials) {
//   // return fetch('http://127.0.0.1:8080/api/signin', {
//   return fetch('/api/signin', {

//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
    
//     //  axios.create({
//     //    baseURL: 'api',
//     //    timeout: 5000
//     //  })
//  }


//=============================================================================================================//
//=============================================================================================================//



 const Login = () => {
  const [open, setOpen] = useState(false);
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

const emailRef = useRef()
const passwordRef = useRef()

  //=============================================================================================================//
  //=============================================================================================================//

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //=============================================================================================================//
  //=============================================================================================================//
  // const userToken = window.localStorage.jwtToken
  // let decodedJwtToken =  jwt_decode(window.localStorage.getItem("jwtToken"))

  const handleSubmit = async e => {
    // e.preventDefault();


    console.log('hello');
    


    try {
        let success = await axios.post("/api/users/login", {

        // username: username,
        // email:email,
        // password:password,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        })
        console.log(success)

        // console.log(success.data.token);
        // console.log(jwt_decode(success.data.token))
        window.localStorage.setItem("jwtToken", success.data.token)
        if(success.status === 200){
          alert(`${emailRef.current.value} Successfully Logged In`)
          handleClose()
      }
        // const userToken = window.localStorage.jwtToken
        // const decodedJwtToken =  jwt_decode(userToken)
        // props.history.push('/rankings')
    } catch (error) {

        console.log({message: "please enter email and password" , error: error});
        if(error){
          alert(`${emailRef.current.value} does not exist, please retry with another email, or Create A New Account`)
      }
        // setErrorMessage(true)
    } 
  

  }
const checkForToken =()=>{
if(window.localStorage.getItem('jwtToken')){
// console.log('hter')
  let token = window.localStorage.getItem("jwtToken")
  let decoded = jwt_decode(token)
  // console.log(decoded.email)
  // return window.localStorage.getItem('jwtToken')
  return decoded.email
  // window.localStorage.getItem('jwtToken')?window.localStorage.jwtToken.email: 'Login'
}
else return 'Login'
}

// console.log(checkForToken())
//=============================================================================================================//
//=============================================================================================================//

return (
    <div>

    {/* <span className="login__button" onClick={handleClickOpen}>Login</span> */}

    {/* <span className="login__button" onClick={handleClickOpen}>{userToken?window.localStorage.jwtToken.email: 'Login'}</span> */}
    <span className="login__button" onClick={handleClickOpen}>{checkForToken()}</span>
 
      <Dialog open={open} onClose={handleClose}  aria-labelledby="form-dialog-title"
       fullWidth={true} maxWidth='xs'
      >


        <DialogContent>
          <DialogTitle id="form-dialog-title"><h1> Log In </h1> <h3>Sign In to an existing account.</h3></DialogTitle>
          
          {/* <DialogContentText>
            <h3>New to Crypto Collection? <a href="">Create an Account here.</a></h3>

          </DialogContentText> */}

          {/* <TextField
            variant='outlined'
            margin="dense"
            id="username"
            label="Username or Email"
            type="email"
            fullWidth
            onChange={e => setUserName(e.target.value)}
          /> */}

          {/* <hr/> */}
          <TextField
            variant='outlined'
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            // onChange={e => setEmail(e.target.value)}
            inputRef={emailRef}
            />
          {/* <hr/> */}
          <TextField
            variant='outlined'
            margin="dense"
            id="password"
            label="Password"
            type="email"
            fullWidth
            // onChange={e => setPassword(e.target.value)}
            inputRef={passwordRef}
          />
        

            <DialogContentText>
            <h3>New to Crypto Collection? <a href="">Create an Account here.</a></h3>

          </DialogContentText>


        </DialogContent> 



        

        <DialogActions>
          {/* <button  style={{backgroundColor: 'gold', fontSize:'15px', borderRadius:'7px', padding: '10px'}} onClick={handleClose} >
          ❌ Cancel
          </button> */}
          <button style={{backgroundColor: 'yellow',  fontSize:'15px', borderRadius:'7px', padding: '10px', marginBottom: '20%'}} 
            onClick={handleSubmit} >
           Login 🔑 🚪
          </button>
        </DialogActions>
   
      </Dialog>
    </div>
    // </div>
  );
};


// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }




export default Login;