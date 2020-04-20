import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colours } from '../constants/colours';

interface Props {
  placeholder?: string;
  value?: string;
  onSearchTextChanged: (text: string) => void;
}

const Input = styled.input`
  height: 35px;
  border-radius: 3px;
  border: solid 2px ${colours.darkGrey};
  padding-left: 10px;
  margin-bottom: 20px;

  &:focus {
    border-color: ${colours.secondary};
  }
`;

const SearchBar: React.FunctionComponent<Props> = (props: Props) => {
  const defaultValue = props.value || '';
  const [inputText, setInputText] = useState(defaultValue);

  const onTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    props.onSearchTextChanged(e.target.value.trim());
  };

  return <Input value={inputText} onChange={onTextChanged} placeholder={props.placeholder}></Input>;
};

export default SearchBar;
