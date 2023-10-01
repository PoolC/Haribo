import{n as t,c as s,L as c,j as e,M as d}from"./index-04133603.js";import{g as p}from"./getFileUrl-459fc159.js";const x=({width:i,height:r,quality:o,format:n})=>`?w=${i}&h=${r}&q=${o}&fm=${n}&fit=crop`,h=t.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 210px;

  &:first-of-type {
    margin-left: 0;
  }

  /*&:last-child {
    margin-right: 100px;
  } */
`,f=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${s.mint[0]};
  border-radius: 20px;
  width: 260px;
  height: 200px;
  box-shadow: 0px 0px 10px ${s.gray[1]};
  padding: 10px 0px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 80%;
    transition: 0.3s;
  }
`,m=t.div`
  position: relative;
  width: 240px;
  height: 120px;
  overflow: hidden;
  border-radius: 10px;
`,g=t.img`
  width: 240px;
  height: 120px;
  flex: 5;
  object-fit: cover;
  /* border-top-left-radius: 10px;
  border-top-right-radius: 10px; */
`,j=t.p`
  display: flex;
  align-items: center;
  width: 230px;
  flex: 2;
  font-size: 1.2rem;
  font-weight: 600;
`,u=t.p`
  display: flex;
  flex: 1;
  width: 230px;
  font-size: 0.8rem;
`,w=t.p`
  display: flex;
  flex: 2;
  width: 230px;
  font-size: 0.7rem;
  font-weight: 300;
  word-break: keep-all;
  line-height: 1rem;
`,b=t(c)`
  color: ${s.brown[1]};
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`,$=({project:i})=>{const{id:r,thumbnailURL:o,name:n,genre:l,description:a}=i;return e.jsx(b,{to:`/${d.PROJECT}/${r}`,children:e.jsx(h,{children:e.jsxs(f,{children:[e.jsx(m,{children:e.jsx(g,{src:p(o)+x({width:240,height:120,quality:80,format:"jpg"}),alt:"project_thumbnail"})}),e.jsx(j,{children:n}),e.jsx(u,{children:l}),e.jsx(w,{children:a})]})})})};export{$ as P};
