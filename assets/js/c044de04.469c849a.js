"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[32720],{63567:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});t(67294);var i=t(85893),n=t(11151);const r={title:"Archive Access API rate limits on Dapper Labs Archive nodes",sidebar_label:"Archive API Rate Limits",sidebar_position:4},c=void 0,a={unversionedId:"building-on-flow/run-and-secure/nodes/archive-api-rate-limits",id:"building-on-flow/run-and-secure/nodes/archive-api-rate-limits",title:"Archive Access API rate limits on Dapper Labs Archive nodes",description:"Rate limits",source:"@site/docs/building-on-flow/run-and-secure/nodes/archive-api-rate-limits.mdx",sourceDirName:"building-on-flow/run-and-secure/nodes",slug:"/building-on-flow/run-and-secure/nodes/archive-api-rate-limits",permalink:"/docs/next/building-on-flow/run-and-secure/nodes/archive-api-rate-limits",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/building-on-flow/run-and-secure/nodes/archive-api-rate-limits.mdx",tags:[],version:"current",lastUpdatedBy:"Bastian M\xfcller",lastUpdatedAt:1694645030,formattedLastUpdatedAt:"Sep 13, 2023",sidebarPosition:4,frontMatter:{title:"Archive Access API rate limits on Dapper Labs Archive nodes",sidebar_label:"Archive API Rate Limits",sidebar_position:4},sidebar:"buildingOnFlow",previous:{title:"Archive API",permalink:"/docs/next/building-on-flow/run-and-secure/nodes/archive-access-api"},next:{title:"Node Operations",permalink:"/docs/next/building-on-flow/run-and-secure/nodes/node-operation/"}},l={},d=[{value:"Rate limits",id:"rate-limits",level:4},{value:"Mainnet",id:"mainnet",level:5},{value:"Testnet",id:"testnet",level:5}];function o(e){const s=Object.assign({h4:"h4",p:"p",a:"a",code:"code",h5:"h5",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,n.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h4,{id:"rate-limits",children:"Rate limits"}),"\n",(0,i.jsxs)(s.p,{children:["Following are the current rate limits for the ",(0,i.jsx)(s.a,{href:"/docs/next/building-on-flow/run-and-secure/nodes/archive-access-api",children:"Archive Node gRPC API"})," in total across all Dapper Labs Archive nodes. The actual limits are enforced by each individual node. If you are using a load balanced endpoint, the limits below are the max rate, and may vary depending on how your requests are routed."]}),"\n",(0,i.jsxs)(s.p,{children:["Once the limit has reached, the client will receive an RPC error ",(0,i.jsx)(s.code,{children:"ResourceExhausted"})," in the gRPC response."]}),"\n",(0,i.jsxs)(s.p,{children:["Please note, these limits only apply to the archive nodes hosted by Dapper Labs. Archive nodes run by other node operators will have different rate limits.\nAlso, all the gRPC endpoints listed below start with ",(0,i.jsx)(s.code,{children:"flow.access.AccessAPI"})," due to the Archive Access API having the same gRPC protobuf definitions as the original Access API from our ",(0,i.jsx)(s.a,{href:"/docs/next/building-on-flow/run-and-secure/nodes/node-operation/node-roles#access",children:"Access Nodes"}),". For information on rate limitting of the Access API for Flow's Access Nodes please visit ",(0,i.jsx)(s.a,{href:"/docs/next/building-on-flow/run-and-secure/nodes/access-api-rate-limits",children:"this page"}),"."]}),"\n",(0,i.jsx)(s.h5,{id:"mainnet",children:"Mainnet"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{align:"left",children:"gRPC API"}),(0,i.jsx)(s.th,{align:"center",children:"Total request per second per client IP"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetAccountAtBlockHeight"}),(0,i.jsx)(s.td,{align:"center",children:"5"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockID"}),(0,i.jsx)(s.td,{align:"center",children:"5"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockHeight"}),(0,i.jsx)(s.td,{align:"center",children:"5"})]})]})]}),"\n",(0,i.jsx)(s.h5,{id:"testnet",children:"Testnet"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{align:"left",children:"gRPC API"}),(0,i.jsx)(s.th,{align:"center",children:"Total request per second per IP"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/GetAccountAtLatestBlock"}),(0,i.jsx)(s.td,{align:"center",children:"5"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockID"}),(0,i.jsx)(s.td,{align:"center",children:"5"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockHeight"}),(0,i.jsx)(s.td,{align:"center",children:"5"})]})]})]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}}}]);