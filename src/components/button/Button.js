/* eslint-disable prettier/prettier */
import React, {useContext} from 'react'
import styles from './button.module.scss'
import {DarkContext} from '../container/Container'

export default function ButtonUmix(
    {
        children,
        style,
        className,
        type,
        outline,
        dark,
        onClick,
    }) {
    
    const darkContainer  = useContext(DarkContext)

    return (
        <div 
            style={style}
            className={
                styles.button + " " +
                (dark === undefined ? (darkContainer ? styles.button_dark : styles.button_light) : (dark ? styles.button_dark : styles.button_light)) + " " +
                className + " " +
                (type === 1 ? styles.button_first : 
                    (type === 2 ? styles.button_second :
                        (type === 3 ? styles.button_third :
                            (type === 4 ? styles.button_forth : "")
                        )
                    )
                ) + " " +
                (outline === undefined ? "" : (outline ? styles.button_outline : ""))
            }
            onClick={onClick}
        >
            {children}
        </div>
    )
}