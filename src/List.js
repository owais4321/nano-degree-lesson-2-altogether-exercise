import React from 'react'
import ListItem from './ListItem';
const List=props=>(
<ol>	
{props.users.map((user)=>(
     <ListItem
  	fname={user.fname}
	lname={user.lname}
	uname={user.uname}
	game={props.game}
	show={props.show}
  />

     
     ))}
<br/>

{props.users.length!==0 && (<button className='smallButton' onClick={props.toggleHandler}>{props.show ? 'Hide users':'Show users'}</button>)} 
</ol>     
)

export default List