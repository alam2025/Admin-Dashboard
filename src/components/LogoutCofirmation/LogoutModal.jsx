import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUserData } from "../../redux/features/UserSlices/UserSlices";

const LogoutModal = ({ action }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { onClose, isOpen, overlay } = action;

  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(removeUserData());
    navigate("/login");
    onClose();
  };
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>Logout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure to Logout ?</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleLogout}>Yes</Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default LogoutModal;
