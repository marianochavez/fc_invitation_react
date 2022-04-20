import { Divider, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'

export const DividerContent = () => {
  return (
        <Flex flexDir='row' paddingTop='4'>
            <Divider width={{ base: 'full', lg: '47%' }} borderWidth='1px' borderColor='rgb(200, 201, 185)'/>
            <Spacer/>
            <Divider width={{ base: 'full', lg: '47%' }} borderWidth='1px' borderColor='rgb(200, 201, 185)'/>
        </Flex>
  )
}
