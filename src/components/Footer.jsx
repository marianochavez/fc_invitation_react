import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export const Footer = () => {
  return (
      <Box paddingTop={{ base: '1em', lg: '2em' }} paddingBottom='2em' display='flex' alignItems='center' justifyContent='center'>
          <AiOutlineLeft/>
          <Text textAlign='center'>Made by Mariano /</Text>
          <AiOutlineRight/>
      </Box>
  )
}
