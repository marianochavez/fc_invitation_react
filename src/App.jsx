import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Head, DividerContent, Content, Footer } from './components'

function App () {
  return (
    <Box h={{ base: 'auto', lg: '100vh' }}>
      <Container maxW='90%'>
        <Head/>
        <DividerContent/>
        <Content/>
        <Footer/>
      </Container>
    </Box>
  )
}

export default App
