import{w as L,j as e,M as I,d as nt,n as l,c as w,A as N,a as g,e as it,v as te,u as st,l as rt,_ as at,b as we,z as be,B as se,C as X,q as re,D as lt,E as ze,F as ye,G as ve,H as Ce,T as ot,I as dt,S as ct,R as E}from"./index-04133603.js";import{S as mt}from"./Button.styles-3125295d.js";import{M as ht,a as xt,b as $e}from"./Menu.styles-ee870f89.js";import{t as Pe}from"./toastui-react-editor-624e88e4.js";import{u as k,n as A,t as Ie}from"./throttle-6f972964.js";import{W as F}from"./Block.styles-4dce9da8.js";import{F as ae,a as le,I as K}from"./FileUploadButton-f911d7ec.js";import{M as he}from"./Modal-a94156ed.js";import{g as V}from"./getFileUrl-459fc159.js";import{g as pt,u as ut}from"./info-3ae596a4.js";import{S as D,C as gt}from"./statusCode-196b1b17.js";import{k as xe}from"./ActivityCard.styles-7afa2c3c.js";import{g as jt,b as ft,c as wt,w as bt,t as yt,d as Oe,e as vt,f as Ct,h as It,s as Dt}from"./member-b1b02566.js";import{S as De}from"./Spinner-84267176.js";import{g as Nt,d as $t,a as Mt,c as kt,u as At}from"./project-d27c392b.js";import{b as St,o as Tt,p as _t,f as Bt}from"./activity-2889ab5d.js";import{g as Et,d as Ft,a as Ut,c as zt,u as Pt}from"./book-edd4aa75.js";import{a as Me}from"./getDateString-8e08c6d9.js";import{g as Re,d as Ot,a as Rt,b as Lt,e as Kt,u as Vt}from"./interview-9c268844.js";import{u as Ht}from"./useSearchParams-02be6575.js";import{B as Y,M as Wt}from"./MemberControllerService-d59d70d9.js";import{u as Z}from"./useAppMutation-7d383faf.js";import{C as Le,U as Ke}from"./customApi-906f0415.js";import{z as P,u as Ve,a as He,F as R}from"./index-6d19052b.js";import{T as We,C as qt,a as Gt}from"./Table-cc0ea71e.js";import{T as oe}from"./index-d2de38b1.js";import{I as J}from"./index-12cbf246.js";import{A as Qt}from"./AntdIcon-461508d6.js";import{l as Xt}from"./index-3963ac94.js";import"./progress-d8e94441.js";import"./row-dbac2f85.js";import"./index-be6001b4.js";import"./DownOutlined-5e397386.js";import"./SearchOutlined-d77ecd25.js";var Jt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};const Yt=Jt,Zt=({menus:t,location:r})=>{const i=r.pathname.replace("/admin","");return e.jsx(ht,{children:e.jsx(xt,{children:t.map(n=>i===n.url?e.jsx($e,{children:e.jsx(mt,{to:`/${I.ADMIN}${n.url}`,children:n.name})},n.url):e.jsx($e,{children:e.jsx(nt,{to:`/${I.ADMIN}${n.url}`,children:n.name})},n.url))})})},en=L(Zt),tn=l.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`,ne=l.input`
  height: 2rem;
  width: 15rem;
  outline: 0;
  border: 1px solid ${w.brown[0]};
  height: 2rem;
  border-radius: 2px;
  max-width: 320px;
  outline: ${w.gray[1]};
`,nn=l.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > label {
    margin: 2rem 0 1rem 0;
    font-weight: 600;
  }
  & > input {
    height: 2rem;
    width: 15rem;
    outline: 0;
  }
`,sn=l(N)`
  height: 2rem;
  width: 15rem;
  margin: 2rem 0;
`,de=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`,ce=l.header`
  font-weight: 600;
  margin: 0 0 2rem 0;
`,me=l.img`
  max-width: 90%;
`,H=l.p`
  color: ${w.brown[0]};
  font-size: 0.8rem;
  margin-bottom: 1rem;
`,rn=({info:t,onUpdate:r,errorMessage:i,buttons:n,errorModalVisible:d,onCloseErrorModal:o})=>{const m=g.useRef(),[a,s]=k(t?t.presidentName:"",A),[h,u]=k(t?t.location:"",A),[j,y]=g.useState(t?t.locationUrl:"동방약도.png"),[f,v]=k(t?t.phoneNumber:"",A),[x,C]=g.useState(t?t.introduction:""),[p,c]=g.useState(t?t.isSubscriptionPeriod:!1),[b,$]=g.useState(t?t.mainImageUrl:"poolcMainImage.png"),[M,_]=k(t?t.applyUri:"",A),B=U=>{U.preventDefault(),r({presidentName:a,phoneNumber:f,location:h,locationUrl:j,introduction:x,mainImageUrl:b,isSubscriptionPeriod:p,applyUri:M})},O=U=>{c(U.target.value==="possible")},z=U=>{const pe=m.current.getInstance().getMarkdown();C(pe)};return e.jsxs(e.Fragment,{children:[e.jsx(he,{contents:i,buttons:n,visible:d,onConfirm:o,onCancel:o}),e.jsxs(F,{children:[e.jsx(tn,{children:"동아리 정보 관리"}),e.jsxs(nn,{children:[e.jsx("label",{children:"회장 이름"}),e.jsx(H,{children:"홈페이지 Footer에 반영됩니다"}),e.jsx(ne,{type:"text",placeholder:"ex) 김풀씨",value:a,onChange:s}),e.jsx("label",{children:"전화번호"}),e.jsx(H,{children:"홈페이지 Footer에 반영됩니다"}),e.jsx(ne,{type:"text",placeholder:"ex) 010-0000-0000",value:f,onChange:v}),e.jsx("label",{children:"동아리방 위치"}),e.jsx(H,{children:"홈페이지 Footer에 반영됩니다"}),e.jsx(ne,{type:"text",placeholder:"ex) 연세대학교 제1공학관 537호",value:h,onChange:u}),e.jsx("label",{children:"동아리방 위치 안내 이미지"}),e.jsx(H,{children:"홈페이지 PoolC 메뉴-'동아리 소개'에 반영됩니다"}),e.jsx(ae,{onSubmit:y}),e.jsx(le,{style:{marginBottom:"0rem"},children:j?V(j):"선택된 파일이 없습니다"}),e.jsxs(de,{children:[e.jsx(ce,{children:"현재 이미지"}),j?e.jsx(me,{src:V(j)}):"현재 이미지가 없습니다"]}),e.jsx("label",{children:"동아리 소개"}),e.jsx(H,{children:"홈페이지 PoolC 메뉴-'동아리 소개'에 반영됩니다"}),e.jsx(Pe.Editor,{initialEditType:"wysiwyg",initialValue:x,ref:m,onChange:U=>z()}),e.jsx("label",{children:"메인 이미지 관리"}),e.jsx(H,{children:"이미지 사이즈는 1000px * 200px으로 맞춰주세요"}),e.jsx(ae,{onSubmit:$}),e.jsx(le,{style:{marginBottom:"0rem"},children:b?V(b):"선택된 파일이 없습니다"}),e.jsxs(de,{children:[e.jsx(ce,{children:"현재 이미지"}),b?e.jsx(me,{src:V(b)}):"현재 이미지가 없습니다"]}),e.jsx("label",{children:"가입 기간 설정"}),e.jsx(H,{children:"설정에 따라 상단 apply 메뉴가 열립니다."}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",value:"possible",onChange:O,checked:p===!0}),e.jsx("span",{children:"가입 가능 기간"}),e.jsx("input",{type:"radio",value:"impossible",onChange:O,checked:p!==!0}),e.jsx("span",{children:"가입 불가 기간"})]}),e.jsx("label",{children:"지원서 링크"}),e.jsx(H,{children:"apply 메뉴에서 이 링크로 이동됩니다."}),e.jsx(ne,{type:"text",placeholder:"http://example.com",value:M,onChange:_}),e.jsx(sn,{onClick:B,children:"수정"})]})]})]})},an=({history:t})=>{const[r,i]=g.useState(null),[n,d]=g.useState(!1),[o,m]=g.useState(null);if(g.useEffect(()=>{pt().then(j=>{j.status===D.OK&&i(j.data)})},[]),r===null)return null;const a=({presidentName:j,phoneNumber:y,location:f,locationUrl:v,introduction:x,mainImageUrl:C,isSubscriptionPeriod:p,applyUri:c})=>{if(!j||!y||!f||!x){m("모든 항목을 입력하세요"),s();return}ut({presidentName:j,phoneNumber:y,location:f,locationUrl:v,introduction:x,mainImageUrl:C,isSubscriptionPeriod:p,applyUri:c}).then(b=>{b.status===D.OK&&(m("정보가 성공적으로 수정되었습니다."),s())}).catch(b=>{console.error(b.response.data),b.response.data.status===403&&t.push(`/${I.FORBIDDEN}`),m("오류가 발생했습니다"),s()})},s=()=>{d(!0)},h=j=>{j.preventDefault(),d(!1)},u=e.jsx(N,{onClick:h,children:"확인"});return e.jsx(rn,{info:r,onUpdate:a,errorMessage:o,buttons:u,errorModalVisible:n,onCloseErrorModal:h})},ln=L(an),on=l.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`,dn=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  & > label {
    margin: 2rem 0 1rem 0;
    font-weight: 600;
  }
`,ke=l(N)`
  height: 2rem;
  width: 15rem;
  margin: 2rem 0;
`,qe=l(N)`
  height: 2rem;
`,cn=l.form`
  display: flex;
  justify-content: center;
  align-items: center;

  & > input {
    width: 10rem;
  }
`,Ae=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px 0;
  & > h4 {
    display: flex;
    justify-content: center;
    font-weight: 600;
    margin-bottom: 20px;
  }
`,Ge=l.div`
  display: flex;
  margin: 5px 0;
  padding: 5px 2px 5px 10px;
  border: 1px solid ${w.mint[1]};
  border-radius: 3px;
  width: 240px;
  justify-content: space-between;
`,Qe=l.div`
  display: flex;
  flex-direction: column;
  & > p {
    font-size: 0.8rem;
    margin: 0.25rem;
  }
  & > .name {
    font-size: 0.9rem;
    font-weight: 600;
  }
`,Xe=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`,mn=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`,hn=l.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;
  align-items: center;
