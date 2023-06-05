import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'


const LogoutModal = ({action}) => {
   
let {onClose ,isOpen,overlay} = action
  return (
   <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay >
        <ModalContent>
          <ModalHeader>YA-SIN</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to logout!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
        </ModalOverlay>
      </Modal>
  )
}

export default LogoutModal