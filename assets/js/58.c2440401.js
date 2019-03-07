(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{348:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"truthy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#truthy","aria-hidden":"true"}},[t._v("#")]),t._v(" Truthy")]),t._v(" "),a("p",[t._v("JavaScript 有一个 "),a("code",[t._v("truthy")]),t._v(" 概念，即在某些场景下会被推断为 "),a("code",[t._v("true")]),t._v("，例如除 "),a("code",[t._v("0")]),t._v(" 以外的任何数字：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将会被推断出 `true`")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Any number other than 0 is truthy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("你可以用下表来做参考：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("Variable Type")])]),t._v(" "),a("th",[a("strong",[t._v("When it is falsy")])]),t._v(" "),a("th",[a("strong",[t._v("When it is truthy")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("string")]),t._v(" "),a("td",[t._v("' ' (empty string)")]),t._v(" "),a("td",[t._v("any other string")])]),t._v(" "),a("tr",[a("td",[t._v("number")]),t._v(" "),a("td",[t._v("0 NaN")]),t._v(" "),a("td",[t._v("any other number")])]),t._v(" "),a("tr",[a("td",[t._v("null")]),t._v(" "),a("td",[t._v("always")]),t._v(" "),a("td",[t._v("never")])]),t._v(" "),a("tr",[a("td",[t._v("Any other Object including empty ones like {},[]")]),t._v(" "),a("td",[t._v("never")]),t._v(" "),a("td",[t._v("always")])])])]),t._v(" "),a("h2",{attrs:{id:"明确的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#明确的","aria-hidden":"true"}},[t._v("#")]),t._v(" 明确的")]),t._v(" "),a("p",[t._v("通过操作符 "),a("code",[t._v("!!")]),t._v("，你可以很容易的将某些值转化为布尔类型的值，例如："),a("code",[t._v("!!foo")]),t._v("，它使用了两次 "),a("code",[t._v("!")]),t._v("，第一个 "),a("code",[t._v("!")]),t._v(" 用来将其（在这里是 "),a("code",[t._v("foo")]),t._v("）转换为布尔值，但是这一操作取得的是其取反后的值，第二个取反时，能得到真正的布尔值。")]),t._v(" "),a("p",[t._v("这在很多地方都可以看到：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Direct variables")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hasName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// As members of objects")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" someObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  hasName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("name\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReactJS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("someName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("someName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);