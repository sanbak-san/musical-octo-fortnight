(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{370:function(e,t,r){var content=r(414);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("56bbfae2",content,!0,{sourceMap:!1})},413:function(e,t,r){"use strict";r(370)},414:function(e,t,r){var n=r(10)(!1);n.push([e.i,'@media (min-width:1024px){.smartphone-only{display:none!important}}@media (max-width:1023px){.desktop-only{display:none!important}}.sf-radio{display:flex;display:var(--radio-display,flex);transition:background-color .25s cubic-bezier(1,.5,.8,1);transition:var(--radio-transition,background-color .25s cubic-bezier(1,.5,.8,1))}.sf-radio__label{display:flex;display:var(--radio-label-display,flex);font:var(--font-weight--normal) var(--font-size--base)/normal var(--font-family--primary);font:var(--radio-label-font,var(--radio-label-font-weight,var(--font-weight--normal)) var(--radio-label-font-size,var(--font-size--base))/var(--radio-label-font-line-height,normal) var(--radio-label-font-family,var(--font-family--primary)));color:var(--radio-label-color)}.sf-radio__checkmark{box-sizing:border-box;width:1.5rem;width:var(--radio-checkmark-size,1.5rem);height:1.5rem;height:var(--radio-checkmark-size,1.5rem);border:var(--radio-checkmark-border,var(--radio-checkmark-border-style,solid) var(--radio-checkmark-border-color,var(--c-gray-variant)));border-width:1px;border-width:var(--radio-checkmark-border-width,1px);border-radius:100%;border-radius:var(--radio-checkmark-border-radius,100%);transition:border .25s cubic-bezier(1,.5,.8,1);transition:var(--radio-checkmark-transition,border .25s cubic-bezier(1,.5,.8,1))}.sf-radio__checkmark.is-active{--radio-checkmark-border-width:9px;--radio-checkmark-border-color:var(--c-primary)}.sf-radio input{position:absolute;opacity:0;left:-1000%;width:1px;height:1px}.sf-radio input[style*="outline: none"]:focus+.sf-radio__checkmark{outline:none}.sf-radio input:focus+.sf-radio__checkmark{outline-color:-webkit-focus-ring-color;outline-style:auto}.sf-radio__container{position:relative;display:flex;display:var(--radio-container-display,flex);align-items:var(--radio-container-align-items);flex:1;padding:var(--radio-container-padding,var(--spacer-sm) var(--spacer-lg) var(--spacer-sm) var(--spacer-sm));cursor:pointer;cursor:var(--radio-container-cursor,pointer)}.sf-radio:hover{--radio-checkmark-border-color:var(--c-black)}.sf-radio__content{flex:1;margin:var(--radio-content-margin,0 0 0 var(--spacer-sm))}.sf-radio__details{margin:var(--radio-details-margin,var(--spacer-xs) 0 0 0);color:var(--c-text-muted);color:var(--radio-details-color,var(--c-text-muted));font:var(--font-weight--light) var(--font-size--sm)/1.2 var(--font-family--primary);font:var(--radio-details-font,var(--radio-details-font-weight,var(--font-weight--light)) var(--radio-details-font-size,var(--font-size--sm))/var(--radio-details-font-line-height,1.2) var(--radio-details-font-family,var(--font-family--primary)))}.sf-radio__description{margin:var(--radio-description-margin,var(--spacer-xs) 0 0 0);font:var(--font-weight--light) var(--font-size--sm)/1.6 var(--font-family--primary);font:var(--radio-description-font,var(--radio-description-font-weight,var(--font-weight--light)) var(--radio-description-font-size,var(--font-size--sm))/var(--radio-description-font-line-height,1.6) var(--radio-description-font-family,var(--font-family--primary)));color:var(--radio-description-margin)}.sf-radio.is-active{background:var(--c-light);background:var(--radio-background,var(--c-light))}.sf-radio.is-disabled{--radio-checkmark-border-color:var(--c-text-disabled);--radio-details-color:var(--c-text-disabled);--radio-description-margin:var(--c-text-disabled);--radio-label-color:var(--c-text-disabled);--radio-container-cursor:default}.sf-radio.is-disabled:hover{--radio-checkmark-border-color:var(--c-text-disabled)}.sf-radio--transparent.is-active{--radio-background:transparent}@media (min-width:1024px){.sf-radio{--radio-container-padding:var(--spacer-sm)}}',""]),e.exports=n},468:function(e,t,r){"use strict";var n={name:"SfRadio",directives:{focus:r(324).a},model:{prop:"selected",event:"input"},props:{name:{type:String,default:""},value:{type:String,default:""},label:{type:String,default:""},details:{type:String,default:""},description:{type:String,default:""},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},selected:{type:String,default:""}},computed:{isChecked(){return this.value===this.selected}},methods:{inputHandler(){this.$emit("input",this.value)}}},o=(r(413),r(2)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sf-radio",class:{"is-active":e.isChecked,"is-disabled":e.disabled}},[r("label",{staticClass:"sf-radio__container"},[r("input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{type:"radio",name:e.name,disabled:e.disabled},domProps:{value:e.value,checked:e.isChecked},on:{input:e.inputHandler}}),e._v(" "),e._t("checkmark",[r("div",{staticClass:"sf-radio__checkmark",class:{"sf-radio__checkmark is-active":e.isChecked}})],null,{isChecked:e.isChecked,disabled:e.disabled}),e._v(" "),r("div",{staticClass:"sf-radio__content"},[e._t("label",[e.label?r("div",{staticClass:"sf-radio__label"},[e._v(e._s(e.label))]):e._e()],null,{label:e.label,isChecked:e.isChecked,disabled:e.disabled}),e._v(" "),e._t("details",[e.details?r("p",{staticClass:"sf-radio__details"},[e._v("\n          "+e._s(e.details)+"\n        ")]):e._e()],null,{details:e.details}),e._v(" "),e._t("description",[e.description?r("p",{staticClass:"sf-radio__description"},[e._v("\n          "+e._s(e.description)+"\n        ")]):e._e()],null,{description:e.description})],2)],2)])}),[],!1,null,null,null);t.a=component.exports},483:function(e,t,r){var content=r(591);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("702be0b8",content,!0,{sourceMap:!1})},590:function(e,t,r){"use strict";r(483)},591:function(e,t,r){var n=r(10)(!1);n.push([e.i,"@media (min-width:1024px){.smartphone-only[data-v-663d2d5a]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-663d2d5a]{display:none!important}}.title[data-v-663d2d5a]{margin:var(--spacer-xl) 0 var(--spacer-base) 0}.form[data-v-663d2d5a]{--button-width:100%}.form__select[data-v-663d2d5a]{display:flex;align-items:center;--select-option-font-size:var(--font-size--lg)}.form__select[data-v-663d2d5a]  .sf-select__dropdown{font-size:var(--font-size--lg);margin:0;color:var(--c-text);font-family:var(--font-family--secondary);font-weight:var(--font-weight--normal)}@media (min-width:1024px){.form[data-v-663d2d5a]{display:flex;flex-wrap:wrap;align-items:center;--button-width:auto}}.form__element[data-v-663d2d5a]{margin:0 0 var(--spacer-xl) 0}@media (min-width:1024px){.form__element[data-v-663d2d5a]{flex:0 0 100%}}@media (min-width:1024px){.form__element--half[data-v-663d2d5a]{flex:1 1 50%}}@media (min-width:1024px){.form__element--half-even[data-v-663d2d5a]{padding:0 0 0 var(--spacer-xl)}}.form__group[data-v-663d2d5a]{display:flex;align-items:center}@media (min-width:1024px){.form__action[data-v-663d2d5a]{flex:0 0 100%;display:flex}}@media (min-width:1024px){.form__action-button--secondary[data-v-663d2d5a]{order:-1;text-align:left}}.form__action-button--add-address[data-v-663d2d5a]{width:100%;margin:0}@media (min-width:1024px){.form__action-button--add-address[data-v-663d2d5a]{margin:0 0 var(--spacer-lg) 0;width:auto}}.form__back-button[data-v-663d2d5a]{margin:var(--spacer-xl) 0 var(--spacer-sm)}.form__back-button[data-v-663d2d5a]:hover{color:var(--c-white)}@media (min-width:1024px){.form__back-button[data-v-663d2d5a]{margin:0 var(--spacer-xl) 0 0}}.form__radio-group[data-v-663d2d5a]{flex:0 0 100%;margin:0 0 var(--spacer-xl) 0}@media (min-width:1024px){.form__radio-group[data-v-663d2d5a]{margin:0 0 var(--spacer-2xl) 0}}.shipping__label[data-v-663d2d5a]{display:flex;justify-content:space-between}.shipping__description[data-v-663d2d5a]{--radio-description-margin:0;--radio-description-font-size:var(--font-xs)}",""]),e.exports=n},724:function(e,t,r){"use strict";r.r(t);r(19),r(14),r(13);var n=r(8),o=r(12),d=r(82),l=r(178),c=r(17),f=r(329),m=r(468),v=r(323),h=r(15),_=r(54),y=r(89),k=r(9),S=r(3);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(_.c)("required",C(C({},y.f),{},{message:"This field is required"})),Object(_.c)("min",C(C({},y.d),{},{message:"The field should have at least {length} characters"})),Object(_.c)("digits",C(C({},y.b),{},{message:"Please provide a valid phone number"}));var w={name:"Shipping",components:{SfHeading:d.a,SfInput:l.a,SfButton:c.a,SfSelect:f.a,SfRadio:m.a,SfCheckbox:v.a,UserShippingAddresses:()=>r.e(25).then(r.bind(null,739)),ValidationProvider:_.b,ValidationObserver:_.a},setup(e,t){var{$ct:{config:r}}=Object(k.useVSFContext)(),{shippingDetails:o,chosenShippingMethod:d,setShippingDetails:l,setShippingMethod:c,shippingMethods:f,loadShippingMethods:m,isShippingAddressCompleted:v,isShippingMethodCompleted:_,loadDetails:y,loading:x}=Object(h.i)(),{shipping:w,load:A,setDefaultAddress:O}=Object(h.p)(),{isAuthenticated:j}=Object(h.m)(),M=Object(S.ref)(!0),D=Object(S.ref)(!1),N=Object(S.ref)(-1),P=Object(S.ref)(!1),z=function(){var e=Object(n.a)((function*(e){var address,t=h.t.getAddresses(w.value,{id:e});t&&t.length&&(N.value=e,l((address=t[0],C(C({},o.value),{},{contactInfo:C(C({},o.value.contactInfo),{},{phone:address.phoneNumber}),streetNumber:address.apartment,city:address.city,country:address.country,state:address.state,firstName:address.firstName,lastName:address.lastName,streetName:address.streetName,postalCode:address.zipCode}))),D.value=!0)}));return function(t){return e.apply(this,arguments)}}();Object(k.onSSR)(Object(n.a)((function*(){yield y(),yield m()}))),Object(S.onMounted)(Object(n.a)((function*(){if(j.value){yield A();var e=h.t.getAddresses(w.value);if(!e||!e.length)return;M.value=!1,e[0].isDefault&&z(e[0].id)}})));return{loading:x,handleShippingAddressSubmit:e=>Object(n.a)((function*(){if(yield l(o.value,{save:!0}),yield m(),e(),N.value>-1&&P.value){var t=h.t.getAddresses(w.value,{id:N.value});if(!t||!t.length)return;yield O(t[0])}D.value=!1})),handleShippingMethodSubmit:e=>Object(n.a)((function*(){yield c(d.value,{save:!0}),e(),t.root.$router.push("/checkout/payment")})),isShippingAddressCompleted:v,isShippingMethodCompleted:_,setShippingDetailsAndUnpickAddress:e=>{l(e),N.value=-1,D.value=!0},setShippingMethod:c,shippingDetails:o,chosenShippingMethod:d,shippingMethods:f,checkoutGetters:h.b,countries:r.countries,shippingAddresses:Object(S.computed)((()=>h.t.getAddresses(w.value))),canAddNewAddress:M,addressIsModified:D,isAuthenticated:j,currentAddressId:Object(S.computed)((()=>N.value)),setAsDefault:P,setCurrentAddress:z,canContinueToPayment:e=>v.value&&!e&&!D.value}}},A=(r(590),r(2)),component=Object(A.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("SfHeading",{staticClass:"sf-heading--left sf-heading--no-underline title",attrs:{level:3,title:"Shipping"}}),e._v(" "),r("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit,o=t.dirty,d=t.reset;return[r("form",{on:{submit:function(t){t.preventDefault(),n(e.canContinueToPayment(o)?e.handleShippingMethodSubmit(d):e.handleShippingAddressSubmit(d))}}},[e.isAuthenticated&&e.shippingAddresses&&e.shippingAddresses.length?r("UserShippingAddresses",{attrs:{setAsDefault:e.setAsDefault,shippingAddresses:e.shippingAddresses,currentAddressId:e.currentAddressId},on:{setCurrentAddress:function(t){return e.setCurrentAddress(t)},changeSetAsDefault:function(t){e.setAsDefault=t}}}):e._e(),e._v(" "),e.canAddNewAddress?r("div",{staticClass:"form"},[r("ValidationProvider",{attrs:{name:"firstName",rules:"required|min:2",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element form__element--half",attrs:{value:e.shippingDetails.firstName,label:"First name",name:"firstName",required:"",valid:!n[0],errorMessage:n[0]},on:{input:function(t){return e.setShippingDetailsAndUnpickAddress({firstName:t})}}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{name:"lastName",rules:"required|min:2",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element form__element--half form__element--half-even",attrs:{value:e.shippingDetails.lastName,label:"Last name",name:"lastName",required:"",valid:!n[0],errorMessage:n[0]},on:{input:function(t){return e.setShippingDetailsAndUnpickAddress({lastName:t})}}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{name:"streetName",rules:"required|min:2",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element form__element--half",attrs:{value:e.shippingDetails.streetName,label:"Street name",name:"streetName",required:"",valid:!n[0],errorMessage:n[0]},on:{input:function(t){return e.setShippingDetailsAndUnpickAddress({streetName:t})}}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{name:"apartment",rules:"required|min:2",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element form__element--half form__element--half-even",attrs:{value:e.shippingDetails.streetNumber,label:"House/Apartment number",name:"apartment",required:"",valid:!n[0],errorMessage:n[0]},on:{input:function(t){return e.setShippingDetailsAndUnpickAddress({streetNumber:t})}}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{name:"city",rules:"required|min:2",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element form__element--half",attrs:{value:e.shippingDetails.city,label:"City",name:"city",required:"",valid:!n[0],errorMessage:n[0]},on:{input:function(t){return e.setShippingDetailsAndUnpickAddress({city:t})}}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{name:"zipCode",rules:"required|min:2",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element form__element--half form__element--half-even",attrs:{value:e.shippingDetails.postalCode,label:"Zip-code",name:"zipCode",required:"",valid:!n[0],errorMessage:n[0]},on:{input:function(t){return e.setShippingDetailsAndUnpickAddress({postalCode:t})}}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{name:"country",rules:"required|min:2",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfSelect",{staticClass:"form__element form__element--half form__select sf-select--underlined",attrs:{value:e.shippingDetails.country,label:"Country",name:"country",required:"",valid:!n[0],errorMessage:n[0]},on:{input:function(t){return e.setShippingDetailsAndUnpickAddress({country:t})}}},e._l(e.countries,(function(t){return r("SfSelectOption",{key:t.name,attrs:{value:t.name}},[e._v("\n            "+e._s(t.label)+"\n          ")])})),1)]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{name:"phone",rules:"required|digits:9",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("SfInput",{staticClass:"form__element form__element--half form__element--half-even",attrs:{value:e.shippingDetails.contactInfo.phone,label:"Phone number",name:"phone",required:"",valid:!n[0],errorMessage:n[0]},on:{input:function(t){return e.setShippingDetailsAndUnpickAddress({contactInfo:{phone:t}})}}})]}}],null,!0)})],1):e._e(),e._v(" "),e.canAddNewAddress?e._e():r("SfButton",{staticClass:"color-light form__action-button form__action-button--add-address",attrs:{type:"submit"},nativeOn:{click:function(t){e.canAddNewAddress=!0}}},[e._v("\n        "+e._s(e.$t("Add new address"))+"\n      ")]),e._v(" "),e.canContinueToPayment(o)?r("SfHeading",{staticClass:"sf-heading--left sf-heading--no-underline title",attrs:{level:3,title:"Shipping method"}}):e._e(),e._v(" "),r("div",{staticClass:"form"},[e.canContinueToPayment(o)?r("div",{staticClass:"form__radio-group"},e._l(e.shippingMethods,(function(t){return r("SfRadio",{key:e.checkoutGetters.getShippingMethodName(t),staticClass:"form__radio shipping",attrs:{label:e.checkoutGetters.getShippingMethodName(t),value:e.checkoutGetters.getShippingMethodId(t),selected:e.checkoutGetters.getShippingMethodId(e.chosenShippingMethod),name:"shippingMethod",description:e.checkoutGetters.getShippingMethodDescription(t)},on:{input:function(r){return e.setShippingMethod(t,{save:!0})}},scopedSlots:e._u([{key:"label",fn:function(n){var label=n.label;return[r("div",{staticClass:"sf-radio__label shipping__label"},[r("div",[e._v(e._s(label))]),e._v(" "),r("div",[e._v("$"+e._s(e.checkoutGetters.getShippingMethodPrice(t)))])])]}},{key:"description",fn:function(t){var n=t.description;return[r("div",{staticClass:"sf-radio__description shipping__description"},[r("div",{staticClass:"shipping__info"},[e._v("\n                  "+e._s(n)+"\n                ")])])]}}],null,!0)})})),1):e._e(),e._v(" "),r("div",{staticClass:"form__action"},[r("nuxt-link",{staticClass:"sf-button color-secondary form__back-button",attrs:{to:"/checkout/personal-details"}},[e._v("Go back")]),e._v(" "),e.canContinueToPayment(o)?r("SfButton",{staticClass:"form__action-button",attrs:{type:"submit",disabled:!e.isShippingMethodCompleted||e.loading.shippingAddress}},[e._v("\n            "+e._s(e.$t("Continue to payment"))+"\n          ")]):r("SfButton",{staticClass:"form__action-button",attrs:{type:"submit",disabled:e.loading.shippingMethods}},[e._v("\n            "+e._s(e.$t("Select shipping method"))+"\n          ")])],1)])],1)]}}])})],1)}),[],!1,null,"663d2d5a",null);t.default=component.exports}}]);