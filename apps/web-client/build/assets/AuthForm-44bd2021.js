import{j as e,A as fe,n as a,c as l,L as Te,a as U,M as Ce}from"./index-04133603.js";import{M as ye}from"./Modal-a94156ed.js";import{u as o,i as ve,p as ke,n as f,e as Fe,a as Ee,w as Se,t as V}from"./throttle-6f972964.js";import{g as _e}from"./getFileUrl-459fc159.js";import{B as Le,a as Pe}from"./Block.styles-4dce9da8.js";const T=["/files/profile_placeholder_00.png","/files/profile_placeholder_01.png","/files/profile_placeholder_02.png","/files/profile_placeholder_03.png","/files/profile_placeholder_04.png"],Re=({visible:s,onConfirm:r,onCancel:c,message:x})=>{const h="확인",m=e.jsx(fe,{onClick:r,children:h});return e.jsx(ye,{contents:x,buttons:m,visible:s,onConfirm:r,onCancel:c})},B=a.header`
  display: flex;
  align-items: center;
  margin: auto;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 3rem;
`,D=a.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 320px;
  & > label {
    margin: 5px 0 8px 0;
    font-size: 0.8rem;
    width: 100%;
  }
  & > input:disabled {
    background-color: ${l.gray[1]};
  }
`,$e=a.label`
  display: flex;
  justify-content: space-between;
  margin: 5px 0 8px 0;
  font-size: 0.8rem;
  width: 100%;
`,Ne=a.span`
  opacity: ${s=>s.error?"100%":"0%"};
  color: ${l.red[1]};
  transition: 0.3s ease-in;
`,Ue=a.input`
  border: 1px solid ${l.brown[0]};
  height: 2rem;
  border-radius: 2px;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 320px;
  outline: ${l.gray[1]};
  box-shadow: ${s=>s.error&&`0 0 5px ${l.red[0]}`};
  transition: 0.3s ease-in;
`,M=a.button`
  cursor: pointer;
  margin: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  height: 2rem;
  background-color: ${l.mint[2]};
  color: white;
  border-radius: 12px;
  font-weight: 600;
  transition: 0.3s;
  &:hover {
    opacity: 0.75;
    transition: 0.3s;
  }
`,Ve=a.textarea`
  outline: 0;
  width: 100%;
`,Be=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`,De=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 5px 25px 5px;
`,Me=a.img`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin: 10px 5px 0 5px;
`,We=a.select`
  outline: 0;
  height: 2rem;
  width: 100%;
  box-sizing: content-box;
`,ze=a(M)`
  background-color: ${l.red[1]};
  margin-top: 1.5rem;
  &:hover {
    background-color: ${l.red[0]};
  }
  &:disabled {
    background-color: ${l.gray[2]};
  }
`,Ae=a(Te)`
  font-size: 0.9rem;
  font-weight: 300;
