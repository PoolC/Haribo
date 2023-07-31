import React, { useRef } from 'react';
import { Block, WhiteBlock } from '../../styles/common/Block.styles';
import { Input, Space, Typography } from 'antd';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';

export default function NewBoardWritePage() {
  const editorRef = useRef<Editor | null>(null);

  return (
    <Block>
      <WhiteBlock>
        <Box>
          <Typography.Title level={2}>글 작성하기</Typography.Title>
          <Space direction={'vertical'} style={{ width: '100%' }}>
            <Input addonBefore={'제목'} placeholder={'제목을 입력해주세요.'} />
            <Editor initialEditType="wysiwyg" ref={editorRef} />
          </Space>
        </Box>
      </WhiteBlock>
    </Block>
  );
}

const Box = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  box-sizing: border-box;
`;
