import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

// This component utilizes React Portal which provides a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
// This makes it ideal for Modals where you want it to overlap every other child component.

// 'modal' div is a sibling to 'app' div which exists in index.html
const modalRoot: HTMLElement = document.getElementById('modal') || document.createElement('div');

interface Props {
  isOpen: boolean;
  // Typescript doesn't seem to play nicely with React Portal types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalBody = styled.div`
  display: flex;
  width: calc(100% - 64px);
  max-width: 450px;
  background: white;
  height: 50vh;
  text-align: center;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Modal: React.FunctionComponent<Props> = (props: Props): any => {
  // Element to which the modal will be rendered
  const targetContainer: HTMLDivElement = document.createElement('div');

  useEffect(() => {
    if (modalRoot) {
      // append to root when the children of Modal are mounted
      modalRoot.appendChild(targetContainer);

      // do a cleanup
      return () => {
        modalRoot.removeChild(targetContainer);
      };
    }
  }, [targetContainer]);

  return (
    props.isOpen &&
    createPortal(
      // This is what gets rendered when the modal is opened
      <ModalContainer>
        <ModalBody>{props.children}</ModalBody>
      </ModalContainer>,
      targetContainer,
    )
  );
};

export default Modal;
