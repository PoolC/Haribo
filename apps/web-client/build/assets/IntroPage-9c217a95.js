import{w,j as t,M as x,d as I,n,c as i,a as m,S as k,R as p}from"./index-04133603.js";import{S as N}from"./Button.styles-3125295d.js";import{M as A,a as C,b as f}from"./Menu.styles-ee870f89.js";import{W as g}from"./Block.styles-4dce9da8.js";import{g as Q}from"./getFileUrl-459fc159.js";import{t as R}from"./toastui-react-editor-624e88e4.js";import{S as M}from"./Spinner-84267176.js";import{S as P}from"./statusCode-196b1b17.js";import{g as T}from"./info-3ae596a4.js";const y=({menus:o,location:s})=>{const d=s.pathname.replace("/intro","");return t.jsx(A,{children:t.jsx(C,{children:o.map(r=>d===r.url?t.jsx(f,{children:t.jsx(N,{to:`/${x.INTRO}${r.url}`,children:r.name})},r.url):t.jsx(f,{children:t.jsx(I,{to:`/${x.INTRO}${r.url}`,children:r.name})},r.url))})})},B=w(y),E=n.h2`
  margin-bottom: 4rem;
`,c=n.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  padding: 0 2rem;
`,l=n.span`
  color: ${i.red[0]};
  font-weight: 700;
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,a=n.span`
  color: ${i.mint[2]};
  font-weight: 700;
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,e=n.p`
  display: flex;
  font-weight: 300;
  font-size: 0.9rem;
  margin-bottom: 1.2rem;
  line-height: 1.2rem;
  word-break: keep-all;
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    flex-direction: column;
    & > span {
      margin-bottom: 0.5rem;
    }
  }
`,F=()=>t.jsxs(g,{children:[t.jsx(E,{children:"자주 묻는 질문"}),t.jsxs(c,{children:[t.jsxs(e,{children:[t.jsx(l,{children:"Q"}),"프로그래밍 초보자도 지원할 수 있나요?"]}),t.jsxs(e,{children:[t.jsx(a,{children:"A"}),"현재 동아리에 소속된 부원들도 모두 처음에는 초보자였습니다.",t.jsx("br",{}),"풀씨는 함께 프로그래밍을 배우기 위한 동아리이기 때문에 실력에 상관 없이 지원하셔도 괜찮습니다."]})]}),t.jsxs(c,{children:[t.jsxs(e,{children:[t.jsx(l,{children:"Q"}),"풀씨는 어떤 활동을 하나요?"]}),t.jsxs(e,{children:[t.jsx(a,{children:"A"}),"프로그래밍과 관련된 모든 활동을 합니다.",t.jsx("br",{}),"기초 프로그래밍 세미나, 웹 세미나, 게임 제작 세미나, 논문 스터디 등이 진행되어 왔습니다.",t.jsx("br",{}),"자세한 활동 내용을 확인하고 싶으시다면, 홈페이지 상단 Projects 탭이나 Seminars 탭을 클릭해주세요.",t.jsx("br",{}),"각 페이지에서 지금까지 진행했던 프로젝트 및 세미나&스터디의 내용을 확인하실 수 있습니다."]})]}),t.jsxs(c,{children:[t.jsxs(e,{children:[t.jsx(l,{children:"Q"}),"동아리 부원 중 타과생 비율은 어느정도 되나요?"]}),t.jsxs(e,{children:[t.jsx(a,{children:"A"}),"매 학기마다 타과생 비율이 달라지기 때문에 정확한 수치를 말씀드리는 것은 어렵습니다.",t.jsx("br",{}),"그러나 타과생 비율이 낮지 않습니다. 단과대와 학과에 상관 없이 지원하셔도 괜찮습니다. :)"]})]}),t.jsxs(c,{children:[t.jsxs(e,{children:[t.jsx(l,{children:"Q"}),"세미나&스터디의 장소와 시간은 어떻게 되나요?"]}),t.jsxs(e,{children:[t.jsx(a,{children:"A"}),"세미나&스터디마다 다르지만, 일반적으로 장소는 풀씨 동아리방에서 진행됩니다.",t.jsx("br",{}),"시간은 해당 세미나&스터디에 참여한 부원들이 협의를 통해 정합니다."]})]}),t.jsxs(c,{children:[t.jsxs(e,{children:[t.jsx(l,{children:"Q"}),"게임 개발과 기획을 해 본 적이 없는데 게임 제작 활동에 참여할 수 있나요?"]}),t.jsxs(e,{children:[t.jsx(a,{children:"A"}),"현재 게임 제작 활동에 참여중인 부원들도 처음에는 게임 관련 경험이 없는 경우가 많았습니다.",t.jsx("br",{}),"직접 참여하면서 배우는 것이 가능하니, 풀씨에 가입하셔서 같이 배우셔도 좋습니다."]})]}),t.jsxs(c,{children:[t.jsxs(e,{children:[t.jsx(l,{children:"Q"}),"풀씨의 활동은 게임 제작 위주로 진행되나요?"]}),t.jsxs(e,{children:[t.jsx(a,{children:"A"}),"그렇지 않습니다.",t.jsx("br",{}),"게임 제작 활동이 풀씨의 중요한 활동인 것은 맞습니다.",t.jsx("br",{}),"그러나 그 외에 알고리즘 문제 풀이(백준 등), 다양한 세미나 및 스터디, 프로젝트 등의 활동도 높은 비중을 두고 진행하고 있습니다."]})]}),t.jsxs(c,{children:[t.jsxs(e,{children:[t.jsx(l,{children:"Q"}),"풀씨에 구인 공고 게시 또는 홍보를 하고 싶은데, 어떻게 하면 되나요?"]}),t.jsxs(e,{children:[t.jsx(a,{children:"A"}),"홈페이지 하단에 회장의 연락처와 동아리 이메일이 있습니다.",t.jsx("br",{}),"해당 연락처로 문의를 주시면, 최대한 빠르게 답변드리도록 하겠습니다. :)"]})]})]}),L=()=>t.jsx(F,{}),b=n.h2`
  margin-bottom: 2rem;
