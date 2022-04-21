import { Box, Heading, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { BiTime } from 'react-icons/bi'
import { ButtonModal } from './ButtonModal'

export const Content = () => {
  return (
    <Box display='flex' flexDir={{ base: 'column', lg: 'row' }} >
        <Box flex={{ base: 12, lg: 6 }} maxW={{ base: '100%', lg: '47%' }} paddingTop='2em' className='animate__animated animate__slideInLeft animate__slow'>
            <Heading fontFamily='body' fontSize='4em'>
                60th Birthday
            </Heading>
            <Text paddingTop={7} paddingBottom={2} display='flex'>
                <BsFillCalendarCheckFill/>
                &nbsp;&nbsp;14 - Mayo / 2022
            </Text>
            <Text paddingBottom={2} display='flex'>
                <BiTime/>
                &nbsp;&nbsp;12:00
            </Text>
            <Text paddingBottom={7} display='flex' >
                <ImLocation/> &nbsp;&nbsp;
                <Link href='https://goo.gl/maps/DcdUWxW3pRqzkXFeA' isExternal>Potrerillos, Lujan de Cuyo</Link>
            </Text>
            <ButtonModal/>
        </Box>
        <Spacer/>
        <Box flex={{ base: 12, lg: 6 }} maxW={{ base: '100%', lg: '47%' }} paddingTop='2em' paddingBottom='2em' className='animate__animated animate__slideInRight animate__slow'>
            <Text >
                We&apos;ve known each other for so long
                Your heart&apos;s been aching but you&apos;re too shy to say it
                Inside we both know what&apos;s been going on
                We know the game and we&apos;re gonna play it
            </Text>
            <Box paddingTop='2em' h='auto'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.675201260052!2d-69.26343348508223!3d-32.95958367987271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967dece0da2428c3%3A0xd212023e0eb0aab9!2sLa%20Casa%20Del%20Tata!5e0!3m2!1ses-419!2sar!4v1650477978637!5m2!1ses-419!2sar"
                    style={{ border: 0, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                    width="100%"
                    height="350"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </Box>

        </Box>
    </Box>
  )
}
