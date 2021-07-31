import React, { Fragment, Component } from 'react'
import axios from 'axios'

class DeleteQuote extends Component {
    handleSubmit = (e) => {
        e.preventDefault()

        const data =  {quote:{
            id: this.id}}

        axios.delete(`http://localhost:3001/clients/delete/${this.id}`, data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
render(){
    return(
<form onSubmit= {this.handleSubmit}>
<div>
<h2>Delete Quote</h2>
<label>Quote ID</label>
<input type ="text" name = "id" value = {this.id} onChange={(e) => this.id = (e.target.value)}></input>
<button type = "submit">DELETE</button>
</div>
</form>
    )}
}
export default DeleteQuote