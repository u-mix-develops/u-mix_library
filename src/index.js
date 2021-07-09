import React from 'react'
import styles from './styles.module.scss'

import ContainerUmix from './components/container/Container'
import ButtonUmix from './components/button/Button'
import InputUmix from './components/input/Input'
import InputButtonUmix from './components/inputButton/InputButton'
import ImageUmix from './components/image/Image'
import AvatarUmix from './components/avatar/Avatar'

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
export const InputButton = ({ ...props }) => {
  return (
    <InputButtonUmix {...props} />
  )
}
export const Image = ({ children, ...props }) => {
  return (
    <ImageUmix {...props}> 
      {children} 
    </ImageUmix>
  )
}
export const Avatar = ({ images, defaultImage, ...props }) => {
  return (
    <AvatarUmix images={[defaultImage, ...images]} defaultImage={defaultImage} {...props} />
  )
}