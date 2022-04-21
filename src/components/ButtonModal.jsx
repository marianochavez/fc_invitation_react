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
  Box
} from '@chakra-ui/react'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import { Field, Form, Formik } from 'formik'
import { addFamily } from '../helpers/firebase-config'
import song from '../assets/song.mp3'
import useSound from 'use-sound'

export const ButtonModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setIsLoading] = useState(false)
  const [assist, setAssist] = useState(false)
  const [play, { stop }] = useSound(song, { interrupt: true })

  useEffect(() => {
    const assistFromLocalStorage = localStorage.getItem('assist')
    if (assistFromLocalStorage) setAssist(assistFromLocalStorage)
  }, [setAssist])

  useEffect(() => {
    localStorage.setItem('assist', assist)
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
    setIsLoading(true)
    await addFamily(family, quantity)
    setIsLoading(false)
    setAssist(true)
    onClose()
  }

  function validateName (value) {
    let error
    if (!value) {
      error = 'El nombre es requerido'
    }
    return error
  }

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      name: 'amount',
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
        <Button
          onClick={handleClick} size='lg'
          colorScheme={`${assist ? 'green' : 'yellow'}`}
          rightIcon={<BsFillHandThumbsUpFill/>}
        >
          {assist ? 'Ya asisto' : 'Asistir'}
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backgroundColor='rgb(22,22,22)' color='rgb(200, 201, 185)'>
            <ModalHeader>Confirmar Asistencia</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Formik initialValues={{ name: '' }}>
                    {(props) => (
                        <Form onSubmit={handleSubmit}>
                            <Field name='name' validate={validateName}>
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor='name'>Nombre / Familia</FormLabel>
                                    <Input {...field} id='name' isRequired autoFocus/>
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    <FormLabel htmlFor='amount' marginTop={2}>Cantidad de personas</FormLabel>

                                    <HStack maxW='200px'>
                                        <Button {...dec} colorScheme='yellow'>-</Button>
                                        <Input {...input} htmlSize={1} width='auto'/>
                                        <Button {...inc} colorScheme='yellow'>+</Button>
                                    </HStack>
                                                                    </FormControl>
                                )}
                            </Field>
                            <Box display='flex' mt={4} mb={4} >
                                <Button colorScheme='whiteAlpha' type='submit' marginLeft='auto' isLoading={isLoading}>Enviar</Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </ModalBody>

          </ModalContent>
        </Modal>
      </>
  )
}
