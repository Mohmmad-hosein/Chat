import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Content } from './components/TextContent'
import { SendMas } from './components/Send'

function App() {

  return (
    <>
          <Navbar/>
          <Content/>
          <SendMas/>
    </>
  )
}

export default App
