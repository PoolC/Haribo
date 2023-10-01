import{n as o,c as j,A as K,a as i,j as e,w as q,l as G,M as v}from"./index-04133603.js";import{u as N,n as V,t as J}from"./throttle-6f972964.js";import{I as Q,F as X}from"./FileUploadButton-f911d7ec.js";import{B as Z,a as _}from"./Block.styles-4dce9da8.js";import{M as ee}from"./Modal-a94156ed.js";import{t as te}from"./toastui-react-editor-624e88e4.js";import{F as ne,a as se,b as ie,c as oe,S as ae}from"./PostForm.styles-07abd509.js";import{g as re,a as le}from"./getFileUrl-459fc159.js";import{B as ce}from"./ActivityForm.styles-a98b89a9.js";import{g as de,h as me,i as pe,j as xe,k as ue,l as he,m as Y,n as ge}from"./activity-2889ab5d.js";import{S as fe}from"./Spinner-84267176.js";import{S as E}from"./statusCode-196b1b17.js";const je=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 0 40px 0;
`,z=o.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`,be=o.div`
  margin-bottom: 30px;
`,De=o.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    margin-bottom: 10px;
    font-weight: 700;
  }
  input {
    outline: 0;
  }
  p {
    color: ${j.brown[0]};
    font-size: 0.9rem;
    margin-bottom: 10px;
    word-break: keep-all;
    text-align: center;
    line-height: 1.2rem;
  }
`,ye=o.div`
  margin-bottom: 30px;
`,Ce=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    margin-bottom: 10px;
    font-weight: 700;
  }
  input {
    outline: 0;
  }
  p {
    color: ${j.brown[0]};
    font-size: 0.9rem;
    margin-bottom: 10px;
    word-break: keep-all;
    text-align: center;
    line-height: 1.2rem;
  }
`,we=o.input`
  width: 3rem;
  outline: 0;
  border: 1px solid ${j.brown[0]};
  height: 2rem;
  border-radius: 2px;
  max-width: 320px;
  outline: ${j.gray[1]};
`,Ie=o.div`
  margin-bottom: 30px;
`,ve=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  label {
    margin-bottom: 10px;
    font-weight: 700;
  }
  textarea {
    outline: 0;
  }
  p {
    color: ${j.brown[0]};
    font-size: 0.9rem;
    margin-bottom: 10px;
    word-break: keep-all;
    text-align: center;
    line-height: 1.2rem;
  }
`,Se=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    color: ${j.brown[0]};
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
`,Ae=o.ul`
  margin-bottom: 30px;
`,ke=o.li`
  display: flex;
  margin: 5px;
`,Fe=o.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`,L=o(K)`
  width: 160px;
