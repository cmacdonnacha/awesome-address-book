import React, { useState } from 'react';
import styled from 'styled-components/macro';

interface Props {
  placeholder?: string;
  onSearchTextChanged: (text: string) => void;
}

const Input = styled.input`
  border: blue 1px solid;
`;

const SearchBar: React.FunctionComponent<Props> = (props: Props) => {
  const [inputText, setInputText] = useState('');

  const onTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    props.onSearchTextChanged(e.target.value.trim());
  };

  return <Input value={inputText} onChange={onTextChanged} placeholder={props.placeholder}></Input>;
};

export default SearchBar;
