/* eslint-disable prettier/prettier */
import React, {useContext}  from 'react'
import {DarkContext} from '../container/Container'
import styles from './inputButton.module.scss'

export default function InputUmix(
    {
        containerClassName,
        containerStyle,
        inputClassName,
        inputStyle,
        buttonClassName,
        buttonStyle,
        dark,
        type,
        btnText,
        onChange,
        onClick,
        btnLeft,
        stretched,
        placeholder,
    }) {

    const darkContainer  = useContext(DarkContext)
    
    return (
        <div 
            style={containerStyle}
            className={
                (btnLeft ? styles.main_btn_left : styles.main_btn_right) + " " +
                containerClassName
            }
        >
            <input 
                type="text"
                style={inputStyle} 
                className={
                    styles.input + " " + 
                    (dark == undefined ? (darkContainer ? styles.input_dark : styles.input_light) : (dark ? styles.input_dark : styles.input_light)) + " " +
                    (btnLeft ? styles.input_btn_left : "") + " " +
                    (stretched ? styles.input_stretched : "") + " " +
                    (type === "classic" ? "" :
                        (type === "square" ? styles.input_square :
                            (type === "rounded" ? styles.input_rounded : "")
                        )
                    ) + " " +
                    inputClassName
                }
                onChange={onChange}
                placeholder={placeholder}
            />
            <div 
                style={buttonStyle}
                className={
                    styles.button + " " +
                    (dark === undefined ? (darkContainer ? styles.button_dark : styles.button_light) : (dark ? styles.button_dark : styles.button_light)) + " " +
                    (type === "classic" ? "" :
                        (type === "square" ? styles.button_square :
                            (type === "outline" ? styles.button_outline : 
                                (type === "rounded" ? styles.button_rounded : "")
                            )
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