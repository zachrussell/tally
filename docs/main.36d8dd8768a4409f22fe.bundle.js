webpackJsonp([1],{"+h1B":function(n,l,t){"use strict";var e=t("/oeL"),u=t("aR8+"),o=t("wQAS"),a=t("q4dy"),r=t("qbdv"),i=t("fc+i"),s=t("f9zQ"),c=t("fL27"),d=t("bm2B"),p=t("EyWH"),g=t("C94B");t.d(l,"a",function(){return _});var _=e.b(u.a,[o.a],function(n){return e.c([e.d(512,e.e,e.f,[[8,[a.a]],[3,e.e],e.g]),e.d(5120,e.h,e.i,[[3,e.h]]),e.d(4608,r.a,r.b,[e.h]),e.d(4608,e.j,e.j,[]),e.d(5120,e.k,e.l,[]),e.d(5120,e.m,e.n,[]),e.d(5120,e.o,e.p,[]),e.d(4608,i.b,i.c,[r.c]),e.d(6144,e.q,null,[i.b]),e.d(4608,i.d,u.b,[]),e.d(5120,i.e,function(n,l,t,e){return[new i.f(n),new i.g(l),new i.h(t,e)]},[r.c,r.c,r.c,i.d]),e.d(4608,i.i,i.i,[i.e,e.r]),e.d(135680,i.j,i.j,[r.c]),e.d(4608,i.k,i.k,[i.i,i.j]),e.d(5120,s.a,c.a,[]),e.d(5120,s.b,c.b,[]),e.d(4608,s.c,c.c,[s.a,s.b]),e.d(5120,e.s,c.d,[i.k,s.c,e.r]),e.d(6144,i.l,null,[i.j]),e.d(4608,e.t,e.t,[e.r]),e.d(4608,i.m,i.m,[r.c]),e.d(4608,i.n,i.n,[r.c]),e.d(4608,d.a,d.a,[]),e.d(4608,p.a,c.e,[e.s]),e.d(4608,g.a,g.a,[]),e.d(512,r.d,r.d,[]),e.d(1024,e.u,i.o,[]),e.d(1024,e.v,function(n,l){return[i.p(n,l)]},[[2,i.q],[2,e.w]]),e.d(512,e.x,e.x,[[2,e.v]]),e.d(131584,e.y,e.y,[e.r,e.z,e.A,e.u,e.e,e.x]),e.d(2048,e.B,null,[e.y]),e.d(512,e.C,e.C,[e.B]),e.d(512,i.r,i.r,[[3,i.r]]),e.d(512,d.b,d.b,[]),e.d(512,d.c,d.c,[]),e.d(512,c.f,c.f,[]),e.d(512,u.a,u.a,[])])})},0:function(n,l,t){n.exports=t("cDNt")},"8Zrg":function(n,l,t){"use strict";var e=t("C94B");t.d(l,"a",function(){return u});var u=function(){function n(n){this._scoreService=n,this.player=null,this.position=null,this.leftSideOffset=null,this.rightSideOffset=null,this.menuShowing=!1}return n.prototype.ngOnInit=function(){},n.prototype.editScore=function(n){console.log("edit score for ",n)},n.prototype.calcRatio=function(){return this.player.wins+this.player.losses===0?0:this.player.wins/(this.player.wins+this.player.losses)},n.ctorParameters=function(){return[{type:e.a}]},n}()},C94B:function(n,l,t){"use strict";var e=t("aMZo"),u=t.n(e),o=t("ptmB"),a=t.n(o);t.d(l,"a",function(){return i});var r=a()("db"),i=function(){function n(){r.defaults({players:[]}).write(),r.defaults({teams:[]}).write()}return n.prototype.getPlayerOrTeamById=function(n){var l=r.get("players").find({id:n}).value();return void 0!==l?l:r.get("teams").find({id:n}).value()},n.prototype.getPlayers=function(){var n=r.get("players").value();return n.sort(this.scoreCalc),n},n.prototype.getTeams=function(){var n=r.get("teams").value();return n.sort(this.scoreCalc),n},n.prototype.createPlayer=function(n){var l={id:u()(),name:n,wins:0,losses:0};r.get("players").push(l).write()},n.prototype.createTeam=function(n,l){var t=r.get("players").find({id:n}).value(),e=r.get("players").find({id:l}).value(),o=t.name.split(" ")[0]+" & "+e.name.split(" ")[0],a={id:u()(),name:o,wins:0,losses:0};r.get("teams").push(a).write()},n.prototype.addWin=function(n){n.wins++,r.get("players").find({id:n.id}).assign(n).write()},n.prototype.addLoss=function(n){n.losses++,r.get("players").find({id:n.id}).assign(n).write()},n.prototype.scoreCalc=function(n,l){var t=parseFloat(n.wins),e=parseFloat(n.losses),u=0===t&&0===e?0:t/(t+e),o=parseFloat(l.wins),a=parseFloat(n.losses),r=0===o&&0===a?0:o/(o+a);return u>r?-1:u<r?1:0},n.ctorParameters=function(){return[]},n}()},CrZn:function(n,l,t){"use strict";function e(n){return i._17(0,[(n()(),i._18(0,null,null,10,"li",[],[[2,"first-place",null],[2,"last-place",null],[4,"background",null],[1,"id",0]],[[null,"panmove"],[null,"panend"]],function(n,l,t){var e=!0,u=n.component;if("panmove"===l){e=!1!==u.onSwipe(t)&&e}if("panend"===l){e=!1!==u.onSwipeEnd(t)&&e}return e},null,null)),(n()(),i._20(null,["\n\t\t\t"])),(n()(),i._18(0,null,null,1,"span",[["class","slide-button left-slide-button"]],null,null,null,null,null)),(n()(),i._20(null,["Win"])),(n()(),i._20(null,["\n\t\t\t"])),(n()(),i._18(0,null,null,1,"app-slot",[],null,null,null,s.a,s.b)),i._19(114688,null,0,c.a,[d.a],{player:[0,"player"],position:[1,"position"]},null),(n()(),i._20(null,["\n\t\t\t"])),(n()(),i._18(0,null,null,1,"span",[["class","slide-button right-slide-button"]],null,null,null,null,null)),(n()(),i._20(null,["Loss"])),(n()(),i._20(null,["\n\t\t"]))],function(n,l){n(l,6,0,l.context.$implicit,l.context.index+1)},function(n,l){var t=l.component;n(l,0,0,l.context.first,l.context.last,t.gradients[l.context.index],l.context.$implicit.id)})}function u(n){return i._17(0,[(n()(),i._18(0,null,null,1,"li",[],null,null,null,null,null)),(n()(),i._20(null,["\n\t\t\tYou have no players.\n\t\t"]))],null,null)}function o(n){return i._17(0,[(n()(),i._20(null,["\n"])),(n()(),i._18(0,null,null,19,"div",[["class","leaderboard"]],null,null,null,null,null)),(n()(),i._20(null,["\n  "])),(n()(),i._18(0,null,null,6,"h1",[],null,null,null,null,null)),(n()(),i._20(null,["\n    "])),(n()(),i._18(0,null,null,3,":svg:svg",[["class","ico-cup"]],null,null,null,null,null)),(n()(),i._20(null,["\n      "])),(n()(),i._18(0,null,null,0,":svg:use",[[":xlink:href","#cup"]],null,null,null,null,null)),(n()(),i._20(null,["\n    "])),(n()(),i._20(null,["\n    ","\n\t"])),(n()(),i._20(null,["\n\t"])),(n()(),i._20(null,["\n  "])),(n()(),i._18(0,null,null,7,"ul",[],null,null,null,null,null)),(n()(),i._20(null,["\n\t\t"])),(n()(),i._21(16777216,null,null,1,null,e)),i._19(802816,null,0,p.i,[i._10,i._11,i.m],{ngForOf:[0,"ngForOf"]},null),(n()(),i._20(null,["\n\t\t"])),(n()(),i._21(16777216,null,null,1,null,u)),i._19(16384,null,0,p.h,[i._10,i._11],{ngIf:[0,"ngIf"]},null),(n()(),i._20(null,["\n  "])),(n()(),i._20(null,["\n"])),(n()(),i._20(null,["\n"])),(n()(),i._18(0,null,null,6,":svg:svg",[["style","display: none;"]],null,null,null,null,null)),(n()(),i._20(null,["\n  "])),(n()(),i._18(0,null,null,3,":svg:symbol",[[":xml:space","preserve"],["enable-background","new 0 0 25 26"],["height","26px"],["id","cup"],["viewBox","0 0 25 26"],["width","25px"],["x","0px"],["y","0px"]],null,null,null,null,null)),(n()(),i._20(null,["\n"])),(n()(),i._18(0,null,null,0,":svg:path",[["d","M21.215,1.428c-0.744,0-1.438,0.213-2.024,0.579V0.865c0-0.478-0.394-0.865-0.88-0.865H6.69\n\tC6.204,0,5.81,0.387,5.81,0.865v1.142C5.224,1.641,4.53,1.428,3.785,1.428C1.698,1.428,0,3.097,0,5.148\n\tC0,7.2,1.698,8.869,3.785,8.869h1.453c0.315,0,0.572,0.252,0.572,0.562c0,0.311-0.257,0.563-0.572,0.563\n\tc-0.486,0-0.88,0.388-0.88,0.865c0,0.478,0.395,0.865,0.88,0.865c0.421,0,0.816-0.111,1.158-0.303\n\tc0.318,0.865,0.761,1.647,1.318,2.31c0.686,0.814,1.515,1.425,2.433,1.808c-0.04,0.487-0.154,1.349-0.481,2.191\n\tc-0.591,1.519-1.564,2.257-2.975,2.257H5.238c-0.486,0-0.88,0.388-0.88,0.865v4.283c0,0.478,0.395,0.865,0.88,0.865h14.525\n\tc0.485,0,0.88-0.388,0.88-0.865v-4.283c0-0.478-0.395-0.865-0.88-0.865h-1.452c-1.411,0-2.385-0.738-2.975-2.257\n\tc-0.328-0.843-0.441-1.704-0.482-2.191c0.918-0.383,1.748-0.993,2.434-1.808c0.557-0.663,1-1.445,1.318-2.31\n\tc0.342,0.192,0.736,0.303,1.157,0.303c0.486,0,0.88-0.387,0.88-0.865c0-0.478-0.394-0.865-0.88-0.865\n\tc-0.315,0-0.572-0.252-0.572-0.563c0-0.31,0.257-0.562,0.572-0.562h1.452C23.303,8.869,25,7.2,25,5.148\n\tC25,3.097,23.303,1.428,21.215,1.428z M5.238,7.138H3.785c-1.116,0-2.024-0.893-2.024-1.99c0-1.097,0.908-1.99,2.024-1.99\n\tc1.117,0,2.025,0.893,2.025,1.99v2.06C5.627,7.163,5.435,7.138,5.238,7.138z M18.883,21.717v2.553H6.118v-2.553H18.883\n\tL18.883,21.717z M13.673,18.301c0.248,0.65,0.566,1.214,0.947,1.686h-4.24c0.381-0.472,0.699-1.035,0.947-1.686\n\tc0.33-0.865,0.479-1.723,0.545-2.327c0.207,0.021,0.416,0.033,0.627,0.033c0.211,0,0.42-0.013,0.627-0.033\n\tC13.195,16.578,13.344,17.436,13.673,18.301z M12.5,14.276c-2.856,0-4.93-2.638-4.93-6.273V1.73h9.859v6.273\n\tC17.43,11.638,15.357,14.276,12.5,14.276z M21.215,7.138h-1.452c-0.197,0-0.39,0.024-0.572,0.07v-2.06\n\tc0-1.097,0.908-1.99,2.024-1.99c1.117,0,2.025,0.893,2.025,1.99C23.241,6.246,22.333,7.138,21.215,7.138z"],["fill","#F26856"]],null,null,null,null,null)),(n()(),i._20(null,["\n      "])),(n()(),i._20(null,["\n"]))],function(n,l){var t=l.component;n(l,15,0,t.players),n(l,18,0,0===t.players.length)},function(n,l){n(l,9,0,l.component.title)})}function a(n){return i._17(0,[(n()(),i._18(0,null,null,1,"app-leaderboard",[],null,null,null,o,f)),i._19(638976,null,0,g.a,[d.a],null,null)],function(n,l){n(l,1,0)},null)}var r=t("xCbM"),i=t("/oeL"),s=t("oqPJ"),c=t("8Zrg"),d=t("C94B"),p=t("qbdv"),g=t("yk7t");t.d(l,"b",function(){return f}),l.a=o;var _=[r.a],f=i._16({encapsulation:0,styles:_,data:{}});i._22("app-leaderboard",g.a,a,{title:"title",players:"players"},{playersChanged:"playersChanged"},[])},LsN1:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=['.counter[_ngcontent-%COMP%]{top:15px;left:15px;width:20px;height:20px;line-height:20px;color:#c24448;background:#fff;border-radius:20px;text-align:center}.counter[_ngcontent-%COMP%], mark[_ngcontent-%COMP%]{position:absolute;z-index:2}mark[_ngcontent-%COMP%]{top:0;left:0;width:100%;height:100%;padding:18px 10px 18px 50px;margin:0;background:none;color:#fff}mark[_ngcontent-%COMP%]:after, mark[_ngcontent-%COMP%]:before{content:"";position:absolute;z-index:1;bottom:-11px;left:-9px;transition:all .1s ease-in-out;opacity:0}mark[_ngcontent-%COMP%]:after{left:auto;right:-9px;border-left:none;border-right:10px solid transparent}small[_ngcontent-%COMP%]{position:relative;z-index:2;display:block;text-align:right}.button-container[_ngcontent-%COMP%]{float:right;z-index:999;position:relative;display:none}.showing[_ngcontent-%COMP%]{display:inline-block}.slide-menu[_ngcontent-%COMP%]{background-color:green;z-index:10}.side[_ngcontent-%COMP%]{z-index:100}']},YmSH:function(n,l,t){"use strict";var e=t("/oeL"),u=t("C94B");t.d(l,"a",function(){return o});var o=function(){function n(n){this._scoreService=n,this.SettingsChanged=new e.T,this.SettingsClosed=new e.T,this.players=[],this.playerName=""}return n.prototype.ngOnInit=function(){},n.prototype.close=function(){this.SettingsClosed.emit(!0)},n.prototype.addPlayer=function(n){this._scoreService.createPlayer(n),this.playerName="",this.SettingsChanged.emit(!0)},n.prototype.addTeam=function(n,l){this._scoreService.createTeam(n,l),this.SettingsChanged.emit(!0)},n.ctorParameters=function(){return[{type:u.a}]},n}()},"aR8+":function(n,l,t){"use strict";var e=t("fc+i");t.d(l,"b",function(){return o}),t.d(l,"a",function(){return a});var u=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function e(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),o=function(n){function l(){var l=null!==n&&n.apply(this,arguments)||this;return l.overrides={pan:{threshold:5},swipe:{velocity:.4,threshold:20,direction:31}},l}return u(l,n),l}(e.t),a=function(){function n(){}return n}()},cDNt:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("/oeL"),u=t("p5Ee"),o=t("+h1B"),a=t("fc+i");u.a.production&&t.i(e.a)(),t.i(a.a)().bootstrapModuleFactory(o.a)},hUKm:function(n,l,t){"use strict";function e(n){return i._17(0,[(n()(),i._18(0,null,null,3,"option",[],null,null,null,null,null)),i._19(147456,null,0,s.d,[i.M,i.L,[8,null]],{value:[0,"value"]},null),i._19(147456,null,0,s.e,[i.M,i.L,[8,null]],{value:[0,"value"]},null),(n()(),i._20(null,["",""]))],function(n,l){n(l,1,0,l.context.$implicit.id),n(l,2,0,l.context.$implicit.id)},function(n,l){n(l,3,0,l.context.$implicit.name)})}function u(n){return i._17(0,[(n()(),i._18(0,null,null,3,"option",[],null,null,null,null,null)),i._19(147456,null,0,s.d,[i.M,i.L,[8,null]],{value:[0,"value"]},null),i._19(147456,null,0,s.e,[i.M,i.L,[8,null]],{value:[0,"value"]},null),(n()(),i._20(null,["",""]))],function(n,l){n(l,1,0,l.context.$implicit.id),n(l,2,0,l.context.$implicit.id)},function(n,l){n(l,3,0,l.context.$implicit.name)})}function o(n){return i._17(0,[(n()(),i._18(0,null,null,49,"div",[["class","settings-modal"]],null,null,null,null,null)),(n()(),i._20(null,["\n\n  "])),(n()(),i._18(0,null,null,46,"div",[["class","settings-content"]],null,null,null,null,null)),(n()(),i._20(null,["\n\n    "])),(n()(),i._18(0,null,null,5,":svg:svg",[["class","close"],["fill","#e1e1e1"],["height","24"],["viewBox","0 0 24 24"],["width","24"],["xmlns","http://www.w3.org/2000/svg"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.close()&&e}return e},null,null)),(n()(),i._20(null,["\n        "])),(n()(),i._18(0,null,null,0,":svg:path",[["d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"]],null,null,null,null,null)),(n()(),i._20(null,["\n        "])),(n()(),i._18(0,null,null,0,":svg:path",[["d","M0 0h24v24H0z"],["fill","none"]],null,null,null,null,null)),(n()(),i._20(null,["\n    "])),(n()(),i._20(null,["\n\n    "])),(n()(),i._18(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._20(null,["Add Player"])),(n()(),i._20(null,["\n    "])),(n()(),i._18(0,null,null,5,"input",[["placeholder","Player Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0,u=n.component;if("input"===l){e=!1!==i._26(n,15)._handleInput(t.target.value)&&e}if("blur"===l){e=!1!==i._26(n,15).onTouched()&&e}if("compositionstart"===l){e=!1!==i._26(n,15)._compositionStart()&&e}if("compositionend"===l){e=!1!==i._26(n,15)._compositionEnd(t.target.value)&&e}if("ngModelChange"===l){e=!1!==(u.playerName=t)&&e}if("keyup.enter"===l){e=!1!==u.addPlayer(u.playerName)&&e}return e},null,null)),i._19(16384,null,0,s.f,[i.L,i.M,[2,s.g]],null,null),i._27(1024,null,s.h,function(n){return[n]},[s.f]),i._19(671744,null,0,s.i,[[8,null],[8,null],[8,null],[2,s.h]],{model:[0,"model"]},{update:"ngModelChange"}),i._27(2048,null,s.j,null,[s.i]),i._19(16384,null,0,s.k,[s.j],null,null),(n()(),i._20(null,["\n    "])),(n()(),i._18(0,null,null,0,"input",[["type","button"],["value","Add"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.addPlayer(u.playerName)&&e}return e},null,null)),(n()(),i._20(null,["\n    "])),(n()(),i._18(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._20(null,["\n\n    "])),(n()(),i._18(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._20(null,["Add Team"])),(n()(),i._20(null,["\n    "])),(n()(),i._18(0,[["playerOne",1]],null,4,"select",[["name","playerSelection"]],null,null,null,null,null)),(n()(),i._20(null,["\n      "])),(n()(),i._21(16777216,null,null,1,null,e)),i._19(802816,null,0,d.i,[i._10,i._11,i.m],{ngForOf:[0,"ngForOf"]},null),(n()(),i._20(null,["\n    "])),(n()(),i._20(null,["\n    "])),(n()(),i._18(0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),i._20(null,["and"])),(n()(),i._20(null,["\n    "])),(n()(),i._18(0,[["playerTwo",1]],null,4,"select",[["name","playerSelection"]],null,null,null,null,null)),(n()(),i._20(null,["\n      "])),(n()(),i._21(16777216,null,null,1,null,u)),i._19(802816,null,0,d.i,[i._10,i._11,i.m],{ngForOf:[0,"ngForOf"]},null),(n()(),i._20(null,["\n    "])),(n()(),i._20(null,["\n    "])),(n()(),i._18(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._20(null,["\n    "])),(n()(),i._18(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._20(null,["\n    "])),(n()(),i._18(0,null,null,0,"input",[["type","button"],["value","Add"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.addTeam(i._26(n,28).value,i._26(n,37).value)&&e}return e},null,null)),(n()(),i._20(null,["\n  "])),(n()(),i._20(null,["\n  \n"]))],function(n,l){var t=l.component;n(l,17,0,t.playerName),n(l,31,0,t.players),n(l,40,0,t.players)},function(n,l){n(l,14,0,i._26(l,19).ngClassUntouched,i._26(l,19).ngClassTouched,i._26(l,19).ngClassPristine,i._26(l,19).ngClassDirty,i._26(l,19).ngClassValid,i._26(l,19).ngClassInvalid,i._26(l,19).ngClassPending)})}function a(n){return i._17(0,[(n()(),i._18(0,null,null,1,"app-settings",[],null,null,null,o,_)),i._19(114688,null,0,c.a,[p.a],null,null)],function(n,l){n(l,1,0)},null)}var r=t("rmhY"),i=t("/oeL"),s=t("bm2B"),c=t("YmSH"),d=t("qbdv"),p=t("C94B");t.d(l,"b",function(){return _}),l.a=o;var g=[r.a],_=i._16({encapsulation:0,styles:g,data:{}});i._22("app-settings",c.a,a,{players:"players"},{SettingsChanged:"SettingsChanged",SettingsClosed:"SettingsClosed"},[])},k7ea:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[".boards[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.settings-icon[_ngcontent-%COMP%]{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;margin:5px}.settings-icon[_ngcontent-%COMP%]:hover{cursor:pointer}.app-content[_ngcontent-%COMP%]{text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}"]},oqPJ:function(n,l,t){"use strict";function e(n){return a._17(0,[a._23(0,r.j,[a.h]),(n()(),a._18(0,null,null,18,"div",[["class","slot-container"]],null,null,null,null,null)),(n()(),a._20(null,["\n  "])),(n()(),a._18(0,null,null,1,"span",[["class","counter"]],null,null,null,null,null)),(n()(),a._20(null,["",""])),(n()(),a._20(null,["\n  "])),(n()(),a._18(0,null,null,1,"mark",[],null,null,null,null,null)),(n()(),a._20(null,["",""])),(n()(),a._20(null,["\n  "])),(n()(),a._18(0,null,null,2,"small",[],null,null,null,null,null)),(n()(),a._20(null,["",""])),a._24(2),(n()(),a._20(null,["\n  "])),(n()(),a._18(0,null,null,1,"small",[],null,null,null,null,null)),(n()(),a._20(null,["",""])),(n()(),a._20(null,["\n  "])),(n()(),a._18(0,null,null,1,"small",[],null,null,null,null,null)),(n()(),a._20(null,["",""])),(n()(),a._20(null,["\n  "])),(n()(),a._20(null,["\n"]))],null,function(n,l){var t=l.component;n(l,4,0,t.position),n(l,7,0,t.player.name),n(l,10,0,a._25(l,10,0,n(l,11,0,a._26(l,0),t.calcRatio(),"1.2-2"))),n(l,14,0,t.player.wins),n(l,17,0,t.player.losses)})}function u(n){return a._17(0,[(n()(),a._18(0,null,null,1,"app-slot",[],null,null,null,e,d)),a._19(114688,null,0,i.a,[s.a],null,null)],function(n,l){n(l,1,0)},null)}var o=t("LsN1"),a=t("/oeL"),r=t("qbdv"),i=t("8Zrg"),s=t("C94B");t.d(l,"b",function(){return d}),l.a=e;var c=[o.a],d=a._16({encapsulation:0,styles:c,data:{}});a._22("app-slot",i.a,u,{player:"player",position:"position"},{},[])},p5Ee:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e={production:!0}},q4dy:function(n,l,t){"use strict";function e(n){return r._17(0,[(n()(),r._18(0,null,null,2,"app-settings",[],null,[[null,"SettingsClosed"],[null,"SettingsChanged"]],function(n,l,t){var e=!0,u=n.component;if("SettingsClosed"===l){e=!1!=(u.settingsShowing=!u.settingsShowing)&&e}if("SettingsChanged"===l){e=!1!==u.onSettingsChanged(t)&&e}return e},i.a,i.b)),r._19(114688,null,0,s.a,[c.a],{players:[0,"players"]},{SettingsChanged:"SettingsChanged",SettingsClosed:"SettingsClosed"}),(n()(),r._20(null,["\n\n"]))],function(n,l){n(l,1,0,l.component.players)},null)}function u(n){return r._17(0,[(n()(),r._20(null,["\n"])),(n()(),r._18(0,null,null,14,"div",[["class","app-content"]],null,null,null,null,null)),(n()(),r._20(null,["\n  "])),(n()(),r._18(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r._20(null,["\n    tally\n  "])),(n()(),r._20(null,["\n  "])),(n()(),r._18(0,null,null,8,"div",[["class","settings-icon"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!=(u.settingsShowing=!u.settingsShowing)&&e}return e},null,null)),(n()(),r._20(null,["\n    "])),(n()(),r._18(0,null,null,5,":svg:svg",[["fill","#3a404d"],["height","24"],["viewBox","0 0 24 24"],["width","24"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(n()(),r._20(null,["\n      "])),(n()(),r._18(0,null,null,0,":svg:path",[["d","M0 0h24v24H0z"],["fill","none"]],null,null,null,null,null)),(n()(),r._20(null,["\n      "])),(n()(),r._18(0,null,null,0,":svg:path",[["d","M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"]],null,null,null,null,null)),(n()(),r._20(null,["\n    "])),(n()(),r._20(null,["\n  "])),(n()(),r._20(null,["\n"])),(n()(),r._20(null,["\n"])),(n()(),r._21(16777216,null,null,1,null,e)),r._19(16384,null,0,p.h,[r._10,r._11],{ngIf:[0,"ngIf"]},null),(n()(),r._20(null,["\n"])),(n()(),r._18(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),r._20(null,["\n"])),(n()(),r._18(0,null,null,7,"div",[["class","boards"]],null,null,null,null,null)),(n()(),r._20(null,["\n  "])),(n()(),r._18(0,null,null,1,"app-leaderboard",[],null,[[null,"playersChanged"]],function(n,l,t){var e=!0,u=n.component;if("playersChanged"===l){e=!1!==u.onPlayersChanged(t)&&e}return e},g.a,g.b)),r._19(638976,null,0,_.a,[c.a],{title:[0,"title"],players:[1,"players"]},{playersChanged:"playersChanged"}),(n()(),r._20(null,["\n  "])),(n()(),r._18(0,null,null,1,"app-leaderboard",[],null,[[null,"playersChanged"]],function(n,l,t){var e=!0,u=n.component;if("playersChanged"===l){e=!1!==u.onPlayersChanged(t)&&e}return e},g.a,g.b)),r._19(638976,null,0,_.a,[c.a],{title:[0,"title"],players:[1,"players"]},{playersChanged:"playersChanged"}),(n()(),r._20(null,["\n"])),(n()(),r._20(null,["\n"]))],function(n,l){var t=l.component;n(l,18,0,t.settingsShowing);n(l,25,0,"Singles",t.players);n(l,28,0,"Doubles",t.teams)},null)}function o(n){return r._17(0,[(n()(),r._18(0,null,null,1,"app-root",[],null,null,null,u,h)),r._19(114688,null,0,d.a,[c.a],null,null)],function(n,l){n(l,1,0)},null)}var a=t("k7ea"),r=t("/oeL"),i=t("hUKm"),s=t("YmSH"),c=t("C94B"),d=t("wQAS"),p=t("qbdv"),g=t("CrZn"),_=t("yk7t");t.d(l,"a",function(){return y});var f=[a.a],h=r._16({encapsulation:0,styles:f,data:{}}),y=r._22("app-root",d.a,o,{},{},[])},qtrl:function(n,l){function t(n){throw new Error("Cannot find module '"+n+"'.")}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="qtrl"},rmhY:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[".settings-modal[_ngcontent-%COMP%]{position:fixed;width:50%;height:50%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:linear-gradient(180deg,#3a404d,#181c26);border-radius:10px;box-shadow:0 7px 30px rgba(62,9,11,.3);z-index:9999;border:1px solid rgba(0,0,0,.3);box-shadow:0 3px 7px rgba(0,0,0,.3);background-clip:padding-box}.settings-content[_ngcontent-%COMP%]{margin:4%;padding:20px}.close[_ngcontent-%COMP%]{float:right}.close[_ngcontent-%COMP%]:hover{cursor:pointer}"]},wQAS:function(n,l,t){"use strict";var e=t("C94B");t.d(l,"a",function(){return u});var u=function(){function n(n){this._scoreService=n,this.title="app",this.players=[],this.teams=[],this.settingsShowing=!1}return n.prototype.ngOnInit=function(){this.loadData()},n.prototype.onSettingsChanged=function(n){this.loadData()},n.prototype.onPlayersChanged=function(n){this.loadData()},n.prototype.loadData=function(){this.teams=this._scoreService.getTeams(),this.players=this._scoreService.getPlayers()},n.ctorParameters=function(){return[{type:e.a}]},n}()},xCbM:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=['.leaderboard[_ngcontent-%COMP%]{position:relative;top:50%;width:285px;background:linear-gradient(180deg,#3a404d,#181c26);border-radius:10px;box-shadow:0 7px 30px rgba(62,9,11,.3)}.leaderboard[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;color:#e1e1e1;padding:12px 13px 18px}.leaderboard[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:25px;height:26px;position:relative;top:3px;margin-right:6px;vertical-align:baseline}.leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{-webkit-padding-start:0;margin-bottom:0;list-style-type:none}.leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;z-index:1;font-size:14px;padding:18px 10px 18px 50px;transition:all .6s cubic-bezier(.19,1,.22,1);cursor:pointer;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}.leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{position:absolute;z-index:2;top:15px;left:15px;width:20px;height:20px;line-height:20px;color:#c24448;background:#fff;border-radius:20px;text-align:center}.leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{content:"";position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;background:inherit;box-shadow:0 3px 0 rgba(0,0,0,.08);transition:all .3s ease-in-out;opacity:1}.leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child():after{box-shadow:0 2px 0 rgba(0,0,0,.08)}.leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child()   mark[_ngcontent-%COMP%]:after, .leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child()   mark[_ngcontent-%COMP%]:before{border-top:6px solid #ba4741;bottom:-7px}.leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, .leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after{background:#c24448;border-radius:0 0 10px 10px}.leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after{box-shadow:0 -2.5px 0 rgba(0,0,0,.12)}.leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   mark[_ngcontent-%COMP%]:after, .leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   mark[_ngcontent-%COMP%]:before{top:-9px;bottom:auto;border-top:none;border-bottom:8px solid #993639}.leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{z-index:2;overflow:visible}.leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:after{-webkit-transform:scaleX(1.06) scaleY(1.03);transform:scaleX(1.06) scaleY(1.03)}.leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   mark[_ngcontent-%COMP%]:after, .leaderboard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   mark[_ngcontent-%COMP%]:before{opacity:1;transition:all .35s ease-in-out}.left-slide-button[_ngcontent-%COMP%]{color:#4caf50}.right-slide-button[_ngcontent-%COMP%]{color:#993639}.slide-button[_ngcontent-%COMP%]{font-weight:700;position:absolute;z-index:0;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}']},yk7t:function(n,l,t){"use strict";var e=t("/oeL"),u=t("C94B");t.d(l,"a",function(){return o});var o=function(){function n(n){this._scoreService=n,this.title="Leader Board",this.players=[],this.playersChanged=new e.T,this.gradients=null}return n.prototype.ngOnInit=function(){this.setGradients()},n.prototype.ngOnChanges=function(n){this.setGradients()},n.prototype.onSwipe=function(n){console.log(n),4===n.offsetDirection?Math.abs(n.deltaX)<=100&&("li"===n.target.offsetParent.localName?(n.target.offsetParent.style.left=Math.abs(n.deltaX)+"px",n.target.offsetParent.children[0].style.paddingRight=Math.abs(4*n.deltaX)+"px"):"li"===n.target.localName&&(n.target.style.left=n.deltaX+"px",n.target.children[0].style.paddingRight=Math.abs(4*n.deltaX)+"px")):2===n.offsetDirection&&Math.abs(n.deltaX)<=100&&("li"===n.target.offsetParent.localName?(n.target.offsetParent.style.right=Math.abs(n.deltaX)+"px",n.target.offsetParent.children[2].style.paddingLeft=Math.abs(4*n.deltaX)+"px"):"li"===n.target.localName&&(n.target.style.right=-1*n.deltaX+"px",n.target.children[2].style.paddingLeft=Math.abs(4*n.deltaX)+"px"))},n.prototype.onSwipeEnd=function(n){var l="";"li"===n.target.offsetParent.localName?(n.target.offsetParent.style.left=null,n.target.offsetParent.style.right=null,n.target.offsetParent.children[2].style.paddingLeft=null,n.target.offsetParent.children[0].style.paddingRight=null,l=n.target.offsetParent.id):"li"===n.target.localName&&(n.target.style.left=null,n.target.style.right=null,n.target.children[2].style.paddingLeft=null,n.target.children[0].style.paddingRight=null,l=n.target.id),Math.abs(n.deltaX)>=100&&(4===n.offsetDirection?this._scoreService.addWin(this._scoreService.getPlayerOrTeamById(l)):2===n.offsetDirection&&this._scoreService.addLoss(this._scoreService.getPlayerOrTeamById(l)),this.playersChanged.emit(!0))},n.prototype.setGradients=function(){this.gradients=this.gradient("#fa6855","#c24448",this.players.length)},n.prototype.gradient=function(n,l,t){for(var e={Hex:n,R:parseInt(n.slice(1,3),16),G:parseInt(n.slice(3,5),16),B:parseInt(n.slice(5,7),16)},u={Hex:l,R:parseInt(l.slice(1,3),16),G:parseInt(l.slice(3,5),16),B:parseInt(l.slice(5,7),16)},o=u.R-e.R,a=u.G-e.G,r=u.B-e.B,i=new Array,s=new Array,c=new Array,d=new Array,p=0;p<=t;p++)s[p]=e.R+o/t*p,c[p]=e.G+a/t*p,d[p]=e.B+r/t*p,i[p]="#"+Math.round(s[p]).toString(16)+Math.round(c[p]).toString(16)+Math.round(d[p]).toString(16);return i},n.ctorParameters=function(){return[{type:u.a}]},n}()}},[0]);