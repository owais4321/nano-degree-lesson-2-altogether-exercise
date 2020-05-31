import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import List from './List'
/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state={
    users:[],
    fname:'',
    lname:'',
    unmae:'',
    toggle:true,
    disable:true,
    error:false,
    show:true,
    game:0,
    }

changeHandler=(event)=>{
this.setState({[event.target.name]:event.target.value})
}

checkUserExists=(uname)=>{
let unamelist=this.state.users.map(user=>user.uname.toLowerCase())
return unamelist.includes(uname.toLowerCase())
}
clickHandler=()=>{
let obj={
fname:this.state.fname,
lname:this.state.lname,
uname:this.state.uname,
}
if(!this.checkUserExists(obj.uname)){
this.setState((prevState)=>({
users:prevState.users.concat(obj),
  error:false
}))
}
else{
this.setState({error:true})
}
}

toggleHandler=()=>{
this.setState(prevState=>({
show:!prevState.show
}))
}
  render() {
	let {fname,lname,uname,users,disable,error,game,show}  = this.state;  
	if(!uname||!lname||!fname) disable=true;
	else disable=false;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<Form 
	error={error}
    value1={fname} 
	value2={lname} 
	value3={uname} 
	changeHandler={(event)=>{this.changeHandler(event)}}
	clickHandler={(event)=>{this.clickHandler(event)}}
	disable={disable}/>
	<List
	users={users}
	show={show}
	game={game}
	toggleHandler={()=>{this.toggleHandler()}}
	
	
	/>

</div>
    );
  }
}

export default App;