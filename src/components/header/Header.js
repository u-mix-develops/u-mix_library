import React, {Fragment, useState} from 'react'
import BurgerUmix from '../icons/burger/Burger'
import styles from './header.module.scss'

export default function HeaderUmix({
        children,
        darkContainer,
        dark,
        noStyled,
        style,
        className
    }) {

    // const [isMenu, setIsMenu] = useState(false);

    return (
        <>
            <div 
                style={style}
                className={
                    styles.header + " " +
                    (dark == undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light)) + " " + 
                    (noStyled ? "" : styles.styled) + " " +
                    (className ? className : "")
                }
            >
                {children}
                {/* <BurgerUmix 
                    className={styles.burger}
                    dark={(dark == undefined ? darkContainer : dark)}
                    onClick={() => setIsMenu(prev => !prev)}
                /> */}
            </div>
            {/* {
                isMenu
                ?
                    <div 
                        className={
                            styles.menu + " " +
                            (noStyled ? "" : styles.styled) + " " +
                            (dark == undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light))
                        }
                    >
                        {children}
                    </div>
                :
                    null
            } */}
            <div className={styles.margin}></div>
        </>
    )
}