import React, {Fragment} from 'react'
import LeftBar from '../leftBar/LeftBar'
import Header from '../header/Header'

export default function NavbarUmix({ type, ...props }) {

    return (
        <>
            {
                type === "left"
                ?
                    <LeftBar {...props} />
                :
                    (type === "top"
                    &&
                        <Header {...props} />
                    )
            }
        </>
    )
}