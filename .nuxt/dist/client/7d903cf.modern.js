(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{351:function(e,t,r){var content=r(382);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("330483d6",content,!0,{sourceMap:!1})},381:function(e,t,r){"use strict";r(351)},382:function(e,t,r){var n=r(10)(!1);n.push([e.i,"@media (min-width:1024px){.smartphone-only[data-v-3f18df0d]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-3f18df0d]{display:none!important}}p[data-v-3f18df0d]{margin:0}.phone[data-v-3f18df0d]{margin-top:var(--spacer-base)}",""]),e.exports=n},383:function(e,t,r){var content=r(449);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("15337a42",content,!0,{sourceMap:!1})},384:function(e,t,r){var content=r(451);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("7c2cba89",content,!0,{sourceMap:!1})},394:function(e,t,r){"use strict";var n=r(3),o=r(9),d={props:{address:{type:Object,required:!0}},setup(e){var{$ct:{config:t}}=Object(o.useVSFContext)(),address=Object(n.toRef)(e,"address");return{street:Object(n.computed)((()=>[address.streetName,address.streetNumber&&" ".concat(address.streetNumber),address.apartment&&", Apartment ".concat(address.apartment)].filter(Boolean).join(""))),country:Object(n.computed)((()=>{var e,r=address.country;return(null===(e=t.countries.find((e=>e.name===r)))||void 0===e?void 0:e.label)||r}))}}},l=(r(381),r(2)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v(e._s(e.address.firstName)+" "+e._s(e.address.lastName))]),e._v(" "),r("p",[e._v(e._s(e.street))]),e._v(" "),r("p",[e._v("\n    "+e._s(e.address.city)+"\n    "+e._s(e.address.state)+"\n    "+e._s(e.address.postalCode)+"\n  ")]),e._v(" "),r("p",[e._v(e._s(e.country))]),e._v(" "),e.address.phone?r("p",{staticClass:"phone"},[e._v(" "+e._s(e.address.phone))]):e._e()])}),[],!1,null,"3f18df0d",null);t.a=component.exports},448:function(e,t,r){"use strict";r(383)},449:function(e,t,r){var n=r(10)(!1);n.push([e.i,"@media (min-width:1024px){.smartphone-only[data-v-2e7b20da]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-2e7b20da]{display:none!important}}.form__element[data-v-2e7b20da]{display:block;margin-bottom:var(--spacer-base)}.form__select[data-v-2e7b20da]{display:flex;align-items:center;--select-option-font-size:var(--font-size--lg)}.form__select[data-v-2e7b20da]  .sf-select__dropdown{font-size:var(--font-size--lg);margin:0;font-family:var(--font-family--secondary);font-weight:var(--font-weight--normal)}.form__button[data-v-2e7b20da]{display:block;margin-top:var(--spacer-lg)}@media (min-width:1024px){.form__horizontal[data-v-2e7b20da]{display:flex;flex-direction:row;justify-content:space-between}}@media (min-width:1024px){.form__horizontal .form__element[data-v-2e7b20da]{flex:1;margin-right:var(--spacer-lg)}}.form__horizontal .form__element[data-v-2e7b20da]:last-child{margin-right:0}",""]),e.exports=n},450:function(e,t,r){"use strict";r(384)},451:function(e,t,r){var n=r(10)(!1);n.push([e.i,"@media (min-width:1024px){.smartphone-only[data-v-77d4a9cd]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-77d4a9cd]{display:none!important}}.message[data-v-77d4a9cd]{font-family:var(--font-family--primary);line-height:1.6;font-size:var(--font-size--base);margin:0 0 var(--spacer-base)}.shipping-list[data-v-77d4a9cd]{margin-bottom:var(--spacer-base)}.shipping[data-v-77d4a9cd]{display:flex;padding:var(--spacer-xl) 0;border-top:1px solid var(--c-light)}.shipping[data-v-77d4a9cd]:last-child{border-bottom:1px solid var(--c-light)}.shipping__content[data-v-77d4a9cd]{flex:1;color:var(--c-text);font-size:var(--font-size--base);font-weight:300;line-height:1.6}.shipping__actions[data-v-77d4a9cd]{flex:1;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end}@media (min-width:1024px){.shipping__actions[data-v-77d4a9cd]{flex-direction:row;align-items:center;justify-content:flex-end}}.shipping__button-delete[data-v-77d4a9cd]{color:var(--c-link)}@media (min-width:1024px){.shipping__button-delete[data-v-77d4a9cd]{margin-left:var(--spacer-base)}}.shipping__address[data-v-77d4a9cd],.shipping__address p[data-v-77d4a9cd]{margin:0}.shipping__client-name[data-v-77d4a9cd]{font-size:var(--font-size--base);font-weight:500}.action-button[data-v-77d4a9cd]{width:100%}@media (min-width:1024px){.action-button[data-v-77d4a9cd]{width:auto}}@media (max-width:1023px){.tab-orphan[data-v-77d4a9cd]  .sf-tabs__title{display:none}.tab-orphan[data-v-77d4a9cd]  .sf-tabs__content{border:0;padding:0}}",""]),e.exports=n},557:function(e,t,r){"use strict";r.r(t);var n=r(8),o=r(715),d=r(17),l=r(16),c=r(394),f=(r(19),r(14),r(13),r(12)),m=r(178),v=r(329),_=r(323),h=r(89),y=r(54),S=r(3),x=r(9);function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(y.c)("required",O(O({},h.f),{},{message:"This field is required"})),Object(y.c)("min",O(O({},h.d),{},{message:"The field should have at least {length} characters"})),Object(y.c)("oneOf",O(O({},h.e),{},{message:"Invalid country"}));var w={name:"ShippingAddressForm",components:{SfInput:m.a,SfButton:d.a,SfSelect:v.a,SfCheckbox:_.a,ValidationProvider:y.b,ValidationObserver:y.a},props:{address:{type:Object,default:()=>({id:void 0,firstName:"",lastName:"",streetName:"",apartment:"",city:"",state:"",postalCode:"",country:"",phone:"",isDefault:!1})},isNew:{type:Boolean,required:!0}},setup(e,t){var{emit:r}=t,{$ct:{config:n}}=Object(x.useVSFContext)(),form=Object(S.reactive)({id:e.address.id,firstName:e.address.firstName,lastName:e.address.lastName,streetName:e.address.streetName,apartment:e.address.apartment,city:e.address.city,state:e.address.state,postalCode:e.address.postalCode,country:e.address.country,phone:e.address.phone,isDefault:e.address.isDefault});return{form:form,submitForm:()=>{r("submit",{form:form,onComplete:()=>{},onError:()=>{}})},countries:n.countries}}},k=(r(448),r(2)),j=Object(k.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit;return[r("form",{staticClass:"form",attrs:{id:"shipping-details-form"},on:{submit:function(t){return t.preventDefault(),n(e.submitForm)}}},[r("div",{staticClass:"form__horizontal"},[r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|min:2"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{attrs:{"data-cy":"shipping-details-input_firstName",name:"firstName",label:"First Name",required:"",valid:!n[0],errorMessage:n[0]},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|min:2"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{attrs:{"data-cy":"shipping-details-input_lastName",name:"lastName",label:"Last Name",required:"",valid:!n[0],errorMessage:n[0]},model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}})]}}],null,!0)})],1),e._v(" "),r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|min:5"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{attrs:{"data-cy":"shipping-details-input_streetName",name:"streetName",label:"Street Name",required:"",valid:!n[0],errorMessage:n[0]},model:{value:e.form.streetName,callback:function(t){e.$set(e.form,"streetName",t)},expression:"form.streetName"}})]}}],null,!0)}),e._v(" "),r("SfInput",{staticClass:"form__element",attrs:{"data-cy":"shipping-details-input_apartment",name:"apartment",label:"House/Apartment number",required:""},model:{value:e.form.apartment,callback:function(t){e.$set(e.form,"apartment",t)},expression:"form.apartment"}}),e._v(" "),r("div",{staticClass:"form__horizontal"},[r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|min:2"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{attrs:{"data-cy":"shipping-details-input_city",name:"city",label:"City",required:"",valid:!n[0],errorMessage:n[0]},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|min:2"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{attrs:{"data-cy":"shipping-details-input_state",name:"state",label:"State/Province",required:"",valid:!n[0],errorMessage:n[0]},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}})]}}],null,!0)})],1),e._v(" "),r("div",{staticClass:"form__horizontal"},[r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|min:4"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{attrs:{"data-cy":"shipping-details-input_zipCode",name:"zipCode",label:"Zip-code",required:"",valid:!n[0],errorMessage:n[0]},model:{value:e.form.postalCode,callback:function(t){e.$set(e.form,"postalCode",t)},expression:"form.postalCode"}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|oneOf:"+e.countries.map((function(e){return e.name})).join(",")},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfSelect",{staticClass:"form__select sf-select--underlined",attrs:{"data-cy":"shipping-details-select_country",name:"country",label:"Country",required:"",valid:!n[0],errorMessage:n[0]},model:{value:e.form.country,callback:function(t){e.$set(e.form,"country",t)},expression:"form.country"}},e._l(e.countries,(function(t){var n=t.name,label=t.label;return r("SfSelectOption",{key:n,attrs:{value:n}},[e._v("\n            "+e._s(label)+"\n          ")])})),1)]}}],null,!0)})],1),e._v(" "),r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|min:8"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{attrs:{"data-cy":"shipping-details-input_phoneNumber",name:"phone",label:"Phone number",required:"",valid:!n[0],errorMessage:n[0]},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})]}}],null,!0)}),e._v(" "),r("SfCheckbox",{staticClass:"form__checkbox-isDefault",attrs:{name:"isDefault",label:"Set as default"},model:{value:e.form.isDefault,callback:function(t){e.$set(e.form,"isDefault",t)},expression:"form.isDefault"}}),e._v(" "),r("SfButton",{staticClass:"form__button"},[e._v("\n      "+e._s(e.isNew?"Add the address":"Update the address")+"\n    ")])],1)]}}])})}),[],!1,null,"2e7b20da",null).exports,N=r(15),A={name:"ShippingDetails",components:{SfTabs:o.a,SfButton:d.a,SfIcon:l.a,UserShippingAddress:c.a,ShippingAddressForm:j},setup(){var{shipping:e,load:t,addAddress:r,deleteAddress:o,updateAddress:d}=Object(N.p)(),l=Object(S.computed)((()=>N.t.getAddresses(e.value))),c=Object(S.ref)(!1),f=Object(S.ref)(void 0),m=Object(S.computed)((()=>!f.value)),v=function(){var e=Object(n.a)((function*(e){var{form:form,onComplete:t,onError:n}=e;try{var o=m.value?r:d,data=yield o({address:form});c.value=!1,f.value=void 0,yield t(data)}catch(e){n(e)}}));return function(t){return e.apply(this,arguments)}}();return Object(x.onSSR)(Object(n.a)((function*(){yield t()}))),{changeAddress:function(){var address=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;f.value=address,c.value=!0},updateAddress:d,removeAddress:address=>o({address:address}),saveAddress:v,userShippingGetters:N.t,addresses:l,edittingAddress:c,activeAddress:f,isNewAddress:m}}},$=(r(450),Object(k.a)(A,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[e.edittingAddress?r("SfTabs",{key:"edit-address",staticClass:"tab-orphan",attrs:{"open-tab":1}},[r("SfTab",{attrs:{"data-cy":"shipping-details-tab_change",title:e.isNewAddress?"Add the address":"Update the address"}},[r("p",{staticClass:"message"},[e._v("\n        "+e._s(e.$t("Contact details updated"))+"\n      ")]),e._v(" "),r("ShippingAddressForm",{attrs:{address:e.activeAddress,isNew:e.isNewAddress},on:{submit:e.saveAddress}})],1)],1):r("SfTabs",{key:"address-list",staticClass:"tab-orphan",attrs:{"open-tab":1}},[r("SfTab",{attrs:{"data-cy":"shipping-details-tab_details",title:"Shipping details"}},[r("p",{staticClass:"message"},[e._v("\n        "+e._s(e.$t("Manage shipping addresses"))+"\n      ")]),e._v(" "),r("transition-group",{staticClass:"shipping-list",attrs:{tag:"div",name:"fade"}},e._l(e.addresses,(function(address){return r("div",{key:e.userShippingGetters.getId(address),staticClass:"shipping"},[r("div",{staticClass:"shipping__content"},[r("div",{staticClass:"shipping__address"},[r("UserShippingAddress",{attrs:{address:address}})],1)]),e._v(" "),r("div",{staticClass:"shipping__actions"},[r("SfIcon",{staticClass:"smartphone-only",attrs:{"data-cy":"shipping-details-icon_delete",icon:"cross",color:"gray",size:"14px",role:"button"},on:{click:function(t){return e.removeAddress(address)}}}),e._v(" "),r("SfButton",{attrs:{"data-cy":"shipping-details-btn_change"},on:{click:function(t){return e.changeAddress(address)}}},[e._v("\n              "+e._s(e.$t("Change"))+"\n            ")]),e._v(" "),r("SfButton",{staticClass:"color-light shipping__button-delete desktop-only",attrs:{"data-cy":"shipping-details-btn_delete"},on:{click:function(t){return e.removeAddress(address)}}},[e._v("\n              "+e._s(e.$t("Delete"))+"\n            ")])],1)])})),0),e._v(" "),r("SfButton",{staticClass:"action-button",attrs:{"data-cy":"shipping-details-btn_add"},on:{click:function(t){return e.changeAddress()}}},[e._v("\n        "+e._s(e.$t("Add new address"))+"\n      ")])],1)],1)],1)}),[],!1,null,"77d4a9cd",null));t.default=$.exports}}]);