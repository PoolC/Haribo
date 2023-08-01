import { Block, WhiteBlock } from '../../styles/common/Block.styles';
import { Divider, Space } from 'antd';
import React from 'react';

export default function MyPage() {
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
          my page~~~
        </Space>
      </WhiteBlock>
    </Block>
  );
}
