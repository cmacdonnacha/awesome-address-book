import React from 'react';
import styled from 'styled-components/macro';
import { StyledIcon } from '@styled-icons/styled-icon';
import { colours } from '../constants/colours';

interface Props {
  icon: StyledIcon;
  size?: number;
  tooltip?: string;
  onClick?: () => void;
}

const Button = styled.button`
  border: none;
  background-color: transparent;

  &:hover {
    background-color: ${colours.grey};
    cursor: pointer;
  }
`;

const IconButton: React.FunctionComponent<Props> = (props: Props) => {
  const tooltip = props.tooltip;
  const size = props.size || 16;

  return (
    <Button title={tooltip} aria-label={props.tooltip} onClick={props.onClick}>
      <props.icon size={size} />
    </Button>
  );
};

export default IconButton;
