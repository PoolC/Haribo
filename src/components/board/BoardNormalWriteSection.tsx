import React, { FormEventHandler, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import {
  Breadcrumb,
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  Space,
  Typography,
  Upload,
  UploadFile,
} from 'antd';
import { CustomApi, PostControllerService, useAppMutation } from '~/lib/api-v2';
import { UploadChangeParam } from 'antd/es/upload';
import { Block, WhiteBlock } from '~/styles/common/Block.styles';
import { Link } from 'react-router-dom';
import { MENU } from '~/constants/menus';
import { stringify } from 'qs';
import { FiUpload } from 'react-icons/fi';
import { createStyles } from 'antd-style';
import {
  BoardType,
  BoardWriteMode,
  getBoardTitleByBoardType,
} from '~/lib/utils/boardUtil';
import { match } from 'ts-pattern';
import { useMessage } from '~/hooks/useMessage';

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
  editorWrap: css`
    margin-bottom: 24px;
  `,
  divider: css`
    margin: 12px 0;
  `,
}));

const schema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  fileList: z.array(z.string()),
  isAnonymous: z.boolean(),
});

/**
 * TODO
 * - 편집시 데이터 바인딩
 * - 권한 확인
 * */
export default function BoardNormalWriteSection({
  boardType,
  mode,
}: {
  boardType: Exclude<BoardType, 'JOB'>;
  mode: BoardWriteMode;
}) {
  const editorRef = useRef<Editor | null>(null);

  const { styles } = useStyles();

  const form = useForm<z.infer<typeof schema>>({
    initialValues: {
      title: '',
      content: '',
      fileList: [],
      isAnonymous: false,
    },
    validate: zodResolver(schema),
  });

  const message = useMessage();

  const { mutate: submitPost } = useAppMutation({
    mutationFn: PostControllerService.registerPostUsingPost,
  });

  const { mutate: mutateUploadFile } = useAppMutation({
    mutationFn: CustomApi.uploadFile,
  });

  // NOTE 에디터에서 값을 직접 가져올 수 없어서 이벤트 버블링 이용
  const onEditorInput: FormEventHandler = () => {
    form.setValues({
      content: editorRef.current?.getInstance().getHtml(),
    });
  };

  const onFormSubmit = (val: typeof form.values) => {
    submitPost(
      {
        request: {
          body: val.content,
          title: val.title,
          anonymous: val.isAnonymous,
          boardType,
        },
      },
      {
        onSuccess() {
          message.success('글이 작성되었습니다.');
        },
      },
    );
  };

  const renderDescription = () =>
    match(boardType)
      .with('FREE', () => '자유롭게 글을 작성해보아요')
      .with('NOTICE', () => '공지사항을 올릴 수 있어요')
      .with('PROJECT', () => '프로젝트 팀원을 구해요')
      .with('CS', () => 'CS 전공지식을 공유해요')
      .exhaustive();

  const onUploadChange = (info: UploadChangeParam<UploadFile<any>>) => {
    mutateUploadFile(info.file as unknown as File, {
      onSuccess(fileUrl) {
        form.setFieldValue('fileList', [...form.values.fileList, fileUrl]);
      },
      onError() {
        message.error('에러가 발생했습니다.');
      },
    });
  };

  const getUploadFileList = () => {
    return form.values.fileList.map((file, i) => ({
      uid: `UPLOAD_FILE@.{i}`,
      url: file,
      name: file,
    }));
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
              { title: <Link to={`/${MENU.BOARD}`}>게시판</Link> },
              {
                title: (
                  <Link to={`/${MENU.BOARD}?${stringify({ boardType })}`}>
                    {getBoardTitleByBoardType(boardType)}
                  </Link>
                ),
              },
            ]}
          />
          <Form onSubmitCapture={form.onSubmit(onFormSubmit, () => {})}>
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
                <Typography.Title level={3}>
                  {getBoardTitleByBoardType(boardType)}
                </Typography.Title>
                <Typography>{renderDescription()}</Typography>
              </Space>
              <div className={styles.fullWidth}>
                <Form.Item label={'제목'} name={'title'}>
                  <Input
                    placeholder={'제목을 입력해주세요.'}
                    {...form.getInputProps('title')}
                  />
                </Form.Item>
                <div onInput={onEditorInput} className={styles.editorWrap}>
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
                    onChange={onUploadChange}
                    fileList={getUploadFileList()}
                  >
                    <Button icon={<FiUpload />}>파일 업로드</Button>
                  </Upload>
                  <Space>
                    {boardType !== 'NOTICE' && (
                      <Checkbox
                        checked={form.values.isAnonymous}
                        onChange={(e) =>
                          form.setFieldValue('isAnonymous', e.target.checked)
                        }
                      >
                        익명
                      </Checkbox>
                    )}
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
              </div>
            </Space>
          </Form>
        </Space>
      </WhiteBlock>
    </Block>
  );
}
