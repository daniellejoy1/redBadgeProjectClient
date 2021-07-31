import React, { Component } from 'react';
import axios from 'axios';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';


class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();

        const data = {user: {
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role,
        }
        }

        axios.post('http://localhost:3001/user/login', data)
        .then(res =>{
            localStorage.setItem('token', res.token);
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }


render () {
    return(
        <div>
            <h3>Hello, Login</h3>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor='username'>Username</Label>
                    <Input type= 'text' onChange = {(e) => this.username = e.target.value} name = 'username' value = {this.username}/>
                    {/* {usernameError && <p style = {{color: 'red', fontSize: '10px' }}>invalid email</p>} */}
                    {/* <span style={{ fontWeight: ‘bold’, color: ‘red’,}}>{emailError}</span> */}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input type= 'password' onChange = {(e) => this.password = e.target.value} name = 'password' value = {this.password} />
                    {/* {passwordError && <p style = {{color: 'red', fontSize: '10px'}}>Password must be 5 or more characters</p>} */}
                </FormGroup>
                <Button type = 'submit' className = 'login-button'>Login</Button>
            </Form>
        </div>
    )}
}
export default Login;

// import React, {useState, useEffect, useRef} from 'react';
// import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
// const Login = (props) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const firstRender = useRef(true);
//     const [disabled, setDisabled] =  useState(true);
//     const [usernameError, setUsernameError] = useState(null)
//     const [passwordError, setPasswordError] = useState(null);
// useEffect(() => {
//     if (firstRender.current){
//         firstRender.current = false
//         return
//     }
//     setDisabled(formValidation())
// }, [username, password])
// const formValidation = () => {
//     if (username === '') {
//         setUsernameError('must provide username')
//         return true
//     }
//     if (password === ''){
//         setPasswordError('must provide password')
//         return true
//     }
//     else {
//         setPasswordError(null)
//         setUsernameError(null)
//         return false
//     }
// }
//     let handleSubmit = (event) => {
//         event.preventDefault();
//         fetch('http://localhost:3001/user/login', {
//             method: 'POST',
//             body: JSON.stringify({user: {username: username, password: password}}),
//             headers: new Headers({
//                 'Content-Type': 'application/json'
//             })
//         }).then(
//             (response) => response.json()
//         ).then((data) => {
//             props.updateToken(data.sessionToken)
//         })
//     }