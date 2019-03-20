import React from 'react';

export default class Input extends React.Component {

    render(){
        return (
        <div className="inputDiv">
            <p>What Needs To Be Done?</p>
            <input 
                type="text" 
                className="input" 
                placeholder="Add Something..." 
                value={this.props.text}
                onChange={this.props.updateText}
                onKeyPress={this.props.onKeyPress}
            /><br/>      
        </div>
        )
    }
}