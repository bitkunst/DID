(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{9307:function(a,b,c){"use strict";var d,e=c(29),f=c(7794),g=c.n(f),h=c(3023),i=(d=(0,e.Z)(g().mark(function a(b){var c,d;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c="/dev/delApp",a.next=4,h.Z.post(c,{idx:b});case 4:return d=a.sent,a.abrupt("return",d.data);case 8:return a.prev=8,a.t0=a.catch(0),console.log(a.t0),a.abrupt("return",!1);case 12:case"end":return a.stop()}},a,null,[[0,8]])})),function(a){return d.apply(this,arguments)});b.Z=i},7383:function(a,b,c){"use strict";c.d(b,{Z:function(){return o}});var d=c(7294),e=c(9521),f=e.ZP.div.withConfig({displayName:"quitModal__ModalBg",componentId:"sc-10a208l-0"})(["position:absolute;top:0;left:0;width:100vw;height:100%;background-color:rgba(0,0,0,0.6);display:flex;justify-content:center;align-items:center;"]),g=e.ZP.div.withConfig({displayName:"quitModal__ModalAlert",componentId:"sc-10a208l-1"})(["width:360px;height:220px;background-color:#fff;border-radius:8px;padding:40px;display:flex;flex-direction:column;justify-content:space-between;"]),h=e.ZP.div.withConfig({displayName:"quitModal__ModalIcon",componentId:"sc-10a208l-2"})(["width:44px;height:44px;background-image:url('/alert_icon.png');background-size:44px;margin-bottom:30px;"]),i=e.ZP.div.withConfig({displayName:"quitModal__ModalDesc",componentId:"sc-10a208l-3"})(["font-size:35px;color:black;"]),j=e.ZP.div.withConfig({displayName:"quitModal__ModalBtnCon",componentId:"sc-10a208l-4"})(["display:flex;justify-content:space-between;width:100%;height:48px;"]),k=e.ZP.button.withConfig({displayName:"quitModal__ModalBtn",componentId:"sc-10a208l-5"})(["width:48%;font-size:20px;border-radius:4px;cursor:pointer;border:",";background-color:",";color:",";"],function(a){return a.border||"rbga(0, 0, 0, 0.6)"},function(a){return a.bgc||"white"},function(a){return a.color||"rbga(0, 0, 0, 0.6)"}),l=e.ZP.input.withConfig({displayName:"quitModal__ModalInput",componentId:"sc-10a208l-6"})(["width:100%;height:30px;box-sizing:border-box;border:2px solid #a6a19e;border-radius:5px;font-size:16px;padding:7px;margin-top:8px;"]),m=c(2536),n=c(5893),o=function(a){var b=(0,d.useState)(!1),c=b[0],e=b[1],o=(0,d.useState)(""),p=o[0],q=o[1],r=(0,d.useState)(""),s=r[0],t=r[1],u=function(a){q(a.target.value)},v=function(){e(!0),p===a.appName?a.delAppFromModal():t("앱 이름이 일치하지 않습니다."),e(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{children:(0,n.jsxs)(g,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(h,{}),(0,n.jsx)(i,{children:"삭제하시겠습니까?"}),(0,n.jsx)(l,{placeholder:"앱 이름을 입력해주세요.",onChange:u}),(0,n.jsx)("span",{style:{color:"red"},children:s||""})]}),(0,n.jsxs)(j,{children:[(0,n.jsx)(k,{onClick:a.closeDelModal,children:"취소"}),(0,n.jsx)(k,{border:"none",bgc:"#f44954",color:"white",onClick:v,children:"삭제"})]})]})}),c&&(0,n.jsx)(m.Z,{})]})}},2536:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(9521).ZP.div.withConfig({displayName:"loading__LoadingIcon",componentId:"sc-f5tguq-0"})(["width:200px;height:200px;background-image:url('/loading.gif');"]),e=c(208),f=c(5893),g=function(){return(0,f.jsx)(e.g1,{children:(0,f.jsx)(e.WB,{children:(0,f.jsxs)(e.hz,{children:[(0,f.jsx)(d,{}),(0,f.jsx)(e.jb,{children:"로딩중"})]})})})}},2161:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return D}});var d,e=c(29),f=c(7794),g=c.n(f),h=c(1664),i=c.n(h),j=c(7294),k=c(1163),l=c.n(k),m=c(5485),n=c(8237),o=c(9521),p=o.ZP.a.withConfig({displayName:"appList__AddAppBtn",componentId:"sc-1eamz2-0"})(["width:30%;height:240px;background-color:#007f94;border-radius:8px;color:white;border:none;cursor:pointer;display:flex;flex-direction:column;justify-content:center;align-items:center;& > div{transition:ease-in 300ms all;}& > .plus_icon{font-size:70px;}& > .plus_text{font-size:25px;}&:hover > .plus_icon{font-size:75px;}&:hover > .plus_text{font-size:27px;}"]),q=p,r=c(3023),s=(d=(0,e.Z)(g().mark(function a(b){var c,d,e;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c="/dev/appList",d={_id:b},a.next=4,r.Z.post(c,d);case 4:return e=a.sent,a.abrupt("return",e.data);case 6:case"end":return a.stop()}},a)})),function(a){return d.apply(this,arguments)}),t=s,u=c(5675),v=c.n(u),w=c(9307),x=c(7383),y=c(5893),z=function(a){var b=a.appListData,c=(0,j.useState)([]),d=c[0],f=c[1],h=(0,j.useState)(),i=h[0],k=h[1],m=(0,j.useState)(!1),o=m[0],p=m[1];(0,j.useEffect)(function(){f(b)},[b]);var q,r=function(){p(!1)},s=(q=(0,e.Z)(g().mark(function a(){var b,c,e;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(i){a.next=2;break}return a.abrupt("return");case 2:return b=i.idx,a.next=5,(0,w.Z)(b.toString());case 5:(c=a.sent)?(alert("어플리케이션이 삭제 되었습니다."),p(!1),f(e=d.filter(function(a){return a.idx!==b}))):alert("잠시후에 다시 시도해주세요.");case 7:case"end":return a.stop()}},a)})),function(){return q.apply(this,arguments)});return(0,y.jsxs)(y.Fragment,{children:[d.map(function(a){var c;return(0,y.jsxs)(n.cw,{onClick:(c=a.idx,function(a){if(a.target.classList.contains("disconnect_btn")){k(b.filter(function(a){return a.idx===c})[0]),p(!0);return}l().push({pathname:"/dev/appInfo",query:{idx:c}},"/dev/appInfo")}),style:{cursor:"pointer"},children:[(0,y.jsx)(n.dk,{children:(0,y.jsx)(v(),{loader:function(){return a.imgUrl||"/no_img.png"},src:a.imgUrl||"/no_img.png",alt:"어플로고",width:100,height:100,objectFit:"contain"})}),(0,y.jsxs)(n.bm,{children:[(0,y.jsx)("p",{className:"connection_name",children:a.name}),(0,y.jsx)("p",{className:"connection_desc",children:a.appDesc}),(0,y.jsx)("button",{className:"disconnect_btn",children:"삭제"})]})]},a.idx)}),o&&i&&(0,y.jsx)(x.Z,{closeDelModal:r,appName:i.name,delAppFromModal:s})]})},A=z,B=c(1791),C=function(){var a=(0,j.useState)([]),b=a[0],c=a[1],d=(0,j.useContext)(B.Global),f=d.userData;return(0,j.useEffect)(function(){(0,e.Z)(g().mark(function a(){var b,d;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(f){a.next=2;break}return a.abrupt("return");case 2:if(Object.keys(f).length||(alert("로그인 후 이용 가능합니다."),l().push("/user/login")),b=f.idx){a.next=6;break}return a.abrupt("return");case 6:return a.next=8,t(b);case 8:c(d=a.sent);case 10:case"end":return a.stop()}},a)}))()},[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(m.wW,{children:[(0,y.jsx)(m.zg,{imageUrl:"/shelid_icon.png"}),(0,y.jsx)(m.Dx,{children:"Applications"})]}),(0,y.jsxs)(n.WT,{children:[(0,y.jsx)(A,{appListData:b}),(0,y.jsx)(i(),{href:"/dev/addApp",children:(0,y.jsxs)(q,{children:[(0,y.jsx)("div",{className:"plus_icon",children:"+"}),(0,y.jsx)("div",{className:"plus_text",children:"앱 등록하기"})]})})]})]})},D=C},208:function(a,b,c){"use strict";c.d(b,{FF:function(){return l},OQ:function(){return g},SP:function(){return j},WB:function(){return f},Xp:function(){return m},g1:function(){return e},hz:function(){return h},jb:function(){return i},vq:function(){return k}});var d=c(9521),e=d.ZP.div.withConfig({displayName:"Modal__ModalBg",componentId:"sc-1ucqyig-0"})(["position:absolute;top:0;left:0;width:100vw;height:100%;background-color:rgba(0,0,0,0.6);display:flex;justify-content:center;align-items:center;"]),f=d.ZP.div.withConfig({displayName:"Modal__ModalAlert",componentId:"sc-1ucqyig-1"})(["width:360px;height:220px;background-color:#fff;border-radius:8px;padding:40px;display:flex;flex-direction:column;justify-content:space-between;"]),g=d.ZP.div.withConfig({displayName:"Modal__ModalIcon",componentId:"sc-1ucqyig-2"})(["width:44px;height:44px;background-image:url('/alert_icon.png');background-size:44px;margin-bottom:15px;"]),h=d.ZP.div.withConfig({displayName:"Modal__ModalContent",componentId:"sc-1ucqyig-3"})(["display:flex;flex-direction:column;align-items:center;"]),i=d.ZP.div.withConfig({displayName:"Modal__ModalDesc",componentId:"sc-1ucqyig-4"})(["font-size:25px;color:black;"]),j=d.ZP.input.withConfig({displayName:"Modal__ModalInput",componentId:"sc-1ucqyig-5"})(["width:230px;height:20px;border:2px solid #a6a19e;border-radius:5px;font-size:16px;margin-top:10px;padding:7px;:focus{border:2px solid dodgerblue;outline:none;}"]),k=d.ZP.div.withConfig({displayName:"Modal__ModalDiv",componentId:"sc-1ucqyig-6"})(["margin-top:10px;color:red;"]),l=d.ZP.div.withConfig({displayName:"Modal__ModalBtnCon",componentId:"sc-1ucqyig-7"})(["display:flex;justify-content:space-between;width:100%;height:48px;"]),m=d.ZP.button.withConfig({displayName:"Modal__ModalBtn",componentId:"sc-1ucqyig-8"})(["width:48%;font-size:20px;border-radius:4px;cursor:pointer;border:",";background-color:",";color:",";"],function(a){return a.border||"rbga(0, 0, 0, 0.6)"},function(a){return a.bgc||"white"},function(a){return a.color||"rbga(0, 0, 0, 0.6)"})},8237:function(a,b,c){"use strict";c.d(b,{WT:function(){return e},bm:function(){return h},cw:function(){return f},dk:function(){return g}});var d=c(9521),e=d.ZP.div.withConfig({displayName:"connections__ConnectionsWrap",componentId:"sc-8jbnes-0"})(["width:100%;height:100%;display:flex;flex-wrap:wrap;gap:5%;"]),f=d.ZP.div.withConfig({displayName:"connections__ConnectedDiv",componentId:"sc-8jbnes-1"})(["width:30%;height:240px;background-color:#fff;margin-bottom:40px;border-radius:8px;padding:20px;box-sizing:border-box;display:flex;"]),g=d.ZP.div.withConfig({displayName:"connections__ConnectionImg",componentId:"sc-8jbnes-2"})(["width:50%;display:flex;justify-content:center;align-items:center;"]),h=d.ZP.div.withConfig({displayName:"connections__ConnectionInfo",componentId:"sc-8jbnes-3"})(["padding:40px 0;width:50%;& > .connection_name{font-size:20px;font-weight:600;margin-bottom:16px;color:black;}& > .connection_desc{color:#c2bdba;font-size:12px;margin-bottom:30px;}& > .disconnect_btn{width:80px;height:30px;background-color:#f44954;border:none;border-radius:4px;color:white;}"])},5485:function(a,b,c){"use strict";c.d(b,{Dx:function(){return g},wW:function(){return e},zg:function(){return f}});var d=c(9521),e=d.ZP.div.withConfig({displayName:"title__ContentTitle",componentId:"sc-1fjmapq-0"})(["width:210px;height:96px;margin:0 auto;display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin-bottom:45px;"]),f=d.ZP.div.withConfig({displayName:"title__TitleIcon",componentId:"sc-1fjmapq-1"})(["width:50px;height:50px;background-image:url(",");background-size:50px;"],function(a){return a.imageUrl}),g=d.ZP.p.withConfig({displayName:"title__Title",componentId:"sc-1fjmapq-2"})(["font-size:30px;color:white;"])},804:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dev/appList",function(){return c(2161)}])}},function(a){a.O(0,[675,774,888,179],function(){var b;return a(a.s=804)}),_N_E=a.O()}])