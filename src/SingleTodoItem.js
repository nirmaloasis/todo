import React, { Component } from 'react';

import './toDoItems.css';
class SingleTodoItem extends React.Component {
 constructor(props, context) {
   super(props, context);
   this.state = {editFlag:false,taskVal:""}
   this.edit = this.edit.bind(this);
   this.taskFn = this.taskFn.bind(this)
 }
 taskFn(e){
     this.setState({taskVal:e.target.value})
 }
edit(event){
    var {editFlag,taskVal} = this.state
    var {item} = this.props
    
    if( editFlag && taskVal != ""){
     this.props.edit(item.key,taskVal)
    }
   
    this.setState({editFlag:!editFlag})
}
 
 render() {
    var {item} = this.props
    var {editFlag,taskVal} = this.state
    var listCss = item.completed?"listCompletd":item.marked?"listMarked":"listItemNormal"
    return(
      <li  id="liItem" className={listCss} key={item.key} ><span className="textSpan"> {editFlag ?<input id={item.key} value={taskVal}  onChange={this.taskFn} placeholder="enter task" ></input>:item.text} </span>
      <div class="btn-group"><button onClick={this.edit}>Edit</button><button onClick={(e) => this.props.markItem(item.key)}>{item.marked?"Marked":"Mark"}</button><button onClick={(e) => this.props.completeItem(item.key)}>{item.completed?"completed":"complete"}</button><button onClick={(e) => this.props.delete(item.key, e)}>Delete</button></div></li>
    )
 }
};

export default SingleTodoItem;