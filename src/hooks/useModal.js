import { useState } from "react";

import Modal from "../components/shared/modal/Modal";

const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [scaleModal, setScaleModal] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setTimeout(() => {
      setScaleModal(!scaleModal);
    }, 500);
  };

  return {
    isModalVisible,
    scaleModal,
    Modal,
    toggleModal,
  };
};

export default useModal;
