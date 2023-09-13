"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[51600],{84927:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>d});e(67294);var i=e(85893),s=e(11151);const o={title:"Options for Building Staking Integrations",sidebar_label:"Technical Staking Options"},a=void 0,r={unversionedId:"building-on-flow/run-and-secure/staking/staking-options",id:"building-on-flow/run-and-secure/staking/staking-options",title:"Options for Building Staking Integrations",description:"This document describes two different methods for staking at a high level.",source:"@site/docs/building-on-flow/run-and-secure/staking/13-staking-options.mdx",sourceDirName:"building-on-flow/run-and-secure/staking",slug:"/building-on-flow/run-and-secure/staking/staking-options",permalink:"/docs/next/building-on-flow/run-and-secure/staking/staking-options",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/building-on-flow/run-and-secure/staking/13-staking-options.mdx",tags:[],version:"current",lastUpdatedBy:"Bastian M\xfcller",lastUpdatedAt:1694645030,formattedLastUpdatedAt:"Sep 13, 2023",sidebarPosition:13,frontMatter:{title:"Options for Building Staking Integrations",sidebar_label:"Technical Staking Options"},sidebar:"buildingOnFlow",previous:{title:"Staking FAQ",permalink:"/docs/next/building-on-flow/run-and-secure/staking/faq"},next:{title:"Staking Collection Guide",permalink:"/docs/next/building-on-flow/run-and-secure/staking/staking-collection"}},l={},d=[];function c(n){const t=Object.assign({p:"p",h1:"h1",a:"a",code:"code"},(0,s.ah)(),n.components),{Callout:e}=t;return e||function(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This document describes two different methods for staking at a high level."}),"\n",(0,i.jsx)(e,{type:"warning",children:(0,i.jsx)(t.p,{children:"We highly recommended you use the Staking Collection paradigm,\nas this will be the most supported method for staking with any set up."})}),"\n",(0,i.jsx)(t.h1,{id:"staking-collection",children:"Staking Collection"}),"\n",(0,i.jsx)(t.p,{children:"A Staking Collection is a resource that allows its owner to manage multiple staking\nobjects in a single account via a single storage path, and perform staking actions\nusing Flow. It also supports machine accounts, a necessary feature for Flow epoch node operation."}),"\n",(0,i.jsx)(t.p,{children:"The staking collection paradigm is the most flexible of the three choices\nand will receive the most support in the future. It is the set-up that Flow Port and many other staking providers use."}),"\n",(0,i.jsxs)(t.p,{children:["The staking collection setup and guide is detailed in the ",(0,i.jsx)(t.a,{href:"/docs/next/building-on-flow/run-and-secure/staking/staking-collection",children:"staking collection guide."})]}),"\n",(0,i.jsx)(t.h1,{id:"staking",children:"Staking"}),"\n",(0,i.jsxs)(t.p,{children:["The basic method to stake is to stake directly with the ",(0,i.jsx)(t.code,{children:"FlowIDTableStaking"})," smart contract.\nThis would involve calling the node or delegator registration functions directly in the staking\ncontract and storing the staking objects directly in account storage."]}),"\n",(0,i.jsx)(t.p,{children:"This is probably the simplest way to implement this, but it is not very flexible\nand not recommended."}),"\n",(0,i.jsxs)(t.p,{children:["The basic staking guide is detailed ",(0,i.jsx)(t.a,{href:"/docs/next/building-on-flow/run-and-secure/staking/staking-guide",children:"here"})]})]})}const g=function(n){void 0===n&&(n={});const{wrapper:t}=Object.assign({},(0,s.ah)(),n.components);return t?(0,i.jsx)(t,Object.assign({},n,{children:(0,i.jsx)(c,n)})):c(n)}}}]);