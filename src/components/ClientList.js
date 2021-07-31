import React, { Component } from 'react'
import axios from 'axios'


class ClientList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            client: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/clients/list')
        .then(response => {
            console.log(response)
            this.setState({client: response.data})
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render(){
        const { client } = this.state
        return(
            <div>
                <h1>All Clients</h1>
                {
                    client.length ?
                    client.map(client => <div key = {client.id}><h3>{client.firstName, client.lastName}</h3></div>) : null
                }
            </div>
        )
    }

}
export default ClientList