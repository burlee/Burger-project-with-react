import React, { Component } from 'react'
import Aux from '../../hoc/aux_x'
import Burger from '../../burger/Burger'

export default class BurgerBuilder extends Component {
  state = {
    ingrediens: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }
  render() {
    return (
        <Aux>
            <Burger ingrediens={this.state.ingrediens} />
            <div>Control</div>
        </Aux>
    )
  }
}
