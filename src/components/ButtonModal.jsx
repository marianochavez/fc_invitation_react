import React, { useEffect, useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useNumberInput,
  HStack,
  Box,
  Divider,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Text
} from '@chakra-ui/react'
import { BsFillHandThumbsUpFill, BsFillCheckCircleFill } from 'react-icons/bs'
import { Field, Form, Formik } from 'formik'
import { addFamily, updateFamily } from '../helpers/firebase-config'
import song from '../assets/song.mp3'
import useSound from 'use-sound'

export const ButtonModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpenAlert, onOpen: onOpenAlert, onClose: onCloseAlert } = useDisclosure()
  const [isLoading, setIsLoading] = useState(false)
  const [assist, setAssist] = useState({
    id: '',
    name: '',
    quantity: 1,
    confirmed: false
  })
  const [play, { stop }] = useSound(song, { interrupt: true })

  useEffect(() => {
    const assistFromLocalStorage = localStorage.getItem('assist')
    if (assistFromLocalStorage) setAssist(JSON.parse(assistFromLocalStorage))
  }, [setAssist])

  useEffect(() => {
    localStorage.setItem('assist', JSON.stringify(assist))
  }, [assist])

  useEffect(() => {
    if (!isOpen) stop()
  }, [isOpen])

  const handleClick = () => {
    onOpen()
    play()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (e.target.elements.name.value === '') return

    const family = e.target.elements.name.value
    const quantity = input['aria-valuenow']

    if (assist.id.length > 0) {
      setIsLoading(true)
      await updateFamily(assist.id, family, quantity)
      setIsLoading(false)
      onClose()
      setAssist({
        ...assist,
        name: family,
        quantity
      })
      return onOpenAlert()
    }

    setIsLoading(true)
    const res = await addFamily(family, quantity)
    setIsLoading(false)
    setAssist({
      id: res.id,
      name: family,
      quantity,
      confirmed: true
    })
    onClose()
    onOpenAlert()
  }

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      name: 'quantity',
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
      inputMode: 'decimal'
    })
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <>
      {assist.confirmed === true
        ? <Button
          onClick={handleClick} size='lg'
          colorScheme='green'
          rightIcon={<BsFillCheckCircleFill />}
        >
          Confirmación exitosa
        </Button>
        : <Button
          onClick={handleClick} size='lg'
          colorScheme='yellow'
          rightIcon={<BsFillHandThumbsUpFill />}
        >
          Asistir
        </Button>
      }

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent backgroundColor='rgb(22,22,22)' color='rgb(200, 201, 185)'>
          <ModalHeader color='yellow.500'>{`${assist.id.length !== 0 ? 'Mi confirmación' : 'Confirmar Asistencia'}`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            { assist.id.length !== 0 &&
              <Box>
                <Text fontSize='lg' fontWeight='bold'>
                  Nombre: {assist.name}
                </Text>
                <Text fontSize='lg' fontWeight='bold'>
                  Cantidad: {assist.quantity}
                </Text>
                <Divider mt={5}/>
                <Text fontWeight='bold' fontSize='lg' mt={5} mb={4} color='yellow.100'>Editar confirmación</Text>
              </Box>
            }
            <Formik initialValues={{ name: assist.name }}>
              {(props) => (
                <Form onSubmit={handleSubmit}>
                  <Field name='name' >
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel htmlFor='name'>Nombre / Familia: </FormLabel>
                        <Input {...field} id='name' placeholder={assist.name} isRequired autoFocus autoComplete='off' required autoCorrect='off' />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>

                        <FormLabel htmlFor='amount' marginTop={2}>Cantidad de personas:</FormLabel>
                        <HStack maxW='200px'>
                          <Button {...dec} colorScheme='yellow'>-</Button>
                          <Input {...input} name='quantity' id='quantity' htmlSize={1} width='auto' />
                          <Button {...inc} colorScheme='yellow'>+</Button>
                        </HStack>
                      </FormControl>
                    )}
                  </Field>
                  <Box display='flex' alignItems='end' mt={4} mb={4} flexDir='row-reverse'>
                    {assist.id.length !== 0 &&
                      <Button colorScheme='whiteAlpha' type='submit' isLoading={isLoading}>Editar</Button>
                    }
                    {assist.id.length === 0 &&
                      <Button colorScheme='whatsapp' variant='outline' type='submit' isLoading={isLoading}>Enviar</Button>
                    }
                    <Button onClick={onClose} colorScheme='red' mr={2} variant='outline'>Cancelar</Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* <Button onClick={onOpenAlert}>Abrir</Button> */}
      <AlertDialog isOpen={isOpenAlert} onClose={onCloseAlert} isCentered >
        <AlertDialogOverlay>
          <AlertDialogContent backgroundColor='rgb(22,22,22)' color='rgb(200, 201, 185)'>
            <AlertDialogHeader fontWeight='bold' color='green.300' fontSize='x-large'>
              Confirmación exitosa!
            </AlertDialogHeader>

            <AlertDialogBody display={'flex'} flexDir='column'>
              <Text>Nombre / Familia: <span style={{ fontWeight: 'bold' }}> {assist.name}</span></Text>
              <Text>Cantidad: <span style={{ fontWeight: 'bold' }}> {assist.quantity}</span></Text>
              <Text fontWeight='semibold' align='end' alignItems='right' justifyContent='rigth' mt={2}>Te espero!</Text>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onCloseAlert} colorScheme='whatsapp' variant='outline'>
                Cerrar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
