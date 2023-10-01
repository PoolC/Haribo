import{n as f,c as u,A as j,j as e,u as C,d as F,a as h,e as O}from"./index-04133603.js";import{B as S,a as I}from"./Block.styles-4dce9da8.js";import{S as k}from"./Spinner-84267176.js";import{k as P}from"./ActivityCard.styles-7afa2c3c.js";import{a as p}from"./getDateString-8e08c6d9.js";import{M as y}from"./Modal-a94156ed.js";import{C as R,S as K}from"./Apply-90195b17.js";import{S as w,C as V}from"./statusCode-196b1b17.js";import{g as _}from"./info-3ae596a4.js";import{g as z,c as U,d as W}from"./interview-9c268844.js";const H=f.div`
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 2rem;
  background-color: ${u.mint[0]};
  border-radius: 3px;
  border: 1px ${u.mint[2]} solid;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 10px;
`,q=f.div`
  display: flex;
  flex-flow: wrap;
  width: 80%;
  margin-bottom: 1.5rem;
  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`,G=f.div`
  cursor: default;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: ${u.mint[0]};
  border-radius: 3px;
  border: 1px ${u.mint[1]} solid;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.4rem;
  margin: 10px;
  padding: 0.4rem 0.5rem;
  box-shadow: 0px 0px 10px ${u.gray[1]};
  transition: 0.3s;
  min-height: 90px;
  &:hover {
    //opacity: 0.8;
    transition: 0.3s;
    transform: scale(1.02);
    box-shadow: 0px 0px 10px ${u.gray[2]};
  }
`,J=f.div`
  font-weight: 500;
  background-color: ${u.gray[0]};
  border: 1px ${u.gray[2]} solid;
  padding: 0 0.4rem;
  border-radius: 10px;
`,Q=f.div`
  margin-bottom: 0.5rem;
`,X=f(j)`
  cursor: default;
  background-color: ${u.gray[2]};
  &:hover {
    opacity: 1;
  }
`,Y=f.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  font-weight: 300;
  font-size: 0.9rem;

  & > p {
    line-height: 1.5rem;
    word-break: keep-all;
  }

  & > p,
  & > button {
    margin: 10px;
    text-align: center;
  }
