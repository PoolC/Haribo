import{k as i,f as d,n as e,c as o,a as s,j as n}from"./index-04133603.js";const u=i`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,g=i`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,h=i`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
    }
`,y=i`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
    }
`,w=d`
  animation-name: ${g};
`,j=e.div`
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
  animation-name: ${u};
  animation-fill-mode: forwards;

  ${a=>a.disappear&&w}
`,k=d`
  animation-name: ${y};
`,b=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${o.gray[0]};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 300px;
  height: 200px;
  border-radius: 20px;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${h};
  animation-fill-mode: forwards;

  ${a=>a.disappear&&k}
`,$=e.div`
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
`,C=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  text-align: center;
  word-break: keep-all;
  line-height: 1.5rem;
  flex: 2;
  font-weight: 300;
`,M=e.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,B=({contents:a,buttons:m,visible:t,onConfirm:Y,onCancel:c})=>{const[f,l]=s.useState(!1),[r,p]=s.useState(t);return s.useEffect(()=>{r&&!t&&(l(!0),setTimeout(()=>l(!1),250)),p(t)},[r,t]),!r&&!f?null:n.jsx(j,{disappear:!t,onClick:c,children:n.jsxs(b,{disappear:!t,className:"modal-container",onClick:x=>x.stopPropagation(),children:[n.jsx($,{children:n.jsx("i",{className:"fas fa-times",onClick:c})}),n.jsx(C,{children:a}),n.jsx(M,{children:m})]})})};export{B as M};