`,W=l.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  & > thead {
    padding: 0;
    margin: 0;
  }
  & > tbody {
    width: 100%;
  }
`,xn=l.tr`
  cursor: default;
  display: flex;
  width: 100%;
  background-color: ${w.mint[0]};
  margin: 0;
  padding: 0.8rem 0px;
  font-size: 0.6rem;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 0.5rem;
  }
  & > .member_list_head {
    /* flex: 1; */
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: break-all;
  }
  & > .name {
    width: 3rem;
  }
  & > .department {
    width: 6rem;
  }
  & > .studentId {
    width: 4rem;
  }
  & > .loginId {
    width: 4rem;
  }
  & > .email {
    width: 9rem;
  }
  & > .phone {
    width: 5rem;
  }
  & > .isActivated {
    width: 1.5rem;
  }
  & > .small-button {
    width: 3rem;
  }
  & > .isAdmin {
    width: 2rem;
  }
  & > .status {
    flex: 1;
    min-width: 7.5rem;
  }
  & > .hide {
    @media (max-width: 1000px) {
      display: none;
    }
  }
`,pn=l.form`
  display: flex;
  justify-content: center;
  align-items: center;

  & > input {
    width: 10rem;
  }
`,un=l.tr`
  cursor: pointer;
  display: flex;
  padding: 0.5rem 0;
  transition: 0.3s;
  text-align: center;
  & > .member-list-row {
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: break-all;
    line-height: 0.8rem;
    font-size: 0.6rem;
    font-weight: 300;
    @media (max-width: 576px) {
      font-size: 0.5rem;
    }
  }
  & > .name {
    width: 3rem;
    font-weight: 500;
  }
  & > .department {
    width: 6rem;
  }
  & > .studentId {
    width: 4rem;
  }
  & > .loginId {
    width: 4rem;
  }
  & > .email {
    width: 9rem;
  }
  & > .phone {
    width: 5rem;
  }
  & > .isActivated {
    width: 1.5rem;
  }
  & > .small-button {
    width: 3rem;
  }
  & > .isAdmin {
    width: 2rem;
  }
  & > .status {
    min-width: 7.5rem;
    flex: 1;
  }
  & > .hide {
    @media (max-width: 1000px) {
      display: none;
    }
  }
  &:hover {
    background-color: ${w.gray[0]};
    transition: 0.3s;
  }
`,ee=l(N)`
  margin: 0;
  font-size: 0.7rem;
  padding: 0.1rem 0.4rem;
  &.delete {
    background-color: ${w.red[1]};
    transition: 0.3s;
    &:hover {
      background-color: ${w.red[0]};
      transition: 0.3s;
    }
  }
  @media (max-width: 576px) {
    padding: 5px;
    font-size: 0.7rem;
  }
`,gn=l.select`
  outline: 0;
  height: 1.5rem;
  width: 4.5rem;
  font-size: 0.4rem;
  box-sizing: content-box;
`,q=l.h4`
  margin: 2rem 0 1rem 0;
`,jn=l.p`
  margin: 1rem 0 2rem 0;
  font-size: 0.8rem;
  font-weight: 300;
`,G=()=>e.jsx("thead",{children:e.jsxs(xn,{children:[e.jsx("th",{className:"member_list_head name",children:"이름"}),e.jsx("th",{className:"member_list_head department hide",children:"학과"}),e.jsx("th",{className:"member_list_head studentId",children:"학번"}),e.jsx("th",{className:"member_list_head loginId hide",children:"아이디"}),e.jsx("th",{className:"member_list_head email hide",children:"이메일"}),e.jsx("th",{className:"member_list_head phone hide",children:"연락처"}),e.jsx("th",{className:"member_list_head isActivated",children:"승인"}),e.jsx("th",{className:"member_list_head small-button",children:"동작"}),e.jsx("th",{className:"member_list_head isAdmin",children:"관리자"}),e.jsx("th",{className:"member_list_head small-button",children:"동작"}),e.jsx("th",{className:"member_list_head status",children:"상태"})]})}),Q=({member:t,handleAcceptMember:r,handleWithdrawMember:i,handleToggleAdmin:n,handleUpdateMemberRole:d,roles:o,history:m})=>{const[a,s]=k(t.role?t.role:"MEMBER",A),h=()=>{m.push(`/${I.MEMBER}/${t.loginID}`)};return e.jsxs(un,{onClick:h,children:[e.jsx("td",{className:"member-list-row name",children:t.name}),e.jsx("td",{className:"member-list-row department hide",children:t.department}),e.jsx("td",{className:"member-list-row studentId",children:t.studentID}),e.jsx("td",{className:"member-list-row loginId hide",children:t.loginID}),e.jsx("td",{className:"member-list-row email hide",children:t.email}),e.jsx("td",{className:"member-list-row phone hide",children:t.phoneNumber}),e.jsx("td",{className:"member-list-row isActivated",children:t.isActivated?"o":"x"}),e.jsx("td",{className:"member-list-row small-button",onClick:u=>u.stopPropagation(),children:t.isActivated?e.jsx(ee,{onClick:u=>i(u,t.loginID),className:"delete",children:"탈퇴"}):e.jsx(ee,{onClick:u=>r(u,t.loginID),children:"승인"})}),e.jsx("td",{className:"member-list-row isAdmin",children:t.isAdmin?"o":"x"}),e.jsx("td",{className:"member-list-row small-button",onClick:u=>u.stopPropagation(),children:t.isActivated&&(t.isAdmin?e.jsx(ee,{onClick:u=>n(u,t.loginID,t.isAdmin),children:"해제"}):e.jsx(ee,{onClick:u=>n(u,t.loginID,t.isAdmin),children:"임명"}))}),e.jsx("td",{className:"member-list-row status",onClick:u=>u.stopPropagation(),children:t.isActivated&&e.jsxs(e.Fragment,{children:[e.jsx(gn,{value:a,onChange:s,children:o==null?void 0:o.map(u=>e.jsx("option",{value:u.name,children:u.description},u.name))}),e.jsx(ee,{onClick:u=>d(u,t.loginID,a),style:{marginLeft:"0.5rem"},children:"수정"})]})})]},t.loginID)},fn=({members:t,onAcceptMember:r,onWithdrawMember:i,onToggleAdmin:n,onUpdateMemberRole:d,onSearchMember:o,searchMembers:m,onDeleteUnacceptedMembers:a,roles:s,history:h})=>{const[u,j]=k("",A),y=(c,b)=>{c.preventDefault(),i(b)},f=(c,b)=>{c.preventDefault(),r(b)},v=(c,b,$)=>{c.preventDefault(),n({loginID:b,isAdmin:$})},x=(c,b,$)=>{c.preventDefault(),d({loginID:b,role:$})},C=c=>{c.preventDefault(),window.confirm("[주의] 승인 전 회원들을 모두 탈퇴 처리 하시겠습니까? 정보는 모두 DB에서 삭제되며 복구할 수 없습니다.")&&a()},p=c=>{c.preventDefault(),o(u),c.target.value="",j(c)};return e.jsxs(F,{children:[e.jsx(mn,{children:"회원 관리"}),e.jsxs(hn,{children:[e.jsxs(pn,{onSubmit:p,children:[e.jsx(K,{valueText:u,labelText:"",typeText:"text",nameText:"id",onChangeFunc:j,placeholderText:"회원 이름으로 검색"}),e.jsx(qe,{children:"검색"})]}),e.jsx(q,{children:"회원 검색 결과"}),m.length===0&&e.jsx(jn,{children:"검색 결과가 없습니다"}),m.length!==0&&e.jsxs(W,{children:[e.jsx(G,{}),e.jsx("tbody",{children:m.map(c=>e.jsx(Q,{member:c,handleAcceptMember:f,handleWithdrawMember:y,handleToggleAdmin:v,handleUpdateMemberRole:x,roles:s,history:h},c.loginID))})]}),e.jsxs(q,{children:["승인 전 회원 목록",e.jsx("span",{children:e.jsx(xe,{onClick:C,children:"전체 삭제"})})]}),e.jsxs(W,{children:[e.jsx(G,{}),e.jsx("tbody",{children:t.filter(c=>c.role==="UNACCEPTED").map(c=>e.jsx(Q,{member:c,handleAcceptMember:f,handleWithdrawMember:y,handleToggleAdmin:v,handleUpdateMemberRole:x,roles:s,history:h},c.loginID))})]}),e.jsx(q,{children:"일반 회원 목록"}),e.jsxs(W,{children:[e.jsx(G,{}),e.jsx("tbody",{children:t.filter(c=>c.role==="MEMBER").map(c=>e.jsx(Q,{member:c,handleAcceptMember:f,handleWithdrawMember:y,handleToggleAdmin:v,handleUpdateMemberRole:x,roles:s,history:h},c.loginID))})]}),e.jsx(q,{children:"졸업/수료 회원 목록"}),e.jsxs(W,{children:[e.jsx(G,{}),e.jsx("tbody",{children:t.filter(c=>c.role==="GRADUATED"||c.role==="COMPLETE").map(c=>e.jsx(Q,{member:c,handleAcceptMember:f,handleWithdrawMember:y,handleToggleAdmin:v,handleUpdateMemberRole:x,roles:s,history:h},c.loginID))})]}),e.jsx(q,{children:"활동 회원 목록"}),e.jsxs(W,{children:[e.jsx(G,{}),e.jsx("tbody",{children:t.filter(c=>c.isActivated).map(c=>e.jsx(Q,{member:c,handleAcceptMember:f,handleWithdrawMember:y,handleToggleAdmin:v,handleUpdateMemberRole:x,roles:s,history:h},c.loginID))})]}),e.jsx(q,{children:"비활동 회원 목록"}),e.jsxs(W,{children:[e.jsx(G,{}),e.jsx("tbody",{children:t.filter(c=>!c.isActivated).map(c=>e.jsx(Q,{member:c,handleAcceptMember:f,handleWithdrawMember:y,handleToggleAdmin:v,handleUpdateMemberRole:x,roles:s,history:h},c.loginID))})]}),e.jsx(q,{children:"전체 회원 목록"}),e.jsxs(W,{children:[e.jsx(G,{}),e.jsx("tbody",{children:t.map(c=>e.jsx(Q,{member:c,handleAcceptMember:f,handleWithdrawMember:y,handleToggleAdmin:v,handleUpdateMemberRole:x,roles:s,history:h},c.loginID))})]})]})]})},wn=L(fn),bn=({history:t})=>{const[r,i]=g.useState(!0),[n,d]=g.useState(!0),[o,m]=g.useState(null),[a,s]=g.useState([]),[h,u]=g.useState(null);g.useEffect(()=>{(async()=>{const p=await jt();m(p.data.data),i(!1)})()},[]),g.useEffect(()=>{ft().then(p=>{p.status===D.OK&&(u(p.data.data),d(!1))}).catch(p=>{console.error(p.message)})},[]);const j=p=>{wt(p).then(c=>{c.status===D.OK&&(alert("회원 승인이 완료되었습니다."),m(o.map(b=>b.loginID===p?{...b,isActivated:!0}:b)),s(a.map(b=>b.loginID===p?{...b,isActivated:!0}:b)))})},y=p=>{bt(p).then(c=>{c.status===D.OK&&(alert("회원 탈퇴가 완료되었습니다."),m(o.filter(b=>b.loginID!==p)),s(a.filter(b=>b.loginID!==p)))})},f=({loginID:p,isAdmin:c})=>{yt({loginID:p,isAdmin:c}).then(b=>{b.status===D.OK&&(alert("관리자 임명이 완료되었습니다."),m(o.map($=>$.loginID===p?{...$,isAdmin:!c}:$)),s(a.map($=>$.loginID===p?{...$,isAdmin:!c}:$)))})},v=({loginID:p,role:c})=>{Oe({loginID:p,role:c}).then(b=>{b.status===D.OK&&(alert("회원 상태 변경이 완료되었습니다."),m(o.map($=>$.loginID===p?{...$,role:c}:$)),s(a.map($=>$.loginID===p?{...$,role:c}:$)))})},x=()=>{vt().then(p=>{p.status===D.OK?(alert("승인 전 회원들을 모두 탈퇴 처리 하였습니다."),m(o.filter(c=>c.role!==it.UNACCEPTED))):p.status===gt.FORBIDDEN?alert("권한이 없습니다."):alert("오류가 발생하여 요청을 수행할 수 없습니다.")})},C=p=>{s(o.filter(c=>c.name.includes(p)))};return o===null||h===null?null:e.jsxs(e.Fragment,{children:[(r||n)&&e.jsx(De,{}),!(r||n)&&e.jsx(wn,{members:o,onAcceptMember:j,onWithdrawMember:y,onToggleAdmin:f,onUpdateMemberRole:v,onSearchMember:C,searchMembers:a,onDeleteUnacceptedMembers:x,roles:h})]})},yn=l.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`,vn=l.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`,ue=l.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0 4rem 0;
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  & > thead {
    padding: 0;
    margin: 0;
  }
  & > tbody {
    width: 100%;
  }
