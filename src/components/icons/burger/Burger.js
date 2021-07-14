import React, {useContext}  from 'react'
import {DarkContext} from '../../container/Container'
import styles from './burger.module.scss'

export default function BurgerUmix(
    {
        className,
        style,
        onClick,
        type,
        dark,
    }) {
        
    const darkContainer = useContext(DarkContext)
    
    return (
        <div
            style={style}
            className={
                styles.main + " " +
                (dark === undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light)) + " " +
                (className ? className : "")
            }
            onClick={onClick}
        >
            {
                type === "fill"
                ?
                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none">
                        <path className={styles.path} d="M26.1352 4.73332H1.86478C0.836719 4.73332 0 3.89591 0 2.86669C0 1.83747 0.836719 1 1.86478 1H26.1352C27.1632 1 27.9999 1.8374 27.9999 2.86669C27.9999 3.89598 27.1633 4.73332 26.1352 4.73332Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                        <path className={styles.path} d="M26.1352 15.8667H1.86478C0.836719 15.8667 0 15.0292 0 14C0 12.9708 0.836719 12.1333 1.86478 12.1333H26.1352C27.1632 12.1333 27.9999 12.9707 27.9999 14C27.9999 15.0293 27.1633 15.8667 26.1352 15.8667Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                        <path className={styles.path} d="M26.1352 26.7334H1.86478C0.836719 26.7334 0 25.896 0 24.8667C0 23.8375 0.836719 23 1.86478 23H26.1352C27.1632 23 27.9999 23.8374 27.9999 24.8667C28 25.896 27.1633 26.7334 26.1352 26.7334Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                    </svg>
                :
                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none">
                        <path className={styles.path} d="M26.1352 4.73332H1.86478C0.836719 4.73332 0 3.89591 0 2.86669C0 1.83747 0.836719 1 1.86478 1H26.1352C27.1632 1 27.9999 1.8374 27.9999 2.86669C27.9999 3.89598 27.1633 4.73332 26.1352 4.73332ZM1.86478 1.93331C1.35119 1.93331 0.933311 2.35195 0.933311 2.86662C0.933311 3.3813 1.35119 3.79994 1.86478 3.79994H26.1352C26.6487 3.79994 27.0666 3.3813 27.0666 2.86662C27.0666 2.35195 26.6487 1.93331 26.1352 1.93331H1.86478Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                        <path className={styles.path} d="M26.1352 15.8667H1.86478C0.836719 15.8667 0 15.0292 0 14C0 12.9708 0.836719 12.1333 1.86478 12.1333H26.1352C27.1632 12.1333 27.9999 12.9707 27.9999 14C27.9999 15.0293 27.1633 15.8667 26.1352 15.8667ZM1.86478 13.0667C1.35119 13.0667 0.933311 13.4853 0.933311 14C0.933311 14.5147 1.35119 14.9333 1.86478 14.9333H26.1352C26.6487 14.9333 27.0666 14.5147 27.0666 14C27.0666 13.4853 26.6487 13.0667 26.1352 13.0667H1.86478Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                        <path className={styles.path} d="M26.1352 26.7334H1.86478C0.836719 26.7334 0 25.896 0 24.8667C0 23.8375 0.836719 23 1.86478 23H26.1352C27.1632 23 27.9999 23.8374 27.9999 24.8667C28 25.896 27.1633 26.7334 26.1352 26.7334ZM1.86478 23.9334C1.35119 23.9334 0.933311 24.352 0.933311 24.8667C0.933311 25.3814 1.35119 25.8 1.86478 25.8H26.1352C26.6487 25.8 27.0666 25.3814 27.0666 24.8667C27.0666 24.352 26.6487 23.9334 26.1352 23.9334H1.86478Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} />
                    </svg>
            }
        </div>
    )
}