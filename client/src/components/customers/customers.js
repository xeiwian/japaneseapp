import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         customers: []
    //     }
    // }

    state = {
        content: '',
        correctAnswer: '',
        possibleAnswer: ''
    }
    // // it runs automatically when the component is mounted
    // componentDidMount() {
    //     fetch('/api/customers')
    //         .then(res => res.json())
    //         .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
    // }
    componentDidMount = async () => {
        const url = 'api/question';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({content: data.content, correctAnswer: data.correctAnswer, possibleAnswer: data.possibleAnswer})

    }

    render() {
        return (
            <div>
                <p>{this.state.content}</p>
                <p>{this.state.correctAnswer}</p>
                <p>{this.state.possibleAnswer[0]}</p>
                <p>{this.state.possibleAnswer[1]}</p>
            </div>
        )
        // return (
        //     <div>
        //         <h2>Customers</h2>
        //         <ul>
        //             {this.state.customers.map(customer => 
        //                 <li key={customer.id}>{ customer.firstName } { customer.lastName }</li>
        //             )}
        //         </ul>
        //     </div>
        // )
    };

}

export default Customers;
