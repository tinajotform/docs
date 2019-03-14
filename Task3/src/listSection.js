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
                            onClick = {this.props.changeDoneStatus}   > 
                            {currentItem.text}
                        </li>)
                    )} 
                </ul>
            </div>
        )
    }
}