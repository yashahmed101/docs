"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[81631],{46525:(e,t,r)=>{r.d(t,{Z:()=>g});var i=r(67294),n=r(86010),c=r(52802),a=r(39960),s=r(13919),o=r(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",preWrap:"preWrap_myZA"};function d(e){let{href:t,children:r}=e;return i.createElement(a.Z,{href:t,className:(0,n.Z)("card padding--lg",l.cardContainer)},r)}function m(e){let{href:t,icon:r,title:c,description:a}=e;return i.createElement(d,{href:t},i.createElement("h2",{className:(0,n.Z)("text--truncate",l.cardTitle),title:c},r," ",c),a&&i.createElement("p",{className:(0,n.Z)(l.preWrap,l.cardDescription),title:a},a))}function u(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?i.createElement(m,{href:r,icon:t.customProps?.icon||"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??t.customProps?.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=Boolean(t?.customProps?.icon)&&t?.customProps?.icon||((0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17"),n=(0,c.xz)(t.docId??void 0);return i.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(p,{item:t});case"category":return i.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const r=(0,c.jA)();return i.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return i.createElement(f,e);const a=(0,c.MN)(t);return i.createElement("section",{className:(0,n.Z)("row",r)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(h,{item:e})))))}},11322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>m,toc:()=>p});r(67294);var i=r(85893),n=r(11151),c=r(46525),a=r(1116),s=r(48596),o=r(16550);const l={sidebar_position:1},d=void 0,m={unversionedId:"architecture/index",id:"version-stable/architecture/index",title:"index",description:"!isSamePath(item.href, useLocation().pathname))}/>",source:"@site/versioned_docs/version-stable/architecture/index.mdx",sourceDirName:"architecture",slug:"/architecture/",permalink:"/docs/architecture/",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/architecture/index.mdx",tags:[],version:"stable",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"architecture",next:{title:"Epochs, Staking & Delegating on Flow",permalink:"/docs/architecture/staking/"}},u={},p=[];function h(e){return(0,i.jsx)(c.Z,{items:(0,a.V)().items.filter((e=>!(0,s.Mg)(e.href,(0,o.TH)().pathname)))})}const f=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h()}}}]);