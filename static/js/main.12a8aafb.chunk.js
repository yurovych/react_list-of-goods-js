(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(8),o=n(6),i=(n(13),n(14),n(1)),a=n(3),l=n.n(a),u=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(){var t=Object(i.useState)(""),e=Object(o.a)(t,2),n=e[0],s=e[1],c=Object(i.useState)(!1),a=Object(o.a)(c,2),h=a[0],j=a[1];var d=function(t,e,n){var s=Object(r.a)(t);switch(e){case"sortAlphabet":s.sort((function(t,e){return t.localeCompare(e)}));break;case"sortLength":s.sort((function(t,e){return t.length-e.length}))}return n&&s.reverse(),s}(b,n,h),g=l()({button:!0,"is-info":!0,"is-light":!("sortAlphabet"===n)}),p=l()({button:!0,"is-success":!0,"is-light":!("sortLength"===n)}),f=l()({button:!0,"is-warning":!0,"is-light":!h}),O=l()({button:!0,"is-danger":!0,"is-light":!0,hiden:!(""!==n||!0===h)});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{onClick:function(){return s("sortAlphabet")},type:"button",className:g,children:"Sort alphabetically"}),Object(u.jsx)("button",{onClick:function(){return s("sortLength")},type:"button",className:p,children:"Sort by length"}),Object(u.jsx)("button",{onClick:function(){return j(!h)},type:"button",className:f,children:"Reverse"}),Object(u.jsx)("button",{onClick:function(){s(""),j(!1)},type:"button",className:O,children:"Reset"})]}),Object(u.jsx)("ul",{children:d.map((function(t){return Object(u.jsx)("li",{children:t},t)}))})]})};c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.12a8aafb.chunk.js.map