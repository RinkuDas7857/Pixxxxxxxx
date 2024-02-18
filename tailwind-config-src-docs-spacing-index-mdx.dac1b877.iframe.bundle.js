"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[9361],{"./packages/tailwind-config/src/docs/spacing/index.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>docs_spacing});__webpack_require__("./packages/tailwind-config/node_modules/react/index.js");var jsx_runtime=__webpack_require__("./packages/tailwind-config/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const spacing=__webpack_require__("./packages/tailwind-config/src/index.ts").v.theme.spacing??{},Spacing=()=>(0,jsx_runtime.jsx)("div",{className:"space-y-40",children:Object.keys(spacing).map((space=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("p",{className:"typography-14 text-text2",children:["p-",space]}),(0,jsx_runtime.jsx)("div",{className:`bg-surface3 p-${space} w-[min-content]`,children:(0,jsx_runtime.jsx)("div",{className:"bg-brand h-40",style:{width:"40px"}})})]},space)))});Spacing.displayName="Spacing";try{Spacing.displayName="Spacing",Spacing.__docgenInfo={description:"",displayName:"Spacing",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tailwind-config/src/docs/spacing/Spacing.tsx#Spacing"]={docgenInfo:Spacing.__docgenInfo,name:"Spacing",path:"packages/tailwind-config/src/docs/spacing/Spacing.tsx#Spacing"})}catch(__react_docgen_typescript_loader_error){}function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"tailwind-config/Spacing",component:[Spacing]}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"spacing",children:"Spacing"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(Spacing,{})]})}const docs_spacing=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./packages/tailwind-config/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>config});function mergeEffect({elementEffect,effect}){return{...elementEffect,...effect,outline:{type:"opacity",opacity:.32}}}function getDefaultKeyName(version){switch(version){case"v3":case"v2":return"DEFAULT";case"v1":return"default"}}function getVariantOption(version){switch(version){case"v3":return{};case"v2":case"v1":return{variants:{}}}}function setEquals(a,b){return a.size===b.size&&Array.from(a).every((value=>b.has(value)))}var index_esm=__webpack_require__("./packages/foundation/dist/index.esm.js"),dist_index_esm=__webpack_require__("./packages/theme/dist/index.esm.js"),utils_dist_index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");const COLOR_PREFIX="--tailwind-color-";function isSingleColor(color){return"string"==typeof color}function colorsToTailwindConfig(version,colors,effects){const targetColors=(0,utils_dist_index_esm.v7)(colors,isSingleColor),DEFAULT=getDefaultKeyName(version);function colorsForAllEffects(name,color){const varName=`${COLOR_PREFIX}${name}`;return{[DEFAULT]:`var(${varName}, ${color})`,...(0,utils_dist_index_esm.Xc)(effects,((effectName,effect)=>[effectName,`var(${varName}--${effectName}, ${(0,utils_dist_index_esm.nC)(color,effect)})`]))}}return(0,utils_dist_index_esm.Xc)(targetColors,((name,color)=>[name,colorsForAllEffects(name,color)]))}var tailwindcss_plugin=__webpack_require__("./node_modules/tailwindcss/plugin.js"),plugin_default=__webpack_require__.n(tailwindcss_plugin);function cssVariableColorPlugin({":root":_defaultTheme,...themes}){const definitions=function defineCssVariables(themes){return(0,utils_dist_index_esm.Xc)(themes,((selectorOrMediaQuery,theme)=>{const css=function toCssVariables(theme){const colors=(0,utils_dist_index_esm.v7)(theme.color,isSingleColor),effects=Object.entries(mergeEffect(theme));return(0,utils_dist_index_esm.it)(colors,((name,color)=>{const varName=`${COLOR_PREFIX}${name}`;return[[varName,color],...effects.map((([type,effect])=>[`${varName}--${type}`,(0,utils_dist_index_esm.nC)(color,effect)]))]}))}(theme);return selectorOrMediaQuery.startsWith("@media")?[selectorOrMediaQuery,{":root":css}]:[selectorOrMediaQuery,css]}))}(themes);return plugin_default()((({addBase})=>{addBase(definitions)}))}const VAR_PREFIX="--tailwind-gradient-";function plugin_cssVariableColorPlugin(gradients,effects,selectorOrMediaQuery){const utilities=function getUtilities(gradients,effect){const effects=Object.entries(effect),directions=Object.entries(DIRECTIONS);return(0,utils_dist_index_esm.it)(gradients,((name,colors)=>directions.flatMap((([direction,className])=>{const toLinearGradient=colors=>{const style=(0,utils_dist_index_esm.FL)(direction)(colors);if(!("backgroundImage"in style))throw new Error(`Could not generate linear-gradient() from ${name} ${direction} ${className}`);return style.backgroundImage};return[[createUtilityName(name,className),toLinearGradient(colors)],...effects.map((([effectName,effect])=>[createUtilityName(name,className,effectName),toLinearGradient((0,utils_dist_index_esm.JR)(effect)(colors))]))]}))))}(gradients,effects),classRules=(0,utils_dist_index_esm.Xc)(utilities,(name=>[`.bg-${name}`,{backgroundImage:`var(${VAR_PREFIX}${name})`}]));return plugin_default()((({addBase,addUtilities})=>{const css=(0,utils_dist_index_esm.Cw)(utilities,(name=>`${VAR_PREFIX}${name}`));selectorOrMediaQuery.startsWith("@media")?addBase({[selectorOrMediaQuery]:{":root":css}}):addBase({[selectorOrMediaQuery]:css}),addUtilities(classRules,{variants:["responsive"]})}))}const DIRECTIONS={"to top":"top","to bottom":"bottom","to left":"left","to right":"right"};function createUtilityName(gradientName,direction,suffix=""){return[(value=gradientName,value.replace(/(?<small>[\da-z]|(?=[A-Z]))(?<capital>[A-Z])/gu,"$1-$2").toLowerCase()),direction,suffix].filter(Boolean).join("-");var value}const leadingCancel={display:"block",width:0,height:0,content:'""'},typographyStyle=style=>{const margin=-(0,utils_dist_index_esm.qW)(style);return{"font-size":(0,utils_dist_index_esm.px)(style.fontSize),"line-height":(0,utils_dist_index_esm.px)(style.lineHeight),"&::before":{...leadingCancel,marginTop:(0,utils_dist_index_esm.px)(margin)},"&::after":{...leadingCancel,marginBottom:(0,utils_dist_index_esm.px)(margin)}}},typography_plugin=plugin_default()((({addUtilities})=>{addUtilities({...(0,utils_dist_index_esm.Xc)(index_esm.y3,((fontSize,style)=>[`.typography-${fontSize}`,typographyStyle(style)])),".preserve-half-leading":{"&::before":{content:"none"},"&::after":{content:"none"}}},{variants:["responsive"]})}));const config=function createTailwindConfig({theme={":root":dist_index_esm.R},version="v3"}){!function assertAllThemeHaveSameKeys(themeMap){const defaultTheme=themeMap[":root"],expectedColorKeys=new Set(Object.keys(defaultTheme.color)),expectedEffectKeys=new Set(Object.keys(defaultTheme.effect));for(const[name,theme]of Object.entries(themeMap)){const colorKeys=new Set(Object.keys(theme.color)),effectKeys=new Set(Object.keys(theme.effect));if(!setEquals(colorKeys,expectedColorKeys))throw new Error(`:root and ${name} does not have same colors.\n\nExpected( :root ): ${JSON.stringify(Array.from(expectedColorKeys))}\nGot: ${JSON.stringify(Array.from(colorKeys))}`);if(!setEquals(effectKeys,expectedEffectKeys))throw new Error(`:root and ${name} does not have same effects.\n\nExpected( :root ): ${JSON.stringify(Array.from(expectedEffectKeys))}\nGot: ${JSON.stringify(Array.from(effectKeys))}`)}}(theme);const defaultTheme=theme[":root"],effects=mergeEffect(defaultTheme),DEFAULT=getDefaultKeyName(version);return{theme:{screens:{screen1:(0,utils_dist_index_esm.px)(0),screen2:(0,utils_dist_index_esm.px)(defaultTheme.breakpoint.screen1),screen3:(0,utils_dist_index_esm.px)(defaultTheme.breakpoint.screen2),screen4:(0,utils_dist_index_esm.px)(defaultTheme.breakpoint.screen3),screen5:(0,utils_dist_index_esm.px)(defaultTheme.breakpoint.screen4)},colors:{black:"#000",white:"#fff",transparent:"transparent",current:"currentColor",...colorsToTailwindConfig(version,defaultTheme.color,effects)},borderColor:{...colorsToTailwindConfig(version,(0,utils_dist_index_esm.Xc)(defaultTheme.border,((k,v)=>[k,v.color])),effects)},spacing:(0,utils_dist_index_esm.Xc)(index_esm.N_,((name,pixel)=>[name,(0,utils_dist_index_esm.px)(pixel)])),width:{full:"100%",screen:"100vw",auto:"auto",fit:"fit-content",...Array.from({length:12},((_,i)=>i+1)).reduce(((styles,i)=>({...styles,[`col-span-${i}`]:(0,utils_dist_index_esm.px)(index_esm.hw*i+index_esm.K_*(i-1))})),{}),...Array.from({length:11},((_,i)=>i+1)).reduce(((styles,i)=>({...styles,[`${i}/12`]:i/12*100+"%"})),{})},gap:{fixed:(0,utils_dist_index_esm.px)(index_esm.K_)},borderRadius:(0,utils_dist_index_esm.Xc)(index_esm.n_,((name,value)=>[name,(0,utils_dist_index_esm.px)(value)])),transitionDuration:{[DEFAULT]:"0.2s"}},...getVariantOption(version),corePlugins:{lineHeight:!1},plugins:[typography_plugin,cssVariableColorPlugin(theme),...Object.entries(theme).map((([selectorOrMediaQuery,theme])=>plugin_cssVariableColorPlugin(theme.gradientColor,mergeEffect(theme),selectorOrMediaQuery)))]}}({})}}]);