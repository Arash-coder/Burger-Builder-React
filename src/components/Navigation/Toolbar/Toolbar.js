import React from 'react';

import Logo from '../../Logo/Logo';

import classes from './Toolbar.module.css';
import Navigationitems from '../Navigationitems/Navigationitems'
import Drawertoggle from '../Sidedrawer/Drawertoggle/Drawertoggle';

const Toolbar = (props)=>(
<header className={classes.Toolbar}>
    <Drawertoggle clicked={props.arash} />
    <Logo height="80%" />
    <nav className={classes.Desktoponly}>
        <Navigationitems />
    </nav>
</header>
);

export default Toolbar;