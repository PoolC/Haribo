import React, { FormEventHandler, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import {
  Breadcrumb,
  Button,
  Divider,
  Input,
  message,
  Space,
  Typography,
  Upload,
  UploadFile,
} from 'antd';
import { PostControllerService, useAppMutation } from '~/lib/api-v2';
import { UploadChangeParam } from 'antd/es/upload';
import { noop } from '~/lib/utils/noop';
import { Block, WhiteBlock } from '~/styles/common/Block.styles';
import { Link } from 'react-router-dom';
import { MENU } from '~/constants/menus';
import { stringify } from 'qs';
import { FiUpload } from 'react-icons/fi';
import { createStyles } from 'antd-style';

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
  buttonWrap: css`
    width: 100%;
    justify-content: space-between;
  `,
  divider: css`
    margin: 12px 0;
  `,
}));

export default function NormalWriteSection({ boardId }: { boardId: number }) {
  const editorRef = useRef<Editor | null>(null);

  const { styles } = useStyles();

  const form = useForm({
    initialValues: {
      title: '',
      content: '',
      files: [] as File[],
    },
    validate: zodResolver(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
        files: z.array(z.any()),
      }),
    ),
    validateInputOnChange: true,
  });

  const [messageApi, contextHolder] = message.useMessage();

  const { mutate: submitPost } = useAppMutation({
    mutationFn: PostControllerService.registerPostUsingPost,
  });

  // NOTE 에디터에서 값을 직접 가져올 수 없어서 이벤트 버블링 이용
  const onEditorInput: FormEventHandler = () => {
    form.setValues({
      content: editorRef.current?.getInstance().getHtml(),
    });
  };

  const onFileChange = (info: UploadChangeParam<UploadFile<any>>) => {
    form.setValues({
      files: info.fileList.map((file) => file.originFileObj) as File[],
    });
  };

  const onFormSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (!form.isValid()) {
      return;
    }

    submitPost(
      {
        request: {
          boardId,
          body: form.values.content,
          title: form.values.title,
        },
      },
      {
        onSuccess() {
          messageApi.success('글이 작성되었습니다.').then(noop);
        },
      },
    );
  };

  return (
    <Block>
      <WhiteBlock>
        <Space
          direction={'vertical'}
          size={0}
          className={styles.wrapper}
          split={<Divider className={styles.divider} />}
        >
          <Breadcrumb
            items={[
              { title: <Link to={`/${MENU.NEW_BOARDS}`}>게시판</Link> },
              {
                title: (
                  <Link to={`${MENU.NEW_BOARDS}?${stringify(boardId)}`}>
                    자유게시판
                  </Link>
                ),
              },
            ]}
          />
          <form onSubmit={onFormSubmit}>
            <Space
              direction={'vertical'}
              className={styles.fullWidth}
              size={'middle'}
            >
              <Space
                direction={'vertical'}
                className={styles.titleWrap}
                size={0}
              >
                <Typography.Title level={3}>자유게시판</Typography.Title>
                <Typography>자유롭게 글을 작성해보아요</Typography>
              </Space>
              <Space
                direction={'vertical'}
                size={'middle'}
                className={styles.fullWidth}
              >
                <Input
                  addonBefore={'제목'}
                  placeholder={'제목을 입력해주세요.'}
                  {...form.getInputProps('title')}
                />
                <div onInput={onEditorInput}>
                  <Editor initialEditType="wysiwyg" ref={editorRef} />
                </div>
                <Space
                  direction={'horizontal'}
                  align={'start'}
                  className={styles.buttonWrap}
                >
                  <Upload
                    multiple
                    beforeUpload={() => false}
                    onChange={onFileChange}
                  >
                    <Button icon={<FiUpload />}>파일 업로드</Button>
                  </Upload>
                  <Button
                    type={'primary'}
                    htmlType={'submit'}
                    className={styles.fullWidth}
                    disabled={!form.isValid()}
                  >
                    등록
                  </Button>
                </Space>
              </Space>
            </Space>
          </form>
        </Space>
      </WhiteBlock>
      {contextHolder}
    </Block>
  );
}
