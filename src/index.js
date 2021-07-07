import React from 'react'
import ButtonUmix from './components/Button'
import styles from './styles.module.scss'

export const Button = ({ children, onClick }) => {
  return (
    <ButtonUmix
      className={styles.button}
      onClickUmix={() => {
        onClick()
      }}
    >
      {children}
    </ButtonUmix>
  )
}
