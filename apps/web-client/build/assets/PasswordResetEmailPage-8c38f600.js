import{n as g,c as C,j as e,A,M as o,a as h,w as D,x as L,y as K,S as U,R as w}from"./index-04133603.js";import{B as P,a as E}from"./Block.styles-4dce9da8.js";import{u as y,e as G,p as H,t as M}from"./throttle-6f972964.js";import{R as q,F as J,a as Q,I as R,S as O}from"./AuthForm-44bd2021.js";import{S as X}from"./Spinner-84267176.js";import{S as F}from"./statusCode-196b1b17.js";import"./Modal-a94156ed.js";import"./getFileUrl-459fc159.js";const Y=g.i`
  color: ${C.mint[1]};
  font-size: 4rem;
  margin-bottom: 1.5rem;
`,Z=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  height: 100%;
  & > h2 {
    margin-bottom: 2rem;
  }
  & > p {
    margin-bottom: 0.5rem;
    text-align: center;
  }
`,ee=()=>e.jsx(P,{children:e.jsx(E,{children:e.jsxs(Z,{children:[e.jsx(Y,{className:"far fa-check-circle"}),e.jsx("h2",{children:"비밀번호 재설정 이메일 전송 완료"}),e.jsx("p",{children:"비밀번호 재설정 이메일이 전송되었습니다."}),e.jsx("p",{children:"이메일로 전송된 링크를 통해 비밀번호를 재설정해주세요."}),e.jsx("p",{children:"이메일을 받지 못하셨다면 운영진에게 문의해주세요."}),e.jsx(A,{to:"/",style:{margin:"2rem"},children:"메인으로"})]})})}),se=g.i`
  color: ${C.mint[1]};
  font-size: 4rem;
  margin-bottom: 1.5rem;
`,te=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  height: 100%;
  & > h2 {
    margin-bottom: 2rem;
  }
  & > p {
    margin-bottom: 0.5rem;
    text-align: center;
  }
`,re=()=>e.jsx(P,{children:e.jsx(E,{children:e.jsxs(te,{children:[e.jsx(se,{className:"far fa-check-circle"}),e.jsx("h2",{children:"비밀번호 재설정 완료"}),e.jsx("p",{children:"비밀번호가 재설정되었습니다."}),e.jsx("p",{children:"새로운 비밀번호로 로그인 해 주세요."}),e.jsx(A,{to:`/${o.SIGNIN}`,style:{margin:"2rem"},children:"로그인 페이지로"})]})})}),ne=g.p`
  max-width: 320px;
  font-size: 0.8rem;
  font-weight: 300;
  margin: 0 1rem 2rem 1rem;
  color: ${C.brown[0]};
  line-height: 1.2rem;
  text-align: center;
  word-break: keep-all;
`,W=({type:t,message:S,onChangeMessage:i,modalVisible:j,handleModalOpen:r,handleModalClose:x,onSubmit:a,loading:c=!1})=>{const[d,f,u]=y("",G),[s,p,n]=y("",H),[l,v]=h.useState(""),[b,T]=h.useState(!1),I=m=>{if(s!==m){T(!0);return}T(!1)},V=m=>{v(m.target.value),I(m.target.value)},N=()=>!(n||!s||b||!l),_=()=>!(u||!d),$=()=>{i("모든 값을 올바르게 입력해주세요.")},z=M(m=>{if(!_()){$(),r();return}a({email:d})},1e3),B=M(m=>{if(!N()){$(),r();return}a({password:s,passwordCheck:l})},1e3),k=m=>{m.preventDefault(),t==="email"&&z(),t==="reset"&&B()};return e.jsxs(e.Fragment,{children:[e.jsx(q,{visible:j,onConfirm:x,onCancel:x,message:S}),e.jsx(P,{children:e.jsxs(E,{children:[c&&e.jsx(X,{}),e.jsx(J,{children:e.jsx("h2",{className:"form_list_title",children:t==="email"?"비밀번호 찾기":"비밀번호 재설정"})}),t==="email"&&e.jsxs(ne,{children:["가입 시 입력하신 이메일 주소를 입력하세요.",e.jsx("br",{}),"입력하신 이메일 주소로 비밀번호 재설정 링크가 전송됩니다."]}),e.jsxs(Q,{children:[t==="reset"&&e.jsxs(e.Fragment,{children:[e.jsx(R,{valueText:s,labelText:"새로운 비밀번호",typeText:"password",nameText:"password",error:n,onChangeFunc:p,placeholderText:"8자리 이상"}),e.jsx(R,{valueText:l,labelText:"새로운 비밀번호 확인",typeText:"password",nameText:"password_check",error:b,onChangeFunc:V,placeholderText:"8자리 이상"}),e.jsx(O,{onClick:k,children:"비밀번호 재설정"})]}),t==="email"&&e.jsxs(e.Fragment,{children:[e.jsx(R,{valueText:d,labelText:"이메일",typeText:"email",nameText:"email",error:u,onChangeFunc:f,placeholderText:"ex) email@example.com"}),e.jsx(O,{onClick:k,children:"이메일 전송"})]})]})]})})]})},oe=({history:t,location:S})=>{const i=S.search.replace("?token=",""),[j,r]=h.useState(null),[x,a]=h.useState(!1),c=()=>{a(!0)},d=()=>{a(!1)},f=s=>{r(s)},u=({password:s,passwordCheck:p})=>{try{L({passwordResetToken:i,password:s,passwordCheck:p}).then(l=>{l.status===F.OK&&(r(null),t.push(`/${o.PASSWORD}/success/${o.RESET_PASSWORD}`))}).catch(l=>{if(console.error(l),l.response.status===400){r("토큰이 유효하지 않습니다. 관리자에게 문의해주세요."),c();return}r("비밀번호 재설정 실패"),c()})}catch(n){console.error(n)}};return e.jsx(W,{type:"reset",message:j,onChangeMessage:f,modalVisible:x,handleModalOpen:c,handleModalClose:d,onSubmit:u})},ae=D(oe),ce=({history:t})=>{const[S,i]=h.useState(null),[j,r]=h.useState(!1),[x,a]=h.useState(!1),c=()=>{r(!0)},d=()=>{r(!1)},f=s=>{i(s)},u=({email:s})=>{try{a(!0),K({email:s}).then(n=>{n.status===F.OK&&(a(!1),i(null),t.push(`/${o.PASSWORD}/success`))}).catch(n=>{if(console.error(n),a(!1),n.response.status===400){i("가입되지 않은 이메일 주소입니다."),c();return}i("비밀번호 재설정 이메일 전송 실패"),c()})}catch(p){console.error(p)}};return e.jsx(W,{type:"email",message:S,onChangeMessage:f,modalVisible:j,handleModalOpen:c,handleModalClose:d,onSubmit:u,loading:x})},ie=D(ce),je=()=>e.jsx(e.Fragment,{children:e.jsxs(U,{children:[e.jsx(w,{component:re,path:`/${o.PASSWORD}/success/${o.RESET_PASSWORD}`,exact:!0}),e.jsx(w,{exact:!0,path:`/${o.PASSWORD}/success`,component:ee}),e.jsx(w,{component:ae,path:`/${o.PASSWORD}/${o.RESET_PASSWORD}`,exact:!0}),e.jsx(w,{component:ie,path:`/${o.PASSWORD}`,exact:!0})]})});export{je as default};
