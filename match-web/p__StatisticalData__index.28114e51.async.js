"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[260],{32272:function(oe,N,o){o.r(N);var H=o(97857),h=o.n(H),l=o(15009),$=o.n(l),G=o(99289),X=o.n(G),ne=o(5574),M=o.n(ne),v=o(66828),V=o(43687),E=o(85322),le=o(90930),y=o(67294),P=o(2618),m=o(85893);N.default=function(){var J=(0,y.useState)(null),F=M()(J,2),s=F[0],Q=F[1],w=(0,y.useState)(!1),Y=M()(w,2),W=Y[0],D=Y[1],q=function(){var x=X()($()().mark(function O(){var B;return $()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,D(!0),d.next=4,(0,P.aC)();case 4:B=d.sent,Q(B),D(!1),d.next=11;break;case 9:d.prev=9,d.t0=d.catch(0);case 11:case"end":return d.stop()}},O,null,[[0,9]])}));return function(){return x.apply(this,arguments)}}();(0,y.useEffect)(function(){s||q()},[W,s]);var k=(0,y.useMemo)(function(){var x=[];s&&(x=[{type:"\u6210\u4EA4\u6570",value:Number(s==null?void 0:s.deal)},{type:"\u574F\u8D26\u6570",value:Math.floor(+(s==null?void 0:s.total)*(Number(s.badRate.replace("%",""))/100))}]);var O={appendPadding:10,data:x,angleField:"value",colorField:"type",radius:1,label:{type:"inner",offset:"-30%",content:function(z){var d=z.percent;return"".concat((d*100).toFixed(0),"%")},style:{fontSize:14,textAlign:"center"}},interactions:[{type:"element-active"}]};return O},[s]);return(0,m.jsx)(E.Z,{style:{marginBlockStart:8},gutter:8,children:(0,m.jsx)(le._z,{ghost:!0,loading:W,header:{title:"\u7EDF\u8BA1\u6570\u636E"},content:(0,m.jsxs)(v.Z,{column:2,style:{marginBlockEnd:-16},children:[(0,m.jsxs)(v.Z.Item,{label:"\u5171\u8BA1\u5BF9\u51B2",children:[(0,m.jsx)("a",{children:s==null?void 0:s.total}),"\xA0\u7B14"]}),(0,m.jsx)(v.Z.Item,{label:"\u6210\u4EA4\u6570",children:(0,m.jsx)("a",{children:s==null?void 0:s.deal})}),(0,m.jsx)(v.Z.Item,{label:"\u6210\u4EA4\u91D1\u989D",children:s==null?void 0:s.dealAmount}),(0,m.jsx)(v.Z.Item,{label:"\u6210\u4EA4\u7387",children:s==null?void 0:s.successRate}),(0,m.jsx)(v.Z.Item,{label:"\u574F\u5355\u7387",children:s==null?void 0:s.badRate})]}),children:(0,m.jsx)(E.Z,{style:{height:300,width:300},children:(0,m.jsx)(V.Z,h()({},k))})})})}},66828:function(oe,N,o){o.d(N,{Z:function(){return ie}});var H=o(94184),h=o.n(H),l=o(67294),$=o(74443),G=o(53124),X=o(98675),M=l.createContext({}),V=e=>{let{children:t}=e;return t};function E(e){return e!=null}var y=e=>{const{itemPrefixCls:t,component:a,span:n,className:r,style:i,labelStyle:c,contentStyle:b,bordered:f,label:p,content:_,colon:S}=e,j=a;return f?l.createElement(j,{className:h()({[`${t}-item-label`]:E(p),[`${t}-item-content`]:E(_)},r),style:i,colSpan:n},E(p)&&l.createElement("span",{style:c},p),E(_)&&l.createElement("span",{style:b},_)):l.createElement(j,{className:h()(`${t}-item`,r),style:i,colSpan:n},l.createElement("div",{className:`${t}-item-container`},(p||p===0)&&l.createElement("span",{className:h()(`${t}-item-label`,{[`${t}-item-no-colon`]:!S}),style:c},p),(_||_===0)&&l.createElement("span",{className:h()(`${t}-item-content`),style:b},_)))};function P(e,t,a){let{colon:n,prefixCls:r,bordered:i}=t,{component:c,type:b,showLabel:f,showContent:p,labelStyle:_,contentStyle:S}=a;return e.map((j,C)=>{let{label:R,children:U,prefixCls:A=r,className:L,style:T,labelStyle:g,contentStyle:u,span:K=1,key:I}=j;return typeof c=="string"?l.createElement(y,{key:`${b}-${I||C}`,className:L,style:T,labelStyle:Object.assign(Object.assign({},_),g),contentStyle:Object.assign(Object.assign({},S),u),span:K,colon:n,component:c,itemPrefixCls:A,bordered:i,label:f?R:null,content:p?U:null}):[l.createElement(y,{key:`label-${I||C}`,className:L,style:Object.assign(Object.assign(Object.assign({},_),T),g),span:1,colon:n,component:c[0],itemPrefixCls:A,bordered:i,label:R}),l.createElement(y,{key:`content-${I||C}`,className:L,style:Object.assign(Object.assign(Object.assign({},S),T),u),span:K*2-1,component:c[1],itemPrefixCls:A,bordered:i,content:U})]})}var J=e=>{const t=l.useContext(M),{prefixCls:a,vertical:n,row:r,index:i,bordered:c}=e;return n?l.createElement(l.Fragment,null,l.createElement("tr",{key:`label-${i}`,className:`${a}-row`},P(r,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),l.createElement("tr",{key:`content-${i}`,className:`${a}-row`},P(r,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):l.createElement("tr",{key:i,className:`${a}-row`},P(r,e,Object.assign({component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},F=o(50344);function s(e,t,a){let n=e;return(a===void 0||a>t)&&(n=Object.assign(Object.assign({},e),{span:t})),n}const Q=e=>(0,F.Z)(e).map(t=>t==null?void 0:t.props);function w(e,t){const a=[];let n=[],r=t;return e.filter(i=>i).forEach((i,c)=>{const b=i==null?void 0:i.span,f=b||1;if(c===e.length-1){n.push(s(i,r,b)),a.push(n);return}f<r?(r-=f,n.push(i)):(n.push(s(i,r,f)),a.push(n),r=t,n=[])}),a}var W=(e,t,a)=>(0,l.useMemo)(()=>Array.isArray(t)?w(t,e):w(Q(a),e),[t,a,e]),D=o(14747),q=o(67968),k=o(45503);const x=e=>{const{componentCls:t,labelBg:a}=e;return{[`&${t}-bordered`]:{[`${t}-view`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"}},[`${t}-item-label, ${t}-item-content`]:{padding:`${e.padding}px ${e.paddingLG}px`,borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:a,"&::after":{display:"none"}},[`${t}-row`]:{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"}},[`&${t}-middle`]:{[`${t}-item-label, ${t}-item-content`]:{padding:`${e.paddingSM}px ${e.paddingLG}px`}},[`&${t}-small`]:{[`${t}-item-label, ${t}-item-content`]:{padding:`${e.paddingXS}px ${e.padding}px`}}}}},O=e=>{const{componentCls:t,extraColor:a,itemPaddingBottom:n,colonMarginRight:r,colonMarginLeft:i,titleMarginBottom:c}=e;return{[t]:Object.assign(Object.assign(Object.assign({},(0,D.Wf)(e)),x(e)),{["&-rtl"]:{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:c},[`${t}-title`]:Object.assign(Object.assign({},D.vS),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:a,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${i}px ${r}px`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}};var B=(0,q.Z)("Descriptions",e=>{const t=(0,k.TS)(e,{});return[O(t)]},e=>({labelBg:e.colorFillAlter,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,extraColor:e.colorText})),z=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const d={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function re(e,t){if(typeof e=="number")return e;if(typeof e=="object")for(let a=0;a<$.c.length;a++){const n=$.c[a];if(t[n]&&e[n]!==void 0)return e[n]||d[n]}return 3}const ae=e=>{const{prefixCls:t,title:a,extra:n,column:r=d,colon:i=!0,bordered:c,layout:b,children:f,className:p,rootClassName:_,style:S,size:j,labelStyle:C,contentStyle:R,items:U}=e,A=z(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:L,direction:T,descriptions:g}=l.useContext(G.E_),u=L("descriptions",t),[K,I]=l.useState({}),ce=re(r,K),ee=(0,X.Z)(j),de=W(ce,U,f),[me,ue]=B(u),se=(0,$.Z)();l.useEffect(()=>{const te=se.subscribe(Z=>{typeof r=="object"&&I(Z)});return()=>{se.unsubscribe(te)}},[]);const _e=l.useMemo(()=>({labelStyle:C,contentStyle:R}),[C,R]);return me(l.createElement(M.Provider,{value:_e},l.createElement("div",Object.assign({className:h()(u,g==null?void 0:g.className,{[`${u}-${ee}`]:ee&&ee!=="default",[`${u}-bordered`]:!!c,[`${u}-rtl`]:T==="rtl"},p,_,ue),style:Object.assign(Object.assign({},g==null?void 0:g.style),S)},A),(a||n)&&l.createElement("div",{className:`${u}-header`},a&&l.createElement("div",{className:`${u}-title`},a),n&&l.createElement("div",{className:`${u}-extra`},n)),l.createElement("div",{className:`${u}-view`},l.createElement("table",null,l.createElement("tbody",null,de.map((te,Z)=>l.createElement(J,{key:Z,index:Z,colon:i,prefixCls:u,vertical:b==="vertical",bordered:c,row:te}))))))))};ae.Item=V;var ie=ae}}]);
