(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[498],{2536:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(9521).ZP.div.withConfig({displayName:"loading__LoadingIcon",componentId:"sc-f5tguq-0"})(["width:200px;height:200px;background-image:url('/loading.gif');"]),e=c(208),f=c(5893),g=function(){return(0,f.jsx)(e.g1,{children:(0,f.jsx)(e.WB,{children:(0,f.jsxs)(e.hz,{children:[(0,f.jsx)(d,{}),(0,f.jsx)(e.jb,{children:"로딩중"})]})})})}},3130:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return x}});var d=c(29),e=c(2640),f=c(7794),g=c.n(f),h=c(5675),i=c.n(h),j=c(7294),k=c(9669),l=c.n(k),m=c(1163),n=c.n(m),o=c(461),p=c(1195),q=c(208),r=c(5893),s=function(a){var b,c,d=function(b){var c;(null===(c=a.modal)|| void 0===c?void 0:c.setUserPw)(b.target.value)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(q.g1,{children:(0,r.jsxs)(q.WB,{children:[(0,r.jsxs)(q.hz,{children:[(0,r.jsx)(q.OQ,{}),(0,r.jsx)(q.jb,{children:a.msg}),(0,r.jsx)(q.SP,{onChange:d,className:"pwInput",type:"password"}),(0,r.jsx)(q.vq,{children:a.pwWrongMessage})]}),(0,r.jsxs)(q.FF,{children:[(0,r.jsx)(q.Xp,{onClick:null===(b=a.modal)|| void 0===b?void 0:b.cancel,children:"취소"}),(0,r.jsx)(q.Xp,{onClick:null===(c=a.modal)|| void 0===c?void 0:c.submit,border:"none",bgc:"#f44954",color:"white",children:"확인"})]})]})})})},t=s,u=c(1791),v=c(2536),w=function(){var a,b,c,f=(0,j.useState)(!1),h=f[0],k=f[1],m=(0,j.useState)(!0),q=m[0],s=m[1],w=(0,j.useState)(!1),x=w[0],y=w[1],z=(0,j.useState)(!1),A=z[0],B=z[1],C=(0,j.useState)(""),D=C[0],E=C[1],F=(0,j.useState)(!1),G=F[0],H=F[1],I=(0,j.useState)(""),J=I[0],K=I[1],L=(0,j.useState)(),M=L[0],N=L[1],O=(0,o.Z)(),P=(0,e.Z)(O,3),Q=P[2],R=(0,j.useContext)(u.Global),S=R.userData,T=R.setIsLogin,U=function(){n().push("/"),s(!1)},V=(a=(0,d.Z)(g().mark(function a(){var b;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return k(!0),K("로딩중"),a.prev=2,a.next=5,l().post("http://localhost:4000/user/userInfoCheck",{userId:null==S?void 0:S.userId,userPw:D});case 5:!0===(b=a.sent).data.pwCheck?(s(!1),N(b.data.userInfo),H(!0),E(""),K("")):(s(!0),K("비번 틀려요")),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),console.log(a.t0);case 12:k(!1);case 13:case"end":return a.stop()}},a,null,[[2,9]])})),function(){return a.apply(this,arguments)}),W=function(){y(!0),E("")},X=function(){y(!1),K(""),E("")},Y=(b=(0,d.Z)(g().mark(function a(){var b;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return k(!0),K("로딩중"),a.next=4,l().post("http://localhost:4000/user/userResign",{userIdx:null==S?void 0:S.idx,userId:null==S?void 0:S.userId,userPw:D});case 4:if(b=a.sent,a.prev=5,void 0!==T){a.next=8;break}return a.abrupt("return");case 8:!0===b.data.pwCheck?(y(!1),N(b.data.userInfo),H(!0),E(""),Q("DID_Token"),T(!1),K(""),n().push("/user/regist")):!1===b.data.pwCheck&&(K("비번 틀려요"),y(!0)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(5),console.log(a.t0);case 14:k(!1);case 15:case"end":return a.stop()}},a,null,[[5,11]])})),function(){return b.apply(this,arguments)}),Z=function(){B(!0),E("")},$=function(){B(!1),K(""),E("")},_=(c=(0,d.Z)(g().mark(function a(){var b;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return k(!0),K("로딩중"),a.next=4,l().post("http://localhost:4000/user/userResign",{userIdx:null==S?void 0:S.idx,userId:null==S?void 0:S.userId,userPw:D});case 4:if(b=a.sent,a.prev=5,void 0!==T){a.next=8;break}return a.abrupt("return");case 8:b.data.pwCheck?(B(!1),N(b.data.userInfo),H(!0),E(""),Q("DID_Token"),T(!1),K(""),n().push("/")):(B(!0),K("비번 틀려요")),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(5),console.log(a.t0);case 14:k(!1);case 15:case"end":return a.stop()}},a,null,[[5,11]])})),function(){return c.apply(this,arguments)});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p.C2,{children:[(0,r.jsx)(i(),{src:"/chain_icon.png",width:50,height:50,alt:"아이콘"}),(0,r.jsx)("p",{children:"My Profile View"})]}),(0,r.jsxs)(p.kY,{action:"회원가입",method:"post",children:[(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("label",{htmlFor:"userId",children:"아이디"}),(0,r.jsx)("input",{type:"text",name:"userId",value:G?null==M?void 0:M.userId:"",readOnly:!0})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("label",{htmlFor:"userName",children:"이름"}),(0,r.jsx)("input",{type:"text",name:"userName",value:G?null==M?void 0:M.name:"",readOnly:!0})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("label",{htmlFor:"birth",children:"생년월일"}),(0,r.jsx)("input",{type:"text",name:"birth",value:G?null==M?void 0:M.birth:"",readOnly:!0})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("label",{htmlFor:"birth",children:"성별"}),(0,r.jsx)("input",{type:"text",name:"gender",value:G?null==M?void 0:M.gender:"",readOnly:!0})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("label",{htmlFor:"email",children:"이메일"}),(0,r.jsx)(p.fK,{w:"100%",children:(0,r.jsx)("input",{type:"text",name:"email",value:G?null==M?void 0:M.email:"",readOnly:!0})})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("label",{htmlFor:"birth",children:"유저코드"}),(0,r.jsx)("input",{type:"text",name:"gender",value:G?null==M?void 0:M.userCode:"",readOnly:!0})]})]}),(0,r.jsx)(p.BM,{bgc:"#007f94",onClick:W,mb:"10px",type:"button",children:"재등록"}),(0,r.jsx)(p.BM,{bgc:"#D84D56",type:"button",onClick:Z,children:"회원탈퇴"})]}),q&&(0,r.jsx)(t,{modal:{cancel:U,submit:V,setUserPw:E},msg:"비밀번호 입력",pwWrongMessage:J}),x&&(0,r.jsx)(t,{modal:{cancel:X,submit:Y,setUserPw:E},msg:"비밀번호 입력",pwWrongMessage:J}),A&&(0,r.jsx)(t,{modal:{cancel:$,submit:_,setUserPw:E},msg:"비밀번호 입력",pwWrongMessage:J}),h&&(0,r.jsx)(v.Z,{})]})},x=w},208:function(a,b,c){"use strict";c.d(b,{FF:function(){return l},OQ:function(){return g},SP:function(){return j},WB:function(){return f},Xp:function(){return m},g1:function(){return e},hz:function(){return h},jb:function(){return i},vq:function(){return k}});var d=c(9521),e=d.ZP.div.withConfig({displayName:"Modal__ModalBg",componentId:"sc-1ucqyig-0"})(["position:absolute;top:0;left:0;width:100vw;height:100%;background-color:rgba(0,0,0,0.6);display:flex;justify-content:center;align-items:center;"]),f=d.ZP.div.withConfig({displayName:"Modal__ModalAlert",componentId:"sc-1ucqyig-1"})(["width:360px;height:220px;background-color:#fff;border-radius:8px;padding:40px;display:flex;flex-direction:column;justify-content:space-between;"]),g=d.ZP.div.withConfig({displayName:"Modal__ModalIcon",componentId:"sc-1ucqyig-2"})(["width:44px;height:44px;background-image:url('/alert_icon.png');background-size:44px;margin-bottom:15px;"]),h=d.ZP.div.withConfig({displayName:"Modal__ModalContent",componentId:"sc-1ucqyig-3"})(["display:flex;flex-direction:column;align-items:center;"]),i=d.ZP.div.withConfig({displayName:"Modal__ModalDesc",componentId:"sc-1ucqyig-4"})(["font-size:25px;color:black;"]),j=d.ZP.input.withConfig({displayName:"Modal__ModalInput",componentId:"sc-1ucqyig-5"})(["width:230px;height:20px;border:2px solid #a6a19e;border-radius:5px;font-size:16px;margin-top:10px;padding:7px;:focus{border:2px solid dodgerblue;outline:none;}"]),k=d.ZP.div.withConfig({displayName:"Modal__ModalDiv",componentId:"sc-1ucqyig-6"})(["margin-top:10px;color:red;"]),l=d.ZP.div.withConfig({displayName:"Modal__ModalBtnCon",componentId:"sc-1ucqyig-7"})(["display:flex;justify-content:space-between;width:100%;height:48px;"]),m=d.ZP.button.withConfig({displayName:"Modal__ModalBtn",componentId:"sc-1ucqyig-8"})(["width:48%;font-size:20px;border-radius:4px;cursor:pointer;border:",";background-color:",";color:",";"],function(a){return a.border||"rbga(0, 0, 0, 0.6)"},function(a){return a.bgc||"white"},function(a){return a.color||"rbga(0, 0, 0, 0.6)"})},1195:function(a,b,c){"use strict";c.d(b,{BM:function(){return h},C2:function(){return e},fK:function(){return g},kY:function(){return f}});var d=c(9521),e=d.ZP.div.withConfig({displayName:"registStyle__SignUpTitle",componentId:"sc-1yrknkx-0"})(["box-sizing:border-box;display:flex;flex-direction:column;align-items:center;color:white;font-size:30px;font-weight:600;margin-bottom:50px;height:100px;"]),f=d.ZP.form.withConfig({displayName:"registStyle__SignUpFrm",componentId:"sc-1yrknkx-2"})(["width:330px;margin:0 auto;& > ul > li{display:flex;flex-direction:column;margin-bottom:15px;& > label{color:white;margin-bottom:3px;font-size:13px;}& > input{width:100%;height:50px;box-sizing:border-box;border:2px solid #a6a19e;border-radius:5px;font-size:16px;padding:7px;}& > input:focus{border:2px solid dodgerblue;outline:none;}}span{margin-top:10px;}.false{color:red;}.true{color:green;}"]),g=d.ZP.div.withConfig({displayName:"registStyle__EmailContainer",componentId:"sc-1yrknkx-3"})(["display:flex;justify-content:space-between;& > input{width:",";height:50px;box-sizing:border-box;border:2px solid #a6a19e;border-radius:5px;font-size:16px;padding:7px;}& > select{width:40%;height:50px;box-sizing:border-box;border:2px solid #a6a19e;border-radius:5px;font-size:16px;padding:7px;}& > .email_code{width:100%;}& > input:focus{border:2px solid dodgerblue;outline:none;}& > button{border-radius:5px;background-color:#007f94;border:none;box-sizing:border-box;color:white;font-size:12px;width:15%;cursor:pointer;}"],function(a){return a.w||"40%"}),h=d.ZP.button.withConfig({displayName:"registStyle__SignUpBtn",componentId:"sc-1yrknkx-4"})(["margin-top:10px;width:100%;height:45px;border-radius:5px;border:none;text-align:center;line-height:45px;background-color:",";color:white;margin-bottom:",";cursor:pointer;font-size:17px;"],function(a){return a.bgc||"#007f94"},function(a){return a.mb||"30px"})},3335:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/myProfile",function(){return c(3130)}])}},function(a){a.O(0,[675,774,888,179],function(){var b;return a(a.s=3335)}),_N_E=a.O()}])