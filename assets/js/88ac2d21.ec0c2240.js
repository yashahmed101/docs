"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[28936],{58152:(t,e,c)=>{c.r(e),c.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>a,frontMatter:()=>n,metadata:()=>o,toc:()=>l});c(67294);var s=c(85893),r=c(11151);const n={title:"Flow Epoch Contracts Reference",sidebar_title:"Epoch Contracts"},d="Contract",o={unversionedId:"building-on-flow/core-contracts/epoch-contract-reference",id:"building-on-flow/core-contracts/epoch-contract-reference",title:"Flow Epoch Contracts Reference",description:"The FlowEpoch contract is the state machine that manages Epoch phases and emits service events.",source:"@site/docs/building-on-flow/core-contracts/07-epoch-contract-reference.md",sourceDirName:"building-on-flow/core-contracts",slug:"/building-on-flow/core-contracts/epoch-contract-reference",permalink:"/docs/next/building-on-flow/core-contracts/epoch-contract-reference",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/building-on-flow/core-contracts/07-epoch-contract-reference.md",tags:[],version:"current",lastUpdatedBy:"Bastian M\xfcller",lastUpdatedAt:1694645030,formattedLastUpdatedAt:"Sep 13, 2023",sidebarPosition:7,frontMatter:{title:"Flow Epoch Contracts Reference",sidebar_title:"Epoch Contracts"},sidebar:"buildingOnFlow",previous:{title:"Staking Table",permalink:"/docs/next/building-on-flow/core-contracts/staking-contract-reference"},next:{title:"Non-Fungible Token",permalink:"/docs/next/building-on-flow/core-contracts/non-fungible-token"}},i={},l=[{value:"Getting Epoch Info",id:"getting-epoch-info",level:2},{value:"Quorum Certificate Transactions and Scripts",id:"quorum-certificate-transactions-and-scripts",level:2},{value:"DKG Transactions and Scripts",id:"dkg-transactions-and-scripts",level:2}];function h(t){const e=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2",strong:"strong"},(0,r.ah)(),t.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"contract",children:"Contract"}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.code,{children:"FlowEpoch"})," contract is the state machine that manages Epoch phases and emits service events.\nThe ",(0,s.jsx)(e.code,{children:"FlowClusterQC"})," and ",(0,s.jsx)(e.code,{children:"FlowDKG"})," contracts manage the processes that happen during the Epoch Setup phase."]}),"\n",(0,s.jsxs)(e.p,{children:["These contracts are all deployed to the same account as the ",(0,s.jsx)(e.code,{children:"FlowIDTableStaking"})," contract."]}),"\n",(0,s.jsx)(e.p,{children:"Sources:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/epochs/FlowEpoch.cdc",children:"FlowEpoch.cdc"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/epochs/FlowClusterQC.cdc",children:"FlowClusterQC.cdc"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/epochs/FlowDKG.cdc",children:"FlowDKG.cdc"})}),"\n"]}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Network"}),(0,s.jsx)(e.th,{children:"Contract Address"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Emulator/Canary"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"0xf8d6e0586b0a20c7"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Testnet"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"0x9eca2b38b18b5dfe"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Mainnet"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"0x8624b52f9ddcd04a"})})]})]})]}),"\n",(0,s.jsx)(e.h1,{id:"transactions",children:"Transactions"}),"\n",(0,s.jsx)(e.h2,{id:"getting-epoch-info",children:"Getting Epoch Info"}),"\n",(0,s.jsx)(e.p,{children:"These scripts are read-only and get info about the current state of the epoch contract."}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"ID"}),(0,s.jsx)(e.th,{children:"Name"}),(0,s.jsx)(e.th,{children:"Source"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"EP.01"})})}),(0,s.jsx)(e.td,{children:"Get Epoch Metadata"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/epoch/scripts/get_epoch_metadata.cdc",children:"epoch/get_epoch_metadata.cdc"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"EP.02"})})}),(0,s.jsx)(e.td,{children:"Get Configurable Metadata"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/epoch/scripts/get_config_metadata.cdc",children:"epoch/get_config_metadata.cdc"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"EP.03"})})}),(0,s.jsx)(e.td,{children:"Get Epoch Counter"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/epoch/scripts/get_epoch_counter.cdc",children:"epoch/get_epoch_counter.cdc"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"EP.04"})})}),(0,s.jsx)(e.td,{children:"Get Epoch Phase"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/epoch/scripts/get_epoch_phase.cdc",children:"epoch/get_epoch_phase.cdc"})})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"quorum-certificate-transactions-and-scripts",children:"Quorum Certificate Transactions and Scripts"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"ID"}),(0,s.jsx)(e.th,{children:"Name"}),(0,s.jsx)(e.th,{children:"Source"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"QC.01"})})}),(0,s.jsx)(e.td,{children:"Create QC Voter"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/quorumCertificate/create_voter.cdc",children:"quorumCertificate/get_epoch_metadata.cdc"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"QC.02"})})}),(0,s.jsx)(e.td,{children:"Submit QC Vote"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/quorumCertificate/submit_vote.cdc",children:"quorumCertificate/get_config_metadata.cdc"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"QC.03"})})}),(0,s.jsx)(e.td,{children:"Get Collector Cluster"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/quorumCertificate/scripts/get_cluster.cdc",children:"quorumCertificate/scripts/get_cluster.cdc"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"QC.04"})})}),(0,s.jsx)(e.td,{children:"Get QC Enabled"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/quorumCertificate/scripts/get_qc_enabled.cdc",children:"quorumCertificate/scripts/get_qc_enabled.cdc"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"QC.05"})})}),(0,s.jsx)(e.td,{children:"Get Node Has Voted"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/quorumCertificate/scripts/get_node_has_voted.cdc",children:"quorumCertificate/scripts/get_node_has_voted.cdc"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"QC.06"})})}),(0,s.jsx)(e.td,{children:"Get QC Voting Complete"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/quorumCertificate/scripts/get_voting_completed.cdc",children:"quorumCertificate/scripts/get_voting_completed.cdc"})})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"dkg-transactions-and-scripts",children:"DKG Transactions and Scripts"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"ID"}),(0,s.jsx)(e.th,{children:"Name"}),(0,s.jsx)(e.th,{children:"Source"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"DKG.01"})})}),(0,s.jsx)(e.td,{children:"Create DKG Participant"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/create_participant.cdc",children:"dkg/create_participant.cdc"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"DKG.02"})})}),(0,s.jsx)(e.td,{children:"Get Configurable Metadata"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/send_whiteboard_message.cdc",children:"dkg/send_whiteboard_message.cdc"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"DKG.03"})})}),(0,s.jsx)(e.td,{children:"Send Final Submission"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/send_final_submission.cdc",children:"dkg/send_final_submission.cdc"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"DKG.04"})})}),(0,s.jsx)(e.td,{children:"Get DKG Enabled"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/scripts/get_dkg_enabled.cdc",children:"dkg/scripts/get_dkg_enabled.cdc"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"DKG.05"})})}),(0,s.jsx)(e.td,{children:"Get DKG Completed"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/scripts/get_dkg_completed.cdc",children:"dkg/scripts/get_dkg_completed.cdc"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"DKG.06"})})}),(0,s.jsx)(e.td,{children:"Get Whiteboard Messages"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/scripts/get_whiteboard_messages.cdc",children:"dkg/scripts/get_whiteboard_messages.cdc"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"DKG.07"})})}),(0,s.jsx)(e.td,{children:"Get Final Submissions"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/scripts/get_final_submissions.cdc",children:"dkg/scripts/get_final_submissions.cdc"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"DKG.08"})})}),(0,s.jsx)(e.td,{children:"Get Node Has Submitted"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/dkg/scripts/get_node_has_submitted.cdc",children:"dkg/scripts/get_node_has_submitted.cdc"})})]})]})]})]})}const a=function(t){void 0===t&&(t={});const{wrapper:e}=Object.assign({},(0,r.ah)(),t.components);return e?(0,s.jsx)(e,Object.assign({},t,{children:(0,s.jsx)(h,t)})):h(t)}}}]);