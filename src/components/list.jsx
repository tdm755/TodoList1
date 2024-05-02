import React from 'react'

function List(props) {
  return (
    <>
      <div className='item' >
        <li contentEditable >  {props.text}</li> 
        <span onClick={props.checked} id='del'>remove</span> 
      </div>
    </>
  )
}

export default List
