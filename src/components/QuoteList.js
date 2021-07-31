import React, { Component } from 'react'
import axios from 'axios'


class QuoteList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            quote: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/quotes/list')
        .then(response => {
            console.log(response)
            this.setState({quote: response.data})
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render(){
        const { quote } = this.state
        return(
            <div>
                <h1>All Quotes</h1>
                {
                    quote.length ?
                    quote.map(quote => <div key = {quote.id}><h3>{quote.address, quote.estimator}</h3></div>) : null
                }
            </div>
        )
    }

}
export default QuoteList