`,Ie={login:"로그인",register:"회원가입",update:"회원 정보 수정"},i=({valueText:s,labelText:r,typeText:c,nameText:x,error:h,onChangeFunc:m,placeholderText:g,disabledCondition:C})=>{const n="형식이 올바르지 않습니다.";return e.jsxs(e.Fragment,{children:[e.jsxs($e,{htmlFor:x,children:[r,e.jsx(Ne,{error:h,children:n})]}),e.jsx(Ue,{value:s,type:c,name:x,id:x,disabled:C,error:h,onChange:m,placeholder:g})]})},Qe=({history:s,type:r,onSubmit:c,message:x,onChangeMessage:h,modalVisible:m,handleModalOpen:g,handleModalClose:C,userInfo:n,onUpdateMemberRoleBySelf:K,roles:k,onWithdraw:Q})=>{const W=Ie[r],[u,X,F]=o(n?n.loginID:"",ve),[d,Y,y]=o("",ke),[v,Z,z]=o(n?n.name:"",f),[j,O,E]=o(n?n.email:"",Fe),[b,ee,S]=o(n?n.phoneNumber:"",Ee),[_,te,A]=o(n?n.department:"",f),[L,ne,I]=o(n?n.studentID:"",f),[p,re,H]=o(n?n.introduction:"",f),[P,ae]=U.useState(n&&n.profileImageURL?n.profileImageURL:T[0]),[R,oe]=o(n?n.role:"MEMBER",f),[w,ie]=U.useState(""),[$,q]=U.useState(!1),[G,le,J]=o("",Se),se=t=>{if(d!==t){q(!0);return}q(!1)},de=t=>{ie(t.target.value),se(t.target.value)},ce=()=>!(F||!u||y||!d||$||!w||z||!v||E||!j||S||!b||A||!_||I||!L||H||!p),xe=()=>!(y||!d||$||!w||E||!j||S||!b||H||!p),he=()=>!(F||!u||y||!d),N=()=>{h("모든 값을 올바르게 입력해주세요.")},pe=V(()=>{if(!he()){N(),g();return}c({id:u,password:d})},1e3),me=V(()=>{if(!ce()){N(),g();return}c({id:u,password:d,passwordCheck:w,name:v,email:j,department:_,studentId:L,phoneNumber:b,introduction:p,profileImageURL:P})},1e3),ge=V(()=>{if(!xe()){N(),g();return}c({name:v,password:d,passwordCheck:w,email:j,phoneNumber:b,introduction:p,profileImageURL:P})},1e3),ue=t=>{t.preventDefault(),r==="login"&&pe(),r==="register"&&me(),r==="update"&&ge()},je=t=>{ae(T[t.target.value])},be=t=>{t.preventDefault(),K({role:R})},we=t=>{t.preventDefault(),Q({role:R})};return e.jsxs(e.Fragment,{children:[e.jsx(Re,{visible:m,onConfirm:C,onCancel:C,message:x}),e.jsx(Le,{children:e.jsxs(Pe,{children:[e.jsx(B,{children:e.jsx("h2",{className:"form_list_title",children:W})}),e.jsxs(D,{children:[e.jsx(i,{valueText:u,labelText:"아이디",typeText:"text",nameText:"id",error:F,disabledCondition:r==="update",onChangeFunc:X,placeholderText:"영/숫자 4~12자리"}),e.jsx(i,{valueText:d,labelText:"비밀번호",typeText:"password",nameText:"password",error:y,onChangeFunc:Y,placeholderText:"8자리 이상"}),r!=="login"&&e.jsx(i,{valueText:w,labelText:"비밀번호 확인",typeText:"password",nameText:"password_check",error:$,onChangeFunc:de,placeholderText:"8자리 이상"}),r!=="login"&&e.jsxs(e.Fragment,{children:[e.jsx(i,{valueText:v,labelText:"이름",typeText:"text",nameText:"name",error:z,disabledCondition:r==="update",onChangeFunc:Z,placeholderText:"ex) 김풀씨"}),e.jsx(i,{valueText:j,labelText:"이메일",typeText:"email",nameText:"email",error:E,onChangeFunc:O,placeholderText:"ex) email@example.com"}),e.jsx(i,{valueText:b,labelText:"전화번호",typeText:"text",nameText:"phoneNumber",error:S,onChangeFunc:ee,placeholderText:"ex) 010-0000-0000"}),e.jsx(i,{valueText:_,labelText:"소속 학과",typeText:"text",nameText:"department",error:A,onChangeFunc:te,disabledCondition:r==="update",placeholderText:"ex) 컴퓨터과학과"}),e.jsx(i,{valueText:L,labelText:"학번",typeText:"text",nameText:"studentId",error:I,onChangeFunc:ne,disabledCondition:r==="update",placeholderText:"ex) 2021000000"}),e.jsx("label",{children:"프로필 이미지"}),e.jsx(Be,{children:[0,1,2,3,4].map(t=>e.jsxs(De,{children:[e.jsx("input",{type:"radio",value:t,onChange:je,checked:P===T[t]}),e.jsx(Me,{src:_e(T[t])})]},t))}),e.jsx("label",{htmlFor:"introduction",children:"자기소개"}),e.jsx(Ve,{value:p,name:"introduction",id:"introduction",cols:"30",rows:"5",onChange:re,placeholder:"자기 소개를 적어주세요",children:p})]}),e.jsx(M,{onClick:ue,children:W})]}),r==="login"&&e.jsx(Ae,{to:`/${Ce.PASSWORD}`,children:"비밀번호를 잊어버리셨나요?"}),r==="update"&&e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsx("h2",{className:"form_list_title",children:"회원 상태 변경"})}),e.jsx(D,{children:e.jsxs(e.Fragment,{children:[e.jsx(We,{value:R,onChange:oe,children:k==null?void 0:k.map(t=>e.jsx("option",{value:t.name,children:t.description},t.name))}),e.jsx(M,{onClick:t=>{be(t)},style:{marginLeft:"0.5rem"},children:"회원 상태 수정"})]})}),e.jsx(B,{children:e.jsx("h2",{className:"form_list_title",children:"회원 탈퇴"})}),e.jsxs(D,{children:[e.jsx(i,{valueText:G,labelText:"탈퇴 확인 문구 입력",typeText:"text",nameText:"confirmWithdrawal",error:J,onChangeFunc:le,placeholderText:"탈퇴를 확인합니다"}),e.jsx(ze,{onClick:t=>we(t),style:{marginLeft:"0.5rem"},disabled:J||!G,children:"탈퇴"})]})]})]})})]})};export{Qe as A,B as F,i as I,Re as R,M as S,D as a};
