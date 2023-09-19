"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[75060],{4608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});n(67294);var o=n(85893),s=n(11151);const r={title:"Epoch and Staking Terminology",sidebar_label:"Epoch and Staking Terminology",description:"Important Definitions for Epochs"},i=void 0,a={unversionedId:"architecture/staking/epoch-terminology",id:"architecture/staking/epoch-terminology",title:"Epoch and Staking Terminology",description:"Important Definitions for Epochs",source:"@site/docs/architecture/staking/02-epoch-terminology.mdx",sourceDirName:"architecture/staking",slug:"/architecture/staking/epoch-terminology",permalink:"/docs/next/architecture/staking/epoch-terminology",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/architecture/staking/02-epoch-terminology.mdx",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1695126171,formattedLastUpdatedAt:"Sep 19, 2023",sidebarPosition:2,frontMatter:{title:"Epoch and Staking Terminology",sidebar_label:"Epoch and Staking Terminology",description:"Important Definitions for Epochs"},sidebar:"architecture",previous:{title:"Epochs, Staking & Delegating on Flow",permalink:"/docs/next/architecture/staking/"},next:{title:"Epoch and Reward Schedule",permalink:"/docs/next/architecture/staking/schedule"}},h={},d=[{value:"Terminology",id:"terminology",level:2}];function c(e){const t=Object.assign({p:"p",h2:"h2",strong:"strong",ul:"ul",li:"li",a:"a"},(0,s.ah)(),e.components),{Callout:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{type:"warning",children:(0,o.jsx)(t.p,{children:"If you haven't read the staking introduction, please read that\nfirst. That document provides a non-technical overview of staking on Flow for\nall users and is a necessary prerequisite to this document."})}),"\n",(0,o.jsx)(n,{type:"warning",children:(0,o.jsx)(t.p,{children:"This document assumes you have some technical knowledge about the Flow\nblockchain and programming environment."})}),"\n",(0,o.jsx)(t.h2,{id:"terminology",children:"Terminology"}),"\n",(0,o.jsx)(t.p,{children:"If any of the definitions are confusing, you can find more detail in the other sections of the technical docs."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Staker:"})," Any user who has staked tokens for the Flow network.\nA node operator is a staker, and a delegator is a staker as well."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Node Operator:"})," A user who operates a node on the Flow network. Each node operator has a unique node resource\nobject they store in their account to perform staking operations."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Node Operator Metadata:"})," This information is tracked for each node operator in the Flow network."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Node ID:"})," 32 byte identifier for the node. Usually a hash of the node public key."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Role:"})," Indicates what role the node operator is. (Collection, Consensus, Execution, Verification, Access)"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Networking Address:"})," The address that the node operator uses for networking. Using a hostname is highly encouraged."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Networking Key:"})," The 64 byte ECDSA-P256 node operator public key for networking."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Staking Key:"})," The 96 byte BLS12-381 public key for the node.\nUsed to sign node messages and votes for Quorum Certificate generation."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Proof of Possession:"})," A 48 byte (96 hex characters) string that acts as cryptographic\nproof of ownership of the node's staking key."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Delegator:"})," A user who delegates tokens to a node operator and receives rewards for their staked tokens, minus a fee\ntaken by the node operator. Each delegator stores a unique delegator resource object in their account\nthat allows them to perform staking operations."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Delegator Metadata:"})," This information is tracked for all delegators in the network.","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"id:"})," The ID associated with a delegator. These IDs are assigned to delegators automatically\nby the staking contract and are only unique within an individual node operators' record."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"nodeID:"})," The ID of the node operator a user delegates to."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Node Identity Table:"})," The record of all the nodes in the network, and their delegators.\nThe identity table keeps separate lists for the info about node operators and delegators."]}),"\n",(0,o.jsx)(n,{type:"warning",children:(0,o.jsx)(t.p,{children:"NOTE: The staking smart contract does not associate a node or delegator with\nan account address. It associates it with the assigned resource object that\ncorresponds to that entry in the contract. There can be any number of these\nobjects stored in the same account, and they can be moved to different\naccounts if the owner chooses."})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Epoch:"})," The period of time between changes in the identity table and reward payments.\n(Initially a week, measured in consensus views)\nAt the end of every epoch, insufficiently staked node operators are refunded their stake,\nrewards are paid to those who are currently staked, committed tokens are marked as staked,\nunstaking tokens are marked as unstaked, and unstaking requests are changed from staked to unstaking."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Consensus View:"})," A internal detail that the Flow consensus algorithm, HotStuff, uses to measure time.\nViews count the number of rounds in the consensus algorithm.\nEach round/view the counter is incremented and a new block may be proposed."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Seat:"})," The right to participate in the network as a node of a certain type for a specific Epoch."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Staking Auction Phase:"})," The period of time when nodes and delegators are able to submit staking operations\nin preparation for the upcoming epoch. This phase is expected to take over 90% of the time of an epoch."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Epoch Setup Phase:"})," The period of time after the staking auction, where nodes have to perform certain processes\nto initialize the state and communication with other nodes for the next epoch.\nThese processes are called ",(0,o.jsx)(t.strong,{children:"Cluster Quorum Certificate Generation (QC)"}),", and ",(0,o.jsx)(t.strong,{children:"Distributed Key Generation (DKG)"}),".\nIf any node does not perform this initialization properly, it is not included in the next epoch's Identity Table.\nThis phase is expected to take less than 10% of the time of an epoch, near the end."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Cluster Quorum Certificate Generation (QC):"})," A process by which nodes using the HotStuff consensus algorithm\nsubmit signed messages in order to generate a certificate for bootstrapping HotStuff. Each collector cluster runs\na mini-version of HotStuff, and since clusters are randomized each epoch, a new quorum ceritificate is required\nfor each cluster each epoch."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Distributed Key Generation (DKG):"})," Process for generating a shared public key to initialize the random beacon.\nConsensus nodes use a shared whiteboard to communicate and submit final key vectors to generate a shared key."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Epoch Commit Phase:"})," The final phase of an epoch, after the Epoch Setup Phase. In this phase, the identity table\nhas been finalized for the next epoch, all setup has been completed, and the network\nis simply waiting for the next epoch to start."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Service Event:"})," Special messages that are generated by the epoch smart contracts and included in execution results.\nThey enable communication between system smart contracts and the Flow protocol.\nIn other words, they serve as a communication mechanism between the execution state and the protocol state.\nService events are not any different that other Cadence events, except in the fact that\nFlow nodes treat them differently because they are being emitted by the service account."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Node and Delegator Staked Token Tracking Terms:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Tokens Committed:"})," The tokens that a user has committed to stake in the next epoch, but that aren't currently staked."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Tokens Staked:"})," The tokens that a user has staked in the current epoch."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Tokens Requested to Unstake:"})," The amount of tokens that a user has requested to be unstaked\nat the end of the current epoch (to be removed from the ",(0,o.jsx)(t.strong,{children:"tokens staked"})," pool)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Tokens Unstaking:"})," The tokens that were unstaked at the beginning of the current epoch and\nare being held for an additional epoch holding period before being released."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Tokens Unstaked:"})," Tokens that used to be committed or staked and have been unstaked."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Tokens Rewarded:"})," Tokens that the user has received via staking rewards."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Delegation Rewards Cut:"})," The percentage of a delegator's rewards that the node operators take. Initially set to 8%."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Epoch Payout:"})," The total amount of tokens paid in rewards at the end of an epoch.\nThis value will change as the supply of FLOW changes. See the ",(0,o.jsx)(t.a,{href:"./schedule",children:"rewards page"})," for more details."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Minimum Stake Requirement:"})," Each node type has a requirement for the minimum number of FLOW\nthey have to commit to stake to be considered a valid node and receive rewards. If a node operator\ndoes not meet the minimum stake, they will not be included in the next epoch and will not receive any rewards.\nDelegators are not subject to minimum stake requirements."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Collection Nodes: 250,000 FLOW"}),"\n",(0,o.jsx)(t.li,{children:"Consensus Nodes: 500,000 FLOW"}),"\n",(0,o.jsx)(t.li,{children:"Execution Nodes: 1,250,000 FLOW"}),"\n",(0,o.jsx)(t.li,{children:"Verification Nodes: 135,000 FLOW"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"There is no maximum stake limit."})]})}const l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}}}]);