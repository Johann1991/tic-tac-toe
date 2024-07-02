import React from "react";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  Subtitle,
  Title,
} from "../../Modal/Modal.styled";
import Button from "../../Button/Button";

const RoundOverModal = () => {
  return (
    <div>
      <ModalHeader>
        <Title>Johann won this round! Choices will be switched now.</Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle>Choices will be switched now</Subtitle>
        <Subtitle>Hayleigh: 1</Subtitle>
        <Subtitle>Johann: 1</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button onClick="">Continue</Button>
        <Button>Restart</Button>
      </ModalFooter>
    </div>
  );
};

export default RoundOverModal;
