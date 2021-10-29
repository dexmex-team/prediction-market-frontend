(this["webpackJsonpdexmex-frontend-v2"]=this["webpackJsonpdexmex-frontend-v2"]||[]).push([[8],{839:function(e,t,n){"use strict";n.r(t);var r,c,a,i,s,o,u,j,b,d,l,p,O,f,m,h=n(33),x=n(0),g=n(41),v=n(11),w=n(6),y=n(2),k=n.n(y),C=n(21),S=n(20),A=n(39),D=n(60),_=n(55),E=n(236),R=function(){var e=Object(D.c)().account,t=Object(E.a)().fastRefresh,n=Object(_.e)(),r=Object(x.useState)({amount:A.a.constants.Zero,rewardDebt:A.a.constants.Zero}),c=Object(S.a)(r,2),a=c[0],i=c[1];return Object(x.useEffect)((function(){e&&function(){var t=Object(C.a)(k.a.mark((function t(){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.userInfo(e);case 2:r=t.sent,i({amount:r.amount,rewardDebt:r.rewardDebt});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e,t,n]),a},M=n(69),Q=function(){var e=Object(E.a)().fastRefresh,t=Object(_.e)(),n=Object(_.a)(Object(M.b)()),r=Object(x.useState)({supply:A.a.constants.Zero,rewards:A.a.constants.Zero}),c=Object(S.a)(r,2),a=c[0],i=c[1];return Object(x.useEffect)((function(){(function(){var e=Object(C.a)(k.a.mark((function e(){var r,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.balanceOf(Object(M.e)());case 2:return r=e.sent,e.next=5,t.totalRewards();case 5:c=e.sent,i({supply:r,rewards:c});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e,t,n]),a},z=n(230),F=n(238),q=n(5),G=(v.f,Object(w.e)(v.p)(r||(r=Object(h.a)(["\n  width: 100%;\n  flex: 1;\n  "," {\n    min-width: 240px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Object(w.e)(v.G).attrs({as:"h1",size:"xl"})(c||(c=Object(h.a)(["\n  margin-bottom: 24px;\n"])))),I=Object(w.e)(v.mb)(a||(a=Object(h.a)(["\n  font-size: 20px;\n  font-weight: 600;\n"]))),P=w.e.div(i||(i=Object(h.a)(["\n  background: ",";\n  padding-top: 40px;\n  margin-bottom: 32px;\n  padding-bottom: 32px;\n"])),(function(e){return e.theme.colors.backgroundDisabled})),T=(Object(w.e)(v.m)(s||(s=Object(h.a)(["\n  margin-right: 0px;\n  margin-left: auto;\n  display: block;\n"]))),function(){return Object(q.jsx)(P,{children:Object(q.jsx)(F.a,{children:Object(q.jsx)(v.F,{justifyContent:"space-between",flexDirection:["column",null,"row"],children:Object(q.jsxs)(v.F,{flexDirection:"column",children:[Object(q.jsx)(G,{children:"Polygon Staking"}),Object(q.jsx)(I,{children:"Stake DEXM and Earn Rewards"})]})})})})}),U=n(15),X=n(118),Z=n(119),L=n(31),J={approvalState:"idle",confirmState:"idle"},N=function(e,t){switch(t.type){case"requires_approval":return Object(U.a)(Object(U.a)({},e),{},{approvalState:"success"});case"approve_sending":return Object(U.a)(Object(U.a)({},e),{},{approvalState:"loading"});case"approve_receipt":return Object(U.a)(Object(U.a)({},e),{},{approvalState:"success"});case"approve_error":return Object(U.a)(Object(U.a)({},e),{},{approvalState:"fail"});case"confirm_sending":return Object(U.a)(Object(U.a)({},e),{},{confirmState:"loading"});case"confirm_receipt":return Object(U.a)(Object(U.a)({},e),{},{confirmState:"success"});case"confirm_error":return Object(U.a)(Object(U.a)({},e),{},{confirmState:"fail"});default:return e}},B=function(e){var t=e.onApprove,n=e.onConfirm,r=e.onRequiresApproval,c=e.onSuccess,a=void 0===c?X.noop:c,i=e.onApproveSuccess,s=void 0===i?X.noop:i,o=Object(L.b)().t,u=Object(D.c)().account,j=Object(x.useReducer)(N,J),b=Object(S.a)(j,2),d=b[0],l=b[1],p=Object(x.useRef)(r),O=Object(Z.a)().toastError;return Object(x.useEffect)((function(){u&&p.current&&p.current().then((function(e){e&&l({type:"requires_approval"})}))}),[u,p,l]),{isApproving:"loading"===d.approvalState,isApproved:"success"===d.approvalState,isConfirming:"loading"===d.confirmState,isConfirmed:"success"===d.confirmState,handleApprove:function(){var e=Object(C.a)(k.a.mark((function e(){var n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return n=e.sent,l({type:"approve_sending"}),e.next=7,n.wait();case 7:(r=e.sent).status&&(l({type:"approve_receipt"}),s({state:d,receipt:r})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),l({type:"approve_error"}),O(o("Error"),o("Please try again. Confirm the transaction and make sure you are paying enough gas!"));case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),handleConfirm:function(){var e=Object(C.a)(k.a.mark((function e(){var t,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l({type:"confirm_sending"}),e.prev=1,e.next=4,n();case 4:return t=e.sent,e.next=7,t.wait();case 7:(r=e.sent).status&&(l({type:"confirm_receipt"}),a({state:d,receipt:r})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),l({type:"confirm_error"}),O(o("Error"),o("Please try again. Confirm the transaction and make sure you are paying enough gas!"));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}()}},W=n(100),H=n(233),K=n(53),V=n.n(K),Y=n(101),$=function(e){var t=Object(Y.a)(),n=t.login,r=t.logout,c=Object(v.Bb)(n,r).onPresentConnectModal;return Object(q.jsx)(v.m,Object(U.a)(Object(U.a)({onClick:c},e),{},{children:"Unlock Wallet"}))},ee=w.e.div(o||(o=Object(h.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  "," {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),te=Object(w.e)(v.m)(u||(u=Object(h.a)(["\n  width: 100%;\n  "," {\n    min-width: 160px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),ne={width:"24px",color:"textDisabled"},re=Object(w.e)(v.y).attrs(ne)(j||(j=Object(h.a)(["\n  display: none;\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),ce=Object(w.e)(v.x).attrs(ne)(b||(b=Object(h.a)(["\n  display: block;\n  "," {\n    display: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),ae=Object(q.jsx)(v.f,{spin:!0,color:"currentColor"}),ie=function(e){e.isApproveDisabled;var t=e.isApproving,n=e.isConfirming,r=e.isConfirmDisabled,c=e.onApprove,a=e.onConfirm;return Object(q.jsxs)(ee,{children:[Object(q.jsx)(v.k,{children:Object(q.jsx)(te,{disabled:n,onClick:c,endIcon:t?ae:void 0,isLoading:t,children:t?"Approving":"Approve"})}),Object(q.jsxs)(v.F,{justifyContent:"center",children:[Object(q.jsx)(re,{}),Object(q.jsx)(ce,{})]}),Object(q.jsx)(v.k,{children:Object(q.jsx)(te,{onClick:a,disabled:r,isLoading:n,endIcon:n?ae:void 0,children:n?"Confirming":"Confirm"})})]})},se=Object(w.e)(v.p)(d||(d=Object(h.a)(["\n  width: 100%;\n  flex: 1;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 437px;\n  "," {\n    min-width: 240px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),oe=Object(w.e)(v.G).attrs({as:"h3",size:"lg"})(l||(l=Object(h.a)(["\n  margin-bottom: 4px;\n  text-align: right;\n  margin-bottom: 15px;\n"]))),ue=Object(q.jsx)(v.f,{spin:!0,color:"currentColor"}),je=function(){var e=Object(x.useState)(""),t=Object(S.a)(e,2),n=t[0],r=t[1],c=Object(D.c)().account,a=Object(x.useState)(!1),i=Object(S.a)(a,2),s=i[0],o=(i[1],Object(H.d)()),u=Object(H.a)(Object(M.b)()),j=new V.a(n).times(new V.a(10).pow(18)),b=Object(z.e)(Object(W.b)(Object(M.b)()).balance),d=R().amount,l=B({onRequiresApproval:function(){var e=Object(C.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.methods.allowance(c,o.address).call();case 3:return t=e.sent,n=new V.a(t),e.abrupt("return",n.gt(0));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),onApprove:function(){return _(!1),u.approve(o.address,j.toString())},onConfirm:function(){return _(!1),o.deposit(j.toString())}}),p=l.isApproving,O=l.isApproved,f=l.isConfirmed,m=l.isConfirming,h=l.handleApprove,g=l.handleConfirm,w=Object(x.useState)(!1),y=Object(S.a)(w,2),A=y[0],_=y[1];return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)(se,{children:Object(q.jsxs)(v.q,{children:[Object(q.jsx)(oe,{children:"Stake DEXM"}),c?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(v.g,{value:n,onUserInput:function(e){r(e)},inputProps:{disabled:!c||s}}),Object(q.jsx)(v.k,{style:{textAlign:"right",marginTop:15},children:Object(q.jsx)(v.m,{scale:"xs",variant:"tertiary",onClick:function(){r(b.toString())},disabled:!1,children:"Use Max"})})]}):"",Object(q.jsx)(v.k,{style:{marginTop:15},children:c?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(ie,{isApproveDisabled:f||m||O,isApproving:p,isConfirmDisabled:!O||j.isNaN()||j.eq(0),isConfirming:m,onApprove:h,onConfirm:g}),d.gt("0")?Object(q.jsx)(v.m,{width:"100%",style:{marginTop:10},onClick:function(){return _(!0),o.withdraw(d.toString())},isLoading:A,endIcon:A?ue:void 0,disabled:m||p,children:A?"Unstaking":"Unstake and Claim Rewards"}):""]}):Object(q.jsx)($,{width:"100%"})})]})})})},be=Object(w.e)(v.p)(p||(p=Object(h.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),de=Object(w.e)(v.q)(O||(O=Object(h.a)(["\n  text-align: center;\n"]))),le=Object(w.e)(v.h)(f||(f=Object(h.a)(["\n  align-items: stretch;\n  justify-content: justify;\n  margin-bottom: 32px;\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),pe=Object(w.e)(v.G).attrs({size:"xl"})(m||(m=Object(h.a)(["\n  line-height: 44px;\n  color: ",";\n"])),(function(e){return e.theme.colors.textSubtle}));t.default=function(){var e=Object(g.a)().account,t=Q(),n=t.supply,r=t.rewards,c=R(),a=c.amount,i=c.rewardDebt;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(T,{}),Object(q.jsxs)(F.a,{children:[Object(q.jsxs)(le,{children:[Object(q.jsx)(be,{children:Object(q.jsxs)(de,{children:[Object(q.jsx)(v.G,{color:"contrast",size:"lg",children:"DEXM Staked"}),Object(q.jsxs)(pe,{children:[Object(z.a)(n,2)," DEXM"]})]})}),Object(q.jsx)(be,{children:Object(q.jsxs)(de,{children:[Object(q.jsx)(v.G,{color:"contrast",size:"lg",children:"Total  Rewards"}),Object(q.jsxs)(pe,{children:[Object(z.a)(r,2)," MATIC"]})]})}),e?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(be,{children:Object(q.jsxs)(de,{children:[Object(q.jsx)(v.G,{color:"contrast",size:"lg",children:"User Staked"}),Object(q.jsxs)(pe,{children:[Object(z.a)(a,2)," DEXM"]})]})}),Object(q.jsx)(be,{children:Object(q.jsxs)(de,{children:[Object(q.jsx)(v.G,{color:"contrast",size:"lg",children:"Pending Rewards"}),Object(q.jsxs)(pe,{children:[Object(z.a)(i,2)," MATIC"]})]})})]}):""]}),Object(q.jsx)(je,{})]})]})}}}]);
//# sourceMappingURL=8.e176dc14.chunk.js.map