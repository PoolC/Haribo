import{b as n,c as r,j as s,J as a}from"./index-04133603.js";const l=n(({css:t})=>({twoColumnsContainerBlock:t`
    position: relative;
    top: 0;
    width: 90%;
    left: 5%;
    right: 5%;
    display: flex;
    margin: 0;
    @media (max-width: 768px) {
      margin-bottom: 500px;
      flex-direction: column;
    }
  `,block:t`
    position: relative;
    display: flex;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    justify-content: center;
    margin: 0 0 300px 0;
    @media (max-width: 768px) {
      margin-bottom: 500px;
    }
  `,whiteBlock:t`
    width: 90%;
    margin: 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-shadow: 0 0 20px ${r.gray[1]};
    border-radius: 50px;
    padding: 60px 0;
    min-height: 50vh;
    max-width: 1366px;
    & > .block_title {
      margin-bottom: 3rem;
    }
  `,whiteNarrowBlock:t`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-shadow: 0 0 20px ${r.gray[1]};
    flex: 1;
    border-radius: 50px;
    padding: 40px 20px;
    min-height: 50vh;
  `})),m=({children:t,className:o,...e})=>{const{styles:i}=l();return s.jsx("div",{className:a(o,i.twoColumnsContainerBlock),...e,children:t})},x=({children:t,className:o,...e})=>{const{styles:i}=l();return s.jsx("div",{className:a(o,i.block),...e,children:t})},d=({children:t,className:o,...e})=>{const{styles:i}=l();return s.jsx("div",{className:a(o,i.whiteBlock),...e,children:t})},p=({children:t,className:o,...e})=>{const{styles:i}=l();return s.jsx("div",{className:a(o,i.whiteNarrowBlock),...e,children:t})};export{x as B,m as T,p as W,d as a};
