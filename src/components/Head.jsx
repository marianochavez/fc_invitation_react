import { Box, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { GiDrumKit, GiGuitar, GiMicrophone, GiPianoKeys, GiWineBottle } from 'react-icons/gi'

export const Head = () => {
  return (
        <Box w='100%' display='flex' flexDir='row' paddingTop='5'>
            <Box fontSize='3xl' fontWeight='semibold'>
                <Heading marginBottom='-3.5' fontSize='5xl'>
                    PichiChavez
                </Heading>
            </Box>
            <Spacer />
            <Box fontSize={{ base: '25px', md: '30px', lg: '30px' }} alignSelf='end' display='flex' flexDir='row'>
                <Box>
                    <GiMicrophone />
                </Box>
                <Box marginLeft={{ base: 1, md: 3, lg: 3 }}>
                    <GiGuitar />
                </Box>
                <Box marginLeft={{ base: 1, md: 3, lg: 3 }}>
                    <GiPianoKeys />
                </Box>
                <Box marginLeft={{ base: 1, md: 3, lg: 3 }}>
                    <GiDrumKit />
                </Box>
                <Box marginLeft={{ base: 1, md: 3, lg: 3 }}>
                    <GiWineBottle />
                </Box>
            </Box>
        </Box>
  )
}
