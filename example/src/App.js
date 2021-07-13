import React, { useState } from 'react'
import a from './a.jpg'

import {
  Main,
  Content,
  Container,
  Header,
  LeftBar,
  Button,
  Input,
  InputButton,
  Image,
  Avatar,
  Preloader,
  Logout,
  Login,
  Settings,
  Burger,
} from 'u-mix_library'
import 'u-mix_library/dist/index.css'

const light = {
  minHeight: "100vh",
  backgroundColor: "white"
}
const dark = {
  minHeight: "100vh",
  backgroundColor: "#292929"
}

const App = () => {
  const testFunc = () => {
    console.log("test success")
  }
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isLoad, setIsLoad] = useState(false)

  return (
    <div style={isDarkTheme ? dark : light}>
      <Main>
        <LeftBar dark={isDarkTheme}>
          <a href="/">FIRST</a>
          <a href="/">SECOND</a>
          <a href="/">THIRTH</a>
          <a href="/">FORTH</a>
          <div>FIFTH</div>
        </LeftBar>
        <Content>
          <Header dark={isDarkTheme}>
            <a href="/">FIRST</a>
            <a href="/">SECOND</a>
            <a href="/">THIRTH</a>
            <a href="/">FORTH</a>
            <div>FIFTH</div>
          </Header>
          <Container dark={isDarkTheme}>
            <InputButton onChange={testFunc}  onClick={testFunc} placeholder="place..." type="classic" btnText="button"  />
            <Input onChange={testFunc} stretched placeholder="place..." type="rounded" />
            <Button type="rounded"> button </Button>
            <Image 
              speed={300}
              src={a} 
              minWidth="300px"
              blockPosition="right bottom"
              textPosition="left"
            >
              <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            </Image>
            {/* <Avatar 
              defaultImage="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" 
              images={[
                "https://i.kym-cdn.com/entries/icons/original/000/023/824/baINLAUH.jpg",
                "https://s5o.ru/storage/simple/cyber/edt/d1/d9/85/c0/cyberea2fce3ee29.jpg",
                "https://static-cdn.jtvnw.net/emoticons/v1/160400/3.0"
              ]} 
              size="micro" type="circle"
            /> */}
            <button onClick={() => {setIsLoad((prev) => !prev)}}>load changer</button>
            {
              isLoad
              ?
                <Preloader />
              :
                <div>lol</div>
            }
            <Logout type="fill" />
            <Login type="outline" />
            <Settings onClick={testFunc} type="outline" />
            <Burger onClick={testFunc} type="outline" />
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </div>
          </Container>
        </Content>
      </Main>
      <button style={{position: "fixed", bottom: "0", right: "0", zIndex: "100000004", cursor: "pointer" }} onClick={() => {setIsDarkTheme((prev) => !prev)}}>theme changer</button>
    </div>
  )
}

export default App;