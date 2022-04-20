import { Box, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { GiChewedSkull, GiDrumKit, GiGuitar, GiMicrophone, GiPianoKeys } from 'react-icons/gi'

export const Head = () => {
  return (
        <Box w='100%' display='flex' flexDir='row' paddingTop='5'>
            <Box fontSize='3xl' fontWeight='semibold'>
                <Heading marginBottom='-3.5' fontSize='5xl'>
                    PichiChavez
                </Heading>
            </Box>
            <Spacer />
            <Box fontSize='30px' alignSelf='end' display='flex' flexDir='row'>
                <Box>
                    <GiMicrophone />
                </Box>
                <Box marginLeft={3}>
                    <GiGuitar />
                </Box>
                <Box marginLeft={3}>
                    <GiPianoKeys />
                </Box>
                <Box marginLeft={3}>
                    <GiDrumKit />
                </Box>
                <Box marginLeft={3}>
                    <GiChewedSkull />
                </Box>
            </Box>
        </Box>
  )
}
