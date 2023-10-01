import{n as i,j as t,a as r}from"./index-04133603.js";import{B as c,a as l}from"./Block.styles-4dce9da8.js";import{S as m}from"./Spinner-84267176.js";import{P as x}from"./ProjectCard-94f0de7a.js";import{g as d}from"./project-d27c392b.js";import"./getFileUrl-459fc159.js";const f=i.ul`
  width: 90%;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  max-width: 1200px;
  @media (max-width: 576px) {
    flex-flow: column;
  }
`,j=({projects:e,loading:s})=>t.jsx(c,{children:t.jsxs(l,{children:[t.jsx("h2",{className:"block_title",children:"프로젝트"}),s&&t.jsx(m,{}),!s&&t.jsx(f,{children:e==null?void 0:e.map(a=>t.jsx(x,{project:a},a.id))})]})}),p=()=>{const[e,s]=r.useState(null),[a,o]=r.useState(!0);return r.useEffect(()=>{(async()=>{const n=await d();s(n.data.data),o(!1)})()},[]),t.jsx(j,{projects:e,loading:a})},y=()=>t.jsx(p,{});export{y as default};
