import React, { useState } from 'react';
import ActionButton from './ActionButton';
import * as fileAPI from '../../../lib/api/file';
import FileUploadModal from '../FileUploadModal/FileUploadModal';
import Modal from '../Modal/Modal';

const FileUploadButton = ({ onSubmit }) => {
  let formData = new FormData();

  const [file, setFile] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const onBrowseFile = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const onUploadFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setModalVisible(false);
    formData.append('file', file);
    fileAPI
      .createFile(formData)
      .then((res) => {
        setFile(res.data);
        onSubmit(res.data);
      })
      .catch((e) => {
        setFile(null);
        console.error(e.response.data);
        setErrorMessage(e.response.data);
        onShowErrorModal();
      });
  };

  const onShowModal = (e) => {
    e.preventDefault();
    setModalVisible(true);
  };

  const onShowErrorModal = () => {
    setErrorModalVisible(true);
  };

  const onCloseErrorModal = (e) => {
    e.preventDefault();
    setErrorModalVisible(false);
  };

  const buttons = <ActionButton onClick={onCloseErrorModal}>확인</ActionButton>;

  return (
    <>
      <FileUploadModal
        visible={modalVisible}
        file={file}
        onUploadFile={onUploadFile}
        onBrowseFile={onBrowseFile}
        onCancel={() => setModalVisible(false)}
      />
      <Modal
        contents={errorMessage}
        buttons={buttons}
        visible={errorModalVisible}
        onConfirm={onCloseErrorModal}
        onCancel={onCloseErrorModal}
      />
      <ActionButton
        className="file"
        onClick={onShowModal}
        style={{ marginBottom: '1rem' }}
      >
        파일 첨부
      </ActionButton>
    </>
  );
};

export default FileUploadButton;
