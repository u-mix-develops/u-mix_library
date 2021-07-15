import React, { useState } from 'react'
import a from './a.jpg'

import {
  Main,
  Content,
  Container,
  Navbar,
  Button,
  Input,
  InputButton,
  Image,
  Avatar,
  Preloader,
  Icon
} from 'u-mix_library'
import 'u-mix_library/dist/index.css'
import { BrowserRouter } from 'react-router-dom'

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
      <BrowserRouter>
      <Main>
        <Navbar 
          isLogin={true}
          dark={isDarkTheme}
          type="left"
          params={[
            {route: "/1", text: "FIRST", name: "settings", logined: true},
            {route: "/2", text: "SECOND", name: "settings", logined: true},
            {route: "/3", text: "THIRTH", name: "settings", logined: false},
            {route: "/4", text: "FORTH", name: "settings", logined: true},
          ]}
          profileImg="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
          profileName="Nikolay"
          profileInfo="info info info info info"
        >
        </Navbar>
        <Content>
          {/* <Navbar 
            isLogin={true}
            dark={isDarkTheme}
            type="top"
            params={[
              {route: "/1", text: "FIRST", name: "settings", logined: true},
              {route: "/2", text: "SECOND", name: "settings", logined: true},
              {route: "/3", text: "THIRTH", name: "settings", logined: false},
              {route: "/4", text: "FORTH", name: "settings", logined: true},
            ]}
            profileImg="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            profileName="Nikolay"
            profileInfo="info info info info info"
          >
          </Navbar> */}
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
            <Avatar 
              defaultImage="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" 
              images={[
                "https://i.kym-cdn.com/entries/icons/original/000/023/824/baINLAUH.jpg",
                "https://s5o.ru/storage/simple/cyber/edt/d1/d9/85/c0/cyberea2fce3ee29.jpg",
                "https://static-cdn.jtvnw.net/emoticons/v1/160400/3.0"
              ]} 
              size="micro" type="circle"
            />
            <button onClick={() => {setIsLoad((prev) => !prev)}}>load changer</button>
            {
              isLoad
              ?
                <Preloader />
              :
                <div>lol</div>
            }
            <Icon name="logout" type="fill" />
            <Icon name="login" type="outline" />
            <Icon name="settings" onClick={testFunc} type="outline" />
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
      </BrowserRouter>
      <button style={{position: "fixed", bottom: "0", right: "0", zIndex: "100000004", cursor: "pointer" }} onClick={() => {setIsDarkTheme((prev) => !prev)}}>theme changer</button>
    </div>
  )
}

export default App;