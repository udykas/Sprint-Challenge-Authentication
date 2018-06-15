import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jokes: [],
         }
    }

    componentDidMount() {
        const token = localStorage.getItem('jwt');
        const requestOptions = {
            headers: {
                Authorization: token,
            },
        };

        axios.get('http://localhost:5000/api/jokes', requestOptions)
            .then(response => {
                this.setState({ jokes: response.data });
            })
            .catch(err => {
                console.error("Error retrieving Jokes", err.message)
            })
    }


    render() { 
        return ( 
            <ul className='jokes'>
                {this.state.jokes.map(joke => <li className='joke' key={joke._id}>{joke}</li>)}
            </ul>
        )
    }
}
 
export default Jokes;
