import React, { Component } from 'react'
import axios from 'axios'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

class Client extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
    // constructor(props) {
    //     super(props)

        const data = {
            client:{
            firstName: this.firstName,
            lastName: this.lastName, 
            businessName: this.businessName,
            email: this.email,
            primaryPhoneNumber:this.primaryPhoneNumber,
            secondaryPhoneNumber:this.secondaryPhoneNumber,
            billingAddress:this.billingAddress
            }
        }
    
    
    // handleChange = (event) => {
    //     this.setState({ [event.target.name] : event.target.value})
// may not need "event" in (). if throws error, try to remove
    // }
 

    
        console.log(this.state)
        axios.post('http://localhost:3001/clients/new', data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render () {
        // const { firstName, lastName, businessName, email, primaryPhoneNumber, secondaryPhoneNumber, billingAddress } = this.state
        return (
            <Form onSubmit= {this.handleSubmit}>
                <FormGroup>
                    <h1>Create New Client</h1>
                    <label>First Name</label>
                    <input type ="text" name = "firstName" value = {this.firstName} onChange={(e) => this.firstName = (e.target.value)}></input>
                    </FormGroup>
                <FormGroup>
                    <label>Last Name</label>
                    <input type ="text" name = "lastName" value = {this.lastName} onChange={(e) => this.lastName = (e.target.value)}></input>
                    </FormGroup>
                <FormGroup>
                    <label>Business Name</label>
                    <input type ="text" name = "businessName" value = {this.businessName} onChange={(e) => this.businessName = (e.target.value)}></input>
                    </FormGroup>
                <FormGroup>
                    <label>E-Mail</label>
                    <input type ="text" name = "email" value = {this.email} onChange={(e) => this.email = (e.target.value)}></input>
                    </FormGroup>
                <FormGroup>
                    <label>Primary Contact Number</label>
                    <input type ="text" name = "primaryPhoneNumber" value = {this.primaryPhoneNumber} onChange={(e) => this.primaryPhoneNumber = (e.target.value)}></input>
                    </FormGroup>
                <FormGroup>
                    <label>Secondary Contact Number</label>
                    <input type ="text" name = "secondaryPhoneNumber" value = {this.secondaryPhoneNumber} onChange={(e) => this.secondaryPhoneNumber = (e.target.value)}></input>
                    </FormGroup>
                <div>
                    <label>Billing Address</label>
                    <input type ="text" name = "billingAddress" value = {this.billingAddress} onChange={(e) => this.billingAddress = (e.target.value)}></input>
                </div>
                <Button type = "submit" onSubmit = {this.handleSubmit}>Submit</Button>
            </Form>
        )
    }
}

export default Client
