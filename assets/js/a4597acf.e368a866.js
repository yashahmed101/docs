"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[82692],{46525:(e,t,o)=>{o.d(t,{Z:()=>b});var s=o(67294),n=o(86010),i=o(52802),r=o(39960),c=o(13919),a=o(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",preWrap:"preWrap_myZA"};function d(e){let{href:t,children:o}=e;return s.createElement(r.Z,{href:t,className:(0,n.Z)("card padding--lg",l.cardContainer)},o)}function m(e){let{href:t,icon:o,title:i,description:r}=e;return s.createElement(d,{href:t},s.createElement("h2",{className:(0,n.Z)("text--truncate",l.cardTitle),title:i},o," ",i),r&&s.createElement("p",{className:(0,n.Z)(l.preWrap,l.cardDescription),title:r},r))}function u(e){let{item:t}=e;const o=(0,i.Wl)(t);return o?s.createElement(m,{href:o,icon:t.customProps?.icon||"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??t.customProps?.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const o=Boolean(t?.customProps?.icon)&&t?.customProps?.icon||((0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17"),n=(0,i.xz)(t.docId??void 0);return s.createElement(m,{href:t.href,icon:o,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(p,{item:t});case"category":return s.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const o=(0,i.jA)();return s.createElement(b,{items:o.items,className:t})}function b(e){const{items:t,className:o}=e;if(!t)return s.createElement(h,e);const r=(0,i.MN)(t);return s.createElement("section",{className:(0,n.Z)("row",o)},r.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(f,{item:e})))))}},45888:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>m,toc:()=>p});o(67294);var s=o(85893),n=o(11151),i=o(46525),r=o(1116),c=o(48596),a=o(16550);const l={sidebar_position:1,title:"Tools",description:"Essential tools for the Flow blockchain ecosystem"},d=void 0,m={unversionedId:"tools/index",id:"version-stable/tools/index",title:"Tools",description:"Essential tools for the Flow blockchain ecosystem",source:"@site/versioned_docs/version-stable/tools/index.mdx",sourceDirName:"tools",slug:"/tools/",permalink:"/docs/tools/",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tools/index.mdx",tags:[],version:"stable",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Tools",description:"Essential tools for the Flow blockchain ecosystem"},sidebar:"tools",next:{title:"Flow CLI",permalink:"/docs/tools/flow-cli/"}},u={},p=[];function f(e){return(0,s.jsx)(i.Z,{items:(0,r.V)().items.filter((e=>!(0,c.Mg)(e.href,(0,a.TH)().pathname)))})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(f,e)})):f()}}}]);