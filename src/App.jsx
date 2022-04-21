import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Content } from './components/Content'
import { DividerContent } from './components/DividerContent'
import { Head } from './components/Head'

function App () {
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
