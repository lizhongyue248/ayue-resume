(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{118:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),l=a(131),s=a.n(l),o=a(136),i=a(132),u=a(130),m=a(134),d=a(119),h=a.n(d);const f=[{title:c.a.createElement(c.a.Fragment,null,"\u4e2a\u4eba\u72ec\u7acb\u535a\u4e3b"),imageUrl:"img/first.svg",description:c.a.createElement(c.a.Fragment,null,"\u62e5\u6709\u5c5e\u4e8e\u81ea\u5df1\u7684\u4e2a\u4eba\u72ec\u7acb\u535a\u5ba2\uff0c\u4e13\u6ce8\u4e8e\u539f\u521b\u6587\u7ae0\u7f16\u5199\uff1b\u5584\u4e8e\u603b\u7ed3\u3001 \u5206\u4eab\u4e2a\u4eba\u7ecf\u9a8c\uff0c\u70ed\u8877\u4e8e\u6240\u5b66\u4e13\u4e1a\uff0c\u5bf9\u5927\u591a\u4e8b\u7269\u62b1\u6709\u5174\u8da3\uff0c\u5177\u6709\u8f83\u5f3a\u7684\u81ea\u5b66\u80fd\u529b\u3002")},{title:c.a.createElement(c.a.Fragment,null,"\u5f00\u6e90\u7231\u597d\u8005"),imageUrl:"img/second.svg",description:c.a.createElement(c.a.Fragment,null,"\u6d3b\u8dc3\u4e8e\u591a\u4e2a\u5f00\u6e90\u793e\u533a\uff0c\u5584\u4e8e\u53d1\u73b0\u4f18\u79c0\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u63d0\u4ea4\u8fc7\u591a\u4e2a issue \u4e0e pr\uff1b \u70ed\u8877\u4e8e\u5f00\u6e90\u4e8b\u4e1a\uff0c\u5f00\u6e90\u6240\u6709\u9879\u76ee\u4ee3\u7801\uff0c\u5177\u6709\u5f3a\u70c8\u7684\u5f00\u6e90\u7cbe\u795e\u3002")},{title:c.a.createElement(c.a.Fragment,null,"Linux \u7231\u597d\u8005"),imageUrl:"img/third.svg",description:c.a.createElement(c.a.Fragment,null,"\u7ea2\u5e3d\u8ba4\u8bc1\u5de5\u7a0b\u5e08\uff0cManjaro \u4e3b\u529b\u5f00\u53d1\u7cfb\u7edf\uff0c\u4e50\u4e8e\u8ffd\u6eaf\u884c\u4e1a\u65b0\u6280\u672f\uff0c \u62e5\u6709\u8f83\u5f3a\u7684\u5b66\u4e60\u80fd\u529b\u548c\u63a5\u53d7\u80fd\u529b\uff0c\u80fd\u591f\u72ec\u7acb\u89e3\u51b3\u8bf8\u591a\u95ee\u9898\u3002")}];function b({imageUrl:e,title:t,description:a}){const n=Object(m.a)(e);return c.a.createElement("div",{className:s()("col col--4",h.a.feature)},n&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:h.a.featureImage,src:n,alt:t})),c.a.createElement("hr",null),c.a.createElement("h3",null,t),c.a.createElement("p",null,a))}t.default=function(){const e=Object(u.a)(),{siteConfig:t={}}=e;return c.a.createElement(o.a,{description:t.tagline},c.a.createElement("header",{className:s()("hero hero--primary",h.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("img",{className:h.a.avatar,src:"https://resources.echocow.cn/avatar/me.jpg",alt:"me"}),c.a.createElement("p",{className:"hero__subtitle"},t.tagline),c.a.createElement("div",{className:h.a.buttons},c.a.createElement(i.a,{className:s()("button button--outline button--secondary button--lg",h.a.getStarted),to:Object(m.a)("docs/base")},"\u67e5\u770b")))),c.a.createElement("main",null,f&&f.length&&c.a.createElement("section",{className:h.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},f.map((e,t)=>c.a.createElement(b,Object(n.a)({key:t},e))))))))}},135:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},136:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(145),l=a(130),s=a(134);const o="",i="dark";var u=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(l.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):o),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),c=Object(n.useCallback)(()=>{a(o),r(o)},[]),s=Object(n.useCallback)(()=>{a(i),r(i)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?i:o)})},[]),{isDarkTheme:t===i,setLightTheme:c,setDarkTheme:s}},m=a(135);var d=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=u();return r.a.createElement(m.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)},h=a(1),f=a(132),b=a(144),v=()=>null,g=a(140),p=a.n(g),E=a(131),k=a.n(E),_=a(93),y=a.n(_);const O=()=>r.a.createElement("span",{className:k()(y.a.toggle,y.a.moon)}),j=()=>r.a.createElement("span",{className:k()(y.a.toggle,y.a.sun)});var N=function(e){const{isClient:t}=Object(l.a)();return r.a.createElement(p.a,Object(h.a)({disabled:!t,icons:{checked:r.a.createElement(O,null),unchecked:r.a.createElement(j,null)}},e))},w=a(137),C=a(138);var T=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]};var S=e=>{const[t,a]=Object(n.useState)(!0),[r,c]=Object(n.useState)(!1),[l,s]=Object(n.useState)(0),[o,i]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),m=Object(C.b)(),[d,h]=T(m.hash),f=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(e<o)return;if(r)return c(!1),a(!1),void s(e);const t=document.documentElement.scrollHeight-o,n=window.innerHeight;l&&e>l?a(!1):e+n<t&&a(!0),s(e)};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}},[l,o]),Object(n.useEffect)(()=>{e&&(a(!0),h(m.hash))},[m]),Object(n.useEffect)(()=>{e&&d&&c(!0)},[d]),{navbarRef:u,isNavbarVisible:t}},x=a(139),M=a(94),L=a.n(M);function D({activeBasePath:e,to:t,href:a,label:n,position:c,...l}){const o=Object(s.a)(t),i=Object(s.a)(e);return r.a.createElement(f.a,Object(h.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:o,...e?{isActive:(e,t)=>t.pathname.startsWith(i)}:null},l),n)}var F=function(){const{siteConfig:e={},isClient:t}=Object(l.a)(),{baseUrl:a,themeConfig:c={}}=e,{navbar:o={},disableDarkMode:i=!1}=c,{title:u,logo:m={},links:d=[],hideOnScroll:g=!1}=o,[p,E]=Object(n.useState)(!1),[_,y]=Object(n.useState)(!1),{isDarkTheme:O,setLightTheme:j,setDarkTheme:C}=Object(w.a)(),{navbarRef:T,isNavbarVisible:M}=S(g);Object(x.a)(p);const F=Object(n.useCallback)(()=>{E(!0)},[E]),P=Object(n.useCallback)(()=>{E(!1)},[E]),B=Object(n.useCallback)(e=>e.target.checked?C():j(),[j,C]),X=m.href||a;let I={};m.target?I={target:m.target}:Object(b.a)(X)||(I={rel:"noopener noreferrer",target:"_blank"});const H=m.srcDark&&O?m.srcDark:m.src,R=Object(s.a)(H);return r.a.createElement("nav",{ref:T,className:k()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":p,[L.a.navbarHideable]:g,[L.a.navbarHidden]:!M})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:F,onKeyDown:F},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(f.a,Object(h.a)({className:"navbar__brand",to:X},I),null!=m&&r.a.createElement("img",{key:t,className:"navbar__logo",src:R,alt:m.alt}),null!=u&&r.a.createElement("strong",{className:k()("navbar__title",{[L.a.hideLogoText]:_})},u)),d.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(D,Object(h.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},d.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(D,Object(h.a)({},e,{key:t}))),!i&&r.a.createElement(N,{className:L.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:O,onChange:B}),r.a.createElement(v,{handleSearchBarToggle:y,isSearchBarExpanded:_}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:P}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(f.a,Object(h.a)({className:"navbar__brand",onClick:P,to:X},I),null!=m&&r.a.createElement("img",{key:t,className:"navbar__logo",src:R,alt:m.alt}),null!=u&&r.a.createElement("strong",{className:"navbar__title"},u)),!i&&p&&r.a.createElement(N,{"aria-label":"Dark mode toggle in sidebar",checked:O,onChange:B})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(D,Object(h.a)({className:"menu__link"},e,{onClick:P})))))))))},P=a(95),B=a.n(P);function X({to:e,href:t,label:a,...n}){const c=Object(s.a)(e);return r.a.createElement(f.a,Object(h.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},n),a)}const I=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var H=function(){const e=Object(l.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:c,links:o=[],logo:i={}}=n||{},u=Object(s.a)(i.src);return n?r.a.createElement("footer",{className:k()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(X,e)))):null))),(i||c)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:B.a.footerLogoLink},r.a.createElement(I,{alt:i.alt,url:u})):r.a.createElement(I,{alt:i.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(96);t.a=function(e){const{siteConfig:t={}}=Object(l.a)(),{favicon:a,title:n,themeConfig:{image:o},url:i}=t,{children:u,title:m,noFooter:h,description:f,image:b,keywords:v,permalink:g,version:p}=e,E=m?`${m} | ${n}`:n,k=b||o,_=i+Object(s.a)(k),y=Object(s.a)(a);return r.a.createElement(d,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),a&&r.a.createElement("link",{rel:"shortcut icon",href:y}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),p&&r.a.createElement("meta",{name:"docsearch:version",content:p}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:_}),k&&r.a.createElement("meta",{property:"twitter:image",content:_}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${E}`}),g&&r.a.createElement("meta",{property:"og:url",content:i+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(F,null),r.a.createElement("div",{className:"main-wrapper"},u),!h&&r.a.createElement(H,null))}},137:function(e,t,a){"use strict";var n=a(0),r=a(135);t.a=function(){return Object(n.useContext)(r.a)}},138:function(e,t,a){"use strict";var n=a(19);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d}))},139:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},140:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=d(c),s=d(a(131)),o=d(a(8)),i=d(a(141)),u=d(a(142)),m=a(143);function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,m.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,m.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,m.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,s.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:l.default.createElement(i.default,null),unchecked:l.default.createElement(u.default,null)}},h.propTypes={checked:o.default.bool,disabled:o.default.bool,defaultChecked:o.default.bool,onChange:o.default.func,onFocus:o.default.func,onBlur:o.default.func,className:o.default.string,name:o.default.string,value:o.default.string,id:o.default.string,"aria-labelledby":o.default.string,"aria-label":o.default.string,icons:o.default.oneOfType([o.default.bool,o.default.shape({checked:o.default.node,unchecked:o.default.node})])}},141:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},142:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},143:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);