import React, {Component} from 'react';
import axios from 'axios';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

class Signup extends Component {
    handleSubmit = e => {
        e.preventDefault();

        const data = {user: {
    firstName: this.firstName,
    lastName: this.lastName,
    username: this.username,
    email: this.email,
    password: this.password,
    role: this.role
        }
 }
 axios.post('http://localhost:3001/user/register', data)
 .then(res =>{
     localStorage.setItem('token', res.token);
     console.log(res)
 })
 .catch(err => {
     console.log(err)
 })
}

render (){
    return(
    <div className = "signup-container">
        <h3>Signup</h3>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label htmlFor="firstName">First</Label>
                <Input onChange={(e) => this.firstName = (e.target.value)} name = "firstName" value = {this.firstName}/>
               
            </FormGroup>
            <FormGroup>
                <Label htmlFor="lastName">Last</Label>
                <Input onChange={(e) => this.lastName = (e.target.value)} name = "lastName" value = {this.lastName}/>
               
            </FormGroup>
            <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input onChange={(e) => this.username = (e.target.value)} name = "username" value = {this.username} />
               
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input onChange={(e) => this.email = (e.target.value)} name = "email" value = {this.email} />
               
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type ="password" onChange={(e) => this.password = (e.target.value)} name = "password" value = {this.password}/>
               
            </FormGroup>
            <Button type = "submit"> Signup</Button>
        </Form>
    </div>
)
}
}

export default Signup;