`,ge=l.tr`
  cursor: default;
  display: flex;
  width: 100%;
  background-color: ${w.mint[0]};
  margin: 0;
  padding: 0.8rem 0px;
  font-size: 0.9rem;
  & > .member_list_head {
    flex: 1;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
  }
  & > .name {
    width: 3rem;
  }
  & > .department {
    width: 5rem;
  }
  & > .studentId {
    width: 4rem;
  }
  @media (max-width: 576px) {
    font-size: 0.5rem;
  }
  & > .hide {
    @media (max-width: 1000px) {
      display: none;
    }
  }
`,Cn=l.tr`
  cursor: pointer;
  display: flex;
  padding: 0.5rem 0;
  transition: 0.3s;
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
  & > .member-list-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 10px;
    line-height: 1.5rem;
    font-size: 0.7rem;
    @media (max-width: 576px) {
      font-size: 0.5rem;
    }
    & > button {
      @media (max-width: 576px) {
        font-size: 0.5rem;
        margin: 0;
      }
    }
  }
  & > .name {
    width: 3rem;
  }
  & > .department {
    width: 5rem;
  }
  & > .studentId {
    width: 4rem;
  }
  &:hover {
    background-color: ${w.gray[0]};
    transition: 0.3s;
  }
  & > .hide {
    @media (max-width: 1000px) {
      display: none;
    }
  }
`,In=l.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  & > label {
    margin-right: 0.5rem;
    font-size: 0.9rem;
  }
  & > input {
    margin-bottom: 1rem;
  }
  & > div {
    & > input {
      margin: 0 0.5rem 1rem 0;
    }
    & > span {
      font-size: 0.8rem;
    }
  }
  & > button {
    width: 5rem;
  }
`,Dn=l.input`
  outline: 0;
  height: 1.8rem;
  width: 3rem;

  outline: 0;
  border: 1px solid ${w.brown[0]};
  border-radius: 2px;
  outline: ${w.gray[1]};
`;l.div`
  margin-bottom: 0.5rem;
`;const Nn=l(N)`
  background-color: ${w.red[1]};
  &:hover {
    background-color: ${w.red[0]};
  }
`,je=({member:t,minimumLimit:r,handleChangeExcepted:i,handleWithdraw:n,history:d})=>{const[o,m]=g.useState(t.member.role==="EXPELLED"),a=()=>{d.push(`/${I.MEMBER}/${t.member.loginID}`)};return e.jsxs(Cn,{onClick:a,children:[e.jsx("td",{className:"member-list-row name",children:t.member.name}),e.jsx("td",{className:"member-list-row hide studentId",children:t.member.studentID}),e.jsx("td",{className:"member-list-row hide department",children:t.member.department}),e.jsxs("td",{className:"member-list-row hour",children:[t.hour," 시간"]}),e.jsx("td",{className:"member-list-row isExcepted",children:t.isExcepted&&"o"}),e.jsx("td",{className:"member-list-row fullfill",children:t.hour>=r&&"o"}),e.jsx("td",{className:"member-list-row pass",children:t.isExcepted||t.hour>=r?"o":"x"}),e.jsx("td",{className:"member-list-row pass-button",onClick:s=>s.stopPropagation(),children:e.jsx(N,{onClick:()=>{i(t.member.loginID,t.isExcepted)},children:t.isExcepted?"해제":"면제"})}),e.jsxs("td",{className:"member-list-row out",onClick:s=>s.stopPropagation(),children:[!o&&e.jsx(Nn,{onClick:()=>{n(t.member.loginID,m)},children:"박탈"}),o&&e.jsx("p",{children:"자격 박탈됨"})]})]},t.member.loginID)},$n=({members:t,onSubmit:r,onChangeExcepted:i,onWithdraw:n,history:d})=>{const[o,m]=k("",A),a=s=>{s.preventDefault(),r()};return e.jsxs(F,{children:[e.jsx(yn,{children:"최소활동기준 관리"}),e.jsxs(vn,{children:[e.jsxs(In,{style:{marginBottom:"2rem"},children:[e.jsx("label",{style:{marginBottom:"0.5rem"},children:"최소 활동 기준"}),e.jsxs("div",{children:[e.jsx(Dn,{value:o,onChange:m,type:"number",placeholder:"ex) 6"}),e.jsx("span",{children:"시간"})]}),e.jsx(N,{onClick:a,children:"입력"})]}),e.jsx("h3",{children:"회원 자격 상실 예정자 목록"}),e.jsxs(ue,{children:[e.jsx("thead",{children:e.jsxs(ge,{children:[e.jsx("th",{className:"member_list_head name",children:"이름"}),e.jsx("th",{className:"member_list_head hide studentId",children:"학번"}),e.jsx("th",{className:"member_list_head hide department",children:"학과"}),e.jsx("th",{className:"member_list_head hour",children:"총 활동 시간"}),e.jsx("th",{className:"member_list_head isExcepted",children:"면제"}),e.jsx("th",{className:"member_list_head fullfill",children:"기준 만족"}),e.jsx("th",{className:"member_list_head pass",children:"자격 유지"}),e.jsx("th",{className:"member_list_head pass-button",children:"동작"}),e.jsx("th",{className:"member_list_head out",children:"자격박탈"})]})}),e.jsx("tbody",{children:t==null?void 0:t.filter(s=>s.member.isActivated).map(s=>!s.isExcepted&&s.hour<o&&e.jsx(je,{member:s,minimumLimit:o,handleChangeExcepted:i,handleWithdraw:n,history:d},s.member.loginID))})]}),e.jsx("h3",{children:"회원 자격 유지 예정자 목록"}),e.jsxs(ue,{children:[e.jsx("thead",{children:e.jsxs(ge,{children:[e.jsx("th",{className:"member_list_head name",children:"이름"}),e.jsx("th",{className:"member_list_head hide studentId",children:"학번"}),e.jsx("th",{className:"member_list_head hide department",children:"학과"}),e.jsx("th",{className:"member_list_head hour",children:"총 활동 시간"}),e.jsx("th",{className:"member_list_head isExcepted",children:"면제"}),e.jsx("th",{className:"member_list_head fullfill",children:"기준 만족"}),e.jsx("th",{className:"member_list_head pass",children:"자격 유지"}),e.jsx("th",{className:"member_list_head pass-button",children:"동작"}),e.jsx("th",{className:"member_list_head out",children:"자격박탈"})]})}),e.jsx("tbody",{children:t==null?void 0:t.filter(s=>s.member.isActivated).map(s=>(s.isExcepted||s.hour>=o)&&e.jsx(je,{member:s,minimumLimit:o,handleChangeExcepted:i,handleWithdraw:n,history:d},s.member.loginID))})]}),e.jsx("h3",{children:"전체 회원 목록"}),e.jsxs(ue,{children:[e.jsx("thead",{children:e.jsxs(ge,{children:[e.jsx("th",{className:"member_list_head",children:"이름"}),e.jsx("th",{className:"member_list_head hide",children:"학번"}),e.jsx("th",{className:"member_list_head hide",children:"학과"}),e.jsx("th",{className:"member_list_head",children:"총 활동 시간"}),e.jsx("th",{className:"member_list_head",children:"면제"}),e.jsx("th",{className:"member_list_head",children:"기준 만족"}),e.jsx("th",{className:"member_list_head",children:"자격 유지"}),e.jsx("th",{className:"member_list_head",children:"동작"}),e.jsx("th",{className:"member_list_head out",children:"자격박탈"})]})}),e.jsx("tbody",{children:t==null?void 0:t.filter(s=>s.member.isActivated).map(s=>e.jsx(je,{member:s,minimumLimit:o,handleChangeExcepted:i,handleWithdraw:n,history:d},s.member.loginID))})]})]})]})},Mn=L($n),kn=()=>{const[t,r]=g.useState(null),i=(o,m)=>{Ct(o).then(a=>{a.status===D.OK&&r(t.map(s=>s.member.loginID===o?{...s,isExcepted:!m}:s))})},n=()=>{It().then(o=>{o.status===D.OK&&r(o.data.data)})},d=(o,m)=>{Oe({loginID:o,role:"EXPELLED"}).then(a=>{a.status===D.OK&&m(!0)})};return e.jsx(Mn,{members:t,onChangeExcepted:i,onSubmit:n,onWithdraw:d})},An=l.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`,Sn=l.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`,Tn=l.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
`,_n=l.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  & > thead {
    padding: 0;
    margin: 0;
  }
  & > tbody {
    width: 100%;
  }
`,Bn=l.tr`
  cursor: default;
  display: flex;
  width: 100%;
  background-color: ${w.mint[0]};
  margin: 0;
  padding: 0.8rem 0px;
  font-size: 0.9rem;
  & > .board_list_head {
    flex: 1;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 576px) {
    font-size: 0.5rem;
  }
  & > .hide {
    @media (max-width: 576px) {
      display: none;
    }
  }
`,En=l.tr`
  cursor: default;
  display: flex;
  padding: 0.5rem 0;
  transition: 0.3s;
  @media (max-width: 576px) {
    font-size: 0.5rem;
  }
  & > .board-list-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 10px;
    line-height: 1.5rem;
    font-size: 0.8rem;
    @media (max-width: 576px) {
      font-size: 0.5rem;
    }
    & > button {
      @media (max-width: 576px) {
        font-size: 0.5rem;
        margin: 2px;
      }
    }
  }
  &:hover {
    background-color: ${w.gray[0]};
    transition: 0.3s;
  }
  & > .hide {
    @media (max-width: 576px) {
      display: none;
    }
  }
`,Fn=({boards:t,onDeleteBoard:r})=>{const i=(n,d)=>{n.preventDefault(),r(d)};return e.jsxs(F,{children:[e.jsx(An,{children:"게시판 관리"}),e.jsx(Sn,{children:e.jsx(N,{to:`/${I.ADMIN}/boards/new`,children:"게시판 생성"})}),e.jsx(Tn,{children:e.jsxs(_n,{children:[e.jsx("thead",{children:e.jsxs(Bn,{children:[e.jsx("th",{className:"board_list_head",children:"이름"}),e.jsx("th",{className:"board_list_head hide",children:"URL"}),e.jsx("th",{className:"board_list_head",children:"읽기 권한"}),e.jsx("th",{className:"board_list_head",children:"쓰기 권한"}),e.jsx("th",{className:"board_list_head",children:"동작"})]})}),e.jsx("tbody",{children:t.map(n=>e.jsxs(En,{children:[e.jsx("td",{className:"board-list-row",children:n.name}),e.jsx("td",{className:"board-list-row hide",children:n.urlPath}),e.jsx("td",{className:"board-list-row",children:n.readPermission}),e.jsx("td",{className:"board-list-row",children:n.writePermission}),e.jsxs("td",{className:"board-list-row",children:[e.jsx(N,{to:`/${I.ADMIN}/boards/edit/${n.id}`,children:"편집"}),e.jsx(N,{onClick:d=>i(d,n.id),children:"삭제"})]})]},n.id))})]})})]})},Un=()=>te.get("/board"),zn=t=>te.get(`/board/${t}`),Pn=({name:t,urlPath:r,readPermission:i,writePermission:n})=>te.post("/board",{name:t,urlPath:r,readPermission:i,writePermission:n}),On=({boardID:t,name:r,urlPath:i,readPermission:n,writePermission:d})=>te.put(`/board/${t}`,{name:r,urlPath:i,readPermission:n,writePermission:d}),Rn=t=>te.delete(`/board/${t}`),Ln=()=>{const[t,r]=g.useState(null);if(g.useEffect(()=>{(async()=>{const n=await Un();r(n.data.data)})()},[]),t===null)return null;const i=n=>{Rn(n).then(d=>{d.status===D.OK&&r(t.filter(o=>o.id!==n))})};return e.jsx(Fn,{boards:t,onDeleteBoard:i})},Kn=l.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`,Vn=l.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`,Hn=l.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
`,Wn=l.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  & > thead {
    padding: 0;
    margin: 0;
  }
  & > tbody {
    width: 100%;
  }
`,qn=l.tr`
  cursor: default;
  display: flex;
  width: 100%;
  background-color: ${w.mint[0]};
  margin: 0;
  padding: 0.8rem 0px;
  font-size: 0.9rem;
  & > .project_list_head {
    flex: 1;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Gn=l.tr`
  cursor: default;
  display: flex;
  padding: 0.5rem 0;
  transition: 0.3s;
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
  & > .project-list-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 10px;
    line-height: 1.5rem;
    font-size: 0.8rem;
  }
  &:hover {
    background-color: ${w.gray[0]};
    transition: 0.3s;
  }
