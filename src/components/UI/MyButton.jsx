import React from 'react'

import style from './MyButton.module.scss';

const MyButton = ({ value, currentValue, setValue }) => {
    return (
        <input
            type='button'
            className={style.button + ' ' + (value == currentValue ? style.checked : '')}
            value={value}
            onClick={() => setValue(value)}
        />
    )
}

export default MyButton