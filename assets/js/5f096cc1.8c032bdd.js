"use strict";(self.webpackChunkgts_docs_new=self.webpackChunkgts_docs_new||[]).push([[5518],{8979:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});const d=JSON.parse('{"id":"basicspawner/configuration","title":"Configuration","description":"Example Settings File","source":"@site/docs/basicspawner/configuration.md","sourceDirName":"basicspawner","slug":"/basicspawner/configuration","permalink":"/gts-docs/docs/basicspawner/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basicspawner/configuration.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"Configuration","title":"Configuration","sidebar_position":2},"sidebar":"basicspawner","previous":{"title":"Setup","permalink":"/gts-docs/docs/basicspawner/setup"},"next":{"title":"Discord Webhook","permalink":"/gts-docs/docs/basicspawner/webhook"}}');var s=n(4848),t=n(8453);const i={sidebar_label:"Configuration",title:"Configuration",sidebar_position:2},c=void 0,o={},l=[{value:"Example Settings File",id:"example-settings-file",level:2},{value:"General Structure",id:"general-structure",level:3},{value:"Config Example (As Lua Code)",id:"config-example-as-lua-code",level:3}];function a(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"example-settings-file",children:"Example Settings File"}),"\n",(0,s.jsx)(r.h3,{id:"general-structure",children:"General Structure"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Section"}),(0,s.jsx)(r.th,{children:"Key/Field"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Example/Default Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"theme"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"title"})}),(0,s.jsx)(r.td,{children:"The title displayed on the spawner UI."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"String"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:'"GTS Assets Spawner"'})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"logo"})}),(0,s.jsx)(r.td,{children:"The Asset ID of the logo displayed on the spawner UI."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Number"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"13970392854"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"categories"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"CategoryX.name"})}),(0,s.jsx)(r.td,{children:"The name of the category."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"String"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:'"Standard 1 Free"'})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"CategoryX.categoryType"})}),(0,s.jsxs)(r.td,{children:["The type of category (",(0,s.jsx)(r.code,{children:'"free"'})," or ",(0,s.jsx)(r.code,{children:'"gamepass"'}),")."]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"String"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:'"free"'})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"CategoryX.gamepassId"})}),(0,s.jsxs)(r.td,{children:["The Gamepass ID required for access (only for ",(0,s.jsx)(r.code,{children:'"gamepass"'})," categories)."]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Number"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"13600173502"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"CategoryX.layoutOrder"})}),(0,s.jsx)(r.td,{children:"The order in which the category appears in the spawner."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Number"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"1"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"groupSettings"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"enabled"})}),(0,s.jsx)(r.td,{children:"Whether group restrictions are enabled."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Boolean"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"false"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"groupId"})}),(0,s.jsx)(r.td,{children:"The Group ID required for access."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Number"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"16838109"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"minimumSpawnRank"})}),(0,s.jsx)(r.td,{children:"The minimum rank in the group allowed to spawn buses."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Number"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"1"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"modelsLocation"})}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"The location of the bus models in the hierarchy."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Instance"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"game.ServerStorage.BusModels"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"teleportToBus"})}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"Whether players teleport to the bus upon spawning it."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Boolean"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"true"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"despawnOnLeave"})}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"Whether buses despawn when players leave the game."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Boolean"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"true"})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"A descriptive alt text",src:n(945).A+"",width:"1916",height:"1037"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"config-example-as-lua-code",children:"Config Example (As Lua Code)"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lua",metastring:'showLineNumbers title="SpawnerSettings"',children:'local config = {\r\n\r\n    theme = {\r\n        title = "GTS Assets Spawner",\r\n        logo = 13970392854,\r\n    },\r\n\r\n    categories = {\r\n        Category1 = {\r\n            name = "Standard 1 Free",\r\n            categoryType = "free",\r\n            layoutOrder = 1,\r\n        },\r\n        Category2 = {\r\n            name = "Standard 2 Free",\r\n            categoryType = "free",\r\n            layoutOrder = 2,\r\n        },\r\n        Category3 = {\r\n            name = "Standard 3 Paid",\r\n            categoryType = "gamepass",\r\n            gamepassId = 13600173502,\r\n            layoutOrder = 3,\r\n        },\r\n        Category4 = {\r\n            name = "Standard 4 Paid",\r\n            categoryType = "gamepass",\r\n            gamepassId = 13600173502,\r\n            layoutOrder = 4,\r\n        },\r\n    },\r\n\r\n    groupSettings = {\r\n        enabled = false,\r\n        groupId = 16838109,\r\n        minimumSpawnRank = 1,\r\n        minimumAdminRank = 8,\r\n    },\r\n\r\n    modelsLocation = game.ServerStorage.BusModels,\r\n    teleportToBus = true,\r\n    despawnOnLeave = true,\r\n}\r\n\r\nreturn config\n'})}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["Still need support? Join our ",(0,s.jsx)(r.a,{href:"https://discord.gg/5k85S4KWSR",children:"Discord Server"})," for help!."]})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},945:(e,r,n)=>{n.d(r,{A:()=>d});const d=n.p+"assets/images/gif-3-22bd2819b706c88461f5b97e1ab6f339.gif"},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var d=n(6540);const s={},t=d.createContext(s);function i(e){const r=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(t.Provider,{value:r},e.children)}}}]);