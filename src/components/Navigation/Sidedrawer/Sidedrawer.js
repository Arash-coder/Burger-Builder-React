import React from 'react';

import Logo from '../../Logo/Logo';
import classes from './Sidedrawer.module.css';
import Navigationitems from '../Navigationitems/Navigationitems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';
const Sidedrawer = (props) =>{

    let attatchedclasses = [classes.Sidedrawer,classes.Close];
    if(props.open){
        attatchedclasses = [classes.Sidedrawer,classes.Open];
    }

    return(
        <Auxiliary>
        <Backdrop show={props.open} clicked={props.closed} />
        <div className={attatchedclasses.join(' ')}>
            <Logo height="11%" marginbottom="32px" />
            <nav>
                <Navigationitems />
            </nav>
        </div>
        </Auxiliary>
    );
};


export default Sidedrawer;