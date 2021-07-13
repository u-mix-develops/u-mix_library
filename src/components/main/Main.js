import React from 'react'
import styles from './main.module.scss'

export default function MainUmix({
        children,
        style,
        className
    }) {

    return (
        <div 
            style={style}
            className={
                styles.main + " " +
                (className ? className : "")
            }
        >
            {children}
        </div>
    )
}