(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main"],{4385:function(n,t,e){"use strict";e.r(t);var o=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("div",{staticClass:"navbar"},[o("b-navbar",{attrs:{toggleable:"sm",variant:"faded"}},[o("b-navbar-brand",{on:{click:n.gotoHome}},[o("img",{staticClass:"navbar-logo",attrs:{src:e("b97b"),alt:"redlogo"}})]),o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",{staticClass:"ml-auto navbar-links"},[o("b-nav-item",{staticClass:"nav-element",on:{click:n.gotoAnnouncements}},[n._v("Announcements")]),o("b-nav-item",{staticClass:"nav-element",on:{click:n.gotoEvents}},[n._v("Events")]),o("b-nav-item",{staticClass:"nav-element",on:{click:n.gotoAbout}},[n._v("About Us")]),o("b-nav-item",{staticClass:"nav-element",on:{click:n.gotoSponsors}},[n._v("Sponsors")]),o("b-nav-item",{staticClass:"nav-element",on:{click:n.gotoContact}},[n._v("Contact")])],1)],1)],1)],1),o("keep-alive",[o("transition",{attrs:{name:n.getTransition}},[o(n.currentComponent,{tag:"component"})],1)],1)],1)},s=[],c={name:"mainPage",components:{"main-announcements":function(){return e.e("chunk-72c3d514").then(e.bind(null,"245b"))},"main-events":function(){return e.e("chunk-3357c4f6").then(e.bind(null,"19b8"))},"main-about":function(){return e.e("chunk-38e66305").then(e.bind(null,"84ba"))},"main-sponsors":function(){return e.e("chunk-06c2bb24").then(e.bind(null,"38f9"))},"main-contact":function(){return e.e("chunk-13017fee").then(e.bind(null,"371a"))}},data:function(){return{currentComponent:"main-events",currentPos:0,targetPos:0,transitionName:""}},methods:{gotoHome:function(){this.$router.push("/")},gotoAnnouncements:function(){"main-announcements"!==this.currentComponent&&(this.currentPos=this.checkCurrentPos(),this.targetPos=0,this.currentComponent="main-announcements")},gotoEvents:function(){"main-events"!==this.currentComponent&&(this.currentPos=this.checkCurrentPos(),this.targetPos=0,this.currentComponent="main-events")},gotoAbout:function(){"main-about"!==this.currentComponent&&(this.currentPos=this.checkCurrentPos(),this.targetPos=1,this.currentComponent="main-about")},gotoSponsors:function(){"main-sponsors"!==this.currentComponent&&(this.currentPos=this.checkCurrentPos(),this.targetPos=2,this.currentComponent="main-sponsors")},gotoContact:function(){"main-contact"!==this.currentComponent&&(this.currentPos=this.checkCurrentPos(),this.targetPos=3,this.currentComponent="main-contact")},checkCurrentPos:function(){return"main-events"===this.currentComponent?0:"main-about"===this.currentComponent?1:"main-sponsors"===this.currentComponent?2:"main-contact"===this.currentComponent?3:-1}},computed:{getTransition:function(){return this.transitionName=this.currentPos<this.targetPos?"slide-right":"slide-left",this.transitionName}}},a=c,r=(e("b49c"),e("2877")),i=Object(r["a"])(a,o,s,!1,null,null,null);t["default"]=i.exports},"4b49":function(n,t,e){},b49c:function(n,t,e){"use strict";var o=e("4b49"),s=e.n(o);s.a},b97b:function(n,t){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=main.0993cd7b.js.map