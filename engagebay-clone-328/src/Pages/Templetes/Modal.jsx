
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    FormControl,
    FormLabel,
  } from '@chakra-ui/react'
// import styles from  "../Templetes/Vedio.module.css"

  function RecordVideo() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}  style={{backgroundColor:"#FFA800" }} color="white"  px="20%">Record  Video</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          size="lg"
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Record video</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input ref={initialRef} placeholder='Name' size="xl" p={2} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>File</FormLabel>
                <Input type="file" />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Record 
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default RecordVideo