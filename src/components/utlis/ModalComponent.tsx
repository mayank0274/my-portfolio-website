import React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: any;
};

export const ModalComponent: React.FC<Props> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
      <ModalOverlay />
      <ModalContent background={"#0a192f"}>
        <ModalCloseButton color="white" size="lg" />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
