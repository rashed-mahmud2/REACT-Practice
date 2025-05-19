import React, { Component } from "react";

class STATE extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count : 0
        }
    }

    handleIncrement = () =>  {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement = () =>  {
        this.setState({
            count: this.state.count - 1
        })
    }


    render() {
        const {count} = this.state
        return(
            <>
              <h1>Count: {count}</h1>
              <button className="btn" onClick={this.handleIncrement} disabled={count===20 ? true : false}>+</button>
              <button className="btn" onClick={this.handleDecrement} disabled={count===0 ? true : false}>-</button>
            </>
        )
    }
} 

export default STATE;