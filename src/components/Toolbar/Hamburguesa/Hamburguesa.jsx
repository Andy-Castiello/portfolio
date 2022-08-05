import React from "react";

import './Hamburguesa.css';

import GLOBAL from '../../../Globals';

import {connect} from 'react-redux';
import {setToolbarDisplayAction} from '../../../redux/toolbarDucks';

class Haburguesa extends React.Component{

    constructor(props){

        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (){

        switch(this.props.toolbar.display){

            case GLOBAL.TOOLBAR.NORMAL:

                this.props.setToolbarDisplayAction(GLOBAL.TOOLBAR.EXPANDING);
                return;
            case GLOBAL.TOOLBAR.EXPANDED:
              
                this.props.setToolbarDisplayAction(GLOBAL.TOOLBAR.SHRINKING);
                return;
            default:
                return;
        }
            
    }

    render(){

        if(this.props.clientWidth!=GLOBAL.CLIENTWIDTH.SMALL && this.props.toolbar.display!=GLOBAL.TOOLBAR.NORMAL)setTimeout(()=>{this.props.setToolbarDisplayAction(GLOBAL.TOOLBAR.NORMAL)},0)

        switch(this.props.toolbar.display){

            case GLOBAL.TOOLBAR.EXPANDING:
              
                setTimeout(()=>{if(this.props.clientWidth==GLOBAL.CLIENTWIDTH.SMALL){this.props.setToolbarDisplayAction(GLOBAL.TOOLBAR.EXPANDED)}else{this.props.setToolbarDisplayAction(GLOBAL.TOOLBAR.NORMAL)}},1300);
                break;
            case GLOBAL.TOOLBAR.SHRINKING:
       
                setTimeout(()=>{if(this.props.clientWidth==GLOBAL.CLIENTWIDTH.SMALL){this.props.setToolbarDisplayAction(GLOBAL.TOOLBAR.NORMAL)}else{this.props.setToolbarDisplayAction(GLOBAL.TOOLBAR.NORMAL)}},1300);
                break;
            default:
                break;
        }
        let containerClass = "";
        let containerStyle = {};
        const linesArray = [];
        switch(this.props.toolbar.display){

            case GLOBAL.TOOLBAR.NORMAL:
                containerClass="header__hamburguesa"
                for(let i=1;i<4;i++){

                    linesArray.push(<div className="header__hamburguesa__line"></div>)
                }
                break;
            case GLOBAL.TOOLBAR.EXPANDING:
                containerClass="header__hamburguesa--animate";
                containerStyle = {};
                for(let i=1;i<4;i++){

                    linesArray.push(<div className={"header__hamburguesa__line--animate header__hamburguesa__line--"+i}></div>)
                }
                break;
            case GLOBAL.TOOLBAR.EXPANDED:
                containerClass="header__hamburguesa--back";
                break;
            case GLOBAL.TOOLBAR.SHRINKING:
                containerClass="header__hamburguesa--shrink";
                for(let i=1;i<4;i++){

                    linesArray.push(<div style={{animationDirection:"reverse",animationDelay:"1s"}} className={"header__hamburguesa__line--animate header__hamburguesa__line--"+i}></div>)
                }
                break;
            default:
                containerClass="header__hamburguesa"
        }
        
        return(
            
            <div onClick={this.handleClick} className={containerClass}>
                {this.props.toolbar.display==GLOBAL.TOOLBAR.EXPANDED ? <div className="header__hamburguesa__back"></div>:""}
                {linesArray}
            </div>
        );
    }
}

export default connect(state=>{return{toolbar:state.toolbar,clientWidth:state.clientWidth}},{setToolbarDisplayAction})(Haburguesa);