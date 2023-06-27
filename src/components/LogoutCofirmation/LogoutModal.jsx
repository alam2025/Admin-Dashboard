import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import Cookies from "js-cookie";
import {  useNavigate } from 'react-router-dom';

const LogoutModal = ({action}) => {
  const navigate = useNavigate()
   
let {onClose ,isOpen,overlay} = action

const handleLogout = () => {
  Cookies.remove("token");
  navigate('/login')
console.log('logout Done');
onClose()
}
  return (
   <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay >
        <ModalContent>
          <ModalHeader>
            <p className='text-[14px] font-Inter'>Wellcome to YA-SIN Dashboard</p>
</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p className='text-[25px] font-Inter font-bold text-black'>Are you sure to Logout ?</p>
          </ModalBody>
          <ModalFooter>
            <Button bgColor={'blue.300'} color='#FFFFFF' onClick={handleLogout}>Yes</Button>
          </ModalFooter>
        </ModalContent>
        </ModalOverlay>
      </Modal>
  )
}

export default LogoutModal