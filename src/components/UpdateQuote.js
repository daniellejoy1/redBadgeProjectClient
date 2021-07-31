import React, { Fragment, Component } from 'react'
import axios from 'axios'

class UpdateQuote extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
    // constructor(props) {
    //     super(props)

        const data = {
            quote:{
                id: this.id,
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
        axios.put(`http://localhost:3001/quotes/update/${this.id}`, data)
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
                    
                <h1>Edit Quote Information</h1>
                <label>Quote ID</label>
                    <input type ="text" name = "id" value = {this.id} onChange={(e) => this.id = (e.target.value)}></input>
                
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

export default UpdateQuote