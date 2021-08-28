(this["webpackJsonpwheater-api"]=this["webpackJsonpwheater-api"]||[]).push([[0],{20:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var c,a,i,r,o,s,d,p,x,l,h=t(0),u=t.n(h),b=t(9),j=t.n(b),f=t(2),g=t(4),m=t(3),O={weatherApi:{key:"d355671dd4ee8898100b7f1969362cd6",base:"http://api.weatherstack.com/current"},unsplashApi:{key:"qh-b4-wEIqKayiSN-tKQ5JP8opkjnI6-YeoYqj_smnU",base:"https://api.unsplash.com/search/photos?query="}},y=t(1);var w=m.a.div(c||(c=Object(f.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: black;\n  background: ",";\n  background-size: cover;\n  transition: 2s ease-out;\n  @media (max-width: 800px) {\n    padding: 0px 30px;\n  }\n"])),(function(n){return n.background?'url("'.concat(n.background,'") no-repeat center center fixed'):"#2B2B3D"})),k=m.a.form(a||(a=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 750px;\n  text-align: center;\n\n  input {\n    width: 500px;\n    padding: 5px 20px;\n    margin: 0px 0px 80px 0px;\n    border-radius: 0px 0px 10px 10px;\n    background: #fff;\n    border: none;\n    outline: none;\n    @media (max-width: 800px) {\n      width: 100%;\n      margin: 0px 0px 50px 0px;\n    }\n  }\n"]))),v=m.a.div(i||(i=Object(f.a)(["\n  flex: 1;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(4.5px);\n  -webkit-backdrop-filter: blur(4.5px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n\n  @media (max-width: 800px) {\n    justify-content: center;\n    flex: 0;\n  }\n  h2 {\n    font-size: 50px;\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);\n    padding: 20px;\n\n    @media (max-width: 800px) {\n      font-size: 30px;\n    }\n  }\n\n  p {\n    font-size: 30px;\n    color: #ccc;\n    font-style: italic;\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);\n\n    @media (max-width: 800px) {\n      font-size: 15px;\n    }\n  }\n"]))),z=m.a.div(r||(r=Object(f.a)(["\n  font-size: 50px;\n  color: #fff;\n  padding: 30px;\n  border-radius: 10px;\n  transition: all 2s ease-out;\n\n  @media (max-width: 800px) {\n    font-size: 30px;\n  }\n"]))),q=m.a.div(o||(o=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),S=m.a.div(s||(s=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n\n  p {\n    padding: 20px;\n  }\n"]))),A=m.a.div(d||(d=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n"]))),_=m.a.div(p||(p=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n"]))),B=m.a.div(x||(x=Object(f.a)(["\n  font-size: 15px;\n  color: white;\n  text-shadow: ",";\n  padding: 20px 0px;\n  a {\n    color: white;\n    text-decoration: none;\n    transition: 0.4s ease;\n    :hover {\n      color: #ccc;\n    }\n  }\n"])),(function(n){return n.background?"0px 0px 10px #000":"0"})),D=m.a.div(l||(l=Object(f.a)(["\n  flex: 2;\n\n  @media (max-width: 800px) {\n    display: none;\n  }\n"]))),C=function(){var n=Object(h.useState)(""),e=Object(g.a)(n,2),t=e[0],c=e[1],a=Object(h.useState)({}),i=Object(g.a)(a,2),r=i[0],o=i[1],s=Object(h.useState)({}),d=Object(g.a)(s,2),p=d[0],x=d[1],l=Object(h.useState)(0),u=Object(g.a)(l,2),b=u[0],j=u[1];return Object(y.jsxs)(w,{background:p[0]&&p[b].urls.full,children:[Object(y.jsxs)(k,{onSubmit:function(n){n.preventDefault(),fetch("https://cors-anywhere.herokuapp.com/".concat(O.weatherApi.base,"?access_key=").concat(O.weatherApi.key,"&query=").concat(t)).then((function(n){return n.json()})).then((function(n){o(n),c(""),console.log(n),console.log(r.current)})),fetch("".concat(O.unsplashApi.base).concat(t,"&client_id=").concat(O.unsplashApi.key)).then((function(n){return n.json()})).then((function(n){x(n.results),console.log(p)})),j(Math.floor(10*Math.random()))},children:[Object(y.jsx)("input",{type:"text",placeholder:'By example "London"',value:t,onChange:function(n){return c(n.target.value)}}),"undefined"!==typeof r.current?[Object(y.jsxs)(v,{children:[Object(y.jsx)("h2",{children:r.request.query}),Object(y.jsx)("p",{children:r.location.localtime}),Object(y.jsxs)(z,{children:[Object(y.jsxs)(q,{children:[Object(y.jsxs)("h1",{children:[r.current.temperature,"\xb0C/"]}),Object(y.jsxs)("h3",{children:["FL ",r.current.feelslike,"\xb0C"]})]}),Object(y.jsx)(A,{children:Object(y.jsx)("img",{src:r.current.weather_icons[0],alt:""})}),Object(y.jsxs)(S,{children:[Object(y.jsx)("p",{children:r.current.weather_descriptions[0]}),Object(y.jsxs)("p",{children:["Humidity ",r.current.humidity,"%"]})]})]})]}),Object(y.jsx)(D,{})]:Object(y.jsx)(_,{children:Object(y.jsx)("p",{children:"Enter the name of any city above to see the temperature and the time."})})]}),Object(y.jsx)(B,{background:p[0],children:Object(y.jsxs)("p",{children:["Developed with \u2764\ufe0f by"," ",Object(y.jsx)("a",{href:"https://github.com/darking98",target:"_blank",children:"Diego Rodriguez"})]})})]})};t(20);j.a.render(Object(y.jsx)(u.a.StrictMode,{children:Object(y.jsx)(C,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2c8e8572.chunk.js.map