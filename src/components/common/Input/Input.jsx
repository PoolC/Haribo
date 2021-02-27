import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  margin: 2rem 0 1rem 0;
  font-weight: 600;
`;

const StyledInput = styled.input`
  height: 2rem;
  width: 15rem;
  outline: 0;
`;

const Input = ({
  valueText,
  labelText,
  typeText,
  nameText,
  error,
  onChangeFunc,
  placeholderText,
  disabledCondition,
}) => {
  return (
    <>
      <StyledLabel htmlFor={nameText}>{labelText}</StyledLabel>
      <StyledInput
        autoComplete="off"
        value={valueText}
        type={typeText}
        name={nameText}
        id={nameText}
        disabled={disabledCondition}
        error={error}
        onChange={onChangeFunc}
        placeholder={placeholderText}
      />
    </>
  );
};

export default Input;
