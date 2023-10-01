import{n as t,c as f,j as e,g as h,w as g,a as x,M as j}from"./index-04133603.js";import{B as u,a as w}from"./Block.styles-4dce9da8.js";import{A as p}from"./ActivityCard-863d71c0.js";import{P as y}from"./ProjectCard-94f0de7a.js";import{a as b}from"./member-b1b02566.js";import{S as C}from"./Spinner-84267176.js";import{S}from"./statusCode-196b1b17.js";import"./ActivityCard.styles-7afa2c3c.js";import"./ActivityRegisterModalContainer-b4933084.js";import"./Modal-a94156ed.js";import"./getFileUrl-459fc159.js";const v=t.div`
  width: 90%;
  display: flex;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,D=t.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 20px;
  margin: auto;
`,I=t.img`
  width: 200px;
  height: 200px;
`,E=t.div`
  flex: 1;
  padding: 30px 30px;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,M=t.div`
  display: flex;
  align-items: flex-end;
  @media (max-width: 576px) {
    justify-content: center;
  }
`,N=t.p`
  font-weight: 800;
  font-size: 2rem;
`,k=t.span`
  font-weight: 300;
  margin-left: 5px;
`,z=t.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 20px 0;
  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    margin: 10px 0;
  }
  @media (max-width: 576px) {
    align-items: center;
    justify-content: center;
  }
`,F=t.p``,P=t.div`
  display: flex;
  width: 90%;
  margin: 20px 0;
  font-size: 1rem;
  span {
    font-size: 0.8rem;
    color: ${f.brown[0]};
    margin: 5px;
  }
  @media (max-width: 576px) {
    align-items: center;
    justify-content: center;
  }
`,B=t.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  text-align: center;
  word-break: keep-all;
  line-height: 1.2rem;
  padding: 0 0.5rem;
`,R=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  h2 {
    padding: 0px 20px;
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`,U=t.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow: scroll;
  scrollbar-color: none;
  margin: 0;
  padding: 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`,A=({member:l})=>{const{name:o,department:r,profileImageURL:d,isAdmin:m,introduction:s,projects:a,hostActivities:n,participantActivities:c}=l;return e.jsx(u,{children:e.jsxs(w,{children:[e.jsxs(v,{children:[e.jsx(D,{children:e.jsx(I,{src:h(d)})}),e.jsxs(E,{children:[e.jsxs(M,{children:[e.jsx(N,{children:o}),m&&e.jsx(k,{children:"PoolC임원"})]}),e.jsx(z,{children:r&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"전공"}),e.jsx(F,{children:r})]})}),e.jsx(P,{children:s&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx("i",{className:"fas fa-quote-left"})}),e.jsx(B,{children:s}),e.jsx("span",{children:e.jsx("i",{className:"fas fa-quote-right"})})]})})]})]}),e.jsxs(R,{children:[e.jsx("h2",{children:"참여 활동"}),e.jsxs(U,{children:[a==null?void 0:a.map(i=>e.jsx(y,{project:i},i.id)),n==null?void 0:n.map(i=>e.jsx(p,{activity:i},i.id)),c==null?void 0:c.map(i=>e.jsx(p,{activity:i},i.id))]})]})]})})},O=({match:l,history:o})=>{const{memberID:r}=l.params,[d,m]=x.useState(null),[s,a]=x.useState(!0);return x.useEffect(()=>{b(r).then(n=>{n.status===S.OK&&(m(n.data),a(!1))}).catch(n=>{console.error(n.message),o.push(`/${j.FORBIDDEN}`)})},[r,o]),e.jsxs(e.Fragment,{children:[s&&e.jsx(C,{}),!s&&e.jsx(A,{member:d})]})},$=g(O),Y=()=>e.jsx($,{});export{Y as default};
