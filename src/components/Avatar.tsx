/**
 * @component
 *
 * Displays an image as a rounded avatar.
 *
 * @param {string} src The source of the image to load
 * @param {string} size The height and width of the avatar. Set to 2rem by default.
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  src: string;
  size?: string;
  alt: string;
}

/**
 * Styled Components
 *
 * See https://styled-components.com/
 */
const Image = styled.img<Props>`
  border-radius: 50%;
  height: ${(props) => props.size};
  min-width: ${(props) => props.size};
`;

const Avatar = ({ src, size, alt }: Props) => {
  const avatarSize = size || '2rem';
  return <Image src={src} size={avatarSize} alt={alt}></Image>;
};

export default Avatar;
