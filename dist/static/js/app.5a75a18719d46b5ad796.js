webpackJsonp([9],{"0dUj":function(n,t){},"34+y":function(n,t){},D0jh:function(n,t){},Hf3T:function(n,t){},"L/hj":function(n,t,e){"use strict";e.d(t,"d",function(){return d}),e.d(t,"e",function(){return m}),e.d(t,"c",function(){return f}),e.d(t,"b",function(){return U}),e.d(t,"a",function(){return b});var o=e("34+y"),i=(e.n(o),e("X+yh")),c=e.n(i),a=e("pFYg"),r=e.n(a),u=e("mvHQ"),s=e.n(u),l=e("lbHh"),h=e.n(l),d=function(n){var t=localStorage.getItem(n);try{t=JSON.parse(t)}catch(n){t=null}return t},m=function(n,t){var e=s()(t);localStorage.setItem(n,e)},f=function(n,t,e,o){var i=h.a.get("school")||"";"gzhu"===i?i="广大":"sysu"===i&&(i="中大");var a=i,u="object"===(void 0===o?"undefined":r()(o))?o.name:o;try{window._hmt.push(["_trackEvent",t,a,e,u]),n.$ga.event({eventCategory:t,eventAction:a,eventLabel:e,eventValue:u})}finally{"[empty]"===u?c()({message:"新功能抓紧研发中^_^",duration:3e3}):0===u.indexOf("http")?(c()({message:"页面跳转中...",duration:3e3}),setTimeout(function(){window.location.href=u},500)):n.$router.push(o)}},p=function(n){return"优"===n?4.5:"良"===n?3.5:"中"===n?2.5:"及格"===n?1.5:"不及格"===n?0:n<60?0:.1*(n-50)},A=function(n){return"A+"===n?4:"A"===n?4:"A-"===n?3.7:"B+"===n?3.3:"B"===n?3:"B-"===n?2.7:"C+"===n?2.3:"C"===n?2:"C-"===n?1.7:"D"===n?1.3:"D-"===n?1:"优"===n?3.85:"良"===n?3:"中"===n?2.15:"及格"===n?4/3:"不及格"===n?0:n>=90?4:n>=85&&n<90?3.7:n>=82&&n<85?3.3:n>=78&&n<82?3:n>=75&&n<78?2.7:n>=71&&n<75?2.3:n>=66&&n<71?2:n>=62&&n<66?1.7:61===parseInt(n)?1.3:60===parseInt(n)?1:0},v=function(n){var t=0;return"通过"===(n=n.replace("%",""))||"P"===n?t=3:"不通过"===n||"F"===n?t=0:"优秀"===n?t=4:"良好"===n?t=3.7:"中等"===n?t=2.7:"及格"===n?t=1.7:"不及格"===n?t=0:n<=20||"A"===n?t=4:n>20&&n<=35||"B+"===n?t=3.7:n>35&&n<=50||"B"===n?t=3.3:n>50&&n<=60||"B-"===n?t=3:n>60&&n<=70||"C+"===n?t=2.7:n>70&&n<=80||"C"===n?t=2.3:n>80&&n<=90||"C-"===n?t=2:(n>90||"D"===n)&&(t=1.7),t},U=function(n,t){if(n.length<=0)return"?";t="standardGP"===t?p:"gdufsGP"===t?A:"scutGP"===t?v:p;var e=0,o=0;n.forEach(function(n){n.point||(n.point=t(n.score)),e+=parseFloat(n.point*n.credit),o+=parseFloat(n.credit)});var i=(e/o).toFixed(2);return isNaN(i)?"?":i},b=function(n){return"?"===n?"-":parseFloat(n)<1?"试卷的打开方式不对吗？":n<1.5?"这都不是事儿~！":n<2?"绝地反击的节奏！":n<2.5?"一定是试题太难了！":n<3?"加把劲儿啊骚年!":n<3.5?"下一次拿个超神！":n<4?"哎哟，溜得很嘛！":n<4.5?"真学霸不解释！":n<5?"学神你秒杀众生了！":"完美！"}},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("f1Vh");var o=e("ZQVe"),i=e.n(o),c=(e("ULTG"),e("oobK")),a=e.n(c),r=(e("0dUj"),e("IqSH")),u=e.n(r),s=(e("swY8"),e("gAYL")),l=e.n(s),h=(e("XDqQ"),e("Axha")),d=e.n(h),m=(e("y+mr"),e("3JdW")),f=e.n(m),p=e("/5sW"),A=e("AYPi"),v=e.n(A),U=e("L/hj"),b={props:{school:String},components:{Header:d.a},methods:{onClick:function(){Object(U.c)(this,"LOGO","哪有",{name:"home"})}}},R={render:function(){var n=this.$createElement,t=this._self._c||n;return t("mt-header",{attrs:{title:""}},[t("img",{staticClass:"logo",attrs:{slot:"left",src:e("iQH9")},on:{click:this.onClick},slot:"left"}),this._v(" "),t("div",{staticClass:"school",attrs:{slot:"right"},slot:"right"},[t("img",{staticClass:"position",attrs:{src:e("eF0C")}}),this._v(" "),t("span",[this._v(this._s(this.school))])])])},staticRenderFns:[]};var g=e("VU/8")(b,R,!1,function(n){e("zreo"),e("oVgj")},"data-v-20f6869a",null).exports,k={props:{links:Array},methods:{onClick:function(n){Object(U.c)(this,"友情链接",n.name,n.link)}}},y={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"copyright"},[e("div",{staticClass:"links"},[n._l(n.links,function(t,o){return[e("div",{key:t.name,staticClass:"link",on:{click:function(e){n.onClick(t)}}},[n._v(n._s(t.name))]),o!==n.links.length-1?[n._v("⋅")]:n._e()]})],2),n._v(" "),e("span",[n._v("© 「哪有」校园服务平台 CTSTUDIO ALL RIGHTS RESERVED.")]),n._v(" "),e("div",{staticClass:"blank"})])},staticRenderFns:[]};var N={name:"App",components:{TopBar:g,CopyRight:e("VU/8")(k,y,!1,function(n){e("oP5J")},"data-v-5d153a51",null).exports},data:function(){return{school:"",links:[]}},methods:{syncData:function(n){this.school=n.school,this.links=n.links}}},Y={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("top-bar",{attrs:{school:this.school}}),this._v(" "),t("router-view",{on:{data:this.syncData}}),this._v(" "),t("copy-right",{attrs:{links:this.links}})],1)},staticRenderFns:[]},G=e("VU/8")(N,Y,!1,null,null,null).exports,j=e("/ocq");p.default.use(j.a);var T=new j.a({routes:[{path:"/",name:"home",component:function(n){return Promise.all([e.e(0),e.e(2)]).then(function(){return n(e("I2Tb"))}.bind(null,e)).catch(e.oe)}},{path:"/ucenter",name:"ucenter",component:function(n){return Promise.all([e.e(0),e.e(1)]).then(function(){return n(e("gXZ2"))}.bind(null,e)).catch(e.oe)}},{path:"/schedule",name:"schedule",component:function(n){return Promise.all([e.e(0),e.e(3)]).then(function(){return n(e("eJ4z"))}.bind(null,e)).catch(e.oe)}},{path:"/score",name:"score",component:function(n){return Promise.all([e.e(0),e.e(7)]).then(function(){return n(e("XqWb"))}.bind(null,e)).catch(e.oe)}},{path:"/teacher",name:"teacher",component:function(n){return Promise.all([e.e(0),e.e(5)]).then(function(){return n(e("XKma"))}.bind(null,e)).catch(e.oe)}},{path:"/error/:message",name:"error",component:function(n){return e.e(6).then(function(){return n(e("KbSx"))}.bind(null,e)).catch(e.oe)}},{path:"/bug",name:"bug",component:function(n){return e.e(4).then(function(){return n(e("Nl7k"))}.bind(null,e)).catch(e.oe)}}]}),Z=e("mtWM"),C=e.n(Z);e("D0jh"),e("Hf3T");p.default.component(f.a.name,f.a),p.default.component(d.a.name,d.a),p.default.component(l.a.name,l.a),p.default.component(u.a.name,u.a),p.default.component(a.a.name,a.a),p.default.component(i.a.name,i.a),p.default.use(v.a,{id:"UA-119129701-1",router:T}),p.default.config.productionTip=!1,C.a.defaults.baseURL="/api",C.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",C.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",new p.default({el:"#app",router:T,render:function(n){return n(G)}})},ULTG:function(n,t){},XDqQ:function(n,t){},eF0C:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAuCAYAAABeUotNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iQjE1N0Y5OEZGRUZDRkFFMEU3NzZDNzRBOUFBOTRFODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTRERDU0ODdBNTk1MTFFNTk4NDNENTk0M0M3MkU3Q0UiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTRERDU0ODZBNTk1MTFFNTk4NDNENTk0M0M3MkU3Q0UiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZmU0N2ViNi01YmZmLTRkMTUtYjczNS1lNTYxODdiZjU5YmYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDowYzcyZTVjMy1lMTE4LTExNzgtODdkYy04NDhmNDExZWMxN2MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6fOYGlAAAClklEQVR42syZz0tUURTHz4ROZkhJYyExhbloFGrhaFbMpllWQn+Fu4gikDY1QW1bBNq/4d5fYFKiLvoB4iKijCZLzZmhxB/V63t450HIJPfde+4wBz4wA/Pe+8z33Xe597xEEATkUAfBFXADXAKnwRFQBh/BSzAKpsC2y4WIRS1oAIOgGJjVV3AHJC2vZyV6FrwO7IqPy9RCtA+sB271HfTHFU3EGKMZMCtj0LV4DF8ES6YHmIo2ggVwnvTqLciCXZMfHzA86S1lSa5zcl61RJtkqjlO+vVNprQtjUSve5IkOe+A1q2/Rn7rqpZo1rNor5boKc+iaa2HKSD/ldBItOxZsqx16z95Fl3WEl3xLLqhJfrMs+hTrYcpCT6Adg+SX0CHyaLaJNEd8MhTmo9NV/6mqyf+Qy9Av6LkvGxffmuunv6Au8ppDplKxhHlmgHjSpLTsuEjH6JcD5VEY58nrqhGqpzmpG9RjVStjrcRdUnVKk1bUZdUre+GrahNqs9t03QRtUmn4DKwXUQ51YlapOkqGielguN1nEVNUnVOU0PUJK2CwjVURPdLdUYjTS3R/VJ7oLXU0hKtlqpamuGm3bJVXYXcnoZtXvHcRiv8k6ATnJH9DTe2ToA20AoOUdjc5b1Vyz/Hcd/zhyyOK2ATrAuroCh7MeadfDfeivDFciAPLoAecIxqUyz/CsyBMQrfqOzsvfXdYARUgvqpEhiOXk5wojfh+wQ0UH3WL3CbRblTcZTqu0o8Pd0j17dq/hO9H43RjIzRUp2NUXbqqjY9NUlTgJ/6yxS+CUnVKLk18EYaHZPy1G/F6ZRwz6lb5tG0zKspmUMjmuW3h2WKi1pBP+XzpnTtIljqM4UtzfdgUfpQ/62/AgwAqCIDM/eJ3UAAAAAASUVORK5CYII="},f1Vh:function(n,t){},iQH9:function(n,t,e){n.exports=e.p+"static/img/logo.077ed3d.png"},joTY:function(n,t){},lrMw:function(n,t){},oP5J:function(n,t){},oVgj:function(n,t){},swY8:function(n,t){},"y+mr":function(n,t){},zreo:function(n,t){}},["NHnr"]);