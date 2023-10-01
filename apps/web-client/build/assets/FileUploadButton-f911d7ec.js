import{n,c as o,j as e,v as E,k as h,f as k,A as j,a as m}from"./index-04133603.js";import{M as I}from"./Modal-a94156ed.js";import{S as B}from"./statusCode-196b1b17.js";const D=n.label`
  margin: 2rem 0 1rem 0;
  font-weight: 400;
`,A=n.input`
  width: 15rem;
  outline: 0;
  border: 1px solid ${o.brown[0]};
  height: 2rem;
  border-radius: 2px;
  max-width: 320px;
  outline: ${o.gray[1]};
`,ie=({valueText:t,labelText:a,typeText:p,nameText:r,error:l,onChangeFunc:c,placeholderText:f,disabledCondition:s})=>e.jsxs(e.Fragment,{children:[e.jsx(D,{htmlFor:r,children:a}),e.jsx(A,{autoComplete:"off",value:t,type:p,name:r,id:r,disabled:s,error:l,onChange:c,placeholder:f})]}),N=t=>E.post("/files",t),V=h`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,z=h`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,U=h`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
    }
`,_=h`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
    }
`,L=k`
  animation-name: ${z};
`,Y=n.div`
  position: fixed;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${V};
  animation-fill-mode: forwards;

  ${t=>t.disappear&&L}
`,O=k`
  animation-name: ${_};
`,P=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${o.gray[0]};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 300px;
  height: 280px;
  border-radius: 20px;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${U};
  animation-fill-mode: forwards;

  ${t=>t.disappear&&O}
`,T=n.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${o.mint[0]};
  width: 300px;
  height: 35px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  & > .fa-times {
    cursor: pointer;
    margin-right: 15px;
    color: ${o.brown[1]};
    transition: 0.3s ease-in;
    &:hover {
      color: ${o.brown[0]};
      transition: 0.3s ease-in;
    }
  }
`,H=n.p`
  display: flex;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 1rem 0 1rem;
  justify-content: center;
`,K=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  text-align: center;
  word-break: keep-all;
  line-height: 1.5rem;
  flex: 2;
  font-weight: 300;
`,R=n.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`,X=n.div`
  width: 80%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`,Z=n.label`
  &.browse-file {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${o.brown[1]};
    color: ${o.gray[0]};
    border-radius: 8px;
    transition: 0.3s;
    font-weight: 700;
    font-size: 0.8rem;
    width: 5rem;
    height: 2rem;
    margin: 0;
    &:hover {
      background-color: ${o.brown[0]};
      transition: 0.3s;
    }
  }
`,q=n.input`
  position: relative;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
  outline: 0;
`,S=n.div`
  margin: 0 0 0.5rem 0;
  width: 16rem;
  padding: 0.5rem;
  min-height: 5rem;
  border: 1px solid ${o.gray[2]};
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  font-size: 0.8rem;
  font-weight: 300;
`,G=n(j)`
  background-color: ${o.mint[2]};
  margin: 0;
  transition: 0.3s;
  width: 6rem;
  height: 2rem;
  &:hover {
    background-color: ${o.mint[3]};
    transition: 0.3s;
  }
`,J=n.div`
  display: flex;
  flex-direction: column;
  margin: 0.2rem 0 0.5rem 0;
`,Q=n.p`
  display: flex;
  font-size: 0.7rem;
  padding: 0;
`,W=({visible:t,file:a,onUploadFile:p,onBrowseFile:r,onCancel:l})=>{const[c,f]=m.useState(!1),[s,y]=m.useState(t);return m.useEffect(()=>{s&&!t&&(f(!0),setTimeout(()=>f(!1),250)),y(t)},[s,t]),!s&&!c?null:e.jsx(Y,{disappear:!t,onClick:l,children:e.jsxs(P,{disappear:!t,onClick:u=>u.stopPropagation(),children:[e.jsx(T,{children:e.jsx("i",{className:"fas fa-times",onClick:l})}),e.jsxs(K,{children:[e.jsx(H,{children:"파일 업로드"}),e.jsxs(R,{encType:"multipart/form-data",onSubmit:p,children:[e.jsxs(J,{children:[e.jsx(Q,{children:"선택된 파일"}),a?e.jsx(S,{children:a==null?void 0:a.name}):e.jsx(S,{children:"선택된 파일이 없습니다"})]}),e.jsxs(X,{children:[e.jsx(Z,{className:"browse-file",htmlFor:"my_file",onChange:r,children:"파일 찾기"}),e.jsx(G,{className:"upload-file",children:"이 파일 첨부"})]}),e.jsx(q,{type:"file",onChange:r,id:"my_file"})]})]})]})})},ee=["image/png","image/jpeg","application/pdf","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.ms-powerpoint"],ae=({files:t,onSubmit:a,multiple:p})=>{let r=new FormData;const[l,c]=m.useState(null),[f,s]=m.useState(!1),[y,u]=m.useState(!1),[C,x]=m.useState(null),F=i=>{if(i.preventDefault(),i.target.files[0].size>+{}.VITE_MAX_FILE_SIZE){x("첨부 가능한 최대 크기를 초과하였습니다."),g();return}if(!ee.includes(i.target.files[0].type)){x("png, jpg, jpeg, pdf, ppt, pptx 형식만 첨부 가능합니다."),g();return}c(i.target.files[0])},$=i=>{if(i.preventDefault(),i.stopPropagation(),l===null){x("파일을 선택해주세요"),g();return}s(!1),r.append("file",l),N(r).then(d=>{d.status===B.OK&&(c(d.data),p&&a([...t,d.data]),p||a(d.data))}).catch(d=>{var w;c(null),console.error(d.respoense),x((w=d.response)==null?void 0:w.data),g()})},v=i=>{i.preventDefault(),s(!0)},g=()=>{u(!0)},b=i=>{i.preventDefault(),u(!1)},M=e.jsx(j,{onClick:b,children:"확인"});return e.jsxs(e.Fragment,{children:[e.jsx(W,{visible:f,file:l,onUploadFile:$,onBrowseFile:F,onCancel:()=>s(!1)}),e.jsx(I,{contents:C,buttons:M,visible:y,onConfirm:b,onCancel:b}),e.jsx(j,{className:"file",onClick:v,style:{marginBottom:"1rem"},children:"파일 첨부"})]})};export{ae as F,ie as I,S as a};