`,Qn=({projects:t,onDeleteProject:r})=>{const i=(n,d)=>{n.preventDefault(),r(d)};return e.jsxs(F,{children:[e.jsx(Kn,{children:"프로젝트 관리"}),e.jsx(Vn,{children:e.jsx(N,{to:`/${I.ADMIN}/projects/new`,children:"프로젝트 생성"})}),e.jsx(Hn,{children:e.jsxs(Wn,{children:[e.jsx("thead",{children:e.jsxs(qn,{children:[e.jsx("th",{className:"project_list_head",children:"이름"}),e.jsx("th",{className:"project_list_head",children:"장르"}),e.jsx("th",{className:"project_list_head",children:"동작"})]})}),e.jsx("tbody",{children:t.map(n=>e.jsxs(Gn,{children:[e.jsx("td",{className:"project-list-row",children:n.name}),e.jsx("td",{className:"project-list-row",children:n.genre}),e.jsxs("td",{className:"project-list-row",children:[e.jsx(N,{to:`/${I.ADMIN}/projects/edit/${n.id}`,children:"편집"}),e.jsx(N,{onClick:d=>i(d,n.id),children:"삭제"})]})]},n.id))})]})})]})},Xn=()=>{const[t,r]=g.useState(null);if(g.useEffect(()=>{(async()=>{const n=await Nt();r(n.data.data)})()},[]),t===null)return null;const i=n=>{$t(n).then(d=>{d.status===D.OK&&r(t.filter(o=>o.id!==n))})};return e.jsx(Qn,{projects:t,onDeleteProject:i})},Jn=l.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`,Yn=l.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
`,Zn=l.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  & > thead {
    padding: 0;
    margin: 0;
  }
  & > tbody {
    width: 100%;
  }
`,ei=l.tr`
  cursor: default;
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0.8rem 0px;
  font-size: 0.9rem;
  background-color: ${w.mint[0]};
  & > .activity_list_head {
    flex: 1;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > .hide {
    @media (max-width: 1000px) {
      display: none;
    }
  }
  @media (max-width: 576px) {
    font-size: 0.5rem;
  }
`,ti=l.tr`
  cursor: default;
  display: flex;
  padding: 0.5rem 0;
  transition: 0.3s;
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
  & > .activity-list-row {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1;
    padding: 0 10px;
    line-height: 1.5rem;
    font-size: 0.8rem;
    @media (max-width: 576px) {
      font-size: 0.5rem;
    }
    & > button {
      @media (max-width: 576px) {
        font-size: 0.5rem;
        margin: 2px;
      }
    }
  }
  &:hover {
    background-color: ${w.gray[0]};
    transition: 0.3s;
  }
  & > .hide {
    @media (max-width: 1000px) {
      display: none;
    }
  }
  @media (max-width: 576px) {
    font-size: 0.5rem;
  }
`,ni=({activities:t,onOpenActivity:r,onCloseActivity:i,onDeleteActivity:n})=>{const d=(a,s)=>{a.preventDefault(),i(s)},o=(a,s)=>{a.preventDefault(),r(s)},m=(a,s)=>{a.preventDefault(),n(s)};return e.jsxs(F,{children:[e.jsx(Jn,{children:"세미나/스터디 관리"}),e.jsx(Yn,{children:e.jsxs(Zn,{children:[e.jsx("thead",{children:e.jsxs(ei,{children:[e.jsx("th",{className:"activity_list_head",children:"이름"}),e.jsx("th",{className:"activity_list_head",children:"주최자"}),e.jsx("th",{className:"activity_list_head hide",children:"시작일"}),e.jsx("th",{className:"activity_list_head hide",children:"종류"}),e.jsx("th",{className:"activity_list_head",children:"신청 가능 여부"}),e.jsx("th",{className:"activity_list_head",children:"동작"})]})}),e.jsx("tbody",{children:t.map(a=>e.jsxs(ti,{children:[e.jsx("td",{className:"activity-list-row",children:a.title}),e.jsx("td",{className:"activity-list-row",children:a.host.name}),e.jsx("td",{className:"activity-list-row hide",children:a.startDate}),e.jsx("td",{className:"activity-list-row hide",children:a.seminar?"세미나":"스터디"}),e.jsx("td",{className:"activity-list-row",children:a.available?"o":"x"}),e.jsxs("td",{className:"activity-list-row",children:[a.available?e.jsx(N,{onClick:s=>d(s,a.id),children:"닫기"}):e.jsx(N,{onClick:s=>o(s,a.id),children:"열기"}),e.jsx(N,{onClick:s=>m(s,a.id),children:"삭제"})]})]},a.id))})]})})]})},ii=({history:t})=>{const[r,i]=g.useState(null);if(g.useEffect(()=>{(async()=>{const m=await St();i(m.data.data)})()},[]),r===null)return null;const n=m=>{Tt(m).then(a=>{a.status===D.OK&&i(r.map(s=>s.id===m?{...s,available:!0}:s))})},d=m=>{_t(m).then(a=>{a.status===D.OK&&i(r.map(s=>s.id===m?{...s,available:!1}:s))})},o=m=>{Bt(m).then(a=>{a.status===D.OK&&i(r.filter(s=>s.id!==m))})};return e.jsx(ni,{activities:r,onOpenActivity:n,onCloseActivity:d,onDeleteActivity:o})},si=L(ii),Ne=l.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`,ri=l.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`,ai=l.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
`,li=l.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  & > thead {
    padding: 0;
    margin: 0;
  }
  & > tbody {
    width: 100%;
  }
`,oi=l.tr`
  cursor: default;
  display: flex;
  width: 100%;
  background-color: ${w.mint[0]};
  margin: 0;
  padding: 0.8rem 0px;
  font-size: 0.9rem;
  & > .book_list_head {
    flex: 1;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 576px) {
    font-size: 0.5rem;
  }
  & > .hide {
    @media (max-width: 1000px) {
      display: none;
    }
  }
`,di=l.tr`
  cursor: default;
  display: flex;
  padding: 0.5rem 0;
  transition: 0.3s;
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
  & > .book-list-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 10px;
    line-height: 1.5rem;
    font-size: 0.8rem;
    @media (max-width: 576px) {
      font-size: 0.5rem;
    }
    & > button {
      @media (max-width: 576px) {
        font-size: 0.5rem;
        margin: 2px;
      }
    }
  }
  &:hover {
    background-color: ${w.gray[0]};
    transition: 0.3s;
  }
  & > .hide {
    @media (max-width: 1000px) {
      display: none;
    }
  }
`,ci=l.img`
  width: 80px;
`,Se=l(N)``,mi=({books:t,onDeleteBook:r})=>{const i=(n,d)=>{n.preventDefault(),r(d)};return e.jsxs(F,{children:[e.jsx(Ne,{children:"도서 관리"}),e.jsx(ri,{children:e.jsx(N,{to:`/${I.ADMIN}/books/new`,children:"도서 생성"})}),e.jsx(ai,{children:e.jsxs(li,{children:[e.jsx("thead",{children:e.jsxs(oi,{children:[e.jsx("th",{className:"book_list_head hide",children:"표지"}),e.jsx("th",{className:"book_list_head",children:"제목"}),e.jsx("th",{className:"book_list_head hide",children:"저자"}),e.jsx("th",{className:"book_list_head hide",children:"상태"}),e.jsx("th",{className:"book_list_head",children:"동작"})]})}),e.jsx("tbody",{children:t.map(n=>e.jsxs(di,{children:[e.jsx("td",{className:"book-list-row hide",children:e.jsx(ci,{src:V(n.imageURL)})}),e.jsx("td",{className:"book-list-row",children:n.title}),e.jsx("td",{className:"book-list-row hide",children:n.author}),e.jsx("td",{className:"book-list-row hide",children:n.status==="AVAILABLE"?"이용 가능":"대출중"}),e.jsxs("td",{className:"book-list-row",children:[e.jsx(Se,{to:`/${I.ADMIN}/books/edit/${n.id}`,children:"편집"}),e.jsx(Se,{onClick:d=>i(d,n.id),children:"삭제"})]})]},n.id))})]})})]})},hi=()=>{const[t,r]=g.useState(null);if(g.useEffect(()=>{(async()=>{const n=await Et();r(n.data.data)})()},[]),t===null)return null;const i=n=>{Ft(n).then(d=>{d.status===D.OK&&r(t.filter(o=>o.id!==n))})};return e.jsx(mi,{books:t,onDeleteBook:i})},xi=l.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`,pi=l.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > label {
    margin: 2rem 0 1rem 0;
    font-weight: 600;
  }
  & > input {
    height: 2rem;
    width: 15rem;
    outline: 0;
  }
`,Te=l(N)`
  height: 2rem;
  width: 15rem;
  margin: 2rem 0;
`,_e=l.select`
  outline: 0;
  height: 2rem;
  width: 15rem;
  box-sizing: content-box;
`,ui=({board:t,onCreateBoard:r,onUpdateBoard:i,errorMessage:n,buttons:d,errorModalVisible:o,onCloseErrorModal:m})=>{const[a,s]=k(t?t.name:"",A),[h,u]=k(t?t.urlPath:"",A),[j,y]=k(t?t.readPermission:"PUBLIC",A),[f,v]=k(t?t.writePermission:"PUBLIC",A),x=Ie(p=>{p.preventDefault(),r({name:a,urlPath:h,readPermission:j,writePermission:f})},1e3),C=p=>{p.preventDefault(),i({name:a,urlPath:h,readPermission:j,writePermission:f})};return e.jsxs(e.Fragment,{children:[e.jsx(he,{contents:n,buttons:d,visible:o,onConfirm:m,onCancel:m}),e.jsxs(F,{children:[e.jsx(xi,{children:"게시판 생성"}),e.jsxs(pi,{children:[e.jsx(K,{valueText:a,labelText:"게시판 이름",typeText:"text",nameText:"name",onChangeFunc:s,placeholderText:"ex) 공지사항"}),e.jsx(K,{valueText:h,labelText:"url",typeText:"text",nameText:"urlPath",onChangeFunc:u,placeholderText:"ex) notice"}),e.jsx("label",{children:"읽기 권한"}),e.jsxs(_e,{value:j,onChange:y,children:[e.jsx("option",{value:"ADMIN",children:"ADMIN"}),e.jsx("option",{value:"MEMBER",children:"MEMBER"}),e.jsx("option",{value:"PUBLIC",children:"PUBLIC"})]}),e.jsx("label",{children:"쓰기 권한"}),e.jsxs(_e,{value:f,onChange:v,children:[e.jsx("option",{value:"ADMIN",children:"ADMIN"}),e.jsx("option",{value:"MEMBER",children:"MEMBER"}),e.jsx("option",{value:"PUBLIC",children:"PUBLIC"})]}),t?e.jsx(Te,{onClick:C,children:"수정"}):e.jsx(Te,{onClick:x,children:"제출"})]})]})]})},gi=({match:t,history:r,location:i})=>{const n=t.params.boardID,[d,o]=g.useState(null),[m,a]=g.useState(!1),[s,h]=g.useState(null);if(g.useEffect(()=>{n&&(async()=>{const x=await zn(n);o(x.data)})()},[n]),n&&d===null)return null;const u=({name:x,urlPath:C,readPermission:p,writePermission:c})=>{if(!x||!C||!p||!c){h("모든 항목을 입력하세요"),y();return}Pn({name:x,urlPath:C,readPermission:p,writePermission:c}).then(b=>{b.status===D.OK&&r.push("/admin/boards")}).catch(b=>{console.error(b.response.data),b.response.data.status===403&&r.push(`/${I.FORBIDDEN}`),h("오류가 발생했습니다"),y()})},j=({name:x,urlPath:C,readPermission:p,writePermission:c})=>{if(!x||!C||!p||!c){h("모든 항목을 입력하세요"),y();return}On({boardID:n,name:x,urlPath:C,readPermission:p,writePermission:c}).then(b=>{b.status===D.OK&&r.push("/admin/boards")}).catch(b=>{console.error(b.response.data),b.response.data.status===403&&r.push(`/${I.FORBIDDEN}`),h("오류가 발생했습니다"),y()})},y=()=>{a(!0)},f=x=>{x.preventDefault(),a(!1)},v=e.jsx(N,{onClick:f,children:"확인"});return e.jsx(ui,{onCreateBoard:u,onUpdateBoard:j,board:d,errorMessage:s,buttons:v,errorModalVisible:m,onCloseErrorModal:f})},ji=L(gi),fi=({member:t,onAddMember:r,onChangeSearchMember:i})=>{const{name:n,department:d,studentId:o}=t,m=(a,s)=>{r(a,s),a.target.value="",i(a)};return e.jsxs(Ge,{children:[e.jsxs(Qe,{children:[e.jsx("p",{className:"name",children:n}),e.jsx("p",{children:o}),e.jsx("p",{children:d})]}),e.jsx(Xe,{children:e.jsx(N,{onClick:a=>m(a,t),children:"추가"})})]})},wi=({member:t,onDeleteMember:r})=>{const{name:i,department:n,studentId:d}=t;return e.jsxs(Ge,{children:[e.jsxs(Qe,{children:[e.jsx("p",{className:"name",children:i}),e.jsx("p",{children:d}),e.jsx("p",{children:n})]}),e.jsx(Xe,{children:e.jsx(N,{onClick:o=>r(o,t),children:e.jsx("i",{className:"fas fa-times"})})})]})},bi=({onCreateProject:t,onSearchMember:r,onUpdateProject:i,members:n,searchMembers:d,onAddMember:o,onDeleteMember:m,project:a,errorMessage:s,buttons:h,errorModalVisible:u,onCloseErrorModal:j})=>{const y=g.useRef(),[f,v]=k(n,A),[x,C]=k(a?a.name:"",A),[p,c]=g.useState(a?a.thumbnailURL:""),[b,$]=k(a?a.genre:"",A),[M,_]=k(a?a.duration:"",A),[B,O]=k(a?a.description:"",A),[z,U]=g.useState(a?a.body:""),T=Ie(S=>{S.preventDefault(),t({name:x,genre:b,duration:M,thumbnailURL:p,description:B,body:z})},1e3),pe=S=>{S.preventDefault(),i({name:x,description:B,genre:b,duration:M,thumbnailURL:p,body:z})},Ye=S=>{S.preventDefault(),r(f),S.target.value="",v(S)},Ze=S=>{v(S)},et=S=>{const tt=y.current.getInstance().getMarkdown();U(tt)};return e.jsxs(e.Fragment,{children:[e.jsx(he,{contents:s,buttons:h,visible:u,onConfirm:j,onCancel:j}),e.jsxs(F,{children:[e.jsx(on,{children:"프로젝트 생성"}),e.jsxs(dn,{children:[e.jsx(K,{valueText:x,labelText:"프로젝트 이름",typeText:"text",nameText:"name",onChangeFunc:C,placeholderText:"프로젝트 이름"}),e.jsx(K,{valueText:b,labelText:"장르",typeText:"text",nameText:"genre",onChangeFunc:$,placeholderText:"ex) 모바일 게임, 슈팅, 웹, .."}),e.jsx(K,{valueText:M,labelText:"활동 기간",typeText:"text",nameText:"duration",onChangeFunc:_,placeholderText:"ex) 2019.10.23 ~ 2020.10.23"}),e.jsx("label",{children:"썸네일 이미지 첨부"}),e.jsx(ae,{onSubmit:c}),e.jsx(le,{style:{marginBottom:"0rem"},children:p?V(p):"선택된 파일이 없습니다"}),e.jsxs(de,{children:[e.jsx(ce,{children:"현재 이미지"}),p?e.jsx(me,{src:V(p)}):e.jsx("p",{style:{fontWeight:300},children:"이미지가 없습니다."})]}),e.jsx(K,{valueText:B,labelText:"설명 요약",typeText:"text",nameText:"description",onChangeFunc:O,placeholderText:"공백 포함 30자 이내"}),e.jsx("label",{children:"프로젝트 내용"}),e.jsx(Pe.Editor,{initialEditType:"wysiwyg",initialValue:z,ref:y,onChange:S=>et()}),e.jsx("label",{children:"참여자"}),e.jsxs(cn,{onSubmit:Ye,children:[e.jsx(K,{valueText:f,labelText:"",typeText:"text",nameText:"id",onChangeFunc:Ze,placeholderText:"회원 이름으로 검색"}),e.jsx(qe,{children:"검색"})]}),e.jsxs(Ae,{children:[e.jsx("h4",{children:"회원 검색 결과"}),d.length===0&&e.jsx("p",{children:"검색 결과가 없습니다"}),d.map(S=>e.jsx(fi,{member:S,onAddMember:o,onChangeSearchMember:v},S.loginID))]}),e.jsxs(Ae,{children:[e.jsx("h4",{children:"참여자 목록"}),n.map(S=>e.jsx(wi,{member:S,onDeleteMember:m},S.loginID))]}),a?e.jsx(ke,{onClick:pe,children:"수정"}):e.jsx(ke,{onClick:T,children:"제출"})]})]})]})},yi=({match:t,history:r})=>{const i=t.params.projectID,[n,d]=g.useState([]),[o,m]=g.useState([]),[a,s]=g.useState(null),[h,u]=g.useState(!1),[j,y]=g.useState(null);if(g.useEffect(()=>{i&&(async()=>{const M=await Mt(i);s(M.data.data),d(M.data.data.members)})()},[i]),i&&a===null)return null;const f=({name:M,thumbnailURL:_,genre:B,duration:O,description:z,body:U})=>{if(!M||!z||!O||!_||!U){y("모든 항목을 입력하세요"),c();return}kt({name:M,genre:B,duration:O,thumbnailURL:_,description:z,body:U,memberLoginIDs:n.map(T=>T.loginID)}).then(T=>{T.status===D.OK&&r.push("/admin/projects")}).catch(T=>{console.error(T.response.data),T.response.data.status===403&&r.push(`/${I.FORBIDDEN}`),y("오류가 발생했습니다"),c()})},v=({name:M,description:_,genre:B,duration:O,thumbnailURL:z,body:U})=>{if(!M||!_||!O||!z||!U){y("모든 항목을 입력하세요"),c();return}At({projectID:i,name:M,description:_,genre:B,duration:O,thumbnailURL:z,body:U,memberLoginIDs:n.map(T=>T.loginID)}).then(T=>{T.status===D.OK&&r.push("/admin/projects")}).catch(T=>{console.error(T.response.data),T.response.data.status===403&&r.push(`/${I.FORBIDDEN}`),y("오류가 발생했습니다"),c()})},x=M=>{Dt({name:M}).then(B=>{B.status===D.OK&&m(B.data.data)})},C=(M,_)=>{M.preventDefault(),d([...n,_])},p=(M,_)=>{M.preventDefault(),d(n.filter(B=>B.loginID!==_.loginID))},c=()=>{u(!0)},b=M=>{M.preventDefault(),u(!1)},$=e.jsx(N,{onClick:b,children:"확인"});return e.jsx(bi,{onCreateProject:f,onSearchMember:x,onUpdateProject:v,members:n,searchMembers:o,onAddMember:C,onDeleteMember:p,project:a,errorMessage:j,buttons:$,errorModalVisible:h,onCloseErrorModal:b})},vi=L(yi),Ci=l.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`,Ii=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > label {
    margin: 2rem 0 1rem 0;
    font-weight: 600;
  }
`,fe=l(K)`
  height: 2rem;
  width: 15rem;
  outline: 0;
`,Be=l(N)`
  height: 2rem;
  width: 15rem;
  margin: 2rem 0;
`,Di=({onCreateBook:t,onUpdateBook:r,book:i,errorMessage:n,buttons:d,errorModalVisible:o,onCloseErrorModal:m})=>{const[a,s]=k(i?i.title:"",A),[h,u]=k(i?i.author:"",A),[j,y]=g.useState(i?i.imageURL:""),[f,v]=k(i?i.info:"",A),x=Ie(p=>{p.preventDefault(),t({title:a,author:h,imageURL:j,info:f})},1e3),C=p=>{p.preventDefault(),r({title:a,author:h,imageURL:j,info:f})};return e.jsxs(e.Fragment,{children:[e.jsx(he,{contents:n,buttons:d,visible:o,onConfirm:m,onCancel:m}),e.jsxs(F,{children:[e.jsx(Ci,{children:"도서 생성"}),e.jsxs(Ii,{children:[e.jsx(fe,{valueText:a,labelText:"책 제목",typeText:"text",nameText:"title",onChangeFunc:s,placeholderText:"ex) 클린 코드"}),e.jsx(fe,{valueText:h,labelText:"저자",typeText:"text",nameText:"author",onChangeFunc:u,placeholderText:"ex) 로버트 C. 마틴"}),e.jsx("label",{children:"표지 이미지 첨부"}),e.jsx(ae,{onSubmit:y}),e.jsx(le,{style:{marginBottom:"0rem"},children:j?V(j):"선택된 파일이 없습니다"}),e.jsxs(de,{children:[e.jsx(ce,{children:"현재 이미지"}),j?e.jsx(me,{src:V(j)}):e.jsx("p",{style:{fontWeight:300},children:"이미지가 없습니다."})]}),e.jsx(fe,{valueText:f,labelText:"설명",typeText:"text",nameText:"info",onChangeFunc:v,placeholderText:"ex) ㅇㅇㅇ 기증"}),i?e.jsx(Be,{onClick:C,children:"수정"}):e.jsx(Be,{onClick:x,children:"제출"})]})]})]})},Ni=({match:t,history:r})=>{const i=t.params.bookID,[n,d]=g.useState(null),[o,m]=g.useState(!1),[a,s]=g.useState(null);if(g.useEffect(()=>{i&&(async()=>{const v=await Ut(i);d(v.data)})()},[i]),i&&n===null)return null;const h=({title:v,author:x,imageURL:C,info:p})=>{if(!v||!x||!C||!p){s("모든 항목을 입력하세요"),u();return}zt({title:v,author:x,imageURL:C,info:p}).then(c=>{c.status===D.OK&&r.push("/admin/books")}).catch(c=>{console.error(c.response.data),c.response.data.status===403&&r.push(`/${I.FORBIDDEN}`),s("오류가 발생했습니다"),u()})},u=()=>{m(!0)},j=v=>{v.preventDefault(),m(!1)},y=e.jsx(N,{onClick:j,children:"확인"}),f=({title:v,author:x,imageURL:C,info:p})=>{if(!v||!x||!C||!p){s("모든 항목을 입력하세요"),u();return}Pt({bookID:i,title:v,author:x,imageURL:C,info:p}).then(c=>{c.status===D.OK&&r.push("/admin/books")}).catch(c=>{console.error(c.response.data),c.response.data.status===403&&r.push(`/${I.FORBIDDEN}`),s("오류가 발생했습니다"),u()})};return e.jsx(Di,{onCreateBook:h,onUpdateBook:f,book:n,errorMessage:a,buttons:y,errorModalVisible:o,onCloseErrorModal:j})},$i=L(Ni),Mi=l.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin: 2rem 0 3rem 0;
  word-break: keep-all;
  text-align: center;
  line-height: 2rem;
