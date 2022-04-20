import { Box, Container } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Content } from './components/Content'
import { DividerContent } from './components/DividerContent'
import { Head } from './components/Head'
import useSound from 'use-sound'
import song from './assets/song.mp3'

function App () {
  const [play] = useSound(song)

  useEffect(() => {
    play()
  }, [])

  return (
    <Box h={{ base: 'auto', lg: '100vh' }}>
      <Container maxW='90%'>
        <Head/>
        <DividerContent/>
        <Content/>
      </Container>
    </Box>
  )
}

export default App
