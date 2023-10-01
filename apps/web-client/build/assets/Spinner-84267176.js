import{n,c as i,j as e}from"./index-04133603.js";const r=n.div`
  position: relative;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${t=>{if(t.small!==!0)return"40vh"}};
  margin-bottom: ${t=>{if(t.small!==!0)return"70vh"}};
`,s=n.i`
  color: ${i.mint[1]};
  font-size: 4rem;
`,l=({small:t=!1})=>e.jsx(r,{small:t,children:e.jsx(s,{className:"fas fa-spinner fa-10x fa-spin"})});export{l as S};
