"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1300],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(a),f=r,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5489:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={title:"Off-chain Dapp Infrastructure",sidebar_title:"Off-chain Infrastructure"},s=void 0,i={unversionedId:"flow/dapp-development/dapp-infrastructure",id:"flow/dapp-development/dapp-infrastructure",title:"Off-chain Dapp Infrastructure",description:"In addition to on-chain smart contracts, dapps also rely on off-chain infrastructure. For example, users often interact with a dapp through a web interface. In addition to this, some dapps rely on backend servers to query and index data from the blockchain. This section covers best practices for off-chain infrastructure on Flow.",source:"@site/docs/flow/dapp-development/dapp-infrastructure.md",sourceDirName:"flow/dapp-development",slug:"/flow/dapp-development/dapp-infrastructure",permalink:"/docs/flow/dapp-development/dapp-infrastructure",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709940,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Off-chain Dapp Infrastructure",sidebar_title:"Off-chain Infrastructure"},sidebar:"tutorialSidebar",previous:{title:"Smart Contract Testing Guidelines",permalink:"/docs/flow/dapp-development/contract-testing"},next:{title:"Dapp Deployment Guide",permalink:"/docs/flow/dapp-development/deployment"}},c={},l=[{value:"Writing Data to Flow",id:"writing-data-to-flow",level:2},{value:"User Transactions",id:"user-transactions",level:3},{value:"Admin Transactions",id:"admin-transactions",level:3},{value:"Reading Data From Flow",id:"reading-data-from-flow",level:2},{value:"Events",id:"events",level:3},{value:"Event Reflection Database",id:"event-reflection-database",level:4},{value:"Event Providers",id:"event-providers",level:4},{value:"Cadence Script Queries",id:"cadence-script-queries",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In addition to on-chain smart contracts, dapps also rely on off-chain infrastructure. For example, users often interact with a dapp through a web interface. In addition to this, some dapps rely on backend servers to query and index data from the blockchain. This section covers best practices for off-chain infrastructure on Flow."),(0,r.kt)("h2",{id:"writing-data-to-flow"},"Writing Data to Flow"),(0,r.kt)("p",null,"All data written to the blockchain happens in a transaction. For user-facing dapps, transactions either originate from a user account or an admin account. For most dapps, the large majority of transactions will be user transactions. "),(0,r.kt)("h3",{id:"user-transactions"},"User Transactions"),(0,r.kt)("p",null,"User transactions are transactions that are authorized by the users of your dapp. These transactions originate from the user\u2019s wallet, as mentioned in the\n",(0,r.kt)("a",{parentName:"p",href:"/dapp-development/user-accounts-and-wallets"},"User Accounts & Wallets")," section. For example, a user may sign a transaction to purchase an NFT from your dapp."),(0,r.kt)("p",null,"A user transaction is initialized by your dapp (e.g. by a button click) through FCL, which then passes the transaction to the user\u2019s wallet, which in turn signs the transaction and submits it to Flow. This all happens from the dapp client, typically a browser app. By using FCL, your dapp does not need to be involved in the transaction signing -- it constructs the transaction, passes it to the wallet, and then waits for the final result."),(0,r.kt)("h3",{id:"admin-transactions"},"Admin Transactions"),(0,r.kt)("p",null,"Admin transactions are transactions that originate from the backend of your dapp, or from a separate administration interface that you control. These transactions perform the administrative duties required to operate your dapp, and are signed by an administrator account controlled by you, the dapp developer."),(0,r.kt)("p",null,"For example, you may send an admin transaction that mints a batch of NFTs for purchase, or a transaction that adds an additional gameplay level to your game."),(0,r.kt)("p",null,"For one-off administrative actions that do not require automation, such as contract deployment, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/flow-cli/"},"Flow CLI"),"."),(0,r.kt)("h2",{id:"reading-data-from-flow"},"Reading Data From Flow"),(0,r.kt)("p",null,"Your dapp will also need to read data from Flow, and in particular, the state of your smart contracts. There are several ways to query state on Flow."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"Events are data objects emitted at the end of a transaction that describe the state changes that occurred in the transaction. For example, a transaction that transfers FLOW tokens between accounts ",(0,r.kt)("a",{parentName:"p",href:"https://flowscan.org/transaction/2f50695c3c506b8214d18f49220c986d24d19d8762a2805b3609aee3d529de88"},"will emit events")," that describe the sender, recipient and amount of FLOW transferred. Event types are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowToken.cdc#L8-L27"},"defined inside your Cadence contracts"),". "),(0,r.kt)("p",null,"Events can be used to notify your off-chain infrastructure of important state changes in your smart contracts. For example, if a user purchases an NFT from your storefront smart contract, an event will be emitted that describes this purchase. Your web application, which displays the NFTs for sale, can then capture that event and remove the NFT from the sale list."),(0,r.kt)("p",null,"You can query events through the Flow Access API using the available ",(0,r.kt)("a",{parentName:"p",href:"/sdks/"},"Flow SDKs"),". Event data is returned in ",(0,r.kt)("a",{parentName:"p",href:"/cadence/json-cadence-spec/"},"JSON-Cadence format"),"."),(0,r.kt)("h4",{id:"event-reflection-database"},"Event Reflection Database"),(0,r.kt)("p",null,"Some applications, especially those with existing backend servers, opt to store application state in an off-chain database that merely reflects the state of on-chain contracts. A reflection database has the following benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unified on and off-chain state"),". For dapps that rely on both on and off-chain state, it\u2019s useful to store all data in a central database to allow for atomic queries (i.e. ACID) and high scalability."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fast and flexible queries.")," Database systems can be tuned and optimized (e.g. using indices) to best serve the data needs of your dapp, whereas the blockchain itself does not provide this level of customization.")),(0,r.kt)("h4",{id:"event-providers"},"Event Providers"),(0,r.kt)("p",null,"Third-party event providers, such as ",(0,r.kt)("a",{parentName:"p",href:"https://graffle.io/"},"Graffle"),", can simplify event filtering and stream events directly to your frontend or backend infrastructure."),(0,r.kt)("h3",{id:"cadence-script-queries"},"Cadence Script Queries"),(0,r.kt)("p",null,"At any point, your dapp can execute a query to read the state of your contracts. This is done using Cadence scripts, which are written similarly to transactions, but are read-only and cannot mutate the blockchain state. "),(0,r.kt)("p",null,"Events follow a push model, whereas script queries follow a pull model. Your dapp may need to check the state of your contracts without waiting for an event to be emitted. "),(0,r.kt)("p",null,"You can execute scripts through the Flow Access API using the available ",(0,r.kt)("a",{parentName:"p",href:"/sdks/"},"Flow SDKs"),". Like events, script results are returned in ",(0,r.kt)("a",{parentName:"p",href:"/cadence/json-cadence-spec/"},"JSON-Cadence format"),"."))}u.isMDXComponent=!0}}]);