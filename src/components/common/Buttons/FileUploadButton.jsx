import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from './ActionButton';
import * as fileAPI from '../../../lib/api/file';
import { set } from '../../../../node_modules/stylis/stylis';

export const StyledFileButton = styled.label`
  &.browse-file {
    cursor: pointer;
    display: flex;
    justify-content: center;
    background-color: ${colors.mint[1]};
    color: ${colors.gray[0]};
    border-radius: 8px;
    transition: 0.3s;
    font-weight: 700;
    font-size: 0.8rem;
    max-width: 5rem;
    padding: 0.5rem;
    margin: 1rem 0 0 0;
    &:hover {
      background-color: ${colors.mint[2]};
      transition: 0.3s;
    }
  }
`;

export const StyledFileInput = styled.input`
  position: relative;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
  outline: 0;
`;

const FileName = styled.p`
  margin: 1rem 0 0 0;
`;

const StyledActionButton = styled(ActionButton)`
  margin: 1rem 0 0 0;
`;

const FileUploadButton = ({ file, onChangeFunc }) => {
  let formData = new FormData();

  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (e) => {
    onChangeFunc(e.target.files[0]);
  };

  console.log({ file });

  const onUploadFile = (e) => {
    e.preventDefault();
    formData.append('file', file);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    fileAPI.createFile(formData).then((res) => {
      console.log(formData);
      console.log(res.data);
      setImageUrl(res.data);
    });
  };

  return (
    <form encType="multipart/form-data" onSubmit={onUploadFile}>
      <StyledFileButton
        className="browse-file"
        htmlFor="my_file"
        onChange={handleChange}
      >
        파일 찾기
      </StyledFileButton>
      <FileName>{file.name}</FileName>
      <img src={imageUrl} alt="bookImage" />
      <StyledActionButton className="upload-file">
        이 파일 첨부
      </StyledActionButton>
      <StyledFileInput type="file" onChange={handleChange} id="my_file" />
    </form>
  );
};

export default FileUploadButton;
