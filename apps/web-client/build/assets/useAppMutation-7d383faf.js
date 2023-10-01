import{bM as b,bN as p,bO as f,bP as h,bQ as v,bR as M,a as l,bS as R,bT as m,F as y}from"./index-04133603.js";class g extends b{constructor(t,e){super(),this.client=t,this.setOptions(e),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var e;const s=this.options;this.options=this.client.defaultMutationOptions(t),p(s,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(e=this.currentMutation)==null||e.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const e={listeners:!0};t.type==="success"?e.onSuccess=!0:t.type==="error"&&(e.onError=!0),this.notify(e)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:f(),e={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=e}notify(t){h.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var e,s,n,r;(e=(s=this.mutateOptions).onSuccess)==null||e.call(s,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(n=(r=this.mutateOptions).onSettled)==null||n.call(r,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var i,a,u,c;(i=(a=this.mutateOptions).onError)==null||i.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(u=(c=this.mutateOptions).onSettled)==null||u.call(c,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:d})=>{d(this.currentResult)})})}}function E(o,t,e){const s=v(o,t,e),n=M({context:s.context}),[r]=l.useState(()=>new g(n,s));l.useEffect(()=>{r.setOptions(s)},[r,s]);const i=R(l.useCallback(u=>r.subscribe(h.batchCalls(u)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),a=l.useCallback((u,c)=>{r.mutate(u,c).catch(O)},[r]);if(i.error&&m(r.options.useErrorBoundary,[i.error]))throw i.error;return{...i,mutate:a,mutateAsync:i.mutate}}function O(){}const x=({mutationFn:o,...t})=>{const e=y(),s=E(o,{onError(){e.error("에러가 발생했습니다. 잠시 후 다시 시도해주세요.")},...t});return{...s,mutate:(...n)=>{s.isLoading||s.mutate(...n)}}};export{x as u};
