import React, {Fragment, useState} from 'react'
import BurgerUmix from '../icons/burger/Burger'
import styles from './leftBar.module.scss'

export default function LeftBarUmix({
        type,
        children,
        darkContainer,
        dark,
        noStyled,
        style,
        className
    }) {

    const [isMenu, setIsMenu] = useState(false);

    return (
        <>
            {/* {
                type === "left"
            } */}
            <div className={styles.margin}></div>
            {
                isMenu
                ?
                    <div 
                        style={style}
                        className={
                            styles.leftBar + " " +
                            (dark == undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light)) + " " + 
                            (noStyled ? "" : styles.styled) + " " +
                            (className ? className : "")
                        }
                    >
                        <BurgerUmix 
                            className={styles.burger}
                            dark={(dark == undefined ? darkContainer : dark)}
                            onClick={() => setIsMenu(prev => !prev)}
                        />
                        {children}
                    </div>
                :
                    <div 
                        className={
                            styles.minBar + " " +
                            (dark == undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light))
                        }
                    >
                        <BurgerUmix 
                            className={styles.burger}
                            dark={(dark == undefined ? darkContainer : dark)}
                            onClick={() => setIsMenu(prev => !prev)}
                        />
                    </div>
            }
        </>
    )
}