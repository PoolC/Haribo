import React from 'react'
import { Avatar, Breadcrumb, Divider, Space, Typography } from 'antd';
import styled from 'styled-components';
import { Block, WhiteBlock } from '../../styles/common/Block.styles';

export default function NewBoardDetailPage() {
 return <Block>
   <WhiteBlock>
     <Container>
       <Space direction={"vertical"} size={0}>
         <Breadcrumb items={[
           {
             title: 'Board',
           },
           {
             title: '자유게시판',
           },
         ]} />
         <Divider/>
         <Space direction={"vertical"} size={"middle"}>
           <Space align={"center"}><Avatar style={{width: '50px', height: '50px'}}/>
             <Space direction={'vertical'} size={0}><Typography.Text>글쓴이</Typography.Text>
               <Typography.Text type={'secondary'}>2023. 07. 28</Typography.Text></Space></Space>
           <Space direction={"vertical"} size={0}>
           <Typography.Title>제목입니다.</Typography.Title>
           <Typography.Text>내용이 입력됩니다</Typography.Text>
           </Space>
         </Space>
         <Divider/>
       </Space>
     </Container>
   </WhiteBlock>
 </Block>
}

const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`
