import React, { useState } from 'react'

import { Button, Input, Container, Image, InputButton } from 'u-mix_library'
import 'u-mix_library/dist/index.css'

const light = {
  paddingTop: "30px",
  width: "100vw",
  height: "calc(100vh - 30px)",
  backgroundColor: "white"
}
const dark = {
  paddingTop: "30px",
  width: "100vw",
  height: "calc(100vh - 30px)",
  backgroundColor: "#292929"
}

const App = () => {
  const testFunc = () => {
    console.log("test success")
  }
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div style={isDarkTheme ? dark : light}>
      <Container dark={isDarkTheme}>
        {/* <InputButton onChange={testFunc} onClick={testFunc} tretched placeholder="place..." btnType="classic" btnText="button" btnLeft /> */}
        {/* <Input onChange={testFunc} stretched placeholder="place..." /> */}
        {/* <Button type="floating"> button </Button> */}
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/2048px-Solid_blue.svg.png">
          <div>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</div>
        </Image>
      </Container>
      <button style={{position: "absolute", bottom: "0", right: "0"}} onClick={() => {setIsDarkTheme((prev) => !prev)}}>theme changer</button>
    </div>
  )
}

export default App;