import React from 'react'
import '../styles/InputStyle.scss'


export default function Input(props) {
    return (
        <input className='input' placeholder={props.placeholder} onChange={(evt) => props.setValue(evt.target.value)} value={props.value}/>
    )
}
