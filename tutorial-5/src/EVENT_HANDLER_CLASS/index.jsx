import { Component } from "react";

class EVENT_HANDLER_CLASS extends Component {

    constructor(props) {
        super(props)

        this.state = {
            changeVale: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            changeVale : e.target.value
        }, () => {
            console.log(this.state.changeVale);
        })

        
    }

    render() {
        return (
            <>
               <input type="text" onChange={this.handleChange}/>
               <p>{this.state.changeVale}</p>
            </>
        )
    }
}

export default EVENT_HANDLER_CLASS;