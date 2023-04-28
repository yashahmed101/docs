"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5705],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||l;return a?n.createElement(d,r(r({ref:t},u),{},{components:a})):n.createElement(d,r({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},52059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const l={title:"Create Emulator Snapshot with the Flow CLI",sidebar_title:"Create Emulator Snapshot",description:"How to start create emulator snapshot from the command line"},r=void 0,i={unversionedId:"tools/flow-cli/emulator-snapshot",id:"tools/flow-cli/emulator-snapshot",title:"Create Emulator Snapshot with the Flow CLI",description:"How to start create emulator snapshot from the command line",source:"@site/docs/tools/flow-cli/emulator-snapshot.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/emulator-snapshot",permalink:"/docs/tools/flow-cli/emulator-snapshot",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709940,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Create Emulator Snapshot with the Flow CLI",sidebar_title:"Create Emulator Snapshot",description:"How to start create emulator snapshot from the command line"},sidebar:"tutorialSidebar",previous:{title:"release-notes-v28",permalink:"/docs/tools/flow-cli/developer-updates/release-notes-v28"},next:{title:"Execute a Script with the Flow CLI",permalink:"/docs/tools/flow-cli/execute-scripts"}},s={},p=[{value:"Example Usage",id:"example-usage",level:2},{value:"Create a new snapshot",id:"create-a-new-snapshot",level:3},{value:"Load an existing snapshot",id:"load-an-existing-snapshot",level:3},{value:"List all existing snapshots",id:"list-all-existing-snapshots",level:3},{value:"Flags",id:"flags",level:2},{value:"Emulator Flags",id:"emulator-flags",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Version Check",id:"version-check",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Flow CLI provides a command to create emulator snapshots, which are points in blockchain\nhistory you can later jump to and reset the state to that moment. This can be useful for testing where you\nestablish a begining state, run tests and after revert back to the initial state."),(0,o.kt)("p",null,"The command syntax is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"flow emulator snapshot create|load|list {name}\n")),(0,o.kt)("h2",{id:"example-usage"},"Example Usage"),(0,o.kt)("h3",{id:"create-a-new-snapshot"},"Create a new snapshot"),(0,o.kt)("p",null,"Create a new emulator snapshot at the current block with a name of ",(0,o.kt)("inlineCode",{parentName:"p"},"myInitialState"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> flow emulator snapshot create myInitialState\n")),(0,o.kt)("h3",{id:"load-an-existing-snapshot"},"Load an existing snapshot"),(0,o.kt)("p",null,"To jump to a previously created snapshot we use the load command in combination with the name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> flow emulator snapshot load myInitialState\n")),(0,o.kt)("h3",{id:"list-all-existing-snapshots"},"List all existing snapshots"),(0,o.kt)("p",null,"To list all the existing snapshots we previously created and can load to we run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> flow emulator list\n")),(0,o.kt)("p",null,"To learn more about using the Emulator, have a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-emulator"},"README of the repository"),"."),(0,o.kt)("h2",{id:"flags"},"Flags"),(0,o.kt)("h3",{id:"emulator-flags"},"Emulator Flags"),(0,o.kt)("p",null,"You can specify any ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-emulator#configuration"},"emulator flags found here")," and they will be applied to the emulator service."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flag: ",(0,o.kt)("inlineCode",{parentName:"li"},"--config-path")),(0,o.kt)("li",{parentName:"ul"},"Short Flag: ",(0,o.kt)("inlineCode",{parentName:"li"},"-f")),(0,o.kt)("li",{parentName:"ul"},"Valid inputs: valid filename")),(0,o.kt)("p",null,"Specify a filename for the configuration files, you can provide multiple configuration\nfiles by using ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," flag multiple times."),(0,o.kt)("h3",{id:"version-check"},"Version Check"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flag: ",(0,o.kt)("inlineCode",{parentName:"li"},"--skip-version-check")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"Skip version check during start up to speed up process for slow connections."))}m.isMDXComponent=!0}}]);