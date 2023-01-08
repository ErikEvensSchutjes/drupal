!function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{"Align center":"Align center","Align left":"Align left","Align right":"Align right",Justify:"Justify","Text alignment":"Text alignment","Text alignment toolbar":"Text alignment toolbar"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var t={704:(t,e,n)=>{t.exports=n(79)("./src/core.js")},273:(t,e,n)=>{t.exports=n(79)("./src/ui.js")},209:(t,e,n)=>{t.exports=n(79)("./src/utils.js")},79:t=>{"use strict";t.exports=CKEditor5.dll}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};(()=>{"use strict";n.r(i),n.d(i,{Alignment:()=>f,AlignmentEditing:()=>g,AlignmentUI:()=>d});var t=n(704),e=n(209);const o=["left","right","center","justify"];function r(t){return o.includes(t)}function a(t,e){return"rtl"==e.contentLanguageDirection?"right"===t:"left"===t}function s(t){const n=t.map((t=>{let e;return e="string"==typeof t?{name:t}:t,e})).filter((t=>{const n=!!o.includes(t.name);return n||(0,e.logWarning)("alignment-config-name-not-recognized",{option:t}),n})),i=n.filter((t=>!!t.className)).length;if(i&&i<n.length)throw new e.CKEditorError("alignment-config-classnames-are-missing",{configuredOptions:t});return n.forEach(((n,i,o)=>{const r=o.slice(i+1);if(r.some((t=>t.name==n.name)))throw new e.CKEditorError("alignment-config-name-already-defined",{option:n,configuredOptions:t});if(n.className){if(r.some((t=>t.className==n.className)))throw new e.CKEditorError("alignment-config-classname-already-defined",{option:n,configuredOptions:t})}})),n}const l="alignment";class c extends t.Command{refresh(){const t=this.editor.locale,n=(0,e.first)(this.editor.model.document.selection.getSelectedBlocks());this.isEnabled=!!n&&this._canBeAligned(n),this.isEnabled&&n.hasAttribute("alignment")?this.value=n.getAttribute("alignment"):this.value="rtl"===t.contentLanguageDirection?"right":"left"}execute(t={}){const e=this.editor,n=e.locale,i=e.model,o=i.document,r=t.value;i.change((t=>{const e=Array.from(o.selection.getSelectedBlocks()).filter((t=>this._canBeAligned(t))),i=e[0].getAttribute("alignment");a(r,n)||i===r||!r?function(t,e){for(const n of t)e.removeAttribute(l,n)}(e,t):function(t,e,n){for(const i of t)e.setAttribute(l,n,i)}(e,t,r)}))}_canBeAligned(t){return this.editor.model.schema.checkAttribute(t,l)}}class g extends t.Plugin{static get pluginName(){return"AlignmentEditing"}constructor(t){super(t),t.config.define("alignment",{options:[...o.map((t=>({name:t})))]})}init(){const t=this.editor,e=t.locale,n=t.model.schema,i=s(t.config.get("alignment.options")).filter((t=>r(t.name)&&!a(t.name,e))),o=i.some((t=>!!t.className));n.extend("$block",{allowAttributes:"alignment"}),t.model.schema.setAttributeProperties("alignment",{isFormatting:!0}),o?t.conversion.attributeToAttribute(function(t){const e={model:{key:"alignment",values:t.map((t=>t.name))},view:{}};for(const n of t)e.view[n.name]={key:"class",value:n.className};return e}(i)):t.conversion.for("downcast").attributeToAttribute(function(t){const e={model:{key:"alignment",values:t.map((t=>t.name))},view:{}};for(const{name:n}of t)e.view[n]={key:"style",value:{"text-align":n}};return e}(i));const l=function(t){const e=[];for(const{name:n}of t)e.push({view:{key:"style",value:{"text-align":n}},model:{key:"alignment",value:n}});return e}(i);for(const e of l)t.conversion.for("upcast").attributeToAttribute(e);const g=function(t){const e=[];for(const{name:n}of t)e.push({view:{key:"align",value:n},model:{key:"alignment",value:n}});return e}(i);for(const e of g)t.conversion.for("upcast").attributeToAttribute(e);t.commands.add("alignment",new c(t))}}var u=n(273);const m=new Map([["left",t.icons.alignLeft],["right",t.icons.alignRight],["center",t.icons.alignCenter],["justify",t.icons.alignJustify]]);class d extends t.Plugin{get localizedOptionTitles(){const t=this.editor.t;return{left:t("Align left"),right:t("Align right"),center:t("Align center"),justify:t("Justify")}}static get pluginName(){return"AlignmentUI"}init(){const t=this.editor,e=t.ui.componentFactory,n=t.t,i=s(t.config.get("alignment.options"));i.map((t=>t.name)).filter(r).forEach((t=>this._addButton(t))),e.add("alignment",(o=>{const r=(0,u.createDropdown)(o),a=i.map((t=>e.create(`alignment:${t.name}`)));(0,u.addToolbarToDropdown)(r,a,{enableActiveItemFocusOnDropdownOpen:!0}),r.buttonView.set({label:n("Text alignment"),tooltip:!0}),r.toolbarView.isVertical=!0,r.toolbarView.ariaLabel=n("Text alignment toolbar"),r.extendTemplate({attributes:{class:"ck-alignment-dropdown"}});const s="rtl"===o.contentLanguageDirection?m.get("right"):m.get("left");return r.buttonView.bind("icon").toMany(a,"isOn",((...t)=>{const e=t.findIndex((t=>t));return e<0?s:a[e].icon})),r.bind("isEnabled").toMany(a,"isEnabled",((...t)=>t.some((t=>t)))),this.listenTo(r,"execute",(()=>{t.editing.view.focus()})),r}))}_addButton(t){const e=this.editor;e.ui.componentFactory.add(`alignment:${t}`,(n=>{const i=e.commands.get("alignment"),o=new u.ButtonView(n);return o.set({label:this.localizedOptionTitles[t],icon:m.get(t),tooltip:!0,isToggleable:!0}),o.bind("isEnabled").to(i),o.bind("isOn").to(i,"value",(e=>e===t)),this.listenTo(o,"execute",(()=>{e.execute("alignment",{value:t}),e.editing.view.focus()})),o}))}}class f extends t.Plugin{static get requires(){return[g,d]}static get pluginName(){return"Alignment"}}})(),(window.CKEditor5=window.CKEditor5||{}).alignment=i})();;
!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{Downloadable:"Downloadable","Edit link":"Edit link",Link:"Link","Link image":"Link image","Link URL":"Link URL","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","This link has no URL":"This link has no URL",Unlink:"Unlink"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={23:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(609),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}",""]);const s=o},952:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(609),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}",""]);const s=o},871:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(609),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}",""]);const s=o},269:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(609),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',""]);const s=o},764:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(609),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',""]);const s=o},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(o[r]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);n&&o[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),t.push(c))}},t}},62:(e,t,i)=>{"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},s=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),r=[];function a(e){for(var t=-1,i=0;i<r.length;i++)if(r[i].identifier===e){t=i;break}return t}function c(e,t){for(var i={},n=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var d=a(u),k={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(r[d].references++,r[d].updater(k)):r.push({identifier:u,updater:g(k,t),references:1}),n.push(u)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=i.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var r=s(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function k(e,t,i,n){var o=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var s=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function h(e,t,i){var n=i.css,o=i.media,s=i.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f=null,m=0;function g(e,t){var i,n,o;if(t.singleton){var s=m++;i=f||(f=l(t)),n=k.bind(null,i,s,!1),o=k.bind(null,i,s,!0)}else i=l(t),n=h.bind(null,i,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var i=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var o=a(i[n]);r[o].references--}for(var s=c(e,t),l=0;l<i.length;l++){var u=a(i[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}i=s}}}},945:(e,t,i)=>{e.exports=i(79)("./src/clipboard.js")},704:(e,t,i)=>{e.exports=i(79)("./src/core.js")},492:(e,t,i)=>{e.exports=i(79)("./src/engine.js")},181:(e,t,i)=>{e.exports=i(79)("./src/typing.js")},273:(e,t,i)=>{e.exports=i(79)("./src/ui.js")},209:(e,t,i)=>{e.exports=i(79)("./src/utils.js")},995:(e,t,i)=>{e.exports=i(79)("./src/widget.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={id:n,exports:{}};return e[n](s,s.exports,i),s.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nc=void 0;var n={};(()=>{"use strict";i.r(n),i.d(n,{AutoLink:()=>Ce,Link:()=>Me,LinkEditing:()=>ke,LinkImage:()=>Pe,LinkImageEditing:()=>je,LinkImageUI:()=>He,LinkUI:()=>Ee});var e=i(704),t=i(492),o=i(181),s=i(945),r=i(209);class a{constructor(){this._definitions=new Set}get length(){return this._definitions.size}add(e){Array.isArray(e)?e.forEach((e=>this._definitions.add(e))):this._definitions.add(e)}getDispatcher(){return e=>{e.on("attribute:linkHref",((e,t,i)=>{if(!i.consumable.test(t.item,"attribute:linkHref"))return;if(!t.item.is("selection")&&!i.schema.isInline(t.item))return;const n=i.writer,o=n.document.selection;for(const e of this._definitions){const s=n.createAttributeElement("a",e.attributes,{priority:5});e.classes&&n.addClass(e.classes,s);for(const t in e.styles)n.setStyle(t,e.styles[t],s);n.setCustomProperty("link",!0,s),e.callback(t.attributeNewValue)?t.item.is("selection")?n.wrap(o.getFirstRange(),s):n.wrap(i.mapper.toViewRange(t.range),s):n.unwrap(i.mapper.toViewRange(t.range),s)}}),{priority:"high"})}}getDispatcherForLinkedImage(){return e=>{e.on("attribute:linkHref:imageBlock",((e,t,{writer:i,mapper:n})=>{const o=n.toViewElement(t.item),s=Array.from(o.getChildren()).find((e=>"a"===e.name));for(const e of this._definitions){const n=(0,r.toMap)(e.attributes);if(e.callback(t.attributeNewValue)){for(const[e,t]of n)"class"===e?i.addClass(t,s):i.setAttribute(e,t,s);e.classes&&i.addClass(e.classes,s);for(const t in e.styles)i.setStyle(t,e.styles[t],s)}else{for(const[e,t]of n)"class"===e?i.removeClass(t,s):i.removeAttribute(e,s);e.classes&&i.removeClass(e.classes,s);for(const t in e.styles)i.removeStyle(t,s)}}}))}}}const c=function(e,t,i){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(i=i>o?o:i)<0&&(i+=o),o=t>i?0:i-t>>>0,t>>>=0;for(var s=Array(o);++n<o;)s[n]=e[n+t];return s};const l=function(e,t,i){var n=e.length;return i=void 0===i?n:i,!t&&i>=n?e:c(e,t,i)};var u=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");const d=function(e){return u.test(e)};const k=function(e){return e.split("")};var h="[\\ud800-\\udfff]",f="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",m="\\ud83c[\\udffb-\\udfff]",g="[^\\ud800-\\udfff]",b="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",w="(?:"+f+"|"+m+")"+"?",v="[\\ufe0e\\ufe0f]?",_=v+w+("(?:\\u200d(?:"+[g,b,p].join("|")+")"+v+w+")*"),y="(?:"+[g+f+"?",f,b,p,h].join("|")+")",A=RegExp(m+"(?="+m+")|"+y+_,"g");const x=function(e){return e.match(A)||[]};const I=function(e){return d(e)?x(e):k(e)};const S="object"==typeof global&&global&&global.Object===Object&&global;var T="object"==typeof self&&self&&self.Object===Object&&self;const E=(S||T||Function("return this")()).Symbol;const V=function(e,t){for(var i=-1,n=null==e?0:e.length,o=Array(n);++i<n;)o[i]=t(e[i],i,e);return o};const L=Array.isArray;var C=Object.prototype,D=C.hasOwnProperty,M=C.toString,j=E?E.toStringTag:void 0;const B=function(e){var t=D.call(e,j),i=e[j];try{e[j]=void 0;var n=!0}catch(e){}var o=M.call(e);return n&&(t?e[j]=i:delete e[j]),o};var N=Object.prototype.toString;const H=function(e){return N.call(e)};var O=E?E.toStringTag:void 0;const U=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":O&&O in Object(e)?B(e):H(e)};const P=function(e){return null!=e&&"object"==typeof e};const F=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==U(e)};var R=E?E.prototype:void 0,z=R?R.toString:void 0;const Z=function e(t){if("string"==typeof t)return t;if(L(t))return V(t,e)+"";if(F(t))return z?z.call(t):"";var i=t+"";return"0"==i&&1/t==-Infinity?"-0":i};const q=function(e){return null==e?"":Z(e)};const K=function(e){return function(t){t=q(t);var i=d(t)?I(t):void 0,n=i?i[0]:t.charAt(0),o=i?l(i,1).join(""):t.slice(1);return n[e]()+o}}("toUpperCase"),Q=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,$=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i,W=/^[\S]+@((?![-_])(?:[-\w\u00a1-\uffff]{0,63}[^-_]\.))+(?:[a-z\u00a1-\uffff]{2,})$/i,Y=/^((\w+:(\/{2,})?)|(\W))/i,G="Ctrl+K";function J(e,{writer:t}){const i=t.createAttributeElement("a",{href:e},{priority:5});return t.setCustomProperty("link",!0,i),i}function X(e){return function(e){return e.replace(Q,"").match($)}(e=String(e))?e:"#"}function ee(e,t){return!!e&&t.checkAttribute(e.name,"linkHref")}function te(e,t){const i=(n=e,W.test(n)?"mailto:":t);var n;const o=!!i&&!Y.test(e);return e&&o?i+e:e}function ie(e){window.open(e,"_blank","noopener")}class ne extends e.Command{constructor(e){super(e),this.manualDecorators=new r.Collection,this.automaticDecorators=new a}restoreManualDecoratorStates(){for(const e of this.manualDecorators)e.value=this._getDecoratorStateFromModel(e.id)}refresh(){const e=this.editor.model,t=e.document.selection,i=t.getSelectedElement()||(0,r.first)(t.getSelectedBlocks());ee(i,e.schema)?(this.value=i.getAttribute("linkHref"),this.isEnabled=e.schema.checkAttribute(i,"linkHref")):(this.value=t.getAttribute("linkHref"),this.isEnabled=e.schema.checkAttributeInSelection(t,"linkHref"));for(const e of this.manualDecorators)e.value=this._getDecoratorStateFromModel(e.id)}execute(e,t={}){const i=this.editor.model,n=i.document.selection,s=[],a=[];for(const e in t)t[e]?s.push(e):a.push(e);i.change((t=>{if(n.isCollapsed){const c=n.getFirstPosition();if(n.hasAttribute("linkHref")){const r=(0,o.findAttributeRange)(c,"linkHref",n.getAttribute("linkHref"),i);t.setAttribute("linkHref",e,r),s.forEach((e=>{t.setAttribute(e,!0,r)})),a.forEach((e=>{t.removeAttribute(e,r)})),t.setSelection(t.createPositionAfter(r.end.nodeBefore))}else if(""!==e){const o=(0,r.toMap)(n.getAttributes());o.set("linkHref",e),s.forEach((e=>{o.set(e,!0)}));const{end:a}=i.insertContent(t.createText(e,o),c);t.setSelection(a)}["linkHref",...s,...a].forEach((e=>{t.removeSelectionAttribute(e)}))}else{const o=i.schema.getValidRanges(n.getRanges(),"linkHref"),r=[];for(const e of n.getSelectedBlocks())i.schema.checkAttribute(e,"linkHref")&&r.push(t.createRangeOn(e));const c=r.slice();for(const e of o)this._isRangeToUpdate(e,r)&&c.push(e);for(const i of c)t.setAttribute("linkHref",e,i),s.forEach((e=>{t.setAttribute(e,!0,i)})),a.forEach((e=>{t.removeAttribute(e,i)}))}}))}_getDecoratorStateFromModel(e){const t=this.editor.model,i=t.document.selection,n=i.getSelectedElement();return ee(n,t.schema)?n.getAttribute(e):i.getAttribute(e)}_isRangeToUpdate(e,t){for(const i of t)if(i.containsRange(e))return!1;return!0}}class oe extends e.Command{refresh(){const e=this.editor.model,t=e.document.selection,i=t.getSelectedElement();ee(i,e.schema)?this.isEnabled=e.schema.checkAttribute(i,"linkHref"):this.isEnabled=e.schema.checkAttributeInSelection(t,"linkHref")}execute(){const e=this.editor,t=this.editor.model,i=t.document.selection,n=e.commands.get("link");t.change((e=>{const s=i.isCollapsed?[(0,o.findAttributeRange)(i.getFirstPosition(),"linkHref",i.getAttribute("linkHref"),t)]:t.schema.getValidRanges(i.getRanges(),"linkHref");for(const t of s)if(e.removeAttribute("linkHref",t),n)for(const i of n.manualDecorators)e.removeAttribute(i.id,t)}))}}class se{constructor({id:e,label:t,attributes:i,classes:n,styles:o,defaultValue:s}){this.id=e,this.set("value"),this.defaultValue=s,this.label=t,this.attributes=i,this.classes=n,this.styles=o}_createPattern(){return{attributes:this.attributes,classes:this.classes,styles:this.styles}}}(0,r.mix)(se,r.ObservableMixin);var re=i(62),ae=i.n(re),ce=i(23),le={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ae()(ce.Z,le);ce.Z.locals;const ue="automatic",de=/^(https?:)?\/\//;class ke extends e.Plugin{static get pluginName(){return"LinkEditing"}static get requires(){return[o.TwoStepCaretMovement,o.Input,s.ClipboardPipeline]}constructor(e){super(e),e.config.define("link",{addTargetToExternalLinks:!1})}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:"linkHref"}),e.conversion.for("dataDowncast").attributeToElement({model:"linkHref",view:J}),e.conversion.for("editingDowncast").attributeToElement({model:"linkHref",view:(e,t)=>J(X(e),t)}),e.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:{href:!0}},model:{key:"linkHref",value:e=>e.getAttribute("href")}}),e.commands.add("link",new ne(e)),e.commands.add("unlink",new oe(e));const t=function(e,t){const i={"Open in a new tab":e("Open in a new tab"),Downloadable:e("Downloadable")};return t.forEach((e=>(e.label&&i[e.label]&&(e.label=i[e.label]),e))),t}(e.t,function(e){const t=[];if(e)for(const[i,n]of Object.entries(e)){const e=Object.assign({},n,{id:`link${K(i)}`});t.push(e)}return t}(e.config.get("link.decorators")));this._enableAutomaticDecorators(t.filter((e=>e.mode===ue))),this._enableManualDecorators(t.filter((e=>"manual"===e.mode)));e.plugins.get(o.TwoStepCaretMovement).registerAttribute("linkHref"),(0,o.inlineHighlight)(e,"linkHref","a","ck-link_selected"),this._enableLinkOpen(),this._enableInsertContentSelectionAttributesFixer(),this._enableClickingAfterLink(),this._enableTypingOverLink(),this._handleDeleteContentAfterLink()}_enableAutomaticDecorators(e){const t=this.editor,i=t.commands.get("link").automaticDecorators;t.config.get("link.addTargetToExternalLinks")&&i.add({id:"linkIsExternal",mode:ue,callback:e=>de.test(e),attributes:{target:"_blank",rel:"noopener noreferrer"}}),i.add(e),i.length&&t.conversion.for("downcast").add(i.getDispatcher())}_enableManualDecorators(e){if(!e.length)return;const t=this.editor,i=t.commands.get("link").manualDecorators;e.forEach((e=>{t.model.schema.extend("$text",{allowAttributes:e.id}),e=new se(e),i.add(e),t.conversion.for("downcast").attributeToElement({model:e.id,view:(t,{writer:i,schema:n},{item:o})=>{if((o.is("selection")||n.isInline(o))&&t){const t=i.createAttributeElement("a",e.attributes,{priority:5});e.classes&&i.addClass(e.classes,t);for(const n in e.styles)i.setStyle(n,e.styles[n],t);return i.setCustomProperty("link",!0,t),t}}}),t.conversion.for("upcast").elementToAttribute({view:{name:"a",...e._createPattern()},model:{key:e.id}})}))}_enableLinkOpen(){const e=this.editor,t=e.editing.view.document,i=e.model.document;this.listenTo(t,"click",((e,t)=>{if(!(r.env.isMac?t.domEvent.metaKey:t.domEvent.ctrlKey))return;let i=t.domTarget;if("a"!=i.tagName.toLowerCase()&&(i=i.closest("a")),!i)return;const n=i.getAttribute("href");n&&(e.stop(),t.preventDefault(),ie(n))}),{context:"$capture"}),this.listenTo(t,"enter",((e,t)=>{const n=i.selection,o=n.getSelectedElement(),s=o?o.getAttribute("linkHref"):n.getAttribute("linkHref");s&&t.domEvent.altKey&&(e.stop(),ie(s))}),{context:"a"})}_enableInsertContentSelectionAttributesFixer(){const e=this.editor.model,t=e.document.selection;this.listenTo(e,"insertContent",(()=>{const i=t.anchor.nodeBefore,n=t.anchor.nodeAfter;t.hasAttribute("linkHref")&&i&&i.hasAttribute("linkHref")&&(n&&n.hasAttribute("linkHref")||e.change((t=>{he(t,me(e.schema))})))}),{priority:"low"})}_enableClickingAfterLink(){const e=this.editor,i=e.model;e.editing.view.addObserver(t.MouseObserver);let n=!1;this.listenTo(e.editing.view.document,"mousedown",(()=>{n=!0})),this.listenTo(e.editing.view.document,"selectionChange",(()=>{if(!n)return;n=!1;const e=i.document.selection;if(!e.isCollapsed)return;if(!e.hasAttribute("linkHref"))return;const t=e.getFirstPosition(),s=(0,o.findAttributeRange)(t,"linkHref",e.getAttribute("linkHref"),i);(t.isTouching(s.start)||t.isTouching(s.end))&&i.change((e=>{he(e,me(i.schema))}))}))}_enableTypingOverLink(){const e=this.editor,t=e.editing.view;let i,n;this.listenTo(t.document,"delete",(()=>{n=!0}),{priority:"high"}),this.listenTo(e.model,"deleteContent",(()=>{const t=e.model.document.selection;t.isCollapsed||(n?n=!1:fe(e)&&function(e){const t=e.document.selection,i=t.getFirstPosition(),n=t.getLastPosition(),s=i.nodeAfter;if(!s)return!1;if(!s.is("$text"))return!1;if(!s.hasAttribute("linkHref"))return!1;const r=n.textNode||n.nodeBefore;if(s===r)return!0;return(0,o.findAttributeRange)(i,"linkHref",s.getAttribute("linkHref"),e).containsRange(e.createRange(i,n),!0)}(e.model)&&(i=t.getAttributes()))}),{priority:"high"}),this.listenTo(e.model,"insertContent",((t,[o])=>{n=!1,fe(e)&&i&&(e.model.change((e=>{for(const[t,n]of i)e.setAttribute(t,n,o)})),i=null)}),{priority:"high"})}_handleDeleteContentAfterLink(){const e=this.editor,t=e.model,i=t.document.selection,n=e.editing.view;let s=!1,a=!1;this.listenTo(n.document,"delete",((e,t)=>{a=t.domEvent.keyCode===r.keyCodes.backspace}),{priority:"high"}),this.listenTo(t,"deleteContent",(()=>{s=!1;const e=i.getFirstPosition(),n=i.getAttribute("linkHref");if(!n)return;const r=(0,o.findAttributeRange)(e,"linkHref",n,t);s=r.containsPosition(e)||r.end.isEqual(e)}),{priority:"high"}),this.listenTo(t,"deleteContent",(()=>{a&&(a=!1,s||e.model.enqueueChange((e=>{he(e,me(t.schema))})))}),{priority:"low"})}}function he(e,t){e.removeSelectionAttribute("linkHref");for(const i of t)e.removeSelectionAttribute(i)}function fe(e){return e.model.change((e=>e.batch)).isTyping}function me(e){return e.getDefinition("$text").allowAttributes.filter((e=>e.startsWith("link")))}var ge=i(273),be=i(995),pe=i(764),we={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ae()(pe.Z,we);pe.Z.locals;var ve=i(871),_e={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ae()(ve.Z,_e);ve.Z.locals;class ye extends ge.View{constructor(t,i){super(t);const n=t.t;this.focusTracker=new r.FocusTracker,this.keystrokes=new r.KeystrokeHandler,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n("Save"),e.icons.check,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(n("Cancel"),e.icons.cancel,"ck-button-cancel","cancel"),this._manualDecoratorSwitches=this._createManualDecoratorSwitches(i),this.children=this._createFormChildren(i.manualDecorators),this._focusables=new ge.ViewCollection,this._focusCycler=new ge.FocusCycler({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}});const o=["ck","ck-link-form","ck-responsive-form"];i.manualDecorators.length&&o.push("ck-link-form_layout-vertical","ck-vertical-form"),this.setTemplate({tag:"form",attributes:{class:o,tabindex:"-1"},children:this.children}),(0,ge.injectCssTransitionDisabler)(this)}getDecoratorSwitchesState(){return Array.from(this._manualDecoratorSwitches).reduce(((e,t)=>(e[t.name]=t.isOn,e)),{})}render(){super.render(),(0,ge.submitHandler)({view:this});[this.urlInputView,...this._manualDecoratorSwitches,this.saveButtonView,this.cancelButtonView].forEach((e=>{this._focusables.add(e),this.focusTracker.add(e.element)})),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}_createUrlInput(){const e=this.locale.t,t=new ge.LabeledFieldView(this.locale,ge.createLabeledInputText);return t.label=e("Link URL"),t}_createButton(e,t,i,n){const o=new ge.ButtonView(this.locale);return o.set({label:e,icon:t,tooltip:!0}),o.extendTemplate({attributes:{class:i}}),n&&o.delegate("execute").to(this,n),o}_createManualDecoratorSwitches(e){const t=this.createCollection();for(const i of e.manualDecorators){const n=new ge.SwitchButtonView(this.locale);n.set({name:i.id,label:i.label,withText:!0}),n.bind("isOn").toMany([i,e],"value",((e,t)=>void 0===t&&void 0===e?i.defaultValue:e)),n.on("execute",(()=>{i.set("value",!n.isOn)})),t.add(n)}return t}_createFormChildren(e){const t=this.createCollection();if(t.add(this.urlInputView),e.length){const e=new ge.View;e.setTemplate({tag:"ul",children:this._manualDecoratorSwitches.map((e=>({tag:"li",children:[e],attributes:{class:["ck","ck-list__item"]}}))),attributes:{class:["ck","ck-reset","ck-list"]}}),t.add(e)}return t.add(this.saveButtonView),t.add(this.cancelButtonView),t}}var Ae=i(952),xe={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ae()(Ae.Z,xe);Ae.Z.locals;class Ie extends ge.View{constructor(t){super(t);const i=t.t;this.focusTracker=new r.FocusTracker,this.keystrokes=new r.KeystrokeHandler,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(i("Unlink"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>',"unlink"),this.editButtonView=this._createButton(i("Edit link"),e.icons.pencil,"edit"),this.set("href"),this._focusables=new ge.ViewCollection,this._focusCycler=new ge.FocusCycler({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-link-actions","ck-responsive-form"],tabindex:"-1"},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]})}render(){super.render();[this.previewButtonView,this.editButtonView,this.unlinkButtonView].forEach((e=>{this._focusables.add(e),this.focusTracker.add(e.element)})),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}_createButton(e,t,i){const n=new ge.ButtonView(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n.delegate("execute").to(this,i),n}_createPreviewButton(){const e=new ge.ButtonView(this.locale),t=this.bindTemplate,i=this.t;return e.set({withText:!0,tooltip:i("Open link in new tab")}),e.extendTemplate({attributes:{class:["ck","ck-link-actions__preview"],href:t.to("href",(e=>e&&X(e))),target:"_blank",rel:"noopener noreferrer"}}),e.bind("label").to(this,"href",(e=>e||i("This link has no URL"))),e.bind("isEnabled").to(this,"href",(e=>!!e)),e.template.tag="a",e.template.eventListeners={},e}}const Se='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>',Te="link-ui";class Ee extends e.Plugin{static get requires(){return[ge.ContextualBalloon]}static get pluginName(){return"LinkUI"}init(){const e=this.editor;e.editing.view.addObserver(t.ClickObserver),this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._balloon=e.plugins.get(ge.ContextualBalloon),this._createToolbarLinkButton(),this._enableUserBalloonInteractions(),e.conversion.for("editingDowncast").markerToHighlight({model:Te,view:{classes:["ck-fake-link-selection"]}}),e.conversion.for("editingDowncast").markerToElement({model:Te,view:{name:"span",classes:["ck-fake-link-selection","ck-fake-link-selection_collapsed"]}})}destroy(){super.destroy(),this.formView.destroy()}_createActionsView(){const e=this.editor,t=new Ie(e.locale),i=e.commands.get("link"),n=e.commands.get("unlink");return t.bind("href").to(i,"value"),t.editButtonView.bind("isEnabled").to(i),t.unlinkButtonView.bind("isEnabled").to(n),this.listenTo(t,"edit",(()=>{this._addFormView()})),this.listenTo(t,"unlink",(()=>{e.execute("unlink"),this._hideUI()})),t.keystrokes.set("Esc",((e,t)=>{this._hideUI(),t()})),t.keystrokes.set(G,((e,t)=>{this._addFormView(),t()})),t}_createFormView(){const e=this.editor,t=e.commands.get("link"),i=e.config.get("link.defaultProtocol"),n=new ye(e.locale,t);return n.urlInputView.fieldView.bind("value").to(t,"value"),n.urlInputView.bind("isReadOnly").to(t,"isEnabled",(e=>!e)),n.saveButtonView.bind("isEnabled").to(t),this.listenTo(n,"submit",(()=>{const{value:t}=n.urlInputView.fieldView.element,o=te(t,i);e.execute("link",o,n.getDecoratorSwitchesState()),this._closeFormView()})),this.listenTo(n,"cancel",(()=>{this._closeFormView()})),n.keystrokes.set("Esc",((e,t)=>{this._closeFormView(),t()})),n}_createToolbarLinkButton(){const e=this.editor,t=e.commands.get("link"),i=e.t;e.keystrokes.set(G,((e,i)=>{i(),t.isEnabled&&this._showUI(!0)})),e.ui.componentFactory.add("link",(e=>{const n=new ge.ButtonView(e);return n.isEnabled=!0,n.label=i("Link"),n.icon=Se,n.keystroke=G,n.tooltip=!0,n.isToggleable=!0,n.bind("isEnabled").to(t,"isEnabled"),n.bind("isOn").to(t,"value",(e=>!!e)),this.listenTo(n,"execute",(()=>this._showUI(!0))),n}))}_enableUserBalloonInteractions(){const e=this.editor.editing.view.document;this.listenTo(e,"click",(()=>{this._getSelectedLinkElement()&&this._showUI()})),this.editor.keystrokes.set("Tab",((e,t)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),t())}),{priority:"high"}),this.editor.keystrokes.set("Esc",((e,t)=>{this._isUIVisible&&(this._hideUI(),t())})),(0,ge.clickOutsideHandler)({emitter:this.formView,activator:()=>this._isUIInPanel,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()})}_addActionsView(){this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()})}_addFormView(){if(this._isFormInPanel)return;const e=this.editor.commands.get("link");this.formView.disableCssTransitions(),this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this._balloon.visibleView===this.formView&&this.formView.urlInputView.fieldView.select(),this.formView.enableCssTransitions(),this.formView.urlInputView.fieldView.element.value=e.value||""}_closeFormView(){const e=this.editor.commands.get("link");e.restoreManualDecoratorStates(),void 0!==e.value?this._removeFormView():this._hideUI()}_removeFormView(){this._isFormInPanel&&(this.formView.saveButtonView.focus(),this._balloon.remove(this.formView),this.editor.editing.view.focus(),this._hideFakeVisualSelection())}_showUI(e=!1){this._getSelectedLinkElement()?(this._areActionsVisible?this._addFormView():this._addActionsView(),e&&this._balloon.showStack("main")):(this._showFakeVisualSelection(),this._addActionsView(),e&&this._balloon.showStack("main"),this._addFormView()),this._startUpdatingUI()}_hideUI(){if(!this._isUIInPanel)return;const e=this.editor;this.stopListening(e.ui,"update"),this.stopListening(this._balloon,"change:visibleView"),e.editing.view.focus(),this._removeFormView(),this._balloon.remove(this.actionsView),this._hideFakeVisualSelection()}_startUpdatingUI(){const e=this.editor,t=e.editing.view.document;let i=this._getSelectedLinkElement(),n=s();const o=()=>{const e=this._getSelectedLinkElement(),t=s();i&&!e||!i&&t!==n?this._hideUI():this._isUIVisible&&this._balloon.updatePosition(this._getBalloonPositionData()),i=e,n=t};function s(){return t.selection.focus.getAncestors().reverse().find((e=>e.is("element")))}this.listenTo(e.ui,"update",o),this.listenTo(this._balloon,"change:visibleView",o)}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){return this._balloon.visibleView==this.formView||this._areActionsVisible}_getBalloonPositionData(){const e=this.editor.editing.view,t=this.editor.model,i=e.document;let n=null;if(t.markers.has(Te)){const t=Array.from(this.editor.editing.mapper.markerNameToElements(Te)),i=e.createRange(e.createPositionBefore(t[0]),e.createPositionAfter(t[t.length-1]));n=e.domConverter.viewRangeToDom(i)}else n=()=>{const t=this._getSelectedLinkElement();return t?e.domConverter.mapViewToDom(t):e.domConverter.viewRangeToDom(i.selection.getFirstRange())};return{target:n}}_getSelectedLinkElement(){const e=this.editor.editing.view,t=e.document.selection,i=t.getSelectedElement();if(t.isCollapsed||i&&(0,be.isWidget)(i))return Ve(t.getFirstPosition());{const i=t.getFirstRange().getTrimmed(),n=Ve(i.start),o=Ve(i.end);return n&&n==o&&e.createRangeIn(n).getTrimmed().isEqual(i)?n:null}}_showFakeVisualSelection(){const e=this.editor.model;e.change((t=>{const i=e.document.selection.getFirstRange();if(e.markers.has(Te))t.updateMarker(Te,{range:i});else if(i.start.isAtEnd){const n=i.start.getLastMatchingPosition((({item:t})=>!e.schema.isContent(t)),{boundaries:i});t.addMarker(Te,{usingOperation:!1,affectsData:!1,range:t.createRange(n,i.end)})}else t.addMarker(Te,{usingOperation:!1,affectsData:!1,range:i})}))}_hideFakeVisualSelection(){const e=this.editor.model;e.markers.has(Te)&&e.change((e=>{e.removeMarker(Te)}))}}function Ve(e){return e.getAncestors().find((e=>{return(t=e).is("attributeElement")&&!!t.getCustomProperty("link");var t}))}const Le=new RegExp("(^|\\s)(((?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(((?!www\\.)|(www\\.))(?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.)+(?:[a-z\\u00a1-\\uffff]{2,63})))(?::\\d{2,5})?(?:[/?#]\\S*)?)|((www.|(\\S+@))((?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.))+(?:[a-z\\u00a1-\\uffff]{2,63})))$","i");class Ce extends e.Plugin{static get requires(){return[o.Delete]}static get pluginName(){return"AutoLink"}init(){const e=this.editor.model.document.selection;e.on("change:range",(()=>{this.isEnabled=!e.anchor.parent.is("element","codeBlock")})),this._enableTypingHandling()}afterInit(){this._enableEnterHandling(),this._enableShiftEnterHandling()}_enableTypingHandling(){const e=this.editor,t=new o.TextWatcher(e.model,(e=>{if(!function(e){return e.length>4&&" "===e[e.length-1]&&" "!==e[e.length-2]}(e))return;const t=De(e.substr(0,e.length-1));return t?{url:t}:void 0}));t.on("matched:data",((t,i)=>{const{batch:n,range:o,url:s}=i;if(!n.isTyping)return;const r=o.end.getShiftedBy(-1),a=r.getShiftedBy(-s.length),c=e.model.createRange(a,r);this._applyAutoLink(s,c)})),t.bind("isEnabled").to(this)}_enableEnterHandling(){const e=this.editor,t=e.model,i=e.commands.get("enter");i&&i.on("execute",(()=>{const e=t.document.selection.getFirstPosition();if(!e.parent.previousSibling)return;const i=t.createRangeIn(e.parent.previousSibling);this._checkAndApplyAutoLinkOnRange(i)}))}_enableShiftEnterHandling(){const e=this.editor,t=e.model,i=e.commands.get("shiftEnter");i&&i.on("execute",(()=>{const e=t.document.selection.getFirstPosition(),i=t.createRange(t.createPositionAt(e.parent,0),e.getShiftedBy(-1));this._checkAndApplyAutoLinkOnRange(i)}))}_checkAndApplyAutoLinkOnRange(e){const t=this.editor.model,{text:i,range:n}=(0,o.getLastTextLine)(e,t),s=De(i);if(s){const e=t.createRange(n.end.getShiftedBy(-s.length),n.end);this._applyAutoLink(s,e)}}_applyAutoLink(e,t){const i=this.editor.model,n=this.editor.plugins.get("Delete");this.isEnabled&&function(e,t){return t.schema.checkAttributeInSelection(t.createSelection(e),"linkHref")}(t,i)&&i.enqueueChange((o=>{const s=this.editor.config.get("link.defaultProtocol"),r=te(e,s);o.setAttribute("linkHref",r,t),i.enqueueChange((()=>{n.requestUndoOnBackspace()}))}))}}function De(e){const t=Le.exec(e);return t?t[2]:null}class Me extends e.Plugin{static get requires(){return[ke,Ee,Ce]}static get pluginName(){return"Link"}}class je extends e.Plugin{static get requires(){return["ImageEditing","ImageUtils",ke]}static get pluginName(){return"LinkImageEditing"}init(){const e=this.editor,t=e.model.schema;e.plugins.has("ImageBlockEditing")&&t.extend("imageBlock",{allowAttributes:["linkHref"]}),e.conversion.for("upcast").add(function(e){const t=e.plugins.has("ImageInlineEditing"),i=e.plugins.get("ImageUtils");return e=>{e.on("element:a",((e,n,o)=>{const s=n.viewItem,r=i.findViewImgElement(s);if(!r)return;const a=r.findAncestor((e=>i.isBlockImageView(e)));if(t&&!a)return;const c={attributes:["href"]};if(!o.consumable.consume(s,c))return;const l=s.getAttribute("href");if(!l)return;let u=n.modelCursor.parent;if(!u.is("element","imageBlock")){const e=o.convertItem(r,n.modelCursor);n.modelRange=e.modelRange,n.modelCursor=e.modelCursor,u=n.modelCursor.nodeBefore}u&&u.is("element","imageBlock")&&o.writer.setAttribute("linkHref",l,u)}),{priority:"high"})}}(e)),e.conversion.for("downcast").add(function(e){const t=e.plugins.get("ImageUtils");return e=>{e.on("attribute:linkHref:imageBlock",((e,i,n)=>{if(!n.consumable.consume(i.item,e.name))return;const o=n.mapper.toViewElement(i.item),s=n.writer,r=Array.from(o.getChildren()).find((e=>"a"===e.name)),a=t.findViewImgElement(o),c=a.parent.is("element","picture")?a.parent:a;if(r)i.attributeNewValue?s.setAttribute("href",i.attributeNewValue,r):(s.move(s.createRangeOn(c),s.createPositionAt(o,0)),s.remove(r));else{const e=s.createContainerElement("a",{href:i.attributeNewValue});s.insert(s.createPositionAt(o,0),e),s.move(s.createRangeOn(c),s.createPositionAt(e,0))}}),{priority:"high"})}}(e)),this._enableAutomaticDecorators(),this._enableManualDecorators()}_enableAutomaticDecorators(){const e=this.editor,t=e.commands.get("link").automaticDecorators;t.length&&e.conversion.for("downcast").add(t.getDispatcherForLinkedImage())}_enableManualDecorators(){const e=this.editor,t=e.commands.get("link");for(const i of t.manualDecorators)e.plugins.has("ImageBlockEditing")&&e.model.schema.extend("imageBlock",{allowAttributes:i.id}),e.plugins.has("ImageInlineEditing")&&e.model.schema.extend("imageInline",{allowAttributes:i.id}),e.conversion.for("downcast").add(Be(i)),e.conversion.for("upcast").add(Ne(e,i))}}function Be(e){return t=>{t.on(`attribute:${e.id}:imageBlock`,((t,i,n)=>{const o=n.mapper.toViewElement(i.item),s=Array.from(o.getChildren()).find((e=>"a"===e.name));if(s){for(const[t,i]of(0,r.toMap)(e.attributes))n.writer.setAttribute(t,i,s);e.classes&&n.writer.addClass(e.classes,s);for(const t in e.styles)n.writer.setStyle(t,e.styles[t],s)}}))}}function Ne(e,i){const n=e.plugins.has("ImageInlineEditing"),o=e.plugins.get("ImageUtils");return e=>{e.on("element:a",((e,s,r)=>{const a=s.viewItem,c=o.findViewImgElement(a);if(!c)return;const l=c.findAncestor((e=>o.isBlockImageView(e)));if(n&&!l)return;const u=new t.Matcher(i._createPattern()).match(a);if(!u)return;if(!r.consumable.consume(a,u.match))return;const d=s.modelCursor.nodeBefore||s.modelCursor.parent;r.writer.setAttribute(i.id,!0,d)}),{priority:"high"})}}class He extends e.Plugin{static get requires(){return[ke,Ee,"ImageBlockEditing"]}static get pluginName(){return"LinkImageUI"}init(){const e=this.editor,t=e.editing.view.document;this.listenTo(t,"click",((t,i)=>{this._isSelectedLinkedImage(e.model.document.selection)&&(i.preventDefault(),t.stop())}),{priority:"high"}),this._createToolbarLinkImageButton()}_createToolbarLinkImageButton(){const e=this.editor,t=e.t;e.ui.componentFactory.add("linkImage",(i=>{const n=new ge.ButtonView(i),o=e.plugins.get("LinkUI"),s=e.commands.get("link");return n.set({isEnabled:!0,label:t("Link image"),icon:Se,keystroke:G,tooltip:!0,isToggleable:!0}),n.bind("isEnabled").to(s,"isEnabled"),n.bind("isOn").to(s,"value",(e=>!!e)),this.listenTo(n,"execute",(()=>{this._isSelectedLinkedImage(e.model.document.selection)?o._addActionsView():o._showUI(!0)})),n}))}_isSelectedLinkedImage(e){const t=e.getSelectedElement();return this.editor.plugins.get("ImageUtils").isImage(t)&&t.hasAttribute("linkHref")}}var Oe=i(269),Ue={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ae()(Oe.Z,Ue);Oe.Z.locals;class Pe extends e.Plugin{static get requires(){return[je,He]}static get pluginName(){return"LinkImage"}}})(),(window.CKEditor5=window.CKEditor5||{}).link=n})();;
!function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{"Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Circle:"Circle",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero",Disc:"Disc","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Reversed order":"Reversed order",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.","To-do List":"To-do List","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var t={389:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var s=i(609),n=i.n(s)()((function(t){return t[1]}));n.push([t.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}",""]);const r=n},78:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var s=i(609),n=i.n(s)()((function(t){return t[1]}));n.push([t.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}",""]);const r=n},543:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var s=i(609),n=i.n(s)()((function(t){return t[1]}));n.push([t.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}",""]);const r=n},657:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var s=i(609),n=i.n(s)()((function(t){return t[1]}));n.push([t.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}",""]);const r=n},250:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var s=i(609),n=i.n(s)()((function(t){return t[1]}));n.push([t.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable .todo-list .todo-list__label>input{cursor:pointer}.ck-editor__editable .todo-list .todo-list__label>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}',""]);const r=n},609:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,s){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(s)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(n[o]=!0)}for(var l=0;l<t.length;l++){var a=[].concat(t[l]);s&&n[a[0]]||(i&&(a[2]?a[2]="".concat(i," and ").concat(a[2]):a[2]=i),e.push(a))}},e}},62:(t,e,i)=>{"use strict";var s,n=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},r=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),o=[];function l(t){for(var e=-1,i=0;i<o.length;i++)if(o[i].identifier===t){e=i;break}return e}function a(t,e){for(var i={},s=[],n=0;n<t.length;n++){var r=t[n],a=e.base?r[0]+e.base:r[0],c=i[a]||0,d="".concat(a," ").concat(c);i[a]=c+1;var u=l(d),m={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(o[u].references++,o[u].updater(m)):o.push({identifier:d,updater:b(m,e),references:1}),s.push(d)}return s}function c(t){var e=document.createElement("style"),s=t.attributes||{};if(void 0===s.nonce){var n=i.nc;n&&(s.nonce=n)}if(Object.keys(s).forEach((function(t){e.setAttribute(t,s[t])})),"function"==typeof t.insert)t.insert(e);else{var o=r(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function m(t,e,i,s){var n=i?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(t.styleSheet)t.styleSheet.cssText=u(e,n);else{var r=document.createTextNode(n),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function p(t,e,i){var s=i.css,n=i.media,r=i.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var h=null,f=0;function b(t,e){var i,s,n;if(e.singleton){var r=f++;i=h||(h=c(e)),s=m.bind(null,i,r,!1),n=m.bind(null,i,r,!0)}else i=c(e),s=p.bind(null,i,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=n());var i=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var s=0;s<i.length;s++){var n=l(i[s]);o[n].references--}for(var r=a(t,e),c=0;c<i.length;c++){var d=l(i[c]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}i=r}}}},704:(t,e,i)=>{t.exports=i(79)("./src/core.js")},492:(t,e,i)=>{t.exports=i(79)("./src/engine.js")},331:(t,e,i)=>{t.exports=i(79)("./src/enter.js")},181:(t,e,i)=>{t.exports=i(79)("./src/typing.js")},273:(t,e,i)=>{t.exports=i(79)("./src/ui.js")},209:(t,e,i)=>{t.exports=i(79)("./src/utils.js")},79:t=>{"use strict";t.exports=CKEditor5.dll}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={id:s,exports:{}};return t[s](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nc=void 0;var s={};(()=>{"use strict";i.r(s),i.d(s,{DocumentList:()=>pt,DocumentListEditing:()=>G,DocumentListProperties:()=>Mt,DocumentListPropertiesEditing:()=>Tt,List:()=>ie,ListEditing:()=>te,ListProperties:()=>pe,ListPropertiesEditing:()=>le,ListPropertiesUI:()=>Bt,ListUI:()=>mt,TodoList:()=>Te,TodoListEditing:()=>Ae,TodoListUI:()=>Ie});var t=i(704),e=i(331),n=i(181),r=i(209);class o{constructor(t,e){this._startElement=t,this._referenceIndent=t.getAttribute("listIndent"),this._isForward="forward"==e.direction,this._includeSelf=!!e.includeSelf,this._sameAttributes=(0,r.toArray)(e.sameAttributes||[]),this._sameIndent=!!e.sameIndent,this._lowerIndent=!!e.lowerIndent,this._higherIndent=!!e.higherIndent}static first(t,e){const i=new this(t,e)[Symbol.iterator]();return(0,r.first)(i)}*[Symbol.iterator](){const t=[];for(const{node:e}of l(this._getStartNode(),this._isForward?"forward":"backward")){const i=e.getAttribute("listIndent");if(i<this._referenceIndent){if(!this._lowerIndent)break;this._referenceIndent=i}else if(i>this._referenceIndent){if(!this._higherIndent)continue;if(!this._isForward){t.push(e);continue}}else{if(!this._sameIndent){if(this._higherIndent){t.length&&(yield*t,t.length=0);break}continue}if(this._sameAttributes.some((t=>e.getAttribute(t)!==this._startElement.getAttribute(t))))break}t.length&&(yield*t,t.length=0),yield e}}_getStartNode(){return this._includeSelf?this._startElement:this._isForward?this._startElement.nextSibling:this._startElement.previousSibling}}function*l(t,e="forward"){const i="forward"==e;let s=null;for(;d(t);)yield{node:t,previous:s},s=t,t=i?t.nextSibling:t.previousSibling}class a{constructor(t){this._listHead=t}[Symbol.iterator](){return l(this._listHead,"forward")}}class c{static next(){return(0,r.uid)()}}function d(t){return!!t&&t.is("element")&&t.hasAttribute("listItemId")}function u(t,e={}){return[...m(t,{...e,direction:"backward"}),...m(t,{...e,direction:"forward"})]}function m(t,e={}){const i="forward"==e.direction,s=Array.from(new o(t,{...e,includeSelf:i,sameIndent:!0,sameAttributes:"listItemId"}));return i?s:s.reverse()}function p(t){const e=new o(t,{sameIndent:!0,sameAttributes:"listType"}),i=new o(t,{sameIndent:!0,sameAttributes:"listType",includeSelf:!0,direction:"forward"});return[...Array.from(e).reverse(),...i]}function h(t){return!o.first(t,{sameIndent:!0,sameAttributes:"listItemId"})}function f(t){return!o.first(t,{direction:"forward",sameIndent:!0,sameAttributes:"listItemId"})}function b(t,e={}){t=(0,r.toArray)(t);const i=!1!==e.withNested,s=new Set;for(const e of t)for(const t of u(e,{higherIndent:i}))s.add(t);return k(s)}function g(t){t=(0,r.toArray)(t);const e=new Set;for(const i of t)for(const t of p(i))e.add(t);return k(e)}function v(t,e){const i=m(t,{direction:"forward"}),s=c.next();for(const t of i)e.setAttribute("listItemId",s,t);return i}function y(t,e,i){const s={};for(const[t,i]of e.getAttributes())t.startsWith("list")&&(s[t]=i);const n=m(t,{direction:"forward"});for(const t of n)i.setAttributes(s,t);return n}function w(t,e,{expand:i,indentBy:s=1}={}){t=(0,r.toArray)(t);const n=i?b(t):t;for(const t of n){const i=t.getAttribute("listIndent")+s;i<0?A(t,e):e.setAttribute("listIndent",i,t)}return n}function A(t,e){t=(0,r.toArray)(t);for(const i of t)for(const t of i.getAttributeKeys())t.startsWith("list")&&e.removeAttribute(t,i);return t}function I(t){if(!t.length)return!1;const e=t[0].getAttribute("listItemId");return!!e&&!t.some((t=>t.getAttribute("listItemId")!=e))}function k(t){return Array.from(t).filter((t=>"$graveyard"!==t.root.rootName)).sort(((t,e)=>t.index-e.index))}function x(t){const e=t.document.selection.getSelectedElement();return e&&t.schema.isObject(e)&&t.schema.isBlock(e)?e:null}function T(t,e,i){return m(e,{direction:"forward"}).pop().index>t.index?y(t,e,i):[]}class S extends t.Command{constructor(t,e){super(t),this._direction=e}refresh(){this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=_(t.document.selection);t.change((t=>{const i=[];I(e)&&!h(e[0])?("forward"==this._direction&&i.push(...w(e,t)),i.push(...v(e[0],t))):"forward"==this._direction?i.push(...w(e,t,{expand:!0})):i.push(...function(t,e){const i=b(t=(0,r.toArray)(t)),s=new Set,n=Math.min(...i.map((t=>t.getAttribute("listIndent")))),l=new Map;for(const t of i)l.set(t,o.first(t,{lowerIndent:!0}));for(const t of i){if(s.has(t))continue;s.add(t);const i=t.getAttribute("listIndent")-1;if(i<0)A(t,e);else{if(t.getAttribute("listIndent")==n){const i=T(t,l.get(t),e);for(const t of i)s.add(t);if(i.length)continue}e.setAttribute("listIndent",i,t)}}return k(s)}(e,t));for(const e of i){if(!e.hasAttribute("listType"))continue;const i=o.first(e,{sameIndent:!0});i&&t.setAttribute("listType",i.getAttribute("listType"),e)}this._fireAfterExecute(i)}))}_fireAfterExecute(t){this.fire("afterExecute",k(new Set(t)))}_checkEnabled(){let t=_(this.editor.model.document.selection),e=t[0];if(!e)return!1;if("backward"==this._direction)return!0;if(I(t)&&!h(t[0]))return!0;t=b(t),e=t[0];const i=o.first(e,{sameIndent:!0});return!!i&&i.getAttribute("listType")==e.getAttribute("listType")}}function _(t){const e=Array.from(t.getSelectedBlocks()),i=e.findIndex((t=>!d(t)));return-1!=i&&(e.length=i),e}class C extends t.Command{constructor(t,e){super(t),this.type=e}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){const e=this.editor.model,i=e.document,s=x(e),n=Array.from(i.selection.getSelectedBlocks()).filter((t=>e.schema.checkAttribute(t,"listType"))),r=void 0!==t.forceValue?!t.forceValue:this.value;e.change((t=>{if(r){const e=n[n.length-1],i=m(e,{direction:"forward"}),s=[];i.length>1&&s.push(...v(i[1],t)),s.push(...A(n,t)),s.push(...function(t,e){const i=[];let s=Number.POSITIVE_INFINITY;for(const{node:n}of l(t.nextSibling,"forward")){const t=n.getAttribute("listIndent");if(0==t)break;t<s&&(s=t);const r=t-s;e.setAttribute("listIndent",r,n),i.push(n)}return i}(e,t)),this._fireAfterExecute(s)}else if((s||i.selection.isCollapsed)&&d(n[0])){const e=p(s||n[0]);for(const i of e)t.setAttribute("listType",this.type,i);this._fireAfterExecute(e)}else{const e=[];for(const i of n)if(i.hasAttribute("listType"))for(const s of b(i,{withNested:!1}))s.getAttribute("listType")!=this.type&&(t.setAttribute("listType",this.type,s),e.push(s));else t.setAttributes({listIndent:0,listItemId:c.next(),listType:this.type},i),e.push(i);this._fireAfterExecute(e)}}))}_fireAfterExecute(t){this.fire("afterExecute",k(new Set(t)))}_getValue(){const t=this.editor.model.document.selection,e=Array.from(t.getSelectedBlocks());if(!e.length)return!1;for(const t of e)if(t.getAttribute("listType")!=this.type)return!1;return!0}_checkEnabled(){const t=this.editor.model.document.selection,e=this.editor.model.schema,i=Array.from(t.getSelectedBlocks());if(!i.length)return!1;if(this.value)return!0;for(const t of i)if(e.checkAttribute(t,"listType"))return!0;return!1}}class V extends t.Command{constructor(t,e){super(t),this._direction=e}refresh(){this.isEnabled=this._checkEnabled()}execute({shouldMergeOnBlocksContentLevel:t=!1}={}){const e=this.editor.model,i=e.document.selection,s=[];e.change((n=>{const{firstElement:r,lastElement:l}=this._getMergeSubjectElements(i,t),a=r.getAttribute("listIndent")||0,c=l.getAttribute("listIndent"),d=l.getAttribute("listItemId");if(a!=c){const t=(u=l,Array.from(new o(u,{direction:"forward",higherIndent:!0})));s.push(...w([l,...t],n,{indentBy:a-c,expand:a<c}))}var u;if(t){let t=i;i.isCollapsed&&(t=n.createSelection(n.createRange(n.createPositionAt(r,"end"),n.createPositionAt(l,0)))),e.deleteContent(t,{doNotResetEntireContent:i.isCollapsed});const o=t.getLastPosition().parent,a=o.nextSibling;s.push(o),a&&a!==l&&a.getAttribute("listItemId")==d&&s.push(...y(a,o,n))}else s.push(...y(l,r,n));this._fireAfterExecute(s)}))}_fireAfterExecute(t){this.fire("afterExecute",k(new Set(t)))}_checkEnabled(){const t=this.editor.model,e=t.document.selection,i=x(t);if(e.isCollapsed||i){const t=i||e.getFirstPosition().parent;if(!d(t))return!1;const s="backward"==this._direction?t.previousSibling:t.nextSibling;if(!s)return!1;if(I([t,s]))return!1}else{const t=e.getLastPosition(),i=e.getFirstPosition();if(t.parent===i.parent)return!1;if(!d(t.parent))return!1}return!0}_getMergeSubjectElements(t,e){const i=x(this.editor.model);let s,n;if(t.isCollapsed||i){const r=i||t.getFirstPosition().parent,l=h(r);"backward"==this._direction?(n=r,s=l&&!e?o.first(r,{sameIndent:!0,lowerIndent:!0}):r.previousSibling):(s=r,n=r.nextSibling)}else s=t.getFirstPosition().parent,n=t.getLastPosition().parent;return{firstElement:s,lastElement:n}}}class L extends t.Command{constructor(t,e){super(t),this._direction=e}refresh(){this.isEnabled=this._checkEnabled()}execute(){this.editor.model.change((t=>{const e=v(this._getStartBlock(),t);this._fireAfterExecute(e)}))}_fireAfterExecute(t){this.fire("afterExecute",k(new Set(t)))}_checkEnabled(){const t=this.editor.model.document.selection,e=this._getStartBlock();return t.isCollapsed&&d(e)&&!h(e)}_getStartBlock(){const t=this.editor.model.document.selection.getFirstPosition().parent;return"before"==this._direction?t:t.nextSibling}}function E(t){return t.is("element","ol")||t.is("element","ul")}function P(t){return t.is("element","li")}function z(t){let e=0,i=t.parent;for(;i;){if(P(i))e++;else{const t=i.previousSibling;t&&P(t)&&e++}i=i.parent}return e}function B(t,e,i,s=R(i,e)){return t.createAttributeElement(M(i),null,{priority:2*e/100-100,id:s})}function N(t,e,i){return t.createAttributeElement("li",null,{priority:(2*e+1)/100-100,id:i})}function M(t){return"numbered"==t?"ol":"ul"}function R(t,e){return`list-${t}-${e}`}function O(t,e){const i=t.nodeBefore;if(d(i)){let t=i;for({node:t}of l(t,"backward"))if(e.has(t))return;e.set(i,t)}else{const i=t.nodeAfter;d(i)&&e.set(i,i)}}var H=i(492);function F(){return(t,e,i)=>{if(!i.consumable.test(e.viewItem,{name:!0}))return;const s=new H.UpcastWriter(e.viewItem.document);for(const t of Array.from(e.viewItem.getChildren()))P(t)||E(t)||s.remove(t)}}function D(t,e,i){const s=function(t){return(e,i)=>{const s=[];for(const i of t)e.hasAttribute(i)&&s.push(`attribute:${i}`);return!!s.every((t=>!1!==i.test(e,t)))&&(s.forEach((t=>i.consume(e,t))),!0)}}(t);return(n,r,l)=>{const{writer:a,mapper:c,consumable:d}=l,u=r.item;if(!t.includes(r.attributeKey))return;if(!s(u,d))return;const m=function(t,e,i){const s=i.createRangeOn(t);return e.toViewRange(s).getTrimmed().getContainedElement()}(u,c,i);!function(t,e){let i=t.parent;for(;i.is("attributeElement")&&["ul","ol","li"].includes(i.name);){const s=i.parent;e.unwrap(e.createRangeOn(t),i),i=s}}(m,a),function(t,e,i,s){if(!t.hasAttribute("listIndent"))return;const n=t.getAttribute("listIndent");let r=t;for(let t=n;t>=0;t--){const n=N(s,t,r.getAttribute("listItemId")),l=B(s,t,r.getAttribute("listType"));for(const t of i)r.hasAttribute(t.attributeName)&&t.setAttributeOnDowncast(s,r.getAttribute(t.attributeName),"list"==t.scope?l:n);if(e=s.wrap(e,n),e=s.wrap(e,l),0==t)break;if(r=o.first(r,{lowerIndent:!0}),!r)break}}(u,a.createRangeOn(m),e,a)}}function j(t,{dataPipeline:e}={}){return(i,{writer:s})=>{if(!U(i,t))return;const n=s.createContainerElement("span",{class:"ck-list-bogus-paragraph"});return e&&s.setCustomProperty("dataPipeline:transparentRendering",!0,n),n}}function U(t,e,i=u(t)){if(!d(t))return!1;for(const i of t.getAttributeKeys())if(!i.startsWith("selection:")&&!e.includes(i))return!1;return i.length<2}var q=i(62),K=i.n(q),Z=i(78),$={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Z.Z,$);Z.Z.locals;const W=["listType","listIndent","listItemId"];class G extends t.Plugin{static get pluginName(){return"DocumentListEditing"}static get requires(){return[e.Enter,n.Delete]}constructor(t){super(t),this._downcastStrategies=[]}init(){const t=this.editor,e=t.model;if(t.plugins.has("ListEditing"))throw new r.CKEditorError("document-list-feature-conflict",this,{conflictPlugin:"ListEditing"});e.schema.extend("$container",{allowAttributes:W}),e.schema.extend("$block",{allowAttributes:W}),e.schema.extend("$blockObject",{allowAttributes:W});for(const t of W)e.schema.setAttributeProperties(t,{copyOnReplace:!0});t.commands.add("numberedList",new C(t,"numbered")),t.commands.add("bulletedList",new C(t,"bulleted")),t.commands.add("indentList",new S(t,"forward")),t.commands.add("outdentList",new S(t,"backward")),t.commands.add("mergeListItemBackward",new V(t,"backward")),t.commands.add("mergeListItemForward",new V(t,"forward")),t.commands.add("splitListItemBefore",new L(t,"before")),t.commands.add("splitListItemAfter",new L(t,"after")),this._setupDeleteIntegration(),this._setupEnterIntegration(),this._setupTabIntegration(),this._setupClipboardIntegration()}afterInit(){const t=this.editor.commands,e=t.get("indent"),i=t.get("outdent");e&&e.registerChildCommand(t.get("indentList"),{priority:"high"}),i&&i.registerChildCommand(t.get("outdentList"),{priority:"lowest"}),this._setupModelPostFixing(),this._setupConversion()}registerDowncastStrategy(t){this._downcastStrategies.push(t)}_getListAttributeNames(){return[...W,...this._downcastStrategies.map((t=>t.attributeName))]}_setupDeleteIntegration(){const t=this.editor,e=t.commands.get("mergeListItemBackward"),i=t.commands.get("mergeListItemForward");this.listenTo(t.editing.view.document,"delete",((s,n)=>{const r=t.model.document.selection;x(t.model)||t.model.change((()=>{const l=r.getFirstPosition();if(r.isCollapsed&&"backward"==n.direction){if(!l.isAtStart)return;const i=l.parent;if(!d(i))return;if(o.first(i,{sameAttributes:"listType",sameIndent:!0})||0!==i.getAttribute("listIndent")){if(!e.isEnabled)return;e.execute({shouldMergeOnBlocksContentLevel:Y(t.model,"backward")})}else f(i)||t.execute("splitListItemAfter"),t.execute("outdentList");n.preventDefault(),s.stop()}else{if(r.isCollapsed&&!r.getLastPosition().isAtEnd)return;if(!i.isEnabled)return;i.execute({shouldMergeOnBlocksContentLevel:Y(t.model,"forward")}),n.preventDefault(),s.stop()}}))}),{context:"li"})}_setupEnterIntegration(){const t=this.editor,e=t.model,i=t.commands,s=i.get("enter");this.listenTo(t.editing.view.document,"enter",((i,s)=>{const n=e.document,r=n.selection.getFirstPosition().parent;if(n.selection.isCollapsed&&d(r)&&r.isEmpty&&!s.isSoft){const e=h(r),n=f(r);e&&n?(t.execute("outdentList"),s.preventDefault(),i.stop()):e&&!n?(t.execute("splitListItemAfter"),s.preventDefault(),i.stop()):n&&(t.execute("splitListItemBefore"),s.preventDefault(),i.stop())}}),{context:"li"}),this.listenTo(s,"afterExecute",(()=>{const e=i.get("splitListItemBefore");if(e.refresh(),!e.isEnabled)return;2===u(t.model.document.selection.getLastPosition().parent).length&&e.execute()}))}_setupTabIntegration(){const t=this.editor;this.listenTo(t.editing.view.document,"tab",((e,i)=>{const s=i.shiftKey?"outdentList":"indentList";this.editor.commands.get(s).isEnabled&&(t.execute(s),i.stopPropagation(),i.preventDefault(),e.stop())}),{context:"li"})}_setupConversion(){const t=this.editor,e=t.model,i=this._getListAttributeNames();t.conversion.for("upcast").elementToElement({view:"li",model:"paragraph"}).add((t=>{t.on("element:li",((t,e,i)=>{const{writer:s,schema:n}=i;if(!e.modelRange)return;const r=Array.from(e.modelRange.getItems({shallow:!0})).filter((t=>n.checkAttribute(t,"listItemId")));if(!r.length)return;const o={listItemId:c.next(),listIndent:z(e.viewItem),listType:e.viewItem.parent&&"ol"==e.viewItem.parent.name?"numbered":"bulleted"};for(const t of r)d(t)||s.setAttributes(o,t);r.length>1&&r[1].getAttribute("listItemId")!=o.listItemId&&i.keepEmptyElement(r[0])})),t.on("element:ul",F(),{priority:"high"}),t.on("element:ol",F(),{priority:"high"})})),t.conversion.for("editingDowncast").elementToElement({model:"paragraph",view:j(i),converterPriority:"high"}),t.conversion.for("dataDowncast").elementToElement({model:"paragraph",view:j(i,{dataPipeline:!0}),converterPriority:"high"}),t.conversion.for("downcast").add((t=>{t.on("attribute",D(i,this._downcastStrategies,e))})),this.listenTo(e.document,"change:data",function(t,e,i,s){return()=>{const s=t.document.differ.getChanges(),o=[],l=new Map,a=new Set;for(const t of s)if("insert"==t.type&&"$text"!=t.name)O(t.position,l),t.attributes.has("listItemId")?a.add(t.position.nodeAfter):O(t.position.getShiftedBy(t.length),l);else if("remove"==t.type&&t.attributes.has("listItemId"))O(t.position,l);else if("attribute"==t.type){const e=t.range.start.nodeAfter;i.includes(t.attributeKey)?(O(t.range.start,l),null===t.attributeNewValue?(O(t.range.start.getShiftedBy(1),l),r(e)&&o.push(e)):a.add(e)):d(e)&&r(e)&&o.push(e)}for(const t of l.values())o.push(...n(t,a));for(const t of new Set(o))e.reconvertItem(t)};function n(t,e){const s=[],n=new Set,a=[];for(const{node:c,previous:d}of l(t,"forward")){if(n.has(c))continue;const t=c.getAttribute("listIndent");d&&t<d.getAttribute("listIndent")&&(a.length=t+1),a[t]=Object.fromEntries(Array.from(c.getAttributes()).filter((([t])=>i.includes(t))));const l=m(c,{direction:"forward"});for(const t of l)n.add(t),(r(t,l)||o(t,a,e))&&s.push(t)}return s}function r(t,s){if(!t.is("element","paragraph"))return!1;const n=e.mapper.toViewElement(t);if(!n)return!1;const r=U(t,i,s);return!(!r||!n.is("element","p"))||!(r||!n.is("element","span"))}function o(t,i,n){if(n.has(t))return!1;const r=e.mapper.toViewElement(t);let o=i.length-1;for(let t=r.parent;!t.is("editableElement");t=t.parent){const e=P(t),n=E(t);if(!n&&!e)continue;const r="checkAttributes:"+(e?"item":"list");if(s.fire(r,{viewElement:t,modelAttributes:i[o]}))break;if(n&&(o--,o<0))return!1}return!0}}(e,t.editing,i,this)),this.on("checkAttributes:item",((t,{viewElement:e,modelAttributes:i})=>{e.id!=i.listItemId&&(t.return=!0,t.stop())})),this.on("checkAttributes:list",((t,{viewElement:e,modelAttributes:i})=>{e.name==M(i.listType)&&e.id==R(i.listType,i.listIndent)||(t.return=!0,t.stop())}))}_setupModelPostFixing(){const t=this.editor.model,e=this._getListAttributeNames();t.document.registerPostFixer((i=>function(t,e,i,s){const n=t.document.differ.getChanges(),r=new Map;let o=!1;for(const s of n)if("insert"==s.type&&"$text"!=s.name){const n=s.position.nodeAfter;if(!t.schema.checkAttribute(n,"listItemId"))for(const t of Array.from(n.getAttributeKeys()))i.includes(t)&&(e.removeAttribute(t,n),o=!0);O(s.position,r),s.attributes.has("listItemId")||O(s.position.getShiftedBy(s.length),r);for(const{item:e,previousPosition:i}of t.createRangeIn(n))d(e)&&O(i,r)}else"remove"==s.type?O(s.position,r):"attribute"==s.type&&i.includes(s.attributeKey)&&(O(s.range.start,r),null===s.attributeNewValue&&O(s.range.start.getShiftedBy(1),r));const l=new Set;for(const t of r.values())o=s.fire("postFixer",{listNodes:new a(t),listHead:t,writer:e,seenIds:l})||o;return o}(t,i,e,this))),this.on("postFixer",((t,{listNodes:e,writer:i})=>{t.return=function(t,e){let i=0,s=-1,n=null,r=!1;for(const{node:o}of t){const t=o.getAttribute("listIndent");if(t>i){let l;null===n?(n=t-i,l=i):(n>t&&(n=t),l=t-n),l>s+1&&(l=s+1),e.setAttribute("listIndent",l,o),r=!0,s=l}else n=null,i=t+1,s=t}return r}(e,i)||t.return}),{priority:"high"}),this.on("postFixer",((t,{listNodes:e,writer:i,seenIds:s})=>{t.return=function(t,e,i){const s=new Set;let n=!1;for(const{node:r}of t){if(s.has(r))continue;let t=r.getAttribute("listType"),o=r.getAttribute("listItemId");e.has(o)&&(o=c.next()),e.add(o);for(const e of m(r,{direction:"forward"}))s.add(e),e.getAttribute("listType")!=t&&(o=c.next(),t=e.getAttribute("listType")),e.getAttribute("listItemId")!=o&&(i.setAttribute("listItemId",o,e),n=!0)}return n}(e,s,i)||t.return}),{priority:"high"})}_setupClipboardIntegration(){const t=this.editor.model;this.listenTo(t,"insertContent",function(t){return(e,[i,s])=>{const n=i.is("documentFragment")?i.getChild(0):i;if(!d(n))return;let r;r=s?t.createSelection(s):t.document.selection;const o=r.getFirstPosition();let a=null;if(d(o.parent)?a=o.parent:d(o.nodeBefore)&&(a=o.nodeBefore),!a)return;const c=a.getAttribute("listIndent")-n.getAttribute("listIndent");c<=0||t.change((t=>{for(const{node:e}of l(n,"forward"))t.setAttribute("listIndent",e.getAttribute("listIndent")+c,e)}))}}(t),{priority:"high"}),this.listenTo(t,"getSelectedContent",((e,[i])=>{I(Array.from(i.getSelectedBlocks()))&&t.change((t=>A(Array.from(e.return.getChildren()),t)))}))}}function Y(t,e){const i=t.document.selection;if(!i.isCollapsed)return!x(t);if("forward"===e)return!0;const s=i.getFirstPosition().parent,n=s.previousSibling;return!t.schema.isObject(n)&&(!!n.isEmpty||I([s,n]))}var J=i(273);function Q(t,e){const i=e.mapper,s=e.writer,n="numbered"==t.getAttribute("listType")?"ol":"ul",r=function(t){const e=t.createContainerElement("li");return e.getFillerOffset=ct,e}(s),o=s.createContainerElement(n,null);return s.insert(s.createPositionAt(o,0),r),i.bindElements(t,r),r}function X(t,e,i,s){const n=e.parent,r=i.mapper,o=i.writer;let l=r.toViewPosition(s.createPositionBefore(t));const a=it(t.previousSibling,{sameIndent:!0,smallerIndent:!0,listIndent:t.getAttribute("listIndent")}),c=t.previousSibling;if(a&&a.getAttribute("listIndent")==t.getAttribute("listIndent")){const t=r.toViewElement(a);l=o.breakContainer(o.createPositionAfter(t))}else if(c&&"listItem"==c.name){l=r.toViewPosition(s.createPositionAt(c,"end"));const t=r.findMappedViewAncestor(l),e=nt(t);l=e?o.createPositionBefore(e):o.createPositionAt(t,"end")}else l=r.toViewPosition(s.createPositionBefore(t));if(l=et(l),o.insert(l,n),c&&"listItem"==c.name){const t=r.toViewElement(c),i=o.createRange(o.createPositionAt(t,0),l).getWalker({ignoreElementEnd:!0});for(const t of i)if(t.item.is("element","li")){const s=o.breakContainer(o.createPositionBefore(t.item)),n=t.item.parent,r=o.createPositionAt(e,"end");tt(o,r.nodeBefore,r.nodeAfter),o.move(o.createRangeOn(n),r),i.position=s}}else{const i=n.nextSibling;if(i&&(i.is("element","ul")||i.is("element","ol"))){let s=null;for(const e of i.getChildren()){const i=r.toModelElement(e);if(!(i&&i.getAttribute("listIndent")>t.getAttribute("listIndent")))break;s=e}s&&(o.breakContainer(o.createPositionAfter(s)),o.move(o.createRangeOn(s.parent),o.createPositionAt(e,"end")))}}tt(o,n,n.nextSibling),tt(o,n.previousSibling,n)}function tt(t,e,i){return!e||!i||"ul"!=e.name&&"ol"!=e.name||e.name!=i.name||e.getAttribute("class")!==i.getAttribute("class")?null:t.mergeContainers(t.createPositionAfter(e))}function et(t){return t.getLastMatchingPosition((t=>t.item.is("uiElement")))}function it(t,e){const i=!!e.sameIndent,s=!!e.smallerIndent,n=e.listIndent;let r=t;for(;r&&"listItem"==r.name;){const t=r.getAttribute("listIndent");if(i&&n==t||s&&n>t)return r;r="forward"===e.direction?r.nextSibling:r.previousSibling}return null}function st(t,e,i,s){t.ui.componentFactory.add(e,(n=>{const r=t.commands.get(e),o=new J.ButtonView(n);return o.set({label:i,icon:s,tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(r,"value","isEnabled"),o.on("execute",(()=>{t.execute(e),t.editing.view.focus()})),o}))}function nt(t){for(const e of t.getChildren())if("ul"==e.name||"ol"==e.name)return e;return null}function rt(t,e){const i=[],s=t.parent,n={ignoreElementEnd:!0,startPosition:t,shallow:!0,direction:e},r=s.getAttribute("listIndent"),o=[...new H.TreeWalker(n)].filter((t=>t.item.is("element"))).map((t=>t.item));for(const t of o){if(!t.is("element","listItem"))break;if(t.getAttribute("listIndent")<r)break;if(!(t.getAttribute("listIndent")>r)){if(t.getAttribute("listType")!==s.getAttribute("listType"))break;if(t.getAttribute("listStyle")!==s.getAttribute("listStyle"))break;if(t.getAttribute("listReversed")!==s.getAttribute("listReversed"))break;if(t.getAttribute("listStart")!==s.getAttribute("listStart"))break;"backward"===e?i.unshift(t):i.push(t)}}return i}function ot(t){let e=[...t.document.selection.getSelectedBlocks()].filter((t=>t.is("element","listItem"))).map((e=>{const i=t.change((t=>t.createPositionAt(e,0)));return[...rt(i,"backward"),...rt(i,"forward")]})).flat();return e=[...new Set(e)],e}const lt=["disc","circle","square"],at=["decimal","decimal-leading-zero","lower-roman","upper-roman","lower-latin","upper-latin"];function ct(){const t=!this.isEmpty&&("ul"==this.getChild(0).name||"ol"==this.getChild(0).name);return this.isEmpty||t?0:H.getFillerOffset.call(this)}const dt='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>',ut='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>';class mt extends t.Plugin{static get pluginName(){return"ListUI"}init(){const t=this.editor.t;st(this.editor,"numberedList",t("Numbered List"),dt),st(this.editor,"bulletedList",t("Bulleted List"),ut)}}class pt extends t.Plugin{static get requires(){return[G,mt]}static get pluginName(){return"DocumentList"}}class ht extends t.Command{refresh(){const t=this._getValue();this.value=t,this.isEnabled=null!=t}execute(t={}){const e=this.editor.model,i=e.document;let s=Array.from(i.selection.getSelectedBlocks()).filter((t=>d(t)&&"numbered"==t.getAttribute("listType")));s=g(s),e.change((e=>{for(const i of s)e.setAttribute("listStart",t.startIndex||1,i)}))}_getValue(){const t=this.editor.model.document,e=(0,r.first)(t.selection.getSelectedBlocks());return e&&d(e)&&"numbered"==e.getAttribute("listType")?e.getAttribute("listStart"):null}}const ft={},bt={},gt={},vt=[{listStyle:"disc",typeAttribute:"disc",listType:"bulleted"},{listStyle:"circle",typeAttribute:"circle",listType:"bulleted"},{listStyle:"square",typeAttribute:"square",listType:"bulleted"},{listStyle:"decimal",typeAttribute:"1",listType:"numbered"},{listStyle:"decimal-leading-zero",typeAttribute:null,listType:"numbered"},{listStyle:"lower-roman",typeAttribute:"i",listType:"numbered"},{listStyle:"upper-roman",typeAttribute:"I",listType:"numbered"},{listStyle:"lower-alpha",typeAttribute:"a",listType:"numbered"},{listStyle:"upper-alpha",typeAttribute:"A",listType:"numbered"},{listStyle:"lower-latin",typeAttribute:"a",listType:"numbered"},{listStyle:"upper-latin",typeAttribute:"A",listType:"numbered"}];for(const{listStyle:t,typeAttribute:e,listType:i}of vt)ft[t]=i,bt[t]=e,e&&(gt[e]=t);function yt(t){return ft[t]||null}function wt(t){return bt[t]||null}class At extends t.Command{constructor(t,e,i){super(t),this._defaultType=e,this._supportedTypes=i}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){const e=this.editor.model,i=e.document;e.change((e=>{this._tryToConvertItemsToList(t);let s=Array.from(i.selection.getSelectedBlocks()).filter((t=>t.hasAttribute("listType")));if(s.length){s=g(s);for(const i of s)e.setAttribute("listStyle",t.type||this._defaultType,i)}}))}isStyleTypeSupported(t){return!this._supportedTypes||this._supportedTypes.includes(t)}_getValue(){const t=(0,r.first)(this.editor.model.document.selection.getSelectedBlocks());return d(t)?t.getAttribute("listStyle"):null}_checkEnabled(){const t=this.editor,e=t.commands.get("numberedList"),i=t.commands.get("bulletedList");return e.isEnabled||i.isEnabled}_tryToConvertItemsToList(t){if(!t.type)return;const e=yt(t.type);if(!e)return;const i=this.editor,s=e+"List";i.commands.get(s).value||i.execute(s)}}class It extends t.Command{refresh(){const t=this._getValue();this.value=t,this.isEnabled=null!=t}execute(t={}){const e=this.editor.model,i=e.document;let s=Array.from(i.selection.getSelectedBlocks()).filter((t=>d(t)&&"numbered"==t.getAttribute("listType")));s=g(s),e.change((e=>{for(const i of s)e.setAttribute("listReversed",!!t.reversed,i)}))}_getValue(){const t=this.editor.model.document,e=(0,r.first)(t.selection.getSelectedBlocks());return d(e)&&"numbered"==e.getAttribute("listType")?e.getAttribute("listReversed"):null}}function kt(t){return(e,i,s)=>{const{writer:n,schema:r,consumable:o}=s;if(!1===o.test(i.viewItem,t.viewConsumables))return;i.modelRange||Object.assign(i,s.convertChildren(i.viewItem,i.modelCursor));let l=!1;for(const e of i.modelRange.getItems({shallow:!0}))r.checkAttribute(e,t.attributeName)&&t.appliesToListItem(e)&&(e.hasAttribute(t.attributeName)||(n.setAttribute(t.attributeName,t.getAttributeOnUpcast(i.viewItem),e),l=!0));l&&o.consume(i.viewItem,t.viewConsumables)}}const xt="default";class Tt extends t.Plugin{static get requires(){return[G]}static get pluginName(){return"DocumentListPropertiesEditing"}constructor(t){super(t),t.config.define("list",{properties:{styles:!0,startIndex:!1,reversed:!1}})}init(){const t=this.editor,e=t.model,i=t.plugins.get(G),s=function(t){const e=[];if(t.styles){const i="object"==typeof t.styles&&t.styles.useAttribute;e.push({attributeName:"listStyle",defaultValue:xt,viewConsumables:{styles:"list-style-type"},addCommand(t){let e=vt.map((t=>t.listStyle));i&&(e=e.filter((t=>!!wt(t)))),t.commands.add("listStyle",new At(t,xt,e))},appliesToListItem:()=>!0,hasValidAttribute(t){if(!t.hasAttribute("listStyle"))return!1;const e=t.getAttribute("listStyle");return e==xt||yt(e)==t.getAttribute("listType")},setAttributeOnDowncast(t,e,s){if(e&&e!==xt){if(!i)return void t.setStyle("list-style-type",e,s);{const i=wt(e);if(i)return void t.setAttribute("type",i,s)}}t.removeStyle("list-style-type",s),t.removeAttribute("type",s)},getAttributeOnUpcast(t){const e=t.getStyle("list-style-type");if(e)return e;const i=t.getAttribute("type");return i?gt[i]||null:xt}})}t.reversed&&e.push({attributeName:"listReversed",defaultValue:!1,viewConsumables:{attributes:"reversed"},addCommand(t){t.commands.add("listReversed",new It(t))},appliesToListItem:t=>"numbered"==t.getAttribute("listType"),hasValidAttribute(t){return this.appliesToListItem(t)==t.hasAttribute("listReversed")},setAttributeOnDowncast(t,e,i){e?t.setAttribute("reversed","reversed",i):t.removeAttribute("reversed",i)},getAttributeOnUpcast:t=>t.hasAttribute("reversed")});t.startIndex&&e.push({attributeName:"listStart",defaultValue:1,viewConsumables:{attributes:"start"},addCommand(t){t.commands.add("listStart",new ht(t))},appliesToListItem:t=>"numbered"==t.getAttribute("listType"),hasValidAttribute(t){return this.appliesToListItem(t)==t.hasAttribute("listStart")},setAttributeOnDowncast(t,e,i){e&&e>1?t.setAttribute("start",e,i):t.removeAttribute("start",i)},getAttributeOnUpcast:t=>t.getAttribute("start")||1});return e}(t.config.get("list.properties"));for(const n of s)n.addCommand(t),e.schema.extend("$container",{allowAttributes:n.attributeName}),e.schema.extend("$block",{allowAttributes:n.attributeName}),e.schema.extend("$blockObject",{allowAttributes:n.attributeName}),i.registerDowncastStrategy({scope:"list",attributeName:n.attributeName,setAttributeOnDowncast(t,e,i){n.setAttributeOnDowncast(t,e,i)}});t.conversion.for("upcast").add((t=>{for(const e of s)t.on("element:ol",kt(e)),t.on("element:ul",kt(e))})),i.on("checkAttributes:list",((t,{viewElement:e,modelAttributes:i})=>{for(const n of s)n.getAttributeOnUpcast(e)!=i[n.attributeName]&&(t.return=!0,t.stop())})),this.listenTo(t.commands.get("indentList"),"afterExecute",((t,i)=>{e.change((t=>{for(const e of i)for(const i of s)i.appliesToListItem(e)&&t.setAttribute(i.attributeName,i.defaultValue,e)}))})),i.on("postFixer",((t,{listNodes:e,writer:i})=>{for(const{node:n}of e)for(const e of s)e.hasValidAttribute(n)||(e.appliesToListItem(n)?i.setAttribute(e.attributeName,e.defaultValue,n):i.removeAttribute(e.attributeName,n),t.return=!0)})),i.on("postFixer",((t,{listNodes:e,writer:i})=>{const n=[];for(const{node:r,previous:o}of e){if(!o)continue;const e=r.getAttribute("listIndent"),l=o.getAttribute("listIndent");let a=null;if(e>l?n[l]=o:e<l?(a=n[e],n.length=e):a=o,a&&a.getAttribute("listType")==r.getAttribute("listType"))for(const e of s){const{attributeName:s}=e;if(!e.appliesToListItem(r))continue;const n=a.getAttribute(s);r.getAttribute(s)!=n&&(i.setAttribute(s,n,r),t.return=!0)}}}))}}var St=i(389),_t={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(St.Z,_t);St.Z.locals;class Ct extends J.View{constructor(t,e){super(t);const i=this.bindTemplate;this.set("isCollapsed",!1),this.set("label",""),this.buttonView=this._createButtonView(),this.children=this.createCollection(),this.set("_collapsibleAriaLabelUid"),e&&this.children.addMany(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-collapsible",i.if("isCollapsed","ck-collapsible_collapsed")]},children:[this.buttonView,{tag:"div",attributes:{class:["ck","ck-collapsible__children"],role:"region",hidden:i.if("isCollapsed","hidden"),"aria-labelledby":i.to("_collapsibleAriaLabelUid")},children:this.children}]})}render(){super.render(),this._collapsibleAriaLabelUid=this.buttonView.labelView.element.id}_createButtonView(){const t=new J.ButtonView(this.locale),e=t.bindTemplate;return t.set({withText:!0,icon:'<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>'}),t.extendTemplate({attributes:{"aria-expanded":e.to("isOn",(t=>String(t)))}}),t.bind("label").to(this),t.bind("isOn").to(this,"isCollapsed",(t=>!t)),t.on("execute",(()=>{this.isCollapsed=!this.isCollapsed})),t}}var Vt=i(543),Lt={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Vt.Z,Lt);Vt.Z.locals;class Et extends J.View{constructor(t,{enabledProperties:e,styleButtonViews:i,styleGridAriaLabel:s}){super(t);const n=["ck","ck-list-properties"];this.children=this.createCollection(),this.stylesView=null,this.additionalPropertiesCollapsibleView=null,this.startIndexFieldView=null,this.reversedSwitchButtonView=null,this.focusTracker=new r.FocusTracker,this.keystrokes=new r.KeystrokeHandler,this.focusables=new J.ViewCollection,this.focusCycler=new J.FocusCycler({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),e.styles?(this.stylesView=this._createStylesView(i,s),this.children.add(this.stylesView)):n.push("ck-list-properties_without-styles"),(e.startIndex||e.reversed)&&(this._addNumberedListPropertyViews(e,i),n.push("ck-list-properties_with-numbered-properties")),this.setTemplate({tag:"div",attributes:{class:n},children:this.children})}render(){if(super.render(),this.stylesView){this.focusables.add(this.stylesView),this.focusTracker.add(this.stylesView.element),(this.startIndexFieldView||this.reversedSwitchButtonView)&&(this.focusables.add(this.children.last.buttonView),this.focusTracker.add(this.children.last.buttonView.element));for(const t of this.stylesView.children)this.stylesView.focusTracker.add(t.element);(0,J.addKeyboardHandlingForGrid)({keystrokeHandler:this.stylesView.keystrokes,focusTracker:this.stylesView.focusTracker,gridItems:this.stylesView.children,numberOfColumns:()=>r.global.window.getComputedStyle(this.stylesView.element).getPropertyValue("grid-template-columns").split(" ").length})}if(this.startIndexFieldView){this.focusables.add(this.startIndexFieldView),this.focusTracker.add(this.startIndexFieldView.element),this.listenTo(this.startIndexFieldView.element,"selectstart",((t,e)=>{e.stopPropagation()}),{priority:"high"});const t=t=>t.stopPropagation();this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t)}this.reversedSwitchButtonView&&(this.focusables.add(this.reversedSwitchButtonView),this.focusTracker.add(this.reversedSwitchButtonView.element)),this.keystrokes.listenTo(this.element)}focus(){this.focusCycler.focusFirst()}focusLast(){this.focusCycler.focusLast()}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}_createStylesView(t,e){const i=new J.View(this.locale);return i.children=i.createCollection(this.locale),i.children.addMany(t),i.setTemplate({tag:"div",attributes:{"aria-label":e,class:["ck","ck-list-styles-list"]},children:i.children}),i.children.delegate("execute").to(this),i.focus=function(){this.children.first.focus()},i.focusTracker=new r.FocusTracker,i.keystrokes=new r.KeystrokeHandler,i.render(),i.keystrokes.listenTo(i.element),i}_addNumberedListPropertyViews(t){const e=this.locale.t,i=[];t.startIndex&&(this.startIndexFieldView=this._createStartIndexField(),i.push(this.startIndexFieldView)),t.reversed&&(this.reversedSwitchButtonView=this._createReversedSwitchButton(),i.push(this.reversedSwitchButtonView)),t.styles?(this.additionalPropertiesCollapsibleView=new Ct(this.locale,i),this.additionalPropertiesCollapsibleView.set({label:e("List properties"),isCollapsed:!0}),this.additionalPropertiesCollapsibleView.buttonView.bind("isEnabled").toMany(i,"isEnabled",((...t)=>t.some((t=>t)))),this.additionalPropertiesCollapsibleView.buttonView.on("change:isEnabled",((t,e,i)=>{i||(this.additionalPropertiesCollapsibleView.isCollapsed=!0)})),this.children.add(this.additionalPropertiesCollapsibleView)):this.children.addMany(i)}_createStartIndexField(){const t=this.locale.t,e=new J.LabeledFieldView(this.locale,J.createLabeledInputNumber);return e.set({label:t("Start at"),class:"ck-numbered-list-properties__start-index"}),e.fieldView.set({min:1,step:1,value:1,inputMode:"numeric"}),e.fieldView.on("input",(()=>{const i=e.fieldView.element,s=i.valueAsNumber;Number.isNaN(s)||(i.checkValidity()?this.fire("listStart",{startIndex:s}):e.errorText=t("Start index must be greater than 0."))})),e}_createReversedSwitchButton(){const t=this.locale.t,e=new J.SwitchButtonView(this.locale);return e.set({withText:!0,label:t("Reversed order"),class:"ck-numbered-list-properties__reversed-order"}),e.delegate("execute").to(this,"listReversed"),e}}var Pt=i(657),zt={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(Pt.Z,zt);Pt.Z.locals;class Bt extends t.Plugin{static get pluginName(){return"ListPropertiesUI"}init(){const t=this.editor,e=t.locale.t,i=t.config.get("list.properties");i.styles&&t.ui.componentFactory.add("bulletedList",Nt({editor:t,parentCommandName:"bulletedList",buttonLabel:e("Bulleted List"),buttonIcon:ut,styleGridAriaLabel:e("Bulleted list styles toolbar"),styleDefinitions:[{label:e("Toggle the disc list style"),tooltip:e("Disc"),type:"disc",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M11 27a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0-9a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0-9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>'},{label:e("Toggle the circle list style"),tooltip:e("Circle"),type:"circle",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M11 27a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-10a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-10a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>'},{label:e("Toggle the square list style"),tooltip:e("Square"),type:"square",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M14 27v6H8v-6h6zm0-9v6H8v-6h6zm0-9v6H8V9h6z"/></svg>'}]})),(i.styles||i.startIndex||i.reversed)&&t.ui.componentFactory.add("numberedList",Nt({editor:t,parentCommandName:"numberedList",buttonLabel:e("Numbered List"),buttonIcon:dt,styleGridAriaLabel:e("Numbered list styles toolbar"),styleDefinitions:[{label:e("Toggle the decimal list style"),tooltip:e("Decimal"),type:"decimal",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M10.29 15V8.531H9.286c-.14.393-.4.736-.778 1.03-.378.295-.728.495-1.05.6v1.121a4.257 4.257 0 0 0 1.595-.936V15h1.235zm3.343 0v-1.235h-1.235V15h1.235zM11.3 24v-1.147H8.848c.064-.111.148-.226.252-.343.104-.117.351-.354.74-.712.39-.357.66-.631.81-.821.225-.288.39-.562.494-.824.104-.263.156-.539.156-.829 0-.51-.182-.936-.545-1.279-.363-.342-.863-.514-1.499-.514-.58 0-1.063.148-1.45.444-.387.296-.617.784-.69 1.463l1.23.124c.024-.36.112-.619.264-.774.153-.155.358-.233.616-.233.26 0 .465.074.613.222.148.148.222.36.222.635 0 .25-.085.501-.255.756-.126.185-.468.536-1.024 1.055-.692.641-1.155 1.156-1.389 1.544-.234.389-.375.8-.422 1.233H11.3zm2.333 0v-1.235h-1.235V24h1.235zM9.204 34.11c.615 0 1.129-.2 1.542-.598.413-.398.62-.88.62-1.446 0-.39-.11-.722-.332-.997a1.5 1.5 0 0 0-.886-.532c.619-.337.928-.788.928-1.353 0-.399-.151-.756-.453-1.073-.366-.386-.852-.58-1.459-.58a2.25 2.25 0 0 0-.96.2 1.617 1.617 0 0 0-.668.55c-.16.232-.28.544-.358.933l1.138.194c.032-.282.123-.495.272-.642.15-.146.33-.22.54-.22.215 0 .386.065.515.194s.193.302.193.518c0 .255-.087.46-.263.613-.176.154-.43.227-.765.218l-.136 1.006c.22-.061.409-.092.567-.092.24 0 .444.09.61.272.168.182.251.428.251.739 0 .328-.087.589-.261.782a.833.833 0 0 1-.644.29.841.841 0 0 1-.607-.242c-.167-.16-.27-.394-.307-.698l-1.196.145c.062.542.285.98.668 1.316.384.335.868.503 1.45.503zm4.43-.11v-1.235h-1.236V34h1.235z"/></svg>'},{label:e("Toggle the decimal with leading zero list style"),tooltip:e("Decimal with leading zero"),type:"decimal-leading-zero",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M5.714 15.11c.624 0 1.11-.22 1.46-.66.421-.533.632-1.408.632-2.627 0-1.222-.21-2.096-.629-2.624-.351-.445-.839-.668-1.463-.668-.624 0-1.11.22-1.459.66-.422.533-.633 1.406-.633 2.619 0 1.236.192 2.095.576 2.577.384.482.89.723 1.516.723zm0-1.024a.614.614 0 0 1-.398-.14c-.115-.094-.211-.283-.287-.565-.077-.283-.115-.802-.115-1.558s.043-1.294.128-1.613c.064-.246.155-.417.272-.512a.617.617 0 0 1 .4-.143.61.61 0 0 1 .398.143c.116.095.211.284.288.567.076.283.114.802.114 1.558s-.043 1.292-.128 1.608c-.064.246-.155.417-.272.512a.617.617 0 0 1-.4.143zm6.078.914V8.531H10.79c-.14.393-.4.736-.778 1.03-.378.295-.728.495-1.05.6v1.121a4.257 4.257 0 0 0 1.595-.936V15h1.235zm3.344 0v-1.235h-1.235V15h1.235zm-9.422 9.11c.624 0 1.11-.22 1.46-.66.421-.533.632-1.408.632-2.627 0-1.222-.21-2.096-.629-2.624-.351-.445-.839-.668-1.463-.668-.624 0-1.11.22-1.459.66-.422.533-.633 1.406-.633 2.619 0 1.236.192 2.095.576 2.577.384.482.89.723 1.516.723zm0-1.024a.614.614 0 0 1-.398-.14c-.115-.094-.211-.283-.287-.565-.077-.283-.115-.802-.115-1.558s.043-1.294.128-1.613c.064-.246.155-.417.272-.512a.617.617 0 0 1 .4-.143.61.61 0 0 1 .398.143c.116.095.211.284.288.567.076.283.114.802.114 1.558s-.043 1.292-.128 1.608c-.064.246-.155.417-.272.512a.617.617 0 0 1-.4.143zm7.088.914v-1.147H10.35c.065-.111.149-.226.253-.343.104-.117.35-.354.74-.712.39-.357.66-.631.81-.821.225-.288.39-.562.493-.824.104-.263.156-.539.156-.829 0-.51-.181-.936-.544-1.279-.364-.342-.863-.514-1.499-.514-.58 0-1.063.148-1.45.444-.387.296-.617.784-.69 1.463l1.23.124c.024-.36.112-.619.264-.774.152-.155.357-.233.615-.233.261 0 .465.074.613.222.148.148.222.36.222.635 0 .25-.085.501-.255.756-.126.185-.467.536-1.024 1.055-.691.641-1.154 1.156-1.388 1.544-.235.389-.375.8-.422 1.233h4.328zm2.334 0v-1.235h-1.235V24h1.235zM5.714 34.11c.624 0 1.11-.22 1.46-.66.421-.533.632-1.408.632-2.627 0-1.222-.21-2.096-.629-2.624-.351-.445-.839-.668-1.463-.668-.624 0-1.11.22-1.459.66-.422.533-.633 1.406-.633 2.619 0 1.236.192 2.095.576 2.577.384.482.89.723 1.516.723zm0-1.024a.614.614 0 0 1-.398-.14c-.115-.094-.211-.283-.287-.565-.077-.283-.115-.802-.115-1.558s.043-1.294.128-1.613c.064-.246.155-.417.272-.512a.617.617 0 0 1 .4-.143.61.61 0 0 1 .398.143c.116.095.211.284.288.567.076.283.114.802.114 1.558s-.043 1.292-.128 1.608c-.064.246-.155.417-.272.512a.617.617 0 0 1-.4.143zm4.992 1.024c.616 0 1.13-.2 1.543-.598.413-.398.62-.88.62-1.446 0-.39-.111-.722-.332-.997a1.5 1.5 0 0 0-.886-.532c.618-.337.927-.788.927-1.353 0-.399-.15-.756-.452-1.073-.366-.386-.853-.58-1.46-.58a2.25 2.25 0 0 0-.96.2 1.617 1.617 0 0 0-.667.55c-.16.232-.28.544-.359.933l1.139.194c.032-.282.123-.495.272-.642.15-.146.33-.22.54-.22.214 0 .386.065.515.194s.193.302.193.518c0 .255-.088.46-.264.613-.175.154-.43.227-.764.218l-.136 1.006c.22-.061.408-.092.566-.092.24 0 .444.09.611.272.167.182.25.428.25.739 0 .328-.086.589-.26.782a.833.833 0 0 1-.644.29.841.841 0 0 1-.607-.242c-.167-.16-.27-.394-.308-.698l-1.195.145c.062.542.284.98.668 1.316.384.335.867.503 1.45.503zm4.43-.11v-1.235h-1.235V34h1.235z"/></svg>'},{label:e("Toggle the lower–roman list style"),tooltip:e("Lower–roman"),type:"lower-roman",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M11.88 8.7V7.558h-1.234V8.7h1.234zm0 5.3V9.333h-1.234V14h1.234zm2.5 0v-1.235h-1.234V14h1.235zm-4.75 4.7v-1.142H8.395V18.7H9.63zm0 5.3v-4.667H8.395V24H9.63zm2.5-5.3v-1.142h-1.234V18.7h1.235zm0 5.3v-4.667h-1.234V24h1.235zm2.501 0v-1.235h-1.235V24h1.235zM7.38 28.7v-1.142H6.145V28.7H7.38zm0 5.3v-4.667H6.145V34H7.38zm2.5-5.3v-1.142H8.646V28.7H9.88zm0 5.3v-4.667H8.646V34H9.88zm2.5-5.3v-1.142h-1.234V28.7h1.235zm0 5.3v-4.667h-1.234V34h1.235zm2.501 0v-1.235h-1.235V34h1.235z"/></svg>'},{label:e("Toggle the upper–roman list style"),tooltip:e("Upper-roman"),type:"upper-roman",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M11.916 15V8.558h-1.301V15h1.3zm2.465 0v-1.235h-1.235V15h1.235zM9.665 25v-6.442h-1.3V25h1.3zm2.5 0v-6.442h-1.3V25h1.3zm2.466 0v-1.235h-1.235V25h1.235zm-7.216 9v-6.442h-1.3V34h1.3zm2.5 0v-6.442h-1.3V34h1.3zm2.501 0v-6.442h-1.3V34h1.3zm2.465 0v-1.235h-1.235V34h1.235z"/></svg>'},{label:e("Toggle the lower–latin list style"),tooltip:e("Lower-latin"),type:"lower-latin",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M9.62 14.105c.272 0 .528-.05.768-.153s.466-.257.677-.462c.009.024.023.072.044.145.047.161.086.283.119.365h1.221a2.649 2.649 0 0 1-.222-.626c-.04-.195-.059-.498-.059-.908l.013-1.441c0-.536-.055-.905-.165-1.105-.11-.201-.3-.367-.569-.497-.27-.13-.68-.195-1.23-.195-.607 0-1.064.108-1.371.325-.308.217-.525.55-.65 1.002l1.12.202c.076-.217.176-.369.299-.455.123-.086.294-.13.514-.13.325 0 .546.05.663.152.118.101.176.27.176.508v.123c-.222.093-.622.194-1.2.303-.427.082-.755.178-.982.288-.227.11-.403.268-.53.474a1.327 1.327 0 0 0-.188.706c0 .398.138.728.415.988.277.261.656.391 1.136.391zm.368-.87a.675.675 0 0 1-.492-.189.606.606 0 0 1-.193-.448c0-.176.08-.32.241-.435.106-.07.33-.142.673-.215a7.19 7.19 0 0 0 .751-.19v.247c0 .296-.016.496-.048.602a.773.773 0 0 1-.295.409 1.07 1.07 0 0 1-.637.22zm4.645.765v-1.235h-1.235V14h1.235zM10.2 25.105c.542 0 1.003-.215 1.382-.646.38-.43.57-1.044.57-1.84 0-.771-.187-1.362-.559-1.774a1.82 1.82 0 0 0-1.41-.617c-.522 0-.973.216-1.354.65v-2.32H7.594V25h1.147v-.686a1.9 1.9 0 0 0 .67.592c.26.133.523.2.79.2zm-.299-.975c-.354 0-.638-.164-.852-.492-.153-.232-.229-.59-.229-1.073 0-.468.098-.818.295-1.048a.93.93 0 0 1 .738-.345c.302 0 .55.118.743.354.193.236.29.62.29 1.154 0 .5-.096.868-.288 1.1-.192.233-.424.35-.697.35zm4.478.87v-1.235h-1.234V25h1.234zm-4.017 9.105c.6 0 1.08-.142 1.437-.426.357-.284.599-.704.725-1.261l-1.213-.207c-.061.326-.167.555-.316.688a.832.832 0 0 1-.576.2.916.916 0 0 1-.75-.343c-.185-.228-.278-.62-.278-1.173 0-.498.091-.853.274-1.066.183-.212.429-.318.736-.318.232 0 .42.061.565.184.145.123.238.306.28.55l1.216-.22c-.146-.501-.387-.874-.722-1.119-.336-.244-.788-.366-1.356-.366-.695 0-1.245.214-1.653.643-.407.43-.61 1.03-.61 1.8 0 .762.202 1.358.608 1.788.406.431.95.646 1.633.646zM14.633 34v-1.235h-1.235V34h1.235z"/></svg>'},{label:e("Toggle the upper–latin list style"),tooltip:e("Upper-latin"),type:"upper-latin",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="m7.88 15 .532-1.463h2.575L11.549 15h1.415l-2.58-6.442H9.01L6.5 15h1.38zm2.69-2.549H8.811l.87-2.39.887 2.39zM14.88 15v-1.235h-1.234V15h1.234zM9.352 25c.83-.006 1.352-.02 1.569-.044.346-.038.636-.14.872-.305.236-.166.422-.387.558-.664.137-.277.205-.562.205-.855 0-.372-.106-.695-.317-.97-.21-.276-.512-.471-.905-.585a1.51 1.51 0 0 0 .661-.567 1.5 1.5 0 0 0 .244-.83c0-.28-.066-.53-.197-.754a1.654 1.654 0 0 0-.495-.539 1.676 1.676 0 0 0-.672-.266c-.25-.042-.63-.063-1.14-.063H7.158V25h2.193zm.142-3.88H8.46v-1.49h.747c.612 0 .983.007 1.112.022.217.026.38.102.49.226.11.125.165.287.165.486a.68.68 0 0 1-.192.503.86.86 0 0 1-.525.23 11.47 11.47 0 0 1-.944.023h.18zm.17 2.795H8.46v-1.723h1.05c.592 0 .977.03 1.154.092.177.062.313.16.406.295a.84.84 0 0 1 .14.492c0 .228-.06.41-.181.547a.806.806 0 0 1-.473.257c-.126.026-.423.04-.892.04zM14.88 25v-1.235h-1.234V25h1.234zm-5.018 9.11c.691 0 1.262-.17 1.711-.512.45-.341.772-.864.965-1.567l-1.261-.4c-.109.472-.287.818-.536 1.037-.25.22-.547.33-.892.33-.47 0-.85-.173-1.143-.519-.293-.345-.44-.925-.44-1.74 0-.767.15-1.322.447-1.665.297-.343.684-.514 1.162-.514.346 0 .64.096.881.29.242.193.4.457.477.79l1.288-.307c-.147-.516-.367-.911-.66-1.187-.492-.465-1.132-.698-1.92-.698-.902 0-1.63.296-2.184.89-.554.593-.83 1.426-.83 2.498 0 1.014.275 1.813.825 2.397.551.585 1.254.877 2.11.877zM14.88 34v-1.235h-1.234V34h1.234z"/></svg>'}]}))}}function Nt({editor:t,parentCommandName:e,buttonLabel:i,buttonIcon:s,styleGridAriaLabel:n,styleDefinitions:r}){const o=t.commands.get(e);return l=>{const a=(0,J.createDropdown)(l,J.SplitButtonView),c=a.buttonView;a.bind("isEnabled").to(o),a.class="ck-list-styles-dropdown",c.on("execute",(()=>{t.execute(e),t.editing.view.focus()})),c.set({label:i,icon:s,tooltip:!0,isToggleable:!0}),c.bind("isOn").to(o,"value",(t=>!!t));const d=function({editor:t,dropdownView:e,parentCommandName:i,styleDefinitions:s,styleGridAriaLabel:n}){const r=t.locale,o=t.config.get("list.properties");let l;"numberedList"!=i&&(o.startIndex=!1,o.reversed=!1);if(o.styles){const e=t.commands.get("listStyle"),n=function({editor:t,listStyleCommand:e,parentCommandName:i}){const s=t.locale,n=t.commands.get(i);return({label:i,type:r,icon:o,tooltip:l})=>{const a=new J.ButtonView(s);return a.set({label:i,icon:o,tooltip:l}),e.on("change:value",(()=>{a.isOn=e.value===r})),a.on("execute",(()=>{n.value?e.value!==r?t.execute("listStyle",{type:r}):t.execute("listStyle",{type:e._defaultType}):t.model.change((()=>{t.execute("listStyle",{type:r})}))})),a}}({editor:t,parentCommandName:i,listStyleCommand:e}),r="function"==typeof e.isStyleTypeSupported?t=>e.isStyleTypeSupported(t.type):()=>!0;l=s.filter(r).map(n)}const a=new Et(r,{styleGridAriaLabel:n,enabledProperties:o,styleButtonViews:l});o.styles&&(0,J.focusChildOnDropdownOpen)(e,(()=>a.stylesView.children.find((t=>t.isOn))));if(o.startIndex){const e=t.commands.get("listStart");a.startIndexFieldView.bind("isEnabled").to(e),a.startIndexFieldView.fieldView.bind("value").to(e),a.on("listStart",((e,i)=>t.execute("listStart",i)))}if(o.reversed){const e=t.commands.get("listReversed");a.reversedSwitchButtonView.bind("isEnabled").to(e),a.reversedSwitchButtonView.bind("isOn").to(e,"value"),a.on("listReversed",(()=>{const i=e.value;t.execute("listReversed",{reversed:!i})}))}return a.delegate("execute").to(e),a}({editor:t,dropdownView:a,parentCommandName:e,styleGridAriaLabel:n,styleDefinitions:r});return a.panelView.children.add(d),a.on("execute",(()=>{t.editing.view.focus()})),a}}class Mt extends t.Plugin{static get requires(){return[Tt,Bt]}static get pluginName(){return"DocumentListProperties"}}class Rt extends t.Command{constructor(t,e){super(t),this.type=e}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){const e=this.editor.model,i=e.document,s=Array.from(i.selection.getSelectedBlocks()).filter((t=>Ht(t,e.schema))),n=void 0!==t.forceValue?!t.forceValue:this.value;e.change((t=>{if(n){let e=s[s.length-1].nextSibling,i=Number.POSITIVE_INFINITY,n=[];for(;e&&"listItem"==e.name&&0!==e.getAttribute("listIndent");){const t=e.getAttribute("listIndent");t<i&&(i=t);const s=t-i;n.push({element:e,listIndent:s}),e=e.nextSibling}n=n.reverse();for(const e of n)t.setAttribute("listIndent",e.listIndent,e.element)}if(!n){let t=Number.POSITIVE_INFINITY;for(const e of s)e.is("element","listItem")&&e.getAttribute("listIndent")<t&&(t=e.getAttribute("listIndent"));t=0===t?1:t,Ot(s,!0,t),Ot(s,!1,t)}for(const e of s.reverse())n&&"listItem"==e.name?t.rename(e,"paragraph"):n||"listItem"==e.name?n||"listItem"!=e.name||e.getAttribute("listType")==this.type||t.setAttribute("listType",this.type,e):(t.setAttributes({listType:this.type,listIndent:0},e),t.rename(e,"listItem"));this.fire("_executeCleanup",s)}))}_getValue(){const t=(0,r.first)(this.editor.model.document.selection.getSelectedBlocks());return!!t&&t.is("element","listItem")&&t.getAttribute("listType")==this.type}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,i=(0,r.first)(t.getSelectedBlocks());return!!i&&Ht(i,e)}}function Ot(t,e,i){const s=e?t[0]:t[t.length-1];if(s.is("element","listItem")){let n=s[e?"previousSibling":"nextSibling"],r=s.getAttribute("listIndent");for(;n&&n.is("element","listItem")&&n.getAttribute("listIndent")>=i;)r>n.getAttribute("listIndent")&&(r=n.getAttribute("listIndent")),n.getAttribute("listIndent")==r&&t[e?"unshift":"push"](n),n=n[e?"previousSibling":"nextSibling"]}}function Ht(t,e){return e.checkChild(t.parent,"listItem")&&!e.isObject(t)}class Ft extends t.Command{constructor(t,e){super(t),this._indentBy="forward"==e?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document;let i=Array.from(e.selection.getSelectedBlocks());t.change((t=>{const e=i[i.length-1];let s=e.nextSibling;for(;s&&"listItem"==s.name&&s.getAttribute("listIndent")>e.getAttribute("listIndent");)i.push(s),s=s.nextSibling;this._indentBy<0&&(i=i.reverse());for(const e of i){const i=e.getAttribute("listIndent")+this._indentBy;i<0?t.rename(e,"paragraph"):t.setAttribute("listIndent",i,e)}this.fire("_executeCleanup",i)}))}_checkEnabled(){const t=(0,r.first)(this.editor.model.document.selection.getSelectedBlocks());if(!t||!t.is("element","listItem"))return!1;if(this._indentBy>0){const e=t.getAttribute("listIndent"),i=t.getAttribute("listType");let s=t.previousSibling;for(;s&&s.is("element","listItem")&&s.getAttribute("listIndent")>=e;){if(s.getAttribute("listIndent")==e)return s.getAttribute("listType")==i;s=s.previousSibling}return!1}return!0}}function Dt(t){return(e,i,s)=>{const n=s.consumable;if(!n.test(i.item,"insert")||!n.test(i.item,"attribute:listType")||!n.test(i.item,"attribute:listIndent"))return;n.consume(i.item,"insert"),n.consume(i.item,"attribute:listType"),n.consume(i.item,"attribute:listIndent");const r=i.item;X(r,Q(r,s),s,t)}}function jt(t,e,i){if(!i.consumable.test(e.item,t.name))return;const s=i.mapper.toViewElement(e.item),n=i.writer;n.breakContainer(n.createPositionBefore(s)),n.breakContainer(n.createPositionAfter(s));const r=s.parent,o="numbered"==e.attributeNewValue?"ol":"ul";n.rename(o,r)}function Ut(t,e,i){i.consumable.consume(e.item,t.name);const s=i.mapper.toViewElement(e.item).parent,n=i.writer;tt(n,s,s.nextSibling),tt(n,s.previousSibling,s)}function qt(t,e,i){if(i.consumable.test(e.item,t.name)&&"listItem"!=e.item.name){let t=i.mapper.toViewPosition(e.range.start);const s=i.writer,n=[];for(;("ul"==t.parent.name||"ol"==t.parent.name)&&(t=s.breakContainer(t),"li"==t.parent.name);){const e=t,i=s.createPositionAt(t.parent,"end");if(!e.isEqual(i)){const t=s.remove(s.createRange(e,i));n.push(t)}t=s.createPositionAfter(t.parent)}if(n.length>0){for(let e=0;e<n.length;e++){const i=t.nodeBefore;if(t=s.insert(t,n[e]).end,e>0){const e=tt(s,i,i.nextSibling);e&&e.parent==i&&t.offset--}}tt(s,t.nodeBefore,t.nodeAfter)}}}function Kt(t,e,i){const s=i.mapper.toViewPosition(e.position),n=s.nodeBefore,r=s.nodeAfter;tt(i.writer,n,r)}function Zt(t,e,i){if(i.consumable.consume(e.viewItem,{name:!0})){const t=i.writer,s=t.createElement("listItem"),n=function(t){let e=0,i=t.parent;for(;i;){if(i.is("element","li"))e++;else{const t=i.previousSibling;t&&t.is("element","li")&&e++}i=i.parent}return e}(e.viewItem);t.setAttribute("listIndent",n,s);const r=e.viewItem.parent&&"ol"==e.viewItem.parent.name?"numbered":"bulleted";if(t.setAttribute("listType",r,s),!i.safeInsert(s,e.modelCursor))return;const o=function(t,e,i){const{writer:s,schema:n}=i;let r=s.createPositionAfter(t);for(const o of e)if("ul"==o.name||"ol"==o.name)r=i.convertItem(o,r).modelCursor;else{const e=i.convertItem(o,s.createPositionAt(t,"end")),l=e.modelRange.start.nodeAfter;l&&l.is("element")&&!n.checkChild(t,l.name)&&(t=e.modelCursor.parent.is("element","listItem")?e.modelCursor.parent:Jt(e.modelCursor),r=s.createPositionAfter(t))}return r}(s,e.viewItem.getChildren(),i);e.modelRange=t.createRange(e.modelCursor,o),i.updateConversionResult(s,e)}}function $t(t,e,i){if(i.consumable.test(e.viewItem,{name:!0})){const t=Array.from(e.viewItem.getChildren());for(const e of t){!(e.is("element","li")||Xt(e))&&e._remove()}}}function Wt(t,e,i){if(i.consumable.test(e.viewItem,{name:!0})){if(0===e.viewItem.childCount)return;const t=[...e.viewItem.getChildren()];let i=!1;for(const e of t)i&&!Xt(e)&&e._remove(),Xt(e)&&(i=!0)}}function Gt(t){return(e,i)=>{if(i.isPhantom)return;const s=i.modelPosition.nodeBefore;if(s&&s.is("element","listItem")){const e=i.mapper.toViewElement(s),n=e.getAncestors().find(Xt),r=t.createPositionAt(e,0).getWalker();for(const t of r){if("elementStart"==t.type&&t.item.is("element","li")){i.viewPosition=t.previousPosition;break}if("elementEnd"==t.type&&t.item==n){i.viewPosition=t.nextPosition;break}}}}}function Yt(t,[e,i]){let s,n=e.is("documentFragment")?e.getChild(0):e;if(s=i?this.createSelection(i):this.document.selection,n&&n.is("element","listItem")){const t=s.getFirstPosition();let e=null;if(t.parent.is("element","listItem")?e=t.parent:t.nodeBefore&&t.nodeBefore.is("element","listItem")&&(e=t.nodeBefore),e){const t=e.getAttribute("listIndent");if(t>0)for(;n&&n.is("element","listItem");)n._setAttribute("listIndent",n.getAttribute("listIndent")+t),n=n.nextSibling}}}function Jt(t){const e=new H.TreeWalker({startPosition:t});let i;do{i=e.next()}while(!i.value.item.is("element","listItem"));return i.value.item}function Qt(t,e,i,s,n,r){const o=it(e.nodeBefore,{sameIndent:!0,smallerIndent:!0,listIndent:t,foo:"b"}),l=n.mapper,a=n.writer,c=o?o.getAttribute("listIndent"):null;let d;if(o)if(c==t){const t=l.toViewElement(o).parent;d=a.createPositionAfter(t)}else{const t=r.createPositionAt(o,"end");d=l.toViewPosition(t)}else d=i;d=et(d);for(const t of[...s.getChildren()])Xt(t)&&(d=a.move(a.createRangeOn(t),d).end,tt(a,t,t.nextSibling),tt(a,t.previousSibling,t))}function Xt(t){return t.is("element","ol")||t.is("element","ul")}class te extends t.Plugin{static get pluginName(){return"ListEditing"}static get requires(){return[e.Enter,n.Delete]}init(){const t=this.editor;t.model.schema.register("listItem",{inheritAllFrom:"$block",allowAttributes:["listType","listIndent"]});const e=t.data,i=t.editing;var s;t.model.document.registerPostFixer((e=>function(t,e){const i=t.document.differ.getChanges(),s=new Map;let n=!1;for(const s of i)if("insert"==s.type&&"listItem"==s.name)r(s.position);else if("insert"==s.type&&"listItem"!=s.name){if("$text"!=s.name){const i=s.position.nodeAfter;i.hasAttribute("listIndent")&&(e.removeAttribute("listIndent",i),n=!0),i.hasAttribute("listType")&&(e.removeAttribute("listType",i),n=!0),i.hasAttribute("listStyle")&&(e.removeAttribute("listStyle",i),n=!0),i.hasAttribute("listReversed")&&(e.removeAttribute("listReversed",i),n=!0),i.hasAttribute("listStart")&&(e.removeAttribute("listStart",i),n=!0);for(const e of Array.from(t.createRangeIn(i)).filter((t=>t.item.is("element","listItem"))))r(e.previousPosition)}r(s.position.getShiftedBy(s.length))}else"remove"==s.type&&"listItem"==s.name?r(s.position):("attribute"==s.type&&"listIndent"==s.attributeKey||"attribute"==s.type&&"listType"==s.attributeKey)&&r(s.range.start);for(const t of s.values())o(t),l(t);return n;function r(t){const e=t.nodeBefore;if(e&&e.is("element","listItem")){let t=e;if(s.has(t))return;for(let e=t.previousSibling;e&&e.is("element","listItem");e=t.previousSibling)if(t=e,s.has(t))return;s.set(e,t)}else{const e=t.nodeAfter;e&&e.is("element","listItem")&&s.set(e,e)}}function o(t){let i=0,s=null;for(;t&&t.is("element","listItem");){const r=t.getAttribute("listIndent");if(r>i){let o;null===s?(s=r-i,o=i):(s>r&&(s=r),o=r-s),e.setAttribute("listIndent",o,t),n=!0}else s=null,i=t.getAttribute("listIndent")+1;t=t.nextSibling}}function l(t){let i=[],s=null;for(;t&&t.is("element","listItem");){const r=t.getAttribute("listIndent");if(s&&s.getAttribute("listIndent")>r&&(i=i.slice(0,r+1)),0!=r)if(i[r]){const s=i[r];t.getAttribute("listType")!=s&&(e.setAttribute("listType",s,t),n=!0)}else i[r]=t.getAttribute("listType");s=t,t=t.nextSibling}}}(t.model,e))),i.mapper.registerViewToModelLength("li",ee),e.mapper.registerViewToModelLength("li",ee),i.mapper.on("modelToViewPosition",Gt(i.view)),i.mapper.on("viewToModelPosition",(s=t.model,(t,e)=>{const i=e.viewPosition,n=i.parent,r=e.mapper;if("ul"==n.name||"ol"==n.name){if(i.isAtEnd){const t=r.toModelElement(i.nodeBefore),n=r.getModelLength(i.nodeBefore);e.modelPosition=s.createPositionBefore(t).getShiftedBy(n)}else{const t=r.toModelElement(i.nodeAfter);e.modelPosition=s.createPositionBefore(t)}t.stop()}else if("li"==n.name&&i.nodeBefore&&("ul"==i.nodeBefore.name||"ol"==i.nodeBefore.name)){const o=r.toModelElement(n);let l=1,a=i.nodeBefore;for(;a&&Xt(a);)l+=r.getModelLength(a),a=a.previousSibling;e.modelPosition=s.createPositionBefore(o).getShiftedBy(l),t.stop()}})),e.mapper.on("modelToViewPosition",Gt(i.view)),t.conversion.for("editingDowncast").add((e=>{e.on("insert",qt,{priority:"high"}),e.on("insert:listItem",Dt(t.model)),e.on("attribute:listType:listItem",jt,{priority:"high"}),e.on("attribute:listType:listItem",Ut,{priority:"low"}),e.on("attribute:listIndent:listItem",function(t){return(e,i,s)=>{if(!s.consumable.consume(i.item,"attribute:listIndent"))return;const n=s.mapper.toViewElement(i.item),r=s.writer;r.breakContainer(r.createPositionBefore(n)),r.breakContainer(r.createPositionAfter(n));const o=n.parent,l=o.previousSibling,a=r.createRangeOn(o);r.remove(a),l&&l.nextSibling&&tt(r,l,l.nextSibling),Qt(i.attributeOldValue+1,i.range.start,a.start,n,s,t),X(i.item,n,s,t);for(const t of i.item.getChildren())s.consumable.consume(t,"insert")}}(t.model)),e.on("remove:listItem",function(t){return(e,i,s)=>{const n=s.mapper.toViewPosition(i.position).getLastMatchingPosition((t=>!t.item.is("element","li"))).nodeAfter,r=s.writer;r.breakContainer(r.createPositionBefore(n)),r.breakContainer(r.createPositionAfter(n));const o=n.parent,l=o.previousSibling,a=r.createRangeOn(o),c=r.remove(a);l&&l.nextSibling&&tt(r,l,l.nextSibling),Qt(s.mapper.toModelElement(n).getAttribute("listIndent")+1,i.position,a.start,n,s,t);for(const t of r.createRangeIn(c).getItems())s.mapper.unbindViewElement(t);e.stop()}}(t.model)),e.on("remove",Kt,{priority:"low"})})),t.conversion.for("dataDowncast").add((e=>{e.on("insert",qt,{priority:"high"}),e.on("insert:listItem",Dt(t.model))})),t.conversion.for("upcast").add((t=>{t.on("element:ul",$t,{priority:"high"}),t.on("element:ol",$t,{priority:"high"}),t.on("element:li",Wt,{priority:"high"}),t.on("element:li",Zt)})),t.model.on("insertContent",Yt,{priority:"high"}),t.commands.add("numberedList",new Rt(t,"numbered")),t.commands.add("bulletedList",new Rt(t,"bulleted")),t.commands.add("indentList",new Ft(t,"forward")),t.commands.add("outdentList",new Ft(t,"backward"));const n=i.view.document;this.listenTo(n,"enter",((t,e)=>{const i=this.editor.model.document,s=i.selection.getLastPosition().parent;i.selection.isCollapsed&&"listItem"==s.name&&s.isEmpty&&(this.editor.execute("outdentList"),e.preventDefault(),t.stop())}),{context:"li"}),this.listenTo(n,"delete",((t,e)=>{if("backward"!==e.direction)return;const i=this.editor.model.document.selection;if(!i.isCollapsed)return;const s=i.getFirstPosition();if(!s.isAtStart)return;const n=s.parent;if("listItem"!==n.name)return;n.previousSibling&&"listItem"===n.previousSibling.name||(this.editor.execute("outdentList"),e.preventDefault(),t.stop())}),{context:"li"}),this.listenTo(t.editing.view.document,"tab",((e,i)=>{const s=i.shiftKey?"outdentList":"indentList";this.editor.commands.get(s).isEnabled&&(t.execute(s),i.stopPropagation(),i.preventDefault(),e.stop())}),{context:"li"})}afterInit(){const t=this.editor.commands,e=t.get("indent"),i=t.get("outdent");e&&e.registerChildCommand(t.get("indentList")),i&&i.registerChildCommand(t.get("outdentList"))}}function ee(t){let e=1;for(const i of t.getChildren())if("ul"==i.name||"ol"==i.name)for(const t of i.getChildren())e+=ee(t);return e}class ie extends t.Plugin{static get requires(){return[te,mt]}static get pluginName(){return"List"}}class se extends t.Command{constructor(t,e){super(t),this._defaultType=e}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){this._tryToConvertItemsToList(t);const e=this.editor.model,i=ot(e);i.length&&e.change((e=>{for(const s of i)e.setAttribute("listStyle",t.type||this._defaultType,s)}))}_getValue(){const t=this.editor.model.document.selection.getFirstPosition().parent;return t&&t.is("element","listItem")?t.getAttribute("listStyle"):null}_checkEnabled(){const t=this.editor,e=t.commands.get("numberedList"),i=t.commands.get("bulletedList");return e.isEnabled||i.isEnabled}_tryToConvertItemsToList(t){if(!t.type)return;const e=(i=t.type,lt.includes(i)?"bulleted":at.includes(i)?"numbered":null);var i;if(!e)return;const s=this.editor,n=e+"List";s.commands.get(n).value||s.execute(n)}}class ne extends t.Command{refresh(){const t=this._getValue();this.value=t,this.isEnabled=null!=t}execute(t={}){const e=this.editor.model,i=ot(e).filter((t=>"numbered"==t.getAttribute("listType")));e.change((e=>{for(const s of i)e.setAttribute("listReversed",!!t.reversed,s)}))}_getValue(){const t=this.editor.model.document.selection.getFirstPosition().parent;return t&&t.is("element","listItem")&&"numbered"==t.getAttribute("listType")?t.getAttribute("listReversed"):null}}class re extends t.Command{refresh(){const t=this._getValue();this.value=t,this.isEnabled=null!=t}execute(t={}){const e=this.editor.model,i=ot(e).filter((t=>"numbered"==t.getAttribute("listType")));e.change((e=>{for(const s of i)e.setAttribute("listStart",t.startIndex||1,s)}))}_getValue(){const t=this.editor.model.document.selection.getFirstPosition().parent;return t&&t.is("element","listItem")&&"numbered"==t.getAttribute("listType")?t.getAttribute("listStart"):null}}const oe="default";class le extends t.Plugin{static get requires(){return[te]}static get pluginName(){return"ListPropertiesEditing"}constructor(t){super(t),t.config.define("list",{properties:{styles:!0,startIndex:!1,reversed:!1}})}init(){const t=this.editor,e=t.model,i=function(t){const e=[];t.styles&&e.push({attributeName:"listStyle",defaultValue:oe,addCommand(t){t.commands.add("listStyle",new se(t,oe))},appliesToListItem:()=>!0,setAttributeOnDowncast(t,e,i){e&&e!==oe?t.setStyle("list-style-type",e,i):t.removeStyle("list-style-type",i)},getAttributeOnUpcast:t=>t.getStyle("list-style-type")||oe});t.reversed&&e.push({attributeName:"listReversed",defaultValue:!1,addCommand(t){t.commands.add("listReversed",new ne(t))},appliesToListItem:t=>"numbered"==t.getAttribute("listType"),setAttributeOnDowncast(t,e,i){e?t.setAttribute("reversed","reversed",i):t.removeAttribute("reversed",i)},getAttributeOnUpcast:t=>t.hasAttribute("reversed")});t.startIndex&&e.push({attributeName:"listStart",defaultValue:1,addCommand(t){t.commands.add("listStart",new re(t))},appliesToListItem:t=>"numbered"==t.getAttribute("listType"),setAttributeOnDowncast(t,e,i){1!=e?t.setAttribute("start",e,i):t.removeAttribute("start",i)},getAttributeOnUpcast:t=>t.getAttribute("start")||1});return e}(t.config.get("list.properties"));e.schema.extend("listItem",{allowAttributes:i.map((t=>t.attributeName))});for(const e of i)e.addCommand(t);var s;this.listenTo(t.commands.get("indentList"),"_executeCleanup",function(t,e){return(i,s)=>{const n=s[0],r=n.getAttribute("listIndent"),o=s.filter((t=>t.getAttribute("listIndent")===r));let l=null;n.previousSibling.getAttribute("listIndent")+1!==r&&(l=it(n.previousSibling,{sameIndent:!0,direction:"backward",listIndent:r})),t.model.change((t=>{for(const i of o)for(const s of e)if(s.appliesToListItem(i)){const e=null==l?s.defaultValue:l.getAttribute(s.attributeName);t.setAttribute(s.attributeName,e,i)}}))}}(t,i)),this.listenTo(t.commands.get("outdentList"),"_executeCleanup",function(t,e){return(i,s)=>{if(!(s=s.reverse().filter((t=>t.is("element","listItem")))).length)return;const n=s[0].getAttribute("listIndent"),r=s[0].getAttribute("listType");let o=s[0].previousSibling;if(o.is("element","listItem"))for(;o.getAttribute("listIndent")!==n;)o=o.previousSibling;else o=null;o||(o=s[s.length-1].nextSibling),o&&o.is("element","listItem")&&o.getAttribute("listType")===r&&t.model.change((t=>{const i=s.filter((t=>t.getAttribute("listIndent")===n));for(const s of i)for(const i of e)if(i.appliesToListItem(s)){const e=i.attributeName,n=o.getAttribute(e);t.setAttribute(e,n,s)}}))}}(t,i)),this.listenTo(t.commands.get("bulletedList"),"_executeCleanup",de(t)),this.listenTo(t.commands.get("numberedList"),"_executeCleanup",de(t)),e.document.registerPostFixer(function(t,e){return i=>{let s=!1;const n=ue(t.model.document.differ.getChanges()).filter((t=>"todo"!==t.getAttribute("listType")));if(!n.length)return s;let r=n[n.length-1].nextSibling;if((!r||!r.is("element","listItem"))&&(r=n[0].previousSibling,r)){const t=n[0].getAttribute("listIndent");for(;r.is("element","listItem")&&r.getAttribute("listIndent")!==t&&(r=r.previousSibling,r););}for(const t of e){const e=t.attributeName;for(const o of n)if(t.appliesToListItem(o))if(o.hasAttribute(e)){const n=o.previousSibling;ce(n,o,t.attributeName)&&(i.setAttribute(e,n.getAttribute(e),o),s=!0)}else ae(r,o,t)?i.setAttribute(e,r.getAttribute(e),o):i.setAttribute(e,t.defaultValue,o),s=!0;else i.removeAttribute(e,o)}return s}}(t,i)),t.conversion.for("upcast").add((s=i,t=>{t.on("element:li",((t,e,i)=>{const n=e.viewItem.parent;if(!n)return;const r=e.modelRange.start.nodeAfter||e.modelRange.end.nodeBefore;for(const t of s)if(t.appliesToListItem(r)){const e=t.getAttributeOnUpcast(n);i.writer.setAttribute(t.attributeName,e,r)}}),{priority:"low"})})),t.conversion.for("downcast").add(function(t){return i=>{for(const s of t)i.on(`attribute:${s.attributeName}:listItem`,((t,i,n)=>{const r=n.writer,o=i.item,l=it(o.previousSibling,{sameIndent:!0,listIndent:o.getAttribute("listIndent"),direction:"backward"}),a=n.mapper.toViewElement(o);e(o,l)||r.breakContainer(r.createPositionBefore(a)),s.setAttributeOnDowncast(r,i.attributeNewValue,a.parent)}),{priority:"low"})};function e(t,e){return e&&t.getAttribute("listType")===e.getAttribute("listType")&&t.getAttribute("listIndent")===e.getAttribute("listIndent")&&t.getAttribute("listStyle")===e.getAttribute("listStyle")&&t.getAttribute("listReversed")===e.getAttribute("listReversed")&&t.getAttribute("listStart")===e.getAttribute("listStart")}}(i)),this._mergeListAttributesWhileMergingLists(i)}afterInit(){const t=this.editor;t.commands.get("todoList")&&t.model.document.registerPostFixer(function(t){return e=>{const i=ue(t.model.document.differ.getChanges()).filter((t=>"todo"===t.getAttribute("listType")&&(t.hasAttribute("listStyle")||t.hasAttribute("listReversed")||t.hasAttribute("listStart"))));if(!i.length)return!1;for(const t of i)e.removeAttribute("listStyle",t),e.removeAttribute("listReversed",t),e.removeAttribute("listStart",t);return!0}}(t))}_mergeListAttributesWhileMergingLists(t){const e=this.editor.model;let i;this.listenTo(e,"deleteContent",((t,[e])=>{const s=e.getFirstPosition(),n=e.getLastPosition();if(s.parent===n.parent)return;if(!s.parent.is("element","listItem"))return;const r=n.parent.nextSibling;if(!r||!r.is("element","listItem"))return;const o=it(s.parent,{sameIndent:!0,listIndent:r.getAttribute("listIndent")});o&&o.getAttribute("listType")===r.getAttribute("listType")&&(i=o)}),{priority:"high"}),this.listenTo(e,"deleteContent",(()=>{i&&(e.change((e=>{const s=it(i.nextSibling,{sameIndent:!0,listIndent:i.getAttribute("listIndent"),direction:"forward"});if(!s)return void(i=null);const n=[s,...rt(e.createPositionAt(s,0),"forward")];for(const s of n)for(const n of t)if(n.appliesToListItem(s)){const t=n.attributeName,r=i.getAttribute(t);e.setAttribute(t,r,s)}})),i=null)}),{priority:"low"})}}function ae(t,e,i){if(!t)return!1;const s=t.getAttribute(i.attributeName);return!!s&&(s!=i.defaultValue&&t.getAttribute("listType")===e.getAttribute("listType"))}function ce(t,e,i){if(!t||!t.is("element","listItem"))return!1;if(e.getAttribute("listType")!==t.getAttribute("listType"))return!1;const s=t.getAttribute("listIndent");if(s<1||s!==e.getAttribute("listIndent"))return!1;const n=t.getAttribute(i);return!(!n||n===e.getAttribute(i))}function de(t){return(e,i)=>{i=i.filter((t=>t.is("element","listItem"))),t.model.change((t=>{for(const e of i)t.removeAttribute("listStyle",e)}))}}function ue(t){const e=[];for(const i of t){const t=me(i);t&&t.is("element","listItem")&&e.push(t)}return e}function me(t){return"attribute"===t.type?t.range.start.nodeAfter:"insert"===t.type?t.position.nodeAfter:null}class pe extends t.Plugin{static get requires(){return[le,Bt]}static get pluginName(){return"ListProperties"}}const he="todoListChecked";class fe extends t.Command{constructor(t){super(t),this._selectedElements=[],this.on("execute",(()=>{this.refresh()}),{priority:"highest"})}refresh(){this._selectedElements=this._getSelectedItems(),this.value=this._selectedElements.every((t=>!!t.getAttribute("todoListChecked"))),this.isEnabled=!!this._selectedElements.length}_getSelectedItems(){const t=this.editor.model,e=t.schema,i=t.document.selection.getFirstRange(),s=i.start.parent,n=[];e.checkAttribute(s,he)&&n.push(s);for(const t of i.getItems())e.checkAttribute(t,he)&&!n.includes(t)&&n.push(t);return n}execute(t={}){this.editor.model.change((e=>{for(const i of this._selectedElements){(void 0===t.forceValue?!this.value:t.forceValue)?e.setAttribute(he,!0,i):e.removeAttribute(he,i)}}))}}function be(t,e,i){const s=e.modelCursor,n=s.parent,r=e.viewItem;if("checkbox"!=r.getAttribute("type")||"listItem"!=n.name||!s.isAtStart)return;if(!i.consumable.consume(r,{name:!0}))return;const o=i.writer;o.setAttribute("listType","todo",n),e.viewItem.hasAttribute("checked")&&o.setAttribute("todoListChecked",!0,n),e.modelRange=o.createRange(s)}function ge(t){return(e,i)=>{const s=i.modelPosition,n=s.parent;if(!n.is("element","listItem")||"todo"!=n.getAttribute("listType"))return;const r=ye(i.mapper.toViewElement(n),t);r&&(i.viewPosition=i.mapper.findPositionIn(r,s.offset))}}function ve(t,e,i,s){return e.createUIElement("label",{class:"todo-list__label",contenteditable:!1},(function(e){const n=(0,r.createElement)(document,"input",{type:"checkbox"});i&&n.setAttribute("checked","checked"),n.addEventListener("change",(()=>s(t)));const o=this.toDomElement(e);return o.appendChild(n),o}))}function ye(t,e){const i=e.createRangeIn(t);for(const t of i)if(t.item.is("containerElement","span")&&t.item.hasClass("todo-list__label__description"))return t.item}const we=(0,r.parseKeystroke)("Ctrl+Enter");class Ae extends t.Plugin{static get pluginName(){return"TodoListEditing"}static get requires(){return[te]}init(){const t=this.editor,{editing:e,data:i,model:s}=t;s.schema.extend("listItem",{allowAttributes:["todoListChecked"]}),s.schema.addAttributeCheck(((t,e)=>{const i=t.last;if("todoListChecked"==e&&"listItem"==i.name&&"todo"!=i.getAttribute("listType"))return!1})),t.commands.add("todoList",new Rt(t,"todo"));const n=new fe(t);var o,l;t.commands.add("checkTodoList",n),t.commands.add("todoListCheck",n),i.downcastDispatcher.on("insert:listItem",function(t){return(e,i,s)=>{const n=s.consumable;if(!n.test(i.item,"insert")||!n.test(i.item,"attribute:listType")||!n.test(i.item,"attribute:listIndent"))return;if("todo"!=i.item.getAttribute("listType"))return;const r=i.item;n.consume(r,"insert"),n.consume(r,"attribute:listType"),n.consume(r,"attribute:listIndent"),n.consume(r,"attribute:todoListChecked");const o=s.writer,l=Q(r,s);o.addClass("todo-list",l.parent);const a=o.createContainerElement("label",{class:"todo-list__label"}),c=o.createEmptyElement("input",{type:"checkbox",disabled:"disabled"}),d=o.createContainerElement("span",{class:"todo-list__label__description"});r.getAttribute("todoListChecked")&&o.setAttribute("checked","checked",c),o.insert(o.createPositionAt(l,0),a),o.insert(o.createPositionAt(a,0),c),o.insert(o.createPositionAfter(c),d),X(r,l,s,t)}}(s),{priority:"high"}),i.upcastDispatcher.on("element:input",be,{priority:"high"}),e.downcastDispatcher.on("insert:listItem",function(t,e){return(i,s,n)=>{const r=n.consumable;if(!r.test(s.item,"insert")||!r.test(s.item,"attribute:listType")||!r.test(s.item,"attribute:listIndent"))return;if("todo"!=s.item.getAttribute("listType"))return;const o=s.item;r.consume(o,"insert"),r.consume(o,"attribute:listType"),r.consume(o,"attribute:listIndent"),r.consume(o,"attribute:todoListChecked");const l=n.writer,a=Q(o,n),c=!!o.getAttribute("todoListChecked"),d=ve(o,l,c,e),u=l.createContainerElement("span",{class:"todo-list__label__description"});l.addClass("todo-list",a.parent),l.insert(l.createPositionAt(a,0),d),l.insert(l.createPositionAfter(d),u),X(o,a,n,t)}}(s,(t=>this._handleCheckmarkChange(t))),{priority:"high"}),e.downcastDispatcher.on("attribute:listType:listItem",(o=t=>this._handleCheckmarkChange(t),l=e.view,(t,e,i)=>{if(!i.consumable.consume(e.item,t.name))return;const s=i.mapper.toViewElement(e.item),n=i.writer,r=function(t,e){const i=e.createRangeIn(t);for(const t of i)if(t.item.is("uiElement","label"))return t.item}(s,l);if("todo"==e.attributeNewValue){const t=!!e.item.getAttribute("todoListChecked"),i=ve(e.item,n,t,o),r=n.createContainerElement("span",{class:"todo-list__label__description"}),l=n.createRangeIn(s),a=nt(s),c=et(l.start),d=a?n.createPositionBefore(a):l.end,u=n.createRange(c,d);n.addClass("todo-list",s.parent),n.move(u,n.createPositionAt(r,0)),n.insert(n.createPositionAt(s,0),i),n.insert(n.createPositionAfter(i),r)}else if("todo"==e.attributeOldValue){const t=ye(s,l);n.removeClass("todo-list",s.parent),n.remove(r),n.move(n.createRangeIn(t),n.createPositionBefore(t)),n.remove(t)}})),e.downcastDispatcher.on("attribute:todoListChecked:listItem",function(t){return(e,i,s)=>{if("todo"!=i.item.getAttribute("listType"))return;if(!s.consumable.consume(i.item,"attribute:todoListChecked"))return;const{mapper:n,writer:r}=s,o=!!i.item.getAttribute("todoListChecked"),l=n.toViewElement(i.item).getChild(0),a=ve(i.item,r,o,t);r.insert(r.createPositionAfter(l),a),r.remove(l)}}((t=>this._handleCheckmarkChange(t)))),e.mapper.on("modelToViewPosition",ge(e.view)),i.mapper.on("modelToViewPosition",ge(e.view)),this.listenTo(e.view.document,"arrowKey",function(t,e){return(i,s)=>{if("left"!=(0,r.getLocalizedArrowKeyCodeDirection)(s.keyCode,e.contentLanguageDirection))return;const n=t.schema,o=t.document.selection;if(!o.isCollapsed)return;const l=o.getFirstPosition(),a=l.parent;if("listItem"===a.name&&"todo"==a.getAttribute("listType")&&l.isAtStart){const e=n.getNearestSelectionRange(t.createPositionBefore(a),"backward");e&&t.change((t=>t.setSelection(e))),s.preventDefault(),s.stopPropagation(),i.stop()}}}(s,t.locale),{context:"li"}),this.listenTo(e.view.document,"keydown",((e,i)=>{(0,r.getCode)(i)===we&&(t.execute("checkTodoList"),e.stop())}),{priority:"high"});const a=new Set;this.listenTo(s,"applyOperation",((t,e)=>{const i=e[0];if("rename"==i.type&&"listItem"==i.oldName){const t=i.position.nodeAfter;t.hasAttribute("todoListChecked")&&a.add(t)}else if("changeAttribute"==i.type&&"listType"==i.key&&"todo"===i.oldValue)for(const t of i.range.getItems())t.hasAttribute("todoListChecked")&&"todo"!==t.getAttribute("listType")&&a.add(t)})),s.document.registerPostFixer((t=>{let e=!1;for(const i of a)t.removeAttribute("todoListChecked",i),e=!0;return a.clear(),e}))}_handleCheckmarkChange(t){const e=this.editor,i=e.model,s=Array.from(i.document.selection.getRanges());i.change((i=>{i.setSelection(t,"end"),e.execute("checkTodoList"),i.setSelection(s)}))}}class Ie extends t.Plugin{static get pluginName(){return"TodoListUI"}init(){const t=this.editor.t;st(this.editor,"todoList",t("To-do List"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m2.315 14.705 2.224-2.24a.689.689 0 0 1 .963 0 .664.664 0 0 1 0 .949L2.865 16.07a.682.682 0 0 1-.112.089.647.647 0 0 1-.852-.051L.688 14.886a.635.635 0 0 1 0-.903.647.647 0 0 1 .91 0l.717.722zm5.185.045a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75zM2.329 5.745l2.21-2.226a.689.689 0 0 1 .963 0 .664.664 0 0 1 0 .95L2.865 7.125a.685.685 0 0 1-.496.196.644.644 0 0 1-.468-.187L.688 5.912a.635.635 0 0 1 0-.903.647.647 0 0 1 .91 0l.73.736zM7.5 5.75A.75.75 0 0 1 8.25 5h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>')}}var ke=i(250),xe={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};K()(ke.Z,xe);ke.Z.locals;class Te extends t.Plugin{static get requires(){return[Ae,Ie]}static get pluginName(){return"TodoList"}}})(),(window.CKEditor5=window.CKEditor5||{}).list=s})();;
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={945:(e,t,n)=>{e.exports=n(79)("./src/clipboard.js")},704:(e,t,n)=>{e.exports=n(79)("./src/core.js")},492:(e,t,n)=>{e.exports=n(79)("./src/engine.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{PasteFromOffice:()=>b});var e=n(704),t=n(945),s=n(492);function i(e,t){if(!e.childCount)return;const n=new s.UpcastWriter(e.document),r=function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:/^p|h\d+$/,styles:{"mso-list":/.*/}}),i=[];for(const e of n)if("elementStart"===e.type&&r.match(e.item)){const t=a(e.item);i.push({element:e.item,id:t.id,order:t.order,indent:t.indent})}return i}(e,n);if(!r.length)return;let i=null,l=1;r.forEach(((e,a)=>{const u=function(e,t){if(!e)return!0;if(e.id!==t.id)return t.indent-e.indent!=1;const n=t.element.previousSibling;if(!n)return!0;return r=n,!(r.is("element","ol")||r.is("element","ul"));var r}(r[a-1],e),f=u?null:r[a-1],d=(m=e,(p=f)?m.indent-p.indent:m.indent-1);var p,m;if(u&&(i=null,l=1),!i||0!==d){const r=function(e,t){const n=new RegExp(`@list l${e.id}:level${e.indent}\\s*({[^}]*)`,"gi"),r=/mso-level-number-format:([^;]{0,100});/gi,s=/mso-level-start-at:\s{0,100}([0-9]{0,10})\s{0,100};/gi,i=n.exec(t);let c="decimal",a="ol",l=null;if(i&&i[1]){const t=r.exec(i[1]);if(t&&t[1]&&(c=t[1].trim(),a="bullet"!==c&&"image"!==c?"ol":"ul"),"bullet"===c){const t=function(e){const t=function(e){if(e.getChild(0).is("$text"))return null;for(const t of e.getChildren()){if(!t.is("element","span"))continue;const e=t.getChild(0);return e.is("$text")?e:e.getChild(0)}}(e);if(!t)return null;const n=t._data;if("o"===n)return"circle";if("·"===n)return"disc";if("§"===n)return"square";return null}(e.element);t&&(c=t)}else{const e=s.exec(i[1]);e&&e[1]&&(l=parseInt(e[1]))}}return{type:a,startIndex:l,style:o(c)}}(e,t);if(i){if(e.indent>l){const e=i.getChild(i.childCount-1),t=e.getChild(e.childCount-1);i=c(r,t,n),l+=1}else if(e.indent<l){const t=l-e.indent;i=function(e,t){const n=e.getAncestors({parentFirst:!0});let r=null,s=0;for(const e of n)if("ul"!==e.name&&"ol"!==e.name||s++,s===t){r=e;break}return r}(i,t),l=parseInt(e.indent)}}else i=c(r,e.element,n);e.indent<=l&&(i.is("element",r.type)||(i=n.rename(r.type,i)))}const g=function(e,t){return function(e,t){const n=new s.Matcher({name:"span",styles:{"mso-list":"Ignore"}}),r=t.createRangeIn(e);for(const e of r)"elementStart"===e.type&&n.match(e.item)&&t.remove(e.item)}(e,t),t.rename("li",e)}(e.element,n);n.appendChild(g,i)}))}function o(e){if(e.startsWith("arabic-leading-zero"))return"decimal-leading-zero";switch(e){case"alpha-upper":return"upper-alpha";case"alpha-lower":return"lower-alpha";case"roman-upper":return"upper-roman";case"roman-lower":return"lower-roman";case"circle":case"disc":case"square":return e;default:return null}}function c(e,t,n){const r=t.parent,s=n.createElement(e.type),i=r.getChildIndex(t)+1;return n.insertChild(i,s,r),e.style&&n.setStyle("list-style-type",e.style,s),e.startIndex&&e.startIndex>1&&n.setAttribute("start",e.startIndex,s),s}function a(e){const t={},n=e.getStyle("mso-list");if(n){const e=n.match(/(^|\s{1,100})l(\d+)/i),r=n.match(/\s{0,100}lfo(\d+)/i),s=n.match(/\s{0,100}level(\d+)/i);e&&r&&s&&(t.id=e[2],t.order=r[1],t.indent=s[1])}return t}const l=/id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;class u{constructor(e){this.document=e}isActive(e){return l.test(e)}execute(e){const t=new s.UpcastWriter(this.document),{body:n}=e._parsedData;!function(e,t){for(const n of e.getChildren())if(n.is("element","b")&&"normal"===n.getStyle("font-weight")){const r=e.getChildIndex(n);t.remove(n),t.insertChild(r,n.getChildren(),e)}}(n,t),function(e,t){for(const n of t.createRangeIn(e)){const e=n.item;if(e.is("element","li")){const n=e.getChild(0);n&&n.is("element","p")&&t.unwrapElement(n)}}}(n,t),e.content=n}}function f(e,t){if(!e.childCount)return;const n=new s.UpcastWriter,r=function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:/v:(.+)/}),i=[];for(const e of n){if("elementStart"!=e.type)continue;const t=e.item,n=t.previousSibling&&t.previousSibling.name||null;r.match(t)&&t.getAttribute("o:gfxdata")&&"v:shapetype"!==n&&i.push(e.item.getAttribute("id"))}return i}(e,n);!function(e,t,n){const r=n.createRangeIn(t),i=new s.Matcher({name:"img"}),o=[];for(const t of r)if(i.match(t.item)){const n=t.item,r=n.getAttribute("v:shapes")?n.getAttribute("v:shapes").split(" "):[];r.length&&r.every((t=>e.indexOf(t)>-1))?o.push(n):n.getAttribute("src")||o.push(n)}for(const e of o)n.remove(e)}(r,e,n),function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:/v:(.+)/}),i=[];for(const e of n)"elementStart"==e.type&&r.match(e.item)&&i.push(e.item);for(const e of i)t.remove(e)}(e,n);const i=function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:"img"}),i=[];for(const e of n)r.match(e.item)&&e.item.getAttribute("src").startsWith("file://")&&i.push(e.item);return i}(e,n);i.length&&function(e,t,n){if(e.length===t.length)for(let r=0;r<e.length;r++){const s=`data:${t[r].type};base64,${d(t[r].hex)}`;n.setAttribute("src",s,e[r])}}(i,function(e){if(!e)return[];const t=/{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,n=new RegExp("(?:("+t.source+"))([\\da-fA-F\\s]+)\\}","g"),r=e.match(n),s=[];if(r)for(const e of r){let n=!1;e.includes("\\pngblip")?n="image/png":e.includes("\\jpegblip")&&(n="image/jpeg"),n&&s.push({hex:e.replace(t,"").replace(/[^\da-fA-F]/g,""),type:n})}return s}(t),n)}function d(e){return btoa(e.match(/\w{2}/g).map((e=>String.fromCharCode(parseInt(e,16)))).join(""))}const p=/<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,m=/xmlns:o="urn:schemas-microsoft-com/i;class g{constructor(e){this.document=e}isActive(e){return p.test(e)||m.test(e)}execute(e){const{body:t,stylesString:n}=e._parsedData;i(t,n),f(t,e.dataTransfer.getData("text/rtf")),e.content=t}}function h(e){return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,((e,t)=>1===t.length?" ":Array(t.length+1).join("  ").substr(0,t.length)))}function y(e,t){const n=new DOMParser,r=function(e){return h(h(e)).replace(/(<span\s+style=['"]mso-spacerun:yes['"]>[^\S\r\n]*?)[\r\n]+([^\S\r\n]*<\/span>)/g,"$1$2").replace(/<span\s+style=['"]mso-spacerun:yes['"]><\/span>/g,"").replace(/ <\//g," </").replace(/ <o:p><\/o:p>/g," <o:p></o:p>").replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g,"").replace(/>([^\S\r\n]*[\r\n]\s*)</g,"><")}(function(e){const t="</body>",n="</html>",r=e.indexOf(t);if(r<0)return e;const s=e.indexOf(n,r+t.length);return e.substring(0,r+t.length)+(s>=0?e.substring(s):"")}(e=e.replace(/<!--\[if gte vml 1]>/g,""))),i=n.parseFromString(r,"text/html");!function(e){e.querySelectorAll("span[style*=spacerun]").forEach((e=>{const t=e.innerText.length||0;e.innerText=Array(t+1).join("  ").substr(0,t)}))}(i);const o=i.body.innerHTML,c=function(e,t){const n=new s.ViewDocument(t),r=new s.DomConverter(n,{renderingMode:"data"}),i=e.createDocumentFragment(),o=e.body.childNodes;for(;o.length>0;)i.appendChild(o[0]);return r.domToView(i,{skipComments:!0})}(i,t),a=function(e){const t=[],n=[],r=Array.from(e.getElementsByTagName("style"));for(const e of r)e.sheet&&e.sheet.cssRules&&e.sheet.cssRules.length&&(t.push(e.sheet),n.push(e.innerHTML));return{styles:t,stylesString:n.join(" ")}}(i);return{body:c,bodyString:o,styles:a.styles,stylesString:a.stylesString}}class b extends e.Plugin{static get pluginName(){return"PasteFromOffice"}static get requires(){return[t.ClipboardPipeline]}init(){const e=this.editor,t=e.editing.view.document,n=[];n.push(new g(t)),n.push(new u(t)),e.plugins.get("ClipboardPipeline").on("inputTransformation",((r,s)=>{if(s._isTransformedWithPasteFromOffice)return;if(e.model.document.selection.getFirstPosition().parent.is("element","codeBlock"))return;const i=s.dataTransfer.getData("text/html"),o=n.find((e=>e.isActive(i)));o&&(s._parsedData=y(i,t.stylesProcessor),o.execute(s),s._isTransformedWithPasteFromOffice=!0)}),{priority:"high"})}}})(),(window.CKEditor5=window.CKEditor5||{}).pasteFromOffice=r})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.textSummary = {
    attach: function attach(context, settings) {
      once('text-summary', '.js-text-summary', context).forEach(function (summary) {
        var $widget = $(summary).closest('.js-text-format-wrapper');
        var $summary = $widget.find('.js-text-summary-wrapper');
        var $summaryLabel = $summary.find('label').eq(0);
        var $full = $widget.children('.js-form-type-textarea');
        var $fullLabel = $full.find('label').eq(0);

        if ($fullLabel.length === 0) {
          $fullLabel = $('<label></label>').prependTo($full);
        }

        if ($fullLabel.hasClass('visually-hidden')) {
          $fullLabel.html(function (index, oldHtml) {
            return "<span class=\"visually-hidden\">".concat(oldHtml, "</span>");
          });
          $fullLabel.removeClass('visually-hidden');
        }

        var $link = $("<span class=\"field-edit-link\"> (<button type=\"button\" class=\"link link-edit-summary\">".concat(Drupal.t('Hide summary'), "</button>)</span>"));
        var $button = $link.find('button');
        var toggleClick = true;
        $link.on('click', function (e) {
          if (toggleClick) {
            $summary.hide();
            $button.html(Drupal.t('Edit summary'));
            $link.appendTo($fullLabel);
          } else {
            $summary.show();
            $button.html(Drupal.t('Hide summary'));
            $link.appendTo($summaryLabel);
          }

          e.preventDefault();
          toggleClick = !toggleClick;
        }).appendTo($summaryLabel);

        if (summary.value === '') {
          $link.trigger('click');
        }
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');
      $item.toggleClass('open', switcher);
      $toggle.toggleClass('open', switcher);
      $toggle.find('.action').each(function (index, element) {
        element.textContent = switcher ? ui.handleClose : ui.handleOpen;
      });
    }

    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');
      toggleList($item);
      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }

      event.stopPropagation();
    }

    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };
      $menu.find('li > a').wrap('<div class="toolbar-box">');
      $menu.find('li').each(function (index, element) {
        var $item = $(element);

        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          var $link = $box.find('a');
          options.text = Drupal.t('@label', {
            '@label': $link.length ? $link[0].textContent : ''
          });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass("level-".concat(level));
      $lists = $lis.children('ul');

      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    function openActiveItem($menu) {
      var pathItem = $menu.find("a[href=\"".concat(window.location.pathname, "\"]"));

      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }

      if (activeItem) {
        var $activeItem = $menu.find("a[href=\"".concat(activeItem, "\"]")).addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    return this.each(function (selector) {
      var menu = once('toolbar-menu', this);

      if (menu.length) {
        var $menu = $(menu);
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);
        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);
        openActiveItem($menu);
      }
    });
  };

  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return "<button class=\"".concat(options.class, "\"><span class=\"action\">").concat(options.action, "</span> <span class=\"label\">").concat(options.text, "</span></button>");
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });
  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      once('toolbar', '#toolbar-administration', context).forEach(function (toolbar) {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });
        Drupal.toolbar.models.toolbarModel = model;
        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;
          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));
          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });
        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: toolbar,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: toolbar,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: toolbar,
          model: model
        });
        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));
        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(toolbar).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });
        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem("Drupal.toolbar.subtrees.".concat(theme), JSON.stringify(subtrees));
          model.set('areSubtreesLoaded', true);
        });
        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();
        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });
        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });

        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }

        $(window).on({
          'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');

            if (settings.drupalOffCanvasPosition === 'top') {
              var height = Drupal.offCanvas.getContainer($element).outerHeight();
              $toolbar.css('margin-top', "".concat(height, "px"));
              $element.on('dialogContentResize.off-canvas', function () {
                var newHeight = Drupal.offCanvas.getContainer($element).outerHeight();
                $toolbar.css('margin-top', "".concat(newHeight, "px"));
              });
            }
          },
          'dialog:beforeclose': function dialogBeforeclose() {
            $('#toolbar-bar').css('margin-top', '0');
          }
        });
      });
    }
  };
  Drupal.toolbar = {
    views: {},
    models: {},
    mql: {},
    setSubtrees: new $.Deferred(),
    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });

          if (!mql.matches || !model.get('orientation')) {
            model.set({
              orientation: 'vertical'
            }, {
              validate: true
            });
          }

          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, {
            validate: true
          });
          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };

  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,
      activeTray: null,
      isOriented: false,
      isFixed: false,
      areSubtreesLoaded: false,
      isViewportOverflowConstrained: false,
      orientation: 'horizontal',
      locked: false,
      isTrayToggleVisible: true,
      height: null,
      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;

      var subtrees = this.model.get('subtrees');
      Object.keys(subtrees || {}).forEach(function (id) {
        $(once('toolbar-subtrees', _this.$el.find("#toolbar-link-".concat(id)))).after(subtrees[id]);
      });

      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;

      if (!relevantTray) {
        return;
      }

      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text;

      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent,
          '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', {
          '@action': action
        });
      }

      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);
      this.$el.find('.toolbar-tray .toolbar-lining').has('.toolbar-menu').append(Drupal.theme('toolbarOrientationToggle'));
      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);
      $('body').css({
        'padding-top': this.model.get('height')
      });
      $('html').css({
        'scroll-padding-top': this.model.get('height')
      });
      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();
      $('body').removeClass('toolbar-loading');

      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }

      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.currentTarget;
        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);
        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';

      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }

      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });
      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));
      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);
      $(this.model.previous('activeTray')).removeClass('is-active');

      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');
        var id = $tab.get(0).id;

        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }

        var $tray = this.$el.find("[data-toolbar-tray=\"".concat(name, "\"].toolbar-tray"));

        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');

      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }

      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');
      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass("toolbar-tray-".concat(orientation));
      var iconClass = "toolbar-icon-toggle-".concat(orientation);
      var iconAntiClass = "toolbar-icon-toggle-".concat(antiOrientation);
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      var $orientationToggleButton = $orientationToggle.find('button');
      $orientationToggleButton[0].value = antiOrientation;
      $orientationToggleButton.attr('title', this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);
      $orientationToggleButton[0].textContent = this.strings[antiOrientation];
      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';
      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');
      $trays.filter('.toolbar-tray-vertical.is-active').attr("data-offset-".concat(edge), '');
      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');

      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');

      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url("toolbar/subtrees/".concat(subtreesHash));
        var cachedSubtreesHash = localStorage.getItem("Drupal.toolbar.subtreesHash.".concat(theme));
        var cachedSubtrees = JSON.parse(localStorage.getItem("Drupal.toolbar.subtrees.".concat(theme)));
        var isVertical = this.model.get('orientation') === 'vertical';

        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
          localStorage.removeItem("Drupal.toolbar.subtreesHash.".concat(theme));
          localStorage.removeItem("Drupal.toolbar.subtrees.".concat(theme));
          Drupal.ajax({
            url: endpoint
          }).execute();
          localStorage.setItem("Drupal.toolbar.subtreesHash.".concat(theme), subtreesHash);
        }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
