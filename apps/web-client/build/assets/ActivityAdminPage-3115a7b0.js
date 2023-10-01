import{j as e,a as d,A as P,w as Q,u as X,l as Z,M as v}from"./index-04133603.js";import{t as ee}from"./toastui-react-editor-624e88e4.js";import{u as S,n as I,t as te}from"./throttle-6f972964.js";import{I as K,F as se}from"./FileUploadButton-f911d7ec.js";import{T as ne,a as ae,b as re,S as le,I as g,c as f,C as oe,d as M,H as V,e as ie,f as ce,P as de,B as he,g as Y,h as ue}from"./ActivityForm.styles-a98b89a9.js";import{B as xe,a as me}from"./Block.styles-4dce9da8.js";import{F as pe,a as je,b as ge,c as fe,S as Ce}from"./PostForm.styles-07abd509.js";import{M as De}from"./Modal-a94156ed.js";import{g as Fe,a as Te}from"./getFileUrl-459fc159.js";import{g as Se,c as Ie,u as Ee}from"./activity-2889ab5d.js";import{S as be}from"./Spinner-84267176.js";import{S as A,C as ve}from"./statusCode-196b1b17.js";const Ae=React.memo(({tag:t,onDeleteTag:a})=>{const i=()=>{a(t)};return e.jsxs(ne,{onClick:i,children:["#",t]})}),Be=({tags:t,onDeleteTag:a})=>e.jsx(ue,{children:t.map(i=>e.jsx(Ae,{tag:i,onDeleteTag:a},i))}),Re=({activity:t,onCreateActivity:a,onUpdateActivity:i,errorMessage:B,buttons:R,errorModalVisible:O,onCloseErrorModal:y})=>{const k=d.useRef(),[C,w]=S(t?t.title:"",I),[u,N]=d.useState(t?t.description:""),[E,L]=S(t?t.startDate:"",I),[D,F]=d.useState(t?t.seminar:!0),[T,U]=S(t?t.classHour:"",I),[n,r]=S(t?t.hour:"",I),[h,b]=S(t?t.capacity:"",I),[l,x]=d.useState(t?t.fileList:[]),[c,m]=d.useState(t?t.tags.map(s=>s.name):[]),[p,o]=S("",I),W=s=>{const H=k.current.getInstance().getMarkdown();N(H)},_=s=>{s.preventDefault(),p&&(m([...c.filter(j=>j!==p),p]),s.target.value="",o(s))},q=s=>{m(c.filter(j=>j!==s))},z=te(s=>{s.preventDefault(),a({title:C,description:u,startDate:E,seminar:D,classHour:T,hour:n,capacity:h,tags:c,fileList:l})},1e3),G=s=>{s.preventDefault(),i({title:C,description:u,startDate:E,seminar:D,classHour:T,hour:n,capacity:h,tags:c,fileList:l})},$=s=>{F(s.target.value==="seminar")},J=(s,j)=>{s.preventDefault(),x(l.filter(H=>H!==j))};return e.jsxs(e.Fragment,{children:[e.jsx(De,{contents:B,buttons:R,visible:O,onConfirm:y,onCancel:y}),e.jsx(xe,{children:e.jsxs(me,{children:[e.jsx(ae,{children:e.jsxs(re,{children:["세미나/스터디 ",t?"수정":"개설"]})}),e.jsxs(le,{autoComplete:"off",children:[e.jsx(g,{style:{margin:"0"},children:e.jsx(f,{children:e.jsx(K,{valueText:C,labelText:"세미나/스터디 제목",typeText:"text",nameText:"title",onChangeFunc:w,placeholderText:"ex) 파이썬 기초 세미나"})})}),e.jsx(g,{children:e.jsx(f,{children:e.jsx(K,{valueText:E,labelText:"시작일",typeText:"date",nameText:"startDate",onChangeFunc:L,placeholderText:"YYYY-MM-DD"})})}),e.jsx(g,{children:e.jsxs(f,{children:[e.jsx("label",{htmlFor:"seminar",children:"형태"}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"seminar",value:"seminar",checked:D===!0,onChange:$}),e.jsx("span",{children:"세미나"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"seminar",value:"study",checked:D!==!0,onChange:$}),e.jsx("span",{children:"스터디"})]})]})}),e.jsx(g,{children:e.jsxs(f,{children:[e.jsx("label",{htmlFor:"capacity",children:"정원"}),e.jsxs(oe,{children:[e.jsx(M,{value:h,type:"number",name:"capacity",onChange:b,placeholder:"ex) 10"}),e.jsx("span",{children:" 명"})]})]})}),e.jsx(g,{children:e.jsxs(f,{children:[e.jsx("label",{htmlFor:"classHour",children:"시간"}),e.jsxs(V,{children:[e.jsx(M,{value:T,type:"text",name:"classHour",onChange:U,placeholder:"ex) 매주 금요일 14시"}),e.jsx("span",{children:"에"})]}),e.jsxs(V,{children:[e.jsx(M,{value:n,type:"number",name:"hour",onChange:r,placeholder:"ex) 2",style:{width:"4rem"}}),e.jsx("span",{children:"시간 진행"})]})]})}),e.jsx(g,{children:e.jsxs(f,{children:[e.jsx("label",{htmlFor:"tag",children:"태그"}),e.jsxs("p",{children:["난이도, 다루는 내용, 분야 등",e.jsx("br",{}),"ex) #기초 #파이썬 #웹 #프론트엔드"]}),e.jsxs(ie,{children:[e.jsx(M,{value:p,onChange:o,type:"text",name:"tag",placeholder:"ex) 기초"}),e.jsx(P,{onClick:_,children:"추가"})]}),e.jsx(ce,{children:"추가된 태그 목록"}),e.jsx("p",{children:"삭제하고 싶은 태그를 클릭하면 삭제됩니다"}),e.jsx(Be,{tags:c,onDeleteTag:q})]})}),e.jsx(g,{children:e.jsxs(f,{children:[e.jsx("label",{htmlFor:"activityTitle",children:"계획서"}),e.jsxs(de,{children:[e.jsx(ee.Editor,{initialEditType:"wysiwyg",initialValue:u,ref:k,onChange:s=>W(),style:{width:"100%"}}),e.jsx(pe,{style:{width:"100%"},children:"첨부된 파일 목록"}),e.jsx(je,{style:{width:"100%",maxWidth:"100%"},children:(l==null?void 0:l.length)!==0?l.map(s=>e.jsxs(ge,{children:[e.jsx("a",{href:Fe(s),children:Te(s)}),e.jsx(fe,{onClick:j=>J(j,s),children:e.jsx(Ce,{className:"far fa-trash-alt"})})]},s)):"첨부된 파일 없음"}),e.jsx(he,{children:e.jsx(se,{onSubmit:x,files:l,multiple:!0})})]})]})}),t?e.jsx(Y,{onClick:G,children:"수정"}):e.jsx(Y,{onClick:z,children:"제출"})]})]})})]})},ye=({match:t,history:a})=>{const i=t.params.activityID,[B,R]=d.useState(!0),[O,y]=d.useState(null),[k,C]=d.useState(!1),[w,u]=d.useState(null),N=X(n=>n.auth),{user:{memberId:E}}=N;d.useEffect(()=>{i?Se(i).then(n=>{n.status===A.OK&&(Z().then(r=>{if(r.status===A.OK&&r.data.isActivated===!1){a.push(`/${v.FORBIDDEN}`);return}if(r.status===A.OK&&r.data.loginID!==n.data.data.host.loginID){a.push(`/${v.FORBIDDEN}`);return}}).catch(r=>{console.error(r.message),a.push(`/${v.FORBIDDEN}`)}),y(n.data.data),R(!1))}):R(!1)},[i,E,a]);const L=({title:n,description:r,startDate:h,seminar:b,classHour:l,hour:x,capacity:c,tags:m,fileList:p})=>{if(!n||!r||!h||!l||!x||!c||!m){u("모든 항목을 입력하세요"),F();return}Ie({title:n,description:r,startDate:h,seminar:b,classHour:l,hour:x,capacity:c,tags:m,fileList:p}).then(o=>{o.status===A.OK&&a.push("/activities")}).catch(o=>{console.error(o.response.data),o.response.data.status===ve.FORBIDDEN&&a.push(`/${v.FORBIDDEN}`),u("오류가 발생했습니다"),F()})},D=({title:n,description:r,startDate:h,seminar:b,classHour:l,hour:x,capacity:c,tags:m,fileList:p})=>{if(!n||!r||!h||!l||!x||!c||!m){u("모든 항목을 입력하세요"),F();return}Ee({activityID:i,title:n,description:r,startDate:h,seminar:b,classHour:l,hour:x,capacity:c,tags:m,fileList:p}).then(o=>{o.status===A.OK&&a.push("/activities")}).catch(o=>{console.error(o.response.data),o.response.data.status===403&&a.push(`/${v.FORBIDDEN}`),u("오류가 발생했습니다"),F()})},F=()=>{C(!0)},T=n=>{n.preventDefault(),C(!1)},U=e.jsx(P,{onClick:T,children:"확인"});return e.jsxs(e.Fragment,{children:[B&&e.jsx(be,{}),!B&&e.jsx(Re,{activity:O,onCreateActivity:L,onUpdateActivity:D,errorMessage:w,buttons:U,errorModalVisible:k,onCloseErrorModal:T})]})},ke=Q(ye),We=()=>e.jsx(ke,{});export{We as default};
