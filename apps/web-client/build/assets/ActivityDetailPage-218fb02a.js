import{n as o,c as l,j as e,i as F,A as K,M as q,u as N,a as d,w as G,e as J}from"./index-04133603.js";import{M as Q}from"./MemberCard-55a9923c.js";import{t as U}from"./toastui-react-editor-624e88e4.js";import{F as P,a as _,b as H}from"./PostForm.styles-07abd509.js";import{g as W,a as Y}from"./getFileUrl-459fc159.js";import{k as X,g as Z,i as y,h as B,e as D}from"./activity-2889ab5d.js";import{B as I,a as v}from"./Block.styles-4dce9da8.js";import{F as M}from"./ActivityCard.styles-7afa2c3c.js";import{A as ee}from"./ActivityRegisterModalContainer-b4933084.js";import{S as ne}from"./Spinner-84267176.js";import{S as k}from"./statusCode-196b1b17.js";import"./Modal-a94156ed.js";const te=o.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 20px 0 10px 0;
  list-style: none;
  min-width: 200px;
`,oe=o.div`
  margin-top: 30px;
  width: 50px;
  height: 1px;
  background-color: ${l.mint[1]};
`,re=o.p`
  font-weight: 700;
  margin-bottom: 10px;
`,O=o.p`
  font-weight: 300;
  font-size: 0.8rem;
  margin-bottom: 10px;
`,se=o.div`
  border: 1px solid ${l.gray[2]};
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem;
  width: 90%;
  word-break: break-all;
  line-height: 1.5rem;
  min-width: 90%;
  max-width: 90%;
  overflow: auto;
  color: ${l.brown[1]};
  p,
  ul,
  ol {
    font-weight: 400;
    font-size: 0.9rem;
    color: ${l.brown[1]};
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
    line-height: 2.5rem;
    color: ${l.brown[1]};
  }
  hr {
    margin: 1rem 0;
  }
  img {
    max-width: 600px;
    margin: 1rem 0;
  }
  p {
    margin: 0.5rem 0;
  }
  a {
    max-width: 100%;
    word-break: break-all;
  }
  th {
    background-color: ${l.brown[0]};
  }
  img {
    max-width: 90%;
  }
`,ie=o.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  h5 {
    font-size: 0.9rem;
    margin: 10px 0;
    font-weight: 500;
  }
`,le=o.li`
  font-size: 0.8rem;
  margin: 2px;
  font-weight: 300;
  list-style: none;
`,ae=({session:h,memberInfo:n,activityID:p,attendance:t,host:w})=>{const{id:u,description:C,date:x,sessionNumber:g,hour:A,fileList:c}=h,b=t.filter(a=>a.attended===!0).map(a=>a.member),{status:{isLogin:s},user:{memberId:f,role:S}}=n;return e.jsxs(e.Fragment,{children:[e.jsxs(te,{children:[e.jsxs(re,{children:[g,"회차"]}),e.jsx(O,{children:x}),e.jsxs(O,{children:["(",A,"시간 진행)"]}),e.jsx(se,{children:e.jsx(U.Viewer,{initialValue:C})}),s&&e.jsxs(e.Fragment,{children:[e.jsx(P,{children:"첨부된 파일 목록"}),e.jsx(_,{children:(c==null?void 0:c.length)!==0?c==null?void 0:c.map(a=>e.jsx(H,{children:e.jsx("a",{href:W(a),children:Y(a)})},a)):"첨부된 파일 없음"})]}),s&&F(S)&&b&&e.jsxs(ie,{children:[e.jsx("h5",{children:"[출석 인원]"}),b.map(a=>e.jsx(le,{children:a.name},a.loginID))]})]}),s&&w.loginID===f&&e.jsx(K,{to:`/${q.ACTIVITY}/${p}/attendance/${u}`,children:"수정"}),e.jsx(oe,{})]})},de=({activityID:h,session:n,host:p})=>{const t=n.id,w=N(x=>x.auth),[u,C]=d.useState(null);return d.useEffect(()=>{(async()=>{const x=await X(t);C(x.data.data)})()},[t]),u===null?null:e.jsx(ae,{session:n,attendance:u,memberInfo:w,activityID:h,host:p})},V=o(K)`
  width: 5rem;
`,ce=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  h2 {
    color: ${l.brown[0]};
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;o.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${l.gray[1]};
  border-radius: 50px;
  padding: 80px 0px;
  & > .project_container_title {
    font-weight: 700;
    margin-bottom: 30px;
    max-width: 1200px;
  }
`;const me=o.div`
  margin: 0px 1rem 40px 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 2.5rem;
  word-break: keep-all;
`,he=o.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`,T=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    color: ${l.brown[0]};
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 0.8rem;
  }