`,H=({member:u,attended:l,handleCheckAttendance:n})=>{const[a,c]=i.useState(l||!1),b=S=>{c(D=>!D),n(u,a)};return e.jsxs(ke,{children:[e.jsx("input",{type:"checkbox",value:u.loginID,onChange:b,checked:a}),u.name]},u.loginID)},Me=({activity:u,activityMembers:l,activitySession:n,sessionNumber:a,sessionAttendance:c,onCreateSession:b,onUpdateSession:S,errorMessage:D,buttons:$,errorModalVisible:B,onCloseErrorModal:A})=>{const{title:T}=u,k=i.useRef(),U=n?n.sessionNumber:a,[y,O]=N(n?n.date:"",V),[C,F]=i.useState(n?n.description:""),[w,g]=N(n?n.hour:"",V),[p,M]=i.useState(n?n.fileList:[]),[d,I]=i.useState(c?c.filter(t=>t.attended===!0).map(t=>t.member):[]),R=(t,r)=>{if(!r){I([...d,{name:t.name,loginID:t.loginID}]);return}I(d.filter(x=>x.loginID!==t.loginID))},m=t=>{t.preventDefault(),S({date:y,description:C,attendances:d,hour:w,fileList:p})},h=J(t=>{t.preventDefault(),b({sessionNumber:a,date:y,description:C,attendances:d,hour:w,fileList:p})},1e3),f=t=>{const x=k.current.getInstance().getMarkdown();F(x)},s=(t,r)=>{t.preventDefault(),M(p.filter(x=>x!==r))};return e.jsxs(e.Fragment,{children:[e.jsx(ee,{contents:D,buttons:$,visible:B,onConfirm:A,onCancel:A}),e.jsx(Z,{children:e.jsxs(_,{children:[e.jsxs(je,{children:[e.jsx(z,{children:T}),e.jsxs(z,{children:["[",U,"회차 출석체크",c&&" 수정","]"]})]}),e.jsxs(Fe,{children:[e.jsx(be,{children:e.jsx(De,{children:e.jsx(Q,{valueText:y,labelText:"날짜",typeText:"date",nameText:"date",onChangeFunc:O,placeholderText:"YYYY-MM-DD"})})}),e.jsx(ye,{children:e.jsxs(Ce,{children:[e.jsx("label",{htmlFor:"hour",children:"진행 시간"}),e.jsx("p",{children:"반올림하여 정수로 입력"}),e.jsxs("div",{children:[e.jsx(we,{value:w,label:"진행 시간",type:"number",name:"hour",onChange:g,placeholder:"ex) 2"}),e.jsx("span",{style:{marginLeft:"0.5rem"},children:"시간"})]})]})}),e.jsx(Ie,{children:e.jsxs(ve,{children:[e.jsx("label",{htmlFor:"description",children:"내용"}),e.jsx("p",{children:"예시: 파이썬의 변수에 대해 공부 / A 논문 스터디 등"}),e.jsx(te.Editor,{initialEditType:"wysiwyg",initialValue:C,ref:k,onChange:t=>f(),style:{width:"100%"}}),e.jsx(ne,{style:{width:"100%"},children:"첨부된 파일 목록"}),e.jsx(se,{style:{width:"100%",maxWidth:"100%"},children:(p==null?void 0:p.length)!==0?p.map(t=>e.jsxs(ie,{children:[e.jsx("a",{href:re(t),children:le(t)}),e.jsx(oe,{onClick:r=>s(r,t),children:e.jsx(ae,{className:"far fa-trash-alt"})})]},t)):"첨부된 파일 없음"}),e.jsx(ce,{children:e.jsx(X,{onSubmit:M,files:p,multiple:!0})})]})}),e.jsxs(Se,{children:[e.jsx("h4",{children:"참여 멤버 목록"}),e.jsx("p",{children:"출석한 인원만 체크해주세요."}),e.jsx(Ae,{children:c?c.map(t=>e.jsx(H,{member:t.member,attended:t.attended,handleCheckAttendance:R},t.member.loginID)):l.map(t=>e.jsx(H,{member:t,handleCheckAttendance:R},t.loginID))})]}),c?e.jsx(L,{onClick:m,children:"수정"}):e.jsx(L,{onClick:h,children:"제출"})]})]})})]})},Re=({match:u,history:l})=>{const n=u.params.activityID,a=u.params.sessionID,[c,b]=i.useState(!0),[S,D]=i.useState(null),[$,B]=i.useState(null),[A,T]=i.useState(null),[k,U]=i.useState(null),[y,O]=i.useState(null),[C,F]=i.useState(!1),[w,g]=i.useState(null);i.useEffect(()=>{(async()=>{const m=await de(n);D(m.data.data),G().then(s=>{if(s.status===E.OK&&s.data.isActivated===!1){l.push(`/${v.FORBIDDEN}`);return}if(s.status===E.OK&&s.data.loginID!==m.data.data.host.loginID){l.push(`/${v.FORBIDDEN}`);return}}).catch(s=>{console.error(s.message),l.push(`/${v.FORBIDDEN}`)});const h=await me(n);B(h.data.data);const f=await pe(n);if(U(f.data.data),a){const s=await xe(a),t=await ue(a);O(t.data.data),T(s.data)}b(!1)})()},[n,a,l]);const p=async({sessionNumber:m,date:h,description:f,attendances:s,hour:t,fileList:r})=>{if(!h||!f||t===""){g("모든 항목을 입력해주세요"),d();return}if(String(t).includes(".")){g("시간은 반올림하여 정수로 입력해주세요"),d();return}try{const W=(await he({activityID:n,sessionNumber:m,date:h,description:f,hour:t,fileList:r})).data.id;(await Y({sessionID:W,memberLoginIDs:s.map(P=>P.loginID)})).status===E.OK&&l.push(`/${v.ACTIVITY}/${n}`)}catch(x){console.error("***"),console.error(x.response),g("오류가 발생했습니다"),d()}},M=async({date:m,description:h,attendances:f,hour:s,fileList:t})=>{if(!m||!h||s===""){g("모든 항목을 입력해주세요"),d();return}if(String(s).includes(".")){g("시간은 반올림하여 정수로 입력해주세요"),d();return}try{const r=await ge({sessionID:a,date:m,description:h,hour:s,fileList:t});await Y({sessionID:a,memberLoginIDs:f.map(x=>x.loginID)}),r.status===E.OK&&l.push(`/${v.ACTIVITY}/${n}`)}catch(r){console.error(r),g("오류가 발생했습니다"),d()}},d=()=>{F(!0)},I=m=>{m.preventDefault(),F(!1)},R=e.jsx(K,{onClick:I,children:"확인"});return e.jsxs(e.Fragment,{children:[c&&e.jsx(fe,{}),!c&&e.jsx(Me,{activity:S,activityMembers:$,activitySession:A,sessionNumber:k.length,sessionAttendance:y,onCreateSession:p,onUpdateSession:M,errorMessage:w,buttons:R,errorModalVisible:C,onCloseErrorModal:I})]})},Ee=q(Re),Pe=()=>e.jsx(Ee,{});export{Pe as default};
