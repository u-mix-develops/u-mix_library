import React, { useState } from 'react'

import { Container, Button, Input, InputButton, Image, Avatar, Preloader, Logout, Login, Settings } from 'u-mix_library'
import 'u-mix_library/dist/index.css'

const light = {
  paddingTop: "30px",
  width: "calc(100vw - 17px)",
  minHeight: "calc(100vh - 30px)",
  backgroundColor: "white"
}
const dark = {
  paddingTop: "30px",
  width: "calc(100vw - 17px)",
  minHeight: "calc(100vh - 30px)",
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
      <Container dark={isDarkTheme}>
        <InputButton onChange={testFunc} stretched onClick={testFunc} placeholder="place..." type="rounded" btnText="button" btnLeft />
        <Input onChange={testFunc} stretched placeholder="place..." type="rounded" />
        <Button type="floating"> button </Button>
        <Image src="https://image.shutterstock.com/image-vector/leaderboard-banner-728x90-black-gold-260nw-1346625668.jpg" 
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
        <Logout type="fill" />
        <Login type="outline" />
        <Settings onClick={testFunc} type="outline" />

      </Container>
      <button style={{position: "fixed", bottom: "0", right: "0", zIndex: "100000004", cursor: "pointer" }} onClick={() => {setIsDarkTheme((prev) => !prev)}}>theme changer</button>
    </div>
  )
}

export default App;