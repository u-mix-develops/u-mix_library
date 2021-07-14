import React from 'react'
import styles from './styles.module.scss'

import MainUmix from './components/main/Main'
import ContentUmix from './components/content/Content'
import ContainerUmix from './components/container/Container'
import NavbarUmix from './components/navbar/Navbar'
import ButtonUmix from './components/button/Button'
import InputUmix from './components/input/Input'
import InputButtonUmix from './components/inputButton/InputButton'
import ImageUmix from './components/image/Image'
import AvatarUmix from './components/avatar/Avatar'
import PreloaderUmix from './components/preloader/Preloader'
import IconUmix from './components/icons/Icon'

export const Main = ({ children, ...props }) => {
  return (
    <MainUmix {...props}> 
      {children} 
    </MainUmix>
  )
}
export const Content = ({ children, ...props }) => {
  return (
    <ContentUmix {...props}> 
      {children} 
    </ContentUmix>
  )
}
export const Container = ({ children, ...props }) => {
  return (
    <ContainerUmix {...props}> 
      {children} 
    </ContainerUmix>
  )
}
export const Navbar = ({ ...props }) => {
  return (
    <NavbarUmix {...props} />
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
export const Preloader = ({ ...props }) => {
  return (
    <PreloaderUmix {...props} />
  )
}
export const Icon = ({ ...props }) => {
  return (
    <IconUmix {...props} />
  )
}