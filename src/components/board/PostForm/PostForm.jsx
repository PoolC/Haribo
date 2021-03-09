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
  FileContainerTitle,
} from './PostForm.styles';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import FileUploadButton from '../../common/Buttons/FileUploadButton';

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
  const [files, setFiles] = useState(post ? post.files : '');

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  function onEditorChange(e) {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();
    //const HTMLContent = editorInstance.getHtml();
    setBody(markdownContent);
  }

  const handleCreate = (e) => {
    e.preventDefault();
    onCreatePost({ title, body });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdatePost({ title, body });
  };

  return (
    <WhiteNarrowBlock>
      <BoardName>{selectedMenu.name}</BoardName>
      <TitleInput
        placeholder="제목을 입력하세요"
        value={title}
        onChange={onChangeTitle}
      />
      <EditorWrapper>
        <Editor
          initialValue={body}
          ref={editorRef}
          onChange={(e) => onEditorChange(e)}
          height="500px"
        />
      </EditorWrapper>
      <FileContainerTitle>첨부된 파일 목록</FileContainerTitle>
      <FileContainer>{files ? files : '첨부된 파일 없음'}</FileContainer>
      <PostButtonContainer>
        <FileUploadButton onSubmit={setFiles} />
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
