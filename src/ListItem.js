import React from 'react'
const ListItem=props=>(
     <li >{props.fname} {props.lname} {props.uname} played {props.show ? props.game:'*'} games </li> 
)
export default ListItem;