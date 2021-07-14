import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import IconUmix from '../icons/Icon'
import BurgerUmix from '../icons/burger/Burger'
import styles from './leftBar.module.scss'

let isLoaded = false;

export default function LeftBarUmix({
    darkContainer,
    dark,
    params,
    isLogin,
    profileImg,
    profileName,
    profileInfo,
    style,
    className
}) {

    const toggle = () => {
        setIsMenu(prev => !prev)
        isLoaded = true;
    }

    const [isMenu, setIsMenu] = useState(false);
    const [link, setLink] = useState(0);

    let links = params.map((param, i) => {
        if(isLogin === param.logined) return <NavLink 
                    key={i} 
                    to={param.route}
                    className={
                        styles.full_link + " " +
                        (dark == undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light))
                    }
                    onClick={() => {
                        setIsMenu(false)
                        setLink(i);
                    }}
                >
                {param.text}
                <IconUmix 
                    dark={dark == undefined ? (darkContainer ? true : false) : (dark ? true : false)}
                    type={link === i ? "fill" : "outline"}
                    className={styles.icon}
                    name={param.name}
                />
            </NavLink>
    })

    return (
        <>
            <div className={styles.margin}></div>
            <div
                style={style}
                className={
                    styles.leftBar + " " +
                    (dark == undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light)) + " " +
                    (isMenu ? styles.maxBar : styles.minBar) + " " +
                    (isLoaded ? styles.animate : "") + " " +
                    (className ? className : "")
                }
            >
                <div>
                    <BurgerUmix
                        className={
                            styles.burger + " " +
                            (isMenu ? styles.right : styles.left) + " " +
                            (isLoaded ? styles.animate : "")
                        }
                        dark={(dark == undefined ? darkContainer : dark)}
                        onClick={toggle}
                    />
                    {links}
                </div>
                {
                    isLogin 
                    &&
                        <div
                            className={
                                styles.bottom + " " +
                                (isMenu ? styles.right : styles.left) + " " +
                                (isLoaded ? styles.animate : "")
                            }
                        >
                            <div 
                                style={{
                                    backgroundImage: `url(${profileImg})`
                                }} 
                                className={styles.profile_img}
                            ></div>
                            <div className={styles.profile_name}>{profileName}</div>
                            <div className={styles.profile_info}>{profileInfo}</div>
                        </div>
                }
            </div>
        </>
    )
}