`,ki=l.div`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  p {
    margin-bottom: 0.5rem;
    word-break: keep-all;
    text-align: center;
    line-height: 1.2rem;
    font-size: 0.9rem;
    font-weight: 300;
  }
  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    margin: 2rem 0;
  }
`,Ai=()=>e.jsxs(F,{children:[e.jsx(Mi,{children:"관리자 페이지 이용법"}),e.jsxs(ki,{children:[e.jsx("p",{children:"PoolC의 임원이 되신 것을 축하합니다.^^"}),e.jsx("p",{children:"여기서는 관리자 페이지 사용 방법을 알려드리겠습니다."}),e.jsx("p",{children:"귀찮아도 꼭 읽어주세요!"}),e.jsx("p",{children:"참고로, 관리자 페이지는 모바일이 아닌 데스크탑 환경에서 접속하시는 것을 추천드립니다."}),e.jsx("h2",{children:"0. 동아리 정보 관리 탭"}),e.jsx("p",{children:"회장 이름, 회장의 전화번호, 동아리방의 위치 등의 정보를 변경할 수 있습니다."}),e.jsx("p",{children:"매 학기마다 회장이 새로 선출되므로 새 학기가 시작되면 가장 먼저 이 탭에서 정보를 수정해주세요."}),e.jsx("p",{children:"회장의 전화번호나 동아리방 위치가 변경되면, 이 탭에서 수정해 주셔야 홈페이지의 Footer에 반영됩니다."}),e.jsx("p",{children:"또한 동아리 홈페이지 접속 시 메인에서 가장 먼저 볼 수 있는 이미지 캐러셀에 들어갈 이미지들을 관리할 수 있습니다."}),e.jsx("p",{children:"상단 메뉴 중 'PoolC' 메뉴는 동아리에 대한 소개를 담고 있는데,"}),e.jsx("p",{children:"관리자 페이지의 '동아리 정보 관리' 탭에서는 이 'PoolC' 메뉴 중 '동아리 소개' 부분에 들어갈 내용을 마크다운 형식으로 편집할 수도 있습니다."}),e.jsx("p",{children:"매 학기 초 신입 회원 모집 기간이 되면, 이 탭에서 '가입 기간 설정'을 '가입 가능 기간'으로 바꿔주세요."}),e.jsx("p",{children:"'가입 가능 기간'으로 설정 후 '지원서 링크'에 지원서 주소를 넣어주세요."}),e.jsx("p",{children:"그러면 비로그인 시 apply 메뉴를 눌렀을 때 해당 지원서 주소로 연결됩니다."}),e.jsx("p",{children:"신입 회원 모집 기간이 끝나면, 다시 '가입 기간 설정'을 '가입 불가 기간'으로 바꿔주세요."}),e.jsx("h2",{children:"1. 회원 관리 탭"}),e.jsx("p",{children:"회원 가입 승인, 회원 탈퇴, 관리자 임명 및 해제 등의 동작을 할 수 있는 탭입니다."}),e.jsx("p",{children:"또한 회원의 정보 역시 여기서 확인할 수 있습니다."}),e.jsx("p",{children:"회원은 관리자가 회원 가입을 승인해야 정상적으로 홈페이지 이용이 가능합니다."}),e.jsx("p",{children:"학기가 바뀌어 새로운 임원이 임명되면 이 탭에서 관리자 권한을 부여해주세요."}),e.jsx("p",{children:"그러면 그 사람도 이 관리자 페이지 접속 권한을 부여받고, 홈페이지 관리를 할 수 있습니다."}),e.jsx("p",{children:"더이상 임원이 아닌 동아리원의 관리자 권한은 해제해주세요."}),e.jsx("h2",{children:"2. 최소활동기준 관리 탭"}),e.jsx("p",{children:"현재 최소 활동 기준을 확인하고 변경할 수 있습니다."}),e.jsx("p",{children:"또한 이번 학기에 활동 멤버들이 최소 활동 기준을 만족하여 다음 학기 회원 자격 유지가 가능한지 확인할 수 있습니다."}),e.jsx("p",{children:"회칙에 따라 여러 이유로 최소 활동 기준을 채우지 않아도 면제가 되는 경우가 있습니다."}),e.jsx("p",{children:"특정 회원의 최소 활동 기준 충족을 면제시키려면 이 탭의 '동작'에서 '면제' 버튼을 눌러주세요."}),e.jsx("p",{children:"면제된 회원을 취소하려면 '해제' 버튼을 눌러주세요."}),e.jsx("p",{children:"최소 활동 기준을 충족하거나, 면제가 된 경우 회원 자격이 유지된다고 표시됩니다."}),e.jsx("h2",{children:"3. 게시판 관리 탭"}),e.jsx("p",{children:"홈페이지 'Boards' 메뉴에 나타나는 게시판들과 관련된 정보들을 관리할 수 있습니다."}),e.jsx("p",{children:"생성되어 있는 게시판을 조회하고, 새로운 게시판을 생성하고, 기존 게시판을 수정하거나 삭제할 수 있습니다."}),e.jsx("p",{children:"기존 게시판의 이름을 변경하거나, 읽기 권한 및 쓰기 권한을 변경할 수 있습니다."}),e.jsx("p",{children:"게시판 생성 또는 수정 시에는 읽기 권한과 쓰기 권한을 신중하게 확인해주세요."}),e.jsx("p",{children:"또한 게시판 삭제 역시 신중하게 해 주세요. 복구가 불가합니다."}),e.jsx("h2",{children:"4. 프로젝트 관리 탭"}),e.jsx("p",{children:"홈페이지 'Projects' 메뉴에 나타나는 프로젝트들을 관리할 수 있는 탭입니다."}),e.jsx("p",{children:"새로운 프로젝트를 생성하고, 기존 프로젝트를 수정하거나 삭제할 수 있습니다."}),e.jsx("p",{}),e.jsx("p",{}),e.jsx("h2",{children:"5. 활동 관리 탭"}),e.jsx("p",{children:"홈페이지 'Activities' 메뉴에 나타나는 세미나 및 스터디들을 관리할 수 있는 탭입니다."}),e.jsx("p",{children:"각 세미나 및 스터디들의 신청 가능 여부를 변경하거나 잘못 등록된 세미나 및 스터디를 삭제할 수 있습니다."}),e.jsx("p",{children:"신청 가능 여부가 o 인 세미나 및 스터디는 '동작'에서 '닫기' 버튼을 클릭하면 더이상 신청할 수 없도록 수정할 수 있습니다."}),e.jsx("p",{children:"신청 가능 여부가 x 인 세미나 및 스터디는 '동작'에서 '열기' 버튼을 클릭하여 신청이 가능하도록 수정할 수 있습니다."}),e.jsx("h2",{children:"6. 도서 관리 탭"}),e.jsx("p",{children:"홈페이지 'Books' 메뉴에 나타나는 도서들을 관리할 수 있는 탭입니다."}),e.jsx("p",{children:"새로운 도서를 등록하고, 기존 도서를 수정하거나 삭제할 수 있습니다."}),e.jsx("p",{}),e.jsx("p",{})]})]}),Si=({history:t})=>e.jsx(Ai,{}),Ti=L(Si),_i=t=>{const r=st(i=>i.auth);g.useEffect(()=>{rt().then(i=>{if(i.status===D.OK&&i.data.isAdmin===!1){t.push(`/${I.FORBIDDEN}`);return}}).catch(i=>{console.error(i.message),t.push(`/${I.FORBIDDEN}`)})},[r,t])},Bi=l.div`
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 2rem;
  background-color: ${w.mint[0]};
  border-radius: 3px;
  border: 1px ${w.mint[2]} solid;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 10px;
