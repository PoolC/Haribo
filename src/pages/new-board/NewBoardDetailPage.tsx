import React from 'react';
import {
  Avatar,
  Breadcrumb,
  Button,
  Divider,
  Input,
  Space,
  Typography,
} from 'antd';
import { Block, WhiteBlock } from '../../styles/common/Block.styles';
import styled from 'styled-components';

export default function NewBoardDetailPage() {
  return (
    <Block>
      <WhiteBlock>
        <Space
          direction={'vertical'}
          size={0}
          style={{ width: '100%', padding: '0 20px', boxSizing: 'border-box' }}
          split={<Divider />}
        >
          <Breadcrumb
            items={[
              { title: 'Board' },
              {
                title: '자유게시판',
              },
            ]}
          />
          <Space direction={'vertical'} size={'middle'}>
            <Space align={'center'}>
              <Avatar style={{ width: '50px', height: '50px' }} />
              <Space direction={'vertical'} size={0}>
                <Typography.Text>글쓴이</Typography.Text>
                <Typography.Text type={'secondary'}>
                  2023. 07. 28
                </Typography.Text>
              </Space>
            </Space>
            <Space direction={'vertical'} size={0}>
              <Typography.Title level={2}>제목입니다.</Typography.Title>
              <Typography.Text>내용이 입력됩니다</Typography.Text>
            </Space>
          </Space>
          <Space
            direction={'vertical'}
            size={'large'}
            style={{ width: '100%' }}
          >
            <Space align={'start'}>
              <Avatar />
              <Space direction={'vertical'} size={0}>
                <Typography.Text>풀씨짱123</Typography.Text>
                <Typography.Text>유익한 글이군요</Typography.Text>
                <Typography.Text type={'secondary'}>
                  2023. 07. 28
                </Typography.Text>
              </Space>
            </Space>
            <Space direction={'vertical'} style={{ width: '100%' }}>
              <Input.TextArea
                style={{ minHeight: '120px', resize: 'none' }}
                placeholder="댓글을 남겨주세요 :)"
              />
              <StyledButtonWrap>
                <Button type={'primary'}>댓글 달기</Button>
              </StyledButtonWrap>
            </Space>
          </Space>
        </Space>
      </WhiteBlock>
    </Block>
  );
}

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
