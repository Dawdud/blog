(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{231:function(t,s){},233:function(t,s,a){"use strict";var e={props:["post"]},i=a(91),n=Object(i.a)(e,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"post__thumbnail"},[a("g-image",{attrs:{src:t.post.image}})],1),a("header",{staticClass:"post__header"},[a("g-link",{staticClass:"post__title",attrs:{to:t.post.path}},[a("span",{staticClass:"underline"},[t._v(t._s(t.post.title))])]),a("div",{staticClass:"post__meta"},[a("span",{staticClass:"post__date"},[a("i",{staticClass:"far fa-calendar-alt calendar"}),a("p",{staticClass:"published"},[t._v(t._s(t.post.date))])])])],1)])},[],!1,null,null,null);s.a=n.exports},234:function(t,s,a){"use strict";var e=a(231),i=a.n(e);s.default=i.a},239:function(t,s,a){"use strict";a.r(s);var e={metaInfo:function(){return{title:this.$page.post.title}},methods:{},components:{Header:a(233).a}},i=a(91),n=a(234),o=Object(i.a)(e,function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("div",{staticClass:"blog"},[s("div",{staticClass:"post__cart"},[s("Header",{attrs:{post:this.$page.post}}),s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post__content post__content--blog",domProps:{innerHTML:this._s(this.$page.post.content)}}),s("vue-disqus",{attrs:{shortname:"zapiskizfrontu",identifier:this.$page.post.title}})],1)])])},[],!1,null,null,null);"function"==typeof n.default&&Object(n.default)(o);s.default=o.exports}}]);