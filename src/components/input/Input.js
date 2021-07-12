/* eslint-disable prettier/prettier */
import React, {useContext}  from 'react'
import {DarkContext} from '../container/Container'
import styles from './input.module.scss'

export default function InputUmix(
    {
        className,
        style,
        dark,
        onChange,
        stretched,
        type,
        placeholder,
    }) {

    const darkContainer  = useContext(DarkContext)
    
    return (
        <input 
            type="text"
            style={style} 
            className={
                styles.input + " " + 
                (dark == undefined ? (darkContainer ? styles.input_dark : styles.input_light) : (dark ? styles.input_dark : styles.input_light)) + " " +
                (stretched ? styles.input_stretched : "") + " " +
                (type === "rounded" ? styles.input_rounded : "") + " " +
                (className ? className : "")
            }
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}