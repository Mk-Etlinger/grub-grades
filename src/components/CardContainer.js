import React, { Component } from 'react';
import Card from './Card';

class CardContainer extends Component {
    constructor(){
        super()

        this.state = {
            showViolation: false,
        }
    }

    handleShowViolation = () => this.setState({ showViolation: true })

    render() {
        return ( 
          <Card handleClick={ this.handleShowViolation }
            { ...this.state } 
            { ...this.props } />
        )
    }
}

export default CardContainer;
