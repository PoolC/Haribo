import{n as i,j as e,U as l,w as c,a as n,M as x}from"./index-04133603.js";import{B as d,a as f}from"./Block.styles-4dce9da8.js";import{S as p}from"./Spinner-84267176.js";import{M as u}from"./MemberCard-55a9923c.js";import{g as h}from"./member-b1b02566.js";import{S as j}from"./statusCode-196b1b17.js";const M=i.header`
  display: flex;
  max-width: 1200px;
  justify-content: center;
  margin-bottom: 50px;
  & > .member_list_title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-weight: 700;
  }
`,b=i.ul`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,S=({members:s,loading:r})=>e.jsx(d,{children:e.jsxs(f,{children:[e.jsx(M,{children:e.jsx("h2",{className:"member_list_title",children:"회원 목록"})}),r&&e.jsx(p,{}),!r&&e.jsx(b,{children:s.filter(t=>!l.includes(t.role)).map(t=>e.jsx(u,{member:t},t.loginID))})]})}),g=({history:s})=>{const[r,t]=n.useState(null),[o,m]=n.useState(!0);return n.useEffect(()=>{h().then(a=>{a.status===j.OK&&(t(a.data.data),m(!1))}).catch(a=>{console.error(a.message),s.push(`/${x.FORBIDDEN}`)})},[s]),e.jsx(e.Fragment,{children:e.jsx(S,{members:r,loading:o})})},E=c(g),C=()=>e.jsx(E,{});export{C as default};
