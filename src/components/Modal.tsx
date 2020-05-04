/**
 * @component
 *
 * A generic popup modal
 *
 * This component utilizes React Portal which provides a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
 * A typical use case for portals is when a parent component has an overflow: hidden or z-index style, but you need the child to visually "break out2 of its container.
 * This makes it ideal for Modals where you want it to overlap every other child component.
 *
 * @param {boolean} isOpen Tells us if the modal is open
 * @param {ReactNode} children Children inside the modal
 *
 */
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components/macro';

// 'modal' div is a sibling to 'app' div which exists in index.html
const modalRoot: HTMLElement = document.getElementById('modal') || document.createElement('div');

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
}

/**
 * Styled Components
 *
 * See https://styled-components.com/
 */
const ModalContainer = styled.div`
  border-radius: 8px;
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
  border-radius: 8px;
  display: flex;
  width: calc(100% - 64px);
  max-width: 450px;
  background: white;
  height: 50vh;
  text-align: center;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Modal = ({ isOpen, children }: Props): any => {
  // Element to which the modal will be rendered
  const targetContainer: HTMLDivElement = document.createElement('div');

  useEffect(() => {
    if (modalRoot) {
      // Append to root when the children of Modal are mounted
      modalRoot.appendChild(targetContainer);

      // Do a cleanup
      return () => {
        modalRoot.removeChild(targetContainer);
      };
    }
  }, [targetContainer]);

  return (
    isOpen &&
    createPortal(
      // This is what gets rendered when the modal is opened
      <ModalContainer>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>,
      targetContainer,
    )
  );
};

export default Modal;
