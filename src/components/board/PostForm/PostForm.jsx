import React, { useRef, useState } from 'react';
import 'react-markdown-editor-lite/lib/index.css';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { withRouter } from 'react-router-dom';
import {
  BoardName,
  EditorWrapper,
  FileContainer,
  PostButtonContainer,
  StyledActionButton,
  TitleInput,
  File,
  FileDeleteButton,
  FileContainerTitle,
  StyledDeleteIcon,
} from './PostForm.styles';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import FileUploadButton from '../../common/Buttons/FileUploadButton';
import Modal from '../../common/Modal/Modal';
import ActionButton from '../../common/Buttons/ActionButton';
import getFileUrl from '../../../lib/utils/getFileUrl';
import throttle from '../../../lib/utils/throttle';

const PostForm = ({
  history,
  post,
  selectedMenu,
  onCreatePost,
  onUpdatePost,
}) => {
  const editorRef = useRef();

  const [title, setTitle] = useState(post ? post.title : '');
  const [body, setBody] = useState(post ? post.body : '');
  const [files, setFiles] = useState(post ? post.fileList : []);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  function onEditorChange(e) {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();
    setBody(markdownContent);
  }

  const handleCreate = throttle((e) => {
    e.preventDefault();
    if (!title || !body) {
      setErrorMessage('제목과 내용을 모두 입력하세요.');
      onShowErrorModal();
      return;
    }
    onCreatePost({ title, body, fileList: files });
  }, 1000);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!title || !body) {
      setErrorMessage('제목과 내용을 모두 입력하세요.');
      onShowErrorModal();
      return;
    }
    onUpdatePost({ title, body, fileList: files });
  };

  const onShowErrorModal = () => {
    setErrorModalVisible(true);
  };

  const onCloseErrorModal = (e) => {
    e.preventDefault();
    setErrorModalVisible(false);
  };

  const buttons = <ActionButton onClick={onCloseErrorModal}>확인</ActionButton>;

  const handleSubmit = (fileList) => {
    setFiles(fileList);
  };

  const handleDeleteFile = (e, file) => {
    e.preventDefault();
    setFiles(files.filter((f) => f !== file));
  };

  return (
    <WhiteNarrowBlock>
      <BoardName>{selectedMenu.name}</BoardName>
      <Modal
        contents={errorMessage}
        buttons={buttons}
        visible={errorModalVisible}
        onConfirm={onCloseErrorModal}
        onCancel={onCloseErrorModal}
      />
      <TitleInput
        placeholder="제목을 입력하세요"
        value={title}
        onChange={onChangeTitle}
      />
      <EditorWrapper>
        <Editor
          initialEditType="wysiwyg"
          initialValue={body}
          ref={editorRef}
          onChange={(e) => onEditorChange(e)}
          height="500px"
        />
      </EditorWrapper>
      <FileContainerTitle>첨부된 파일 목록</FileContainerTitle>
      <FileContainer>
        {files?.length !== 0
          ? files.map((file) => (
              <File key={file}>
                <a href={getFileUrl(file)}>{getFileUrl(file)}</a>
                <FileDeleteButton onClick={(e) => handleDeleteFile(e, file)}>
                  <StyledDeleteIcon className="far fa-trash-alt"></StyledDeleteIcon>
                </FileDeleteButton>
              </File>
            ))
          : '첨부된 파일 없음'}
      </FileContainer>
      <PostButtonContainer>
        <FileUploadButton
          files={files}
          onSubmit={handleSubmit}
          multiple={true}
        />
        {post ? (
          <StyledActionButton className="submit" onClick={handleUpdate}>
            수정
          </StyledActionButton>
        ) : (
          <StyledActionButton className="submit" onClick={handleCreate}>
            작성
          </StyledActionButton>
        )}

        <StyledActionButton
          className="cancel"
          onClick={() => history.goBack(1)}
        >
          취소
        </StyledActionButton>
      </PostButtonContainer>
    </WhiteNarrowBlock>
  );
};

export default withRouter(PostForm);
