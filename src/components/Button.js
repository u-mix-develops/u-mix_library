/* eslint-disable prettier/prettier */
import React from 'react'

export default function ButtonUmix({ children, onClickUmix, className }) {
    return (
        <div
            className={className}
            onClick={() => {
                onClickUmix()
            }}
        >
            {children}
        </div>
    )
}
