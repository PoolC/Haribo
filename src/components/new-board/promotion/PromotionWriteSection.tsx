import React, { FormEventHandler, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import {
  Breadcrumb,
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  message,
  Radio,
  Space,
  Typography,
  Upload,
} from 'antd';
import {
  PostControllerService,
  PostCreateRequest,
  useAppMutation,
} from '~/lib/api-v2';
import { UploadChangeParam } from 'antd/es/upload';
import { noop } from '~/lib/utils/noop';
import { Block, WhiteBlock } from '~/styles/common/Block.styles';
import { Link } from 'react-router-dom';
import { MENU } from '~/constants/menus';
import { stringify } from 'qs';
import { FiUpload } from 'react-icons/fi';
import { createStyles } from 'antd-style';
import dayjs from 'dayjs';
import { convertPositionToText } from '~/lib/utils/positionUtil';

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
    margin-top: 24px;
  `,
  divider: css`
    margin: 12px 0;
  `,
}));

export default function PromotionWriteSection({
  boardId,
}: {
  boardId: number;
}) {
  // data
  const editorRef = useRef<Editor | null>(null);

  const { styles } = useStyles();

  const form = useForm({
    initialValues: {
      title: '',
      content: '',
      position: '',
      field: '',
      deadline: dayjs().format('YYYY-MM-DD'),
      region: '',
      files: [] as File[],
    },
    validate: zodResolver(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
        position: z.string().min(1),
        field: z.string().min(1),
        deadline: z.string().min(1),
        region: z.string().min(1),
        files: z.array(z.any()),
      }),
    ),
    // validateInputOnChange: true,
  });

  const [messageApi, contextHolder] = message.useMessage();

  const { mutate: submitPost } = useAppMutation({
    mutationFn: PostControllerService.registerPostUsingPost,
  });

  const positions: { value: PostCreateRequest['position'] }[] = [
    { value: 'BOOTCAMP' },
    { value: 'COMPETITION' },
    { value: 'NEW_EMPLOYEE' },
    { value: 'EXPERIENCED_EMPLOYEE' },
    { value: 'INTERN_FOR_EXPERIENCE' },
    { value: 'INTERN_FOR_JOB' },
    { value: 'OTHER' },
  ];

  const fields: { value: string }[] = [
    { value: '웹' },
    { value: '모바일' },
    { value: '인공지능' },
    { value: '데이터사이언스' },
    { value: '블록체인' },
    { value: '시스템' },
    { value: '기타' },
  ];

  // methods
  // NOTE 에디터에서 값을 직접 가져올 수 없어서 이벤트 버블링 이용
  const onEditorInput: FormEventHandler = () => {
    form.setValues({
      content: editorRef.current?.getInstance().getHtml(),
    });
  };

  const onFileChange = (info: UploadChangeParam) => {
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
          deadline: form.values.deadline,
          field: form.values.field,
          postType: 'JOB_POST',
          region: form.values.region,
        },
      },
      {
        onSuccess() {
          messageApi.success('글이 수정되었습니다.').then(noop);
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
                    홍보게시판
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
              <Typography.Title level={3}>홍보게시판</Typography.Title>
              <Typography>홍보 글을 작성해보아요</Typography>
            </Space>
            <Form
              labelCol={{ span: 2 }}
              wrapperCol={{ span: 22 }}
              onSubmitCapture={onFormSubmit}
            >
              <Form.Item label="제목">
                <Input
                  placeholder={'제목을 입력해주세요.'}
                  {...form.getInputProps('title')}
                />
              </Form.Item>
              <Form.Item label="고용형태">
                <Radio.Group
                  onChange={(e) =>
                    form.setFieldValue('position', e.target.value)
                  }
                  value={form.values.position}
                >
                  {positions.map((position) => (
                    <Radio key={position.value} value={position.value}>
                      {convertPositionToText(position.value)}
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>
              <Form.Item label="지역">
                <Input
                  placeholder="지역을 입력해주세요."
                  {...form.getInputProps('region')}
                />
              </Form.Item>
              <Form.Item label="분야">
                <Radio.Group
                  onChange={(e) => form.setFieldValue('field', e.target.value)}
                  value={form.values.field}
                >
                  {fields.map((field) => (
                    <Radio key={field.value} value={field.value}>
                      {field.value}
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>
              <Form.Item label="마감일자">
                <DatePicker
                  value={dayjs(form.values.deadline)}
                  onChange={(_, date) => form.setFieldValue('deadline', date)}
                />
              </Form.Item>
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
            </Form>
          </Space>
        </Space>
      </WhiteBlock>
      {contextHolder}
    </Block>
  );
}
