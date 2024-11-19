import{av as h,aw as m,B as p,eV as w,af as g,cG as E,a_ as x,aD as M,$ as S,bM as y,i as R}from"./main-BI4PqNg_.js";function $(r,a){if(!h(r,{strict:!1}))throw new m({address:r});if(!h(a,{strict:!1}))throw new m({address:a});return r.toLowerCase()===a.toLowerCase()}class T extends p{constructor({callbackSelector:a,cause:t,data:n,extraData:i,sender:d,urls:s}){var c;super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],(c=t.metaMessages)!=null&&c.length?"":[],"Offchain Gateway Call:",s&&["  Gateway URL(s):",...s.map(f=>`    ${w(f)}`)],`  Sender: ${d}`,`  Data: ${n}`,`  Callback selector: ${a}`,`  Extra data: ${i}`].flat(),name:"OffchainLookupError"})}}class A extends p{constructor({result:a,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${w(t)}`,`Response: ${g(a)}`],name:"OffchainLookupResponseMalformedError"})}}class C extends p{constructor({sender:a,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${a}`],name:"OffchainLookupSenderMismatchError"})}}const _="0x556f1830",b={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function q(r,{blockNumber:a,blockTag:t,data:n,to:i}){const{args:d}=E({data:n,abi:[b]}),[s,c,f,l,o]=d,{ccipRead:e}=r,O=e&&typeof(e==null?void 0:e.request)=="function"?e.request:k;try{if(!$(i,s))throw new C({sender:s,to:i});const u=await O({data:f,sender:s,urls:c}),{data:L}=await x(r,{blockNumber:a,blockTag:t,data:M([l,S([{type:"bytes"},{type:"bytes"}],[u,o])]),to:i});return L}catch(u){throw new T({callbackSelector:l,cause:u,data:n,extraData:o,sender:s,urls:c})}}async function k({data:r,sender:a,urls:t}){var i;let n=new Error("An unknown error occurred.");for(let d=0;d<t.length;d++){const s=t[d],c=s.includes("{data}")?"GET":"POST",f=c==="POST"?{data:r,sender:a}:void 0,l=c==="POST"?{"Content-Type":"application/json"}:{};try{const o=await fetch(s.replace("{sender}",a).replace("{data}",r),{body:JSON.stringify(f),headers:l,method:c});let e;if((i=o.headers.get("Content-Type"))!=null&&i.startsWith("application/json")?e=(await o.json()).data:e=await o.text(),!o.ok){n=new y({body:f,details:e!=null&&e.error?g(e.error):o.statusText,headers:o.headers,status:o.status,url:s});continue}if(!R(e)){n=new A({result:e,url:s});continue}return e}catch(o){n=new y({body:f,details:o.message,url:s})}}throw n}const j=Object.freeze(Object.defineProperty({__proto__:null,ccipRequest:k,offchainLookup:q,offchainLookupAbiItem:b,offchainLookupSignature:_},Symbol.toStringTag,{value:"Module"}));export{b as a,_ as b,k as c,j as d,$ as i,q as o};