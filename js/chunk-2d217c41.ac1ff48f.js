(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217c41"],{c7b9:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t._self._c;return a("b-row",{staticClass:"mb-32"},[a("b-col",{attrs:{cols:"12"}},[a("b-row",[a("b-col",{staticClass:"flex-grow-1 overflow-hidden"},[a("b-row",[a("b-col",{staticClass:"mb-32",attrs:{cols:"12"}},[a("h1",{staticClass:"hp-mb-0"}),a("h1",{staticClass:"hp-mb-0"},[t._v("Setting Airdrop")])]),a("b-col",t._l(t.settingData,(function(e){return a("div",[a("b-form",{staticClass:"mb-5"},[a("h3",[t._v("Type Wallet = "+t._s(e.type)+" wallet")]),a("h5",[t._v("Address = "+t._s(e.address))]),a("h5",[t._v("Balance BNB = "+t._s(e.bnb_balance.toLocaleString("id-ID"))+" BNB")]),a("h5",[t._v("Balance USDT = $"+t._s(e.usdt_balance.toLocaleString("id-ID"))+" USDT")]),e.bnb_balance<=.1&&"hot_binance"!=e.type?a("div",[a("b-alert",{attrs:{variant:"danger-2",show:""}},[a("b",[t._v("Balance BNB ")]),t._v("Not Enough for transaction, please deposit at least 0.1 BNB")])],1):t._e(),e.usdt_balance<=100&&"fee"!=e.type?a("div",[a("b-alert",{attrs:{variant:"danger",show:""}},[a("b",[t._v("Balance USDT ")]),t._v(" Not Enough for transaction, please deposit at least $100 USDT ")])],1):t._e(),a("hr")])],1)})),0)],1)],1)],1)],1)],1)},s=[],r=e("c7eb"),o=e("1da1"),c=e("5530"),l=e("a15b"),i=e("b28b"),b=e("11de"),u=e("8226"),d=e("4797"),p=e("1947"),_=e("5e12"),h=e("5fda"),B=e("2f62"),v={data:function(){return{input_data:!1,errorInput:!1}},components:{BRow:l["a"],BCol:i["a"],BForm:b["a"],BFormGroup:u["a"],BFormInput:d["a"],BButton:p["a"],BInputGroup:_["a"],BAlert:h["a"]},computed:Object(c["a"])({},Object(B["c"])("settingsAdminWalletStore",["settingData","stateData"])),methods:Object(c["a"])({},Object(B["b"])("settingsAdminWalletStore",["getSettings"])),mounted:function(){var t=this;return Object(o["a"])(Object(r["a"])().mark((function a(){return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.getSettings();case 2:case"end":return a.stop()}}),a)})))()}},w=v,f=e("2877"),g=Object(f["a"])(w,n,s,!1,null,null,null);a["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d217c41.ac1ff48f.js.map