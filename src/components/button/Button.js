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
        stretched,
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
                (stretched ? styles.button_stretched : "") + " " +
                (type === "classic" ? "" : 
                    (type === "square" ? styles.button_square :
                        (type === "realistic" ? styles.button_realistic :
                            (type === "floating" ? styles.button_floating : 
                                (type === "outline" ? styles.button_outline : 
                                    (type === "rounded" ? styles.button_rounded : "")
                                )
                            )
                        )
                    )
                ) + " " +
                className
            }
            onClick={onClick}
        >
            {children}
        </div>
    )
}