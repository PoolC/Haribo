import{n as r,L as l,c as n,j as e,M as d,g as x}from"./index-04133603.js";const c=t=>Math.floor(Math.random()*t),p=r.li`
  list-style: none;
  margin: 5px;
`,h=r.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  width: 240px;
  height: 90px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.085);
  padding: 0px 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 80%;
    transition: 0.3s;
  }
`,g=r.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 20px 0 10px;
`,b=r.div`
  display: flex;
  flex-direction: column;
`,f=r.p`
  display: flex;
  align-items: flex-end;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`,M=r.p`
  display: flex;
  font-size: 0.8rem;
  font-weight: 300;
  margin-bottom: 0.3rem;
`,u=r.span`
  display: flex;
  font-size: 0.7rem;
  font-weight: 300;
  margin-left: 0.5rem;
`,j=r(l)`
  color: ${n.brown[1]};
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`,w=({member:t})=>{const{loginID:o,name:i,department:s,isAdmin:a,profileImageURL:m}=t;return e.jsx(j,{to:`/${d.MEMBER}/${o}`,children:e.jsx(p,{children:e.jsxs(h,{style:{background:n.mint[c(n.mint.length)]},children:[e.jsx(g,{src:x(m),alt:"member_thumbnail"}),e.jsxs(b,{children:[e.jsxs(f,{children:[i,a&&e.jsx(u,{children:"PoolC 임원"})]}),e.jsx(M,{children:s})]})]})})})};export{w as M};
