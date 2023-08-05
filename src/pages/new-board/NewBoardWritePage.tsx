import React, { useRef } from 'react';
import { Block, WhiteBlock } from '~/styles/common/Block.styles';
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
import { Link } from 'react-router-dom';
import { MENU } from '~/constants/menus';
import { createStyles } from 'antd-style';
import { useSearchParams } from '~/hooks/useSearchParams';

const useStyles = createStyles(({ css }) => ({
  wrapper: css`
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  `,
  fullWidth: css`
    width: 100%;
  `,
  titleWrap: css`
    border-left: 4px solid #47be9b;
    padding-left: 16px;
  `,
}));

export default function NewBoardWritePage() {
  const searchParams = useSearchParams();
  const boardType =
    (searchParams.get('boardType') as 'free' | 'notice') ?? 'free'; // TODO type 정리필요

  const editorRef = useRef<Editor | null>(null);

  const { styles } = useStyles();

  return (
    <Block>
      <WhiteBlock>
        <Space
          direction={'vertical'}
          size={0}
          className={styles.wrapper}
          split={<Divider />}
        >
          <Breadcrumb
            items={[
              { title: <Link to={`/${MENU.NEW_BOARDS}`}>게시판</Link> },
              {
                title: (
                  <Link to={`${MENU.NEW_BOARDS}?boardType=${boardType}`}>
                    {boardType === 'free' ? '자유게시판' : '공지사항'}
                  </Link>
                ),
              },
            ]}
          />
          <Space
            direction={'vertical'}
            className={styles.fullWidth}
            size={'middle'}
          >
            <Space direction={'vertical'} className={styles.titleWrap} size={0}>
              <Typography.Title level={3}>자유게시판</Typography.Title>
              <Typography>자유롭게 글을 작성해주세요 :)</Typography>
            </Space>
            <Space
              direction={'vertical'}
              size={'middle'}
              className={styles.fullWidth}
            >
              <Input
                addonBefore={'제목'}
                placeholder={'제목을 입력해주세요.'}
              />
              <Editor initialEditType="wysiwyg" ref={editorRef} />
              <Upload multiple beforeUpload={() => false}>
                <Button icon={<FiUpload />}>파일 업로드</Button>
              </Upload>
              <Button type={'primary'} className={styles.fullWidth}>
                작성완료
              </Button>
            </Space>
          </Space>
        </Space>
      </WhiteBlock>
    </Block>
  );
}
