import React, { useState } from 'react'

import { Button, Input, Container, Image } from 'u-mix_library'
import 'u-mix_library/dist/index.css'

const light = {
  backgroundColor: "white"
}
const dark = {
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
        <Input onChange={testFunc} placeholder="place..." />
        <Button type={2} onClick={testFunc}> button </Button>
        <Image src="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/e1/42/9d/e1429dd1-6f6f-ad99-cc39-f5b7c821c363/8718522205583.png/1200x1200bf-60.jpg">
          <div>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</div>
        </Image>
      </Container>
      <button style={{position: "absolute", bottom: "0", right: "0"}} onClick={() => {setIsDarkTheme((prev) => !prev)}}>theme changer</button>
    </div>
  )
}

export default App