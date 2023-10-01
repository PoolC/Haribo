import{j as e,J as N,B as o,E as l,g as T,T as h,b as k,q as u}from"./index-04133603.js";import{K as w}from"./index-989aed08.js";import{B as z,M as P}from"./MemberControllerService-d59d70d9.js";import{u as U}from"./useAppQueries-5dbbfa6b.js";import{B as W,a as q}from"./Block.styles-4dce9da8.js";import{g as p}from"./getFileUrl-459fc159.js";import{T as t}from"./index-d2de38b1.js";import{P as m}from"./progress-d8e94441.js";const A=k(({css:i})=>({whiteBlock:i`
    &.scope {
      padding: 30px 20px;
      align-items: stretch;
      gap: 40px;
    }
  `,wrapper:i`
    width: 100%;
    box-sizing: border-box;
  `,fullWidth:i`
    width: 100%;
  `,userName:i`
    font-size: 24px;
    font-weight: 700;
    position: relative;

    &:before {
      position: absolute;
      content: '';
      width: 100%;
      height: 7px;
      background-color: #47be9b;
      opacity: 0.5;
      bottom: 0;
      left: 0;
    }
  `,category:i`
    border-radius: 16px;
    background: #d9d9d9;
    padding: 8px;
    display: inline-block;
    font-weight: 700;
  `,badgeName:i`
    font-weight: 700;
  `,badgeDesc:i`
    font-weight: 300;
  `,badgeWrap:i`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
  `,tierProgressRow:i`
    display: flex;
    gap: 24px;
  `}));function F(){var x,j;const{styles:i}=A(),[{data:r},{data:a}]=U({queries:[{queryKey:u.badge.all,queryFn:z.getAllBadgeUsingGet},{queryKey:u.member.me,queryFn:P.getMeUsingGet}]}),c=((x=r==null?void 0:r.data)==null?void 0:x.filter(s=>s.category==="BAEKJOON"))??[],b=c.slice(0,c.length-5),g=c.slice(c.length-5),d=s=>e.jsxs("div",{children:[e.jsx("span",{className:i.badgeName,children:s.name}),e.jsx("br",{}),e.jsx("span",{className:i.badgeDesc,children:s.description})]}),n=(s,f)=>{const v=w(s).with("bronze",()=>"브론즈").with("silver",()=>"실버").with("gold",()=>"골드").with("platinum",()=>"플래티넘").with("diamond",()=>"다이아몬드").with("ruby",()=>"루비").exhaustive(),y=w(s).with("bronze",()=>"#ad5600").with("silver",()=>"#435f7a").with("gold",()=>"#ec9a00").with("platinum",()=>"#27e2a4").with("diamond",()=>"#00b4fc").with("ruby",()=>"#ff0062").exhaustive();return e.jsxs(o,{direction:"vertical",size:0,className:i.wrapper,children:[e.jsx(t.Title,{level:5,children:v}),e.jsxs(t.Text,{children:[f,"개 / 10개"]}),e.jsx(m,{percent:f/10*100,showInfo:!1,strokeColor:y})]})};return e.jsx(W,{children:e.jsxs(q,{className:N(i.whiteBlock,"scope"),children:[e.jsxs(o,{className:i.wrapper,size:"middle",children:[e.jsx(l,{size:80,src:T(a==null?void 0:a.profileImageURL)}),e.jsxs(o,{children:[e.jsxs(t.Text,{className:i.userName,children:[a==null?void 0:a.name,"님"]}),e.jsx(t.Text,{children:"의 뱃지함"})]})]}),e.jsxs(o,{direction:"vertical",size:"middle",className:i.fullWidth,children:[e.jsx("div",{children:e.jsx(t.Text,{className:i.category,children:"Attendance"})}),e.jsx("div",{className:i.badgeWrap,children:(j=r==null?void 0:r.data)==null?void 0:j.filter(s=>s.category==="ATTENDANCE").map(s=>e.jsx(h,{title:d(s),children:e.jsx(l,{src:p(s.imageUrl),alt:s.name})},s.id))}),e.jsxs(o,{direction:"vertical",size:0,className:i.wrapper,children:[e.jsx(t.Title,{level:5,children:"출석 횟수(누적)"}),e.jsxs(t.Text,{children:[(r==null?void 0:r.attendance)??0,"일 / 30일"]}),e.jsx(m,{percent:((r==null?void 0:r.attendance)??0)/30*100,showInfo:!1,strokeColor:"#47be9b"})]})]}),e.jsxs(o,{direction:"vertical",size:"middle",className:i.fullWidth,children:[e.jsx("div",{children:e.jsx(t.Text,{className:i.category,children:"Baekjoon"})}),e.jsx("div",{className:i.badgeWrap,children:b.map(s=>e.jsx(h,{title:d(s),children:e.jsx(l,{src:p(s.imageUrl),alt:s.name})},s.id))}),e.jsxs(o,{direction:"vertical",size:0,className:i.wrapper,children:[e.jsx(t.Title,{level:5,children:"문제풀이 횟수(연속)"}),e.jsxs(t.Text,{children:[(r==null?void 0:r.baekjoon)??0,"일 / 50일"]}),e.jsx(m,{percent:((r==null?void 0:r.baekjoon)??0)/50,showInfo:!1,strokeColor:"#47be9b"})]}),e.jsx("div",{className:i.badgeWrap,children:g.map(s=>e.jsx(h,{title:d(s),children:e.jsx(l,{src:p(s.imageUrl),alt:s.name})},s.id))}),e.jsxs("div",{className:i.tierProgressRow,children:[n("bronze",(r==null?void 0:r.bronze)??0),n("platinum",(r==null?void 0:r.platinum)??0)]}),e.jsxs("div",{className:i.tierProgressRow,children:[n("silver",(r==null?void 0:r.silver)??0),n("diamond",(r==null?void 0:r.diamond)??0)]}),e.jsxs("div",{className:i.tierProgressRow,children:[n("gold",(r==null?void 0:r.gold)??0),n("ruby",(r==null?void 0:r.ruby)??0)]})]})]})})}export{F as default};
