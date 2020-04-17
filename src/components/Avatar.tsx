import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  src: string;
  size?: string;
}

const Image = styled.img<Props>`
  border-radius: 50%;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`;

const Avatar: React.FunctionComponent<Props> = (props: Props) => {
  const avatarSize = props.size || '2rem';
  return <Image src={props.src} size={avatarSize}></Image>;
};

export default Avatar;
