import React, { createContext } from 'react'
import styles from './container.module.scss'

export const DarkContext = createContext()

export default function ContainerUmix({
        children,
        dark,
        style,
        className
    }) {

    return (
        <div 
            style={style}
            className={
                styles.container + " " +
                (className ? className : "")
            }
        >
            <DarkContext.Provider value={dark}>
                {children}
            </DarkContext.Provider>
        </div>
    )
}