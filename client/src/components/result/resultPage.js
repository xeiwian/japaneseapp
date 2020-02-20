import React, { Component } from 'react';
import './result.css';

class Result extends Component {
    constructor() {
        super();
        this.state = {
            user: []
        }
    }
    // it runs automatically when the component is mounted
    componentDidMount() {
        fetch('/api/userlogin')
            .then(res => res.json())
            .then(user => this.setState({user}, () => console.log('Customers fetched...', user)));
    }

    render() {
        return (
            <div>
                <h2>Congrats</h2>
                <ul>
                    {this.state.customers.map(customer => 
                        <li key={customer.id}>{ customer.firstName } { customer.lastName }</li>
                    )}
                </ul>
            </div>
        )
    };

}

export default Customers;