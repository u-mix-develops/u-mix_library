import React, {Fragment, useState} from 'react'
import {NavLink} from 'react-router-dom'
import BurgerUmix from '../icons/burger/Burger'
import styles from './header.module.scss'

let isLoaded = false;

export default function HeaderUmix({
        isLogin,
        params,
        darkContainer,
        dark,
        noStyled,
        style,
        className
    }) {

    const [isMenu, setIsMenu] = useState(false);
    const [link, setLink] = useState(0);

    let links = params.map((param, i) => {
        if(isLogin === param.logined) return <NavLink 
                    key={i} 
                    to={param.route}
                    className={
                        (dark == undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light)) + " " +
                        (link === i ? styles.active : "")
                    }
                    onClick={() => {
                        setIsMenu(false)
                        setLink(i);
                    }}
                >
                {param.text}
            </NavLink>
    })

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
                {links}
                <BurgerUmix 
                    className={styles.burger}
                    dark={(dark == undefined ? darkContainer : dark)}
                    onClick={() => {
                        setIsMenu(prev => !prev)
                        isLoaded = true;
                    }}
                />
            </div>
            {
                isMenu
                ?
                    <div 
                        className={
                            styles.menu + " " +
                            (noStyled ? "" : styles.styled) + " " +
                            (dark == undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light))
                        }
                    >
                        {links}
                    </div>
                :
                    <div
                        className={
                            styles.second_margin + " " +
                            (isLoaded ? styles.animate : "") + " " +
                            (dark == undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light))
                        }
                    ></div>
            }
            <div className={styles.margin}></div>
        </>
    )
}