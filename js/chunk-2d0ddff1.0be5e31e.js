(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddff1"],{8487:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("b-row",{staticClass:"mb-32"},[a("b-col",{attrs:{cols:"12"}},[a("b-row",[a("b-col",{staticClass:"flex-grow-1 overflow-hidden"},[a("b-row",[a("b-col",{staticClass:"mb-32",attrs:{cols:"12"}},[a("h1",{staticClass:"hp-mb-0"},[t._v("pending Airdrops")])]),a("b-col",{attrs:{cols:"12"}},[a("table-list-user")],1)],1)],1)],1)],1)],1)},r=[],n=e("a15b"),c=e("b28b"),i=function(){var t=this,a=t._self._c;return a("b-card",{staticClass:"hp-project-table-card hp-analytics-project-table-card mb-5"},[a("b-col",{staticClass:"mb-32",attrs:{cols:"12"}},[a("b-row",{attrs:{"align-v":"center","align-h":"between"}},[a("b-col",{attrs:{cols:"12",md:"6"}},[a("h3",[t._v("Latest Pending Airdrop Request")]),t._v(" page"+t._s(t.pageData)+" "),a("p",{staticClass:"hp-p1-body mb-0"},[t._v("You can see Latest Pending Airdrop Request")])])],1)],1),a("b-col",[t.stateData.success?a("b-alert",{attrs:{variant:"success-2",show:""}},[t._v(t._s(t.stateData.success_message))]):t._e(),t.stateData.error?a("b-alert",{attrs:{variant:"danger-2",show:""}},[t._v(t._s(t.stateData.error_message))]):t._e()],1),a("div",[0===t.listData.length?a("div",[t._v("No Data To Display")]):a("div",[a("b-table-simple",{staticClass:"mb-0",attrs:{responsive:"",borderless:""}},[a("b-thead",[a("b-tr",[a("b-th",[a("span",{staticClass:"hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"},[t._v(" Id user")])]),a("b-th",[a("span",{staticClass:"hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"},[t._v(" Email ")])]),a("b-th",[a("span",{staticClass:"hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"},[t._v(" Telegram ")])]),a("b-th",[a("span",{staticClass:"hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"},[t._v(" binance_pay_id ")])]),a("b-th",[a("span",{staticClass:"hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"},[t._v(" binance_address ")])]),a("b-th",[a("span",{staticClass:"hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"},[t._v(" APPROVE ")])]),a("b-th",[a("span",{staticClass:"hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"},[t._v(" REJECT ")])])],1)],1),a("b-tbody",t._l(t.listData,(function(e,s){return a("b-tr",{key:s},[a("b-td",[a("span",{staticClass:"mb-0 font-weight-medium text-black-100 hp-text-color-dark-0"},[t._v(" "+t._s(e.id)+" ")])]),a("b-td",[a("span",{staticClass:"mb-0 text-black-80 hp-text-color-dark-30"},[t._v(" "+t._s(e.email)+" ")])]),a("b-td",[a("span",{staticClass:"mb-0 text-black-80 hp-text-color-dark-30"},[t._v(" "+t._s(e.telegram)+" ")])]),a("b-td",[a("span",{staticClass:"mb-0 text-black-80 hp-text-color-dark-30"},[t._v(" "+t._s(e.binance_pay_id)+" ")])]),a("b-td",[a("span",{staticClass:"mb-0 text-black-80 hp-text-color-dark-30"},[t._v(" "+t._s(e.binance_pay_id)+" ")])]),a("b-td",[a("span",{staticClass:"mb-0 text-black-80 hp-text-color-dark-30"},[a("b-button",{staticClass:"btn-ghost",attrs:{variant:"primary"},on:{click:function(a){return t.approve(e.id)}}},[t._v(" APPROVE")])],1)]),a("b-td",[a("span",{staticClass:"mb-0 text-black-80 hp-text-color-dark-30"},[a("b-button",{staticClass:"btn-ghost",attrs:{variant:"danger"},on:{click:function(a){return t.reject(e.id)}}},[t._v(" REJECT")])],1)])],1)})),1)],1),a("ul",{staticClass:"pagination b-pagination ml-5",attrs:{role:"menubar","aria-disabled":"false","aria-label":"Pagination"}},[a("li",{staticClass:"page-item",attrs:{role:"presentation","aria-hidden":"true"}},[a("span",{staticClass:"page-link",attrs:{role:"menuitem","aria-label":"Go to previous page","aria-disabled":"true"},on:{click:t.prevPage}},[t._v("⏪")])]),a("li",{staticClass:"page-item",attrs:{role:"presentation","aria-hidden":"true"}},[t._v("page"+t._s(t.pageData))]),a("li",{staticClass:"page-item",attrs:{role:"presentation","aria-hidden":"true"}},[a("span",{staticClass:"page-link",attrs:{role:"menuitem","aria-label":"Go to next page","aria-disabled":"true"},on:{click:t.nextPage}},[t._v("⏩")])])])],1)])],1)},o=[],l=e("c7eb"),p=e("1da1"),b=e("5530"),d=(e("4de4"),e("d3b7"),e("caad"),e("2532"),e("205f")),u=e("e98b"),h=e("1eba"),g=e("0bd8"),v=e("a247"),m=e("2a2e"),x=e("6cf6"),f=e("0809"),_=e("1947"),k=e("8361"),w=e("4797"),C=e("aa59"),j=e("26d2"),B=e("5fda"),O=e("2f62"),D={data:function(){return{selected:"Buy",email:"",modal:!1,states:"searchData",details:{},options:[{value:"Buy",text:"Buy"},{value:"Sell",text:"Sell"}],errorfind:!1}},watch:{selected:function(t,a){console.log("Selected option changed from",a,"to",t),"Buy"==t&&this.getListBuy(),"Sell"==t&&this.getListSell()}},computed:Object(b["a"])(Object(b["a"])({},Object(O["c"])("airdroppendindgStore",["pageData","listData","stateData"])),{},{filterStates:function(){var t=this;return this.states.filter((function(a){return a.title.toLowerCase().includes(t.state.toLowerCase())}))}}),methods:Object(b["a"])(Object(b["a"])({},Object(O["b"])("airdroppendindgStore",["getList","getPrevData","getNextData","approveAirdrop","rejectAirdrop"])),{},{prevPage:function(){var t=this;return Object(p["a"])(Object(l["a"])().mark((function a(){return Object(l["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.getPrevData();case 2:case"end":return a.stop()}}),a)})))()},nextPage:function(){var t=this;return Object(p["a"])(Object(l["a"])().mark((function a(){return Object(l["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.getNextData();case 2:case"end":return a.stop()}}),a)})))()},approve:function(t){var a=this;return Object(p["a"])(Object(l["a"])().mark((function e(){return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.approveAirdrop(t);case 2:return e.next=4,a.getList("");case 4:case"end":return e.stop()}}),e)})))()},reject:function(t){var a=this;return Object(p["a"])(Object(l["a"])().mark((function e(){return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.rejectAirdrop(t);case 2:return e.next=4,a.getList("");case 4:case"end":return e.stop()}}),e)})))()}}),mounted:function(){var t=this;return Object(p["a"])(Object(l["a"])().mark((function a(){return Object(l["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.getList("");case 2:case"end":return a.stop()}}),a)})))()},components:{BRow:n["a"],BCol:c["a"],BCard:d["a"],BBadge:u["a"],BTableSimple:h["a"],BThead:g["a"],BTbody:v["a"],BTr:m["a"],BTh:x["a"],BTd:f["a"],BButton:_["a"],BFormSelect:k["a"],BFormInput:w["a"],BLink:C["a"],BPagination:j["a"],BAlert:B["a"]}},y=D,P=e("2877"),L=Object(P["a"])(y,i,o,!1,null,null,null),T=L.exports,A={components:{BRow:n["a"],BCol:c["a"],TableListUser:T}},S=A,R=Object(P["a"])(S,s,r,!1,null,null,null);a["default"]=R.exports}}]);
//# sourceMappingURL=chunk-2d0ddff1.0be5e31e.js.map