import React from 'react'
import styles from './styles.module.scss'

import ButtonUmix from './components/button/Button'
import InputUmix from './components/input/Input'
import ContainerUmix from './components/container/Container'
import ImageUmix from './components/image/Image'

export const Container = ({ children, ...props }) => {
  return (
    <ContainerUmix {...props}> 
      {children} 
    </ContainerUmix>
  )
}

export const Button = ({ children, ...props }) => {
  return (
    <ButtonUmix {...props}>
      {children}
    </ButtonUmix>
  )
}

export const Input = ({ ...props }) => {
  return (
    <InputUmix {...props} />
  )
}

export const Image = ({ children, ...props }) => {
  return (
    <ImageUmix {...props}> 
      {children} 
    </ImageUmix>
  )
}