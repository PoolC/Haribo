import{n as t,c as i,j as e,w as p,u as f,a as m}from"./index-04133603.js";import{M as g}from"./MemberCard-55a9923c.js";import{B as w,a as u}from"./Block.styles-4dce9da8.js";import{g as j}from"./getFileUrl-459fc159.js";import{t as b}from"./toastui-react-editor-624e88e4.js";import{a as y}from"./project-d27c392b.js";import{S as v}from"./Spinner-84267176.js";import{S as C}from"./statusCode-196b1b17.js";const S=t.div`
  width: 90%;
  max-width: 1200px;
  height: auto;
  max-height: 500px;
  overflow: hidden;
  border-radius: 20px;
  margin: 0px;
`,k=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`,D=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 50px 0px 30px 0px;
  max-width: 1200px;
`,E=t.div`
  display: flex;
  align-items: flex-end;
`,I=t.p`
  font-weight: 800;
  font-size: 2rem;
`,P=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 20px 0;
  font-weight: 300;
  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    margin: 10px 0 30px 0;
  }
`,$=t.p``,z=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0px 0;
  font-weight: 300;
`,B=t.p`
  color: ${i.brown[0]};
`,M=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 20px 0;
  span {
    font-size: 0.8rem;
    color: ${i.brown[0]};
    margin: 5px;
  }
`,R=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  text-align: center;
  word-break: keep-all;
  font-size: 1rem;
  line-height: 1.2rem;
`,F=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  width: 90%;
  margin-top: 0px;
  max-width: 1200px;
  h2 {
    padding: 0px 20px;
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
`,L=t.ul`
  display: flex;
  align-items: center;
  max-width: 100%;
  overflow: scroll;
  scrollbar-color: none;
  margin: 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`,N=t.div`
  width: 100%;
  padding: 20px 0 20px 0;
  color: ${i.brown[1]};
  word-break: break-all;
  line-height: 1.5rem;
  max-width: 100%;
  overflow: auto;
  color: ${i.brown[1]};
  p,
  ul,
  ol {
    font-weight: 300;
    font-size: 0.9rem;
    color: ${i.brown[1]};
  }
  ul,
  ol {
    padding-left: 1.5rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0;
    line-height: 2.2rem;
    color: ${i.brown[1]};
  }
  hr {
    margin: 1rem 0;
  }
  img {
    max-width: 90%;
    margin: 1rem 0;
  }
  p {
    margin: 0.5rem 0;
  }
  a {
    max-width: 100%;
    word-break: break-all;
  }
`,U=({project:s,member:r})=>{const{thumbnailURL:l,name:o,genre:c,duration:a,body:d,members:n}=s,{status:{isLogin:h}}=r;return e.jsx(w,{children:e.jsxs(u,{children:[e.jsx(S,{children:e.jsx(k,{src:j(l)})}),e.jsxs(D,{children:[e.jsx(E,{children:e.jsx(I,{children:o})}),e.jsx(P,{children:e.jsx($,{children:c})}),e.jsx(z,{children:e.jsx(B,{children:a})}),e.jsx(M,{children:e.jsx(R,{children:e.jsx(N,{className:"here",children:e.jsx(b.Viewer,{initialValue:d})})})})]}),h&&e.jsxs(F,{children:[e.jsx("h2",{children:"참여 멤버"}),e.jsx(L,{children:n.map(x=>e.jsx(g,{member:x},x.loginID))})]})]})})},G=({location:s})=>{const r=s.pathname.replace("/project/",""),l=f(n=>n.auth),[o,c]=m.useState(!0),[a,d]=m.useState(null);return m.useEffect(()=>{y(r).then(n=>{n.status===C.OK&&(d(n.data.data),c(!1))}).catch(n=>{console.error(n.response)})},[r]),a===void 0&&window.location.reload(),e.jsxs(e.Fragment,{children:[o&&e.jsx(v,{}),!o&&e.jsx(U,{project:a,member:l})]})},O=p(G),Q=()=>e.jsx(O,{});export{Q as default};
