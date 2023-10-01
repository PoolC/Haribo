import{j as t,A as b,k as C,n,c as h,f as D,a as x,i as V,u as v}from"./index-04133603.js";import{B as z,a as F}from"./Block.styles-4dce9da8.js";import{S as M}from"./Spinner-84267176.js";import{M as N}from"./Modal-a94156ed.js";import{g as O}from"./getFileUrl-459fc159.js";import{g as R,b as U,r as T}from"./book-edd4aa75.js";import{g as K}from"./getDateString-8e08c6d9.js";import{S as w}from"./statusCode-196b1b17.js";const _=({bookTitle:e,status:m,visible:c,onConfirm:a,onCancel:r})=>{const l=m==="AVAILABLE"?"대출":"반납",d=`<${e}>을(를) ${l}하시겠습니까?`,o=t.jsx(b,{onClick:a,children:l});return t.jsx(N,{contents:d,buttons:o,visible:c,onConfirm:a,onCancel:r})},P=C`
  from {
    height: 0;
  }
  to {
    height: 100px;
  }
`,W=C`
  from {
    height: 100px;
  }
  to {
    height: 0;
    }
`,q=n.li`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,G=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${h.mint[1]};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 80%;
  box-shadow: 0px -10px 10px ${h.gray[1]};
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s;
  ${e=>!e.open&&"border-radius: 20px;"}

  &:hover {
    opacity: 80%;
    transition: opacity 0.3s;
  }
`,H=n.div`
  flex: 3;
  margin: 0 10px;
`,J=n.p`
  width: 90%;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 5px;
  word-break: keep-all;
  line-height: 1.1rem;
`,Q=n.p`
  width: 90%;
  font-weight: 300;
  font-size: 0.8rem;
  margin-bottom: 5px;
`,X=n.p`
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  flex: 1;
  align-items: center;
  @media (max-width: 576px) {
    margin: auto;
    text-align: center;
  }
`,Y=n.p`
  display: flex;
  justify-content: flex-end;
  min-width: 5rem;
  font-weight: 500;
  font-size: 0.9rem;
  flex: 1;
  & > .fa-caret-down,
  & > .fa-caret-up {
    margin-left: 8px;
  }
`,Z=D`
  animation-name: ${W};
`,tt=n.div`
  background-color: ${h.mint[0]};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 80%;
  box-shadow: 0 10px 10px ${h.gray[1]};
  padding: 10px 20px;
  transition: 0.3s;
  display: ${e=>e.open?"flex":"none"};

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${P};
  animation-fill-mode: forwards;

  ${e=>e.disappear&&Z}
`,et=n.div`
  display: flex;
  margin-right: 20px;
  align-items: center;
  justify-content: start;
`,ot=n.img`
  width: 70px;
  height: auto;
`,nt=n.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  margin-bottom: 5px;
`,st=n.div`
  display: flex;
  flex: 7;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,it=n.p`
  font-size: 0.8rem;
  display: flex;
  flex: 1;
  align-items: center;
  @media (max-width: 576px) {
    margin: auto;
  }
  & > span {
    color: ${h.brown[0]};
    margin-right: 5px;
  }
`,at=n.p`
  font-size: 0.8rem;
  display: flex;
  flex: 1;
  align-items: center;
  @media (max-width: 576px) {
    margin: auto;
    text-align: center;
  }
  & > span {
    color: ${h.brown[0]};
    margin-right: 5px;
  }
`,A=n(b)`
  flex: 0.5;
  height: 2rem;
  margin: auto;
  @media (max-width: 576px) {
    flex: 2;
  }
`,rt=({book:e,isLogin:m,user:c,onBorrowBook:a,onReturnBook:r})=>{const{id:l,title:d,author:o,imageURL:u,status:s,info:p,borrower:i,borrowDate:L}=e,[y,B]=x.useState(!1),[f,j]=x.useState(!1),[I,g]=x.useState(!1);x.useEffect(()=>{f&&(B(!0),setTimeout(()=>B(!1),250))},[f]);const S=()=>{j(!f)},k=()=>{g(!0)},E=()=>{s==="AVAILABLE"?a(l,s):r(l,s),g(!1)},$=()=>{g(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(_,{visible:I,bookTitle:d,status:s,onConfirm:E,onCancel:$}),t.jsxs(q,{children:[t.jsxs(G,{open:f,animate:y,onClick:S,children:[t.jsxs(H,{children:[t.jsx(J,{children:d}),t.jsx(Q,{children:o})]}),t.jsxs(Y,{children:[s==="AVAILABLE"?"이용 가능":"대출중",f?t.jsx("i",{className:"fas fa-caret-up"}):t.jsx("i",{className:"fas fa-caret-down"})]})]}),t.jsxs(tt,{open:f,children:[t.jsx(et,{children:t.jsx(ot,{src:O(u),alt:"book_image"})}),t.jsxs(st,{children:[t.jsxs(nt,{children:[s!=="AVAILABLE"&&t.jsxs(it,{children:[t.jsx("span",{children:"대출자"})," ",i.name]}),s!=="AVAILABLE"&&t.jsxs(at,{children:[t.jsx("span",{children:"대출일"})," ",L]}),p&&t.jsxs(X,{children:["[",p,"]"]})]}),m&&V(c.role)&&(s==="AVAILABLE"?t.jsx(A,{onClick:k,children:"대출"}):c.memberId===(i==null?void 0:i.loginID)&&t.jsx(A,{onClick:k,children:"반납"}))]})]})]})]})},lt=n.ul`
  width: 100%;
  max-width: 1200px;
`,ct=({loading:e,books:m,member:c,onBorrowBook:a,onReturnBook:r})=>{const{status:{isLogin:l},user:d}=c;return t.jsx(t.Fragment,{children:t.jsx(z,{children:t.jsxs(F,{children:[t.jsx("h2",{className:"block_title",children:"보유 도서"}),e&&t.jsx(M,{}),!e&&t.jsx(lt,{children:m.map(o=>t.jsx(rt,{book:o,onBorrowBook:a,onReturnBook:r,isLogin:l,user:d},o.id))})]})})})},dt=()=>{const e=v(o=>o.auth),[m,c]=x.useState(!0),[a,r]=x.useState(null);x.useEffect(()=>{(async()=>{const o=await R();r(o.data.data),c(!1)})()},[]);const l=(o,u)=>{U(o).then(s=>{if(s.status===w.OK){const p=a.map(i=>i.id===o?{...i,status:"UNAVAILABLE",borrower:{loginID:e.user.memberId,name:e.user.name},borrowDate:K()}:i);r(p)}})},d=(o,u)=>{T(o).then(s=>{if(s.status===w.OK){const p=a.map(i=>i.id===o?{...i,status:"AVAILABLE",borrower:null,borrowDate:null}:i);r(p)}})};return t.jsx(t.Fragment,{children:t.jsx(ct,{loading:m,member:e,books:a,onBorrowBook:l,onReturnBook:d})})},jt=()=>t.jsx(dt,{});export{jt as default};
