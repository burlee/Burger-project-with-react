import React from 'react';
import Aux from '../../hoc/aux_x';
import classes from './Layout.css'

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrdop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);


export default layout;