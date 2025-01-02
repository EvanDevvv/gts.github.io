"use strict";(self.webpackChunkgts_docs_new=self.webpackChunkgts_docs_new||[]).push([[4892],{4264:(A,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>B});const t=JSON.parse('{"id":"advancedspawner/advanced-spawning","title":"Advanced Spawning","description":"What is Advanced Spawning?","source":"@site/docs/advancedspawner/advanced-spawning.md","sourceDirName":"advancedspawner","slug":"/advancedspawner/advanced-spawning","permalink":"/gts-docs/docs/advancedspawner/advanced-spawning","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advancedspawner/advanced-spawning.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_label":"Advanced Spawning Setup","title":"Advanced Spawning","sidebar_position":4},"sidebar":"advancedspawner","previous":{"title":"Admin Setup","permalink":"/gts-docs/docs/advancedspawner/admin-setup"},"next":{"title":"Discord Webhook","permalink":"/gts-docs/docs/advancedspawner/webhook"}}');var a=s(4848),n=s(8453);const i={sidebar_label:"Advanced Spawning Setup",title:"Advanced Spawning",sidebar_position:4},o=void 0,d={},B=[{value:"What is Advanced Spawning?",id:"what-is-advanced-spawning",level:2},{value:"Setup",id:"setup",level:2},{value:"1. Set SpawnType to &quot;Advanced&quot;",id:"1-set-spawntype-to-advanced",level:3},{value:"2. Set the Model Name Attribute",id:"2-set-the-model-name-attribute",level:3},{value:"3. Organize the BusSpawns Folder",id:"3-organize-the-busspawns-folder",level:3},{value:"4. Repeat for Each Model",id:"4-repeat-for-each-model",level:3},{value:"5. Issues with Pivot",id:"5-issues-with-pivot",level:3},{value:"Congratulations, You Have Set Up Advanced Spawning!",id:"congratulations-you-have-set-up-advanced-spawning",level:2}];function c(A){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",strong:"strong",...(0,n.R)(),...A.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"what-is-advanced-spawning",children:"What is Advanced Spawning?"}),"\n",(0,a.jsxs)(e.p,{children:["Advanced spawning reduces lag in your game by using a single model for all buses of the same type. For example, all buses with the model ",(0,a.jsx)(e.code,{children:'"2023 IC CE"'})," will only use one actual model, rather than 50 different models."]}),"\n",(0,a.jsxs)(e.p,{children:["If you do not plan on using advanced spawning, you can delete the folder named ",(0,a.jsx)(e.code,{children:"BusSpawns"})," in the ",(0,a.jsx)(e.strong,{children:"Workspace"}),"."]}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(e.h3,{id:"1-set-spawntype-to-advanced",children:'1. Set SpawnType to "Advanced"'}),"\n",(0,a.jsxs)(e.p,{children:["First, go to your ",(0,a.jsx)(e.strong,{children:"SpawnerSettings"})," and set the ",(0,a.jsx)(e.code,{children:"SpawnType"})," to ",(0,a.jsx)(e.code,{children:'"advanced"'}),"."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Advanced Spawning Setup",src:s(9579).A+"",width:"210",height:"36"})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"2-set-the-model-name-attribute",children:"2. Set the Model Name Attribute"}),"\n",(0,a.jsxs)(e.p,{children:["For all buses that will use the same model, set the ",(0,a.jsx)(e.code,{children:"ModelName"})," attribute under your configurations to the name of the model you want (e.g., ",(0,a.jsx)(e.code,{children:'"2023 IC CE"'}),")."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Setting Model Name",src:s(8654).A+"",width:"352",height:"25"})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"3-organize-the-busspawns-folder",children:"3. Organize the BusSpawns Folder"}),"\n",(0,a.jsxs)(e.p,{children:["Ensure that the ",(0,a.jsx)(e.strong,{children:"BusSpawns"})," folder is ungrouped and placed into ",(0,a.jsx)(e.strong,{children:"Workspace"}),". You can now move the arrow wherever you want it to go. The bus's pivot will determine the position of the arrow, so feel free to rotate and move it."]}),"\n",(0,a.jsx)(e.p,{children:"The front of the bus will face in the same direction as the arrow, as long as the bus's pivot is set up correctly."}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Tip:"})," Duplicate and rename the arrow to match the bus number."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Arrow Setup",src:s(3844).A+"",width:"1916",height:"834"})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"4-repeat-for-each-model",children:"4. Repeat for Each Model"}),"\n",(0,a.jsx)(e.p,{children:"Repeat steps 2 and 3 for each bus model you have."}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"5-issues-with-pivot",children:"5. Issues with Pivot"}),"\n",(0,a.jsx)(e.p,{children:"If the bus is not pivoting correctly, all you have to do is reset the pivot on the bus model."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Pivot Setup",src:s(9945).A+"",width:"1920",height:"127"})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h2,{id:"congratulations-you-have-set-up-advanced-spawning",children:"Congratulations, You Have Set Up Advanced Spawning!"}),"\n",(0,a.jsx)(e.p,{children:"By following these steps, you should now have advanced spawning set up, which helps reduce lag and improves performance in your game."}),"\n",(0,a.jsx)(e.admonition,{type:"note",children:(0,a.jsxs)(e.p,{children:["Still need support? Join our ",(0,a.jsx)(e.a,{href:"https://discord.gg/5k85S4KWSR",children:"Discord Server"})," for help!."]})})]})}function h(A={}){const{wrapper:e}={...(0,n.R)(),...A.components};return e?(0,a.jsx)(e,{...A,children:(0,a.jsx)(c,{...A})}):c(A)}},9579:(A,e,s)=>{s.d(e,{A:()=>t});const t="data:image/png;base64,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"},8654:(A,e,s)=>{s.d(e,{A:()=>t});const t="data:image/gif;base64,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"},3844:(A,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/gif-5-d8a69c9369502c2d7c2d6fc2f7eca344.gif"},9945:(A,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/gif-7-16d98004162638e613738cc406dd627f.gif"},8453:(A,e,s)=>{s.d(e,{R:()=>i,x:()=>o});var t=s(6540);const a={},n=t.createContext(a);function i(A){const e=t.useContext(n);return t.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function o(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(a):A.components||a:i(A.components),t.createElement(n.Provider,{value:e},A.children)}}}]);