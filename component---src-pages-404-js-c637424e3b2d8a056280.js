(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(162),l=n(160),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:e},o.a.createElement(l.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(o.a.Component);t.default=s;var u="1097489062"},153:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var a=n(164),r=new(n.n(a).a)({baseFontSize:"14px",baseLineHeight:1.5,headerFontFamily:["Roboto Condensed","helvetica","sans-serif"],bodyFontFamily:["Roboto Condensed","helvetica","sans-serif"],headerColor:"black",bodyColor:"#444",overrideStyles:function(e,t,n){e.adjustFontSizeTo,e.rhythm;return{body:{fontStretch:"normal",letterSpacing:".002em",fontFeatureSettings:"'kern' 1 , 'liga' 1"},h1:{fontSize:"42px"},h2:{fontSize:"32px"},h3:{fontSize:"20px",fontWeight:"500"},"a[href]":{textDecoration:"none",color:"#0366d6"},"a:visited":{color:"#1756a9"},hr:{color:"#e8e8e8"}}}});var i=r.rhythm,o=r.scale},154:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(152),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(155),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},157:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(53),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,n){e.exports=n.p+"static/pearl-logo-7c23428086b92075fdc1e949f343cdfc.png"},159:function(e,t,n){e.exports=n.p+"static/profile-pic-496f45ea0fb4d4c19e1c6e6d9161fad4.png"},160:function(e,t,n){"use strict";var a=n(161),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(168),s=n.n(l),u=n(154);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Johnny Zhu",description:"A starter blog demonstrating what Gatsby can do.",author:"Johnny Zhu"}}}}},162:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=(n(73),n(52),n(156),n(32),n(154)),o=n(158),c=n.n(o),l=n(153),s={home:{display:"Projects",url:"/"},about:{display:"About me",url:"/about"}},u=function(e){var t=e.title,n=Object(a.useState)("undefined"!=typeof window&&window.innerWidth<=480),o=n[0],u=n[1];return Object(a.useEffect)(function(){var e=function(){u(window.innerWidth<=480)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),r.a.createElement("div",{style:{display:"flex",flexDirection:o?"column":"row",alignItems:o?"flex-start":"center",justifyContent:"space-between",marginBottom:Object(l.a)(1.5)}},r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("img",{src:c.a,alt:"",width:"40px",height:"40px",style:{marginTop:"4px"}}),r.a.createElement("h1",{style:Object.assign({marginBottom:0,marginLeft:Object(l.a)(5/4)},Object(l.b)(1.5))},r.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},t))),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginTop:o?"-7px":"0px",paddingLeft:o?"47px":"0px"}},Object.entries(s).map(function(e){var t=e[0],n=e[1];return r.a.createElement(i.Link,{key:t,style:{fontSize:"14px",fontWeight:"500",boxShadow:"none",textDecoration:"none",color:"gray",marginLeft:Object(l.a)(1)},to:n.url},n.display)})))},d=n(159),m=n.n(d),p=function(e){var t=e.subtitle;return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("h2",{style:{marginBottom:Object(l.a)(2)}},t),"About me"===t&&r.a.createElement("img",{src:m.a,alt:"",width:"20%",height:"20%",style:{marginTop:Object(l.a)(-.75),marginBottom:Object(l.a)(-.5),float:"right"}}))},f=n(165),h=n(163),y=n(166),g=n(167);h.b.add(y.a,g.a);var b={linkedin:{icon:"linkedin",display:"jozhu",url:"https://www.linkedin.com/in/jozhu"},github:{icon:"github",display:"zhujohnny",url:"https://github.com/zhujohnny"},twitter:{icon:"twitter",display:"zhujohnny",url:"https://twitter.com/zhujohnny"}},w=function(){return r.a.createElement("div",{style:{marginTop:Object(l.a)(3)}},r.a.createElement("hr",{style:{marginBottom:Object(l.a)(1)}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("div",{style:{alignSelf:"flex-end"}},r.a.createElement("div",null,r.a.createElement(f.a,{icon:"envelope",size:"lg"}),r.a.createElement("span",{style:{marginLeft:Object(l.a)(.25)}},"Johnny Zhu")),r.a.createElement("div",{style:{marginTop:Object(l.a)(.25),marginBottom:Object(l.a)(.25)}},"mailto:",r.a.createElement("a",{href:"mailto:zhujohnny@gmail.com",style:{marginLeft:Object(l.a)(.25)}},"zhujohnny"))),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end"}},Object.entries(b).map(function(e){var t=e[0],n=e[1];return r.a.createElement("div",{key:t,style:{display:"flex",alignItems:"center"}},r.a.createElement("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},n.display),r.a.createElement(f.a,{icon:["fab",n.icon],size:"lg",style:{margin:Object(l.a)(.25),width:Object(l.a)(5/4)}}))}))))};t.a=function(e){var t=e.title,n=e.subtitle,a=e.children;return r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(30),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},r.a.createElement("nav",null,r.a.createElement(u,{title:t})),r.a.createElement("header",null,r.a.createElement(p,{subtitle:n})),r.a.createElement("main",null,a),r.a.createElement("footer",null,r.a.createElement(w,null)))}}}]);
//# sourceMappingURL=component---src-pages-404-js-c637424e3b2d8a056280.js.map