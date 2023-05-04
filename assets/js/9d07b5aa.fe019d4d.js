"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[497],{56475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});n(67294);var s=n(85893),r=n(11151);const o={title:"Getting Started",sidebar_position:2},a="Introduction to Flow",i={unversionedId:"concepts/start-here/index",id:"concepts/start-here/index",title:"Getting Started",description:"\u200dFlow is a fast, decentralized, and developer-friendly blockchain, designed as the foundation for a new generation of games, apps, and the digital assets that power them. It is based on a unique, multi-role architecture, and designed to scale without sharding, allowing for massive improvements in speed and throughput while preserving a developer-friendly, ACID-compliant environment.",source:"@site/docs/concepts/start-here/index.md",sourceDirName:"concepts/start-here",slug:"/concepts/start-here/",permalink:"/docs/concepts/start-here/",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/start-here/index.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683234204,formattedLastUpdatedAt:"May 4, 2023",sidebarPosition:2,frontMatter:{title:"Getting Started",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/concepts/intro"},next:{title:"Accounts, Keys & Signing",permalink:"/docs/concepts/start-here/accounts-and-keys"}},c={},l=[{value:"What makes Flow unique",id:"what-makes-flow-unique",level:2},{value:"Dapp Development",id:"dapp-development",level:2},{value:"Core Contracts",id:"core-contracts",level:2},{value:"FLOW Token",id:"flow-token",level:2},{value:"NFT marketplace",id:"nft-marketplace",level:2}];function d(e){const t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",strong:"strong"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"introduction-to-flow",children:"Introduction to Flow"}),"\n",(0,s.jsxs)(t.p,{children:["\u200dFlow is a fast, decentralized, and developer-friendly blockchain, designed as the foundation for a new generation of games, apps, and the ",(0,s.jsx)(t.a,{href:"https://www.onflow.org/post/flow-blockchain-cadence-programming-language-resources-assets",children:"digital assets"})," that power them. It is based on a unique, ",(0,s.jsx)(t.a,{href:"https://www.onflow.org/primer",children:"multi-role architecture"}),", and designed to ",(0,s.jsx)(t.a,{href:"https://www.onflow.org/post/flow-blockchain-multi-node-architecture-advantages",children:"scale without sharding"}),", allowing for massive improvements in speed and throughput while preserving a developer-friendly, ACID-compliant environment."]}),"\n",(0,s.jsx)(t.h2,{id:"what-makes-flow-unique",children:"What makes Flow unique"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Multi-role architecture:"})," Flow's node architecture allows the network to scale to serve billions of users without sharding or reducing the decentralization of consensus."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Resource-oriented programming:"})," Smart contracts on Flow are written in Cadence, an easier and safer programming language for crypto assets and apps."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Developer ergonomics:"})," This network is designed to maximize developer productivity. Examples range from upgradeable smart contracts and built-in logging support to the Flow Emulator."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Consumer onboarding:"})," Flow was designed for mainstream consumers, with payment onramps catalyzing a safe and low-friction path from fiat to crypto."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The following chapters summarize the content in this section. Read on more for details."}),"\n",(0,s.jsx)(t.h2,{id:"dapp-development",children:"Dapp Development"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/docs/tutorials/intro",children:"development guide"})," covers the Flow core concepts, including:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Dapp Client:"})," The dapp client is the interface through which users interact with your dapp. Web and mobile applications are typical examples of dapp clients."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Smart Contract:"})," A smart contract is a collection of code deployed to a permanent location on the blockchain that defines the core logic for a dapp."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"User Account:"})," A user account is a record on the blockchain that stores the digital assets owned by a single user."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Transaction:"})," A transaction is a code submitted to the blockchain that mutates the state of one or more user accounts and smart contracts."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"User Wallet:"})," A user wallet is software or hardware that controls access to a user's account on the blockchain."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"State Query:"})," A state query is a request made to the blockchain that returns information about the state of your dapp's smart contracts."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Flow Client Library (FCL):"})," The Flow Client Library is a framework that provides a standard interface to connect client applications and user wallets."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"core-contracts",children:"Core Contracts"}),"\n",(0,s.jsxs)(t.p,{children:["The Flow blockchain implements core functionality using its own smart contract language, Cadence. The core functionality is split into a set of contracts, so-called ",(0,s.jsx)(t.a,{href:"/cadence/core-contracts/",children:"core contracts"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Fungible Token:"})," The FungibleToken contract implements the Fungible Token Standard. It is the second contract ever deployed on Flow."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Flow Token:"})," The FlowToken contract defines the FLOW network token."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Flow Fees:"})," The FlowFees contract is where all the collected flow fees are gathered."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Service Account:"})," tracks transaction fees and deployment permissions and provides convenient methods for Flow Token operations."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Staking Table:"})," The FlowIDTableStaking contract is the central table that manages staked nodes, delegation, and rewards."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Epoch Contract:"})," The FlowEpoch contract is the state machine that manages Epoch phases and emits service events."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"flow-token",children:"FLOW Token"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/docs/cadence/core-contracts/flow-token",children:"FLOW"})," token is the native currency for the Flow network. Developers and users can use FLOW to transact on the network. Developers can integrate FLOW directly into their apps for peer-to-peer payments, service charges, or consumer rewards. Flow can be held, transferred, or transacted peer-to-peer."]}),"\n",(0,s.jsx)(t.h2,{id:"nft-marketplace",children:"NFT marketplace"}),"\n",(0,s.jsxs)(t.p,{children:["A unique digital asset known as an NFT represents a real-world item, such as artwork, music, in-game items, or films. They can be purchased and sold online via an ",(0,s.jsx)(t.a,{href:"/docs/tutorials/kitty-items/next-steps#learn-more-about-nft-marketplaces",children:"NFT marketplace"}),"."]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);