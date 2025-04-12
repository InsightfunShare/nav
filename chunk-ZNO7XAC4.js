import{a as Ht}from"./chunk-CZEDAMTL.js";import{a as zt}from"./chunk-XBNL7WYY.js";import{q as kt,r as Yt}from"./chunk-JQCPR7UZ.js";import{Ac as dt,Ba as L,Cb as O,Ib as N,Mc as Ot,Nc as Pt,Ob as I,Pb as v,Pc as $t,Qb as V,ac as m,bc as f,cc as U,d as Vt,dc as vt,ec as xt,ee as St,f as ht,fe as It,he as Tt,jc as Ct,lc as j,mb as gt,od as bt,pd as ot,qb as p,qc as Mt,qe as k,rc as _t,sc as Dt,vb as yt,wc as wt,xc as h,xd as at,yc as D,zc as T}from"./chunk-EF6VPUIY.js";var pt=Vt((ct,lt)=>{"use strict";(function(s,i){typeof ct=="object"&&typeof lt<"u"?lt.exports=i():typeof define=="function"&&define.amd?define(i):(s=typeof globalThis<"u"?globalThis:s||self).dayjs=i()})(ct,function(){"use strict";var s=1e3,i=6e4,e=36e5,t="millisecond",x="second",P="minute",H="hour",b="day",R="week",$="month",q="quarter",Y="year",E="date",ft="Invalid Date",At=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Jt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Ut={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(d){var a=["th","st","nd","rd"],n=d%100;return"["+d+(a[(n-20)%10]||a[n]||a[0])+"]"}},rt=function(d,a,n){var r=String(d);return!r||r.length>=a?d:""+Array(a+1-r.length).join(n)+d},Qt={s:rt,z:function(d){var a=-d.utcOffset(),n=Math.abs(a),r=Math.floor(n/60),o=n%60;return(a<=0?"+":"-")+rt(r,2,"0")+":"+rt(o,2,"0")},m:function d(a,n){if(a.date()<n.date())return-d(n,a);var r=12*(n.year()-a.year())+(n.month()-a.month()),o=a.clone().add(r,$),c=n-o<0,l=a.clone().add(r+(c?-1:1),$);return+(-(r+(n-o)/(c?o-l:l-o))||0)},a:function(d){return d<0?Math.ceil(d)||0:Math.floor(d)},p:function(d){return{M:$,y:Y,w:R,d:b,D:E,h:H,m:P,s:x,ms:t,Q:q}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(d){return d===void 0}},G="en",W={};W[G]=Ut;var mt="$isDayjsObject",st=function(d){return d instanceof nt||!(!d||!d[mt])},et=function d(a,n,r){var o;if(!a)return G;if(typeof a=="string"){var c=a.toLowerCase();W[c]&&(o=c),n&&(W[c]=n,o=c);var l=a.split("-");if(!o&&l.length>1)return d(l[0])}else{var g=a.name;W[g]=a,o=g}return!r&&o&&(G=o),o||!r&&G},C=function(d,a){if(st(d))return d.clone();var n=typeof a=="object"?a:{};return n.date=d,n.args=arguments,new nt(n)},u=Qt;u.l=et,u.i=st,u.w=function(d,a){return C(d,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var nt=function(){function d(n){this.$L=et(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[mt]=!0}var a=d.prototype;return a.parse=function(n){this.$d=function(r){var o=r.date,c=r.utc;if(o===null)return new Date(NaN);if(u.u(o))return new Date;if(o instanceof Date)return new Date(o);if(typeof o=="string"&&!/Z$/i.test(o)){var l=o.match(At);if(l){var g=l[2]-1||0,y=(l[7]||"0").substring(0,3);return c?new Date(Date.UTC(l[1],g,l[3]||1,l[4]||0,l[5]||0,l[6]||0,y)):new Date(l[1],g,l[3]||1,l[4]||0,l[5]||0,l[6]||0,y)}}return new Date(o)}(n),this.init()},a.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},a.$utils=function(){return u},a.isValid=function(){return this.$d.toString()!==ft},a.isSame=function(n,r){var o=C(n);return this.startOf(r)<=o&&o<=this.endOf(r)},a.isAfter=function(n,r){return C(n)<this.startOf(r)},a.isBefore=function(n,r){return this.endOf(r)<C(n)},a.$g=function(n,r,o){return u.u(n)?this[r]:this.set(o,n)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(n,r){var o=this,c=!!u.u(r)||r,l=u.p(n),g=function(J,w){var F=u.w(o.$u?Date.UTC(o.$y,w,J):new Date(o.$y,w,J),o);return c?F:F.endOf(b)},y=function(J,w){return u.w(o.toDate()[J].apply(o.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(w)),o)},M=this.$W,_=this.$M,S=this.$D,Q="set"+(this.$u?"UTC":"");switch(l){case Y:return c?g(1,0):g(31,11);case $:return c?g(1,_):g(0,_+1);case R:var A=this.$locale().weekStart||0,K=(M<A?M+7:M)-A;return g(c?S-K:S+(6-K),_);case b:case E:return y(Q+"Hours",0);case H:return y(Q+"Minutes",1);case P:return y(Q+"Seconds",2);case x:return y(Q+"Milliseconds",3);default:return this.clone()}},a.endOf=function(n){return this.startOf(n,!1)},a.$set=function(n,r){var o,c=u.p(n),l="set"+(this.$u?"UTC":""),g=(o={},o[b]=l+"Date",o[E]=l+"Date",o[$]=l+"Month",o[Y]=l+"FullYear",o[H]=l+"Hours",o[P]=l+"Minutes",o[x]=l+"Seconds",o[t]=l+"Milliseconds",o)[c],y=c===b?this.$D+(r-this.$W):r;if(c===$||c===Y){var M=this.clone().set(E,1);M.$d[g](y),M.init(),this.$d=M.set(E,Math.min(this.$D,M.daysInMonth())).$d}else g&&this.$d[g](y);return this.init(),this},a.set=function(n,r){return this.clone().$set(n,r)},a.get=function(n){return this[u.p(n)]()},a.add=function(n,r){var o,c=this;n=Number(n);var l=u.p(r),g=function(_){var S=C(c);return u.w(S.date(S.date()+Math.round(_*n)),c)};if(l===$)return this.set($,this.$M+n);if(l===Y)return this.set(Y,this.$y+n);if(l===b)return g(1);if(l===R)return g(7);var y=(o={},o[P]=i,o[H]=e,o[x]=s,o)[l]||1,M=this.$d.getTime()+n*y;return u.w(M,this)},a.subtract=function(n,r){return this.add(-1*n,r)},a.format=function(n){var r=this,o=this.$locale();if(!this.isValid())return o.invalidDate||ft;var c=n||"YYYY-MM-DDTHH:mm:ssZ",l=u.z(this),g=this.$H,y=this.$m,M=this.$M,_=o.weekdays,S=o.months,Q=o.meridiem,A=function(w,F,X,it){return w&&(w[F]||w(r,c))||X[F].slice(0,it)},K=function(w){return u.s(g%12||12,w,"0")},J=Q||function(w,F,X){var it=w<12?"AM":"PM";return X?it.toLowerCase():it};return c.replace(Jt,function(w,F){return F||function(X){switch(X){case"YY":return String(r.$y).slice(-2);case"YYYY":return u.s(r.$y,4,"0");case"M":return M+1;case"MM":return u.s(M+1,2,"0");case"MMM":return A(o.monthsShort,M,S,3);case"MMMM":return A(S,M);case"D":return r.$D;case"DD":return u.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return A(o.weekdaysMin,r.$W,_,2);case"ddd":return A(o.weekdaysShort,r.$W,_,3);case"dddd":return _[r.$W];case"H":return String(g);case"HH":return u.s(g,2,"0");case"h":return K(1);case"hh":return K(2);case"a":return J(g,y,!0);case"A":return J(g,y,!1);case"m":return String(y);case"mm":return u.s(y,2,"0");case"s":return String(r.$s);case"ss":return u.s(r.$s,2,"0");case"SSS":return u.s(r.$ms,3,"0");case"Z":return l}return null}(w)||l.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(n,r,o){var c,l=this,g=u.p(r),y=C(n),M=(y.utcOffset()-this.utcOffset())*i,_=this-y,S=function(){return u.m(l,y)};switch(g){case Y:c=S()/12;break;case $:c=S();break;case q:c=S()/3;break;case R:c=(_-M)/6048e5;break;case b:c=(_-M)/864e5;break;case H:c=_/e;break;case P:c=_/i;break;case x:c=_/s;break;default:c=_}return o?c:u.a(c)},a.daysInMonth=function(){return this.endOf($).$D},a.$locale=function(){return W[this.$L]},a.locale=function(n,r){if(!n)return this.$L;var o=this.clone(),c=et(n,r,!0);return c&&(o.$L=c),o},a.clone=function(){return u.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},d}(),ut=nt.prototype;return C.prototype=ut,[["$ms",t],["$s",x],["$m",P],["$H",H],["$W",b],["$M",$],["$y",Y],["$D",E]].forEach(function(d){ut[d[1]]=function(a){return this.$g(a,d[0],d[1])}}),C.extend=function(d,a){return d.$i||(d(a,nt,C),d.$i=!0),C},C.locale=et,C.isDayjs=st,C.unix=function(d){return C(1e3*d)},C.en=W[G],C.Ls=W,C.p={},C})});var Et=class s{data;date="";day="";week="";dayOfYear="";constructor(){let i=Yt();this.date=k("_calendarDate",{year:i.year,month:i.month}),this.day=i.zeroDate,this.week=i.dayText,this.dayOfYear=k("_dayOfYear",{day:kt()})}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=O({type:s,selectors:[["app-calendar"]],inputs:{data:"data"},decls:11,vars:10,consts:[[1,"calendar","family","citems"],[1,"ctop"],[1,"box"],[1,"cday"],[1,"cdate"],[1,"mr-1.5"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"div",1),h(2),f(),m(3,"div",2)(4,"div",3),h(5),f(),m(6,"div",4)(7,"span",5),h(8),f(),m(9,"span"),h(10),f()()()()),e&2&&(v("zoom",t.data.zoom),p(),v("background",t.data.topColor),p(),T(" ",t.date," "),p(),v("background",t.data.bgColor),p(2),D(t.day),p(3),D(t.dayOfYear),p(2),D(t.week))},styles:[".calendar[_ngcontent-%COMP%]{width:130px;height:var(--componentHeight);max-height:100%;border-radius:12px;text-align:center;overflow:hidden;color:#fff;box-shadow:0 0 8px #0006;display:flex;flex-direction:column}.calendar[_ngcontent-%COMP%]   .ctop[_ngcontent-%COMP%]{font-size:17px;height:40px;line-height:0;display:flex;align-items:center;justify-content:center;font-weight:500}.calendar[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{flex:1}.calendar[_ngcontent-%COMP%]   .cday[_ngcontent-%COMP%]{font-weight:700;font-size:40px;line-height:1;padding:24px 0 5px}.calendar[_ngcontent-%COMP%]   .cdate[_ngcontent-%COMP%]{color:#ffffffb3;font-size:13px}"]})};var Nt=class s{data;runDays=0;unit="";constructor(){let i=Date.now()-Tt.runtime;i=i<0?0:i;let e=Math.floor(i/(1e3*60*60*24*365));e>0?(this.runDays=e,this.unit=k("_year")):(this.runDays=Math.floor(i/(1e3*60*60*24)),this.unit=k("_day"))}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=O({type:s,selectors:[["app-runtime"]],inputs:{data:"data"},decls:9,vars:5,consts:[[1,"runtime","family","citems"],[1,"title"],[1,"days"],[1,"day"],[1,"unit"],["src","https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/runtime.svg",1,"img"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"div",1),h(2),f(),m(3,"div",2)(4,"span",3),h(5),f(),m(6,"span",4),h(7),f()(),U(8,"img",5),f()),e&2&&(v("zoom",t.data.zoom),p(2),D(t.data.title),p(3),D(t.runDays),p(2),D(t.unit))},styles:[".runtime[_ngcontent-%COMP%]{pointer-events:none;position:relative;width:230px;height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;color:#fff;box-shadow:0 0 15px #0003;display:flex;justify-content:center;padding:30px;flex-direction:column;background:linear-gradient(135deg,#8bc6ec,#9599e2);font-weight:700}.runtime[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{z-index:2;position:relative;font-size:18px;color:#f9f6f6}.runtime[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]{z-index:2;position:relative;margin-top:10px;font-size:48px;line-height:1;color:#d67272}.runtime[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{vertical-align:text-bottom}.runtime[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]{font-size:15px;margin-left:2px;margin-bottom:2px;font-weight:500}.runtime[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{position:absolute;bottom:30px;right:30px;width:70px}"]})};function Bt(s,i){if(s&1&&(m(0,"div",5),h(1),f()),s&2){let e=j();p(),D(e.countdownStr)}}function qt(s,i){s&1&&U(0,"img",6)}function Gt(s,i){s&1&&U(0,"img",6)}var jt=class s{data;countdownStr="";isRest=!1;timer;constructor(){document.addEventListener("visibilitychange",this.visibilitychange.bind(this))}ngOnChanges(){clearTimeout(this.timer),this.init()}ngOnDestroy(){clearTimeout(this.timer),document.removeEventListener("visibilitychange",this.visibilitychange)}visibilitychange(i){i.target.hidden?clearTimeout(this.timer):this.init()}init(){if(this.data){let i=new Date,e=i.getTime(),t=new Date(this.data.startDate);t.setFullYear(i.getFullYear()),t.setMonth(i.getMonth()),t.setDate(i.getDate());let x=t.getTime(),P=new Date(this.data.date);P.setFullYear(i.getFullYear()),P.setMonth(i.getMonth()),P.setDate(i.getDate());let H=P.getTime(),b=(H-e)/1e3,R=b/(60*60),$=Math.floor(R%1*10)/10,q=Math.floor(b/60%60),Y=Math.floor(b%60),E=Math.floor(R)+$;if(e>=x&&e<=H)E>=1?this.countdownStr=k("_hours",{num:E}):q>0?this.countdownStr=k("_minutes",{num:q}):Y>=0&&(this.countdownStr=k("_seconds",{num:Y}));else return this.isRest=!0,clearTimeout(this.timer);this.isRest=!1}this.timer=setTimeout(()=>this.init(),1e3)}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=O({type:s,selectors:[["app-offwork"]],inputs:{data:"data"},features:[L],decls:7,vars:8,consts:[["other",""],[1,"offwork","family","citems"],[1,"title"],["class","coutdown",4,"ngIf"],["src","https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/rest.svg","class","img",4,"ngIf","ngIfElse"],[1,"coutdown"],["src","https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/rest.svg",1,"img"]],template:function(e,t){if(e&1&&(m(0,"div",1)(1,"div",2),h(2),f(),N(3,Bt,2,1,"div",3)(4,qt,1,0,"img",4)(5,Gt,1,0,"ng-template",null,0,$t),f()),e&2){let x=wt(6);v("zoom",t.data.zoom),V("rest",t.isRest),p(2),T(" ",t.isRest?t.data.restTitle:t.data.workTitle," "),p(),I("ngIf",!t.isRest),p(),I("ngIf",t.isRest)("ngIfElse",x)}},dependencies:[at,ot],styles:[".offwork[_ngcontent-%COMP%]{pointer-events:none;position:relative;width:170px;height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;box-shadow:0 0 15px #0003;display:flex;align-items:center;flex-direction:column;font-weight:700;background-color:#fff}.offwork.rest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:22px;color:#666}.offwork[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-top:20px;z-index:2;position:relative;font-size:14px;color:gray;text-align:center}.offwork[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;width:100%}.offwork[_ngcontent-%COMP%]   .coutdown[_ngcontent-%COMP%]{z-index:2;position:relative;font-size:24px;color:#666}"]})};var Ft=class s{constructor(i){this.jumpService=i}data;static \u0275fac=function(e){return new(e||s)(yt(zt))};static \u0275cmp=O({type:s,selectors:[["app-image"]],inputs:{data:"data"},decls:3,vars:7,consts:[[1,"cimage","family","citems",3,"click"],[1,"text"]],template:function(e,t){e&1&&(m(0,"div",0),Ct("click",function(P){return t.jumpService.goUrl(P,t.data.go)}),m(1,"div",1),h(2),f()()),e&2&&(v("background-image",t.data.url&&"url("+t.data.url+")")("zoom",t.data.zoom),V("cursor-pointer",t.data.go),p(2),D(t.data.text))},styles:[".cimage[_ngcontent-%COMP%]{position:relative;width:170px;height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;color:#fff;box-shadow:0 0 15px #0003;background-size:cover}.cimage[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0;width:100%;font-size:12px;text-align:center;font-weight:500}"]})};var tt=ht(pt(),1);var Lt=class s{data;component={};constructor(){}ngOnInit(){this.init()}ngOnChanges(){this.init()}init(){let i={};this.data.date&&(i.dateStr=(0,tt.default)(this.data.date).format("YYYY.MM.DD"),i.dayStr=(0,tt.default)((0,tt.default)(this.data.date).format("YYYY-MM-DD")).diff((0,tt.default)().format("YYYY-MM-DD"),"day"),i.dayStr=i.dayStr<0?0:i.dayStr,i.dayStr=i.dayStr>9999?9999:i.dayStr),this.component=i}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=O({type:s,selectors:[["app-countdown"]],inputs:{data:"data"},features:[L],decls:8,vars:15,consts:[[1,"holiday","family","citems"],[1,"top"],[1,"box"],[1,"days"],[1,"date"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"div",1),h(2),f(),m(3,"div",2)(4,"div",3),h(5),f(),m(6,"div",4),h(7),f()()()),e&2&&(v("zoom",t.data.zoom),p(),v("background",t.data.topColor),p(),T(" ",t.data.title," "),p(),v("background-image",t.data.url&&"url("+t.data.url+")")("background-color",t.data.bgColor),p(),v("color",t.data.dayColor),p(),T(" ",t.component.dayStr," "),p(),v("color",t.data.dateColor),p(),T(" - ",t.component.dateStr," - "))},styles:[".holiday[_ngcontent-%COMP%]{position:relative;width:160px;height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;color:#fff;box-shadow:0 0 15px #0003;display:flex;flex-direction:column;text-align:center}.holiday[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{padding:6px 10px;font-weight:500}.holiday[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{position:relative;flex:1;background-size:cover}.holiday[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]{font-weight:700;font-size:50px;margin-top:16px}.holiday[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0;width:100%;font-weight:500}"]})};var Kt=["root"],Rt=class s{data;root;parseDescriptionTimer;html="";constructor(){}ngOnChanges(){this.init(),this.parseDescription()}ngOnDestroy(){clearTimeout(this.parseDescriptionTimer)}init(){this.html=It(`!${this.data.html}`)}parseDescription(){clearTimeout(this.parseDescriptionTimer),this.parseDescriptionTimer=setTimeout(()=>{St(this.root?.nativeElement,`!${this.html}`)},300)}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=O({type:s,selectors:[["app-html"]],viewQuery:function(e,t){if(e&1&&Mt(Kt,5),e&2){let x;_t(x=Dt())&&(t.root=x.first)}},inputs:{data:"data"},features:[L],decls:3,vars:9,consts:[["root",""],[1,"html","family","citems",3,"innerHTML"]],template:function(e,t){e&1&&(U(0,"div",1,0),Ot(2,"safeHtml")),e&2&&(v("zoom",t.data.zoom)("width",t.data.width+"px")("background",t.data.bgColor),I("innerHTML",Pt(2,7,t.html),gt))},dependencies:[Ht],styles:[".html[_ngcontent-%COMP%]{position:relative;height:var(--componentHeight)!important;max-height:100%;border-radius:12px;overflow:hidden;box-shadow:0 0 15px #0003;overflow-wrap:break-word}"]})};var z=ht(pt(),1);function Xt(s,i){if(s&1&&(m(0,"span",10),h(1),f()),s&2){let e=j(2);p(),D(e.$t("_rest"))}}function te(s,i){if(s&1&&(vt(0),h(1),xt()),s&2){let e=j(2);p(),T("- ",e.items[0].afterDay,"")}}function ee(s,i){if(s&1&&(m(0,"span",10),h(1),f()),s&2){let e=j(3);p(),D(e.$t("_rest"))}}function ne(s,i){if(s&1&&(m(0,"div",14),h(1),f()),s&2){let e=j().$implicit,t=j(2);p(),dt(" ",e.diffDay,"",t.$t("_day")," ")}}function ie(s,i){if(s&1&&(m(0,"div",11)(1,"div",12),h(2),N(3,ee,2,1,"span",6),f(),N(4,ne,2,2,"div",13),f()),s&2){let e=i.$implicit;p(2),dt(" ",e.title," ",e.dateStr,""),p(),I("ngIf",e.day>0),p(),I("ngIf",e.diffDay>0)}}function oe(s,i){if(s&1&&(m(0,"div",1)(1,"div",2)(2,"div",3),h(3),f(),m(4,"div",4),h(5),f(),m(6,"div",5),N(7,Xt,2,1,"span",6),m(8,"span"),h(9),N(10,te,2,1,"ng-container",7),f()()(),m(11,"div",8),N(12,ie,5,4,"div",9),f()()),s&2){let e=j();v("zoom",e.data.zoom),p(),V("today",e.items[0].isToday||e.items[0].isRest),p(2),T(" ",e.items[0].isToday||e.items[0].isRest?e.$t("_dayIs"):e.$t("_distance")+e.items[0].title," "),p(2),D(e.items[0].diffStr),p(2),I("ngIf",e.items[0].day>0),p(2),T("",e.items[0].dateStr," "),p(),I("ngIf",e.items[0].afterDay),p(2),I("ngForOf",e.items)}}var Wt=class s{data;items=[];$t=k;constructor(){}ngOnChanges(){this.init()}init(){let i={},e=(0,z.default)((0,z.default)().format("YYYY-MM-DD"));this.data.items&&(i=[...this.data.items].filter(t=>{t.date=(0,z.default)(t.date).format("YYYY-MM-DD");let x=(0,z.default)(t.date);return t.day>0&&(x=x.add(t.day-1,"day")),!x.isBefore(e)}).slice(0,4).map(t=>(t.dateStr=(0,z.default)(t.date).format("MM.DD"),t.diffDay=(0,z.default)((0,z.default)(t.date).format("YYYY-MM-DD")).diff(e,"day"),t.diffDay=t.diffDay<0?0:t.diffDay,t.diffDay=t.diffDay>999?999:t.diffDay,t.diffStr=t.diffDay,t.day>0&&(t.afterDay=(0,z.default)(t.date).add(t.day-1,"day").format("MM.DD"),t.afterDay===t.dateStr&&(t.afterDay=null)),t.isToday=t.dateStr===(0,z.default)().format("MM.DD"),t.diffDay<=0&&(t.isToday?t.diffStr=t.title:(t.isRest=!0,t.diffStr="\u4F11\u606F\u65E5")),t))),this.items=i}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=O({type:s,selectors:[["app-holiday"]],inputs:{data:"data"},features:[L],decls:1,vars:1,consts:[["class","holiday family citems",3,"zoom",4,"ngIf"],[1,"holiday","family","citems"],[1,"left"],[1,"title"],[1,"days"],[1,"flex","items-center","justify-center","whitespace-nowrap"],["class","tag",4,"ngIf"],[4,"ngIf"],[1,"right"],["class","items",4,"ngFor","ngForOf"],[1,"tag"],[1,"items"],[1,"cleft"],["class","cright",4,"ngIf"],[1,"cright"]],template:function(e,t){e&1&&N(0,oe,13,10,"div",0),e&2&&I("ngIf",t.items.length)},dependencies:[at,bt,ot],styles:[".holiday[_ngcontent-%COMP%]{position:relative;width:320px;height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;box-shadow:0 0 15px #0003;display:flex;background-color:#fff;color:#666}.holiday[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:500;font-size:16px}.holiday[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:140px;padding:12px 0 12px 12px;display:flex;flex-direction:column}.holiday[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]{font-size:46px;text-align:center;font-weight:700;color:#000000d9;flex:1;display:flex;align-items:center;justify-content:center}.holiday[_ngcontent-%COMP%]   .left.today[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]{font-size:30px}.holiday[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{background-color:#dffcea;color:#55aa6f;font-size:10px;font-weight:500;padding:1px 2px;border-radius:2px;display:inline-flex;align-items:center;justify-content:center;margin-right:3px;margin-left:2px}.holiday[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{flex:1;padding:12px}.holiday[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:4px 0;color:#000c}.holiday[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]:not(:nth-last-child(1)){margin-bottom:3px;border-bottom:1px solid #eee}.holiday[_ngcontent-%COMP%]   .cleft[_ngcontent-%COMP%]{position:relative;white-space:nowrap;display:flex;align-items:center}.holiday[_ngcontent-%COMP%]   .cleft[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{position:absolute;top:50%;left:-5px;transform:translate(-100%,-50%)}.holiday[_ngcontent-%COMP%]   .cright[_ngcontent-%COMP%]{font-weight:500}"]})};export{Et as a,Nt as b,jt as c,Ft as d,pt as e,Lt as f,Rt as g,Wt as h};
