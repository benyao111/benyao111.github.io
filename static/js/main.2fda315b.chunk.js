(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],[,,,function(e,a,t){e.exports={header:"Project_header__3SLKk",PythonProjects:"Project_PythonProjects__3EHB6",header2:"Project_header2__2XGw4",alink:"Project_alink__1lLS8"}},,,,,,,,,,,,function(e,a,t){e.exports={Abtme:"Abtme_Abtme__218Yf",header:"Abtme_header__2nD8r",resume:"Abtme_resume__2eudj",contactInfo:"Abtme_contactInfo__33XFI"}},,function(e,a,t){e.exports={SideDrawer:"SideDrawer_SideDrawer__1hgsZ",Open:"SideDrawer_Open__2begA",Close:"SideDrawer_Close__3uT_I",Logo:"SideDrawer_Logo__2BHp1"}},function(e,a,t){e.exports={mainpage:"mainpage_mainpage__2txJB",links:"mainpage_links__2xW3L"}},,function(e,a,t){e.exports={NavigationItem:"NavigationItem_NavigationItem__1U9IR",active:"NavigationItem_active__163C6"}},,,,,,,function(e,a,t){e.exports={NavigationItems:"NavigationItems_NavigationItems__vyoE3"}},,function(e,a,t){e.exports={Backdrop:"Backdrop_Backdrop__1HeG5"}},function(e,a,t){e.exports={Toolbar:"Toolbar_Toolbar__173VA",Logo:"Toolbar_Logo__1Q_4E"}},function(e,a,t){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__2cgm0"}},,function(e,a,t){e.exports=t(47)},,,,,function(e,a,t){},,,,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(26),c=t.n(o),i=t(11),l=(t(38),t(7)),s=t(8),m=t(10),d=t(9),u=t(18),h=t.n(u),g=function(e){return e.children},w=t(27),p=t.n(w),f=t(20),E=t.n(f),v=function(e){return r.a.createElement("li",{className:E.a.NavigationItem},r.a.createElement(i.b,{to:e.link,exact:!0,activeClassName:E.a.active}," ",e.children))},b=function(e){return r.a.createElement("ul",{className:p.a.NavigationItems},r.a.createElement(v,{link:"/",exact:!0},"Home"),r.a.createElement(v,{link:"/aboutme"},"About Me"),r.a.createElement(v,{link:"/projects"},"Projects"))},_=t(17),k=t.n(_),y=t(29),D=t.n(y),j=function(e){return e.show?r.a.createElement("div",{className:D.a.Backdrop,onClick:e.clicked}):null},N=function(e){var a=[k.a.SideDrawer,k.a.Close];return e.open&&(a=[k.a.SideDrawer,k.a.Open]),r.a.createElement(g,null,r.a.createElement(j,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:a.join(" ")},r.a.createElement("nav",null,r.a.createElement(b,null))))},S=t(30),C=t.n(S),I=t(31),P=t.n(I),T=function(e){return r.a.createElement("div",{className:P.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},O=function(e){return r.a.createElement("header",{className:C.a.Toolbar},r.a.createElement(T,{clicked:e.drawerToggleClicked}))},A=t(15),H=t.n(A),x=t(14),B=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:H.a.header},"About Me"),r.a.createElement("div",{className:H.a.Abtme},"My name is Ben and I am currently a student at UT Austin, class of 2022. I double major in Astronomy and Physics and I'm interested in delving deeper into computer science. In my free time I love trying my luck on \"gacha\" games and creating interesting projects. (Resume button below doesn't work since I didn't want to pay to host a site)"),r.a.createElement("div",{className:H.a.resume},r.a.createElement("a",{href:"/aboutme"},r.a.createElement(x.a,{variant:"outline-light"},"Resume"))),r.a.createElement("div",{className:H.a.contactInfo},"Phone: (609)-480-6967"),r.a.createElement("div",{className:H.a.contactInfo},"Email: benyao111@utexas.edu"))},L=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(O,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(N,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement(B,null))}}]),t}(n.Component),W=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e.LinkedinClicked=function(){console.log("LinkedinClicked")},e.GitClicked=function(){console.log("GitClicked")},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(O,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(N,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("div",{className:h.a.mainpage}," Benjamin Yao "),r.a.createElement("div",{className:h.a.links},r.a.createElement("a",{href:"https://www.linkedin.com/in/byao/"},r.a.createElement(x.a,{variant:"outline-light",onClick:this.LinkedinClicked},"LinkedIn"))),r.a.createElement("div",{className:h.a.links},r.a.createElement("a",{href:"https://github.com/benyao111"},r.a.createElement(x.a,{variant:"outline-light",onClick:this.GitClicked},"GitHub"))))}}]),t}(n.Component),G=(t(45),t(1)),J=t(3),R=t.n(J),M=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:R.a.header},"Projects"),r.a.createElement("div",{className:R.a.header2},"Python Projects:"),r.a.createElement("a",{href:"https://github.com/benyao111/pythonbot",className:R.a.alink},r.a.createElement("div",{className:R.a.PythonProjects},"Instagram Bot: Created an Instagram bot program using Python (Selenium) that can scroll through Instagram and like specific posts to help out influencers with low follower counts.")),r.a.createElement("a",{href:"/projects",className:R.a.alink},r.a.createElement("div",{className:R.a.PythonProjects},"Database Migration/Update Script: Script created during my internship at Comcast to migrate IP addresses and FQDNs to the TES Connector backend database.")),r.a.createElement("div",{className:R.a.header2},"JavaScript Projects:"),r.a.createElement("a",{href:"https://react-burger-d3798.web.app/",className:R.a.alink},r.a.createElement("div",{className:R.a.PythonProjects},"Burger App: Created a burger building and ordering web app with React JS")),r.a.createElement("a",{href:"https://github.com/benyao111/Weather-Website",className:R.a.alink},r.a.createElement("div",{className:R.a.PythonProjects},"Weather Website: Pulls data from a public weather API to give accurate readings of the temperature, location, and forecast summary for a single day.")),r.a.createElement("a",{href:"/",className:R.a.alink},r.a.createElement("div",{className:R.a.PythonProjects},"This Website: Built with React JS.")))},U=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(O,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(N,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement(M,null))}}]),t}(n.Component),F=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/",exact:!0,component:W}),r.a.createElement(G.a,{path:"/aboutme",component:L}),r.a.createElement(G.a,{path:"/projects",component:U})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(46);var Q=r.a.createElement(i.a,null,r.a.createElement(F,null));c.a.render(Q,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.2fda315b.chunk.js.map