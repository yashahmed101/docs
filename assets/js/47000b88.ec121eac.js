"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,p=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(p,r(r({ref:t},h),{},{components:n})):o.createElement(p,r({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={title:"Measuring Time In Cadence"},r=void 0,s={unversionedId:"cadence/measuring-time",id:"cadence/measuring-time",title:"Measuring Time In Cadence",description:"Accessing Time From Cadence",source:"@site/docs/cadence/measuring-time.mdx",sourceDirName:"cadence",slug:"/cadence/measuring-time",permalink:"/docs/cadence/measuring-time",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709940,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Measuring Time In Cadence"},sidebar:"tutorialSidebar",previous:{title:"Values and Types",permalink:"/docs/cadence/language/values-and-types"},next:{title:"Release Process",permalink:"/docs/cadence/releasing"}},l={},c=[{value:"Accessing Time From Cadence",id:"accessing-time-from-cadence",level:2},{value:"Time On The Flow Blockchain",id:"time-on-the-flow-blockchain",level:2},{value:"Using The Timestamp",id:"using-the-timestamp",level:3},{value:"Using The Block Height",id:"using-the-block-height",level:3},{value:"Recommendations",id:"recommendations",level:2}],h={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"accessing-time-from-cadence"},"Accessing Time From Cadence"),(0,a.kt)("p",null,"Both the ",(0,a.kt)("a",{parentName:"p",href:"language/environment-information#block-information"},"block height and the block timestamp")," are accessible from within Cadence code."),(0,a.kt)("p",null,"This means that they can be used to calculate dates and durations by smart contracts on Flow\nthat need to lock resources until a particular point in the future, calculate values between a range of dates,\nor otherwise deal with the passage of time."),(0,a.kt)("p",null,"There are two popular strategies that are used to measure time on blockchains:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use the timestamp, and optionally check that the average duration of the last n blocks\nis close enough to the block target duration to make an attack unlikely."),(0,a.kt)("li",{parentName:"ol"},"Use the block height directly. Block height can be treated intuitively\n(a hundred blocks, a thousand blocks) or can be related to estimated timestamps\nand thereby to time off-chain by the methods described in this article.")),(0,a.kt)("h2",{id:"time-on-the-flow-blockchain"},"Time On The Flow Blockchain"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Flow targets 1 second block times but the protocol is still early in its development\nand further optimizations are needed to achieve that.\nAs of Feb 2021, the rate of block finalization on Mainnet is more than 0.5 blocks/s; with a standard deviation of \xb10.1 blocks/s.\nHence, a new block is finalized on average every 2 seconds.\nNote that block height only has a loose correlation with time,\nas ",(0,a.kt)("a",{parentName:"p",href:"https://developers.flow.com/flow/faq/operators#does-the-blockheight-go-up-1-every-second"},"the block rate naturally fluctuates"),".")),(0,a.kt)("p",null,"In addition to the natural variation described above,\nthere are several theoretical block production attacks that could skew this relationship even further.\nThese attacks are unlikely on Flow in the absence of byzantine nodes.\nThe timestamp cannot be earlier than the timestamp of the previous block,\nand cannot be too far into the future (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go/blob/master/module/builder/consensus/builder.go#L60"},"currently ten seconds"),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"proposed blocks that fail to satisfy these conditions will be rejected by Flow's consensus algorithm.\nBut the mere possibility of these attacks places an additional limit on the confidence\nwith which we can use block heights or block timestamps to determine off-chain time from protocol-level data on-chain.")),(0,a.kt)("p",null,'The block timestamp is not the only way to identify a block within the flow of off-chain time.\nEach block is numbered successively by its "height", block 70000 is followed by block 70001, 70002,\nand so on. Blocks with heights out of sequence are rejected by Flow\'s consensus algorithm.\nIn theory the timestamp on a block should be roughly equivalent to the timestamp on the Flow genesis block,\nplus the block height multiplied by the target block rate.\nBut as we have seen both the target and the on-chain average rate of block production may vary over time.\nThis makes such calculations more difficult.'),(0,a.kt)("h3",{id:"using-the-timestamp"},"Using The Timestamp"),(0,a.kt)("p",null,"Given that ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go/blob/1e8a2256171d5fd576f442d0c335c9bcc06e1e09/module/builder/consensus/builder.go#L525-L536"},"Flow consensus will reject new blocks with a timestamp more than ten seconds into the future from the previous block"),",\nas long as you do not require an accuracy of less than ten seconds\nit is probably safe to use the block timestamp for events lasting a few days - in the absence of a change in block production rate targets.\nOr, more intuitively, your timestamp is highly likely to be the correct hour,\nvery likely to be the correct minute, and may well be within ten seconds of the correct second.\nWhich of these scales is tolerable for your use case depends on how long the events you need to represent will take.\nIn an auction lasting several days, you are probably safe with any scale above ten seconds."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"// To get the timestamp of the block that the code is being executed in\ngetCurrentBlock().timestamp\n\n// To get the timestamp of a known previous block, if available\ngetBlock(at: 70001)?.timestamp\n")),(0,a.kt)("h3",{id:"using-the-block-height"},"Using The Block Height"),(0,a.kt)("p",null,"In theory block numbers are more reliable than timestamps,\nas the block height is incremented for each block in a fork.\nBut in practice we must still relate block numbers to off-chain time values,\nand to do this requires that we assume that the average block time will hold.\nThis can vary due to factors other than attacks.\nGiven that block time targets will vary as Flow development continues,\nthis will affect any calculations you may make in order to relate block numbers to calendar time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"// To get the block number of the block that the code is being executed in\ngetCurrentBlock().height\n\n// To get the block number of a known previous block, if available\ngetBlock(at: 70001)?.height\n")),(0,a.kt)("h2",{id:"recommendations"},"Recommendations"),(0,a.kt)("p",null,"If your contract code can tolerate the limitations described above, use block timestamps.\nIf not, you may need to consider more exotic solutions (time oracles, etc.)."),(0,a.kt)("p",null,"Whichever method you use, be careful not to hardcode any assumptions\nabout block rates production rates into your code, on-chain or off,\nin a way that cannot be updated later."),(0,a.kt)("p",null,"On-chain auctions and similar mechanisms should always have an extension mechanism.\nIf someone bids at the last moment (which is easier to do with a block production attack),\nthe end time for the auction extends (if necessary) to N minutes past the last bid.\n(10 minutes, 30 minutes, an hour). As N increases, this becomes more secure:\nN=5 should be more than enough. with the current parameters of the Flow blockchain."))}m.isMDXComponent=!0}}]);