`,Z=({date:t,startTime:s,endTime:r,visible:i,onConfirm:o,onCancel:n})=>{const a=`${t} ${p(s)}~${p(r)}의 면접을 신청하시겠습니까?`,d=e.jsx(j,{onClick:o,children:"신청"});return e.jsx(y,{contents:a,buttons:d,onCancel:n,visible:i})},ee=({date:t,startTime:s,endTime:r,visible:i,onConfirm:o,onCancel:n})=>{const a=`${t} ${p(s)}~${p(r)}의 면접을 취소하시겠습니까?`,d=e.jsx(j,{onClick:o,children:"신청 취소"});return e.jsx(y,{contents:a,buttons:d,onCancel:n,visible:i})},te=({date:t,startTime:s,endTime:r,capacity:i,num:o,mySlotId:n,id:a,handleSelectInterviewTime:d,handleCancelInterviewTime:x})=>{const g=C(c=>c.auth),l=g.user.role,m=g.status.isLogin,B=g.user.memberId,[$,v]=h.useState(!1),[M,b]=h.useState(!1),D=c=>{c.preventDefault(),v(!0)},T=c=>{c.preventDefault(),d({slotId:a}),v(!1)},E=c=>{c.preventDefault(),v(!1)},L=c=>{c.preventDefault(),b(!0)},N=c=>{c.preventDefault(),x({loginId:B}),b(!1)},A=c=>{c.preventDefault(),b(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(Z,{date:t,startTime:s,endTime:r,visible:$,onConfirm:T,onCancel:E}),e.jsx(ee,{date:t,startTime:s,endTime:r,visible:M,onConfirm:N,onCancel:A}),e.jsxs(G,{children:[e.jsxs(J,{children:[p(s)," ~ ",p(r)]}),e.jsxs(Q,{children:[o<i&&"신청가능",o>=i&&"신청불가"]}),m&&l===O.UNACCEPTED&&e.jsxs(e.Fragment,{children:[n===null&&i>o&&e.jsx("div",{children:e.jsx(j,{onClick:D,children:"신청"})}),n!==a&&i<=o&&e.jsx("div",{children:e.jsx(X,{children:"마감"})}),n===a&&e.jsx(P,{onClick:L,children:"취소"})]})]})]})},ne=({data:t,loginId:s,mySlotId:r,handleSelectInterviewTime:i,handleCancelInterviewTime:o})=>e.jsxs(e.Fragment,{children:[e.jsx(H,{children:t==null?void 0:t.date}),e.jsx(q,{children:t==null?void 0:t.slots.map(n=>e.jsx(te,{id:n.slotId,date:t==null?void 0:t.date,startTime:n.startTime,endTime:n.endTime,capacity:n.capacity,num:n.interviewees.length,interviewees:n.interviewees,loginId:s,mySlotId:r,handleSelectInterviewTime:i,handleCancelInterviewTime:o},n.slotId))})]}),se=({loading:t,data:s,mySlotId:r,handleSelectInterviewTime:i,handleCancelInterviewTime:o})=>{const n=C(x=>x.auth),a=n.status.isLogin,d=n.user.memberId;return e.jsx(S,{children:e.jsxs(I,{children:[e.jsx("h2",{className:"block_title",children:"면접 시간 제출"}),t&&e.jsx(k,{}),!t&&!a&&e.jsxs(Y,{children:[e.jsx("p",{children:"회원가입 후 로그인을 하셔야 면접 신청이 가능합니다."}),e.jsx(F,{className:"right-menu",to:"/register",children:"회원가입 하러 가기"}),e.jsx(j,{className:"right-menu sign-in",to:"/login",children:"로그인"})]}),!t&&e.jsx(e.Fragment,{children:s==null?void 0:s.map(x=>e.jsx(ne,{data:x,loginId:d,mySlotId:r,handleSelectInterviewTime:i,handleCancelInterviewTime:o},x.date))})]})})},ie=({loading:t})=>e.jsx(S,{children:e.jsxs(I,{children:[e.jsx("h2",{className:"block_title",children:"면접 시간 제출"}),t&&e.jsx(k,{}),!t&&e.jsx(e.Fragment,{children:e.jsxs(R,{children:[e.jsx("div",{children:e.jsx(K,{className:"fas fa-exclamation-circle"})}),e.jsxs("div",{children:["현재 가입 신청 가능 기간이 아닙니다.",e.jsx("br",{}),"자세한 사항은 동아리 회장에게 문의해주세요."]})]})})]})}),oe=()=>{const[t,s]=h.useState(!0),[r,i]=h.useState([]),[o,n]=h.useState(null),[a,d]=h.useState(null);h.useEffect(()=>{s(!0),_().then(l=>{l.status===w.OK&&(d(l.data.isSubscriptionPeriod),s(!1))})},[]),h.useEffect(()=>{s(!0),z().then(l=>{l.status===w.OK&&(n(l.data.mySlotId),i(l.data.data),s(!1))})},[]);const x=({slotId:l})=>{U({slotId:l}).then(m=>{m.status===w.OK?(i(m.data.data),n(l),alert("성공적으로 신청되었습니다.")):m.status===V.CONFLICT?(alert("[신청 실패] 면접 인원이 가득 찼습니다."),window.location.reload()):(alert("면접 신청에 실패하였습니다."),window.location.reload())}).catch(m=>{alert("면접 신청에 실패하였습니다."),window.location.reload()})},g=({loginId:l})=>{W({loginId:l}).then(m=>{m.status===w.OK?(i(m.data.data),n(null),alert("성공적으로 면접이 취소되었습니다.")):alert("면접 취소를 실패하였습니다.")})};return e.jsxs(e.Fragment,{children:[a===!1&&e.jsx(ie,{loading:t}),a&&e.jsx(se,{mySlotId:o,data:r,loading:t,handleSelectInterviewTime:x,handleCancelInterviewTime:g})]})},pe=()=>e.jsx(oe,{});export{pe as default};
