import{a as c,b8 as b,b9 as ye,am as pe,$ as N,aq as U,X as s,cf as ve,cg as Te,ch as he,V as G,Y as J,bq as Se,J as we,Q as z,_ as Ae}from"./index-04133603.js";var Re=c.createContext({});const Y=Re;var Ie=1/0,je="[object Symbol]",Ee=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Oe=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,y="\\ud800-\\udfff",B="\\u0300-\\u036f\\ufe20-\\ufe23",H="\\u20d0-\\u20f0",V="\\u2700-\\u27bf",q="a-z\\xdf-\\xf6\\xf8-\\xff",ke="\\xac\\xb1\\xd7\\xf7",Ne="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ue="\\u2000-\\u206f",ze=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",K="A-Z\\xc0-\\xd6\\xd8-\\xde",Q="\\ufe0e\\ufe0f",X=ke+Ne+Ue+ze,R="['’]",Le="["+y+"]",L="["+X+"]",g="["+B+H+"]",ee="\\d+",_e="["+V+"]",ne="["+q+"]",oe="[^"+y+X+ee+V+q+K+"]",w="\\ud83c[\\udffb-\\udfff]",Ze="(?:"+g+"|"+w+")",re="[^"+y+"]",I="(?:\\ud83c[\\udde6-\\uddff]){2}",j="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+K+"]",te="\\u200d",_="(?:"+ne+"|"+oe+")",$e="(?:"+l+"|"+oe+")",Z="(?:"+R+"(?:d|ll|m|re|s|t|ve))?",$="(?:"+R+"(?:D|LL|M|RE|S|T|VE))?",ae=Ze+"?",ue="["+Q+"]?",De="(?:"+te+"(?:"+[re,I,j].join("|")+")"+ue+ae+")*",ie=ue+ae+De,Me="(?:"+[_e,I,j].join("|")+")"+ie,Pe="(?:"+[re+g+"?",g,I,j,Le].join("|")+")",We=RegExp(R,"g"),Fe=RegExp(g,"g"),Ge=RegExp(w+"(?="+w+")|"+Pe+ie,"g"),Je=RegExp([l+"?"+ne+"+"+Z+"(?="+[L,l,"$"].join("|")+")",$e+"+"+$+"(?="+[L,l+_,"$"].join("|")+")",l+"?"+_+"+"+Z,l+"+"+$,ee,Me].join("|"),"g"),Ye=RegExp("["+te+y+B+H+Q+"]"),Be=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,He={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"ss"},Ve=typeof b=="object"&&b&&b.Object===Object&&b,qe=typeof self=="object"&&self&&self.Object===Object&&self,Ke=Ve||qe||Function("return this")();function Qe(e,n,o,t){var r=-1,a=e?e.length:0;for(t&&a&&(o=e[++r]);++r<a;)o=n(o,e[r],r,e);return o}function Xe(e){return e.split("")}function en(e){return e.match(Ee)||[]}function nn(e){return function(n){return e==null?void 0:e[n]}}var on=nn(He);function ce(e){return Ye.test(e)}function rn(e){return Be.test(e)}function tn(e){return ce(e)?an(e):Xe(e)}function an(e){return e.match(Ge)||[]}function un(e){return e.match(Je)||[]}var cn=Object.prototype,sn=cn.toString,D=Ke.Symbol,M=D?D.prototype:void 0,P=M?M.toString:void 0;function ln(e,n,o){var t=-1,r=e.length;n<0&&(n=-n>r?0:r+n),o=o>r?r:o,o<0&&(o+=r),r=n>o?0:o-n>>>0,n>>>=0;for(var a=Array(r);++t<r;)a[t]=e[t+n];return a}function fn(e){if(typeof e=="string")return e;if(bn(e))return P?P.call(e):"";var n=e+"";return n=="0"&&1/e==-Ie?"-0":n}function dn(e,n,o){var t=e.length;return o=o===void 0?t:o,!n&&o>=t?e:ln(e,n,o)}function xn(e){return function(n){n=p(n);var o=ce(n)?tn(n):void 0,t=o?o[0]:n.charAt(0),r=o?dn(o,1).join(""):n.slice(1);return t[e]()+r}}function mn(e){return function(n){return Qe(Tn(pn(n).replace(We,"")),e,"")}}function Cn(e){return!!e&&typeof e=="object"}function bn(e){return typeof e=="symbol"||Cn(e)&&sn.call(e)==je}function p(e){return e==null?"":fn(e)}var gn=mn(function(e,n,o){return n=n.toLowerCase(),e+(o?yn(n):n)});function yn(e){return vn(p(e).toLowerCase())}function pn(e){return e=p(e),e&&e.replace(Oe,on).replace(Fe,"")}var vn=xn("toUpperCase");function Tn(e,n,o){return e=p(e),n=o?void 0:n,n===void 0?rn(e)?un(e):en(e):e.match(n)||[]}var hn=gn;const Sn=ye(hn);function wn(e,n){pe(e,"[@ant-design/icons] ".concat(n))}function W(e){return N(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(N(e.icon)==="object"||typeof e.icon=="function")}function F(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(n,o){var t=e[o];switch(o){case"class":n.className=t,delete n.class;break;default:delete n[o],n[Sn(o)]=t}return n},{})}function A(e,n,o){return o?U.createElement(e.tag,s(s({key:n},F(e.attrs)),o),(e.children||[]).map(function(t,r){return A(t,"".concat(n,"-").concat(e.tag,"-").concat(r))})):U.createElement(e.tag,s({key:n},F(e.attrs)),(e.children||[]).map(function(t,r){return A(t,"".concat(n,"-").concat(e.tag,"-").concat(r))}))}function se(e){return ve(e)[0]}function le(e){return e?Array.isArray(e)?e:[e]:[]}var An=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,Rn=function(n){var o=c.useContext(Y),t=o.csp,r=o.prefixCls,a=An;r&&(a=a.replace(/anticon/g,r)),c.useEffect(function(){var i=n.current,f=Te(i);he(a,"@ant-design-icons",{prepend:!0,csp:t,attachTo:f})},[])},In=["icon","className","onClick","style","primaryColor","secondaryColor"],x={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function jn(e){var n=e.primaryColor,o=e.secondaryColor;x.primaryColor=n,x.secondaryColor=o||se(n),x.calculated=!!o}function En(){return s({},x)}var v=function(n){var o=n.icon,t=n.className,r=n.onClick,a=n.style,i=n.primaryColor,f=n.secondaryColor,m=G(n,In),C=c.useRef(),d=x;if(i&&(d={primaryColor:i,secondaryColor:f||se(i)}),Rn(C),wn(W(o),"icon should be icon definiton, but got ".concat(o)),!W(o))return null;var u=o;return u&&typeof u.icon=="function"&&(u=s(s({},u),{},{icon:u.icon(d.primaryColor,d.secondaryColor)})),A(u.icon,"svg-".concat(u.name),s(s({className:t,onClick:r,style:a,"data-icon":u.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},m),{},{ref:C}))};v.displayName="IconReact";v.getTwoToneColors=En;v.setTwoToneColors=jn;const E=v;function fe(e){var n=le(e),o=J(n,2),t=o[0],r=o[1];return E.setTwoToneColors({primaryColor:t,secondaryColor:r})}function On(){var e=E.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var kn=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];fe(Se.primary);var T=c.forwardRef(function(e,n){var o,t=e.className,r=e.icon,a=e.spin,i=e.rotate,f=e.tabIndex,m=e.onClick,C=e.twoToneColor,d=G(e,kn),u=c.useContext(Y),O=u.prefixCls,h=O===void 0?"anticon":O,de=u.rootClassName,xe=we(de,h,(o={},z(o,"".concat(h,"-").concat(r.name),!!r.name),z(o,"".concat(h,"-spin"),!!a||r.name==="loading"),o),t),S=f;S===void 0&&m&&(S=-1);var me=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,Ce=le(C),k=J(Ce,2),be=k[0],ge=k[1];return c.createElement("span",Ae({role:"img","aria-label":r.name},d,{ref:n,tabIndex:S,onClick:m,className:xe}),c.createElement(E,{icon:r,primaryColor:be,secondaryColor:ge,style:me}))});T.displayName="AntdIcon";T.getTwoToneColor=On;T.setTwoToneColor=fe;const Un=T;export{Un as A};
