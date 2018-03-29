import React, { Component } from 'react';
import Card from './Card';

class CardContainer extends Component {
    constructor(){
        super()

        this.state = {
            showViolation: false,
            gradeColor: {
                A: '#ADD8E6',
                B: '#98FB98',
                C: '#ff7f7f'
            }
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
