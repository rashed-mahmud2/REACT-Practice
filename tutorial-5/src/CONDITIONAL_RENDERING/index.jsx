import { Component } from "react";

import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

class CONDITIONAL_RENDERING extends Component {

    constructor(props) {
        super(props)

        this.state = {
           isLogedin: true
        }
    }

    render() {

        const {isLogedin} = this.state
        
        return (
            <>
              <h1>Hii form Conditional rendering</h1>
              {isLogedin && <HomePage />}
            </>
        )
    }
}

export default CONDITIONAL_RENDERING;
