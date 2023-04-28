"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"Modify",description:"Add an exclusive NFT collection",sidebar_title:"Modify"},r=void 0,s={unversionedId:"1.Learn/Kitty-items/modify",id:"1.Learn/Kitty-items/modify",title:"Modify",description:"Add an exclusive NFT collection",source:"@site/docs/1.Learn/Kitty-items/modify.md",sourceDirName:"1.Learn/Kitty-items",slug:"/1.Learn/Kitty-items/modify",permalink:"/docs/1.Learn/Kitty-items/modify",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682709940,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Modify",description:"Add an exclusive NFT collection",sidebar_title:"Modify"},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/docs/1.Learn/Kitty-items/install"},next:{title:"Next steps",permalink:"/docs/1.Learn/Kitty-items/next-steps"}},l={},c=[{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"Start in emulator",id:"start-in-emulator",level:2},{value:"Add new NFT collection",id:"add-new-nft-collection",level:2},{value:"Update the backend API",id:"update-the-backend-api",level:3},{value:"Update the web application",id:"update-the-web-application",level:3},{value:"Update the Cadence smart contract",id:"update-the-cadence-smart-contract",level:3},{value:"Add a new kind",id:"add-a-new-kind",level:4},{value:"Update the kindToString method",id:"update-the-kindtostring-method",level:4},{value:"Create a transaction to update the list of images for your new kind",id:"create-a-transaction-to-update-the-list-of-images-for-your-new-kind",level:4},{value:"Update contract on the emulator",id:"update-contract-on-the-emulator",level:2},{value:"Run the new transaction to update the KittyItems contract",id:"run-the-new-transaction-to-update-the-kittyitems-contract",level:2},{value:"Mint new sunglasses NFT",id:"mint-new-sunglasses-nft",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following steps will guide you through a modification of the Kitty Items project. You will add a new NFT kind, representing an exclusive collection of rare NFTs of sunglasses:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sunglasses",src:n(41830).Z,width:"997",height:"440"})),(0,o.kt)("h2",{id:"video-walkthrough"},"Video Walkthrough"),(0,o.kt)("iframe",{width:"100%",height:"450",src:"https://www.youtube.com/embed/xLRI4F6X89I",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"start-in-emulator"},"Start in emulator"),(0,o.kt)("p",null,"In the last step, you started the project on the testnet. For local development, however, it is recommended to emulate the blockchain network locally using the ",(0,o.kt)("a",{parentName:"p",href:"/emulator/"},"Flow Emulator"),". Once changes are implemented and tested locally, you will deploy the updates to the testnet."),(0,o.kt)("p",null,"Let's start the project in the emulator by running the command below in the root project folder."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important"),": You will notice that the previous script execution finished once all services successfully started. You ",(0,o.kt)("strong",{parentName:"p"},"do not need to stop the previous process"),". By running the next command, existing services will be configured to communicate with the emulator instead of the testnet.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run dev:emulator\n")),(0,o.kt)("p",null,"You should see similar logs as in the last step:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\u2714 Emulator started\n\u2139 Flow Emulator is running at: http://localhost:8080\n\u2139 View log output: npx pm2 logs emulator\n\n\u2714 Developer Wallet started\n\u2139 FCL Dev Wallet running at: http://localhost:8701\n\u2139 View log output: npx pm2 logs dev-wallet\n\n\u2714 Contracts deployed\n\u2139 Contracts were deployed to: 0xf8d6e0586b0a20c7 (emulator)\n\n\u2714 Admin account initialized\n\u2139 ./cadence/transactions/nftStorefront/setup_account.cdc was executed successfully.\n\u2139 ./cadence/transactions/kittyItems/setup_account.cdc was executed successfully.\n\n\u2714 API server started\n\u2139 Kitty Items API is running at: http://localhost:3000\n\u2139 View log output: npx pm2 logs api\n\n\u2714 Storefront web app started\n\u2139 Kitty Items Web App is running at: http://localhost:3001\n\u2139 View log output: npx pm2 logs web\n\nKITTY ITEMS HAS STARTED\n\n\nVisit: http://localhost:3001\n\n? Would you like to view the logs for all processes? (Y/n)\n")),(0,o.kt)("p",null,"Once again, you will be asked if you want to show all logs. You can enter ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," for now."),(0,o.kt)("p",null,"You may notice that you were not prompted for an account. This is because the local setup includes a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/fcl-dev-wallet"},"developer wallet")," that simulates user accounts."),(0,o.kt)("h2",{id:"add-new-nft-collection"},"Add new NFT collection"),(0,o.kt)("p",null,"To add the new NFT collection, we will have to make changes to several components of the project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Backend API: Add the new collection to the list of available collections"),(0,o.kt)("li",{parentName:"ul"},"Web application: Define the new collection name and add it to the map of available collections"),(0,o.kt)("li",{parentName:"ul"},"Cadence: Define the new collection name, add it to the map of available collections, set the content hash for the images (",(0,o.kt)("a",{parentName:"li",href:"/dapp-development/smart-contracts/#external-storage-networks"},"stored on IPFS"),")")),(0,o.kt)("p",null,"To start making your changes, it is recommended to open the project in a code editor like ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Recommended"),": Install the ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=onflow.cadence"},"VSCode extension for Cadence")," to get syntax highlighting, type checking, and code completion support. If you have VSCode in your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH"),", you can use the CLI to install the extension: ",(0,o.kt)("inlineCode",{parentName:"p"},"flow cadence install-vscode-extension"),".")),(0,o.kt)("h3",{id:"update-the-backend-api"},"Update the backend API"),(0,o.kt)("p",null,"Open the file ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/src/services/kitty-items.ts")," and add new element (",(0,o.kt)("inlineCode",{parentName:"p"},"Shades"),") at the bottom of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Kind")," enum:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js:title=/api/src/services/kitty-items.ts"},"enum Kind {\n  Fishbowl = 0,\n  Fishhat,\n  Milkshake,\n  TukTuk,\n  Skateboard,\n  Shades\n}\n")),(0,o.kt)("h3",{id:"update-the-web-application"},"Update the web application"),(0,o.kt)("p",null,"Open the file ",(0,o.kt)("inlineCode",{parentName:"p"},"/web/src/global/constants.js")," and add a new item (",(0,o.kt)("inlineCode",{parentName:"p"},"Shades"),") to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ITEM_KIND_MAP")," constant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js:title=/web/src/global/constants.js"},'export const ITEM_KIND_MAP = {\n  0: "Fishbowl",\n  1: "Fish Hat",\n  2: "Milkshake",\n  3: "TukTuk",\n  4: "Skateboard",\n  5: "Shades",\n};\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": To simplify this tutorial, we already added the images for the NFT collection to the project folder. If you were to add new NFTs on your own, you would also need to add images to the ",(0,o.kt)("inlineCode",{parentName:"p"},"web/public/images/kitty-items")," folder.")),(0,o.kt)("h3",{id:"update-the-cadence-smart-contract"},"Update the Cadence smart contract"),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"/cadence/contracts/KittyItems.cdc")," file and make the following changes."),(0,o.kt)("h4",{id:"add-a-new-kind"},"Add a new kind"),(0,o.kt)("p",null,"Locate the ",(0,o.kt)("inlineCode",{parentName:"p"},"enum Kind")," object and add a new case (",(0,o.kt)("inlineCode",{parentName:"p"},"shades"),") to the bottom of the list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence:title=/cadence/contracts/KittyItems.cdc"},"pub enum Kind: UInt8 {\n    pub case fishbowl\n    pub case fishhat\n    pub case milkshake\n    pub case tuktuk\n    pub case skateboard\n    pub case shades\n}\n")),(0,o.kt)("h4",{id:"update-the-kindtostring-method"},"Update the kindToString method"),(0,o.kt)("p",null,"This method is used to set the name and description of a specified NFT. Locate the the ",(0,o.kt)("inlineCode",{parentName:"p"},"kindToString")," method and add a new case (",(0,o.kt)("inlineCode",{parentName:"p"},"Kind.shades"),") to the bottom of the switch statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence:title=/cadence/contracts/KittyItems.cdc"},'pub fun kindToString(_ kind: Kind): String {\n    switch kind {\n        case Kind.fishbowl:\n            return "Fishbowl"\n        case Kind.fishhat:\n            return "Fish Hat"\n        case Kind.milkshake:\n            return "Milkshake"\n        case Kind.tuktuk:\n            return "Tuk-Tuk"\n        case Kind.skateboard:\n            return "Skateboard"\n        case Kind.shades:\n            return "Shades"\n    }\n\n    return ""\n}\n')),(0,o.kt)("h4",{id:"create-a-transaction-to-update-the-list-of-images-for-your-new-kind"},"Create a transaction to update the list of images for your new kind"),(0,o.kt)("p",null,"Next, you need to create a transaction to update the contract with new links to the images for the new NFT kind."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": You can't modify the list of images in the ",(0,o.kt)("inlineCode",{parentName:"p"},"init()")," function directly because this function only runs ",(0,o.kt)("em",{parentName:"p"},"the first time your contract is deployed")," - not on subsequent updates. You can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.onflow.org/cadence/language/contract-updatability/"},"read more about here"),".")),(0,o.kt)("p",null,"In the root directory of the project, run the following commands to create a new file for the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"touch cadence/transactions/kittyItems/add_nft_images_for_new_kind.cdc\n")),(0,o.kt)("p",null,"Navigate to the new file, open it, and paste the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence:title=cadence/transactions/kittyItems/add_nft_images_for_new_kind.cdc"},'import KittyItems from "../../contracts/KittyItems.cdc"\n\n// This transction uses the NFTMinter resource to add new image URIs for a new Kind of KittyItems NFT.\n\ntransaction {\n\n  let minter: &KittyItems.NFTMinter\n\n  prepare(signer: AuthAccount) {\n\n    self.minter = signer.borrow<&KittyItems.NFTMinter>(from: KittyItems.MinterStoragePath)\n            ?? panic("Only authorized KittyItems NFT Minter can update KittyItems NFT...")\n\n    let NewImages: { KittyItems.Kind: {KittyItems.Rarity: String}} = {\n\n      // The image URIs are hardcoded here for demonstration,\n      // but could also be passed in to the transaction as arguments.\n\n      KittyItems.Kind.shades: {\n        KittyItems.Rarity.blue: "bafybeibtxvitlnvksnzwrwmsqdgnoznosknr3fx5jxjazjcerpa2qo4jy4",\n        KittyItems.Rarity.green: "bafybeicp5bagsziwkyarey76m5jkr6i3a5yrgr7r435qyuutbtlqxcdbwu",\n        KittyItems.Rarity.purple: "bafybeidjigkvt67dtuwrgrpdt2z4dojq2efpbw66ndnffkb6eyr4baml2i",\n        KittyItems.Rarity.gold: "bafybeibtxvitlnvksnzwrwmsqdgnoznosknr3fx5jxjazjcerpa2qo4jy4"\n      }\n    }\n\n    self.minter.addNewImagesForKind(from: signer, newImages: NewImages);\n\n  }\n\n  // the FLOAT NFT secret code is: witty-kitty\n  execute {}\n}\n')),(0,o.kt)("p",null,"This transaction borrows the minter Resource from the signing account and calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"addNewImagesForKind")," method on the minter Resource. It passes a struct containing the links to the new images for the ",(0,o.kt)("inlineCode",{parentName:"p"},"shades")," kind."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": If the signing account does not have the minter Resource, this transaction will fail. This is good, because we only want the account that mints NFTs to be able to modify the contract. Also keep in mind, that if you were to add your own NFT, you would have to upload images to IPFS and store the new hashes instead.")),(0,o.kt)("p",null,"Make sure you saved the file before proceeding to the next step."),(0,o.kt)("h2",{id:"update-contract-on-the-emulator"},"Update contract on the emulator"),(0,o.kt)("p",null,"Because you changed the smart contract for Kitty Items, you have to redeploy it to the emulator. Run the following command in your terminal, inside the root folder."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": You will notice that the previous script execution finished once all services successfully started. You do not need to stop the previous process. You can run the next command in the same terminal without impact on the services running in the background.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run update:emulator\n")),(0,o.kt)("p",null,"The script will update all contracts included in the project. The last one is the one you changed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"Deploying 4 contracts for accounts: emulator-account\n\nNonFungibleToken -> 0xf8d6e0586b0a20c7 (3346...6218)\nNFTStorefront -> 0xf8d6e0586b0a20c7 (c0e6...662b)\nMetadataViews -> 0xf8d6e0586b0a20c7 (e6c2...ef11)\nKittyItems -> 0xf8d6e0586b0a20c7 (3612...dcdb)\n\n\u2728 All contracts deployed successfully\n")),(0,o.kt)("h2",{id:"run-the-new-transaction-to-update-the-kittyitems-contract"},"Run the new transaction to update the KittyItems contract"),(0,o.kt)("p",null,"Run the following command to send the transaction to update the contract with the new ",(0,o.kt)("inlineCode",{parentName:"p"},"shades")," images."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"flow transactions send ./cadence/transactions/kittyItems/add_nft_images_for_new_kind.cdc -n emulator\n")),(0,o.kt)("p",null,"You should see the following response. Take note of the Status - it should be ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2705 SEALED"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Transaction ID: af76f20581a3923375fd52428cef078670673295c9d786a8ac9e616661a7f88e\n\nStatus          \u2705 SEALED\nID              af76f20581a3923375fd52428cef078670673295c9d786a8ac9e616661a7f88e\nPayer           f8d6e0586b0a20c7\nAuthorizers     [f8d6e0586b0a20c7]\n\nProposal Key:\n    Address     f8d6e0586b0a20c7\n    Index       0\n    Sequence    15\n\nNo Payload Signatures\n\nEnvelope Signature 0: f8d6e0586b0a20c7\nSignatures (minimized, use --include signatures)\n\nEvents:\n    Index       0\n    Type        A.f8d6e0586b0a20c7.KittyItems.ImagesAddedForNewKind\n    Tx ID       af76f20581a3923375fd52428cef078670673295c9d786a8ac9e616661a7f88e\n    Values\n                - kind (UInt8): 5\n")),(0,o.kt)("p",null,"As indicated, the transaction was sealed and you are ready to mint your new KittyItems NFT."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations! You have completed all changes and your project now includes a new NFT collection for sunglasses.")),(0,o.kt)("h2",{id:"mint-new-sunglasses-nft"},"Mint new sunglasses NFT"),(0,o.kt)("p",null,"To mint one of the new NFTs in your local environment, you have to repeat the minting steps from the ",(0,o.kt)("a",{parentName:"p",href:"/kitty-items/start/#open-kitty-items"},"last page"),"."),(0,o.kt)("p",null,"First, open the Kitty Items ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3001/admin/mint/"},"admin dashboard"),". Keep in mind that the password is ",(0,o.kt)("inlineCode",{parentName:"p"},"KittyItems"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"admin-ui",src:n(66531).Z,width:"2714",height:"1280"})),(0,o.kt)("p",null,'Now, hit the "Mint Item" button and see a new NFT being generated. The generation of new NFTs is randomized, so you will have to ',(0,o.kt)("strong",{parentName:"p"},"mint a few new NFTs")," until you will see an NFT from your new sunglasses collection."),(0,o.kt)("p",null,"During the minting process, you should see the sunglasses flash in the preview pane on the left side of the screen."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),': It is best to hit the back button in your browser to get back to the "Mint a New Item" screen. You can jump to this screen by opening the ',(0,o.kt)("a",{parentName:"p",href:"http://localhost:3001/admin/mint/"},"admin dashboard")," directly.")))}p.isMDXComponent=!0},66531:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/admin-ui-713b4afef87878d3f2ac9a7b32c45027.png"},41830:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/shades-nft-daf39fcd5393f418555065bdcf401595.png"}}]);