`,Ei=l.div`
  display: flex;
  flex-flow: wrap;
  width: 80%;
  margin-bottom: 1.5rem;
  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`,Fi=l.div`
  cursor: default;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: ${w.mint[0]};
  border-radius: 3px;
  border: 1px ${w.mint[1]} solid;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.4rem;
  margin: 10px;
  padding: 0.4rem 0.5rem;
  box-shadow: 0px 0px 10px ${w.gray[1]};
  transition: 0.3s;
  min-height: 90px;
  width: 150px;
  &:hover {
    //opacity: 0.8;
    transition: 0.3s;
    transform: scale(1.02);
    box-shadow: 0px 0px 10px ${w.gray[2]};
  }
`,Ui=l.div`
  display: flex;
  margin-bottom: 5px;
  .admin-interview-slot-id {
    margin-left: 5px;
    font-weight: 500;
  }
`,zi=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  background-color: ${w.gray[0]};
  border: 1px ${w.gray[2]} solid;
  padding: 0 0.4rem;
  border-radius: 10px;
  width: 120px;
`,Pi=l.div`
  margin-bottom: 0;
`;l(N)`
  cursor: default;
  background-color: ${w.gray[2]};
  &:hover {
    opacity: 1;
  }
`;const Oi=l.div`
  margin: 5px 0;
  background-color: ${w.gray[0]};
  border-radius: 2px;
  padding: 5px 7px;
  width: 120px;
  display: flex;
  flex-direction: column;
  & > div > div > .admin-interview-label {
    font-weight: 500;
  }
`,Ri=l.div`
  margin-bottom: 10px;
`,Li=({interviewee:t,handleCancelInterview:r})=>{const i=n=>{n.preventDefault(),window.confirm(`[주의] ${t.name}님의 면접 신청을 취소하시겠습니까?`)&&r({loginId:t.loginID})};return e.jsxs(Oi,{children:[e.jsxs(Ri,{children:[e.jsxs("div",{children:[e.jsx("span",{className:"admin-interview-label",children:"이름 "})," ",t.name]}),e.jsxs("div",{children:[e.jsx("span",{className:"admin-interview-label",children:"학번 "})," ",t.studentID]}),e.jsxs("div",{children:[e.jsx("span",{className:"admin-interview-label",children:"학과 "})," ",t.department]}),e.jsxs("div",{children:[e.jsx("span",{className:"admin-interview-label",children:"연락처 "})," ",t.phoneNumber]})]}),e.jsx(xe,{onClick:i,children:"면접 신청 취소"})]})},Ki=({id:t,startTime:r,endTime:i,capacity:n,num:d,interviewees:o,handleCancelInterview:m})=>e.jsxs(Fi,{children:[e.jsxs(Ui,{children:[e.jsx("p",{children:"슬롯 ID "}),e.jsx("p",{className:"admin-interview-slot-id",children:t}),e.jsx("p",{})]}),e.jsxs(zi,{children:[Me(r)," ~ ",Me(i)]}),e.jsxs(Pi,{children:[d,"명/",n,"명"]}),o.map(a=>e.jsx(Li,{interviewee:a,handleCancelInterview:m},a.studentID))]}),Vi=({data:t,handleCancelInterview:r})=>e.jsxs(e.Fragment,{children:[e.jsx(Bi,{children:t==null?void 0:t.date}),e.jsx(Ei,{children:t==null?void 0:t.slots.map(i=>e.jsx(Ki,{id:i.slotId,startTime:i.startTime,endTime:i.endTime,capacity:i.capacity,num:i.interviewees.length,interviewees:i.interviewees,handleCancelInterview:r},i.slotId))})]}),Hi=({loading:t,data:r,handleCancelInterview:i})=>{var n;return e.jsxs(F,{children:[e.jsx(Ne,{children:"면접 신청 조회"}),t&&e.jsx(De,{}),!t&&e.jsx(e.Fragment,{children:(n=r==null?void 0:r.data)==null?void 0:n.map(d=>e.jsx(Vi,{data:d,handleCancelInterview:i},d.date))})]})},Wi=()=>{const[t,r]=g.useState([]),[i,n]=g.useState(!0);g.useEffect(()=>{n(!0),Re().then(o=>{o.status===D.OK&&(r(o.data),n(!1))})},[]);const d=({loginId:o})=>{Ot({loginId:o}).then(m=>{m.status===D.OK?(r(m.data),alert("성공적으로 면접이 취소되었습니다.")):alert("면접 취소를 실패하였습니다.")})};return e.jsx(Hi,{data:t,loading:i,handleCancelInterview:d})};l.div`
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 2rem;
  background-color: ${w.mint[0]};
  border-radius: 3px;
  border: 1px ${w.mint[2]} solid;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 10px;
`;l.div`
  display: flex;
  flex-flow: wrap;
  width: 80%;
  margin-bottom: 1.5rem;
  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;const qi=l.div`
  background-color: ${w.gray[0]};
  border: 1px ${w.gray[2]} solid;
  border-radius: 3px;
  padding: 3px 5px;
  font-size: 0.9rem;
  display: flex;
  margin-bottom: 5px;
  font-weight: 300;
  .admin-interview-slot-id {
    margin-left: 5px;
    font-weight: 500;
  }
