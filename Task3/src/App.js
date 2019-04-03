import React, { Fragment } from 'react';
import Input from './inputSection'
import List from './listSection'
import Trash from './Trash'
import heart from './heart.png'

export default class App extends React.Component {

  state = {
    text: '',
    list: [
      { text: 'Default', isDone: false }
    ],
    selected : null,
    trash: [],
    posX: 0,
    posY: 0,
    //imgvisibility: null,
  }

  addToTrash = (event) => {
    const { list, selected, trash } = this.state;
    if(selected === null) {
      console.log("nothing selected");
      return;
    }
    let selectedText = selected.text;
    const newList = list.filter( item => item.text!==selectedText );

    this.setState ({
      trash : [...trash, { selectedText , isDone: false }],
      list : newList,
      //imgvisibility: null,
    });
  }

  selectElement = (currentItem) => {
    const selectedElement = currentItem;
    this.setState ({
      selected: selectedElement,
     // imgvisibility: "visible"
    })
    console.log(this.state.selected + "selected");
  }

  unSelect = (event) => {
    this.setState ({
     // imgvisibility : "hidden",
      selected: null
    })
  }

  Move = (event) => {
    if(this.selected === null){
      this.setState ({
      //  imgvisibility: "hidden"
      })
    }
    else{
    // var offset = this.offset();
      var sX = event.pageX;
      var sY = event.pageY;
      
      this.setState ({
        posX: sX,
        posY: sY,
      //  imgvisibility : "visible",
      })
        //console.log(event.screenX, event.screenY);
        console.log("moved");
    }
  }


  changeDoneStatus = (currentItem, targetIndex) => {
    const { list } = this.state;
    const newList = list.map((item,idx)=> {
      if (targetIndex === idx){
        return {...item, isDone : !item.isDone};
      }
      return item;
    })

    this.setState ({
      list: newList
    })

  }

  add = (event) => {
    const { text, list } = this.state;
    if(text === ''){
      alert("Write something!");
      return;
    }
    const element = list.find(element => element.text === text);
    if(element){
      alert("This element has already been added!");
      return;
    }
    else{
      this.setState ({
        list : [...list, { text, isDone: false }],
        text: ''
      });
    }
  }

  addWithEnter = (event) => {
    if(event.key === 'Enter')
      return this.add(event);
  }

  clear = (event) => {
    if(this.state.text === ''){
      alert("Write something!");
      return;
    }
    else{ 
      let element = this.state.list.find(element => element.text === this.state.text);
      if(element === undefined){
        alert("Element didn't be founded!");
      }
      else{
        this.setState ({
            list : this.state.list.filter( item => item.text!==this.state.text ),
            text : ''
          });
      }
    }
  }

  clearAll = (event) => {
      this.setState ({
        list: [],
        text: ''
      });
  }

  update = (event) => {
    this.setState ({ text : event.target.value })
  }

  render(){
    return (
      <div
      style = {{ position: 'absolute', width: '100%', height: '100%' }}
      onMouseOver={this.Move}
      onMouseUp={this.unSelect}
      >
      <div id="moving" style={{top:this.state.posY, left:this.state.posX, visibility: this.state.selected!=null ? "visible" : "hidden"}}>
         <img src={heart} style={{height: 40}}/>
      </div>
      <header className="header"
       
      >
        <h1 style={{ color: "47b924" }}>TO-DO LIST</h1>
        <Input 
          text={this.state.text} 
          updateText={this.update}
          onKeyPress={this.addWithEnter}
        />
        
        <button 
          type="button"
          className="button"
          onClick={this.add}
        >
          Add
        </button>
        <button 
          type="button"
          className="button"
          onClick={this.clear}
        >
          Clear
        </button>
        <button 
          type="button"
          className="button"
          onClick={this.clearAll}
        >
          Clear All
        </button>
        <br></br>
        <p>Number: {this.state.list.length}</p>
        <Trash
          onMouseUp = {this.addToTrash}
          trash={this.state.trash}
        />
        <List     
          list={this.state.list}
          onClick = {this.changeDoneStatus.bind(this)}
          onMouseDown = {this.selectElement}
        />      
      </header> 
      </div>

     )
  }
}





