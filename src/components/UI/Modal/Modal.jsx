import React, {Component} from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/aux_x';
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
    
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
        
    } //We check props show that's update and we execute Modal component
    componentWillUpdate(){
        console.log('[MODAL]')
    }
    // componentDidMount(){
    //     console.log(this.props)
    // }This component cycle method is execute immediately after render component to DOM 
    render(){
        return (
            <Aux>
                <Backdrop show={this.props.show} modalClosed={this.props.modalClosed} />
                    <div 
                        className={classes.Modal}
                        style={{
                            transform : this.props.show ? 'translateY(0px)' : 'translateY(-600px)',
                            opacity: this.props.show ? '1' : '0'
                        }}
                    >
                        {this.props.children}
                    </div>
            </Aux>
        )
    }
}


export default Modal;