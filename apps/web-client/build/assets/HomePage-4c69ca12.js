import{r as x,O as h,n,c,j as e,w as S,M as _,L as E,a as s,b as N,u as $,q as P,P as B}from"./index-04133603.js";import{u as U}from"./useAppQueries-5dbbfa6b.js";import{P as q}from"./ProjectCard-94f0de7a.js";import{g as L}from"./getEmptyArray-f9e76269.js";import{S as A}from"./Skeleton-bb2403db.js";import"./getFileUrl-459fc159.js";class D{static findProjectsUsingGet(){return x(h,{method:"GET",url:"/project"})}static addNewProjectUsingPost({requestBody:t}){return x(h,{method:"POST",url:"/project",body:t})}static findOneProjectUsingGet({projectId:t}){return x(h,{method:"GET",url:"/project/{projectID}",path:{projectID:t}})}static updateProjectUsingPut({projectId:t,requestBody:a}){return x(h,{method:"PUT",url:"/project/{projectID}",path:{projectID:t},body:a})}static deleteOneProjectUsingDelete({projectId:t}){return x(h,{method:"DELETE",url:"/project/{projectID}",path:{projectID:t}})}}const z=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95vw;
  max-width: 1366px;
  max-height: 400px;
  margin: 0px 0 40px 0;
`,M=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  border-radius: 50px;
  box-shadow: ${c.gray[1]};
  height: 50vh;
  overflow: hidden;
  max-height: 400px;
`,O=n.img`
  height: 50vh;
  max-width: 1366px;
  max-height: 400px;
  border-radius: 50px;
`;n.button`
  position: relative;
  font-size: 1rem;
  color: ${c.brown[1]};
  opacity: 50%;
  transition: 0.3s;
  &:hover {
    opacity: 100%;
    transition: 0.3s;
  }
  &.carousel_prev {
    left: 30px;
  }
  &.carousel_next {
    right: 30px;
  }
`;const T=()=>e.jsx(z,{children:e.jsx(M,{children:e.jsx(O,{src:"/images/main-carousel-image.png",alt:"main_carousel_image"})})}),G=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95vw;
  max-width: 1366px;
  margin: 0px 0 10px 0;
`,F=n.div`
  cursor: pointer;
  display: flex;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  width: 95%;
  border-radius: 10px;
  box-shadow: ${c.gray[1]};
  height: 60px;
  background-color: ${c.mint[2]};
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    opacity: 0.75;
    //background-color: ${c.mint[1]};
  }
`,K=({history:r})=>{const t=()=>{r.push(`/${_.APPLY}`)};return e.jsx(G,{children:e.jsx(F,{onClick:t,children:"PoolC 신입 모집 지원하러 가기 ✨"})})},H=S(K),V=n.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0px 0 300px 0;
  max-width: 1366px;
  @media (max-width: 576px) {
    margin-bottom: 500px;
  }

  & > .project_container_title {
    padding-left: 20px;
    width: 90%;
    font-weight: 700;
    margin-bottom: 30px;
    color: ${c.brown[1]};
  }
`,W=n(E)`
  color: ${c.brown[1]};
`,Q=n.ul`
  width: 90%;
  display: flex;
  align-items: center;
  overflow: scroll;
  scrollbar-color: none;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`,Y=n.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 52%;
  left: 3.5%;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2rem;
  background-color: white;
  z-index: 10;
  text-decoration: none;
  font-size: 1rem;
  color: ${c.brown[1]};
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%);
  @media (max-width: 768px) {
    display: none;
  }
  &:hover {
    text-decoration: none;
  }
`,J=n.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  top: 52%;
  right: 3.5%;
  border-radius: 2rem;
  background-color: white;
  z-index: 10;
  text-decoration: none;
  font-size: 1rem;
  color: ${c.brown[1]};
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%);
  @media (max-width: 768px) {
    display: none;
  }
  &:hover {
    text-decoration: none;
  }
`,X=({projects:r})=>{const t=s.useRef(null),a=s.useRef(null),m=s.useRef(null),f=s.useRef(null),j=s.useRef(null),w=s.useRef(null),b=s.useRef(null),u=s.useRef(null),y=[a,m,f,j,w,b,u],[d,g]=s.useState(0);s.useEffect(()=>{let i={root:t.current,rootMargin:"0px",threshold:.3};const o=(I,R)=>{I.forEach(p=>{p.isIntersecting&&p.boundingClientRect.x<0&&g(Number(p.target.id.replace("recent-project-card",""))),p.isIntersecting||p.boundingClientRect.x<0&&g(Number(p.target.id.replace("recent-project-card",""))+1),y.forEach(v=>{v.current&&R.observe(v.current)})})},l=new IntersectionObserver(o,i);return a.current&&l.observe(a.current),()=>l&&l.disconnect()},[t]);const k=()=>{let i=Math.floor(t.current.getBoundingClientRect().width/270);const o=d-i<0?0:d-i;g(o),document.querySelector(`#recent-project-card${o}`).scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},C=()=>{let i,o,l=Math.floor(t.current.getBoundingClientRect().width/270);o=d+l>6?6:d+l,g(o),i=document.querySelector(`#recent-project-card${o}`),i.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})};return e.jsx(e.Fragment,{children:e.jsxs(V,{children:[e.jsx(Y,{index:d,onClick:k,children:e.jsx("i",{className:"fas fa-chevron-left"})}),e.jsx("h3",{className:"project_container_title",children:e.jsx(W,{to:"/projects",children:"Recent Projects"})}),e.jsx(Q,{className:"project_card_container",ref:t,children:r.map((i,o)=>e.jsx("div",{id:`recent-project-card${o}`,ref:y[o],children:e.jsx(q,{project:i})},i.id))}),e.jsx(J,{index:d,onClick:C,children:e.jsx("i",{className:"fas fa-chevron-right"})})]})})},Z=N(({css:r})=>({block:r`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1366px;
  `,skeletonWrap:r`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
    gap: 20px;
    box-sizing: border-box;
  `})),se=()=>{const{styles:r}=Z(),[{data:t},{data:a}]=U({queries:[{queryKey:P.poolc.poolc,queryFn:B.findPoolcUsingGet},{queryKey:P.project.all,queryFn:D.findProjectsUsingGet}]}),m=$(u=>u.auth),f=m.status.isLogin,j=m.user.role;if(!t||!a)return e.jsx("div",{className:r.block,children:e.jsx("div",{className:r.skeletonWrap,children:L(3).map(u=>e.jsx(A,{active:!0},u))})});const b=t.isSubscriptionPeriod==null||t.isSubscriptionPeriod===!0&&t.applyUri==null||t.isSubscriptionPeriod===!1||f&&j!=="UNACCEPTED";return e.jsxs("div",{className:r.block,children:[e.jsx(T,{}),b?null:e.jsx(H,{}),e.jsx(X,{projects:a.data.slice(0,7)})]})};export{se as default};
