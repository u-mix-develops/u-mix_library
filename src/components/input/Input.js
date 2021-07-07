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
                className
            }
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}