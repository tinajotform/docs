import React from 'react';
import icon from './icon.png'


export default class Trash extends React.Component {

    render(){
        return (
            <div id="trash" className="droppable"
            onMouseUp={(e)=>this.props.onMouseUp(e)} 
            >
             <img id="icon" src= {icon}/>
             
            </div>
         )
    }
}