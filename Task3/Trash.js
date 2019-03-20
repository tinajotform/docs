import React from 'react';
import icon from './icon.png'


export default class Trash extends React.Component {

    render(){
        const {list, selectedElement} = this.props;
        return (
            <div id="trash" className="droppable"
            onDragOver={(e)=>this.props.onDragOver(e)}                    
            onDrop={(e)=>this.props.onDrop(e)}            >
             <img id="icon" src= {icon}/>
            </div>
         )
    }
}