(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{446:function(e,t,r){var content=r(495);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("3c9f6860",content,!0,{sourceMap:!1})},447:function(e,t,r){var content=r(497);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("702e3674",content,!0,{sourceMap:!1})},452:function(e,t,r){var content=r(519);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("0f106035",content,!0,{sourceMap:!1})},494:function(e,t,r){"use strict";r(446)},495:function(e,t,r){var n=r(10)(!1);n.push([e.i,"@media (min-width:1024px){.smartphone-only[data-v-958ad5ae]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-958ad5ae]{display:none!important}}.form__element[data-v-958ad5ae]{display:block;margin:0 0 var(--spacer-lg) 0}.form__button[data-v-958ad5ae]{display:block;width:100%}@media (min-width:1024px){.form__button[data-v-958ad5ae]{width:17.5rem}}@media (min-width:1024px){.form__horizontal[data-v-958ad5ae]{display:flex;flex-direction:row;justify-content:space-between}}@media (min-width:1024px){.form__horizontal .form__element[data-v-958ad5ae]{flex:1;margin-right:var(--spacer-2xl)}}.form__horizontal .form__element[data-v-958ad5ae]:last-child{margin-right:0}",""]),e.exports=n},496:function(e,t,r){"use strict";r(447)},497:function(e,t,r){var n=r(10)(!1);n.push([e.i,"@media (min-width:1024px){.smartphone-only[data-v-9faffca2]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-9faffca2]{display:none!important}}.form__element[data-v-9faffca2]{display:block;margin:0 0 var(--spacer-lg) 0}.form__button[data-v-9faffca2]{display:block;width:100%}@media (min-width:1024px){.form__button[data-v-9faffca2]{width:17.5rem}}@media (min-width:1024px){.form__horizontal[data-v-9faffca2]{display:flex;flex-direction:row;justify-content:space-between}}@media (min-width:1024px){.form__horizontal .form__element[data-v-9faffca2]{flex:1;margin-right:var(--spacer-lg)}}.form__horizontal .form__element[data-v-9faffca2]:last-child{margin-right:0}",""]),e.exports=n},518:function(e,t,r){"use strict";r(452)},519:function(e,t,r){var n=r(10)(!1);n.push([e.i,"@media (min-width:1024px){.smartphone-only[data-v-f7036210]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-f7036210]{display:none!important}}.message[data-v-f7036210],.notice[data-v-f7036210]{font-family:var(--font-family--primary);line-height:1.6}.message[data-v-f7036210]{margin:0 0 var(--spacer-xl) 0;font-size:var(--font-size--base)}.message__label[data-v-f7036210]{font-weight:400}.notice[data-v-f7036210]{margin:var(--spacer-lg) 0 0 0;font-size:var(--font-size--sm)}",""]),e.exports=n},628:function(e,t,r){"use strict";r.r(t);r(32),r(18),r(20),r(15),r(12),r(22),r(30);var n=r(8),o=(r(88),r(13)),l=r(85),f=r(125),d=r(3),m=r(17),c=r(245),v=r(23),_={name:"ProfileUpdateForm",components:{SfInput:c.a,SfButton:v.a,ValidationProvider:l.b,ValidationObserver:l.a},setup:function(e,t){var r=t.emit,n=Object(m.m)().user,o=function(){return{firstName:m.s.getFirstName(n.value),lastName:m.s.getLastName(n.value),email:m.s.getEmailAddress(n.value)}},form=Object(d.ref)(o());return{form:form,submitForm:function(e){return function(){r("submit",{form:form,onComplete:function(){form.value=o(),e()},onError:function(){}})}}}}},w=(r(494),r(2)),y=Object(w.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit,o=t.reset;return[r("form",{staticClass:"form",on:{submit:function(t){t.preventDefault(),n(e.submitForm(o))}}},[r("div",{staticClass:"form__horizontal"},[r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|min:2"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{attrs:{"data-cy":"my-profile-input_firstName",name:"firstName",label:"First Name",required:"",valid:!n[0],errorMessage:n[0]},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|min:2"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{attrs:{"data-cy":"my-profile-input_lastName",name:"lastName",label:"Last Name",required:"",valid:!n[0],errorMessage:n[0]},model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}})]}}],null,!0)})],1),e._v(" "),r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{attrs:{"data-cy":"my-profile-input_email",type:"email",name:"email",label:"Your e-mail",required:"",valid:!n[0],errorMessage:n[0]},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})]}}],null,!0)}),e._v(" "),r("SfButton",{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_update"}},[e._v(e._s(e.$t("Update personal data")))])],1)]}}])})}),[],!1,null,"958ad5ae",null).exports,h={name:"PasswordResetForm",components:{SfInput:c.a,SfButton:v.a,ValidationProvider:l.b,ValidationObserver:l.a},setup:function(e,t){var r=t.emit,form=Object(d.ref)({currentPassword:"",newPassword:"",repeatPassword:""});return{form:form,submitForm:function(e){return function(){r("submit",{form:form,onComplete:function(){form.value={currentPassword:"",newPassword:"",repeatPassword:""},e()},onError:function(){}})}}}}},P=(r(496),Object(w.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit,o=t.reset;return[r("form",{staticClass:"form",on:{submit:function(t){t.preventDefault(),n(e.submitForm(o))}}},[r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{attrs:{"data-cy":"my-profile-input_currentPassword",type:"password",name:"currentPassword",label:"Current Password",required:"",valid:!n[0],errorMessage:n[0]},model:{value:e.form.currentPassword,callback:function(t){e.$set(e.form,"currentPassword",t)},expression:"form.currentPassword"}})]}}],null,!0)}),e._v(" "),r("div",{staticClass:"form__horizontal"},[r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|password",vid:"password"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{attrs:{"data-cy":"my-profile-input_newPassword",type:"password",name:"newPassword",label:"New Password",required:"",valid:!n[0],errorMessage:n[0]},model:{value:e.form.newPassword,callback:function(t){e.$set(e.form,"newPassword",t)},expression:"form.newPassword"}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|confirmed:password"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{attrs:{"data-cy":"my-profile-input_repeatPassword",type:"password",name:"repeatPassword",label:"Repeat Password",required:"",valid:!n[0],errorMessage:n[0]},model:{value:e.form.repeatPassword,callback:function(t){e.$set(e.form,"repeatPassword",t)},expression:"form.repeatPassword"}})]}}],null,!0)})],1),e._v(" "),r("SfButton",{staticClass:"form__button",attrs:{"data-cy":"my-profile-btn_update-password"}},[e._v(e._s(e.$t("Update password")))])],1)]}}])})}),[],!1,null,"9faffca2",null).exports),x=r(789);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(l.c)("email",S(S({},f.c),{},{message:"Invalid email"})),Object(l.c)("required",S(S({},f.f),{},{message:"This field is required"})),Object(l.c)("min",S(S({},f.d),{},{message:"The field should have at least {length} characters"})),Object(l.c)("password",{validate:function(e){return String(e).length>=8&&String(e).match(/[A-Za-z]/gi)&&String(e).match(/[0-9]/gi)},message:"Password must have at least 8 characters including one letter and a number"}),Object(l.c)("confirmed",S(S({},f.a),{},{message:"Passwords don't match"}));var j={name:"PersonalDetails",components:{SfTabs:x.a,SfInput:c.a,SfButton:v.a,ProfileUpdateForm:y,PasswordResetForm:P},setup:function(){var e=Object(m.m)(),t=e.updateUser,r=e.changePassword,o=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return data=e.sent,e.next=6,r(data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r,n){return e.apply(this,arguments)}}();return{updatePersonalData:function(e){var form=e.form,r=e.onComplete,n=e.onError;return o((function(){return t({user:form.value})}),r,n)},updatePassword:function(e){var form=e.form,t=e.onComplete,n=e.onError;return o((function(){return r({current:form.value.currentPassword,new:form.value.newPassword})}),t,n)}}}},k=(r(518),Object(w.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("SfTabs",{attrs:{"open-tab":1}},[r("SfTab",{attrs:{"data-cy":"my-profile-tab_personal-data",title:"Personal data"}},[r("p",{staticClass:"message"},[e._v("\n      "+e._s(e.$t("Feel free to edit"))+"\n    ")]),e._v(" "),r("ProfileUpdateForm",{on:{submit:e.updatePersonalData}}),e._v(" "),r("p",{staticClass:"notice"},[e._v("\n      "+e._s(e.$t("Use your personal data"))+"\n      "),r("a",{attrs:{href:""}},[e._v(e._s(e.$t("Privacy Policy")))])])],1),e._v(" "),r("SfTab",{attrs:{"data-cy":"my-profile-tab_password-change",title:"Password change"}},[r("p",{staticClass:"message"},[e._v("\n      "+e._s(e.$t("Change password your account"))+":"),r("br"),e._v("\n      "+e._s(e.$t("Your current email address is"))+"\n      "),r("span",{staticClass:"message__label"},[e._v("example@email.com")])]),e._v(" "),r("PasswordResetForm",{on:{submit:e.updatePassword}})],1)],1)}),[],!1,null,"f7036210",null));t.default=k.exports}}]);