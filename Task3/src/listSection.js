import React from 'react';

export default class List extends React.Component {

    render(){
        const {list} = this.props;

         return (
            <div className="listDiv">
                <ul 
                    className="UL"
                >
                    {list.map((currentItem, currentIndex) => <li>{currentItem}</li> )}
                   
                </ul>
            </div>
        )
    }

 
}