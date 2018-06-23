import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/aux_x'

const sideDrawer = (props) => {
  let clas = [classes.SideDrawer, classes.Close];
  if(props.open){
      clas = [classes.SideDrawer, classes.Open]
  }
  console.log(clas)
  return (
        <Aux>
            <Backdrop show={props.open} modalClosed={props.closed}/>
            <div className={clas.join(' ')}>
                <Logo height="11%"/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
  )
}

export default sideDrawer;