`,$=o.p`
  margin-bottom: 0.5rem;
`,xe=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    color: ${l.brown[0]};
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 0.8rem;
  }
`,ge=o.div`
  border: 1px solid ${l.gray[2]};
  border-radius: 20px;
  padding: 2rem 1rem;
  word-break: break-all;
  line-height: 1.5rem;
  width: 90%;
  max-width: 600px;
  p,
  ul,
  ol {
    font-weight: 400;
    font-size: 0.9rem;
  }
  ul,
  ol {
    padding-left: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0;
    line-height: normal;
  }
  hr {
    margin: 1rem 0;
  }
  a {
    word-break: break-all;
  }
  img {
    max-width: 90%;
  }
`,pe=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 2rem;
  margin-bottom: 30px;
  width: 90%;
  max-width: 600px;

  & > .title {
    color: ${l.brown[0]};
    margin-bottom: 2rem;
    font-weight: 300;
    font-size: 0.8rem;
  }
`,ue=o.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    color: ${l.brown[0]};
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 0.8rem;
  }
`,fe=o.ul`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  list-style: none;
`,je=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    color: ${l.brown[0]};
    margin-bottom: 0px;
    font-weight: 300;
    font-size: 0.8rem;
  }
`,we=o.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`,be=o.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`,Ce=o.li`
  cursor: default;
  background-color: ${l.gray[0]};
  border: 1px solid ${l.mint[1]};
  border-radius: 2px;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 2px;
  margin: 5px;
  list-style: none;
  word-break: keep-all;
