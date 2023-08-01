import React, { useRef } from 'react';
import { Block, WhiteBlock } from '../../styles/common/Block.styles';
import {
  Breadcrumb,
  Button,
  Divider,
  Input,
  Space,
  Typography,
  Upload,
} from 'antd';
import { Editor } from '@toast-ui/react-editor';
import { FiUpload } from 'react-icons/fi';

export default function NewBoardWritePage() {
  const editorRef = useRef<Editor | null>(null);

  return (
    <Block>
      <WhiteBlock>
        <Space
          direction={'vertical'}
          size={0}
          style={{
            width: '100%',
            padding: '0 20px',
            boxSizing: 'border-box',
          }}
          split={<Divider />}
        >
          <Breadcrumb
            items={[
              { title: 'Board' },
              {
                title: '글쓰기',
              },
            ]}
          />
          <Space direction={'vertical'} style={{ width: '100%' }}>
            <Typography.Title level={2}>글 작성하기</Typography.Title>
            <Space
              direction={'vertical'}
              size={'middle'}
              style={{ width: '100%' }}
            >
              <Input
                addonBefore={'제목'}
                placeholder={'제목을 입력해주세요.'}
              />
              <Editor initialEditType="wysiwyg" ref={editorRef} />
              <Upload multiple beforeUpload={() => false}>
                <Button icon={<FiUpload />}>파일 업로드</Button>
              </Upload>
              <Button type={'primary'} style={{ width: '100%' }}>
                작성완료
              </Button>
            </Space>
          </Space>
        </Space>
      </WhiteBlock>
    </Block>
  );
}