/*! shepherd.js 9.1.0 */

'use strict';(function(O,pa){"object"===typeof exports&&"undefined"!==typeof module?module.exports=pa():"function"===typeof define&&define.amd?define(pa):(O="undefined"!==typeof globalThis?globalThis:O||self,O.Shepherd=pa())})(this,function(){function O(a,b){return!1!==b.clone&&b.isMergeableObject(a)?da(Array.isArray(a)?[]:{},a,b):a}function pa(a,b,c){return a.concat(b).map(function(d){return O(d,c)})}function Db(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(b){return a.propertyIsEnumerable(b)}):
[]}function Ta(a){return Object.keys(a).concat(Db(a))}function Ua(a,b){try{return b in a}catch(c){return!1}}function Eb(a,b,c){var d={};c.isMergeableObject(a)&&Ta(a).forEach(function(e){d[e]=O(a[e],c)});Ta(b).forEach(function(e){if(!Ua(a,e)||Object.hasOwnProperty.call(a,e)&&Object.propertyIsEnumerable.call(a,e))if(Ua(a,e)&&c.isMergeableObject(b[e])){if(c.customMerge){var f=c.customMerge(e);f="function"===typeof f?f:da}else f=da;d[e]=f(a[e],b[e],c)}else d[e]=O(b[e],c)});return d}function da(a,b,c){c=
c||{};c.arrayMerge=c.arrayMerge||pa;c.isMergeableObject=c.isMergeableObject||Fb;c.cloneUnlessOtherwiseSpecified=O;var d=Array.isArray(b),e=Array.isArray(a);return d!==e?O(b,c):d?c.arrayMerge(a,b,c):Eb(a,b,c)}function ea(a){return"function"===typeof a}function qa(a){return"string"===typeof a}function Va(a){let b=Object.getOwnPropertyNames(a.constructor.prototype);for(let c=0;c<b.length;c++){let d=b[c],e=a[d];"constructor"!==d&&"function"===typeof e&&(a[d]=e.bind(a))}return a}function Gb(a,b){return c=>
{if(b.isOpen()){let d=b.el&&c.currentTarget===b.el;(void 0!==a&&c.currentTarget.matches(a)||d)&&b.tour.next()}}}function Hb(a){let {event:b,selector:c}=a.options.advanceOn||{};if(b){let d=Gb(c,a),e;try{e=document.querySelector(c)}catch(f){}if(void 0===c||e)e?(e.addEventListener(b,d),a.on("destroy",()=>e.removeEventListener(b,d))):(document.body.addEventListener(b,d,!0),a.on("destroy",()=>document.body.removeEventListener(b,d,!0)));else return console.error(`No element was found for the selector supplied to advanceOn: ${c}`)}else return console.error("advanceOn was defined, but no event name was passed.")}
function M(a){return a?(a.nodeName||"").toLowerCase():null}function K(a){return null==a?window:"[object Window]"!==a.toString()?(a=a.ownerDocument)?a.defaultView||window:window:a}function fa(a){var b=K(a).Element;return a instanceof b||a instanceof Element}function F(a){var b=K(a).HTMLElement;return a instanceof b||a instanceof HTMLElement}function Ea(a){if("undefined"===typeof ShadowRoot)return!1;var b=K(a).ShadowRoot;return a instanceof b||a instanceof ShadowRoot}function N(a){return a.split("-")[0]}
function ha(a,b){void 0===b&&(b=!1);var c=a.getBoundingClientRect(),d=1,e=1;F(a)&&b&&(b=a.offsetHeight,a=a.offsetWidth,0<a&&(d=ia(c.width)/a||1),0<b&&(e=ia(c.height)/b||1));return{width:c.width/d,height:c.height/e,top:c.top/e,right:c.right/d,bottom:c.bottom/e,left:c.left/d,x:c.left/d,y:c.top/e}}function Fa(a){var b=ha(a),c=a.offsetWidth,d=a.offsetHeight;1>=Math.abs(b.width-c)&&(c=b.width);1>=Math.abs(b.height-d)&&(d=b.height);return{x:a.offsetLeft,y:a.offsetTop,width:c,height:d}}function Wa(a,b){var c=
b.getRootNode&&b.getRootNode();if(a.contains(b))return!0;if(c&&Ea(c)){do{if(b&&a.isSameNode(b))return!0;b=b.parentNode||b.host}while(b)}return!1}function P(a){return K(a).getComputedStyle(a)}function U(a){return((fa(a)?a.ownerDocument:a.document)||window.document).documentElement}function wa(a){return"html"===M(a)?a:a.assignedSlot||a.parentNode||(Ea(a)?a.host:null)||U(a)}function Xa(a){return F(a)&&"fixed"!==P(a).position?a.offsetParent:null}function ra(a){for(var b=K(a),c=Xa(a);c&&0<=["table","td",
"th"].indexOf(M(c))&&"static"===P(c).position;)c=Xa(c);if(c&&("html"===M(c)||"body"===M(c)&&"static"===P(c).position))return b;if(!c)a:{c=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1===navigator.userAgent.indexOf("Trident")||!F(a)||"fixed"!==P(a).position)for(a=wa(a),Ea(a)&&(a=a.host);F(a)&&0>["html","body"].indexOf(M(a));){var d=P(a);if("none"!==d.transform||"none"!==d.perspective||"paint"===d.contain||-1!==["transform","perspective"].indexOf(d.willChange)||c&&"filter"===d.willChange||
c&&d.filter&&"none"!==d.filter){c=a;break a}else a=a.parentNode}c=null}return c||b}function Ga(a){return 0<=["top","bottom"].indexOf(a)?"x":"y"}function Ya(a){return Object.assign({},{top:0,right:0,bottom:0,left:0},a)}function Za(a,b){return b.reduce(function(c,d){c[d]=a;return c},{})}function ja(a){return a.split("-")[1]}function $a(a){var b,c=a.popper,d=a.popperRect,e=a.placement,f=a.variation,g=a.offsets,l=a.position,m=a.gpuAcceleration,k=a.adaptive,p=a.roundOffsets,q=a.isFixed;a=g.x;a=void 0===
a?0:a;var n=g.y,r=void 0===n?0:n;n="function"===typeof p?p({x:a,y:r}):{x:a,y:r};a=n.x;r=n.y;n=g.hasOwnProperty("x");g=g.hasOwnProperty("y");var x="left",h="top",t=window;if(k){var v=ra(c),A="clientHeight",u="clientWidth";v===K(c)&&(v=U(c),"static"!==P(v).position&&"absolute"===l&&(A="scrollHeight",u="scrollWidth"));if("top"===e||("left"===e||"right"===e)&&"end"===f)h="bottom",r-=(q&&v===t&&t.visualViewport?t.visualViewport.height:v[A])-d.height,r*=m?1:-1;if("left"===e||("top"===e||"bottom"===e)&&
"end"===f)x="right",a-=(q&&v===t&&t.visualViewport?t.visualViewport.width:v[u])-d.width,a*=m?1:-1}c=Object.assign({position:l},k&&Ib);!0===p?(p=r,d=window.devicePixelRatio||1,a={x:ia(a*d)/d||0,y:ia(p*d)/d||0}):a={x:a,y:r};p=a;a=p.x;r=p.y;if(m){var w;return Object.assign({},c,(w={},w[h]=g?"0":"",w[x]=n?"0":"",w.transform=1>=(t.devicePixelRatio||1)?"translate("+a+"px, "+r+"px)":"translate3d("+a+"px, "+r+"px, 0)",w))}return Object.assign({},c,(b={},b[h]=g?r+"px":"",b[x]=n?a+"px":"",b.transform="",b))}
function xa(a){return a.replace(/left|right|bottom|top/g,function(b){return Jb[b]})}function ab(a){return a.replace(/start|end/g,function(b){return Kb[b]})}function Ha(a){a=K(a);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function Ia(a){return ha(U(a)).left+Ha(a).scrollLeft}function Ja(a){a=P(a);return/auto|scroll|overlay|hidden/.test(a.overflow+a.overflowY+a.overflowX)}function bb(a){return 0<=["html","body","#document"].indexOf(M(a))?a.ownerDocument.body:F(a)&&Ja(a)?a:bb(wa(a))}function sa(a,
b){var c;void 0===b&&(b=[]);var d=bb(a);a=d===(null==(c=a.ownerDocument)?void 0:c.body);c=K(d);d=a?[c].concat(c.visualViewport||[],Ja(d)?d:[]):d;b=b.concat(d);return a?b:b.concat(sa(wa(d)))}function Ka(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function cb(a,b){if("viewport"===b){b=K(a);var c=U(a);b=b.visualViewport;var d=c.clientWidth;c=c.clientHeight;var e=0,f=0;b&&(d=b.width,c=b.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(e=b.offsetLeft,
f=b.offsetTop));a={width:d,height:c,x:e+Ia(a),y:f};a=Ka(a)}else fa(b)?(a=ha(b),a.top+=b.clientTop,a.left+=b.clientLeft,a.bottom=a.top+b.clientHeight,a.right=a.left+b.clientWidth,a.width=b.clientWidth,a.height=b.clientHeight,a.x=a.left,a.y=a.top):(f=U(a),a=U(f),d=Ha(f),b=null==(c=f.ownerDocument)?void 0:c.body,c=L(a.scrollWidth,a.clientWidth,b?b.scrollWidth:0,b?b.clientWidth:0),e=L(a.scrollHeight,a.clientHeight,b?b.scrollHeight:0,b?b.clientHeight:0),f=-d.scrollLeft+Ia(f),d=-d.scrollTop,"rtl"===P(b||
a).direction&&(f+=L(a.clientWidth,b?b.clientWidth:0)-c),a=Ka({width:c,height:e,x:f,y:d}));return a}function Lb(a){var b=sa(wa(a)),c=0<=["absolute","fixed"].indexOf(P(a).position)&&F(a)?ra(a):a;return fa(c)?b.filter(function(d){return fa(d)&&Wa(d,c)&&"body"!==M(d)}):[]}function Mb(a,b,c){b="clippingParents"===b?Lb(a):[].concat(b);c=[].concat(b,[c]);c=c.reduce(function(d,e){e=cb(a,e);d.top=L(e.top,d.top);d.right=V(e.right,d.right);d.bottom=V(e.bottom,d.bottom);d.left=L(e.left,d.left);return d},cb(a,
c[0]));c.width=c.right-c.left;c.height=c.bottom-c.top;c.x=c.left;c.y=c.top;return c}function db(a){var b=a.reference,c=a.element,d=(a=a.placement)?N(a):null;a=a?ja(a):null;var e=b.x+b.width/2-c.width/2,f=b.y+b.height/2-c.height/2;switch(d){case "top":e={x:e,y:b.y-c.height};break;case "bottom":e={x:e,y:b.y+b.height};break;case "right":e={x:b.x+b.width,y:f};break;case "left":e={x:b.x-c.width,y:f};break;default:e={x:b.x,y:b.y}}d=d?Ga(d):null;if(null!=d)switch(f="y"===d?"height":"width",a){case "start":e[d]-=
b[f]/2-c[f]/2;break;case "end":e[d]+=b[f]/2-c[f]/2}return e}function ta(a,b){void 0===b&&(b={});var c=b;b=c.placement;b=void 0===b?a.placement:b;var d=c.boundary,e=void 0===d?"clippingParents":d;d=c.rootBoundary;var f=void 0===d?"viewport":d;d=c.elementContext;d=void 0===d?"popper":d;var g=c.altBoundary,l=void 0===g?!1:g;c=c.padding;c=void 0===c?0:c;c=Ya("number"!==typeof c?c:Za(c,ua));g=a.rects.popper;l=a.elements[l?"popper"===d?"reference":"popper":d];e=Mb(fa(l)?l:l.contextElement||U(a.elements.popper),
e,f);f=ha(a.elements.reference);l=db({reference:f,element:g,strategy:"absolute",placement:b});g=Ka(Object.assign({},g,l));f="popper"===d?g:f;var m={top:e.top-f.top+c.top,bottom:f.bottom-e.bottom+c.bottom,left:e.left-f.left+c.left,right:f.right-e.right+c.right};a=a.modifiersData.offset;if("popper"===d&&a){var k=a[b];Object.keys(m).forEach(function(p){var q=0<=["right","bottom"].indexOf(p)?1:-1,n=0<=["top","bottom"].indexOf(p)?"y":"x";m[p]+=k[n]*q})}return m}function Nb(a,b){void 0===b&&(b={});var c=
b.boundary,d=b.rootBoundary,e=b.padding,f=b.flipVariations,g=b.allowedAutoPlacements,l=void 0===g?eb:g,m=ja(b.placement);b=m?f?fb:fb.filter(function(p){return ja(p)===m}):ua;f=b.filter(function(p){return 0<=l.indexOf(p)});0===f.length&&(f=b);var k=f.reduce(function(p,q){p[q]=ta(a,{placement:q,boundary:c,rootBoundary:d,padding:e})[N(q)];return p},{});return Object.keys(k).sort(function(p,q){return k[p]-k[q]})}function Ob(a){if("auto"===N(a))return[];var b=xa(a);return[ab(a),b,ab(b)]}function gb(a,
b,c){void 0===c&&(c={x:0,y:0});return{top:a.top-b.height-c.y,right:a.right-b.width+c.x,bottom:a.bottom-b.height+c.y,left:a.left-b.width-c.x}}function hb(a){return["top","right","bottom","left"].some(function(b){return 0<=a[b]})}function Pb(a,b,c){void 0===c&&(c=!1);var d=F(b),e;if(e=F(b)){var f=b.getBoundingClientRect();e=ia(f.width)/b.offsetWidth||1;f=ia(f.height)/b.offsetHeight||1;e=1!==e||1!==f}f=e;e=U(b);a=ha(a,f);f={scrollLeft:0,scrollTop:0};var g={x:0,y:0};if(d||!d&&!c){if("body"!==M(b)||Ja(e))f=
b!==K(b)&&F(b)?{scrollLeft:b.scrollLeft,scrollTop:b.scrollTop}:Ha(b);F(b)?(g=ha(b,!0),g.x+=b.clientLeft,g.y+=b.clientTop):e&&(g.x=Ia(e))}return{x:a.left+f.scrollLeft-g.x,y:a.top+f.scrollTop-g.y,width:a.width,height:a.height}}function Qb(a){function b(f){d.add(f.name);[].concat(f.requires||[],f.requiresIfExists||[]).forEach(function(g){d.has(g)||(g=c.get(g))&&b(g)});e.push(f)}var c=new Map,d=new Set,e=[];a.forEach(function(f){c.set(f.name,f)});a.forEach(function(f){d.has(f.name)||b(f)});return e}function Rb(a){var b=
Qb(a);return Sb.reduce(function(c,d){return c.concat(b.filter(function(e){return e.phase===d}))},[])}function Tb(a){var b;return function(){b||(b=new Promise(function(c){Promise.resolve().then(function(){b=void 0;c(a())})}));return b}}function Ub(a){var b=a.reduce(function(c,d){var e=c[d.name];c[d.name]=e?Object.assign({},e,d,{options:Object.assign({},e.options,d.options),data:Object.assign({},e.data,d.data)}):d;return c},{});return Object.keys(b).map(function(c){return b[c]})}function ib(){for(var a=
arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return!b.some(function(d){return!(d&&"function"===typeof d.getBoundingClientRect)})}function La(){La=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};return La.apply(this,arguments)}function Vb(){return[{name:"applyStyles",fn(a){let {state:b}=a;Object.keys(b.elements).forEach(c=>{if("popper"===c){var d=b.attributes[c]||{},e=b.elements[c];
Object.assign(e.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"});Object.keys(d).forEach(f=>{let g=d[f];!1===g?e.removeAttribute(f):e.setAttribute(f,!0===g?"":g)})}})}},{name:"computeStyles",options:{adaptive:!1}}]}function Wb(a){let b=Vb(),c={placement:"top",strategy:"fixed",modifiers:[{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{a.el&&a.el.focus()},300)}}]};return c=La({},c,{modifiers:Array.from(new Set([...c.modifiers,...b]))})}function jb(a){return qa(a)&&
""!==a?"-"!==a.charAt(a.length-1)?`${a}-`:a:""}function Ma(a){a=a.options.attachTo||{};let b=Object.assign({},a);if(qa(a.element)){try{b.element=document.querySelector(a.element)}catch(c){}b.element||console.error(`The element for this Shepherd step was not found ${a.element}`)}return b}function Na(){let a=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,b=>{let c=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"==b?c:c&3|8).toString(16)})}function Xb(a,b){let c={modifiers:[{name:"preventOverflow",
options:{altAxis:!0,tether:!1}},{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{b.el&&b.el.focus()},300)}}],strategy:"absolute"};b.isCentered()?c=Wb(b):c.placement=a.on;(a=b.tour&&b.tour.options&&b.tour.options.defaultStepOptions)&&(c=kb(a,c));return c=kb(b.options,c)}function kb(a,b){if(a.popperOptions){let c=Object.assign({},b,a.popperOptions);if(a.popperOptions.modifiers&&0<a.popperOptions.modifiers.length){let d=a.popperOptions.modifiers.map(e=>e.name);b=b.modifiers.filter(e=>
!d.includes(e.name));c.modifiers=Array.from(new Set([...b,...a.popperOptions.modifiers]))}return c}return b}function G(){}function Yb(a,b){for(let c in b)a[c]=b[c];return a}function ka(a){return a()}function lb(a){return"function"===typeof a}function Q(a,b){return a!=a?b==b:a!==b||a&&"object"===typeof a||"function"===typeof a}function H(a){a.parentNode.removeChild(a)}function mb(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}function ya(a,b,c,d){a.addEventListener(b,c,d);return()=>
a.removeEventListener(b,c,d)}function B(a,b,c){null==c?a.removeAttribute(b):a.getAttribute(b)!==c&&a.setAttribute(b,c)}function nb(a,b){let c=Object.getOwnPropertyDescriptors(a.__proto__);for(let d in b)null==b[d]?a.removeAttribute(d):"style"===d?a.style.cssText=b[d]:"__value"===d?a.value=a[d]=b[d]:c[d]&&c[d].set?a[d]=b[d]:B(a,d,b[d])}function la(a,b,c){a.classList[c?"add":"remove"](b)}function za(){if(!R)throw Error("Function called outside component initialization");return R}function Oa(a){Aa.push(a)}
function ob(){let a=R;do{for(;Ba<va.length;){var b=va[Ba];Ba++;R=b;b=b.$$;if(null!==b.fragment){b.update();b.before_update.forEach(ka);var c=b.dirty;b.dirty=[-1];b.fragment&&b.fragment.p(b.ctx,c);b.after_update.forEach(Oa)}}R=null;for(Ba=va.length=0;ma.length;)ma.pop()();for(b=0;b<Aa.length;b+=1)c=Aa[b],Pa.has(c)||(Pa.add(c),c());Aa.length=0}while(va.length);for(;pb.length;)pb.pop()();Qa=!1;Pa.clear();R=a}function Z(){aa={r:0,c:[],p:aa}}function ba(){aa.r||aa.c.forEach(ka);aa=aa.p}function z(a,b){a&&
a.i&&(Ca.delete(a),a.i(b))}function C(a,b,c,d){a&&a.o&&!Ca.has(a)&&(Ca.add(a),aa.c.push(()=>{Ca.delete(a);d&&(c&&a.d(1),d())}),a.o(b))}function ca(a){a&&a.c()}function W(a,b,c,d){let {fragment:e,on_mount:f,on_destroy:g,after_update:l}=a.$$;e&&e.m(b,c);d||Oa(()=>{let m=f.map(ka).filter(lb);g?g.push(...m):m.forEach(ka);a.$$.on_mount=[]});l.forEach(Oa)}function X(a,b){a=a.$$;null!==a.fragment&&(a.on_destroy.forEach(ka),a.fragment&&a.fragment.d(b),a.on_destroy=a.fragment=null,a.ctx=[])}function S(a,b,
c,d,e,f,g,l){void 0===l&&(l=[-1]);let m=R;R=a;let k=a.$$={fragment:null,ctx:null,props:f,update:G,not_equal:e,bound:Object.create(null),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(b.context||(m?m.$$.context:[])),callbacks:Object.create(null),dirty:l,skip_bound:!1,root:b.target||m.$$.root};g&&g(k.root);let p=!1;k.ctx=c?c(a,b.props||{},function(q,n){let r=(2>=arguments.length?0:arguments.length-2)?2>=arguments.length?void 0:arguments[2]:n;if(k.ctx&&e(k.ctx[q],
k.ctx[q]=r)){if(!k.skip_bound&&k.bound[q])k.bound[q](r);p&&(-1===a.$$.dirty[0]&&(va.push(a),Qa||(Qa=!0,Zb.then(ob)),a.$$.dirty.fill(0)),a.$$.dirty[q/31|0]|=1<<q%31)}return n}):[];k.update();p=!0;k.before_update.forEach(ka);k.fragment=d?d(k.ctx):!1;b.target&&(b.hydrate?(c=Array.from(b.target.childNodes),k.fragment&&k.fragment.l(c),c.forEach(H)):k.fragment&&k.fragment.c(),b.intro&&z(a.$$.fragment),W(a,b.target,b.anchor,b.customElement),ob());R=m}function $b(a){let b,c,d,e,f;return{c(){b=document.createElement("button");
B(b,"aria-label",c=a[3]?a[3]:null);B(b,"class",d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`);b.disabled=a[2];B(b,"tabindex","0")},m(g,l){g.insertBefore(b,l||null);b.innerHTML=a[5];e||(f=ya(b,"click",function(){lb(a[0])&&a[0].apply(this,arguments)}),e=!0)},p(g,l){[l]=l;a=g;l&32&&(b.innerHTML=a[5]);l&8&&c!==(c=a[3]?a[3]:null)&&B(b,"aria-label",c);l&18&&d!==(d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`)&&B(b,"class",d);l&4&&(b.disabled=a[2])},i:G,o:G,
d(g){g&&H(b);e=!1;f()}}}function ac(a,b,c){function d(n){return ea(n)?n.call(f):n}let {config:e,step:f}=b,g,l,m,k,p,q;a.$$set=n=>{"config"in n&&c(6,e=n.config);"step"in n&&c(7,f=n.step)};a.$$.update=()=>{a.$$.dirty&192&&(c(0,g=e.action?e.action.bind(f.tour):null),c(1,l=e.classes),c(2,m=e.disabled?d(e.disabled):!1),c(3,k=e.label?d(e.label):null),c(4,p=e.secondary),c(5,q=e.text?d(e.text):null))};return[g,l,m,k,p,q,e,f]}function qb(a,b,c){a=a.slice();a[2]=b[c];return a}function rb(a){let b,c,d=a[1],
e=[];for(let g=0;g<d.length;g+=1)e[g]=sb(qb(a,d,g));let f=g=>C(e[g],1,1,()=>{e[g]=null});return{c(){for(let g=0;g<e.length;g+=1)e[g].c();b=document.createTextNode("")},m(g,l){for(let m=0;m<e.length;m+=1)e[m].m(g,l);g.insertBefore(b,l||null);c=!0},p(g,l){if(l&3){d=g[1];let m;for(m=0;m<d.length;m+=1){let k=qb(g,d,m);e[m]?(e[m].p(k,l),z(e[m],1)):(e[m]=sb(k),e[m].c(),z(e[m],1),e[m].m(b.parentNode,b))}Z();for(m=d.length;m<e.length;m+=1)f(m);ba()}},i(g){if(!c){for(g=0;g<d.length;g+=1)z(e[g]);c=!0}},o(g){e=
e.filter(Boolean);for(g=0;g<e.length;g+=1)C(e[g]);c=!1},d(g){var l=e;for(let m=0;m<l.length;m+=1)l[m]&&l[m].d(g);g&&H(b)}}}function sb(a){let b,c;b=new bc({props:{config:a[2],step:a[0]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&2&&(f.config=d[2]);e&1&&(f.step=d[0]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function cc(a){let b,c,d=a[1]&&rb(a);return{c(){b=document.createElement("footer");d&&d.c();B(b,"class","shepherd-footer")},
m(e,f){e.insertBefore(b,f||null);d&&d.m(b,null);c=!0},p(e,f){[f]=f;e[1]?d?(d.p(e,f),f&2&&z(d,1)):(d=rb(e),d.c(),z(d,1),d.m(b,null)):d&&(Z(),C(d,1,1,()=>{d=null}),ba())},i(e){c||(z(d),c=!0)},o(e){C(d);c=!1},d(e){e&&H(b);d&&d.d()}}}function dc(a,b,c){let d,{step:e}=b;a.$$set=f=>{"step"in f&&c(0,e=f.step)};a.$$.update=()=>{a.$$.dirty&1&&c(1,d=e.options.buttons)};return[e,d]}function ec(a){let b,c,d,e,f;return{c(){b=document.createElement("button");c=document.createElement("span");c.textContent="\u00d7";
B(c,"aria-hidden","true");B(b,"aria-label",d=a[0].label?a[0].label:"Close Tour");B(b,"class","shepherd-cancel-icon");B(b,"type","button")},m(g,l){g.insertBefore(b,l||null);b.appendChild(c);e||(f=ya(b,"click",a[1]),e=!0)},p(g,l){[l]=l;l&1&&d!==(d=g[0].label?g[0].label:"Close Tour")&&B(b,"aria-label",d)},i:G,o:G,d(g){g&&H(b);e=!1;f()}}}function fc(a,b,c){let {cancelIcon:d,step:e}=b;a.$$set=f=>{"cancelIcon"in f&&c(0,d=f.cancelIcon);"step"in f&&c(2,e=f.step)};return[d,f=>{f.preventDefault();e.cancel()},
e]}function gc(a){let b;return{c(){b=document.createElement("h3");B(b,"id",a[1]);B(b,"class","shepherd-title")},m(c,d){c.insertBefore(b,d||null);a[3](b)},p(c,d){[d]=d;d&2&&B(b,"id",c[1])},i:G,o:G,d(c){c&&H(b);a[3](null)}}}function hc(a,b,c){let {labelId:d,element:e,title:f}=b;za().$$.after_update.push(()=>{ea(f)&&c(2,f=f());c(0,e.innerHTML=f,e)});a.$$set=g=>{"labelId"in g&&c(1,d=g.labelId);"element"in g&&c(0,e=g.element);"title"in g&&c(2,f=g.title)};return[e,d,f,function(g){ma[g?"unshift":"push"](()=>
{e=g;c(0,e)})}]}function tb(a){let b,c;b=new ic({props:{labelId:a[0],title:a[2]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&1&&(f.labelId=d[0]);e&4&&(f.title=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function ub(a){let b,c;b=new jc({props:{cancelIcon:a[3],step:a[1]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&8&&(f.cancelIcon=d[3]);e&2&&(f.step=d[1]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),
c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function kc(a){let b,c,d,e=a[2]&&tb(a),f=a[3]&&a[3].enabled&&ub(a);return{c(){b=document.createElement("header");e&&e.c();c=document.createTextNode(" ");f&&f.c();B(b,"class","shepherd-header")},m(g,l){g.insertBefore(b,l||null);e&&e.m(b,null);b.appendChild(c);f&&f.m(b,null);d=!0},p(g,l){[l]=l;g[2]?e?(e.p(g,l),l&4&&z(e,1)):(e=tb(g),e.c(),z(e,1),e.m(b,c)):e&&(Z(),C(e,1,1,()=>{e=null}),ba());g[3]&&g[3].enabled?f?(f.p(g,l),l&8&&z(f,1)):(f=ub(g),f.c(),
z(f,1),f.m(b,null)):f&&(Z(),C(f,1,1,()=>{f=null}),ba())},i(g){d||(z(e),z(f),d=!0)},o(g){C(e);C(f);d=!1},d(g){g&&H(b);e&&e.d();f&&f.d()}}}function lc(a,b,c){let {labelId:d,step:e}=b,f,g;a.$$set=l=>{"labelId"in l&&c(0,d=l.labelId);"step"in l&&c(1,e=l.step)};a.$$.update=()=>{a.$$.dirty&2&&(c(2,f=e.options.title),c(3,g=e.options.cancelIcon))};return[d,e,f,g]}function mc(a){let b;return{c(){b=document.createElement("div");B(b,"class","shepherd-text");B(b,"id",a[1])},m(c,d){c.insertBefore(b,d||null);a[3](b)},
p(c,d){[d]=d;d&2&&B(b,"id",c[1])},i:G,o:G,d(c){c&&H(b);a[3](null)}}}function nc(a,b,c){let {descriptionId:d,element:e,step:f}=b;za().$$.after_update.push(()=>{let {text:g}=f.options;ea(g)&&(g=g.call(f));g instanceof HTMLElement?e.appendChild(g):c(0,e.innerHTML=g,e)});a.$$set=g=>{"descriptionId"in g&&c(1,d=g.descriptionId);"element"in g&&c(0,e=g.element);"step"in g&&c(2,f=g.step)};return[e,d,f,function(g){ma[g?"unshift":"push"](()=>{e=g;c(0,e)})}]}function vb(a){let b,c;b=new oc({props:{labelId:a[1],
step:a[2]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&2&&(f.labelId=d[1]);e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function wb(a){let b,c;b=new pc({props:{descriptionId:a[0],step:a[2]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&1&&(f.descriptionId=d[0]);e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function xb(a){let b,
c;b=new qc({props:{step:a[2]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function rc(a){let b,c=void 0!==a[2].options.title||a[2].options.cancelIcon&&a[2].options.cancelIcon.enabled,d,e=void 0!==a[2].options.text,f,g=Array.isArray(a[2].options.buttons)&&a[2].options.buttons.length,l,m=c&&vb(a),k=e&&wb(a),p=g&&xb(a);return{c(){b=document.createElement("div");m&&m.c();
d=document.createTextNode(" ");k&&k.c();f=document.createTextNode(" ");p&&p.c();B(b,"class","shepherd-content")},m(q,n){q.insertBefore(b,n||null);m&&m.m(b,null);b.appendChild(d);k&&k.m(b,null);b.appendChild(f);p&&p.m(b,null);l=!0},p(q,n){[n]=n;n&4&&(c=void 0!==q[2].options.title||q[2].options.cancelIcon&&q[2].options.cancelIcon.enabled);c?m?(m.p(q,n),n&4&&z(m,1)):(m=vb(q),m.c(),z(m,1),m.m(b,d)):m&&(Z(),C(m,1,1,()=>{m=null}),ba());n&4&&(e=void 0!==q[2].options.text);e?k?(k.p(q,n),n&4&&z(k,1)):(k=wb(q),
k.c(),z(k,1),k.m(b,f)):k&&(Z(),C(k,1,1,()=>{k=null}),ba());n&4&&(g=Array.isArray(q[2].options.buttons)&&q[2].options.buttons.length);g?p?(p.p(q,n),n&4&&z(p,1)):(p=xb(q),p.c(),z(p,1),p.m(b,null)):p&&(Z(),C(p,1,1,()=>{p=null}),ba())},i(q){l||(z(m),z(k),z(p),l=!0)},o(q){C(m);C(k);C(p);l=!1},d(q){q&&H(b);m&&m.d();k&&k.d();p&&p.d()}}}function sc(a,b,c){let {descriptionId:d,labelId:e,step:f}=b;a.$$set=g=>{"descriptionId"in g&&c(0,d=g.descriptionId);"labelId"in g&&c(1,e=g.labelId);"step"in g&&c(2,f=g.step)};
return[d,e,f]}function yb(a){let b;return{c(){b=document.createElement("div");B(b,"class","shepherd-arrow");B(b,"data-popper-arrow","")},m(c,d){c.insertBefore(b,d||null)},d(c){c&&H(b)}}}function tc(a){let b,c,d,e,f,g,l,m,k=a[4].options.arrow&&a[4].options.attachTo&&a[4].options.attachTo.element&&a[4].options.attachTo.on&&yb();d=new uc({props:{descriptionId:a[2],labelId:a[3],step:a[4]}});let p=[{"aria-describedby":e=void 0!==a[4].options.text?a[2]:null},{"aria-labelledby":f=a[4].options.title?a[3]:
null},a[1],{role:"dialog"},{tabindex:"0"}],q={};for(let n=0;n<p.length;n+=1)q=Yb(q,p[n]);return{c(){b=document.createElement("div");k&&k.c();c=document.createTextNode(" ");ca(d.$$.fragment);nb(b,q);la(b,"shepherd-has-cancel-icon",a[5]);la(b,"shepherd-has-title",a[6]);la(b,"shepherd-element",!0)},m(n,r){n.insertBefore(b,r||null);k&&k.m(b,null);b.appendChild(c);W(d,b,null);a[13](b);g=!0;l||(m=ya(b,"keydown",a[7]),l=!0)},p(n,r){var [x]=r;n[4].options.arrow&&n[4].options.attachTo&&n[4].options.attachTo.element&&
n[4].options.attachTo.on?k||(k=yb(),k.c(),k.m(b,c)):k&&(k.d(1),k=null);r={};x&4&&(r.descriptionId=n[2]);x&8&&(r.labelId=n[3]);x&16&&(r.step=n[4]);d.$set(r);r=b;x=[(!g||x&20&&e!==(e=void 0!==n[4].options.text?n[2]:null))&&{"aria-describedby":e},(!g||x&24&&f!==(f=n[4].options.title?n[3]:null))&&{"aria-labelledby":f},x&2&&n[1],{role:"dialog"},{tabindex:"0"}];let h={},t={},v={$$scope:1},A=p.length;for(;A--;){let u=p[A],w=x[A];if(w){for(let y in u)y in w||(t[y]=1);for(let y in w)v[y]||(h[y]=w[y],v[y]=
1);p[A]=w}else for(let y in u)v[y]=1}for(let u in t)u in h||(h[u]=void 0);nb(r,q=h);la(b,"shepherd-has-cancel-icon",n[5]);la(b,"shepherd-has-title",n[6]);la(b,"shepherd-element",!0)},i(n){g||(z(d.$$.fragment,n),g=!0)},o(n){C(d.$$.fragment,n);g=!1},d(n){n&&H(b);k&&k.d();X(d);a[13](null);l=!1;m()}}}function zb(a){return a.split(" ").filter(b=>!!b.length)}function vc(a,b,c){let {classPrefix:d,element:e,descriptionId:f,firstFocusableElement:g,focusableElements:l,labelId:m,lastFocusableElement:k,step:p,
dataStepId:q}=b,n,r,x;za().$$.on_mount.push(()=>{c(1,q={[`data-${d}shepherd-step-id`]:p.id});c(9,l=e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'));c(8,g=l[0]);c(10,k=l[l.length-1])});za().$$.after_update.push(()=>{if(x!==p.options.classes){var h=x;qa(h)&&(h=zb(h),h.length&&e.classList.remove(...h));h=x=p.options.classes;qa(h)&&(h=zb(h),h.length&&e.classList.add(...h))}});a.$$set=h=>{"classPrefix"in
h&&c(11,d=h.classPrefix);"element"in h&&c(0,e=h.element);"descriptionId"in h&&c(2,f=h.descriptionId);"firstFocusableElement"in h&&c(8,g=h.firstFocusableElement);"focusableElements"in h&&c(9,l=h.focusableElements);"labelId"in h&&c(3,m=h.labelId);"lastFocusableElement"in h&&c(10,k=h.lastFocusableElement);"step"in h&&c(4,p=h.step);"dataStepId"in h&&c(1,q=h.dataStepId)};a.$$.update=()=>{a.$$.dirty&16&&(c(5,n=p.options&&p.options.cancelIcon&&p.options.cancelIcon.enabled),c(6,r=p.options&&p.options.title))};
return[e,q,f,m,p,n,r,h=>{const {tour:t}=p;switch(h.keyCode){case 9:if(0===l.length){h.preventDefault();break}if(h.shiftKey){if(document.activeElement===g||document.activeElement.classList.contains("shepherd-element"))h.preventDefault(),k.focus()}else document.activeElement===k&&(h.preventDefault(),g.focus());break;case 27:t.options.exitOnEsc&&p.cancel();break;case 37:t.options.keyboardNavigation&&t.back();break;case 39:t.options.keyboardNavigation&&t.next()}},g,l,k,d,()=>e,function(h){ma[h?"unshift":
"push"](()=>{e=h;c(0,e)})}]}function wc(a){a&&({steps:a}=a,a.forEach(b=>{b.options&&!1===b.options.canClickTarget&&b.options.attachTo&&b.target instanceof HTMLElement&&b.target.classList.remove("shepherd-target-click-disabled")}))}function xc(a){let b,c,d,e,f;return{c(){b=mb("svg");c=mb("path");B(c,"d",a[2]);B(b,"class",d=`${a[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)},m(g,l){g.insertBefore(b,l||null);b.appendChild(c);a[11](b);e||(f=ya(b,"touchmove",a[3]),e=!0)},p(g,l){[l]=
l;l&4&&B(c,"d",g[2]);l&2&&d!==(d=`${g[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)&&B(b,"class",d)},i:G,o:G,d(g){g&&H(b);a[11](null);e=!1;f()}}}function Ab(a){if(!a)return null;let b=a instanceof HTMLElement&&window.getComputedStyle(a).overflowY;return"hidden"!==b&&"visible"!==b&&a.scrollHeight>=a.clientHeight?a:Ab(a.parentElement)}function yc(a,b,c){function d(){c(4,p={width:0,height:0,x:0,y:0,r:0})}function e(){c(1,q=!1);l()}function f(h,t,v,A){void 0===h&&(h=0);void 0===
t&&(t=0);if(A){var u=A.getBoundingClientRect();let y=u.y||u.top;u=u.bottom||y+u.height;if(v){var w=v.getBoundingClientRect();v=w.y||w.top;w=w.bottom||v+w.height;y=Math.max(y,v);u=Math.min(u,w)}let {y:Y,height:E}={y,height:Math.max(u-y,0)},{x:I,width:D,left:na}=A.getBoundingClientRect();c(4,p={width:D+2*h,height:E+2*h,x:(I||na)-h,y:Y-h,r:t})}else d()}function g(){c(1,q=!0)}function l(){n&&(cancelAnimationFrame(n),n=void 0);window.removeEventListener("touchmove",x,{passive:!1})}function m(h){let {modalOverlayOpeningPadding:t,
modalOverlayOpeningRadius:v}=h.options,A=Ab(h.target),u=()=>{n=void 0;f(t,v,A,h.target);n=requestAnimationFrame(u)};u();window.addEventListener("touchmove",x,{passive:!1})}let {element:k,openingProperties:p}=b;Na();let q=!1,n=void 0,r;d();let x=h=>{h.preventDefault()};a.$$set=h=>{"element"in h&&c(0,k=h.element);"openingProperties"in h&&c(4,p=h.openingProperties)};a.$$.update=()=>{if(a.$$.dirty&16){let {width:h,height:t,x:v=0,y:A=0,r:u=0}=p,{innerWidth:w,innerHeight:y}=window;c(2,r=`M${w},${y}\
H0\
V0\
H${w}\
V${y}\
Z\
M${v+u},${A}\
a${u},${u},0,0,0-${u},${u}\
V${t+A-u}\
a${u},${u},0,0,0,${u},${u}\
H${h+v-u}\
a${u},${u},0,0,0,${u}-${u}\
V${A+u}\
a${u},${u},0,0,0-${u}-${u}\
Z`)}};return[k,q,r,h=>{h.stopPropagation()},p,()=>k,d,e,f,function(h){l();h.tour.options.useModalOverlay?(m(h),g()):e()},g,function(h){ma[h?"unshift":"push"](()=>{k=h;c(0,k)})}]}var Fb=function(a){var b;if(b=!!a&&"object"===typeof a)b=Object.prototype.toString.call(a),b=!("[object RegExp]"===b||"[object Date]"===b||a.$$typeof===zc);return b},zc="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;da.all=function(a,b){if(!Array.isArray(a))throw Error("first argument should be an array");
return a.reduce(function(c,d){return da(c,d,b)},{})};var Ac=da;class Ra{on(a,b,c,d){void 0===d&&(d=!1);void 0===this.bindings&&(this.bindings={});void 0===this.bindings[a]&&(this.bindings[a]=[]);this.bindings[a].push({handler:b,ctx:c,once:d});return this}once(a,b,c){return this.on(a,b,c,!0)}off(a,b){if(void 0===this.bindings||void 0===this.bindings[a])return this;void 0===b?delete this.bindings[a]:this.bindings[a].forEach((c,d)=>{c.handler===b&&this.bindings[a].splice(d,1)});return this}trigger(a){for(var b=
arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];void 0!==this.bindings&&this.bindings[a]&&this.bindings[a].forEach((e,f)=>{let {ctx:g,handler:l,once:m}=e;l.apply(g||this,c);m&&this.bindings[a].splice(f,1)});return this}}var ua=["top","bottom","right","left"],fb=ua.reduce(function(a,b){return a.concat([b+"-start",b+"-end"])},[]),eb=[].concat(ua,["auto"]).reduce(function(a,b){return a.concat([b,b+"-start",b+"-end"])},[]),Sb="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
L=Math.max,V=Math.min,ia=Math.round,Ib={top:"auto",right:"auto",bottom:"auto",left:"auto"},Da={passive:!0},Jb={left:"right",right:"left",bottom:"top",top:"bottom"},Kb={start:"end",end:"start"},Bb={placement:"bottom",modifiers:[],strategy:"absolute"},Bc=function(a){void 0===a&&(a={});var b=a.defaultModifiers,c=void 0===b?[]:b;a=a.defaultOptions;var d=void 0===a?Bb:a;return function(e,f,g){function l(){k.orderedModifiers.forEach(function(r){var x=r.name,h=r.options;h=void 0===h?{}:h;r=r.effect;"function"===
typeof r&&(x=r({state:k,name:x,instance:n,options:h}),p.push(x||function(){}))})}function m(){p.forEach(function(r){return r()});p=[]}void 0===g&&(g=d);var k={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bb,d),modifiersData:{},elements:{reference:e,popper:f},attributes:{},styles:{}},p=[],q=!1,n={state:k,setOptions:function(r){r="function"===typeof r?r(k.options):r;m();k.options=Object.assign({},d,k.options,r);k.scrollParents={reference:fa(e)?sa(e):e.contextElement?sa(e.contextElement):
[],popper:sa(f)};r=Rb(Ub([].concat(c,k.options.modifiers)));k.orderedModifiers=r.filter(function(x){return x.enabled});l();return n.update()},forceUpdate:function(){if(!q){var r=k.elements,x=r.reference;r=r.popper;if(ib(x,r))for(k.rects={reference:Pb(x,ra(r),"fixed"===k.options.strategy),popper:Fa(r)},k.reset=!1,k.placement=k.options.placement,k.orderedModifiers.forEach(function(v){return k.modifiersData[v.name]=Object.assign({},v.data)}),x=0;x<k.orderedModifiers.length;x++)if(!0===k.reset)k.reset=
!1,x=-1;else{var h=k.orderedModifiers[x];r=h.fn;var t=h.options;t=void 0===t?{}:t;h=h.name;"function"===typeof r&&(k=r({state:k,options:t,name:h,instance:n})||k)}}},update:Tb(function(){return new Promise(function(r){n.forceUpdate();r(k)})}),destroy:function(){m();q=!0}};if(!ib(e,f))return n;n.setOptions(g).then(function(r){if(!q&&g.onFirstUpdate)g.onFirstUpdate(r)});return n}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(a){var b=a.state,c=a.instance;
a=a.options;var d=a.scroll,e=void 0===d?!0:d;a=a.resize;var f=void 0===a?!0:a,g=K(b.elements.popper),l=[].concat(b.scrollParents.reference,b.scrollParents.popper);e&&l.forEach(function(m){m.addEventListener("scroll",c.update,Da)});f&&g.addEventListener("resize",c.update,Da);return function(){e&&l.forEach(function(m){m.removeEventListener("scroll",c.update,Da)});f&&g.removeEventListener("resize",c.update,Da)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(a){var b=a.state;b.modifiersData[a.name]=
db({reference:b.rects.reference,element:b.rects.popper,strategy:"absolute",placement:b.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(a){var b=a.state,c=a.options;a=c.gpuAcceleration;a=void 0===a?!0:a;var d=c.adaptive;d=void 0===d?!0:d;c=c.roundOffsets;c=void 0===c?!0:c;a={placement:N(b.placement),variation:ja(b.placement),popper:b.elements.popper,popperRect:b.rects.popper,gpuAcceleration:a,isFixed:"fixed"===b.options.strategy};null!=b.modifiersData.popperOffsets&&
(b.styles.popper=Object.assign({},b.styles.popper,$a(Object.assign({},a,{offsets:b.modifiersData.popperOffsets,position:b.options.strategy,adaptive:d,roundOffsets:c}))));null!=b.modifiersData.arrow&&(b.styles.arrow=Object.assign({},b.styles.arrow,$a(Object.assign({},a,{offsets:b.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c}))));b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-placement":b.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",
fn:function(a){var b=a.state;Object.keys(b.elements).forEach(function(c){var d=b.styles[c]||{},e=b.attributes[c]||{},f=b.elements[c];F(f)&&M(f)&&(Object.assign(f.style,d),Object.keys(e).forEach(function(g){var l=e[g];!1===l?f.removeAttribute(g):f.setAttribute(g,!0===l?"":l)}))})},effect:function(a){var b=a.state,c={popper:{position:b.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(b.elements.popper.style,c.popper);b.styles=c;b.elements.arrow&&
Object.assign(b.elements.arrow.style,c.arrow);return function(){Object.keys(b.elements).forEach(function(d){var e=b.elements[d],f=b.attributes[d]||{};d=Object.keys(b.styles.hasOwnProperty(d)?b.styles[d]:c[d]).reduce(function(g,l){g[l]="";return g},{});F(e)&&M(e)&&(Object.assign(e.style,d),Object.keys(f).forEach(function(g){e.removeAttribute(g)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(a){var b=a.state,c=a.name;a=a.options.offset;
var d=void 0===a?[0,0]:a;a=eb.reduce(function(g,l){var m=b.rects;var k=N(l);var p=0<=["left","top"].indexOf(k)?-1:1,q="function"===typeof d?d(Object.assign({},m,{placement:l})):d;m=q[0];q=q[1];m=m||0;q=(q||0)*p;k=0<=["left","right"].indexOf(k)?{x:q,y:m}:{x:m,y:q};g[l]=k;return g},{});var e=a[b.placement],f=e.x;e=e.y;null!=b.modifiersData.popperOffsets&&(b.modifiersData.popperOffsets.x+=f,b.modifiersData.popperOffsets.y+=e);b.modifiersData[c]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(a){var b=
a.state,c=a.options;a=a.name;if(!b.modifiersData[a]._skip){var d=c.mainAxis;d=void 0===d?!0:d;var e=c.altAxis;e=void 0===e?!0:e;var f=c.fallbackPlacements,g=c.padding,l=c.boundary,m=c.rootBoundary,k=c.altBoundary,p=c.flipVariations,q=void 0===p?!0:p,n=c.allowedAutoPlacements;c=b.options.placement;p=N(c);f=f||(p!==c&&q?Ob(c):[xa(c)]);var r=[c].concat(f).reduce(function(E,I){return E.concat("auto"===N(I)?Nb(b,{placement:I,boundary:l,rootBoundary:m,padding:g,flipVariations:q,allowedAutoPlacements:n}):
I)},[]);c=b.rects.reference;f=b.rects.popper;var x=new Map;p=!0;for(var h=r[0],t=0;t<r.length;t++){var v=r[t],A=N(v),u="start"===ja(v),w=0<=["top","bottom"].indexOf(A),y=w?"width":"height",Y=ta(b,{placement:v,boundary:l,rootBoundary:m,altBoundary:k,padding:g});u=w?u?"right":"left":u?"bottom":"top";c[y]>f[y]&&(u=xa(u));y=xa(u);w=[];d&&w.push(0>=Y[A]);e&&w.push(0>=Y[u],0>=Y[y]);if(w.every(function(E){return E})){h=v;p=!1;break}x.set(v,w)}if(p)for(d=function(E){var I=r.find(function(D){if(D=x.get(D))return D.slice(0,
E).every(function(na){return na})});if(I)return h=I,"break"},e=q?3:1;0<e&&"break"!==d(e);e--);b.placement!==h&&(b.modifiersData[a]._skip=!0,b.placement=h,b.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(a){var b=a.state,c=a.options;a=a.name;var d=c.mainAxis,e=void 0===d?!0:d;d=c.altAxis;var f=void 0===d?!1:d;d=c.tether;var g=void 0===d?!0:d;d=c.tetherOffset;var l=void 0===d?0:d,m=ta(b,{boundary:c.boundary,rootBoundary:c.rootBoundary,
padding:c.padding,altBoundary:c.altBoundary}),k=N(b.placement),p=ja(b.placement),q=!p,n=Ga(k);c="x"===n?"y":"x";d=b.modifiersData.popperOffsets;var r=b.rects.reference,x=b.rects.popper;l="function"===typeof l?l(Object.assign({},b.rects,{placement:b.placement})):l;var h="number"===typeof l?{mainAxis:l,altAxis:l}:Object.assign({mainAxis:0,altAxis:0},l),t=b.modifiersData.offset?b.modifiersData.offset[b.placement]:null;l={x:0,y:0};if(d){if(e){var v,A="y"===n?"top":"left",u="y"===n?"bottom":"right",w=
"y"===n?"height":"width";e=d[n];var y=e+m[A],Y=e-m[u],E=g?-x[w]/2:0,I="start"===p?r[w]:x[w];p="start"===p?-x[w]:-r[w];var D=b.elements.arrow;D=g&&D?Fa(D):{width:0,height:0};var na=b.modifiersData["arrow#persistent"]?b.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};A=na[A];u=na[u];D=L(0,V(r[w],D[w]));I=q?r[w]/2-E-D-A-h.mainAxis:I-D-A-h.mainAxis;q=q?-r[w]/2+E+D+u+h.mainAxis:p+D+u+h.mainAxis;w=(w=b.elements.arrow&&ra(b.elements.arrow))?"y"===n?w.clientTop||0:w.clientLeft||
0:0;E=null!=(v=null==t?void 0:t[n])?v:0;v=e+q-E;y=g?V(y,e+I-E-w):y;v=g?L(Y,v):Y;v=L(y,V(e,v));d[n]=v;l[n]=v-e}if(f){var J;f=d[c];e="y"===c?"height":"width";v=f+m["x"===n?"top":"left"];m=f-m["x"===n?"bottom":"right"];k=-1!==["top","left"].indexOf(k);n=null!=(J=null==t?void 0:t[c])?J:0;J=k?v:f-r[e]-x[e]-n+h.altAxis;r=k?f+r[e]+x[e]-n-h.altAxis:m;g&&k?(J=L(J,V(f,r)),J=J>r?r:J):J=L(g?J:v,V(f,g?r:m));d[c]=J;l[c]=J-f}b.modifiersData[a]=l}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",
fn:function(a){var b,c=a.state,d=a.name,e=a.options,f=c.elements.arrow,g=c.modifiersData.popperOffsets,l=N(c.placement);a=Ga(l);l=0<=["left","right"].indexOf(l)?"height":"width";if(f&&g){e=e.padding;e="function"===typeof e?e(Object.assign({},c.rects,{placement:c.placement})):e;e=Ya("number"!==typeof e?e:Za(e,ua));var m=Fa(f),k="y"===a?"top":"left",p="y"===a?"bottom":"right",q=c.rects.reference[l]+c.rects.reference[a]-g[a]-c.rects.popper[l];g=g[a]-c.rects.reference[a];f=(f=ra(f))?"y"===a?f.clientHeight||
0:f.clientWidth||0:0;g=f/2-m[l]/2+(q/2-g/2);l=L(e[k],V(g,f-m[l]-e[p]));c.modifiersData[d]=(b={},b[a]=l,b.centerOffset=l-g,b)}},effect:function(a){var b=a.state;a=a.options.element;a=void 0===a?"[data-popper-arrow]":a;if(null!=a){if("string"===typeof a&&(a=b.elements.popper.querySelector(a),!a))return;Wa(b.elements.popper,a)&&(b.elements.arrow=a)}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(a){var b=
a.state;a=a.name;var c=b.rects.reference,d=b.rects.popper,e=b.modifiersData.preventOverflow,f=ta(b,{elementContext:"reference"}),g=ta(b,{altBoundary:!0});c=gb(f,c);d=gb(g,d,e);e=hb(c);g=hb(d);b.modifiersData[a]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:e,hasPopperEscaped:g};b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-reference-hidden":e,"data-popper-escaped":g})}}]});let R,va=[],ma=[],Aa=[],pb=[],Zb=Promise.resolve(),Qa=!1,Pa=new Set,Ba=0,Ca=new Set,
aa;class T{$destroy(){X(this,1);this.$destroy=G}$on(a,b){let c=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);c.push(b);return()=>{let d=c.indexOf(b);-1!==d&&c.splice(d,1)}}$set(a){this.$$set&&0!==Object.keys(a).length&&(this.$$.skip_bound=!0,this.$$set(a),this.$$.skip_bound=!1)}}class bc extends T{constructor(a){super();S(this,a,ac,$b,Q,{config:6,step:7})}}class qc extends T{constructor(a){super();S(this,a,dc,cc,Q,{step:0})}}class jc extends T{constructor(a){super();S(this,a,fc,ec,Q,{cancelIcon:0,
step:2})}}class ic extends T{constructor(a){super();S(this,a,hc,gc,Q,{labelId:1,element:0,title:2})}}class oc extends T{constructor(a){super();S(this,a,lc,kc,Q,{labelId:0,step:1})}}class pc extends T{constructor(a){super();S(this,a,nc,mc,Q,{descriptionId:1,element:0,step:2})}}class uc extends T{constructor(a){super();S(this,a,sc,rc,Q,{descriptionId:0,labelId:1,step:2})}}class Cc extends T{constructor(a){super();S(this,a,vc,tc,Q,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,
labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12})}get getElement(){return this.$$.ctx[12]}}var Cb=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a,b){(function(){a.exports={polyfill:function(){function c(h,t){this.scrollLeft=h;this.scrollTop=t}function d(h){if(null===h||"object"!==typeof h||void 0===h.behavior||"auto"===h.behavior||"instant"===h.behavior)return!0;if("object"===typeof h&&"smooth"===h.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+
h.behavior+" is not a valid value for enumeration ScrollBehavior.");}function e(h,t){if("Y"===t)return h.clientHeight+x<h.scrollHeight;if("X"===t)return h.clientWidth+x<h.scrollWidth}function f(h,t){h=k.getComputedStyle(h,null)["overflow"+t];return"auto"===h||"scroll"===h}function g(h){var t=e(h,"Y")&&f(h,"Y");h=e(h,"X")&&f(h,"X");return t||h}function l(h){var t=(r()-h.startTime)/468;var v=.5*(1-Math.cos(Math.PI*(1<t?1:t)));t=h.startX+(h.x-h.startX)*v;v=h.startY+(h.y-h.startY)*v;h.method.call(h.scrollable,
t,v);t===h.x&&v===h.y||k.requestAnimationFrame(l.bind(k,h))}function m(h,t,v){var A=r();if(h===p.body){var u=k;var w=k.scrollX||k.pageXOffset;h=k.scrollY||k.pageYOffset;var y=n.scroll}else u=h,w=h.scrollLeft,h=h.scrollTop,y=c;l({scrollable:u,method:y,startTime:A,startX:w,startY:h,x:t,y:v})}var k=window,p=document;if(!("scrollBehavior"in p.documentElement.style&&!0!==k.__forceSmoothScrollPolyfill__)){var q=k.HTMLElement||k.Element,n={scroll:k.scroll||k.scrollTo,scrollBy:k.scrollBy,elementScroll:q.prototype.scroll||
c,scrollIntoView:q.prototype.scrollIntoView},r=k.performance&&k.performance.now?k.performance.now.bind(k.performance):Date.now,x=/MSIE |Trident\/|Edge\//.test(k.navigator.userAgent)?1:0;k.scroll=k.scrollTo=function(h,t){void 0!==h&&(!0===d(h)?n.scroll.call(k,void 0!==h.left?h.left:"object"!==typeof h?h:k.scrollX||k.pageXOffset,void 0!==h.top?h.top:void 0!==t?t:k.scrollY||k.pageYOffset):m.call(k,p.body,void 0!==h.left?~~h.left:k.scrollX||k.pageXOffset,void 0!==h.top?~~h.top:k.scrollY||k.pageYOffset))};
k.scrollBy=function(h,t){void 0!==h&&(d(h)?n.scrollBy.call(k,void 0!==h.left?h.left:"object"!==typeof h?h:0,void 0!==h.top?h.top:void 0!==t?t:0):m.call(k,p.body,~~h.left+(k.scrollX||k.pageXOffset),~~h.top+(k.scrollY||k.pageYOffset)))};q.prototype.scroll=q.prototype.scrollTo=function(h,t){if(void 0!==h)if(!0===d(h)){if("number"===typeof h&&void 0===t)throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==h.left?~~h.left:"object"!==typeof h?~~h:this.scrollLeft,void 0!==
h.top?~~h.top:void 0!==t?~~t:this.scrollTop)}else t=h.left,h=h.top,m.call(this,this,"undefined"===typeof t?this.scrollLeft:~~t,"undefined"===typeof h?this.scrollTop:~~h)};q.prototype.scrollBy=function(h,t){void 0!==h&&(!0===d(h)?n.elementScroll.call(this,void 0!==h.left?~~h.left+this.scrollLeft:~~h+this.scrollLeft,void 0!==h.top?~~h.top+this.scrollTop:~~t+this.scrollTop):this.scroll({left:~~h.left+this.scrollLeft,top:~~h.top+this.scrollTop,behavior:h.behavior}))};q.prototype.scrollIntoView=function(h){if(!0===
d(h))n.scrollIntoView.call(this,void 0===h?!0:h);else{for(h=this;h!==p.body&&!1===g(h);)h=h.parentNode||h.host;var t=h.getBoundingClientRect(),v=this.getBoundingClientRect();h!==p.body?(m.call(this,h,h.scrollLeft+v.left-t.left,h.scrollTop+v.top-t.top),"fixed"!==k.getComputedStyle(h).position&&k.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):k.scrollBy({left:v.left,top:v.top,behavior:"smooth"})}}}}}})()});Cb.polyfill;Cb.polyfill();class Sa extends Ra{constructor(a,b){void 0===b&&(b={});super(a,
b);this.tour=a;this.classPrefix=this.tour.options?jb(this.tour.options.classPrefix):"";this.styles=a.styles;Va(this);this._setOptions(b);return this}cancel(){this.tour.cancel();this.trigger("cancel")}complete(){this.tour.complete();this.trigger("complete")}destroy(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null);this.el instanceof HTMLElement&&this.el.parentNode&&(this.el.parentNode.removeChild(this.el),this.el=null);this._updateStepTargetOnHide();this.trigger("destroy")}getTour(){return this.tour}hide(){this.tour.modal.hide();
this.trigger("before-hide");this.el&&(this.el.hidden=!0);this._updateStepTargetOnHide();this.trigger("hide")}isCentered(){let a=Ma(this);return!a.element||!a.on}isOpen(){return!(!this.el||this.el.hidden)}show(){if(ea(this.options.beforeShowPromise)){let a=this.options.beforeShowPromise();if(void 0!==a)return a.then(()=>this._show())}this._show()}updateStepOptions(a){Object.assign(this.options,a);this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){this.shepherdElementComponent=
new Cc({target:this.tour.options.stepsContainer||document.body,props:{classPrefix:this.classPrefix,descriptionId:`${this.id}-description`,labelId:`${this.id}-label`,step:this,styles:this.styles}});return this.shepherdElementComponent.getElement()}_scrollTo(a){let {element:b}=Ma(this);ea(this.options.scrollToHandler)?this.options.scrollToHandler(b):b instanceof Element&&"function"===typeof b.scrollIntoView&&b.scrollIntoView(a)}_getClassOptions(a){var b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;
b=b&&b.classes?b.classes:"";a=[...(a.classes?a.classes:"").split(" "),...b.split(" ")];a=new Set(a);return Array.from(a).join(" ").trim()}_setOptions(a){void 0===a&&(a={});let b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=Ac({},b||{});this.options=Object.assign({arrow:!0},b,a);let {when:c}=this.options;this.options.classes=this._getClassOptions(a);this.destroy();this.id=this.options.id||`step-${Na()}`;c&&Object.keys(c).forEach(d=>{this.on(d,c[d],this)})}_setupElements(){void 0!==
this.el&&this.destroy();this.el=this._createTooltipContent();this.options.advanceOn&&Hb(this);this.tooltip&&this.tooltip.destroy();let a=Ma(this),b=a.element,c=Xb(a,this);this.isCentered()&&(b=document.body,this.shepherdElementComponent.getElement().classList.add("shepherd-centered"));this.tooltip=Bc(b,this.el,c);this.target=a.element}_show(){this.trigger("before-show");this._setupElements();this.tour.modal||this.tour._setupModal();this.tour.modal.setupForStep(this);this._styleTargetElementForStep(this);
this.el.hidden=!1;this.options.scrollTo&&setTimeout(()=>{this._scrollTo(this.options.scrollTo)});this.el.hidden=!1;let a=this.shepherdElementComponent.getElement(),b=this.target||document.body;b.classList.add(`${this.classPrefix}shepherd-enabled`);b.classList.add(`${this.classPrefix}shepherd-target`);a.classList.add("shepherd-enabled");this.trigger("show")}_styleTargetElementForStep(a){let b=a.target;b&&(a.options.highlightClass&&b.classList.add(a.options.highlightClass),b.classList.remove("shepherd-target-click-disabled"),
!1===a.options.canClickTarget&&b.classList.add("shepherd-target-click-disabled"))}_updateStepTargetOnHide(){let a=this.target||document.body;this.options.highlightClass&&a.classList.remove(this.options.highlightClass);a.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)}}class Dc extends T{constructor(a){super();S(this,a,yc,xc,Q,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,
show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}let oa=new Ra;class Ec extends Ra{constructor(a){void 0===a&&(a={});super(a);Va(this);this.options=Object.assign({},{exitOnEsc:!0,keyboardNavigation:!0},a);this.classPrefix=jb(this.options.classPrefix);this.steps=[];this.addSteps(this.options.steps);"active cancel complete inactive show start".split(" ").map(b=>
{(c=>{this.on(c,d=>{d=d||{};d.tour=this;oa.trigger(c,d)})})(b)});this._setTourID();return this}addStep(a,b){a instanceof Sa?a.tour=this:a=new Sa(this,a);void 0!==b?this.steps.splice(b,0,a):this.steps.push(a);return a}addSteps(a){Array.isArray(a)&&a.forEach(b=>{this.addStep(b)});return this}back(){let a=this.steps.indexOf(this.currentStep);this.show(a-1,!1)}cancel(){this.options.confirmCancel?window.confirm(this.options.confirmCancelMessage||"Are you sure you want to stop the tour?")&&this._done("cancel"):
this._done("cancel")}complete(){this._done("complete")}getById(a){return this.steps.find(b=>b.id===a)}getCurrentStep(){return this.currentStep}hide(){let a=this.getCurrentStep();if(a)return a.hide()}isActive(){return oa.activeTour===this}next(){let a=this.steps.indexOf(this.currentStep);a===this.steps.length-1?this.complete():this.show(a+1,!0)}removeStep(a){let b=this.getCurrentStep();this.steps.some((c,d)=>{if(c.id===a)return c.isOpen()&&c.hide(),c.destroy(),this.steps.splice(d,1),!0});b&&b.id===
a&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(a,b){void 0===a&&(a=0);void 0===b&&(b=!0);if(a=qa(a)?this.getById(a):this.steps[a])this._updateStateBeforeShow(),ea(a.options.showOn)&&!a.options.showOn()?this._skipStep(a,b):(this.trigger("show",{step:a,previous:this.currentStep}),this.currentStep=a,a.show())}start(){this.trigger("start");this.focusedElBeforeOpen=document.activeElement;this.currentStep=null;this._setupModal();this._setupActiveTour();this.next()}_done(a){let b=
this.steps.indexOf(this.currentStep);Array.isArray(this.steps)&&this.steps.forEach(c=>c.destroy());wc(this);this.trigger(a,{index:b});oa.activeTour=null;this.trigger("inactive",{tour:this});this.modal&&this.modal.hide();"cancel"!==a&&"complete"!==a||!this.modal||(a=document.querySelector(".shepherd-modal-overlay-container"))&&a.remove();this.focusedElBeforeOpen instanceof HTMLElement&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this});oa.activeTour=this}_setupModal(){this.modal=
new Dc({target:this.options.modalContainer||document.body,props:{classPrefix:this.classPrefix,styles:this.styles}})}_skipStep(a,b){a=this.steps.indexOf(a);a=b?a+1:a-1;a===this.steps.length-1?this.complete():this.show(a,b)}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide();this.isActive()||this._setupActiveTour()}_setTourID(){this.id=`${this.options.tourName||"tour"}--${Na()}`}}Object.assign(oa,{Tour:Ec,Step:Sa});return oa})

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal, settings, document, Shepherd) {
  var queryString = decodeURI(window.location.search);
  Drupal.behaviors.tour = {
    attach: function attach(context) {
      once('tour', 'body').forEach(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });
        model.on('change:isActive', function (tourModel, isActive) {
          $(document).trigger(isActive ? 'drupalTourStarted' : 'drupalTourStopped');
        });

        if (settings._tour_internal) {
          model.set('tour', settings._tour_internal);
        }

        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };
  Drupal.tour = Drupal.tour || {
    models: {},
    views: {}
  };
  Drupal.tour.models.StateModel = Backbone.Model.extend({
    defaults: {
      tour: [],
      isActive: false,
      activeTour: []
    }
  });
  Drupal.tour.views.ToggleTourView = Backbone.View.extend({
    events: {
      click: 'onClick'
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },
    render: function render() {
      this.$el.toggleClass('hidden', this._getTour().length === 0);
      var isActive = this.model.get('isActive');
      this.$el.find('button').toggleClass('is-active', isActive).attr('aria-pressed', isActive);
      return this;
    },
    toggleTour: function toggleTour() {
      if (this.model.get('isActive')) {
        this._removeIrrelevantTourItems(this._getTour());

        var tourItems = this.model.get('tour');
        var that = this;

        if (tourItems.length) {
          settings.tourShepherdConfig.defaultStepOptions.popperOptions.modifiers.push({
            name: 'moveArrowJoyridePosition',
            enabled: true,
            phase: 'write',
            fn: function fn(_ref) {
              var state = _ref.state;
              var arrow = state.elements.arrow;
              var placement = state.placement;

              if (arrow && /^top|bottom/.test(placement) && /-start|-end$/.test(placement)) {
                var horizontalPosition = placement.split('-')[1];
                var offset = horizontalPosition === 'start' ? 28 : state.elements.popper.clientWidth - 56;
                arrow.style.transform = "translate3d(".concat(offset, "px, 0px, 0px)");
              }
            }
          });
          var shepherdTour = new Shepherd.Tour(settings.tourShepherdConfig);
          shepherdTour.on('cancel', function () {
            that.model.set('isActive', false);
          });
          shepherdTour.on('complete', function () {
            that.model.set('isActive', false);
          });
          tourItems.forEach(function (tourStepConfig, index) {
            var tourItemOptions = {
              title: tourStepConfig.title ? Drupal.checkPlain(tourStepConfig.title) : null,
              text: function text() {
                return Drupal.theme('tourItemContent', tourStepConfig);
              },
              attachTo: tourStepConfig.attachTo,
              buttons: [Drupal.tour.nextButton(shepherdTour, tourStepConfig)],
              classes: tourStepConfig.classes,
              index: index
            };
            tourItemOptions.when = {
              show: function show() {
                var nextButton = shepherdTour.currentStep.el.querySelector('footer button');
                nextButton.focus();

                if (Drupal.tour.hasOwnProperty('convertToJoyrideMarkup')) {
                  Drupal.tour.convertToJoyrideMarkup(shepherdTour);
                }
              }
            };
            shepherdTour.addStep(tourItemOptions);
          });
          shepherdTour.start();
          this.model.set({
            isActive: true,
            activeTour: shepherdTour
          });
        }
      } else {
        this.model.get('activeTour').cancel();
        this.model.set({
          isActive: false,
          activeTour: []
        });
      }
    },
    onClick: function onClick(event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },
    _getTour: function _getTour() {
      return this.model.get('tour');
    },
    _removeIrrelevantTourItems: function _removeIrrelevantTourItems(tourItems) {
      var tips = /tips=([^&]+)/.exec(queryString);
      var filteredTour = tourItems.filter(function (tourItem) {
        if (tips && tourItem.hasOwnProperty('classes') && tourItem.classes.indexOf(tips[1]) === -1) {
          return false;
        }

        return !(tourItem.selector && !document.querySelector(tourItem.selector));
      });

      if (tourItems.length !== filteredTour.length) {
        filteredTour.forEach(function (filteredTourItem, filteredTourItemId) {
          filteredTour[filteredTourItemId].counter = Drupal.t('!tour_item of !total', {
            '!tour_item': filteredTourItemId + 1,
            '!total': filteredTour.length
          });

          if (filteredTourItemId === filteredTour.length - 1) {
            filteredTour[filteredTourItemId].cancelText = Drupal.t('End tour');
          }
        });
        this.model.set('tour', filteredTour);
      }
    }
  });

  Drupal.tour.nextButton = function (shepherdTour, tourStepConfig) {
    return {
      classes: 'button button--primary',
      text: tourStepConfig.cancelText ? tourStepConfig.cancelText : Drupal.t('Next'),
      action: tourStepConfig.cancelText ? shepherdTour.cancel : shepherdTour.next
    };
  };

  Drupal.theme.tourItemContent = function (tourStepConfig) {
    return "".concat(tourStepConfig.body, "<div class=\"tour-progress\">").concat(tourStepConfig.counter, "</div>");
  };
})(jQuery, Backbone, Drupal, drupalSettings, document, window.Shepherd);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function ($, Drupal, _ref) {
  var tabbable = _ref.tabbable,
      isTabbable = _ref.isTabbable;

  function TabbingManager() {
    this.stack = [];
  }

  function TabbingContext(options) {
    $.extend(this, {
      level: null,
      $tabbableElements: $(),
      $disabledElements: $(),
      released: false,
      active: false,
      trapFocus: false
    }, options);
  }

  $.extend(TabbingManager.prototype, {
    constrain: function constrain(elements) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$trapFocus = _ref2.trapFocus,
          trapFocus = _ref2$trapFocus === void 0 ? false : _ref2$trapFocus;

      var il = this.stack.length;

      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }

      var tabbableElements = [];
      $(elements).each(function (index, rootElement) {
        tabbableElements = [].concat(_toConsumableArray(tabbableElements), _toConsumableArray(tabbable(rootElement)));

        if (isTabbable(rootElement)) {
          tabbableElements = [].concat(_toConsumableArray(tabbableElements), [rootElement]);
        }
      });
      var tabbingContext = new TabbingContext({
        level: this.stack.length,
        $tabbableElements: $(tabbableElements),
        trapFocus: trapFocus
      });
      this.stack.push(tabbingContext);
      tabbingContext.activate();
      $(document).trigger('drupalTabbingConstrained', tabbingContext);
      return tabbingContext;
    },
    release: function release() {
      var toActivate = this.stack.length - 1;

      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }

      this.stack.splice(toActivate + 1);

      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },
    activate: function activate(tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;
      var $disabledSet = $(tabbable(document.body)).not($set);
      tabbingContext.$disabledElements = $disabledSet;
      var il = $disabledSet.length;

      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }

      $disabledSet.prop('tabindex', -1).prop('autofocus', false);
      var $hasFocus = $set.filter('[autofocus]').eq(-1);

      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }

      $hasFocus.trigger('focus');

      if ($set.length && tabbingContext.trapFocus) {
        $set.last().on('keydown.focus-trap', function (event) {
          if (event.key === 'Tab' && !event.shiftKey) {
            event.preventDefault();
            $set.first().focus();
          }
        });
        $set.first().on('keydown.focus-trap', function (event) {
          if (event.key === 'Tab' && event.shiftKey) {
            event.preventDefault();
            $set.last().focus();
          }
        });
      }
    },
    deactivate: function deactivate(tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      tabbingContext.$tabbableElements.first().off('keydown.focus-trap');
      tabbingContext.$tabbableElements.last().off('keydown.focus-trap');

      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },
    recordTabindex: function recordTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },
    restoreTabindex: function restoreTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');

      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];

        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        } else {
          $el[0].removeAttribute('tabindex');
        }

        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }

        if (level === 0) {
          $el.removeData('drupalOriginalTabIndices');
        } else {
          var levelToDelete = level;

          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }

          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });
  $.extend(TabbingContext.prototype, {
    release: function release() {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);
        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },
    activate: function activate() {
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);
        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },
    deactivate: function deactivate() {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);
        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });

  if (Drupal.tabbingManager) {
    return;
  }

  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };

  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    var contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel({
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });
    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  Drupal.behaviors.contextualToolbar = {
    attach: function attach(context) {
      if (once('contextualToolbar-init', 'body').length) {
        initContextualToolbar(context);
      }
    }
  };
  Drupal.contextualToolbar = {
    model: null
  };
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend({
    defaults: {
      isViewing: true,
      isVisible: false,
      contextualCount: 0,
      tabbingContext: null
    },
    initialize: function initialize(attrs, options) {
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);
      this.listenTo(this, 'change:contextualCount', this.updateVisibility);
      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },
    countContextualLinks: function countContextualLinks(contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },
    lockNewContextualLinks: function lockNewContextualLinks(contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },
    updateVisibility: function updateVisibility() {
      this.set('isVisible', this.get('contextualCount') > 0);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone, _) {
  Drupal.contextualToolbar.AuralView = Backbone.View.extend({
    announcedOnce: false,
    initialize: function initialize(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);
      $(document).on('keyup', _.bind(this.onKeypress, this));
      this.manageTabbing();
    },
    render: function render() {
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));
      return this;
    },
    manageTabbing: function manageTabbing() {
      var tabbingContext = this.model.get('tabbingContext');

      if (tabbingContext) {
        if (tabbingContext.active) {
          Drupal.announce(this.options.strings.tabbingReleased);
        }

        tabbingContext.release();
      }

      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },
    announceTabbingConstraint: function announceTabbingConstraint() {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },
    onKeypress: function onKeypress(event) {
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }

      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }
  });
})(jQuery, Drupal, Backbone, _);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        click: function click() {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },
        touchend: touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },
    render: function render() {
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));
      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));
      return this;
    },
    persist: function persist(model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      } else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }
  });
})(Drupal, Backbone);;
(function ($, Drupal) {
  Drupal.behaviors.adminToolbar = {
    attach: function (context, settings) {

      $('a.toolbar-icon', context).removeAttr('title');

      // Make the toolbar menu navigable with keyboard.
      $('ul.toolbar-menu li.menu-item--expanded a', context).on('focusin', function () {
        $('li.menu-item--expanded', context).removeClass('hover-intent');
        $(this).parents('li.menu-item--expanded').addClass('hover-intent');
      });

      $('ul.toolbar-menu li.menu-item a', context).keydown(function (e) {
        if ((e.shiftKey && (e.keyCode || e.which) == 9)) {
          if ($(this).parent('.menu-item').prev().hasClass('menu-item--expanded')) {
            $(this).parent('.menu-item').prev().addClass('hover-intent');
          }
        }
      });

      $('.toolbar-menu:first-child > .menu-item:not(.menu-item--expanded) a, .toolbar-tab > a', context).on('focusin', function () {
        $('.menu-item--expanded').removeClass('hover-intent');
      });

      $('.toolbar-menu:first-child > .menu-item', context).on('hover', function () {
        $(this, 'a').css("background: #fff;");
      });

      $('ul:not(.toolbar-menu)', context).on({
        mousemove: function () {
          $('li.menu-item--expanded').removeClass('hover-intent');
        },
        hover: function () {
          $('li.menu-item--expanded').removeClass('hover-intent');
        }
      });

      // Always hide the dropdown menu on mobile.
      if (window.matchMedia("(max-width: 767px)").matches && $('body').hasClass('toolbar-tray-open')) {
        $('body').removeClass('toolbar-tray-open');
        $('#toolbar-item-administration').removeClass('is-active');
        $('#toolbar-item-administration-tray').removeClass('is-active');
      };

    }
  };
})(jQuery, Drupal);
;
;/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */

/* hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 */(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (jQuery && !jQuery.fn.hoverIntent) {
    factory(jQuery);
  }
})(function ($) {
  'use strict';

  // default configuration values
  var _cfg = {
    interval: 100,
    sensitivity: 6,
    timeout: 0
  };

  // counter used to generate an ID for each instance
  var INSTANCE_COUNT = 0;

  // current X and Y position of mouse, updated during mousemove tracking (shared across instances)
  var cX, cY;

  // saves the current pointer position coordinates based on the given mousemove event
  var track = function (ev) {
    cX = ev.pageX;
    cY = ev.pageY;
  };

  // compares current and previous mouse positions
  var compare = function (ev,$el,s,cfg) {
    // compare mouse positions to see if pointer has slowed enough to trigger `over` function
    if ( Math.sqrt( (s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY) ) < cfg.sensitivity ) {
      $el.off(s.event,track);
      delete s.timeoutId;
      // set hoverIntent state as active for this element (permits `out` handler to trigger)
      s.isActive = true;
      // overwrite old mouseenter event coordinates with most recent pointer position
      ev.pageX = cX; ev.pageY = cY;
      // clear coordinate data from state object
      delete s.pX; delete s.pY;
      return cfg.over.apply($el[0],[ev]);
    } else {
      // set previous coordinates for next comparison
      s.pX = cX; s.pY = cY;
      // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
      s.timeoutId = setTimeout( function () {compare(ev, $el, s, cfg);} , cfg.interval );
    }
  };

  // triggers given `out` function at configured `timeout` after a mouseleave and clears state
  var delay = function (ev,$el,s,out) {
    delete $el.data('hoverIntent')[s.id];
    return out.apply($el[0],[ev]);
  };

  $.fn.hoverIntent = function (handlerIn,handlerOut,selector) {
    // instance ID, used as a key to store and retrieve state information on an element
    var instanceId = INSTANCE_COUNT++;

    // extend the default configuration and parse parameters
    var cfg = $.extend({}, _cfg);
    if ( $.isPlainObject(handlerIn) ) {
      cfg = $.extend(cfg, handlerIn);
      if ( !$.isFunction(cfg.out) ) {
        cfg.out = cfg.over;
      }
    } else if ( $.isFunction(handlerOut) ) {
      cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
    } else {
      cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
    }

    // A private function for handling mouse 'hovering'
    var handleHover = function (e) {
      // cloned event to pass to handlers (copy required for event object to be passed in IE)
      var ev = $.extend({},e);

      // the current target of the mouse event, wrapped in a jQuery object
      var $el = $(this);

      // read hoverIntent data from element (or initialize if not present)
      var hoverIntentData = $el.data('hoverIntent');
      if (!hoverIntentData) { $el.data('hoverIntent', (hoverIntentData = {})); }

      // read per-instance state from element (or initialize if not present)
      var state = hoverIntentData[instanceId];
      if (!state) { hoverIntentData[instanceId] = state = { id: instanceId }; }

      // state properties:
      // id = instance ID, used to clean up data
      // timeoutId = timeout ID, reused for tracking mouse position and delaying "out" handler
      // isActive = plugin state, true after `over` is called just until `out` is called
      // pX, pY = previously-measured pointer coordinates, updated at each polling interval
      // event = string representing the namespaced event used for mouse tracking

      // clear any existing timeout
      if (state.timeoutId) { state.timeoutId = clearTimeout(state.timeoutId); }

      // namespaced event used to register and unregister mousemove tracking
      var mousemove = state.event = 'mousemove.hoverIntent.hoverIntent' + instanceId;

      // handle the event, based on its type
      if (e.type === 'mouseenter') {
        // do nothing if already active
        if (state.isActive) { return; }
        // set "previous" X and Y position based on initial entry point
        state.pX = ev.pageX; state.pY = ev.pageY;
        // update "current" X and Y position based on mousemove
        $el.off(mousemove,track).on(mousemove,track);
        // start polling interval (self-calling timeout) to compare mouse coordinates over time
        state.timeoutId = setTimeout( function () {compare(ev,$el,state,cfg);} , cfg.interval );
      } else { // "mouseleave"
        // do nothing if not already active
        if (!state.isActive) { return; }
        // unbind expensive mousemove event
        $el.off(mousemove,track);
        // if hoverIntent state is true, then call the mouseOut function after the specified delay
        state.timeoutId = setTimeout( function () {delay(ev,$el,state,cfg.out);} , cfg.timeout );
      }
    };

    // listen for mouseenter and mouseleave
    return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
  };
});
;
(function ($) {
  $(document).ready(function () {
    $('.toolbar-tray-horizontal li.menu-item--expanded, .toolbar-tray-horizontal ul li.menu-item--expanded .menu-item').hoverIntent({
      over: function () {
        // At the current depth, we should delete all "hover-intent" classes.
        // Other wise we get unwanted behaviour where menu items are expanded while already in hovering other ones.
        $(this).parent().find('li').removeClass('hover-intent');
        $(this).addClass('hover-intent');
      },
      out: function () {
        $(this).removeClass('hover-intent');
      },
      timeout: 250
    });
  });
})(jQuery);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;

  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var toolbarEscape = once('escapeAdmin', '[data-toolbar-escape-admin]');

      if (toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $(toolbarEscape).attr('href', escapeAdminPath);
        } else {
          toolbarEscape[0].textContent = Drupal.t('Home');
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  function mapTextContentToAjaxResponse(content) {
    if (content === '') {
      return false;
    }

    try {
      return JSON.parse(content);
    } catch (e) {
      return false;
    }
  }

  function bigPipeProcessPlaceholderReplacement(placeholderReplacement) {
    var placeholderId = placeholderReplacement.getAttribute('data-big-pipe-replacement-for-placeholder-with-id');
    var content = placeholderReplacement.textContent.trim();

    if (typeof drupalSettings.bigPipePlaceholderIds[placeholderId] !== 'undefined') {
      var response = mapTextContentToAjaxResponse(content);

      if (response === false) {
        once.remove('big-pipe', placeholderReplacement);
      } else {
        var ajaxObject = Drupal.ajax({
          url: '',
          base: false,
          element: false,
          progress: false
        });
        ajaxObject.success(response, 'success');
      }
    }
  }

  var interval = drupalSettings.bigPipeInterval || 50;
  var timeoutID;

  function bigPipeProcessDocument(context) {
    if (!context.querySelector('script[data-big-pipe-event="start"]')) {
      return false;
    }

    once('big-pipe', 'script[data-big-pipe-replacement-for-placeholder-with-id]', context).forEach(bigPipeProcessPlaceholderReplacement);

    if (context.querySelector('script[data-big-pipe-event="stop"]')) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }

      return true;
    }

    return false;
  }

  function bigPipeProcess() {
    timeoutID = setTimeout(function () {
      if (!bigPipeProcessDocument(document)) {
        bigPipeProcess();
      }
    }, interval);
  }

  bigPipeProcess();
  window.addEventListener('load', function () {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    bigPipeProcessDocument(document);
  });
})(Drupal, drupalSettings);;
