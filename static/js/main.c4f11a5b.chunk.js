(this["webpackJsonpchucknorris-jokes"]=this["webpackJsonpchucknorris-jokes"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),i=n.n(r),o=n(3),s=n.n(o),a=(n(13),n(4)),u=n(5),h=n(7),j=n(6),f=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).state={categories:[]},c}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.chucknorris.io/jokes/categories").then((function(t){return t.json()})).then((function(e){t.setState({categories:e})}))}},{key:"render",value:function(){var t=this.state.categories;return Object(c.jsxs)("ol",{children:[" ",t.map((function(t,e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#",children:t})})}))]})}}]),n}(r.Component);var b=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(f,{})})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),i(t),o(t)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),l()}},[[14,1,2]]]);
//# sourceMappingURL=main.c4f11a5b.chunk.js.map