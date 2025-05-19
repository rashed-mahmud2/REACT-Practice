import { Component } from "react";
import styles from './Index.module.css'

class EVENT_BINDING extends Component {

    handleIncrement () {
        this.setState((preState) => ({
            count: preState.count + 1
        }))
    }

    handleDecrement () {
        this.setState((preState) => ({
            count: preState.count - 1
        }))
    }

    constructor(props) {
        super(props)

        this.state = {
            count : 0
        }
    }

    render() {
        return (
            <>
               <h1 className={styles.heading}>Count: {this.state.count}</h1>
               <button className={styles.btn} onClick={this.handleIncrement.bind(this)}>increment</button>
               <button className={styles.btn} onClick={this.handleDecrement.bind(this)}>Decrement</button>
            </>
        )
    }
}

export default EVENT_BINDING;

