/* eslint-disable prettier/prettier */
import React, {useContext}  from 'react'
import {DarkContext} from '../container/Container'
import styles from './image.module.scss'

export default function ImageUmix(
    {
        children,
        className,
        style,
        dark,
        src,
    }) {

    const darkContainer  = useContext(DarkContext)
    
    return (
        <div 
            style={{
                ...style,
                backgroundImage: `url(${src})`
            }} 
            className={
                styles.image + " " + 
                (dark == undefined ? (darkContainer ? styles.image_dark : styles.image_light) : (dark ? styles.image_dark : styles.image_light)) + " " +
                className
            }
        >
            {children}
        </div>
    )
}