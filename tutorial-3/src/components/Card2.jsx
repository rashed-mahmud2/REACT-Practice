// This is Class component

import React, {Component} from 'react'

class Card2 extends Component {
   render() {
    const {name,love} = this.props
      return (
        <>
          <h4>This is form Card 2 as Class Component</h4>
          <p>{name}</p>
          <p>{love}</p>

        </>
     )
   }
}

export default Card2;