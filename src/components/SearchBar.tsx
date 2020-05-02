/**
 * @component
 *
 * Displays a generic search bar
 *
 * @param {string} placeholder Placeholder text to set on the input
 * @param {string} value Sets the value of the input if it's passed. Otherwise it's empty. This is useful when a parent component wants to handle the search text state.
 * @param {string} ariaLabel The aria label of the input to allow screen readers to know the purpose of the input.
 * @param {callback} onSearchTextChanged Fires when the search input text has changed.
 *
 */
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colours } from 'constants/colours';

interface Props {
  placeholder?: string;
  value?: string;
  ariaLabel?: string;
  onSearchTextChanged: (text: string) => void;
}

/**
 * Styled Components
 *
 * See https://styled-components.com/
 */
const Input = styled.input`
  height: 35px;
  border-radius: 3px;
  border: solid 2px ${colours.grey3};
  padding-left: 10px;
  margin: 20px;
  box-shadow: 0 11px 13px -6px rgba(135, 142, 192, 0.15);

  &:focus {
    border-color: ${colours.secondary};
  }
`;

const SearchBar: React.FunctionComponent<Props> = (props: Props) => {
  const defaultValue = props.value || '';
  const [inputText, setInputText] = useState(defaultValue);

  const onTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set the local state
    setInputText(e.target.value);

    // Also let the parent know the search text has changed if used.
    props.onSearchTextChanged(e.target.value);
  };

  return <Input value={inputText} onChange={onTextChanged} placeholder={props.placeholder} aria-label={props.ariaLabel}></Input>;
};

export default SearchBar;
