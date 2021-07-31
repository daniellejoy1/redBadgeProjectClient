import React, { Component } from 'react'
import axios from 'axios'

class Quote extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
    // constructor(props) {
    //     super(props)

        const data = {
            quote:{
            address: this.address,
            serviceDescription: this.serviceDescription, 
            estimator: this.estimator,
            price: this.price,
            squareFootage:this.squareFootage,
            quoteStatus:this.quoteStatus,
            notes:this.notes
            }
        }
    
//     handleChange = (event) => {
//         this.setState({ [event.target.name] : event.target.value})
// // may not need "event" in (). if throws error, try to remove
//     }
 

    
        console.log(data)
        axios.post('http://localhost:3001/quotes/new', data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}


    render () {
        return (
            <form onSubmit= {this.handleSubmit}>
                <div>
                <h1>Create New Quote Request</h1>
                    <label>Job Site Address</label>
                    <input type ="text" name = "address" value = {this.address} onChange={(e) => this.address = (e.target.value)}></input>
                </div>
                <div>
                    <label>Service Description</label>
                    <input type ="text" name = "serviceDescription" value = {this.serviceDescription} onChange={(e) => this.serviceDescription = (e.target.value)}></input>
                </div>
                <div>
                    <label>Assigned Estimator</label>
                    <input type ="text" name = "estimator" value = {this.estimator} onChange={(e) => this.estimator = (e.target.value)}></input>
                </div>
                <div>
                    <label>Price</label>
                    <input type ="text" name = "price" value = {this.price} onChange={(e) => this.price = (e.target.value)}></input>
                </div>
                <div>
                    <label>Square Footage for Quote</label>
                    <input type ="text" name = "squareFootage" value = {this.squareFootage} onChange={(e) => this.squareFootage = (e.target.value)}></input>
                </div>
                <div>
                    <label>Quote Status</label>
                    <input type ="text" name = "quoteStatus" value = {this.quoteStatus} onChange={(e) => this.quoteStatus = (e.target.value)}></input>
                </div>
                <div>
                    <label>Notes</label>
                    <input type ="text" name = "notes" value = {this.notes} onChange={(e) => this.notes = (e.target.value)}></input>
                </div>
                <button type = "submit">Submit</button>
            </form>
        )
    }
}

export default Quote