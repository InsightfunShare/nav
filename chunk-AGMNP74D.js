import{a as q,b as M,c as K}from"./chunk-RDRJVVSK.js";import{Ab as Vt,Fb as Ht,Gb as Et,Ib as Bt,Ka as wt,Qa as y,S as w,W as It,_ as At,aa as bt,cb as Nt,db as Ot,ea as j,gb as Ft,hb as Q,ib as Z,ob as Tt,ra as Dt,rb as Mt,sb as $t,tb as Rt,ub as kt}from"./chunk-AB4MC4GA.js";import{$b as dt,Ba as O,Ca as A,Cb as F,D as U,Da as b,Db as at,Eb as m,F as W,Gc as T,Hb as V,Ib as c,La as ot,M as Y,N as J,Nb as pt,Ob as l,Pa as x,Pc as L,Qb as D,Ra as st,Sb as lt,Uc as _t,W as R,Xb as d,Xc as C,Yb as ut,Yc as St,_b as ct,_c as vt,a as $,ac as _,bc as S,cc as g,dc as ft,ea as X,ec as ht,fa as tt,ga as f,gc as mt,ia as et,jc as H,la as nt,lc as a,mc as E,na as it,nc as B,pc as zt,q as N,qb as u,qc as gt,rc as G,sa as h,sc as P,ub as k,ud as yt,vb as p,wb as rt,wc as v,xc as Ct,yc as xt}from"./chunk-EF6VPUIY.js";var Kt=["nz-input-group-slot",""],Gt=["*"];function Ut(n,r){if(n&1&&g(0,"nz-icon",0),n&2){let t=a();l("nzType",t.icon)}}function Wt(n,r){if(n&1&&(ft(0),Ct(1),ht()),n&2){let t=a();u(),xt(t.template)}}function Yt(n,r){if(n&1&&g(0,"span",3),n&2){let t=a(2);l("icon",t.nzAddOnBeforeIcon)("template",t.nzAddOnBefore)}}function Jt(n,r){}function Xt(n,r){if(n&1&&(_(0,"span",6),c(1,Jt,0,0,"ng-template",5),S()),n&2){let t=a(2),e=v(3);lt(t.affixInGroupStatusCls),D("ant-input-affix-wrapper-disabled",t.disabled)("ant-input-affix-wrapper-sm",t.isSmall)("ant-input-affix-wrapper-lg",t.isLarge)("ant-input-affix-wrapper-focused",t.focused),u(),l("ngTemplateOutlet",e)}}function te(n,r){}function ee(n,r){if(n&1&&c(0,te,0,0,"ng-template",5),n&2){a(2);let t=v(5);l("ngTemplateOutlet",t)}}function ne(n,r){if(n&1&&g(0,"span",3),n&2){let t=a(2);l("icon",t.nzAddOnAfterIcon)("template",t.nzAddOnAfter)}}function ie(n,r){if(n&1&&(_(0,"span",2),c(1,Yt,1,2,"span",3)(2,Xt,2,11,"span",4)(3,ee,1,1,null,5)(4,ne,1,2,"span",3),S()),n&2){let t=a();u(),d(t.nzAddOnBefore||t.nzAddOnBeforeIcon?1:-1),u(),d(t.isAffix||t.hasFeedback?2:3),u(2),d(t.nzAddOnAfter||t.nzAddOnAfterIcon?4:-1)}}function oe(n,r){}function se(n,r){if(n&1&&c(0,oe,0,0,"ng-template",5),n&2){a(2);let t=v(3);l("ngTemplateOutlet",t)}}function re(n,r){}function ae(n,r){if(n&1&&c(0,re,0,0,"ng-template",5),n&2){a(2);let t=v(5);l("ngTemplateOutlet",t)}}function pe(n,r){if(n&1&&c(0,se,1,1,null,5)(1,ae,1,1,null,5),n&2){let t=a();d(t.isAffix?0:1)}}function le(n,r){if(n&1&&g(0,"span",7),n&2){let t=a(2);l("icon",t.nzPrefixIcon)("template",t.nzPrefix)}}function ue(n,r){}function ce(n,r){if(n&1&&g(0,"nz-form-item-feedback-icon",9),n&2){let t=a(3);l("status",t.status)}}function de(n,r){if(n&1&&(_(0,"span",8),c(1,ce,1,1,"nz-form-item-feedback-icon",9),S()),n&2){let t=a(2);l("icon",t.nzSuffixIcon)("template",t.nzSuffix),u(),d(t.isFeedback?1:-1)}}function fe(n,r){if(n&1&&c(0,le,1,2,"span",7)(1,ue,0,0,"ng-template",5)(2,de,2,3,"span",8),n&2){let t=a(),e=v(5);d(t.nzPrefix||t.nzPrefixIcon?0:-1),u(),l("ngTemplateOutlet",e),u(),d(t.nzSuffix||t.nzSuffixIcon||t.isFeedback?2:-1)}}function he(n,r){if(n&1&&(_(0,"span",10),g(1,"nz-form-item-feedback-icon",9),S()),n&2){let t=a(2);u(),l("status",t.status)}}function me(n,r){if(n&1&&(B(0),c(1,he,2,1,"span",10)),n&2){let t=a();u(),d(!t.isAddOn&&!t.isAffix&&t.isFeedback?1:-1)}}var ze=["otpInput"];function ge(n,r){if(n&1){let t=mt();_(0,"input",2,0),H("input",function(i){let o=A(t).$index,s=a();return b(s.onInput(o,i))})("focus",function(i){A(t);let o=a();return b(o.onFocus(i))})("keydown",function(i){let o=A(t).$index,s=a();return b(s.onKeyDown(o,i))})("paste",function(i){let o=A(t).$index,s=a();return b(s.onPaste(o,i))}),S()}if(n&2){let t=r.$implicit,e=a();l("nzSize",e.nzSize)("formControl",t)("nzStatus",e.nzStatus)}}var tn=(()=>{class n{ngZone;platform;resizeService;autosize=!1;el=h(x).nativeElement;cachedLineHeight;previousValue;previousMinRows;minRows;maxRows;maxHeight=null;minHeight=null;destroy$=new N;inputGap=10;set nzAutosize(t){typeof t=="string"||t===!0?this.autosize=!0:(i=>typeof i!="string"&&typeof i!="boolean"&&(!!i.maxRows||!!i.minRows))(t)&&(this.autosize=!0,this.minRows=t.minRows,this.maxRows=t.maxRows,this.maxHeight=this.setMaxHeight(),this.minHeight=this.setMinHeight())}resizeToFitContent(t=!1){if(this.cacheTextareaLineHeight(),!this.cachedLineHeight)return;let e=this.el,i=e.value;if(!t&&this.minRows===this.previousMinRows&&i===this.previousValue)return;let o=e.placeholder;e.classList.add("nz-textarea-autosize-measuring"),e.placeholder="";let s=Math.round((e.scrollHeight-this.inputGap)/this.cachedLineHeight)*this.cachedLineHeight+this.inputGap;this.maxHeight!==null&&s>this.maxHeight&&(s=this.maxHeight),this.minHeight!==null&&s<this.minHeight&&(s=this.minHeight),e.style.height=`${s}px`,e.classList.remove("nz-textarea-autosize-measuring"),e.placeholder=o,typeof requestAnimationFrame<"u"&&this.ngZone.runOutsideAngular(()=>requestAnimationFrame(()=>{let{selectionStart:z,selectionEnd:I}=e;!this.destroy$.isStopped&&document.activeElement===e&&e.setSelectionRange(z,I)})),this.previousValue=i,this.previousMinRows=this.minRows}cacheTextareaLineHeight(){if(this.cachedLineHeight>=0||!this.el.parentNode)return;let t=this.el.cloneNode(!1);t.rows=1,t.style.position="absolute",t.style.visibility="hidden",t.style.border="none",t.style.padding="0",t.style.height="",t.style.minHeight="",t.style.maxHeight="",t.style.overflow="hidden",this.el.parentNode.appendChild(t),this.cachedLineHeight=t.clientHeight-this.inputGap,this.el.parentNode.removeChild(t),this.maxHeight=this.setMaxHeight(),this.minHeight=this.setMinHeight()}setMinHeight(){let t=this.minRows&&this.cachedLineHeight?this.minRows*this.cachedLineHeight+this.inputGap:null;return t!==null&&(this.el.style.minHeight=`${t}px`),t}setMaxHeight(){let t=this.maxRows&&this.cachedLineHeight?this.maxRows*this.cachedLineHeight+this.inputGap:null;return t!==null&&(this.el.style.maxHeight=`${t}px`),t}noopInputHandler(){}constructor(t,e,i){this.ngZone=t,this.platform=e,this.resizeService=i}ngAfterViewInit(){this.autosize&&this.platform.isBrowser&&(this.resizeToFitContent(),this.resizeService.subscribe().pipe(f(this.destroy$)).subscribe(()=>this.resizeToFitContent(!0)))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}ngDoCheck(){this.autosize&&this.platform.isBrowser&&this.resizeToFitContent()}static \u0275fac=function(e){return new(e||n)(p(ot),p(It),p(wt))};static \u0275dir=m({type:n,selectors:[["textarea","nzAutosize",""]],hostAttrs:["rows","1"],hostBindings:function(e,i){e&1&&H("input",function(){return i.noopInputHandler()})},inputs:{nzAutosize:"nzAutosize"},exportAs:["nzAutosize"]})}return n})(),en=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=m({type:n,selectors:[["","nzInputAddonBefore",""]]})}return n})(),nn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=m({type:n,selectors:[["","nzInputAddonAfter",""]]})}return n})(),on=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=m({type:n,selectors:[["","nzInputPrefix",""]]})}return n})(),sn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=m({type:n,selectors:[["","nzInputSuffix",""]]})}return n})(),Pt=(()=>{class n{icon=null;type=null;template=null;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=F({type:n,selectors:[["","nz-input-group-slot",""]],hostVars:6,hostBindings:function(e,i){e&2&&D("ant-input-group-addon",i.type==="addon")("ant-input-prefix",i.type==="prefix")("ant-input-suffix",i.type==="suffix")},inputs:{icon:"icon",type:"type",template:"template"},attrs:Kt,ngContentSelectors:Gt,decls:3,vars:2,consts:[[3,"nzType"],[4,"nzStringTemplateOutlet"]],template:function(e,i){e&1&&(E(),c(0,Ut,1,1,"nz-icon",0)(1,Wt,2,1,"ng-container",1),B(2)),e&2&&(d(i.icon?0:-1),u(),l("nzStringTemplateOutlet",i.template))},dependencies:[bt,At,Ot,Nt],encapsulation:2,changeDetection:0})}return n})(),Lt=(()=>{class n{renderer;elementRef;hostView;directionality;nzBorderless=!1;nzSize="default";nzStepperless=!0;nzStatus="";get disabled(){return this.ngControl&&this.ngControl.disabled!==null?this.ngControl.disabled:this._disabled}set disabled(t){this._disabled=t}_disabled=!1;disabled$=new N;dir="ltr";prefixCls="ant-input";status="";statusCls={};hasFeedback=!1;feedbackRef=null;components=[];ngControl=h(Rt,{self:!0,optional:!0});finalSize=vt(()=>this.compactSize?this.compactSize():this.size());size=st(this.nzSize);compactSize=h(Ft,{optional:!0});destroy$=h(y);nzFormStatusService=h(q,{optional:!0});nzFormNoStatusService=h(M,{optional:!0});constructor(t,e,i,o){this.renderer=t,this.elementRef=e,this.hostView=i,this.directionality=o}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe(R((t,e)=>t.status===e.status&&t.hasFeedback===e.hasFeedback),f(this.destroy$)).subscribe(({status:t,hasFeedback:e})=>{this.setStatusStyles(t,e)}),this.ngControl&&this.ngControl.statusChanges?.pipe(J(()=>this.ngControl.disabled!==null),f(this.destroy$)).subscribe(()=>{this.disabled$.next(this.ngControl.disabled)}),this.dir=this.directionality.value,this.directionality.change?.pipe(f(this.destroy$)).subscribe(t=>{this.dir=t})}ngOnChanges({disabled:t,nzStatus:e,nzSize:i}){t&&this.disabled$.next(this.disabled),e&&this.setStatusStyles(this.nzStatus,this.hasFeedback),i&&this.size.set(i.currentValue)}setStatusStyles(t,e){this.status=t,this.hasFeedback=e,this.renderFeedbackIcon(),this.statusCls=w(this.prefixCls,t,e),Object.keys(this.statusCls).forEach(i=>{this.statusCls[i]?this.renderer.addClass(this.elementRef.nativeElement,i):this.renderer.removeClass(this.elementRef.nativeElement,i)})}renderFeedbackIcon(){if(!this.status||!this.hasFeedback||this.nzFormNoStatusService){this.hostView.clear(),this.feedbackRef=null;return}this.feedbackRef=this.feedbackRef||this.hostView.createComponent(K),this.feedbackRef.location.nativeElement.classList.add("ant-input-suffix"),this.feedbackRef.instance.status=this.status,this.feedbackRef.instance.updateIcon()}static \u0275fac=function(e){return new(e||n)(p(k),p(x),p(rt),p(j))};static \u0275dir=m({type:n,selectors:[["input","nz-input",""],["textarea","nz-input",""]],hostAttrs:[1,"ant-input"],hostVars:13,hostBindings:function(e,i){e&2&&(pt("disabled",i.disabled||null),D("ant-input-disabled",i.disabled)("ant-input-borderless",i.nzBorderless)("ant-input-lg",i.finalSize()==="large")("ant-input-sm",i.finalSize()==="small")("ant-input-rtl",i.dir==="rtl")("ant-input-stepperless",i.nzStepperless))},inputs:{nzBorderless:[2,"nzBorderless","nzBorderless",C],nzSize:"nzSize",nzStepperless:[2,"nzStepperless","nzStepperless",C],nzStatus:"nzStatus",disabled:[2,"disabled","disabled",C]},exportAs:["nzInput"],features:[T([y,{provide:Q,useValue:"input"}]),V([Z]),O]})}return n})(),rn=(()=>{class n{elementRef;constructor(t){this.elementRef=t}static \u0275fac=function(e){return new(e||n)(p(x))};static \u0275dir=m({type:n,selectors:[["nz-input-group","nzSuffix",""],["nz-input-group","nzPrefix",""]]})}return n})(),Ce=(()=>{class n{focusMonitor;elementRef;renderer;cdr;directionality;listOfNzInputDirective;nzAddOnBeforeIcon=null;nzAddOnAfterIcon=null;nzPrefixIcon=null;nzSuffixIcon=null;nzAddOnBefore;nzAddOnAfter;nzPrefix;nzStatus="";nzSuffix;nzSize="default";nzSearch=!1;nzCompact=!1;isLarge=!1;isSmall=!1;isAffix=!1;isAddOn=!1;isFeedback=!1;focused=!1;disabled=!1;dir="ltr";prefixCls="ant-input";affixStatusCls={};groupStatusCls={};affixInGroupStatusCls={};status="";hasFeedback=!1;destroy$=new N;nzFormStatusService=h(q,{optional:!0});nzFormNoStatusService=h(M,{optional:!0});constructor(t,e,i,o,s){this.focusMonitor=t,this.elementRef=e,this.renderer=i,this.cdr=o,this.directionality=s}updateChildrenInputSize(){this.listOfNzInputDirective&&this.listOfNzInputDirective.forEach(t=>t.size.set(this.nzSize))}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe(R((t,e)=>t.status===e.status&&t.hasFeedback===e.hasFeedback),f(this.destroy$)).subscribe(({status:t,hasFeedback:e})=>{this.setStatusStyles(t,e)}),this.focusMonitor.monitor(this.elementRef,!0).pipe(f(this.destroy$)).subscribe(t=>{this.focused=!!t,this.cdr.markForCheck()}),this.dir=this.directionality.value,this.directionality.change?.pipe(f(this.destroy$)).subscribe(t=>{this.dir=t})}ngAfterContentInit(){this.updateChildrenInputSize();let t=this.listOfNzInputDirective.changes.pipe(X(this.listOfNzInputDirective));t.pipe(tt(e=>Y(t,...e.map(i=>i.disabled$))),W(()=>t),U(e=>e.some(i=>i.disabled)),f(this.destroy$)).subscribe(e=>{this.disabled=e,this.cdr.markForCheck()})}ngOnChanges(t){let{nzSize:e,nzSuffix:i,nzPrefix:o,nzPrefixIcon:s,nzSuffixIcon:z,nzAddOnAfter:I,nzAddOnBefore:jt,nzAddOnAfterIcon:Qt,nzAddOnBeforeIcon:Zt,nzStatus:qt}=t;e&&(this.updateChildrenInputSize(),this.isLarge=this.nzSize==="large",this.isSmall=this.nzSize==="small"),(i||o||s||z)&&(this.isAffix=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon)),(I||jt||Qt||Zt)&&(this.isAddOn=!!(this.nzAddOnAfter||this.nzAddOnBefore||this.nzAddOnAfterIcon||this.nzAddOnBeforeIcon),this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn)),qt&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.destroy$.next(),this.destroy$.complete()}setStatusStyles(t,e){this.status=t,this.hasFeedback=e,this.isFeedback=!!t&&e;let i=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon);this.isAffix=i||!this.isAddOn&&e,this.affixInGroupStatusCls=this.isAffix||this.isFeedback?this.affixStatusCls=w(`${this.prefixCls}-affix-wrapper`,t,e):{},this.cdr.markForCheck(),this.affixStatusCls=w(`${this.prefixCls}-affix-wrapper`,this.isAddOn?"":t,this.isAddOn?!1:e),this.groupStatusCls=w(`${this.prefixCls}-group-wrapper`,this.isAddOn?t:"",this.isAddOn?e:!1);let o=$($({},this.affixStatusCls),this.groupStatusCls);Object.keys(o).forEach(s=>{o[s]?this.renderer.addClass(this.elementRef.nativeElement,s):this.renderer.removeClass(this.elementRef.nativeElement,s)})}static \u0275fac=function(e){return new(e||n)(p(Dt),p(x),p(k),p(_t),p(j))};static \u0275cmp=F({type:n,selectors:[["nz-input-group"]],contentQueries:function(e,i,o){if(e&1&&zt(o,Lt,4),e&2){let s;G(s=P())&&(i.listOfNzInputDirective=s)}},hostVars:40,hostBindings:function(e,i){e&2&&D("ant-input-group-compact",i.nzCompact)("ant-input-search-enter-button",i.nzSearch)("ant-input-search",i.nzSearch)("ant-input-search-rtl",i.dir==="rtl")("ant-input-search-sm",i.nzSearch&&i.isSmall)("ant-input-search-large",i.nzSearch&&i.isLarge)("ant-input-group-wrapper",i.isAddOn)("ant-input-group-wrapper-rtl",i.dir==="rtl")("ant-input-group-wrapper-lg",i.isAddOn&&i.isLarge)("ant-input-group-wrapper-sm",i.isAddOn&&i.isSmall)("ant-input-affix-wrapper",i.isAffix&&!i.isAddOn)("ant-input-affix-wrapper-rtl",i.dir==="rtl")("ant-input-affix-wrapper-focused",i.isAffix&&i.focused)("ant-input-affix-wrapper-disabled",i.isAffix&&i.disabled)("ant-input-affix-wrapper-lg",i.isAffix&&!i.isAddOn&&i.isLarge)("ant-input-affix-wrapper-sm",i.isAffix&&!i.isAddOn&&i.isSmall)("ant-input-group",!i.isAffix&&!i.isAddOn)("ant-input-group-rtl",i.dir==="rtl")("ant-input-group-lg",!i.isAffix&&!i.isAddOn&&i.isLarge)("ant-input-group-sm",!i.isAffix&&!i.isAddOn&&i.isSmall)},inputs:{nzAddOnBeforeIcon:"nzAddOnBeforeIcon",nzAddOnAfterIcon:"nzAddOnAfterIcon",nzPrefixIcon:"nzPrefixIcon",nzSuffixIcon:"nzSuffixIcon",nzAddOnBefore:"nzAddOnBefore",nzAddOnAfter:"nzAddOnAfter",nzPrefix:"nzPrefix",nzStatus:"nzStatus",nzSuffix:"nzSuffix",nzSize:"nzSize",nzSearch:[2,"nzSearch","nzSearch",C],nzCompact:[2,"nzCompact","nzCompact",C]},exportAs:["nzInputGroup"],features:[T([M,{provide:Q,useValue:"input"}]),V([Z]),O],ngContentSelectors:Gt,decls:6,vars:1,consts:[["affixTemplate",""],["contentTemplate",""],[1,"ant-input-wrapper","ant-input-group"],["nz-input-group-slot","","type","addon",3,"icon","template"],[1,"ant-input-affix-wrapper",3,"ant-input-affix-wrapper-disabled","ant-input-affix-wrapper-sm","ant-input-affix-wrapper-lg","ant-input-affix-wrapper-focused","class"],[3,"ngTemplateOutlet"],[1,"ant-input-affix-wrapper"],["nz-input-group-slot","","type","prefix",3,"icon","template"],["nz-input-group-slot","","type","suffix",3,"icon","template"],[3,"status"],["nz-input-group-slot","","type","suffix"]],template:function(e,i){e&1&&(E(),c(0,ie,5,3,"span",2)(1,pe,2,1)(2,fe,3,3,"ng-template",null,0,L)(4,me,2,1,"ng-template",null,1,L)),e&2&&d(i.isAddOn?0:1)},dependencies:[Pt,yt,K],encapsulation:2,changeDetection:0})}return n})(),xe=(()=>{class n{formBuilder;nzDestroyService;otpInputs;nzLength=6;nzSize="default";disabled=!1;nzStatus="";nzFormatter=t=>t;nzMask=null;otpArray;internalValue=[];onChangeCallback;onTouched=()=>{};constructor(t,e){this.formBuilder=t,this.nzDestroyService=e,this.createFormArray()}ngOnChanges(t){t.nzLength?.currentValue&&this.createFormArray(),t.disabled&&this.setDisabledState(this.disabled)}onInput(t,e){let i=e.target,o=this.otpInputs.toArray()[t+1];i.value&&o?o.nativeElement.focus():o||this.selectInputBox(t)}onFocus(t){t.target.select()}onKeyDown(t,e){let i=this.otpInputs.toArray()[t-1];e.keyCode===8&&(e.preventDefault(),this.internalValue[t]="",this.otpArray.at(t).setValue("",{emitEvent:!1}),i&&this.selectInputBox(t-1),this.emitValue())}writeValue(t){if(!t){this.otpArray.reset();return}let e=t.split("");this.internalValue=e,e.forEach((i,o)=>{let s=this.nzFormatter(i),z=this.nzMask?this.nzMask:s;this.otpArray.at(o).setValue(z,{emitEvent:!1})})}registerOnChange(t){this.onChangeCallback=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){t?this.otpArray.disable():this.otpArray.enable()}onPaste(t,e){let i=e.clipboardData?.getData("text")||"";if(!i)return;let o=t;for(let s of i.split(""))if(o<this.nzLength){let z=this.nzFormatter(s);this.internalValue[o]=s;let I=this.nzMask?this.nzMask:z;this.otpArray.at(o).setValue(I,{emitEvent:!1}),o++}else break;e.preventDefault(),this.selectInputBox(o),this.emitValue()}createFormArray(){this.otpArray=this.formBuilder.array([]),this.internalValue=new Array(this.nzLength).fill("");for(let t=0;t<this.nzLength;t++){let e=this.formBuilder.nonNullable.control("",[$t.required]);e.valueChanges.pipe(et(i=>{let o=this.nzFormatter(i);this.internalValue[t]=o,e.setValue(this.nzMask??o,{emitEvent:!1}),this.emitValue()}),f(this.nzDestroyService)).subscribe(),this.otpArray.push(e)}}emitValue(){let t=this.internalValue.join("");this.onChangeCallback&&this.onChangeCallback(t)}selectInputBox(t){let e=this.otpInputs.toArray();t>=e.length&&(t=e.length-1),e[t].nativeElement.select()}static \u0275fac=function(e){return new(e||n)(p(Et),p(y))};static \u0275cmp=F({type:n,selectors:[["nz-input-otp"]],viewQuery:function(e,i){if(e&1&&gt(ze,5),e&2){let o;G(o=P())&&(i.otpInputs=o)}},hostAttrs:[1,"ant-otp"],inputs:{nzLength:[2,"nzLength","nzLength",St],nzSize:"nzSize",disabled:[2,"disabled","disabled",C],nzStatus:"nzStatus",nzFormatter:"nzFormatter",nzMask:"nzMask"},exportAs:["nzInputOtp"],features:[T([{provide:Tt,useExisting:nt(()=>n),multi:!0},y]),O],decls:2,vars:0,consts:[["otpInput",""],["nz-input","","type","text","maxlength","1","size","1",1,"ant-otp-input",3,"nzSize","formControl","nzStatus"],["nz-input","","type","text","maxlength","1","size","1",1,"ant-otp-input",3,"input","focus","keydown","paste","nzSize","formControl","nzStatus"]],template:function(e,i){e&1&&ct(0,ge,2,3,"input",1,ut),e&2&&dt(i.otpArray.controls)},dependencies:[Lt,Bt,Mt,kt,Ht,Vt],encapsulation:2,changeDetection:0})}return n})();var an=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=at({type:n});static \u0275inj=it({imports:[Ce,Pt,xe]})}return n})();export{tn as a,en as b,nn as c,on as d,sn as e,Lt as f,rn as g,Ce as h,an as i};
