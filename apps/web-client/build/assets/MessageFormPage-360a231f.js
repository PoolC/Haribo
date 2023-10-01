import{a as l,I as c,j as t,J as p,B as a,C as o,b as x}from"./index-04133603.js";import{B as m,a as h}from"./Block.styles-4dce9da8.js";import{T as d}from"./index-d2de38b1.js";import{I as u}from"./index-12cbf246.js";import{A as g}from"./ArrowLeftOutlined-c43a908a.js";import"./SearchOutlined-d77ecd25.js";import"./AntdIcon-461508d6.js";const f=x(({css:e})=>({whiteBlock:e`
    &.scope {
      padding: 30px 20px;
    }
  `,wrapper:e`
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
  `,fullWidth:e`
    width: 100%;
  `,topBox:e`
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,topBoxName:e`
    margin-bottom: 0;
    font-weight: 700;
    font-size: 20px;
  `,textarea:e`
    min-height: 300px !important;
    resize: none;
  `}));function v(){const{styles:e}=f(),[s,r]=l.useState(""),i=c();return t.jsx(m,{children:t.jsx(h,{className:p(e.whiteBlock,"scope"),children:t.jsxs(a,{direction:"vertical",className:e.fullWidth,size:"large",children:[t.jsx(a,{className:e.topBox,children:t.jsxs(a,{children:[t.jsx(o,{shape:"circle",type:"text",onClick:()=>i.goBack(),children:t.jsx(g,{rev:0})}),t.jsx(d.Text,{className:e.topBoxName,children:"쪽지보내기"})]})}),t.jsx(u.TextArea,{className:e.textarea,value:s,onChange:n=>r(n.target.value)}),t.jsx(o,{type:"primary",block:!0,children:"메세지 보내기"})]})})})}export{v as default};
