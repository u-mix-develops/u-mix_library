import React from 'react'
import styles from './content.module.scss'

export default function ContentUmix({
        children,
        style,
        className
    }) {

    return (
        <div 
            id="content"
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