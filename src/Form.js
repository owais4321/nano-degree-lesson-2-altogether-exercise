import React from 'react';
const Form=props=>(
<div>
<h1>Add Users</h1>
<input
  onChange={props.changeHandler}
  name='fname'
 type='text'
 placeholder='Add First Name'
  value={props.value1}
  />
  <br/>
  <input
  name='lname'
  type='text'
  placeholder='Add Last Name'
	value={props.value2}
onChange={props.changeHandler}
  />
    <br/>
  <input
  name='uname'
  type='text'
  placeholder='Add Username'
value={props.value3}
onChange={props.changeHandler}
 />
{props.error && <p className='error'>Username Already Exists</p>}
    <br/>

  <button onClick={props.clickHandler} disabled={props.disable}>Add User</button>
  </div>
)
export default Form;