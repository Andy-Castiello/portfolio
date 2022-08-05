import React from 'react';

import Hamburguesa from './Hamburguesa/Hamburguesa'
import Logo from './Logo/Logo'
import Links from './Links/Links';
import Redes from './Redes/Redes';

import './Toolbar.css';

import GLOBAL from '../../Globals';

import {connect} from 'react-redux';
import {setToolbarDisplayAction} from '../../redux/toolbarDucks';


class Toolbar extends React.Component{

    constructor(props){

        super(props);
    }
  
    render(){

        let style = {};
        switch(this.props.toolbar.display){

            case GLOBAL.TOOLBAR.EXPANDED:
                style ={
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"flex-start",
                    width:"100vw",
                    height:"100vh",
                    backgroundColor:"#131515",
                    borderTop:".5rem solid whitesmoke",
                    borderBottom:".5rem solid whitesmoke"
                }
                break;
            default:
                style ={}
        }

        return (
            <header style={style} className="nav-bar">
                <Hamburguesa />
                <Logo />
                <Links />
                <Redes />
            </header>
        )
    }
}

export default connect(state=>{return{toolbar:state.toolbar}},{setToolbarDisplayAction})(Toolbar);