`,Ae=({tag:h})=>e.jsxs(Ce,{children:["#",h]}),Se=({loading:h,activity:n,activityMembers:p,activityMemberIDs:t,activitySessions:w,member:u,onToggleRegisterActivity:C})=>{var z,i;const{status:{isLogin:x},user:{memberId:g,role:A}}=u,[c,b]=d.useState(p),[s,f]=d.useState(!1),S=()=>{f(!0)},a=r=>{r.preventDefault(),C(n.id,c,b),f(!1)},m=()=>{f(!1)};return e.jsxs(e.Fragment,{children:[!h&&e.jsx(ee,{visible:s,activityTitle:n.title,onConfirm:a,onCancel:m,isRegister:!(t!=null&&t.includes(g))}),e.jsx(I,{children:e.jsxs(v,{children:[h&&e.jsx(ne,{}),!h&&e.jsxs(e.Fragment,{children:[e.jsx(me,{children:e.jsx(he,{children:n.title})}),e.jsxs(T,{children:[e.jsx("h2",{children:n.seminar?"세미나장":"스터디장"}),e.jsx($,{children:n.host.name})]}),e.jsxs(T,{children:[e.jsx("h2",{children:"시작일"}),e.jsx($,{children:n.startDate})]}),e.jsxs(T,{children:[e.jsx("h2",{children:"시간"}),e.jsx($,{children:n.classHour}),e.jsxs($,{children:[n.hour,"시간씩 진행"]})]}),e.jsxs(T,{children:[e.jsx("h2",{children:"정원"}),e.jsxs($,{children:[x&&`${t==null?void 0:t.length}명/`,n.capacity,"명"]})]}),e.jsxs(xe,{children:[e.jsx("h2",{children:"태그"}),e.jsx(be,{children:n.tags.map(r=>e.jsx(Ae,{tag:r.name},r.name))})]}),n.available&&x&&F(A)&&e.jsxs(ce,{children:[n.available&&g!==n.host.loginID&&!(t!=null&&t.includes(g))&&(t==null?void 0:t.length)<n.capacity&&e.jsx(V,{onClick:S,children:"신청"}),n.available&&g!==n.host.loginID&&!(t!=null&&t.includes(g))&&(t==null?void 0:t.length)>=n.capacity&&e.jsx(M,{children:"[정원 마감]"}),n.available&&g!==n.host.loginID&&(t==null?void 0:t.includes(g))&&e.jsx(V,{onClick:S,children:"신청 취소"})]}),e.jsxs(pe,{children:[e.jsx("h2",{className:"title",children:"계획서"}),e.jsx(ge,{children:e.jsx(U.Viewer,{initialValue:n.description})}),e.jsx(P,{children:"첨부된 파일 목록"}),e.jsx(_,{children:((z=n.fileList)==null?void 0:z.length)!==0?(i=n.fileList)==null?void 0:i.map(r=>e.jsx(H,{children:e.jsx("a",{href:W(r),children:Y(r)})},r)):"첨부된 파일 없음"})]}),x&&F(A)&&e.jsxs(ue,{children:[e.jsx("h2",{children:"참여 멤버"}),e.jsx(fe,{children:p==null?void 0:p.map(r=>e.jsx(Q,{member:r},r.loginID))})]}),e.jsxs(je,{children:[e.jsx("h2",{children:"회차 정보"}),e.jsx(we,{children:w==null?void 0:w.map(r=>e.jsx(de,{session:r,activityID:n.id,host:n.host,role:A},r.id))})]})]})]})})]})},ke=({match:h})=>{const n=h.params.activityID,[p,t]=d.useState(!0),[w,u]=d.useState(!0),[C,x]=d.useState(!0),[g,A]=d.useState(null),[c,b]=d.useState(null),[s,f]=d.useState(null),[S,a]=d.useState(null),m=N(i=>i.auth);d.useEffect(()=>{Z(n).then(i=>{i.status===k.OK&&(A(i.data.data),t(!1))})},[n]),d.useEffect(()=>{y(n).then(i=>{i.status===k.OK&&(a(i.data.data),x(!1))})},[n]),d.useEffect(()=>{m.status.isLogin&&m.user.role!==J.UNACCEPTED?(u(!0),B(n).then(i=>{i.status===k.OK&&(b(i.data.data),f(i.data.data.map(r=>r.loginID)),u(!1))})):u(!1)},[n,m.status.isLogin,m.user.role]);const z=i=>{D(i).then(r=>{r.status===k.OK&&(B(i).then(j=>{j.status===k.OK&&(f(j.data.data.map(E=>E.loginID)),b(j.data.data))}),s!=null&&s.includes(m.user.memberId)||(f([...s,m.user.memberId]),alert("성공적으로 신청되었습니다.")),s!=null&&s.includes(m.user.memberId)&&(f(s==null?void 0:s.filter(j=>j!==m.user.memberId)),b(c==null?void 0:c.filter(j=>j.memberID!==m.user.memberId)),alert("성공적으로 신청 취소되었습니다.")))}).catch(r=>{var j,E,L,R;console.log(r),console.error((E=(j=r.response)==null?void 0:j.data)==null?void 0:E.message),alert((R=(L=r.response)==null?void 0:L.data)==null?void 0:R.message)})};return e.jsx(Se,{loading:p||w||C,activity:g,activityMembers:c,activityMemberIDs:s,activitySessions:S,member:m,onToggleRegisterActivity:z})},$e=G(ke),Pe=()=>e.jsx($e,{});export{Pe as default};
