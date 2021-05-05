import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    birthday = () => {
        this.setState({ age: this.state.age + 1 });
    }

    render () {
        const { firstName, lastName, hairColor, age} = this.props;
        return (
        <div>
            <p>{ console.log(this.state.age) }</p>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={this.birthday}>Birthday Button For {firstName} {lastName}</button>
        </div>
        )
    }
}

export default PersonCard;