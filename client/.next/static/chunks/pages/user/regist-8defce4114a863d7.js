(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[123],{2536:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(9521).ZP.div.withConfig({displayName:"loading__LoadingIcon",componentId:"sc-f5tguq-0"})(["width:200px;height:200px;background-image:url('/loading.gif');"]),e=c(208),f=c(5893),g=function(){return(0,f.jsx)(e.g1,{children:(0,f.jsx)(e.WB,{children:(0,f.jsxs)(e.hz,{children:[(0,f.jsx)(d,{}),(0,f.jsx)(e.jb,{children:"로딩중"})]})})})}},9528:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return F}});var d=c(9499),e=c(29),f=c(7794),g=c.n(f),h=c(7294),i=c(5675),j=c.n(i),k=c(3023),l=c(9521),m=l.ZP.div.withConfig({displayName:"customSel__SelectWrap",componentId:"sc-tqcmun-0"})(["width:100%;position:relative;"]),n=l.ZP.div.withConfig({displayName:"customSel__StyledSelect",componentId:"sc-tqcmun-1"})(["width:100%;height:50px;box-sizing:border-box;border:2px solid #a6a19e;border-radius:5px;font-size:16px;padding-left:7px;background-color:#fff;display:flex;justify-content:space-between;align-items:center;color:black;z-index:2;"]),o=l.ZP.div.withConfig({displayName:"customSel__SelectArrow",componentId:"sc-tqcmun-2"})(["width:30px;height:50px;border-left:3px solid #a6a19e;box-sizing:border-box;display:flex;justify-content:center;align-items:center;"]),p=l.ZP.div.withConfig({displayName:"customSel__Arrow",componentId:"sc-tqcmun-3"})(["width:0px;height:0px;border-top:12px solid #a6a19e;border-left:6px solid transparent;border-right:6px solid transparent;"]),q=l.ZP.div.withConfig({displayName:"customSel__OptionWrap",componentId:"sc-tqcmun-4"})(["width:100%;height:80px;transition:300ms all ease-in;opacity:",";position:absolute;top:",";z-index:1;"],function(a){return a.isOpend?1:0},function(a){return a.isOpend?"50px":"0px"}),r=l.ZP.div.withConfig({displayName:"customSel__StyledOption",componentId:"sc-tqcmun-5"})(["width:100%;height:40px;box-sizing:border-box;border:2px solid #a6a19e;border-radius:5px;font-size:16px;padding:7px;background-color:#fff;color:black;display:flex;align-items:center;"]),s=c(5893),t=function(a){var b=a.options,c=a.isOpend,d=a.openOrCloseSelect,e=a.setGenderState,f=a.genderState,g=b.map(function(a,b){return(0,s.jsx)(r,{onClick:e(a),children:a.key},b)});return(0,s.jsxs)(m,{children:[(0,s.jsxs)(n,{onClick:d,children:[f.key,(0,s.jsx)(o,{children:(0,s.jsx)(p,{})})]}),(0,s.jsx)(q,{isOpend:c,children:g})]})},u=t,v=c(1195),w=c(1163),x=c.n(w);function y(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function z(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?y(Object(c),!0).forEach(function(b){(0,d.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):y(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var A={userId:"",userPw:"",pwCheck:"",userName:"",birth:"",email:"",selectMail:"@gmail.com",email_code:""},B=function(a,b,c){var f,i,j=(0,h.useState)(A),l=j[0],m=j[1],n=(0,h.useState)({}),o=n[0],p=n[1],q=(0,h.useState)(!1),r=q[0],s=q[1],t=function(a){var b=a.target,c=b.value,e=b.name,f=z(z({},l),{},(0,d.Z)({},e,c));m(f)},u=(f=(0,e.Z)(g().mark(function a(c){var d,e,f,h,i,j,l,m,n,o,p,q,r;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(h={},i=c.userId,j=c.userPw,l=c.pwCheck,m=c.userName,n=c.birth,o=c.email,p=c.email_code,i){a.next=6;break}h.userId="아이디를 입력해주세요",a.next=22;break;case 6:if(null!==i.match(/^[A-Za-z|0-9|]{4,12}$/gi)){a.next=10;break}h.userId="알파벳과 숫자로 이루어진 4~12자만 가능합니다. ",a.next=22;break;case 10:return a.prev=10,a.next=13,k.Z.post("/user/idOverlap_Check",{inputId:i});case 13:(q=a.sent).data.idCheck||(h.userId="사용 불가능한 id 입니다."),a.next=22;break;case 17:a.prev=17,a.t0=a.catch(10),console.log(a.t0),console.log("아이디 중복체크 에러"),h.userId="잠시후에 다시 시도 해주세요.";case 22:return j&&l||(h.pwCheck="비밀번호를 입력해주세요."),j!==l&&(h.pwCheck="비번이랑 비번확인이 달라요"),(null==j?void 0:null===(d=j.match(/^[A-Za-z|0-9|~!@#$%^&*]{4,16}$/gi))|| void 0===d?void 0:d.length)===void 0&&(h.pwCheck="4~16자, 알파벳, 숫자, 특수문자(~,!,@,#,$,%,^,&,*)만 사용가능합니다."),(null==o?void 0:o.length)===0&&(h.email="이메일을 입력해주세요."),b!==p&&(h.email_code="인증코드가 틀려요."),(null==m?void 0:null===(e=m.match(/^[가-힣]{2,40}$/gi))|| void 0===e?void 0:e.length)===void 0&&(h.userName="2글자이상 한글로만 작성해주세요."),(null==n?void 0:n.length)===0&&(h.birth="생년월일을 입력하세요."),(null==n?void 0:n.match(/^[0-9]{6}/))===null&&(h.birth="6자리 숫자로 입력해주세요."),(null==n?void 0:n.match(/^([0-9]{2})(0[0-9]|1[0-2])(0[0-9]|1[0-9]|2[0-9]|3[0-1])/g))===null&&(h.birth="생년월일이 올바르지 않습니다."),"02"===(r=null==n?void 0:n.substring(2,4))&&(null==n?void 0:n.match(/^([0-9]{2})(02)(0[0-9]|1[0-9]|2[0-9])/g))===null&&(h.birth="생년월일이 올바르지 않습니다."),("04"===r||"06"===r||"09"===r||"11"===r)&&(null==n?void 0:n.match(/^([0-9]{2})(04|06|09|11)(0[0-9]|1[0-9]|2[0-9]|30)/g))===null&&(h.birth="생년월일이 올바르지 않습니다."),("01"===r||"03"===r||"05"===r||"07"===r||"08"===r||"10"===r||"12"===r)&&(null==n?void 0:n.match(/^([0-9]{2})(01|03|05|07|08|10|12)(0[0-9]|1[0-9]|2[0-9]|3[0-1])/g))===null&&(h.birth="생년월일이 올바르지 않습니다."),(null===(f=c.email_code)|| void 0===f?void 0:f.length)===0&&(h.email_code="코드를 입력해주세요."),a.abrupt("return",h);case 37:case"end":return a.stop()}},a,null,[[10,17]])})),function(a){return f.apply(this,arguments)}),v=(i=(0,e.Z)(g().mark(function a(b){return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b.preventDefault(),s(!0),a.t0=p,a.next=5,u(l);case 5:a.t1=a.sent,(0,a.t0)(a.t1);case 7:case"end":return a.stop()}},a)})),function(a){return i.apply(this,arguments)});return(0,h.useEffect)(function(){if(r&&!Object.keys(o).length){var b;(b=(0,e.Z)(g().mark(function b(){var d;return g().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return c(!0),b.prev=1,b.next=4,k.Z.post("/user/regist",z(z({},l),{},{gender:a}));case 4:(d=b.sent).data.regist?(alert("회원가입 완료"),x().push("/user/login")):alert("회원가입 실패함"),b.next=12;break;case 8:b.prev=8,b.t0=b.catch(1),console.log(b.t0),console.log("유저정보 안들어가짐");case 12:c(!1);case 13:case"end":return b.stop()}},b,null,[[1,8]])})),function(){return b.apply(this,arguments)})()}},[o]),{values:l,setValue:t,setSubmit:v,errors:o,setErrors:p}},C=c(2536);function D(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function E(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?D(Object(c),!0).forEach(function(b){(0,d.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):D(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var F=function(){var a,b=(0,h.useState)(!1),c=b[0],d=b[1],f=(0,h.useState)(""),i=f[0],l=f[1],m=(0,h.useState)(!1),n=m[0],o=m[1],p=(0,h.useState)({key:"남자",value:"male"}),q=p[0],r=p[1],t=B(q.value,i,d),w=t.values,x=t.setValue,y=t.setSubmit,z=t.errors,A=t.setErrors,D=function(a){return function(){r(a),o(!n)}},F=function(){o(!n)},G=(a=(0,e.Z)(g().mark(function a(){var b,c,d,e,f;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(b=w.email,c=w.selectMail,a.prev=1,(null==b?void 0:b.length)!==0){a.next=4;break}throw Error("이메일너무 짧아욜");case 4:if(!(void 0===b|| void 0===c)){a.next=6;break}return a.abrupt("return");case 6:return d=b+c,a.next=9,k.Z.post("/user/sendAuthNum",{userEmail:d});case 9:l(f=(e=a.sent).data.authNum.join("")),A(E(E({},z),{},{email:""})),alert("이메일이 전송되었습니다."),a.next=19;break;case 16:a.prev=16,a.t0=a.catch(1),alert("이메일을 다시 확인해주세요.");case 19:case"end":return a.stop()}},a,null,[[1,16]])})),function(){return a.apply(this,arguments)});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(v.C2,{children:[(0,s.jsx)(j(),{src:"/chain_icon.png",width:50,height:50,alt:"아이콘"}),(0,s.jsx)("p",{children:"Sign up to DID"})]}),(0,s.jsxs)(v.kY,{action:"회원가입",method:"post",onSubmit:y,children:[(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("label",{htmlFor:"userId",children:"아이디"}),(0,s.jsx)("input",{type:"text",name:"userId",onChange:x,autoComplete:"off"}),(0,s.jsx)("span",{style:{color:"red"},children:z.userId})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("label",{htmlFor:"userPw",children:"비밀번호"}),(0,s.jsx)("input",{type:"password",name:"userPw",onChange:x})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("label",{htmlFor:"pwCheck",children:"비밀번호 확인"}),(0,s.jsx)("input",{type:"password",name:"pwCheck",onChange:x}),(0,s.jsx)("span",{style:{color:"red"},children:z.pwCheck})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("label",{htmlFor:"userName",children:"이름"}),(0,s.jsx)("input",{type:"text",name:"userName",onChange:x,autoComplete:"off"}),(0,s.jsx)("span",{style:{color:"red"},children:z.userName})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("label",{htmlFor:"birth",children:"생년월일"}),(0,s.jsx)("input",{type:"text",name:"birth",onChange:x,autoComplete:"off",minLength:6,maxLength:6}),(0,s.jsx)("span",{style:{color:"red"},children:z.birth})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("label",{htmlFor:"gender",children:"성별"}),(0,s.jsx)(u,{isOpend:n,openOrCloseSelect:F,options:[{key:"남자",value:"male"},{key:"여자",value:"female"}],setGenderState:D,genderState:q})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("label",{htmlFor:"email",children:"이메일"}),(0,s.jsxs)(v.fK,{children:[(0,s.jsx)("input",{type:"text",name:"email",minLength:4,maxLength:20,onChange:x,autoComplete:"off"}),(0,s.jsxs)("select",{name:"selectMail",onChange:x,children:[(0,s.jsx)("option",{children:"@gmail.com"}),(0,s.jsx)("option",{children:"@naver.com"}),(0,s.jsx)("option",{children:"@kakao.com"})]}),(0,s.jsx)("button",{type:"button",onClick:G,children:"코드전송"})]}),(0,s.jsx)("span",{style:{color:"red"},children:z.email})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("label",{htmlFor:"email_code",children:"이메일 인증코드"}),(0,s.jsx)(v.fK,{children:(0,s.jsx)("input",{className:"email_code",type:"text",name:"email_code",onChange:x,autoComplete:"off"})}),(0,s.jsx)("span",{style:{color:"red"},children:z.email_code})]})]}),(0,s.jsx)(v.BM,{type:"submit",children:"회원가입"})]}),c&&(0,s.jsx)(C.Z,{})]})}},208:function(a,b,c){"use strict";c.d(b,{FF:function(){return l},OQ:function(){return g},SP:function(){return j},WB:function(){return f},Xp:function(){return m},g1:function(){return e},hz:function(){return h},jb:function(){return i},vq:function(){return k}});var d=c(9521),e=d.ZP.div.withConfig({displayName:"Modal__ModalBg",componentId:"sc-1ucqyig-0"})(["position:absolute;top:0;left:0;width:100vw;height:100%;background-color:rgba(0,0,0,0.6);display:flex;justify-content:center;align-items:center;"]),f=d.ZP.div.withConfig({displayName:"Modal__ModalAlert",componentId:"sc-1ucqyig-1"})(["width:360px;height:220px;background-color:#fff;border-radius:8px;padding:40px;display:flex;flex-direction:column;justify-content:space-between;"]),g=d.ZP.div.withConfig({displayName:"Modal__ModalIcon",componentId:"sc-1ucqyig-2"})(["width:44px;height:44px;background-image:url('/alert_icon.png');background-size:44px;margin-bottom:15px;"]),h=d.ZP.div.withConfig({displayName:"Modal__ModalContent",componentId:"sc-1ucqyig-3"})(["display:flex;flex-direction:column;align-items:center;"]),i=d.ZP.div.withConfig({displayName:"Modal__ModalDesc",componentId:"sc-1ucqyig-4"})(["font-size:25px;color:black;"]),j=d.ZP.input.withConfig({displayName:"Modal__ModalInput",componentId:"sc-1ucqyig-5"})(["width:230px;height:20px;border:2px solid #a6a19e;border-radius:5px;font-size:16px;margin-top:10px;padding:7px;:focus{border:2px solid dodgerblue;outline:none;}"]),k=d.ZP.div.withConfig({displayName:"Modal__ModalDiv",componentId:"sc-1ucqyig-6"})(["margin-top:10px;color:red;"]),l=d.ZP.div.withConfig({displayName:"Modal__ModalBtnCon",componentId:"sc-1ucqyig-7"})(["display:flex;justify-content:space-between;width:100%;height:48px;"]),m=d.ZP.button.withConfig({displayName:"Modal__ModalBtn",componentId:"sc-1ucqyig-8"})(["width:48%;font-size:20px;border-radius:4px;cursor:pointer;border:",";background-color:",";color:",";"],function(a){return a.border||"rbga(0, 0, 0, 0.6)"},function(a){return a.bgc||"white"},function(a){return a.color||"rbga(0, 0, 0, 0.6)"})},1195:function(a,b,c){"use strict";c.d(b,{BM:function(){return h},C2:function(){return e},fK:function(){return g},kY:function(){return f}});var d=c(9521),e=d.ZP.div.withConfig({displayName:"registStyle__SignUpTitle",componentId:"sc-1yrknkx-0"})(["box-sizing:border-box;display:flex;flex-direction:column;align-items:center;color:white;font-size:30px;font-weight:600;margin-bottom:50px;height:100px;"]),f=d.ZP.form.withConfig({displayName:"registStyle__SignUpFrm",componentId:"sc-1yrknkx-2"})(["width:330px;margin:0 auto;& > ul > li{display:flex;flex-direction:column;margin-bottom:15px;& > label{color:white;margin-bottom:3px;font-size:13px;}& > input{width:100%;height:50px;box-sizing:border-box;border:2px solid #a6a19e;border-radius:5px;font-size:16px;padding:7px;}& > input:focus{border:2px solid dodgerblue;outline:none;}}span{margin-top:10px;}.false{color:red;}.true{color:green;}"]),g=d.ZP.div.withConfig({displayName:"registStyle__EmailContainer",componentId:"sc-1yrknkx-3"})(["display:flex;justify-content:space-between;& > input{width:",";height:50px;box-sizing:border-box;border:2px solid #a6a19e;border-radius:5px;font-size:16px;padding:7px;}& > select{width:40%;height:50px;box-sizing:border-box;border:2px solid #a6a19e;border-radius:5px;font-size:16px;padding:7px;}& > .email_code{width:100%;}& > input:focus{border:2px solid dodgerblue;outline:none;}& > button{border-radius:5px;background-color:#007f94;border:none;box-sizing:border-box;color:white;font-size:12px;width:15%;cursor:pointer;}"],function(a){return a.w||"40%"}),h=d.ZP.button.withConfig({displayName:"registStyle__SignUpBtn",componentId:"sc-1yrknkx-4"})(["margin-top:10px;width:100%;height:45px;border-radius:5px;border:none;text-align:center;line-height:45px;background-color:",";color:white;margin-bottom:",";cursor:pointer;font-size:17px;"],function(a){return a.bgc||"#007f94"},function(a){return a.mb||"30px"})},2175:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/regist",function(){return c(9528)}])}},function(a){a.O(0,[675,774,888,179],function(){var b;return a(a.s=2175)}),_N_E=a.O()}])