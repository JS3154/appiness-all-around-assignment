import React from 'react'

export default function Input(props) {
    return (
        <div>
           <input type={props.type} onChange={(e)=>props.onChangeHandler(e.target.value)}></input> 
        </div>
    )
}


