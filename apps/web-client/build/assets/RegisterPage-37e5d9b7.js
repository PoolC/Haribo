import{w as B,a as r,j as e,p as O,n as g,c as k,A as h,M as x,S as w,R as p}from"./index-04133603.js";import{A as P}from"./AuthForm-44bd2021.js";import{r as T}from"./axiosUtil-094ba110.js";import{S as f,C as d}from"./statusCode-196b1b17.js";import{B as U,a as $}from"./Block.styles-4dce9da8.js";import{g as L}from"./info-3ae596a4.js";import{S as v}from"./Spinner-84267176.js";import"./Modal-a94156ed.js";import"./throttle-6f972964.js";import"./getFileUrl-459fc159.js";const z=({location:t,history:c})=>{const[o,s]=r.useState(null),[i,m]=r.useState(!1);r.useEffect(()=>{T()},[]);const a=()=>{m(!0)},j=()=>{m(!1)},S=({id:l,password:R,passwordCheck:E,name:y,email:F,department:I,studentId:b,phoneNumber:M,introduction:N,profileImageURL:A})=>{try{O({id:l,password:R,passwordCheck:E,name:y,email:F,department:I,studentId:b,phoneNumber:M,introduction:N,profileImageURL:A}).then(n=>{n.status===f.OK&&(s(null),c.push("/register/success"))}).catch(n=>{if(console.error(n),n.response.status===d.CONFLICT){s("이미 가입된 아이디/이메일/학번입니다."),a();return}if(n.response.status===d.BAD_REQUEST){s("모든 값을 올바르게 입력해주세요."),a();return}s("회원가입 실패"),a()})}catch(u){console.error(u)}},C=l=>{s(l)};return e.jsx(P,{type:"register",onSubmit:S,message:o,onChangeMessage:C,modalVisible:i,handleModalOpen:a,handleModalClose:j})},G=B(z),K=g.i`
  color: ${k.mint[1]};
  font-size: 4rem;
  margin-bottom: 1.5rem;
`,V=g.div`
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
`,_=({isSubscriptionPeriod:t})=>e.jsx(U,{children:e.jsx($,{children:e.jsxs(V,{children:[e.jsx(K,{className:"far fa-check-circle"}),e.jsx("h2",{children:"회원가입 요청 완료"}),e.jsx("p",{children:"회원가입 요청이 전송되었습니다."}),!t&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"관리자가 승인해야 회원가입이 완료됩니다."}),e.jsx("p",{children:"관리자의 승인을 기다려주세요."})]}),t&&e.jsx(h,{to:`/${x.SIGNIN}`,style:{margin:"2rem"},children:"로그인 하러 가기"}),!t&&e.jsx(h,{to:"/",style:{margin:"2rem"},children:"메인으로"})]})})}),D=()=>{const[t,c]=r.useState(!0),[o,s]=r.useState(null);return r.useEffect(()=>{L().then(i=>{i.status===f.OK&&(s(i.data.isSubscriptionPeriod),c(!1))})}),o==null?null:e.jsxs(e.Fragment,{children:[t&&e.jsx(v,{}),!t&&e.jsx(_,{isSubscriptionPeriod:o})]})},se=()=>e.jsx(e.Fragment,{children:e.jsx(e.Fragment,{children:e.jsxs(w,{children:[e.jsx(p,{exact:!0,path:"/register/success",component:D}),e.jsx(p,{component:G,path:`/${x.SIGNUP}`,exact:!0})]})})});export{se as default};