`,O=n.div`
  margin: auto;
  margin-bottom: 3rem;
  word-break: keep-all;
  padding: 0 1rem;
  line-height: 1.5rem;
  max-width: 100%;
  overflow: auto;
  color: ${i.brown[1]};
  p,
  ul,
  ol {
    font-weight: 300;
    font-size: 0.9rem;
    color: ${i.brown[1]};
  }
  .tui-editor-contents ul li,
  .tui-editor-contents ol li {
    color: ${i.brown[1]};
  }
  .tui-editor-contents ul,
  .tui-editor-contents ol {
    padding-left: 1.5rem;
  }
  .tui-editor-contents h1,
  .tui-editor-contents h2,
  .tui-editor-contents h3,
  .tui-editor-contents h4,
  .tui-editor-contents h5,
  .tui-editor-contents h6 {
    margin: 0.5rem 0;
    line-height: 1.5rem;
    color: ${i.brown[1]};
  }
  .tui-editor-contents hr {
    margin: 1rem 0;
  }
  .tui-editor-contents img {
    max-width: 90%;
    margin: 1rem 0;
  }
  .tui-editor-contents p {
    margin: 10px 0;
    color: ${i.brown[1]};
  }
  a {
    max-width: 100%;
    word-break: break-all;
  }
  th {
    background-color: ${i.brown[0]};
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    & > span {
      margin-bottom: 0.5rem;
    }
  }
`,U=n.img`
  width: 70%;
  max-width: 400px;
`,v=({loading:o,introduction:s,locationUrl:d})=>t.jsxs(g,{children:[t.jsx(b,{children:"PoolC 소개"}),o&&t.jsx(M,{}),!o&&t.jsxs(t.Fragment,{children:[t.jsx(O,{children:t.jsx(R.Viewer,{initialValue:s})}),t.jsx(b,{children:"동아리방 위치"}),t.jsx(U,{src:Q(d)})]})]}),z=()=>{const[o,s]=m.useState(null),[d,r]=m.useState(null),[S,$]=m.useState(!0);return m.useEffect(()=>{T().then(u=>{u.status===P.OK&&(s(u.data.introduction),r(u.data.locationUrl),$(!1))})},[o]),t.jsx(t.Fragment,{children:t.jsx(v,{loading:S,introduction:o,locationUrl:d})})},q=n.h2`
  margin-bottom: 4rem;
`,h=n.h4`
  margin-bottom: 1rem;
`,j=n.p`
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 2rem;
`,V=()=>t.jsxs(g,{children:[t.jsx(q,{children:"SNS"}),t.jsx(h,{children:"카카오톡 채널"}),t.jsx(j,{children:"풀씨 PoolC"}),t.jsx(h,{children:"인스타그램"}),t.jsx(j,{children:"@poolc.official"}),t.jsx(h,{children:"페이스북"}),t.jsx(j,{children:"https://m.facebook.com/poolc.org/"}),t.jsx(h,{children:"이메일"}),t.jsx(j,{children:"poolc.official@gmail.com"})]}),W=()=>t.jsx(V,{}),K=n.div`
  position: relative;
  top: 0px;
  width: 90%;
  left: 5%;
  right: 5%;
  display: flex;
  margin: 0px 0 300px 0;
  @media (max-width: 768px) {
    margin-bottom: 600px;
    flex-direction: column;
  }
`,D=({location:o})=>{const s=[{name:"PoolC 소개",url:""},{name:"자주 묻는 질문",url:"/faq"},{name:"SNS",url:"/sns"}];return t.jsxs(K,{children:[t.jsx(B,{menus:s}),t.jsxs(k,{children:[t.jsx(p,{component:L,path:`/${x.INTRO}/faq`,exact:!0}),t.jsx(p,{component:W,path:`/${x.INTRO}/sns`,exact:!0}),t.jsx(p,{component:z,path:`/${x.INTRO}`,exact:!0})]})]})},nt=w(D);export{nt as default};
