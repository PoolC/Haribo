import{I as c,j as e,J as m,B as i,C as a,L as x,M as o,b as d}from"./index-04133603.js";import{B as p,a as h}from"./Block.styles-4dce9da8.js";import{T as s}from"./index-d2de38b1.js";import{L as r}from"./index-95e722ff.js";import{A as j}from"./ArrowLeftOutlined-c43a908a.js";import"./index-be6001b4.js";import"./DownOutlined-5e397386.js";import"./SearchOutlined-d77ecd25.js";import"./row-dbac2f85.js";import"./AntdIcon-461508d6.js";const f=d(({css:t})=>({whiteBlock:t`
    &.scope {
      padding: 30px 20px;
    }
  `,wrapper:t`
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
  `,fullWidth:t`
    width: 100%;
  `,metaInfo:t`
    justify-content: space-between;
    width: 100%;
  `,messageType:t`
    font-weight: 700;
  `,topBox:t`
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,topBoxName:t`
    margin-bottom: 0;
    font-weight: 700;
    font-size: 20px;
  `}));function S(){const{styles:t}=f(),n=c(),l=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}];return e.jsx(p,{children:e.jsx(h,{className:m(t.whiteBlock,"scope"),children:e.jsxs(i,{direction:"vertical",className:t.fullWidth,size:"large",children:[e.jsxs(i,{className:t.topBox,children:[e.jsxs(i,{children:[e.jsx(a,{shape:"circle",type:"text",onClick:()=>n.goBack(),children:e.jsx(j,{rev:0})}),e.jsx(s.Text,{className:t.topBoxName,children:"익명"})]}),e.jsx(x,{to:`/${o.MY_PAGE}/${o.MESSAGE_FORM}`,children:e.jsx(a,{children:"쪽지 보내기"})})]}),e.jsx(r,{itemLayout:"horizontal",dataSource:l,renderItem:(g,u)=>e.jsx(r.Item,{children:e.jsxs(i,{direction:"vertical",className:t.fullWidth,children:[e.jsxs(i,{className:t.metaInfo,children:[e.jsx(s.Text,{className:t.messageType,children:"받은 쪽지"}),e.jsx(s.Text,{children:"2023.08.15 19:20:50"})]}),e.jsx(s.Text,{children:"내용내용내용"})]})})})]})})})}export{S as default};
