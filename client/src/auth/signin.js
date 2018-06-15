import React, { Component } from 'react';
import axios from 'axios';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
         }
    }

    inputChangeHandler = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    submitHandler = event => {
        event.preventDefault();

        axios
            .post('http://localhost:5000/api/login', this.state)
            .then(response => {
                localStorage.setItem('jwt', response.data.token);
                this.props.history.push('/jokes');
            })
            .catch(err => {
                console.error("There was an error logging in", err.message);
            })
    };

    render() { 
        return (
            <div className="form">
                <form className="signin-form" onSubmit={this.submitHandler}>
                    <div>
                        <label>Username: </label>
                        <input  
                            value={this.state.username}
                            onChange={this.inputChangeHandler}
                            name='username'
                            type='text'
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input
                            value={this.state.password}
                            onChange={this.inputChangeHandler}
                            name='password'
                            type='password'
                        />
                    </div>
                    <div>
                        <button type="submit">Sign in</button>
                    </div>
                </form>
            </div>
        )
    }
}
 
export default Signin;
