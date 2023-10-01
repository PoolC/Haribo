import{n as s,d as v,c as b,j as t,i as T,A as $,M as L,w as E,u as M,a as u}from"./index-04133603.js";import{M as R,a as z,b as A}from"./Menu.styles-ee870f89.js";import{S}from"./Spinner-84267176.js";import{A as K}from"./ActivityCard-863d71c0.js";import{B as N,W as O,T as Y}from"./Block.styles-4dce9da8.js";import{a as F,b as U,d as V,e as W,f as D}from"./activity-2889ab5d.js";import{S as f}from"./statusCode-196b1b17.js";import"./ActivityCard.styles-7afa2c3c.js";import"./ActivityRegisterModalContainer-b4933084.js";import"./Modal-a94156ed.js";s.div`
  width: 15rem;
  margin: 0 10px 20px 0;
  padding: 0;
  @media (max-width: 576px) {
    width: 100%;
  }
`;s.ul`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.035);
  border-radius: 50px;
  padding: 30px 30px;
  margin: 0;
  @media (max-width: 576px) {
    align-items: center;
  }
`;s.li`
  height: 2.5rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;const H=s(v)`
  color: ${b.brown[1]};
`,P=({loading:n,semesters:r,currentLocation:x})=>t.jsx(R,{children:t.jsxs(z,{children:[n&&t.jsx(S,{small:!0}),!n&&r.map(e=>x===e?t.jsx(A,{children:t.jsx(H,{to:`/activities?semester=${e}`,children:e})},e):t.jsx(A,{children:t.jsx(v,{to:`/activities?semester=${e}`,children:e})},e))]})}),q=s(N)`
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`,G=s.ul`
  width: 95%;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
`,J=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  font-size: 0.8rem;
  font-weight: 300;
  text-align: center;
`,Q=s.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`,X=s.header`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 0 10px 0;
`,Z=s.div`
  display: flex;
  width: 90%;
  margin: 0px 0 40px 0;
  font-size: 0.8rem;
  color: ${b.brown[0]};
  word-break: keep-all;
  line-height: 1.2rem;
  @media (max-width: 576px) {
    text-align: center;
  }
`,_=({loading:n,activities:r,onToggleRegisterActivity:x,onDeleteActivity:e,member:l})=>{const{status:{isLogin:d},user:{memberId:h,role:m}}=l;return t.jsx(t.Fragment,{children:t.jsx(q,{children:t.jsxs(O,{children:[t.jsxs(X,{children:[t.jsx(Q,{children:"세미나&스터디"}),d&&T(m)&&t.jsx($,{to:`/${L.ACTIVITY}/new`,children:"개설"})]}),t.jsx(Z,{children:"상세 내용을 보려면 각 제목을 클릭해주세요."}),n&&t.jsx(S,{}),!n&&t.jsxs(G,{children:[r.length===0&&t.jsx(J,{children:"해당 학기의 세미나 및 스터디가 존재하지 않습니다."}),r.map(c=>t.jsx(K,{onToggleRegisterActivity:x,onDeleteActivity:e,activity:c,isLogin:d,memberId:h,role:m},c.id))]})]})})})},tt=({location:n,history:r,match:x})=>{const e=n.search.replace("?semester=",""),l=M(i=>i.auth),[d,h]=u.useState(!0),[m,c]=u.useState(null),[k,B]=u.useState(null);u.useEffect(()=>{F().then(i=>{if(i.status===f.OK)if(B(i.data.data),i.data.data.length===0)U().then(a=>{c(a.data.data),h(!1)});else{if(!e){r.push(`/${L.ACTIVITIES}?semester=${i.data.data[0]}`);return}V(e||i.data.data[0]).then(a=>{c(a.data.data),h(!1)})}})},[r,e]);const I=(i,a,p)=>{W(i).then(o=>{o.status===f.OK&&(a.includes(l.user.memberId)||(p(o.data.memberLoginIds),alert("성공적으로 신청되었습니다.")),a.includes(l.user.memberId)&&(p(o.data.memberLoginIds),alert("성공적으로 신청 취소되었습니다.")))}).catch(o=>{var g,j,w,y;console.log(o),console.error((j=(g=o.response)==null?void 0:g.data)==null?void 0:j.message),alert((y=(w=o.response)==null?void 0:w.data)==null?void 0:y.message)})},C=i=>{D(i).then(a=>{a.status===f.OK&&c(m.filter(p=>p.id!==i))})};return t.jsx(t.Fragment,{children:t.jsxs(Y,{children:[t.jsx(P,{loading:d,semesters:k,currentLocation:e}),t.jsx(_,{loading:d,activities:m,onToggleRegisterActivity:I,onDeleteActivity:C,member:l})]})})},et=E(tt),xt=()=>t.jsx(et,{});export{xt as default};
