import { useState } from 'react';
import React from 'react'
import Button from "./Button";
import Input from "./Input";

const Footer = (props) => {
    const [value, setValue] = useState('');

    return (
        <div className='d-flex justify-content-between mt-2'>
            <Input placeholder='Add todo...' setValue={setValue} value={value} />
            <Button color='white' bgColor='green' text='Add' onClick={() => { props.todoDispatch({ type: 'add', payload: { text: value } }); setValue('') }} />
        </div>
    )
}

export default Footer