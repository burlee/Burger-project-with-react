import React from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/aux_x';
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
  return (
    <Aux>
        <Backdrop show={props.show} modalClosed={props.modalClosed} />
            <div 
                className={classes.Modal}
                style={{
                    transform : props.show ? 'translateY(0px)' : 'translateY(-300px)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
    </Aux>
  )
}


export default Modal;