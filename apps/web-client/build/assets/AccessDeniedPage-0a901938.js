import{w as o,n as t,c as i,j as e,A as r}from"./index-04133603.js";const s=t.div`
  position: relative;
  top: 0px;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0px 0 300px 0;
  @media (max-width: 576px) {
    margin-bottom: 500px;
  }
`,a=t.div`
  width: 100%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${i.gray[1]};
  border-radius: 50px;
  padding: 40px 40px 60px 40px;
  min-height: 60vh;
`,c=t.i`
  font-size: 3rem;
  color: ${i.red[0]};
  margin-bottom: 1rem;
`,x=t.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-align: center;
  word-break: keep-all;
  font-weight: 600;
  margin-bottom: 1rem;
`,l=({history:n})=>e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(c,{className:"fas fa-exclamation-circle"}),e.jsx(x,{children:"권한이 없습니다."}),e.jsx(r,{onClick:()=>{n.push("/")},children:"메인으로"})]})}),p=o(l);export{s as PageBlock,a as PageContainer,p as default};
