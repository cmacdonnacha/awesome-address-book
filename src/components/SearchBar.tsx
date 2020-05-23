import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colours } from 'constants/colours';

interface Props {
  type?: string;
  placeholder?: string;
  value?: string;
  onSearchTextChanged: (text: string) => void;
}

const Input = styled.input`
  min-height: 40px;
  border-radius: 3px;
  border: solid 2px ${colours.grey3};
  padding: 0 10px;
  margin: 20px;
  box-shadow: 0 11px 13px -6px rgba(135, 142, 192, 0.15);

  &:focus {
    border-color: ${colours.secondary};
  }
`;

const SearchBar = (props: Props) => {
  const defaultValue = props.value || '';
  const [inputText, setInputText] = useState(defaultValue);

  const onTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set the local state
    setInputText(e.target.value);

    // Also let the parent know the search text has changed if used.
    props.onSearchTextChanged(e.target.value);
  };

  return <Input value={inputText} onChange={onTextChanged} {...props}></Input>;
};

export default SearchBar;
