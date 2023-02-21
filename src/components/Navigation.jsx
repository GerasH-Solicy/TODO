import React from 'react'
import Button from './Button'
import { Select } from 'antd'

const Navigation = (props) => {


    const handleChange = (value) => {
        props.setFilter(value);
    };

    return (
        <div className='d-flex'>
            <Button color='black' bgColor='yellow' text='Clear finished' onClick={() => props.dispatch({ type: 'clearFinished' })} />
            <Select
                defaultValue="All"
                style={{
                    width: 120,
                }}
                onChange={handleChange}
                options={[
                    {
                        value: null,
                        label: 'All',
                    },
                    {
                        value: true,
                        label: 'Finished',
                    },
                    {
                        value: false,
                        label: 'Current',
                    },
                ]}
            />
        </div>
    )
}

export default Navigation