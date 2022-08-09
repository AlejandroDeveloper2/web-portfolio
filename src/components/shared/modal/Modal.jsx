import { ModalContainer, ModalBody, CloseButton } from "./Modal.styles";

const Modal = ({ isModalVisible, scaleModal, toggleModal, children }) => {
  return (
    <ModalContainer visible={isModalVisible}>
      <ModalBody scaleModal={scaleModal}>
        <CloseButton onClick={toggleModal}></CloseButton>
        {children}
      </ModalBody>
    </ModalContainer>
  );
};

export default Modal;
