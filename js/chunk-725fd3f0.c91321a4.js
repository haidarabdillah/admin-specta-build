(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-725fd3f0"],{"21c4":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("b-row",{staticClass:"mb-32"},[e("b-col",{attrs:{cols:"12"}},[e("b-row",[e("b-col",{staticClass:"flex-grow-1 overflow-hidden"},[e("b-row",[e("b-col",{staticClass:"mb-32",attrs:{cols:"12"}},[e("h1",{staticClass:"hp-mb-0"}),e("h1",{staticClass:"hp-mb-0"},[t._v("Setting Matching Reff")])]),e("b-col",[t.stateData.success?e("b-alert",{attrs:{variant:"success",show:""}},[t._v(t._s(t.stateData.success_message))]):t._e(),t.stateData.error?e("b-alert",{attrs:{variant:"danger",show:""}},[t._v(t._s(t.stateData.error_message))]):t._e()],1),e("b-col",{staticClass:"mb-32",attrs:{cols:"12"}},[t._l(t.settingsReffData,(function(n){return e("div",[t.input_data?e("div",{staticClass:"mb-3"},[e("b-form",{attrs:{inline:""}},[e("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:n.id}},[e("b-form-input",{attrs:{id:"inline-form-input-username",placeholder:n.value},model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"item.value"}})],1)],1)],1):e("div",{staticClass:"mb-3"},[e("b-form",{attrs:{inline:""}},[e("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:n.id}},[e("b-form-input",{attrs:{id:"inline-form-input-username",placeholder:n.value,disabled:""},model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"item.value"}})],1)],1)],1)])})),t.input_data?e("div",[e("b-button",{attrs:{variant:"danger-2"},on:{click:t.delSetting}},[e("i",{staticClass:"ri-2x ri-chat-delete-line mr-1",staticStyle:{"font-size":"24px"}}),t._v("delete 1 level")]),e("b-button",{staticClass:"ml-5",attrs:{variant:"secondary-2"},on:{click:t.newSetting}},[e("i",{staticClass:"ri-2x ri-chat-new-line mr-1",staticStyle:{"font-size":"24px"}}),t._v("new 1 level")]),e("br"),e("b-button",{staticClass:"mt-5",attrs:{variant:"primary-2"},on:{click:t.updateSetting}},[e("i",{staticClass:"ri-2x ri-save-line",staticStyle:{"font-size":"24px"}}),t._v("Submit")])],1):e("div",[e("b-button",{attrs:{variant:"primary"},on:{click:t.enableInput}},[e("i",{staticClass:"ri-2x ri-edit-2-line",staticStyle:{"font-size":"24px"}}),t._v("Edit")])],1)],2)],1)],1)],1)],1)],1)},a=[],i=n("c7eb"),c=n("1da1"),s=n("5530"),o=n("a15b"),p=n("b28b"),l=n("11de"),u=n("82264"),b=n("4797"),d=n("1947"),f=n("5e12"),O=n("5fda"),m=n("2f62"),j={data:function(){return{input_data:!1,errorInput:!1}},components:{BRow:o["a"],BCol:p["a"],BForm:l["a"],BFormGroup:u["a"],BFormInput:b["a"],BButton:d["a"],BInputGroup:f["a"],BAlert:O["a"]},computed:Object(s["a"])({},Object(m["c"])("settingsMatchingStore",["settingsReffData","stateData"])),methods:Object(s["a"])(Object(s["a"])({},Object(m["b"])("settingsMatchingStore",["getSettings","newSettings","updateSettings","delSettings"])),{},{enableInput:function(){console.log("runninf"),this.input_data=!0},newSetting:function(){this.newSettings()},delSetting:function(){this.delSettings()},updateSetting:function(){this.updateSettings()}}),mounted:function(){var t=this;return Object(c["a"])(Object(i["a"])().mark((function e(){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getSettings();case 2:case"end":return e.stop()}}),e)})))()}},g=j,v=n("2877"),w=Object(v["a"])(g,r,a,!1,null,null,null);e["default"]=w.exports},"5e12":function(t,e,n){"use strict";n.d(e,"a",(function(){return D}));var r=n("2b0e"),a=n("b42e"),i=n("c637"),c=n("a723"),s=n("9b76"),o=n("8690"),p=n("365c"),l=n("cf75"),u=n("d82f"),b=Object(l["d"])({tag:Object(l["c"])(c["q"],"div")},i["L"]),d=r["default"].extend({name:i["L"],functional:!0,props:b,render:function(t,e){var n=e.props,r=e.data,i=e.children;return t(n.tag,Object(a["a"])(r,{staticClass:"input-group-text"}),i)}}),f=Object(l["d"])({append:Object(l["c"])(c["g"],!1),id:Object(l["c"])(c["q"]),isText:Object(l["c"])(c["g"],!1),tag:Object(l["c"])(c["q"],"div")},i["I"]),O=r["default"].extend({name:i["I"],functional:!0,props:f,render:function(t,e){var n=e.props,r=e.data,i=e.children,c=n.append;return t(n.tag,Object(a["a"])(r,{class:{"input-group-append":c,"input-group-prepend":!c},attrs:{id:n.id}}),n.isText?[t(d,i)]:i)}});function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=Object(l["d"])(Object(u["i"])(f,["append"]),i["J"]),w=r["default"].extend({name:i["J"],functional:!0,props:v,render:function(t,e){var n=e.props,r=e.data,i=e.children;return t(O,Object(a["a"])(r,{props:j(j({},n),{},{append:!0})}),i)}});function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){S(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x=Object(l["d"])(Object(u["i"])(f,["append"]),i["K"]),P=r["default"].extend({name:i["K"],functional:!0,props:x,render:function(t,e){var n=e.props,r=e.data,i=e.children;return t(O,Object(a["a"])(r,{props:y(y({},n),{},{append:!1})}),i)}});function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C=Object(l["d"])({append:Object(l["c"])(c["q"]),appendHtml:Object(l["c"])(c["q"]),id:Object(l["c"])(c["q"]),prepend:Object(l["c"])(c["q"]),prependHtml:Object(l["c"])(c["q"]),size:Object(l["c"])(c["q"]),tag:Object(l["c"])(c["q"],"div")},i["H"]),D=r["default"].extend({name:i["H"],functional:!0,props:C,render:function(t,e){var n=e.props,r=e.data,i=e.slots,c=e.scopedSlots,l=n.prepend,u=n.prependHtml,b=n.append,f=n.appendHtml,O=n.size,m=c||{},j=i(),g={},v=t(),h=Object(p["a"])(s["y"],m,j);(h||l||u)&&(v=t(P,[h?Object(p["b"])(s["y"],g,m,j):t(d,{domProps:Object(o["a"])(u,l)})]));var y=t(),S=Object(p["a"])(s["a"],m,j);return(S||b||f)&&(y=t(w,[S?Object(p["b"])(s["a"],g,m,j):t(d,{domProps:Object(o["a"])(f,b)})])),t(n.tag,Object(a["a"])(r,{staticClass:"input-group",class:_({},"input-group-".concat(O),O),attrs:{id:n.id||null,role:"group"}}),[v,Object(p["b"])(s["c"],g,m,j),y])}})}}]);
//# sourceMappingURL=chunk-725fd3f0.c91321a4.js.map