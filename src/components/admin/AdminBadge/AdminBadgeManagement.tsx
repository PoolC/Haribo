import {
  Avatar,
  Button,
  Form,
  Input,
  message,
  Modal,
  Space,
  Table,
  Typography,
  Upload,
  UploadFile,
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import {
  BadgeControllerService,
  CustomApi,
  queryKey,
  useAppMutation,
  useAppQuery,
} from '~/lib/api-v2';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import { noop } from '~/lib/utils/noop';
import { queryClient } from '~/lib/utils/queryClient';
import { UploadChangeParam } from 'antd/es/upload';

/* ---------------------------
 * BADGE MANAGEMENT TABLE
 * ---------------------------- */
type DataType = {
  id: number;
  imageUrl: string;
  category: string;
  name: string;
  description: string;
  edit?: void;
};

export default function AdminBadgeManagement() {
  // data
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editId, setEditId] = useState(-1);

  const { data: allBadges } = useAppQuery({
    queryKey: queryKey.badge.all,
    queryFn: BadgeControllerService.getAllBadgeUsingGet,
  });

  const onRefecthAllBadges = () =>
    queryClient.invalidateQueries(queryKey.badge.all);

  const { mutate: deleteBadge } = useAppMutation({
    mutationFn: BadgeControllerService.deleteBadgeUsingDelete,
  });

  const dataSource: DataType[] =
    allBadges?.data?.map((item) => ({
      id: item.id!,
      imageUrl: item.imageUrl ?? '',
      category: item.category ?? '',
      name: item.name ?? '',
      description: item.description ?? '',
    })) ?? [];

  const onEditButtonClick = (id: number) => {
    setEditId(id);
    setShowEditModal(true);
  };

  const onDangerButtonClick = (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) {
      return;
    }

    deleteBadge(
      {
        badgeId: id,
      },
      {
        onSuccess() {
          onRefecthAllBadges().then(noop);
        },
        onError() {
          alert('에러가 발생했습니다.');
        },
      },
    );
  };
  // render
  const columns: ColumnsType<DataType> = [
    {
      key: 'image',
      title: '이미지',
      render: (val) => <Avatar src={val.imageUrl} />,
    },
    {
      key: 'category',
      title: '카테고리',
      render: (val) => <Typography.Text>{val.category}</Typography.Text>,
    },
    {
      key: 'name',
      title: '제목',
      render: (val) => <Typography.Text>{val.name}</Typography.Text>,
    },
    {
      key: 'description',
      title: '설명',
      render: (val) => <Typography.Text>{val.description}</Typography.Text>,
    },
    {
      key: 'edit',
      title: '수정/삭제',
      render: (val) => (
        <Space>
          <Button onClick={() => onEditButtonClick(val.id)}>수정</Button>
          <Button danger onClick={() => onDangerButtonClick(val.id)}>
            삭제
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Space direction={'vertical'}>
        <Button type={'primary'} onClick={() => setShowGenerateModal(true)}>
          뱃지생성하기
        </Button>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={{ position: ['bottomCenter'] }}
          rowKey={'id'}
        />
      </Space>
      {showGenerateModal && (
        <BadgeGenerateModal
          onCancel={() => setShowGenerateModal(false)}
          onOk={onRefecthAllBadges}
        />
      )}
      {showEditModal && (
        <BadgeEditModal
          onCancel={() => setShowEditModal(false)}
          onOk={onRefecthAllBadges}
          initialValues={dataSource.find((data) => data.id === editId)!}
        />
      )}
    </div>
  );
}

/* ---------------------------
 * BADGE GENERATE MODAL
 * ---------------------------- */
const generateSchema = z.object({
  imageUrl: z.string().min(1),
  category: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
});

function BadgeGenerateModal({
  onOk: _onOk,
  onCancel,
}: {
  onOk: () => void;
  onCancel: () => void;
}) {
  const form = useForm<z.infer<typeof generateSchema>>({
    validate: zodResolver(generateSchema),
    initialValues: {
      imageUrl: '',
      category: '',
      name: '',
      description: '',
    },
  });

  const { mutate: mutateUploadFile } = useAppMutation({
    mutationFn: CustomApi.uploadFile,
  });

  const { mutate: uploadBadge } = useAppMutation({
    mutationFn: BadgeControllerService.postBadgeUsingPost,
  });

  const [messageApi, contextHolder] = message.useMessage();

  const onSubmit = (val: typeof form.values) => {
    uploadBadge(
      {
        postBadgeRequest: {
          imageUrl: val.imageUrl,
          name: val.name,
          description: val.description,
        },
      },
      {
        onSuccess() {
          messageApi.success('뱃지가 생성되었습니다.').then(noop);
          _onOk();
        },
        onError() {
          messageApi.error('에러가 발생했습니다.').then(noop);
        },
      },
    );
  };

  const onOk = () => {
    if (!form.isValid()) {
      messageApi.error('폼을 전부 입력해주세요.').then(noop);
      return;
    }

    onSubmit(form.values);
  };

  const onUploadChange = (info: UploadChangeParam<UploadFile<any>>) => {
    mutateUploadFile(info.file as unknown as File, {
      onSuccess(imageUrl) {
        form.setFieldValue('imageUrl', imageUrl);
      },
      onError() {
        messageApi.error('에러가 발생했습니다.').then(noop);
      },
    });
  };

  const getUploadFileList = () => {
    return form.values.imageUrl
      ? [
          {
            uid: 'SOME_UID',
            url: form.values.imageUrl,
            name: form.values.imageUrl,
          },
        ]
      : [];
  };

  return (
    <Modal open onCancel={onCancel} onOk={onOk}>
      <Typography.Title level={4}>뱃지 생성</Typography.Title>
      <Form layout={'vertical'} onSubmitCapture={form.onSubmit(onSubmit, noop)}>
        <Form.Item label={'카테고리'}>
          <Input {...form.getInputProps('category')} />
        </Form.Item>
        <Form.Item label={'이름'}>
          <Input {...form.getInputProps('name')} />
        </Form.Item>
        <Form.Item label={'설명'}>
          <Input.TextArea {...form.getInputProps('description')} />
        </Form.Item>
        <Form.Item label={'로고'}>
          <Upload
            beforeUpload={() => false}
            onChange={onUploadChange}
            fileList={getUploadFileList()}
          >
            <Button icon={<UploadOutlined />}>로고파일 업로드</Button>
          </Upload>
        </Form.Item>
      </Form>
      {contextHolder}
    </Modal>
  );
}

/* ---------------------------
 * BADGE EDIT MODAL
 * ---------------------------- */
const editSchema = z.object({
  id: z.number(),
  imageUrl: z.string().min(1),
  category: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
});

function BadgeEditModal({
  onCancel,
  onOk: _onOk,
  initialValues,
}: {
  onCancel: () => void;
  onOk: () => void;
  initialValues: z.infer<typeof editSchema>;
}) {
  const form = useForm<z.infer<typeof editSchema>>({
    validate: zodResolver(editSchema),
    initialValues,
  });

  const { mutate: mutateUploadFile } = useAppMutation({
    mutationFn: CustomApi.uploadFile,
  });

  const { mutate: editBadge } = useAppMutation({
    mutationFn: BadgeControllerService.updateBadgeUsingPut,
  });

  const [messageApi, contextHolder] = message.useMessage();

  const onSubmit = (val: typeof form.values) => {
    editBadge(
      {
        badgeId: val.id,
        updateBadgeRequest: {
          imageUrl: val.imageUrl,
          name: val.name,
          description: val.description,
        },
      },
      {
        onSuccess() {
          messageApi.success('뱃지가 수정되었습니다.').then(noop);
          _onOk();
        },
        onError() {
          messageApi.error('에러가 발생했습니다.').then(noop);
        },
      },
    );
  };

  const onOk = () => {
    if (!form.isValid()) {
      messageApi.error('폼을 전부 입력해주세요.').then(noop);
      return;
    }

    onSubmit(form.values);
  };

  const onUploadChange = (info: UploadChangeParam<UploadFile<any>>) => {
    mutateUploadFile(info.file as unknown as File, {
      onSuccess(imageUrl) {
        form.setFieldValue('imageUrl', imageUrl);
      },
      onError() {
        messageApi.error('에러가 발생했습니다.').then(noop);
      },
    });
  };

  const getUploadFileList = () => {
    return form.values.imageUrl
      ? [
          {
            uid: 'SOME_UID',
            url: form.values.imageUrl,
            name: form.values.imageUrl,
          },
        ]
      : [];
  };

  return (
    <Modal open onCancel={onCancel} onOk={onOk}>
      <Typography.Title level={4}>뱃지 수정</Typography.Title>
      <Form layout={'vertical'} onSubmitCapture={form.onSubmit(onSubmit, noop)}>
        <Form.Item label={'카테고리'}>
          <Input {...form.getInputProps('category')} disabled />
        </Form.Item>
        <Form.Item label={'이름'}>
          <Input {...form.getInputProps('name')} />
        </Form.Item>
        <Form.Item label={'설명'}>
          <Input.TextArea {...form.getInputProps('description')} />
        </Form.Item>
        <Form.Item label={'로고'}>
          <Upload
            beforeUpload={() => false}
            onChange={onUploadChange}
            fileList={getUploadFileList()}
          >
            <Button icon={<UploadOutlined />}>로고파일 업로드</Button>
          </Upload>
        </Form.Item>
      </Form>
      {contextHolder}
    </Modal>
  );
}
