import React, {Fragment} from 'react'
import SettingsUmix from './settings/Settings'
import LoginUmix from './login/Login'
import LogoutUmix from './logout/Logout'
import BurgerUmix from './burger/Burger'

export default function IconUmix({name, ...props}) {
    return (
        <>
            {
                (name === "settings" ? <SettingsUmix {...props} /> : 
                    (name === "login" ? <LoginUmix {...props} /> :
                        (name === "logout" ? <LogoutUmix {...props} /> : 
                            (name === "burger" ? <BurgerUmix {...props} /> : null)
                        )
                    )
                )
            }
        </>
    )
}