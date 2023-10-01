import{bM as g,bP as v,bU as y,bV as R,bW as E,bR as M,bX as S,bY as w,a as p,bZ as C,b_ as q,b$ as H,bS as x,c0 as m,c1 as Q,c2 as B,c3 as U}from"./index-04133603.js";class P extends g{constructor(r,n){super(),this.client=r,this.queries=[],this.result=[],this.observers=[],this.observersMap={},n&&this.setQueries(n)}onSubscribe(){this.listeners.size===1&&this.observers.forEach(r=>{r.subscribe(n=>{this.onUpdate(r,n)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,this.observers.forEach(r=>{r.destroy()})}setQueries(r,n){this.queries=r,v.batch(()=>{const i=this.observers,a=this.findMatchingObservers(this.queries);a.forEach(s=>s.observer.setOptions(s.defaultedQueryOptions,n));const t=a.map(s=>s.observer),c=Object.fromEntries(t.map(s=>[s.options.queryHash,s])),l=t.map(s=>s.getCurrentResult()),f=t.some((s,d)=>s!==i[d]);i.length===t.length&&!f||(this.observers=t,this.observersMap=c,this.result=l,this.hasListeners()&&(y(i,t).forEach(s=>{s.destroy()}),y(t,i).forEach(s=>{s.subscribe(d=>{this.onUpdate(s,d)})}),this.notify()))})}getCurrentResult(){return this.result}getQueries(){return this.observers.map(r=>r.getCurrentQuery())}getObservers(){return this.observers}getOptimisticResult(r){return this.findMatchingObservers(r).map(n=>n.observer.getOptimisticResult(n.defaultedQueryOptions))}findMatchingObservers(r){const n=this.observers,i=new Map(n.map(e=>[e.options.queryHash,e])),a=r.map(e=>this.client.defaultQueryOptions(e)),t=a.flatMap(e=>{const u=i.get(e.queryHash);return u!=null?[{defaultedQueryOptions:e,observer:u}]:[]}),c=new Set(t.map(e=>e.defaultedQueryOptions.queryHash)),l=a.filter(e=>!c.has(e.queryHash)),f=new Set(t.map(e=>e.observer)),s=n.filter(e=>!f.has(e)),d=e=>{const u=this.client.defaultQueryOptions(e),h=this.observersMap[u.queryHash];return h??new E(this.client,u)},b=l.map((e,u)=>{if(e.keepPreviousData){const h=s[u];if(h!==void 0)return{defaultedQueryOptions:e,observer:h}}return{defaultedQueryOptions:e,observer:d(e)}}),o=(e,u)=>a.indexOf(e.defaultedQueryOptions)-a.indexOf(u.defaultedQueryOptions);return t.concat(b).sort(o)}onUpdate(r,n){const i=this.observers.indexOf(r);i!==-1&&(this.result=R(this.result,i,n),this.notify())}notify(){v.batch(()=>{this.listeners.forEach(({listener:r})=>{r(this.result)})})}}function A({queries:O,context:r}){const n=M({context:r}),i=S(),a=w(),t=p.useMemo(()=>O.map(o=>{const e=n.defaultQueryOptions(o);return e._optimisticResults=i?"isRestoring":"optimistic",e}),[O,n,i]);t.forEach(o=>{C(o),q(o,a)}),H(a);const[c]=p.useState(()=>new P(n,t)),l=c.getOptimisticResult(t);x(p.useCallback(o=>i?()=>{}:c.subscribe(v.batchCalls(o)),[c,i]),()=>c.getCurrentResult(),()=>c.getCurrentResult()),p.useEffect(()=>{c.setQueries(t,{listeners:!1})},[t,c]);const s=l.some((o,e)=>m(t[e],o,i))?l.flatMap((o,e)=>{const u=t[e],h=c.getObservers()[e];if(u&&h){if(m(u,o,i))return Q(u,h,a);B(o,i)&&Q(u,h,a)}return[]}):[];if(s.length>0)throw Promise.all(s);const d=c.getQueries(),b=l.find((o,e)=>{var u,h;return U({result:o,errorResetBoundary:a,useErrorBoundary:(u=(h=t[e])==null?void 0:h.useErrorBoundary)!=null?u:!1,query:d[e]})});if(b!=null&&b.error)throw b.error;return l}const L=A;export{L as u};
