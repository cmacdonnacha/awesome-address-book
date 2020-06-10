import React from 'react';
import styled from 'styled-components/macro';
import { colours } from 'constants/colours';

interface Props {
  id?: string;
  label?: string;
  isChecked?: boolean;
  onClick: () => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCheckbox = styled.input`
  /* Hide the default checkbox without losing accessibility */
  cursor: pointer;
  opacity: 0;
  position: absolute;
  margin: 0 0 0 -10px;

  /* Change styling of checkbox when "checked" */
  &:checked + label::before {
    background-color: ${colours.secondary};
    color: ${colours.white};
  }

  /* Change styling of check mark when checkbox is "checked" */
  &:checked + label::after {
    color: ${colours.white};
    content: '';
  }

  /* Change styling of check mark when checkbox is "unchecked" */
  & + label::after {
    content: none;
    color: ${colours.white};
  }

  /* Use focus styles so that the checkbox is highlighted when using the keyboard */
  &:focus + label::before {
    outline: 0;
    box-shadow: 0 0 0.1rem 0.1rem #69c0e2;
  }
`;

const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;

  /* Create the fake checkbox to the left of the label. The "before" pseudo element will be the checkbox */
  &::before {
    content: '';
    width: 1rem;
    height: 1rem;
    border-radius: 0.15em;
    border: 0.1em solid #3a529c;
    margin: 0 8px 0 2px;
  }

  /* The "after" pseudo element will be the check mark */
  &::after {
    content: '';
    height: 0.25rem;
    width: 0.5rem;
    border-left: 0.125rem solid;
    border-bottom: 0.125rem solid;
    position: absolute;
    transform: rotate(-45deg);
    left: 0.41em;
    top: 0.37em;
  }
`;

const Checkbox = ({ id, label, isChecked, onClick }: Props) => {
  return (
    <Container>
      <StyledCheckbox id={id} type="checkbox" checked={isChecked} onChange={onClick}></StyledCheckbox>
      <Label htmlFor={id}>{label}</Label>
    </Container>
  );
};

export default Checkbox;
