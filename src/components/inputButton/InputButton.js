/* eslint-disable prettier/prettier */
import React, {useContext}  from 'react'
import {DarkContext} from '../container/Container'
import styles from './inputButton.module.scss'

export default function InputUmix(
    {
        inputClassName,
        buttonClassName,
        className,
        style,
        dark,
        btnType,
        btnText,
        onChange,
        onClick,
        btnLeft,
        noStretched,
        placeholder,
    }) {

    const darkContainer  = useContext(DarkContext)
    
    return (
        <div className={
            (btnLeft ? styles.main_btn_left : styles.main_btn_right) + " " +
            className
        }>
            <input 
                type="text"
                style={style} 
                className={
                    styles.input + " " + 
                    (dark == undefined ? (darkContainer ? styles.input_dark : styles.input_light) : (dark ? styles.input_dark : styles.input_light)) + " " +
                    (btnLeft ? styles.input_btn_left : "") + " " +
                    (noStretched ? styles.input_no_stretched : "") + " " +
                    inputClassName
                }
                onChange={onChange}
                placeholder={placeholder}
            />
            <div 
                style={style}
                className={
                    styles.button + " " +
                    (dark === undefined ? (darkContainer ? styles.button_dark : styles.button_light) : (dark ? styles.button_dark : styles.button_light)) + " " +
                    (btnType === "classic" ? "" :
                        (btnType === "square" ? styles.button_square :
                            (btnType === "outline" ? styles.button_outline : "")
                        )
                    ) + " " +
                    (btnLeft ? styles.button_left : "") + " " +
                    buttonClassName
                }
                onClick={onClick}
            >
                {btnText}
            </div>
        </div>
    )
}