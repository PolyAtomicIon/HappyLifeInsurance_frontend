(function(e){function t(t){for(var s,r,i=t[0],l=t[1],c=t[2],u=0,f=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={app:0},o=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"3a5d":function(e,t,a){"use strict";a("6c24")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=o,e.exports=n,n.id="4678"},"553e":function(e,t,a){"use strict";a("b0b7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"app"}},[a("navigation-bar"),a("v-main",{staticClass:"grey lighten-4 "},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{staticClass:"child-view"})],1)],1),a("footer-section")],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"",color:"white",flat:""}},[a("v-container",{staticClass:"py-0 fill-height"},[e._l(e.links,(function(t,s){return a("v-btn",{key:s,attrs:{text:""},on:{click:function(a){return e.goToPage(t)}}},[e._v(" "+e._s(s)+" ")])})),a("v-spacer")],2)],1)},i=[],l={name:"App",data:function(){return{links:{Profile:"profile","Time Tracker":"time-tracker","Flex Status":"flex-status"}}},mounted:function(){},computed:{},components:{},methods:{goToPage:function(e){this.$router.push("/"+e)},goBack:function(){this.$router.go(-1)}}},c=l,d=a("2877"),u=a("6544"),f=a.n(u),p=a("40dc"),h=a("8336"),v=a("a523"),m=a("2fa4"),y=Object(d["a"])(c,r,i,!1,null,null,null),b=y.exports;f()(y,{VAppBar:p["a"],VBtn:h["a"],VContainer:v["a"],VSpacer:m["a"]});var g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{attrs:{color:"primary",padless:""}},[a("v-row",{attrs:{justify:"center","no-gutters":""}},[a("v-col",{staticClass:"primary lighten-2 py-1 text-center white--text",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),a("strong",[e._v("@HappyLife Insurance")])])],1)],1)},j=[],k={data:function(){return{links:["Home","About Us","GitHub"]}}},_=k,D=a("62ad"),C=a("553a"),O=a("0fd9"),$=Object(d["a"])(_,g,j,!1,null,"d0b0b4da",null),w=$.exports;f()($,{VCol:D["a"],VFooter:C["a"],VRow:O["a"]});var V={name:"App",components:{NavigationBar:b,FooterSection:w}},A=V,S=(a("e9d3"),a("7496")),x=a("f6c4"),P=Object(d["a"])(A,n,o,!1,null,"881d492a",null),T=P.exports;f()(P,{VApp:S["a"],VMain:x["a"]});var M=a("f309");s["a"].use(M["a"]);var E=new M["a"]({}),F=a("42cd"),z=(a("d1e78"),a("bc3a")),U=a.n(z),L=a("2106"),R=a.n(L),I=a("8c4f"),W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("v-sheet",{attrs:{rounded:"lg"}},[a("v-list",{attrs:{color:"transparent"}},[e._l(e.ProfileData,(function(t,s){return a("v-list-item",{key:t},[a("v-list-item-content",[a("v-list-item-title",[a("b",[e._v(e._s(t)+":")]),e._v(" "+e._s(e.Profile[s])+" ")])],1)],1)})),a("v-divider",{staticClass:"my-2"})],2)],1)],1),a("v-col",[a("v-sheet",{attrs:{"min-height":"70vh",rounded:"lg"}},[a("router-view",{staticClass:"child-view"})],1)],1)],1)],1)},Y=[],N=a("5530"),B=a("2f62"),H={name:"App",data:function(){return{ProfileData:{title:"Username",city:"City",phone:"Phone",email:"Email",numberOfCars:"Cars in wishlist #"}}},mounted:function(){this.fetchProfile();var e="title";console.log(this.Profile[e])},computed:Object(N["a"])({},Object(B["c"])(["Profile"])),components:{},methods:Object(N["a"])(Object(N["a"])({},Object(B["b"])(["fetchProfile"])),{},{goBack:function(){this.$router.go(-1)}})},J=H,q=a("ce7e"),Q=a("8860"),K=a("da13"),G=a("5d23"),X=a("8dd9"),Z=Object(d["a"])(J,W,Y,!1,null,null,null),ee=Z.exports;f()(Z,{VCol:D["a"],VContainer:v["a"],VDivider:q["a"],VList:Q["a"],VListItem:K["a"],VListItemContent:G["a"],VListItemTitle:G["c"],VRow:O["a"],VSheet:X["a"]});var te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[a("v-sheet",{staticClass:"calendar-control-buttons",attrs:{rounded:"lg"}},[a("v-list",{attrs:{color:"transparent"}},[e._l(e.ProfileData,(function(t,s){return a("v-list-item",{key:t},[a("v-list-item-content",[a("v-list-item-title",[a("b",[e._v(e._s(t)+":")]),e._v(" "+e._s(e.Profile[s])+" ")])],1)],1)})),a("v-divider",{staticClass:"my-2"}),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[a("v-text",{staticClass:"error--text"},[e._v(" Working ")])],1)],1)],1)],2)],1)],1),a("v-col",[a("v-sheet",{staticClass:"mb-10",attrs:{height:"70vh",rounded:"lg"}},[a("div",{staticClass:"calendar-container"},[a("calendar-app",{attrs:{types:e.types}})],1)])],1)],1)],1)},ae=[],se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ds-expand ds-calendar-app"},[a("v-app-bar",{staticClass:"ds-app-calendar-toolbar",attrs:{flat:"",color:"white","clipped-left":e.$vuetify.breakpoint.lgAndUp}},[e._t("today",[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-btn",e._g({staticClass:"ds-skinny-button",attrs:{depressed:"",icon:e.$vuetify.breakpoint.smAndDown},on:{click:e.setToday}},s),[e.$vuetify.breakpoint.mdAndUp?a("span",[e._v(e._s(e.labels.today))]):a("v-icon",[e._v(e._s(e.labels.todayIcon))])],1)]}}])},[a("span",[e._v(e._s(e.todayDate))])])],null,{setToday:e.setToday,todayDate:e.todayDate,calendar:e.calendar}),e._t("prev",[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-btn",e._g({staticClass:"ds-light-forecolor ds-skinny-button",attrs:{icon:"",depressed:""},on:{click:e.prev}},s),[a("v-icon",[e._v("keyboard_arrow_left")])],1)]}}])},[a("span",[e._v(e._s(e.prevLabel))])])],null,{prev:e.prev,prevLabel:e.prevLabel,calendar:e.calendar}),e._t("next",[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-btn",e._g({staticClass:"ds-light-forecolor ds-skinny-button",attrs:{icon:"",depressed:""},on:{click:e.next}},s),[a("v-icon",[e._v("keyboard_arrow_right")])],1)]}}])},[a("span",[e._v(e._s(e.nextLabel))])])],null,{next:e.next,nextLabel:e.nextLabel,calendar:e.calendar}),e._t("summary",[a("h1",{staticClass:"title ds-light-forecolor"},[e._v(e._s(e.summary))])],null,{summary:e.summary,calendar:e.calendar}),a("v-spacer"),e._t("view",[a("v-menu",{scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-btn",e._g({attrs:{text:""}},s),[e._v(" "+e._s(e.currentType.label)+" "),a("v-icon",[e._v("arrow_drop_down")])],1)]}}])},[a("v-list",e._l(e.types,(function(t){return a("v-list-item",{key:t.id,on:{click:function(a){e.currentType=t}}},[a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.label))])],1),a("v-list-item-action",[e._v(e._s(t.shortcut))])],1)})),1)],1)],null,{currentType:e.currentType,types:e.types})],2),a("v-main",{staticClass:"ds-expand my-0 py-0"},[a("v-container",{staticClass:"ds-calendar-container",attrs:{fluid:"","fill-height":""}},[a("ds-gestures",{on:{swipeleft:e.next,swiperight:e.prev}},[e.currentType.schedule?a("div",{staticClass:"ds-expand"},[e._t("calendarAppAgenda",[a("ds-agenda",e._g(e._b({attrs:{"read-only":e.readOnly,calendar:e.calendar},on:{add:e.add,edit:e.edit,"view-day":e.viewDay}},"ds-agenda",{$scopedSlots:e.$scopedSlots},!1),e.$listeners))],null,{$scopedSlots:e.$scopedSlots,$listeners:e.$listeners,calendar:e.calendar,add:e.add,edit:e.edit,viewDay:e.viewDay})],2):a("div",{staticClass:"ds-expand"},[e._t("calendarAppCalendar",[a("ds-calendar",e._g(e._b({ref:"calendar",attrs:{calendar:e.calendar,"read-only":e.readOnly},on:{add:e.add,"add-at":e.addAt,edit:e.edit,"view-day":e.viewDay,added:e.handleAdd,moved:e.handleMove,change:e.saveState}},"ds-calendar",{$scopedSlots:e.$scopedSlots},!1),e.$listeners))],null,{$scopedSlots:e.$scopedSlots,$listeners:e.$listeners,calendar:e.calendar,add:e.add,addAt:e.addAt,edit:e.edit,viewDay:e.viewDay,handleAdd:e.handleAdd,handleMove:e.handleMove})],2)]),e._t("calendarAppEventDialog",[a("ds-event-dialog",e._g(e._b({ref:"eventDialog",attrs:{calendar:e.calendar,"read-only":e.readOnly},on:{saved:e.eventFinish,actioned:e.eventFinish}},"ds-event-dialog",{$scopedSlots:e.$scopedSlots},!1),e.$listeners))],null,{$scopedSlots:e.$scopedSlots,$listeners:e.$listeners,calendar:e.calendar,eventFinish:e.eventFinish}),e._t("calendarAppOptions",[a("v-dialog",e._b({ref:"optionsDialog",attrs:{fullscreen:e.$dayspan.fullscreenDialogs},model:{value:e.optionsVisible,callback:function(t){e.optionsVisible=t},expression:"optionsVisible"}},"v-dialog",e.optionsDialog,!1),[a("v-list",[e._l(e.options,(function(t){return[a("v-list-item",{key:t.text,on:{click:function(a){return e.chooseOption(t)}}},[e._v(e._s(t.text))])]}))],2)],1)],null,{optionsVisible:e.optionsVisible,optionsDialog:e.optionsDialog,options:e.options,chooseOption:e.chooseOption}),e._t("calendarAppPrompt",[a("v-dialog",e._b({ref:"promptDialog",model:{value:e.promptVisible,callback:function(t){e.promptVisible=t},expression:"promptVisible"}},"v-dialog",e.promptDialog,!1),[a("v-card",[a("v-card-title",[e._v(e._s(e.promptQuestion))]),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.choosePrompt(!0)}}},[e._v(e._s(e.labels.promptConfirm))]),a("v-spacer"),a("v-btn",{attrs:{color:"secondary",text:""},on:{click:function(t){return e.choosePrompt(!1)}}},[e._v(e._s(e.labels.promptCancel))])],1)],1)],1)],null,{promptVisible:e.promptVisible,promptDialog:e.promptDialog,promptQuestion:e.promptQuestion,choosePrompt:e.choosePrompt}),e._t("containerInside",null,null,{events:e.events,calendar:e.calendar})],2)],1)],1)},ne=[],oe=(a("7db0"),a("c96a"),a("38cf"),a("159b"),a("9abd")),re={name:"dsCalendarApp",props:{events:{type:Array},navDrawer:{type:Boolean,default:!1},calendar:{type:oe["a"],default:function(){return oe["a"].months()}},readOnly:{type:Boolean,default:!1},types:{type:Array,default:function(){return this.$dsDefaults().types}},allowsAddToday:{type:Boolean,default:function(){return this.$dsDefaults().allowsAddToday}},formats:{validate:function(e){return this.$dsValidate(e,"formats")},default:function(){return this.$dsDefaults().formats}},labels:{validate:function(e){return this.$dsValidate(e,"labels")},default:function(){return this.$dsDefaults().labels}},styles:{validate:function(e){return this.$dsValidate(e,"styles")},default:function(){return this.$dsDefaults().styles}},optionsDialog:{validate:function(e){return this.$dsValidate(e,"optionsDialog")},default:function(){return this.$dsDefaults().optionsDialog}},promptDialog:{validate:function(e){return this.$dsValidate(e,"promptDialog")},default:function(){return this.$dsDefaults().promptDialog}}},data:function(e){return{drawer:!1,optionsVisible:!1,storeKey:"dayspanState",options:[],promptVisible:!1,promptQuestion:"",promptCallback:null,defaultEvents:[{data:{title:"Weekly Meeting",color:"#3F51B5"},schedule:{dayOfWeek:[oe["u"].MONDAY],times:[9],duration:30,durationUnit:"minutes"}},{data:{title:"First Weekend",color:"#4CAF50"},schedule:{weekspanOfMonth:[0],dayOfWeek:[oe["u"].FRIDAY],duration:3,durationUnit:"days"}},{data:{title:"End of Month",color:"#000000"},schedule:{lastDayOfMonth:[1],duration:1,durationUnit:"hours"}},{data:{title:"Mother's Day",color:"#2196F3",calendar:"US Holidays"},schedule:{month:[oe["i"].MAY],dayOfWeek:[oe["u"].SUNDAY],weekspanOfMonth:[1]}},{data:{title:"New Year's Day",color:"#2196F3",calendar:"US Holidays"},schedule:{month:[oe["i"].JANUARY],dayOfMonth:[1]}},{data:{title:"Inauguration Day",color:"#2196F3",calendar:"US Holidays"},schedule:{month:[oe["i"].JANUARY],dayOfMonth:[20]}},{data:{title:"Martin Luther King, Jr. Day",color:"#2196F3",calendar:"US Holidays"},schedule:{month:[oe["i"].JANUARY],dayOfWeek:[oe["u"].MONDAY],weekspanOfMonth:[2]}},{data:{title:"George Washington's Birthday",color:"#2196F3",calendar:"US Holidays"},schedule:{month:[oe["i"].FEBRUARY],dayOfWeek:[oe["u"].MONDAY],weekspanOfMonth:[2]}},{data:{title:"Memorial Day",color:"#2196F3",calendar:"US Holidays"},schedule:{month:[oe["i"].MAY],dayOfWeek:[oe["u"].MONDAY],lastWeekspanOfMonth:[0]}},{data:{title:"Independence Day",color:"#2196F3",calendar:"US Holidays"},schedule:{month:[oe["i"].JULY],dayOfMonth:[4]}},{data:{title:"Labor Day",color:"#2196F3",calendar:"US Holidays"},schedule:{month:[oe["i"].SEPTEMBER],dayOfWeek:[oe["u"].MONDAY],lastWeekspanOfMonth:[0]}},{data:{title:"Columbus Day",color:"#2196F3",calendar:"US Holidays"},schedule:{month:[oe["i"].OCTOBER],dayOfWeek:[oe["u"].MONDAY],weekspanOfMonth:[1]}},{data:{title:"Veterans Day",color:"#2196F3",calendar:"US Holidays"},schedule:{month:[oe["i"].NOVEMBER],dayOfMonth:[11]}},{data:{title:"Thanksgiving Day",color:"#2196F3",calendar:"US Holidays"},schedule:{month:[oe["i"].NOVEMBER],dayOfWeek:[oe["u"].THURSDAY],weekspanOfMonth:[3]}},{data:{title:"Christmas Day",color:"#2196F3",calendar:"US Holidays"},schedule:{month:[oe["i"].DECEMBER],dayOfMonth:[25]}}]}},watch:{navDrawer:function(e){this.drawer=e},events:"applyEvents",calendar:"applyEvents"},computed:{currentType:{get:function(){var e=this;return this.types.find((function(t){return t.type===e.calendar.type&&t.size===e.calendar.size}))||this.types[0]},set:function(e){this.rebuild(void 0,!0,e)}},summary:function(){var e=this.$vuetify.breakpoint.xs;if(e)return this.calendar.start.format(this.formats.xs);var t=this.$vuetify.breakpoint.mdAndUp;return this.calendar.summary(!1,!t,!1,!t)},todayDate:function(){return this.$dayspan.today.format(this.formats.today)},nextLabel:function(){return this.labels.next(this.currentType)},prevLabel:function(){return this.labels.prev(this.currentType)},toolbarStyle:function(){var e=this.$vuetify.breakpoint.lgAndUp;return e?this.styles.toolbar.large:this.styles.toolbar.small},hasCreatePopover:function(){return!!this.$scopedSlots.eventCreatePopover},canAddDay:function(){return this.$dayspan.features.addDay&&!this.readOnly&&!this.$dayspan.readOnly},canAddTime:function(){return this.$dayspan.features.addTime&&!this.readOnly&&!this.$dayspan.readOnly}},mounted:function(){var e=this;this.$dayspan.promptOpen||(this.$dayspan.promptOpen=function(t,a){e.promptVisible=!1,e.promptQuestion=t,e.promptCallback=a,e.promptVisible=!0}),this.loadState()},methods:{setState:function(e){e.eventSorter=e.listTimes?oe["q"].List([oe["q"].FullDay,oe["q"].Start]):oe["q"].Start,this.calendar.set(e),this.triggerChange()},applyEvents:function(){this.events&&(this.calendar.removeEvents(),this.calendar.addEvents(this.events))},isType:function(e,t){var a=this.calendar;return a.type===e.type&&a.size===e.size&&(!t||a.span.matchesDay(t))},rebuild:function(e,t,a){var s=a||this.currentType||this.types[2];if(!this.isType(s,e)||t){var n={type:s.type,size:s.size,around:e,eventsOutside:!0,preferToday:!1,listTimes:s.listTimes,updateRows:s.updateRows,updateColumns:s.listTimes,fill:!s.listTimes,otherwiseFocus:s.focus,repeatCovers:s.repeat};this.setState(n)}},next:function(){this.calendar.unselect().next(),this.triggerChange()},prev:function(){this.calendar.unselect().prev(),this.triggerChange()},setToday:function(){this.rebuild(this.$dayspan.today,!0,this.types[1])},viewDay:function(e){this.rebuild(e,!1,this.types[0])},edit:function(e){var t=this.$refs.eventDialog;t.edit(e)},editPlaceholder:function(e){var t=e.calendarEvent,a=e.details,s=this.$refs.eventDialog,n=this.$refs.calendar;s.addPlaceholder(t,a),s.$once("close",n.clearPlaceholder)},add:function(e){if(this.currentType!=this.types[0]){if(this.canAddDay){var t=this.$refs.eventDialog,a=this.$refs.calendar,s=!this.hasCreatePopover;a.addPlaceholder(e,!0,s),s&&(t.add(e),t.$once("close",a.clearPlaceholder))}}else this.rebuild(e,!0,this.types[1])},addAt:function(e){if(this.currentType!=this.types[0]){if(this.canAddTime){var t=this.$refs.eventDialog,a=this.$refs.calendar,s=!this.hasCreatePopover,n=e.day.withHour(e.hour);a.addPlaceholder(n,!1,s),s&&(t.addAt(e.day,e.hour),t.$once("close",a.clearPlaceholder))}}else this.rebuild(e,!0,this.types[1])},addToday:function(){if(this.canAddDay){var e=this.$refs.eventDialog,t=this.$refs.calendar,a=!this.hasCreatePopover||!t,s=this.$dayspan.today;if(!this.calendar.filled.matchesDay(s)){var n=this.calendar.days[0],o=this.calendar.days[this.calendar.days.length-1],r=Math.abs(n.currentOffset),i=Math.abs(o.currentOffset);s=r<i?n:o}t&&t.addPlaceholder(s,!0,a),a&&(e.add(s),t&&e.$once("close",t.clearPlaceholder))}},handleAdd:function(e){if(this.currentType!=this.types[0]){var t=this.$refs.eventDialog,a=this.$refs.calendar;e.handled=!0,this.hasCreatePopover?a.placeholderForCreate=!0:(e.placeholder.fullDay?t.add(e.span.start,e.span.days(oe["j"].UP)):t.addSpan(e.span),t.$once("close",e.clearPlaceholder))}},handleMove:function(e){var t=this,a=e.calendarEvent,s=e.target,n=s.start,o=a.time.start,r=a.schedule,i=[];e.handled=!0;var l={cancel:function(){e.clearPlaceholder()},single:function(){a.move(n),t.eventsRefresh(),e.clearPlaceholder(),t.$emit("event-update",a.event)},instance:function(){a.move(n),t.eventsRefresh(),e.clearPlaceholder(),t.$emit("event-update",a.event)},duplicate:function(){r.setExcluded(n,!1),t.eventsRefresh(),e.clearPlaceholder(),t.$emit("event-update",a.event)},all:function(){r.moveTime(o.asTime(),n.asTime()),t.eventsRefresh(),e.clearPlaceholder(),t.$emit("event-update",a.event)}};i.push({text:this.labels.moveCancel,callback:l.cancel}),r.isSingleEvent()?(i.push({text:this.labels.moveSingleEvent,callback:l.single}),this.$dayspan.features.moveDuplicate&&i.push({text:this.labels.moveDuplicate,callback:l.duplicate})):(this.$dayspan.features.moveInstance&&i.push({text:this.labels.moveOccurrence,callback:l.instance}),this.$dayspan.features.moveDuplicate&&i.push({text:this.labels.moveDuplicate,callback:l.duplicate}),this.$dayspan.features.moveAll&&!r.isFullDay()&&n.sameDay(o)&&i.push({text:this.labels.moveAll,callback:l.all})),this.options=i,this.optionsVisible=!0},chooseOption:function(e){e&&e.callback(),this.optionsVisible=!1},choosePrompt:function(e){this.promptCallback(e),this.promptVisible=!1},eventFinish:function(e){this.triggerChange()},eventsRefresh:function(){this.calendar.refreshEvents(),this.triggerChange()},triggerChange:function(){this.saveState(),this.$emit("change",{calendar:this.calendar})},saveState:function(){var e=this.calendar.toInput(!0),t=JSON.stringify(e);localStorage.setItem(this.storeKey,t)},loadState:function(){var e=this,t={};try{var a=JSON.parse(localStorage.getItem(this.storeKey));a&&(t=a,t.preferToday=!1)}catch(n){console.log(n)}t.events&&t.events.length||(t.events=this.defaultEvents),t.events.forEach((function(t){var a=e.$dayspan.getDefaultEventDetails();t.data=s["a"].util.extend(a,t.data)})),this.setState(t)}}},ie=re,le=(a("3a5d"),a("b0af")),ce=a("99d9"),de=a("169a"),ue=a("132d"),fe=a("1800"),pe=a("e449"),he=a("3a2f"),ve=Object(d["a"])(ie,se,ne,!1,null,null,null),me=ve.exports;f()(ve,{VAppBar:p["a"],VBtn:h["a"],VCard:le["a"],VCardActions:ce["a"],VCardTitle:ce["c"],VContainer:v["a"],VDialog:de["a"],VIcon:ue["a"],VList:Q["a"],VListItem:K["a"],VListItemAction:fe["a"],VListItemContent:G["a"],VListItemTitle:G["c"],VMain:x["a"],VMenu:pe["a"],VSpacer:m["a"],VTooltip:he["a"]});var ye={data:function(){return{types:[{id:"M",label:"Edit past days",shortcut:"M",type:oe["t"].MONTH,size:1,focus:.4999,repeat:!0,listTimes:!1,updateRows:!0,schedule:!1},{id:"D",label:"Full Day",shortcut:"D",type:oe["t"].DAY,size:1,focus:.4999,repeat:!0,listTimes:!0,updateRows:!0,schedule:!1}],ProfileData:{title:"Username",city:"City",phone:"Phone",email:"Email",numberOfCars:"Cars in wishlist #"}}},computed:Object(N["a"])({},Object(B["c"])(["Profile"])),components:{CalendarApp:me}},be=ye,ge=(a("553e"),Object(d["a"])(be,te,ae,!1,null,"bd433ad8",null)),je=ge.exports;f()(ge,{VCol:D["a"],VContainer:v["a"],VDivider:q["a"],VList:Q["a"],VListItem:K["a"],VListItemContent:G["a"],VListItemTitle:G["c"],VRow:O["a"],VSheet:X["a"]});var ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container")},_e=[],De={data:function(){return{ecosystem:[]}},components:{}},Ce=De,Oe=Object(d["a"])(Ce,ke,_e,!1,null,null,null),$e=Oe.exports;f()(Oe,{VContainer:v["a"]});var we=[{path:"*",component:je},{path:"/",component:je},{path:"/profile",name:"profile",component:ee},{path:"/flex-status",name:"flex-status",component:$e},{path:"/time-tracker",name:"time-tracker",component:je}];s["a"].use(I["a"]),s["a"].use(R.a,U.a);var Ve=new I["a"]({mode:"history",routes:we}),Ae=Ve,Se={state:function(){return{Cars:[],Car:{},Wishlist:{}}},mutations:{setCars:function(e,t){console.log("setting Cars"),e.Cars=[];for(var a=0;a<t.length;a++)e.Cars.push(t[a]);console.log(e.Cars)},setCar:function(e,t){console.log("setting Car"),e.Car=t,console.log(e.Car.company)},setWishlist:function(e,t){console.log("setting wishlist"),e.Wishlist=t,console.log(e.Wishlist)}},actions:{fetchCars:function(e){var t=e.commit;U.a.get("http://localhost:8000/api/cars/").then((function(e){console.log(e.data),t("setCars",e.data["results"])}))},fetchMyCars:function(e){var t=e.commit;U.a.get("http://next.json-generator.com/api/json/get/VyCyeAXhY").then((function(e){console.log(e.data),t("setCars",e.data["my cars"])}))},fetchCar:function(e,t){var a=e.commit;console.log(t),U.a.get("http://localhost:8000/api/cars/"+t).then((function(e){console.log(e.data),a("setCar",e.data)}))},fetchWishlist:function(e){var t=e.commit;U.a.get("http://localhost:8000/api/cars/").then((function(e){console.log(e.data),t("setWishlist",e.data)}))}},getters:{cars:function(e){return e.Cars},car:function(e){return e.Car},wishlist:function(e){return e.Wishlist}}},xe={state:function(){return{Profile:{}}},mutations:{setProfile:function(e,t){console.log("setting profile"),e.Profile=t,console.log(e.Profile.title)}},actions:{fetchProfile:function(e,t){var a=e.commit;console.log(t),U.a.get("http://next.json-generator.com/api/json/get/4ki4LA73F").then((function(e){console.log(e.data["Profile"][0]),a("setProfile",e.data["Profile"][0])}))}},getters:{Profile:function(e){return e.Profile}}};s["a"].use(B["a"]);var Pe=new B["a"].Store({modules:{main:Se,ProfileModule:xe}});s["a"].config.productionTip=!1,s["a"].use(F["a"],{data:{features:{exclude:!0,include:!0,cancel:!0,move:!0,moveDuplicate:!0,moveInstance:!0,moveAll:!0,drag:!0,forecast:!0,addDay:!0,addTime:!0,hideOnMove:!0}},methods:{getDefaultEventColor:function(){return"#00d9ff"}},computed:{}}),s["a"].use(E),new s["a"]({vuetify:E,router:Ae,store:Pe,render:function(e){return e(T)}}).$mount("#app")},"6c24":function(e,t,a){},ab9e:function(e,t,a){},b0b7:function(e,t,a){},e9d3:function(e,t,a){"use strict";a("ab9e")}});
//# sourceMappingURL=app.20f1fb46.js.map