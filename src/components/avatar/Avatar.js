/* eslint-disable prettier/prettier */
import React, {Fragment, useState, useContext, useEffect } from 'react'
import styles from './avatar.module.scss'
import {DarkContext} from '../container/Container'

export default function AvatarUmix(
    {
        className,
        style,
        backClassName,
        backStyle,
        modalClassName,
        modalStyle,
        defaultImage,
        images,
        size,
        type,
        dark,
    }) {

    const [isModal, setIsModal] = useState(false)
    const [imagesIndex, setImagesIndex] = useState(0)
    const darkContainer = useContext(DarkContext)

    useEffect(() => {
        console.log(imagesIndex)
    }, [imagesIndex])

    const closeModal = () => {
        setIsModal(false)
        setImagesIndex(0)
    }

    return (
        <>
            {
                isModal &&
                <>
                    <div 
                        style={{
                            ...backStyle
                        }}
                        className={
                            styles.back + " " +
                            (dark === undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light)) + " " +
                            (backClassName ? backClassName : "")
                        }
                        onClick={closeModal}
                    >
                    </div>
                    <div style={{
                            ...modalStyle,
                            backgroundImage: `url(${images[imagesIndex]})`,
                        }} 
                        className={
                            styles.modal + " " +
                            (dark === undefined ? (darkContainer ? styles.dark : styles.light) : (dark ? styles.dark : styles.light)) + " " +
                            (modalClassName ? modalClassName : "")
                        }
                    >
                        <div 
                            className={styles.btnClose}
                            onClick={closeModal}
                        >
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.37672 25.6233C1.62693 25.8754 1.95625 26.0006 2.28557 26.0006C2.61457 26.0006 2.94389 25.8738 3.19598 25.6233L13.5005 15.3188L23.8059 25.6233C24.0564 25.8754 24.3854 26.0006 24.7147 26.0006C25.0422 26.0006 25.3712 25.8738 25.6233 25.6233C26.1256 25.121 26.1256 24.3066 25.6233 23.8043L15.3192 13.5001L25.6233 3.19598C26.1256 2.69337 26.1256 1.87902 25.6233 1.37672C25.121 0.874426 24.3066 0.874426 23.8043 1.37672L13.5001 11.681L3.19598 1.37672C2.69337 0.874426 1.87902 0.874426 1.37672 1.37672C0.874426 1.87902 0.874426 2.69337 1.37672 3.19598L11.6813 13.4997L1.37672 23.8043C0.874425 24.3066 0.874425 25.121 1.37672 25.6233Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} stroke={(dark === undefined ? (darkContainer ? "#292929" : "white") : (dark ? "#292929" : "white"))} />
                            </svg>
                        </div>
                        <div 
                            className={styles.btnPrev}
                            onClick={() => setImagesIndex(prev => {
                                    if(prev === 0) return images.length - 1
                                    return prev - 1
                                })
                            }
                        >
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                <path d="M8.42111 16.3746L24.3302 0.465964C24.9514 -0.155339 25.9587 -0.155339 26.58 0.46607C27.2012 1.08737 27.2012 2.09463 26.5799 2.71593L11.7958 17.4997L26.58 32.2843C27.2012 32.9056 27.2012 33.9128 26.5799 34.5341C26.2694 34.8448 25.8622 35.0001 25.455 35.0001C25.0479 35.0001 24.6407 34.8448 24.33 34.534L8.42111 18.6245C8.12265 18.3262 7.95508 17.9215 7.95508 17.4996C7.95508 17.0777 8.12265 16.673 8.42111 16.3746Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} stroke={(dark === undefined ? (darkContainer ? "#292929" : "white") : (dark ? "#292929" : "white"))} />
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="35" height="35"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.btnNext}
                            onClick={() => setImagesIndex(prev => {
                                    if(prev === images.length - 1) return 0
                                    return prev + 1
                                })
                            }
                        >
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                <path d="M26.5799 16.3746L10.6708 0.465964C10.0496 -0.155339 9.04227 -0.155339 8.42096 0.46607C7.79977 1.08737 7.79977 2.09463 8.42107 2.71593L23.2052 17.4997L8.42096 32.2843C7.79977 32.9056 7.79977 33.9128 8.42107 34.5341C8.73161 34.8448 9.13878 35 9.54595 35C9.95311 35 10.3603 34.8448 10.6709 34.534L26.5799 18.6245C26.8784 18.3261 27.0459 17.9215 27.0459 17.4996C27.0459 17.0777 26.8784 16.673 26.5799 16.3746Z" fill={(dark === undefined ? (darkContainer ? "white" : "#292929") : (dark ? "white" : "#292929"))} stroke={(dark === undefined ? (darkContainer ? "#292929" : "white") : (dark ? "#292929" : "white"))} />
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="35" height="35"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </>
            }
            <div 
                style={{
                    ...style,
                    backgroundImage: `url(${defaultImage})`,
                }}
                className={
                    styles.avatar + " " +
                    (size === "micro" ? styles.micro :
                        (size === "min" ? styles.min :
                            (size === "medium" ? styles.medium :
                                (size === "large" ? styles.large : styles.medium)
                            )
                        )
                    ) + " " +
                    (type === "standart" ? "" :
                        (type === "square" ? styles.square :
                            (type === "circle" ? styles.circle : "")
                        )
                    ) + " " +
                    (className ? className : "")
                }
                onClick={() => setIsModal(true)}
            >
            </div>
        </>
    )
}