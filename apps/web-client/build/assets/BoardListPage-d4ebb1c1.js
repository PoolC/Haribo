import{z as T,I as j,j as e,L as u,M as p,C as b,b as g,B as n,q as w,J as B}from"./index-04133603.js";import{B as C,a as v}from"./Block.styles-4dce9da8.js";import{G as f}from"./iconBase-6e77fd94.js";import{R as E,F as k}from"./index.esm-38c62699.js";import{P as N,g as o}from"./boardUtil-98055900.js";import{K as O}from"./index-989aed08.js";import{l as y}from"./index-3963ac94.js";import{S as R}from"./Skeleton-bb2403db.js";import{E as P,P as S}from"./index-be6001b4.js";import{T as A,a as L}from"./Table-cc0ea71e.js";import{T as d}from"./index-d2de38b1.js";import{u as z}from"./useSearchParams-02be6575.js";import"./DownOutlined-5e397386.js";import"./SearchOutlined-d77ecd25.js";import"./index-12cbf246.js";function I(a){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.263 2.177a1.75 1.75 0 0 1 2.474 0l2.586 2.586a1.75 1.75 0 0 1 0 2.474L19.53 10.03l-.012.013L8.69 20.378a1.753 1.753 0 0 1-.699.409l-5.523 1.68a.748.748 0 0 1-.747-.188.748.748 0 0 1-.188-.747l1.673-5.5a1.75 1.75 0 0 1 .466-.756L14.476 4.963ZM4.708 16.361a.26.26 0 0 0-.067.108l-1.264 4.154 4.177-1.271a.253.253 0 0 0 .1-.059l10.273-9.806-2.94-2.939-10.279 9.813ZM19 8.44l2.263-2.262a.25.25 0 0 0 0-.354l-2.586-2.586a.25.25 0 0 0-.354 0L16.061 5.5Z"}}]})(a)}function $(a){return f({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"}}]})(a)}const F=g(({css:a})=>({fullWidth:a`
    width: 100%;
  `,metaInfoArea:a`
    width: 100%;
    justify-content: space-between;
  `,search:a`
    max-width: 300px;
  `,link:a`
    display: block;
    width: 100%;
  `,topArea:a`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,wrapper:a`
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 8px;
  `,paginationWrap:a`
    display: flex;
    justify-content: center;
    margin-top: 10px;
  `}));function c({boardType:a,page:l}){const{styles:t}=F(),s=T({queryKey:w.post.all(a,l),queryFn:()=>N.viewPostsByBoardUsingGet({boardTitle:a,page:l})}),h=j(),m=r=>h.push(`/${p.BOARD}?${y.stringify({boardType:a,page:r})}`),x=[{render:(r,i)=>e.jsx(u,{to:`${p.BOARD}/${i.postId}`,className:t.link,children:e.jsxs(n,{direction:"vertical",className:t.fullWidth,size:"middle",children:[e.jsxs(n,{className:t.metaInfoArea,size:"middle",children:[e.jsxs(n,{children:[e.jsx(d.Text,{children:i.writerName}),e.jsx(d.Text,{type:"secondary",children:i.createdAt})]}),e.jsxs(n,{size:"middle",children:[e.jsxs(n,{children:[e.jsx(k,{}),i.likeCount]}),e.jsxs(n,{children:[e.jsx($,{}),i.commentCount??0]})]})]}),e.jsxs(n,{direction:"vertical",size:0,children:[e.jsx(d.Title,{level:5,children:i.title}),e.jsx(d.Text,{children:i.body})]})]})})}];return e.jsxs("div",{className:t.wrapper,children:[e.jsx("div",{className:t.topArea,children:e.jsx(u,{to:`/${p.BOARD}/write?${y.stringify({boardType:a})}`,children:e.jsx(b,{type:"primary",icon:e.jsx(I,{}),children:"글쓰기"})})}),O(s).with({status:"loading"},()=>e.jsx(R,{})).with({status:"error"},()=>e.jsx(E,{status:"500",subTitle:"에러가 발생했습니다."})).with({status:"success"},({data:r})=>r.length===0?e.jsx(P,{}):e.jsxs(e.Fragment,{children:[e.jsx(A,{dataSource:r,columns:x,showHeader:!1,pagination:!1}),e.jsx("div",{className:t.paginationWrap,children:e.jsx(S,{total:100,showSizeChanger:!1,onChange:m})})]})).exhaustive()]})}const J=g(({css:a})=>({whiteBlock:a`
    &.scope {
      padding: 30px 0;
    }
  `,wrapper:a`
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    box-sizing: border-box;
  `}));function ae(){const{styles:a}=J(),l=z(),t=l.get("boardType")??"NOTICE",s=Number(l.get("page")??1),h=j(),m=[{key:"NOTICE",label:o("NOTICE"),children:e.jsx(c,{boardType:"NOTICE",page:s})},{key:"FREE",label:o("FREE"),children:e.jsx(c,{boardType:"FREE",page:s})},{key:"JOB",label:o("JOB"),children:e.jsx(c,{boardType:"JOB",page:s})},{key:"PROJECT",label:o("PROJECT"),children:e.jsx(c,{boardType:"PROJECT",page:s})},{key:"CS",label:o("CS"),children:e.jsx(c,{boardType:"CS",page:s})}],x=r=>h.push(`/${p.BOARD}?boardType=${r}&page=1`);return e.jsx(C,{children:e.jsx(v,{className:B(a.whiteBlock,"scope"),children:e.jsx("div",{className:a.wrapper,children:e.jsx(L,{items:m,defaultActiveKey:t,onChange:x})})})})}export{ae as default};
