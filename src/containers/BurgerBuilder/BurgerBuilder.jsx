import React, { Component } from 'react'
import Aux from '../../hoc/aux_x'
import Burger from '../../burger/Burger'
import BurgerControls from '../../burger/BuildControls/BuildControls'

export default class BurgerBuilder extends Component {
  state = {
    ingrediens: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }
  render() {
    return (
        <Aux>
            <Burger ingrediens={this.state.ingrediens} />
            <BurgerControls />
        </Aux>
    )
  }
}