`;l.div`
  cursor: default;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: ${w.mint[0]};
  border-radius: 3px;
  border: 1px ${w.mint[1]} solid;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.4rem;
  margin: 10px;
  padding: 0.4rem 0.5rem;
  box-shadow: 0px 0px 10px ${w.gray[1]};
  transition: 0.3s;
  min-height: 90px;
  width: 150px;
  &:hover {
    opacity: 0.8;
    transition: 0.3s;
    transform: scale(1.02);
  }
`;l.div`
  font-weight: 500;
  background-color: ${w.gray[0]};
  border: 1px ${w.gray[2]} solid;
  padding: 0 0.4rem;
  border-radius: 10px;
`;l.div`
  margin-bottom: 0.5rem;
`;l(N)`
  cursor: default;
  background-color: ${w.gray[2]};
  &:hover {
    opacity: 1;
  }
`;l.div`
  margin: 5px 0;
  background-color: ${w.gray[0]};
  border-radius: 2px;
  padding: 5px 7px;
  width: 120px;
  & > div > .admin-interview-label {
    font-weight: 500;
  }
`;const Gi=l.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`,Qi=l.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0 1rem 0;
  padding: 0.6rem 1.2rem 1.2rem 1.2rem;
  border: 1px solid ${w.mint[1]};
  border-radius: 5px;
  box-shadow: 0px 0px 10px ${w.gray[1]};
  width: 100%;
`,Xi=l.div`
  margin: 0.5rem 0;
`,Ji=l.li`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 1rem 0.5rem;
  padding: 1rem;
  border-radius: 5px;
  background-color: ${w.gray[1]};
`,Ee=l.div`
  margin: 0.5rem 0;
`,Yi=l.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`,Fe=l.div`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  font-weight: 300;
  & > span {
    font-size: 0.9rem;
    font-weight: 300;
    margin-left: 0.4rem;
  }
`,ie=l.label`
  font-size: 0.9rem;
  font-weight: 300;
  margin: 0.4rem;
`,Zi=l.input`
  text-align: center;
  height: 1.8rem;
  width: 10rem;
  outline: 0;
  border: 1px solid ${w.brown[0]};
  border-radius: 2px;
  max-width: 320px;
  outline: ${w.gray[1]};
`,Ue=l.input`
  text-align: center;
  height: 1.8rem;
  width: 8rem;
  outline: 0;
  border: 1px solid ${w.brown[0]};
  border-radius: 2px;
  max-width: 320px;
  outline: ${w.gray[1]};
`,es=l.input`
  text-align: center;
  height: 1.8rem;
  width: 4rem;
  outline: 0;
  border: 1px solid ${w.brown[0]};
  border-radius: 2px;
  max-width: 320px;
  outline: ${w.gray[1]};
`,ts=l.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  & > button {
    margin-right: 0;
  }
`;l(N)`
  width: 300px;
  margin-top: 2rem;
