(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1588:function(e,t,r){"use strict";r.r(t),r.d(t,"components",(function(){return w}));var a=r(83),o=r.n(a),l=r(610),n=r(353),c=r.n(n),s=r(84);class m extends l.a{translate(e){return e=(e=c()(Object(s.a)(e))).replace(/\[matrix\]/,'<a href="https://matrix.org" target="_blank" rel="noreferrer noopener"><img width="79" height="34" alt="Matrix" style="padding-left: 1px;vertical-align: middle" src="welcome/images/matrix.svg"/></a>')}}o()(m,"replaces","EmbeddedPage");var u=r(82),g=r.n(u),d=r(93);const i=()=>{const e=d.a.get().branding;let t=[{text:"Blog",url:"https://element.io/blog"},{text:"Twitter",url:"https://twitter.com/element_hq"},{text:"GitHub",url:"https://github.com/vector-im/element-web"}];e&&e.authFooterLinks&&(t=e.authFooterLinks);const r=[];for(const e of t)r.push(g.a.createElement("a",{href:e.url,key:e.text,target:"_blank",rel:"noreferrer noopener"},e.text));return g.a.createElement("div",{className:"mx_AuthFooter"},r,g.a.createElement("a",{href:"https://matrix.org",target:"_blank",rel:"noreferrer noopener"},Object(s.a)("Powered by Matrix")))};i.replaces="AuthFooter";var h=i;class p extends g.a.PureComponent{render(){const e=d.a.get().branding;let t="themes/element/img/logos/element-logo.svg";return e&&e.authHeaderLogoUrl&&(t=e.authHeaderLogoUrl),g.a.createElement("div",{className:"mx_AuthHeaderLogo"},g.a.createElement("img",{src:t,alt:"Element"}))}}o()(p,"replaces","AuthHeaderLogo");var k=r(105);class b extends g.a.PureComponent{static getWelcomeBackgroundUrl(){if(b.welcomeBackgroundUrl)return b.welcomeBackgroundUrl;const e=d.a.get().branding;if(b.welcomeBackgroundUrl="themes/element/img/backgrounds/lake.jpg",e&&e.welcomeBackgroundUrl)if(Array.isArray(e.welcomeBackgroundUrl)){const t=Math.floor(Math.random()*e.welcomeBackgroundUrl.length);b.welcomeBackgroundUrl=e.welcomeBackgroundUrl[t]}else b.welcomeBackgroundUrl=e.welcomeBackgroundUrl;return b.welcomeBackgroundUrl}render(){const e=k.getComponent("auth.AuthFooter"),t={background:`center/cover fixed url(${b.getWelcomeBackgroundUrl()})`},r={position:"absolute",top:0,right:0,bottom:0,left:0,filter:"blur(40px)",background:t.background};return g.a.createElement("div",{className:"mx_AuthPage",style:t},g.a.createElement("div",{className:"mx_AuthPage_modal",style:{position:"relative",background:"initial"}},g.a.createElement("div",{className:"mx_AuthPage_modalBlur",style:r}),g.a.createElement("div",{className:"mx_AuthPage_modalContent",style:{display:"flex",zIndex:1,background:"rgba(255, 255, 255, 0.59)",borderRadius:"8px"}},this.props.children)),g.a.createElement(e,null))}}o()(b,"replaces","AuthPage"),o()(b,"welcomeBackgroundUrl",void 0);let w={};m&&(w["structures.VectorEmbeddedPage"]=m),h&&(w["views.auth.VectorAuthFooter"]=h),p&&(w["views.auth.VectorAuthHeaderLogo"]=p),b&&(w["views.auth.VectorAuthPage"]=b)}}]);
//# sourceMappingURL=element-web-component-index.js.map