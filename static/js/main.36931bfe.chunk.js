(this["webpackJsonphomework4-phonebook"]=this["webpackJsonphomework4-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={container:"Form_container__z8PxQ",label:"Form_label__2eDTZ",input:"Form_input__1XZMz",btn:"Form_btn__nahy8"}},,,function(e,t,n){e.exports={label:"Search_label__3i5E2",input:"Search_input__1C4jb"}},function(e,t,n){e.exports={item:"ContactItem_item__huqH8",btn:"ContactItem_btn__RctKG"}},,function(e,t,n){e.exports={list:"ContactList_list__2ycmk"}},,,,,,function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(7),s=n.n(i),o=n(3),l=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),n]})},u=n(16),b=n(2),j=n.n(b),m=function(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(o.a)(n,2),i=r[0],s=r[1],l=Object(a.useState)(""),b=Object(o.a)(l,2),m=b[0],d=b[1],h=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":s(c);break;case"number":d(c);break;default:return}};return Object(c.jsxs)("form",{className:j.a.container,onSubmit:function(e){e.preventDefault(),t({id:Object(u.a)(),name:i,number:m}),s(""),d("")},children:[Object(c.jsxs)("label",{className:j.a.label,children:["Name",Object(c.jsx)("input",{className:j.a.input,required:!0,type:"text",name:"name",value:i,onChange:h})]}),Object(c.jsxs)("label",{className:j.a.label,children:["Number",Object(c.jsx)("input",{className:j.a.input,required:!0,type:"tel",name:"number",value:m,pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",placeholder:"000-00-00",onChange:h})]}),Object(c.jsx)("button",{className:j.a.btn,type:"submit",children:"Add contact"})]})},d=n(5),h=n.n(d),f=function(e){var t=e.onChange,n=e.filter;return Object(c.jsxs)("label",{className:h.a.label,children:["Find contacts by name",Object(c.jsx)("input",{className:h.a.input,type:"text",name:"filter",value:n,onChange:function(e){var n=e.currentTarget.value;t(n)}})]})},O=n(6),x=n.n(O),p=function(e){var t=e.contact,n=e.handleClick;return Object(c.jsxs)("li",{className:x.a.item,children:[Object(c.jsxs)("div",{children:[t.name,": ",t.number]}),Object(c.jsx)("button",{className:x.a.btn,onClick:function(){return n(t.id)},children:"Delete"})]})},_=n(8),v=n.n(_),g=function(e){var t=e.contacts,n=e.onDelete;return Object(c.jsx)("ul",{className:v.a.list,children:t.map((function(e){return Object(c.jsx)(p,{contact:e,handleClick:n},e.id)}))})},C=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),u=s[0],b=s[1];Object(a.useEffect)((function(){var e=localStorage.getItem("contacts");if(e){var t=JSON.parse(e);r(t)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var j=n.filter((function(e){return e.name.toLocaleLowerCase().includes(u.toLocaleLowerCase())}));return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{title:"Phonebook",children:Object(c.jsx)(m,{onSubmit:function(e){var t=n.find((function(t){return t.name===e.name}));t?alert("".concat(t.name," is already in contacts")):r(n.concat([e]))}})}),Object(c.jsxs)(l,{title:"Contacts",children:[n.length>0&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f,{onChange:function(e){b(e)},filter:u}),j.length>0?Object(c.jsx)(g,{contacts:j,onDelete:function(e){var t=n.filter((function(t){return t.id!==e}));r(t)}}):Object(c.jsx)("span",{children:"Contacts is not found"})]}),!n.length&&Object(c.jsx)("span",{children:"No contacts yet. Add contacts"})]})]})};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.36931bfe.chunk.js.map