`;const ns=l.div`
  font-weight: 300;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,is=l(N)`
  margin: 0 0 0 15px;
  &.modify {
    background-color: ${w.brown[1]};
    &:hover {
      background-color: ${w.brown[0]};
    }
  }
  &.delete {
    background-color: ${w.red[1]};
    &:hover {
      background-color: ${w.red[0]};
    }
  }
`,ss=({id:t,date:r,startTime:i,endTime:n,capacity:d,currentIntervieweesCount:o,onCreateInterviewTime:m,onDeleteInterviewTime:a,onUpdateInterviewTime:s})=>{const[h,u]=k(i||"",A),[j,y]=k(n||"",A),[f,v]=k(d||"",A),x=c=>{c.preventDefault(),m({date:r,startTime:h,endTime:j,capacity:f})},C=c=>{c.preventDefault(),s({slotId:t,startTime:h,endTime:j,capacity:f})},p=c=>{c.preventDefault(),a({slotId:t})};return e.jsxs(Ji,{children:[t&&e.jsx(e.Fragment,{children:e.jsxs(qi,{children:[e.jsx("p",{children:"슬롯 ID"}),e.jsx("p",{className:"admin-interview-slot-id",children:t})]})}),e.jsxs(Ee,{children:[e.jsx(ie,{htmlFor:"interview-start-time",children:"시작 시간"}),e.jsx(Ue,{type:"time",name:"interview-start-time",id:"",value:h,onChange:u})]}),e.jsxs(Ee,{children:[e.jsx(ie,{htmlFor:"interview-end-time",children:"종료 시간"}),e.jsx(Ue,{type:"time",name:"interview-start-time",id:"",value:j,onChange:y})]}),e.jsxs(Fe,{children:["현재 신청 인원 ",o," 명"]}),e.jsxs(Fe,{children:[e.jsx(ie,{htmlFor:"interview-capacity",children:"정원"}),e.jsx(es,{type:"number",name:"interview-capacity",id:"",value:f,onChange:v}),e.jsx("span",{children:"명"})]}),e.jsxs(ts,{children:[e.jsx(is,{onClick:t?C:x,children:t?"수정":"제출"}),e.jsx(xe,{onClick:p,children:"삭제"})]})]})},rs=({data:t,onCreateInterviewTime:r,onDeleteInterviewTime:i,onUpdateInterviewTime:n})=>{const[d,o]=k(t?t.date:"",A),[m,a]=g.useState(t?t.slots:[]),s=h=>{h.preventDefault(),a([...m,{startTime:"",endTime:"",capacity:0,interviewees:[]}])};return e.jsxs(Qi,{children:[e.jsxs(Xi,{children:[e.jsx(ie,{htmlFor:"interview-date",children:"날짜"}),e.jsx(Zi,{type:"date",htmlFor:"interview-date",value:d,onChange:o})]}),e.jsx(Yi,{children:m.map(h=>e.jsx(ss,{date:d,id:h.slotId,startTime:h.startTime,endTime:h.endTime,capacity:h.capacity,currentIntervieweesCount:h.interviewees.length,onCreateInterviewTime:r,onDeleteInterviewTime:i,onUpdateInterviewTime:n},h.slotId?h.slotId:d+h.startTime+h.endTime))}),e.jsx(N,{onClick:s,children:"시간 추가"})]})},as=({data:t,loading:r,setData:i,onCreateInterviewTime:n,onDeleteInterviewTime:d,onDeleteAllInterviewTime:o,onUpdateInterviewTime:m})=>{const a=h=>{h.preventDefault(),i([...t,{date:"",slots:[]}])},s=h=>{h.preventDefault(),window.confirm("[주의] 모든 면접 시간 슬롯을 삭제하시겠습니까?")&&o()};return e.jsxs(F,{children:[e.jsx(Ne,{children:"면접 시간 관리"}),e.jsx(ns,{children:"작성 후 '제출' 버튼을 꼭 눌러주세요."}),r&&e.jsx(De,{}),!r&&e.jsxs(e.Fragment,{children:[e.jsx(Gi,{children:t==null?void 0:t.map(h=>e.jsx(rs,{data:h,onCreateInterviewTime:n,onDeleteInterviewTime:d,onUpdateInterviewTime:m},h.date))}),e.jsx(N,{onClick:a,children:"날짜 추가"}),e.jsx(xe,{onClick:s,style:{marginTop:"30px"},children:"전체 시간 삭제"})]})]})},ls=()=>{const[t,r]=g.useState([]),[i,n]=g.useState(!0);g.useEffect(()=>{n(!0),Re().then(s=>{s.status===D.OK&&(r(s.data.data),n(!1))})},[]);const d=({date:s,startTime:h,endTime:u,capacity:j})=>{n(!0),Rt({date:s,startTime:h,endTime:u,capacity:j}).then(y=>{y.status===D.OK&&(r(y.data.data),n(!1))})},o=({slotId:s})=>{n(!0),Lt({slotId:s}).then(h=>{h.status===D.OK&&(r(h.data.data),n(!1))})},m=()=>{n(!0),Kt().then(s=>{s.status===D.OK&&(r(s.data.data),n(!1),alert("모든 면접 시간 슬롯이 삭제되었습니다."))})},a=({slotId:s,startTime:h,endTime:u,capacity:j})=>{Vt({slotId:s,startTime:h,endTime:u,capacity:j}).then(y=>{y.status===D.OK&&(r(y.data.data),alert("면접 시간 슬롯이 성공적으로 수정되었습니다."))})};return e.jsx(as,{data:t,loading:i,setData:r,onCreateInterviewTime:d,onDeleteInterviewTime:o,onDeleteAllInterviewTime:m,onUpdateInterviewTime:a})};var os=function(r,i){return g.createElement(Qt,at({},r,{ref:i,icon:Yt}))};const Je=g.forwardRef(os),ds=we(({css:t})=>({fullWidth:t`
    width: 100%;
  `}));function cs(){var v;const{styles:t}=ds(),[r,i]=g.useState(!1),[n,d]=g.useState(!1),[o,m]=g.useState(-1),{data:a}=be({queryKey:re.badge.all,queryFn:Y.getAllBadgeUsingGet}),s=()=>lt.invalidateQueries(re.badge.all),{mutate:h}=Z({mutationFn:Y.deleteBadgeUsingDelete}),u=((v=a==null?void 0:a.data)==null?void 0:v.map(x=>({id:x.id,imageUrl:x.imageUrl??"",category:x.category??"",name:x.name??"",description:x.description??""})))??[],j=x=>{m(x),d(!0)},y=x=>{confirm("정말 삭제하시겠습니까?")&&h({badgeId:x},{onSuccess(){s().then(Ce)}})},f=[{key:"image",title:"이미지",render:(x,{imageUrl:C})=>e.jsx(ze,{src:C})},{key:"category",title:"카테고리",render:(x,{category:C})=>C},{key:"name",title:"제목",render:(x,{name:C})=>C},{key:"description",title:"설명",render:(x,{description:C})=>C},{key:"action",title:"수정/삭제",render:(x,{id:C,category:p})=>e.jsxs(se,{children:[e.jsx(X,{onClick:()=>j(C),children:"수정"}),e.jsx(X,{danger:!0,onClick:()=>y(C),disabled:["BAEKJOON","ATTENDANCE"].includes(p),children:"삭제"})]})}];return e.jsxs(e.Fragment,{children:[e.jsxs(se,{direction:"vertical",className:t.fullWidth,children:[e.jsx(X,{type:"primary",onClick:()=>i(!0),children:"뱃지생성하기"}),e.jsx(We,{columns:f,dataSource:u,pagination:{position:["bottomCenter"]},rowKey:"id"})]}),r&&e.jsx(hs,{onCancel:()=>i(!1),onOk:s}),n&&e.jsx(ps,{onCancel:()=>d(!1),onOk:()=>{d(!1),s().catch(console.log)},initialValues:u.find(x=>x.id===o)})]})}const ms=P.object({imageUrl:P.string().min(1),category:P.string().min(1),name:P.string().min(1),description:P.string().min(1)});function hs({onOk:t,onCancel:r}){const i=Ve({validate:He(ms),initialValues:{imageUrl:"",category:"",name:"",description:""}}),{mutate:n}=Z({mutationFn:Le.uploadFile}),{mutate:d}=Z({mutationFn:Y.postBadgeUsingPost}),o=ye(),m=u=>{d({postBadgeRequest:{imageUrl:u.imageUrl,name:u.name,description:u.description}},{onSuccess(){o.success("뱃지가 생성되었습니다."),t()}})},a=()=>{if(!i.isValid()){o.error("폼을 전부 입력해주세요.");return}m(i.values)},s=u=>{n(u.file,{onSuccess(j){i.setFieldValue("imageUrl",j)}})},h=()=>i.values.imageUrl?[{uid:"SOME_UID",url:i.values.imageUrl,name:i.values.imageUrl}]:[];return e.jsxs(ve,{open:!0,onCancel:r,onOk:a,children:[e.jsx(oe.Title,{level:4,children:"뱃지 생성"}),e.jsxs(R,{layout:"vertical",onSubmitCapture:i.onSubmit(m,Ce),children:[e.jsx(R.Item,{label:"카테고리",children:e.jsx(J,{...i.getInputProps("category")})}),e.jsx(R.Item,{label:"이름",children:e.jsx(J,{...i.getInputProps("name")})}),e.jsx(R.Item,{label:"설명",children:e.jsx(J.TextArea,{...i.getInputProps("description")})}),e.jsx(R.Item,{label:"로고",children:e.jsx(Ke,{beforeUpload:()=>!1,onChange:s,fileList:h(),children:e.jsx(X,{icon:e.jsx(Je,{rev:0}),children:"로고파일 업로드"})})})]})]})}const xs=P.object({id:P.number(),imageUrl:P.string().min(1),category:P.string().min(1),name:P.string().min(1),description:P.string().min(1)});function ps({onCancel:t,onOk:r,initialValues:i}){const n=Ve({validate:He(xs),initialValues:i}),{mutate:d}=Z({mutationFn:Le.uploadFile}),{mutate:o}=Z({mutationFn:Y.updateBadgeUsingPut}),m=ye(),a=j=>{o({badgeId:j.id,updateBadgeRequest:{imageUrl:j.imageUrl,name:j.name,description:j.description}},{onSuccess(){m.success("뱃지가 수정되었습니다."),r()}})},s=()=>{if(!n.isValid()){m.error("폼을 전부 입력해주세요.");return}a(n.values)},h=j=>{d(j.file,{onSuccess(y){n.setFieldValue("imageUrl",y)}})},u=()=>n.values.imageUrl?[{uid:"SOME_UID",url:n.values.imageUrl,name:n.values.imageUrl}]:[];return e.jsxs(ve,{open:!0,onCancel:t,onOk:s,children:[e.jsx(oe.Title,{level:4,children:"뱃지 수정"}),e.jsxs(R,{layout:"vertical",onSubmitCapture:n.onSubmit(a,Ce),children:[e.jsx(R.Item,{label:"카테고리",children:e.jsx(J,{...n.getInputProps("category"),disabled:!0})}),e.jsx(R.Item,{label:"이름",children:e.jsx(J,{...n.getInputProps("name")})}),e.jsx(R.Item,{label:"설명",children:e.jsx(J.TextArea,{...n.getInputProps("description")})}),e.jsx(R.Item,{label:"로고",children:e.jsx(Ke,{beforeUpload:()=>!1,onChange:h,fileList:u(),children:e.jsx(X,{icon:e.jsx(Je,{rev:0}),children:"로고파일 업로드"})})})]})]})}function us(){const{data:t}=be({queryKey:re.member.all,queryFn:Wt.getAllMembersUsingGet}),r=(t==null?void 0:t.data.map(a=>({name:a.name??"",department:a.department??"",studentId:a.studentID??"",loginId:a.loginID??"",email:a.email??""})))??[],[i,n]=g.useState(!1),[d,o]=g.useState(""),m=[{key:"name",title:"이름",render:(a,{name:s})=>s},{key:"department",title:"학과",render:(a,{department:s})=>s},{key:"studentId",title:"학번",render:(a,{studentId:s})=>s},{key:"loginId",title:"아이디",render:(a,{loginId:s})=>s},{key:"edit",title:"뱃지목록 조회",render:(a,{loginId:s})=>e.jsx(X,{type:"primary",onClick:()=>{o(s),n(!0)},children:"뱃지목록"})}];return e.jsxs(e.Fragment,{children:[e.jsx(We,{columns:m,dataSource:r,pagination:!1,rowKey:"loginId"}),i&&e.jsx(js,{onOk:()=>n(!1),onCancel:()=>n(!1),loginId:d})]})}const gs=we(({css:t})=>({badgeName:t`
    font-weight: 700;
  `,badgeDesc:t`
    font-weight: 300;
  `,badgeWrap:t`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
  `}));function js({onOk:t,onCancel:r,loginId:i}){var y;const{styles:n}=gs(),d=ye(),{data:o}=be({queryKey:re.badge.member(i),queryFn:()=>Y.getMemberBadgeUsingGet({loginId:i})}),[m,a]=g.useState([]),{mutate:s}=Z({mutationFn:Y.assignBadgeUsingPost}),h=f=>{a(v=>v.map(x=>x.id===f?{...x,own:!x.own}:x))},u=()=>{if(!(o!=null&&o.data))return;if(!!!m.find(v=>{var x;return((x=o.data.find(({id:C})=>C===v.id))==null?void 0:x.own)!==v.own})){t();return}s({loginId:i,assignBadgeRequest:{data:m}},{onSuccess(){d.success("수정되었습니다."),t()}})};g.useEffect(()=>{o!=null&&o.data&&a(o.data.map(f=>({id:f.id,own:!!f.own})))},[o]);const j=f=>e.jsxs("div",{children:[e.jsx("span",{className:n.badgeName,children:f.name}),e.jsx("br",{}),e.jsx("span",{className:n.badgeDesc,children:f.description})]});return e.jsx(ve,{open:!0,onCancel:r,onOk:u,children:e.jsxs(se,{direction:"vertical",children:[e.jsx(oe.Title,{level:4,children:"뱃지 목록 조회"}),e.jsxs(se,{direction:"vertical",children:[e.jsxs(oe.Text,{children:[i,"님의 뱃지목록입니다."]}),e.jsx("div",{className:n.badgeWrap,children:(y=o==null?void 0:o.data)==null?void 0:y.map(f=>{var v;return e.jsx(qt,{onChange:()=>h(f.id),checked:(v=m.find(({id:x})=>x===f.id))==null?void 0:v.own,children:e.jsx(ot,{title:j(f),children:e.jsx(ze,{src:f.imageUrl,alt:f.name})},f.id)},f.id)})})]})]})})}const fs=we(({css:t})=>({titleConatiner:t`
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1.5rem;
    margin: 1rem;
  `,fullWidth:t`
    width: 100%;
  `}));function ws(){const{styles:t}=fs(),i=Ht().get("menuType")??"BADGE",n=dt(),d=[{key:"BADGE",label:"뱃지 생성 및 등록",children:e.jsx(cs,{})},{key:"MEMBER_BADGE",label:"회원 뱃지 관리",children:e.jsx(us,{})}],o=m=>n.push(`/${I.ADMIN}/badge?${Xt.stringify({menuType:m})}`);return e.jsxs(F,{children:[e.jsx("div",{className:t.titleConatiner,children:"뱃지관리"}),e.jsx(Gt,{className:t.fullWidth,items:d,defaultActiveKey:i,onChange:o})]})}function bs(){return e.jsx(ws,{})}const ys=l.div`
  position: relative;
  top: 0px;
  width: 90%;
  left: 5%;
  right: 5%;
  display: flex;
  margin: 0px 0 300px 0;
  @media (max-width: 768px) {
    margin-bottom: 600px;
    flex-direction: column;
  }
`,vs=({history:t})=>{const r=[{name:"관리자 홈",url:""},{name:"동아리 정보 관리",url:"/info"},{name:"회원 관리",url:"/members"},{name:"최소활동기준 관리",url:"/pass"},{name:"게시판 관리",url:"/boards"},{name:"프로젝트 관리",url:"/projects"},{name:"활동 관리",url:"/activities"},{name:"도서 관리",url:"/books"},{name:"면접 시간 관리",url:"/interview-time"},{name:"면접 신청 조회",url:"/interview"},{name:"뱃지 관리",url:"/badge"}];return _i(t),e.jsxs(ys,{children:[e.jsx(en,{menus:r}),e.jsxs(ct,{children:[e.jsx(E,{component:ln,path:`/${I.ADMIN}/info`,exact:!0}),e.jsx(E,{component:bn,path:`/${I.ADMIN}/members`,exact:!0}),e.jsx(E,{component:kn,path:`/${I.ADMIN}/pass`,exact:!0}),e.jsx(E,{component:ji,path:[`/${I.ADMIN}/boards/new`,`/${I.ADMIN}/boards/edit/:boardID`],exact:!0}),e.jsx(E,{component:Ln,path:`/${I.ADMIN}/boards`,exact:!0}),e.jsx(E,{component:vi,path:[`/${I.ADMIN}/projects/edit/:projectID`,`/${I.ADMIN}/projects/new`],exact:!0}),e.jsx(E,{component:Xn,path:`/${I.ADMIN}/projects`,exact:!0}),e.jsx(E,{component:si,path:`/${I.ADMIN}/activities`,exact:!0}),e.jsx(E,{component:$i,path:[`/${I.ADMIN}/books/new`,`/${I.ADMIN}/books/edit/:bookID`],exact:!0}),e.jsx(E,{component:hi,path:`/${I.ADMIN}/books`,exact:!0}),e.jsx(E,{component:ls,path:`/${I.ADMIN}/interview-time`,exact:!0}),e.jsx(E,{component:Wi,path:`/${I.ADMIN}/interview`,exact:!0}),e.jsx(E,{component:bs,path:`/${I.ADMIN}/badge`,exact:!0}),e.jsx(E,{component:Ti,path:`/${I.ADMIN}`,exact:!0})]})]})},sr=L(vs);export{sr as default};
