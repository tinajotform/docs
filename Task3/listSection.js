import React from 'react';

export default class List extends React.Component {

    render(){
        const {list} = this.props;
         return (
            <div className="listDiv">
                <ul 
                    className="UL"
                >
                    {list.map(
                        (currentItem, currentIndex) => 
                        (<li style={{ textDecoration: currentItem.isDone ? 'line-through' : null }}
                            draggable
                            onClick = {() => this.props.onClick(currentItem,currentIndex)}
                            onDragStart = {(e) => this.props.onDragStart(currentItem)} 
                        > 
                            {currentItem.text}
                        </li>)
                    )} 
                </ul>
            </div>
        )
    }
}