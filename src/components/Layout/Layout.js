import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';
class Layout extends Component{
    state={
        showsidedrawer: false
    }
    sidedrawerclosehandler =()=>{
        this.setState({showsidedrawer:false});
    }
    sidedrawertogglehandler = ()=>{
        this.setState((prevState)=>{
            return {showsidedrawer:!prevState.showsidedrawer};
        });
    }

    render(){
        return(
            <Auxiliary>
        <Toolbar arash={this.sidedrawertogglehandler} />
        <Sidedrawer open={this.state.showsidedrawer} closed={this.sidedrawerclosehandler} />
        <main className={classes.Content}>
            {this.props.children}
        </main>
    </Auxiliary>
        )
    }
} 

export default Layout;