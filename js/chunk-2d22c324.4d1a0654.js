(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c324"],{f1cf:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("main",[a("div",{staticClass:"hp-bg-color-dark-90 min-vh-100 d-flex"},[a("div",{staticClass:"hp-main-layout hp-main-layout-horizontal"},[a("header-horizontal"),a("div",{staticClass:"hp-main-layout-content"},[a("vue-page-transition",{attrs:{name:"fade-in-up"}},[a("router-view")],1)],1),a("app-footer")],1)]),a("scroll-to-top")],1)},n=[],i=function(){var t=this,a=t._self._c;return a("header",[a("b-row",{staticClass:"w-100 m-0"},[a("b-col",{staticClass:"px-0"},[a("b-row",{staticClass:"w-100 position-relative",attrs:{"align-v":"center","align-h":"between"}},[a("b-col",{staticClass:"w-auto hp-flex-none hp-mobile-sidebar-button mr-24 px-0"},[a("b-button",{staticClass:"btn-icon-only",attrs:{variant:"text"}},[a("i",{staticClass:"ri-menu-fill hp-text-color-black-80 hp-text-color-dark-30 lh-1",staticStyle:{"font-size":"24px"}})])],1),a("b-col",{staticClass:"hp-flex-none w-auto"},[a("logo")],1),t.searchActive?a("b-col",{class:"hp-header-search".concat(t.searchClass?" active":"")},[a("header-search",{on:{searchClose:t.searchClose}})],1):t._e(),t.searchActive?t._e():a("b-col",{staticClass:"flex-shrink-1 w-auto hp-horizontal-menu"},[a("menu-horizontal")],1),a("b-col",{staticClass:"hp-flex-none w-auto pr-0"},[a("b-row",{attrs:{"align-v":"center","align-h":"end"}},[a("div",{staticClass:"w-auto px-0"},[a("div",{staticClass:"d-flex align-items-center mr-4 hp-header-search-button"},[a("button",{staticClass:"btn-icon-only bg-transparent border-0 hp-hover-bg-black-10 hp-hover-bg-dark-100 hp-transition d-flex align-items-center justify-content-center",staticStyle:{height:"40px"},attrs:{variant:"none"},on:{click:function(a){return t.searchToggle()}}},[t.searchActive?a("i",{staticClass:"ri-close-line hp-text-color-black-80 hp-text-color-dark-30",staticStyle:{"font-size":"24px"}}):a("svg",{staticClass:"hp-text-color-black-80 hp-text-color-dark-30",attrs:{set:"curved",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[a("path",{attrs:{d:"M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])])]),a("header-notifications"),a("header-basket"),a("header-user")],1)],1)],1)],1)],1)],1)},o=[],c=e("b28b"),r=e("a15b"),l=e("1947"),h=e("aa59"),p=e("41c3"),u=e("b6f1"),d=e("f6e2"),v=e("f633"),b=e("1a8b"),f=(e("99af"),function(){var t=this,a=t._self._c;return a("ul",{staticClass:"d-flex flex-wrap align-items-center"},t._l(t.menuItems,(function(e,s){return a("li",{key:s,staticClass:"px-6"},[a("b-link",{class:"px-12 py-4".concat(t.path.split("/")[1]==e.header.toLowerCase()?" active":"").concat("components"==t.path.split("/")[1]&&"user interface"==e.header.toLowerCase()?" active":"")},[a("span",[t._v(t._s(e.header))]),a("i",{staticClass:"ri-arrow-down-s-line"})]),a("ul",{staticClass:"dropdown-menu"},t._l(e.children,(function(e,s){return a("li",{key:s},[e.children?a("b-link",{class:"dropdown-item".concat(t.path.split("/")[2]==e.id?" active":"")},[a("span",[e.icon?a("i",{class:"iconly-".concat(e.icon)}):t._e(),e.iconSvg?a("div",{staticClass:"submenu-item-icon",domProps:{innerHTML:t._s(e.iconSvg)}}):t._e(),a("span",[t._v(t._s(e.title))])]),a("i",{staticClass:"dropdown-menu-arrow"})]):a("b-link",{class:"".concat(t.path==e.navLink?"active":""),style:e.tag?"pointer-events: none;":"",attrs:{to:e.navLink}},[e.tag?a("span",{staticClass:"justify-content-between w-100"},[a("div",{staticClass:"d-flex align-items-center"},[e.icon?a("i",{class:"iconly-".concat(e.icon)}):t._e(),e.iconSvg?a("div",{staticClass:"submenu-item-icon",domProps:{innerHTML:t._s(e.iconSvg)}}):t._e(),a("span",{staticStyle:{"white-space":"nowrap"}},[t._v(t._s(e.title))])]),e.tag?a("b-badge",{staticClass:"hp-text-color-black-100 hp-bg-success-3 rounded-pill px-8 border-0 ml-32",attrs:{variant:"none"}},[t._v(" "+t._s(e.tag)+" ")]):t._e()],1):a("span",[e.icon?a("i",{class:"iconly-".concat(e.icon)}):t._e(),e.iconSvg?a("div",{staticClass:"submenu-item-icon",domProps:{innerHTML:t._s(e.iconSvg)}}):t._e(),a("span",[t._v(t._s(e.title))])])]),e.children?a("ul",{staticClass:"dropdown-menu"},t._l(e.children,(function(e,s){return a("li",{key:s,staticClass:"dropend"},[e.children?a("b-link",{class:"dropdown-item".concat(t.path.split("/")[3]==e.id?" active":"")},[a("span",[t._v(t._s(e.title))]),a("i",{staticClass:"dropdown-menu-arrow"})]):e.target?a("b-link",{class:"".concat(t.path==e.navLink?" active":""),attrs:{href:e.navLink,target:e.target}},[a("span",[t._v(t._s(e.title))])]):a("b-link",{class:"".concat(t.path==e.navLink?" active":""),attrs:{to:e.navLink}},[a("span",[t._v(t._s(e.title))])]),e.children?a("ul",{staticClass:"dropdown-menu"},t._l(e.children,(function(e,s){return a("li",{key:s},[a("b-link",{class:"".concat(t.path==e.navLink?" active":""),attrs:{to:e.navLink}},[a("span",[t._v(t._s(e.title))])])],1)})),0):t._e()],1)})),0):t._e()],1)})),0)],1)})),0)}),m=[],w=e("e98b"),C=e("e043"),g={data:function(){return{path:"",menuItems:C["a"]}},components:{BRow:r["a"],BCol:c["a"],BLink:h["a"],BBadge:w["a"]},watch:{$route:function(){this.getRoute()}},methods:{getRoute:function(){this.path=this.$route.path}},created:function(){this.getRoute()}},k=g,_=e("2877"),x=Object(_["a"])(k,f,m,!1,null,null,null),y=x.exports,L=e("2538"),B={data:function(){return{searchActive:!1,searchClass:""}},components:{BCol:c["a"],BRow:r["a"],BButton:l["a"],BLink:h["a"],HeaderText:p["a"],HeaderSearch:u["a"],HeaderBasket:d["a"],HeaderNotifications:v["a"],HeaderUser:b["a"],MenuHorizontal:y,Logo:L["a"]},methods:{searchToggle:function(){var t=this;this.searchActive=!this.searchActive,this.searchActive?setTimeout((function(){t.searchClass=!0,setTimeout((function(){document.querySelector(".hp-header-search-item .form-control").focus()}),100)}),200):this.searchClass=!1},searchClose:function(){this.searchActive=!1,this.searchClass=!1}}},S=B,H=Object(_["a"])(S,i,o,!1,null,null,null),T=H.exports,A=e("53bf"),z=e("3614"),j=e("8f66"),M={components:{HeaderHorizontal:T,AppFooter:A["a"],Breadcrumb:z["a"],ScrollToTop:j["a"]}},R=M,O=Object(_["a"])(R,s,n,!1,null,null,null);a["default"]=O.exports}}]);
//# sourceMappingURL=chunk-2d22c324.4d1a0654.js.map