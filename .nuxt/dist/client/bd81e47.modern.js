(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{372:function(t,e,r){var content=r(418);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("51f32aa2",content,!0,{sourceMap:!1})},373:function(t,e,r){var content=r(420);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("b8650e5e",content,!0,{sourceMap:!1})},417:function(t,e,r){"use strict";r(372)},418:function(t,e,r){var o=r(10)(!1);o.push([t.i,"@media (min-width:1024px){.smartphone-only[data-v-78de70ab]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-78de70ab]{display:none!important}}.title[data-v-78de70ab]{--heading-title-font-weight:var(--font-weight--semibold);--section-margin:var(--spacer-xl) 0;--section-content-margin:var(--spacer-xl) 0;--heading-title-font-size:var(--h2-font-size)}@media (min-width:1024px){.title[data-v-78de70ab]{--section-margin:var(--spacer-2xl) 0;--section-content-margin:var(--spacer-2xl) 0}}.grid[data-v-78de70ab]{display:flex;max-height:20.625rem;width:100%;justify-content:center;margin:0}@media (min-width:1024px){.grid[data-v-78de70ab]{max-height:40.625rem;max-width:60rem;margin:0 auto}}.grid__row[data-v-78de70ab]{display:flex;flex-direction:column}.grid__row+.grid__row[data-v-78de70ab]{margin-left:var(--spacer-xs)}@media (min-width:1024px){.grid__row+.grid__row[data-v-78de70ab]{margin-left:var(--spacer-sm)}}.grid__col[data-v-78de70ab]{width:10rem;height:10rem}@media (min-width:1024px){.grid__col[data-v-78de70ab]{width:29.375rem;height:29.375rem}.grid__col.small[data-v-78de70ab]{height:10rem}}.grid__col+.grid__col[data-v-78de70ab]{margin-top:var(--spacer-xs)}@media (min-width:1024px){.grid__col+.grid__col[data-v-78de70ab]{margin-top:var(--spacer-sm)}}",""]),t.exports=o},419:function(t,e,r){"use strict";r(373)},420:function(t,e,r){var o=r(10)(!1);o.push([t.i,"@media (min-width:1024px){.smartphone-only[data-v-69dcf472]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-69dcf472]{display:none!important}}.banner-app[data-v-69dcf472]{--banner-title-margin:var(--spacer-base) 0 var(--spacer-xl) 0;--banner-padding:0 0 var(--spacer-2xl);--banner-title-font-size:var(--h1-font-size);--banner-subtitle-font-size:var(--font-size--xl);--banner-title-font-weight:var(--font-weight--semibold);--banner-subtitle-font-weight:var(--font-weight--medium);--banner-title-text-transform:capitalize;--banner-title-text-transform:none;--banner-background-size:contain;--banner-background-position:right;display:block;min-height:26.25rem;max-width:77.5rem;margin:0 auto;padding:5.625rem 31.25rem 0 5.625rem}.banner-app__call-to-action[data-v-69dcf472]{display:flex;flex-wrap:nowrap}.banner-app__button[data-v-69dcf472]{--image-width:10.875rem;--image-height:3.5625rem;pointer-events:visible}.banner-app__button+.banner-app__button[data-v-69dcf472]{margin:0 0 0 var(--spacer-base)}",""]),t.exports=o},469:function(t,e,r){"use strict";var o=r(3),n=r(732),c=r(64),d={name:"InstagramFeed",components:{SfSection:n.a,SfImage:c.a},setup(){var t=Object(o.ref)(!1),e=e=>{t.value=e.matches};return Object(o.onMounted)((()=>{t.value=Math.max(document.documentElement.clientWidth,window.innerWidth)<=1023,window.matchMedia("(max-width: 1023px)").addListener(e)})),Object(o.onBeforeUnmount)((()=>{window.matchMedia("(max-width: 1023px)").removeListener(e)})),{isMobile:t}}},l=(r(417),r(2)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfSection",{staticClass:"title",attrs:{"title-heading":"Share Your Look","subtitle-heading":"#YOURLOOK"}},[r("div",{staticClass:"grid grid-images"},[r("div",{staticClass:"grid__row"},[r("div",{staticClass:"grid__col"},[t.isMobile?r("SfImage",{attrs:{src:"/homepage/imageAm.webp",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageAd.webp",width:470,height:470}},[t._v("katherina_trn")])],1),t._v(" "),r("div",{staticClass:"grid__col small"},[t.isMobile?r("SfImage",{attrs:{src:"/homepage/imageBm.webp",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageCd.webp",width:470,height:160}},[t._v("katherina_trn")])],1)]),t._v(" "),r("div",{staticClass:"grid__row"},[r("div",{staticClass:"grid__col small"},[t.isMobile?r("SfImage",{attrs:{src:"/homepage/imageCm.webp",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageBd.webp",width:470,height:160}},[t._v("katherina_trn")])],1),t._v(" "),r("div",{staticClass:"grid__col"},[t.isMobile?r("SfImage",{attrs:{src:"/homepage/imageDm.webp",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageDd.webp",width:470,height:470}},[t._v("katherina_trn")])],1)])])])}),[],!1,null,"78de70ab",null);e.a=component.exports},470:function(t,e,r){"use strict";var o=r(733),n=r(64),c=r(17),d={name:"AppStoreBanner",components:{SfBanner:o.a,SfImage:n.a,SfButton:c.a}},l=(r(419),r(2)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfBanner",{staticClass:"sf-banner--left desktop-only banner-app",attrs:{image:"/homepage/bannerD.png",subtitle:"Fashon to take away",title:"Download our application to your mobile"},scopedSlots:t._u([{key:"call-to-action",fn:function(){return[r("div",{staticClass:"banner-app__call-to-action"},[r("SfButton",{staticClass:"banner-app__button sf-button--pure",attrs:{"aria-label":"Go to Apple Product"},on:{click:function(){}}},[r("SfImage",{attrs:{src:"/homepage/apple.png"}})],1),t._v(" "),r("SfButton",{staticClass:"banner-app__button sf-button--pure",attrs:{"aria-label":"Go to Google Product"},on:{click:function(){}}},[r("SfImage",{attrs:{src:"/homepage/google.png"}})],1)],1)]},proxy:!0}])})}),[],!1,null,"69dcf472",null);e.a=component.exports},547:function(t,e,r){var content=r(697);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("aa827eb2",content,!0,{sourceMap:!1})},551:function(t,e,r){var content=r(705);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("417d5b16",content,!0,{sourceMap:!1})},696:function(t,e,r){"use strict";r(547)},697:function(t,e,r){var o=r(10)(!1);o.push([t.i,"@media (min-width:1024px){.smartphone-only[data-v-c78fb59e]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-c78fb59e]{display:none!important}}.section[data-v-c78fb59e]{margin-top:var(--spacer-base)}.carousel[data-v-c78fb59e]{margin:0 calc(var(--spacer-sm)*-1) 0 0}@media (min-width:1024px){.carousel[data-v-c78fb59e]{margin:0}}.carousel__item[data-v-c78fb59e]{margin:1.9375rem 0 2.4375rem}",""]),t.exports=o},704:function(t,e,r){"use strict";r(551)},705:function(t,e,r){var o=r(10)(!1);o.push([t.i,"@media (min-width:1024px){.smartphone-only[data-v-b3cb1362]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-b3cb1362]{display:none!important}}#product[data-v-b3cb1362]{box-sizing:border-box}@media (min-width:1024px){#product[data-v-b3cb1362]{max-width:1272px;margin:0 auto}}@media (min-width:1024px){.product[data-v-b3cb1362]{display:flex}}.product__info[data-v-b3cb1362]{margin:var(--spacer-sm) auto}@media (min-width:1024px){.product__info[data-v-b3cb1362]{max-width:32.625rem;margin:0 0 0 7.5rem}}.product__header[data-v-b3cb1362]{--heading-title-color:var(--c-link);--heading-title-font-weight:var(--font-weight--bold);--heading-padding:0;margin:0 var(--spacer-sm);display:flex;justify-content:space-between}@media (min-width:1024px){.product__header[data-v-b3cb1362]{--heading-title-font-weight:var(--font-weight--semibold);margin:0 auto}}.product__drag-icon[data-v-b3cb1362]{-webkit-animation:moveicon-data-v-b3cb1362 1s ease-in-out infinite;animation:moveicon-data-v-b3cb1362 1s ease-in-out infinite}.product__price-and-rating[data-v-b3cb1362]{margin:0 var(--spacer-sm) var(--spacer-base);align-items:center}@media (min-width:1024px){.product__price-and-rating[data-v-b3cb1362]{display:flex;justify-content:space-between;margin:var(--spacer-sm) 0 var(--spacer-lg) 0}}.product__rating[data-v-b3cb1362]{display:flex;align-items:center;justify-content:flex-end;margin:var(--spacer-xs) 0 var(--spacer-xs)}.product__count[data-v-b3cb1362]{font:var(--font-weight--normal) var(--font-size--sm)/1.4 var(--font-family--secondary);font:var(--count-font,var(--count-font-weight,var(--font-weight--normal)) var(--count-font-size,var(--font-size--sm))/var(--count-font-line-height,1.4) var(--count-font-family,var(--font-family--secondary)));color:var(--c-text);text-decoration:none;margin:0 0 0 var(--spacer-xs)}.product__description[data-v-b3cb1362]{font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--product-description-font,var(--product-description-font-weight,var(--font-weight--light)) var(--product-description-font-size,var(--font-size--base))/var(--product-description-font-line-height,1.6) var(--product-description-font-family,var(--font-family--primary)))}.product__select-size[data-v-b3cb1362]{margin:0 var(--spacer-sm)}@media (min-width:1024px){.product__select-size[data-v-b3cb1362]{margin:0}}.product__colors[data-v-b3cb1362]{font:var(--font-weight--normal) var(--font-size--lg)/1.6 var(--font-family--secondary);font:var(--product-color-font,var(--product-color-font-weight,var(--font-weight--normal)) var(--product-color-font-size,var(--font-size--lg))/var(--product-color-font-line-height,1.6) var(--product-color-font-family,var(--font-family--secondary)));display:flex;align-items:center;margin-top:var(--spacer-xl)}.product__color-label[data-v-b3cb1362]{margin:0 var(--spacer-lg) 0 0}.product__color[data-v-b3cb1362]{margin:0 var(--spacer-2xs)}.product__add-to-cart[data-v-b3cb1362]{margin:var(--spacer-base) var(--spacer-sm) 0}@media (min-width:1024px){.product__add-to-cart[data-v-b3cb1362]{margin-top:var(--spacer-2xl)}}.product__compare[data-v-b3cb1362],.product__guide[data-v-b3cb1362],.product__save[data-v-b3cb1362]{display:block;margin:var(--spacer-xl) 0 var(--spacer-base) auto}.product__compare[data-v-b3cb1362]{margin-top:0}.product__tabs[data-v-b3cb1362]{margin:var(--spacer-lg) auto var(--spacer-2xl);--tabs-title-font-size:var(--font-size--lg)}@media (min-width:1024px){.product__tabs[data-v-b3cb1362]{margin-top:var(--spacer-2xl)}}.product__property[data-v-b3cb1362]{margin:var(--spacer-base) 0}.product__property__button[data-v-b3cb1362]{--button-font-size:var(--font-size--base)}.product__review[data-v-b3cb1362]{padding-bottom:24px;border-bottom:1px solid var(--c-light);margin-bottom:var(--spacer-base)}.product__additional-info[data-v-b3cb1362]{color:var(--c-link);font:var(--font-weight--light) var(--font-size--sm)/1.6 var(--font-family--primary);font:var(--additional-info-font,var(--additional-info-font-weight,var(--font-weight--light)) var(--additional-info-font-size,var(--font-size--sm))/var(--additional-info-font-line-height,1.6) var(--additional-info-font-family,var(--font-family--primary)))}.product__additional-info__title[data-v-b3cb1362]{font-weight:var(--font-weight--normal);font-size:var(--font-size--base);margin:0 0 var(--spacer-sm)}.product__additional-info__title[data-v-b3cb1362]:not(:first-child){margin-top:3.5rem}.product__additional-info__paragraph[data-v-b3cb1362]{margin:0}.product__gallery[data-v-b3cb1362]{flex:1}.breadcrumbs[data-v-b3cb1362]{margin:var(--spacer-base) auto var(--spacer-lg)}@-webkit-keyframes moveicon-data-v-b3cb1362{0%{transform:translateZ(0)}50%{transform:translate3d(0,30%,0)}to{transform:translateZ(0)}}@keyframes moveicon-data-v-b3cb1362{0%{transform:translateZ(0)}50%{transform:translate3d(0,30%,0)}to{transform:translateZ(0)}}",""]),t.exports=o},718:function(t,e,r){"use strict";r.r(e);r(19),r(14),r(13);var o=r(12),n=r(8),c=(r(55),r(338)),d=r(562),l=r(177),v=r(82),m=r(109),f=r(393),_=r(329),h=r(563),y=r(715),w=r(735),x=r(16),S=r(64),C=r(733),k=r(736),z=r(737),O=r(564),j=r(17),I=r(469),P=r(719),G=r(712),R=r(732),B=r(337),$=r(15),M={name:"RelatedProducts",setup:()=>({productGetters:$.f}),components:{SfCarousel:P.a,SfProductCard:G.a,SfSection:R.a,SfLoader:B.a},props:{title:String,products:Array,loading:Boolean}},A=(r(696),r(2)),L=Object(A.a)(M,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfSection",{staticClass:"section",attrs:{"title-heading":t.title}},[r("SfLoader",{class:{loading:t.loading},attrs:{loading:t.loading}},[r("SfCarousel",{staticClass:"carousel",attrs:{"data-cy":"related-products-carousel",settings:{peek:16,breakpoints:{1023:{peek:0,perView:2}}}}},t._l(t.products,(function(e,i){return r("SfCarouselItem",{key:i,staticClass:"carousel__item"},[r("SfProductCard",{attrs:{title:t.productGetters.getName(e),image:t.productGetters.getCoverImage(e),"regular-price":t.$n(t.productGetters.getPrice(e).regular,"currency"),"special-price":t.productGetters.getPrice(e).special&&t.$n(t.productGetters.getPrice(e).special,"currency"),link:t.localePath("/p/"+t.productGetters.getId(e)+"/"+t.productGetters.getSlug(e))}})],1)})),1)],1)],1)}),[],!1,null,"c78fb59e",null).exports,D=r(3),F=r(9),T=r(470),H=r(108);function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function Z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var J={name:"Product",transition:"fade",setup(t,e){var r=Object(D.ref)(1),{id:o}=e.root.$route.params,{products:c,search:d}=Object($.k)("products"),{products:l,search:v,loading:m}=Object($.k)("relatedProducts"),{addItem:f,loading:_}=Object($.h)(),{reviews:h,search:y}=Object($.l)("productReviews"),w=Object(D.computed)((()=>$.f.getFiltered(c.value,{master:!0,attributes:e.root.$route.query})[0])),x=Object(D.computed)((()=>$.f.getAttributes(c.value,["color","size"]))),S=Object(D.computed)((()=>$.f.getAttributes(w.value,["color","size"]))),C=Object(D.computed)((()=>$.f.getCategoryIds(w.value))),k=Object(D.computed)((()=>$.g.getItems(h.value))),z=Object(D.computed)((()=>$.f.getGallery(w.value).map((img=>({mobile:{url:img.small},desktop:{url:img.normal},big:{url:img.big}})))));Object(F.onSSR)(Object(n.a)((function*(){yield d({id:o}),yield v({catId:[C.value[0]],limit:8}),yield y({productId:o})})));return{updateFilter:filter=>{e.root.$router.push({path:e.root.$route.path,query:Z(Z({},S.value),filter)})},configuration:S,product:w,reviews:k,reviewGetters:$.g,averageRating:Object(D.computed)((()=>$.f.getAverageRating(w.value))),totalReviews:Object(D.computed)((()=>$.f.getTotalReviews(w.value))),relatedProducts:Object(D.computed)((()=>$.f.getFiltered(l.value,{master:!0}))),relatedLoading:m,options:x,qty:r,addItem:f,loading:_,productGetters:$.f,productGallery:z}},components:{SfAlert:c.a,SfColor:d.a,SfProperty:l.a,SfHeading:v.a,SfPrice:m.a,SfRating:f.a,SfSelect:_.a,SfAddToCart:h.a,SfTabs:y.a,SfGallery:w.a,SfIcon:x.a,SfImage:S.a,SfBanner:C.a,SfSticky:k.a,SfReview:z.a,SfBreadcrumbs:O.a,SfButton:j.a,InstagramFeed:I.a,RelatedProducts:L,MobileStoreBanner:T.a,LazyHydrate:H.a},data:()=>({stock:5,properties:[{name:"Product Code",value:"578902-00"},{name:"Category",value:"Pants"},{name:"Material",value:"Cotton"},{name:"Country",value:"Germany"}],description:"Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",detailsIsActive:!1,brand:"Brand name is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.",careInstructions:"Do not wash!",breadcrumbs:[{text:"Home",route:{link:"#"}},{text:"Category",route:{link:"#"}},{text:"Pants",route:{link:"#"}}]})},N=(r(704),Object(A.a)(J,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"product"}},[r("SfBreadcrumbs",{staticClass:"breadcrumbs desktop-only",attrs:{breadcrumbs:t.breadcrumbs}}),t._v(" "),r("div",{staticClass:"product"},[r("LazyHydrate",{attrs:{"when-idle":""}},[r("SfGallery",{staticClass:"product__gallery",attrs:{images:t.productGallery}})],1),t._v(" "),r("div",{staticClass:"product__info"},[r("div",{staticClass:"product__header"},[r("SfHeading",{staticClass:"sf-heading--no-underline sf-heading--left",attrs:{title:t.productGetters.getName(t.product),level:3}}),t._v(" "),r("SfIcon",{staticClass:"product__drag-icon smartphone-only",attrs:{icon:"drag",size:"xxl",color:"var(--c-text-disabled)"}})],1),t._v(" "),r("div",{staticClass:"product__price-and-rating"},[r("SfPrice",{attrs:{regular:t.$n(t.productGetters.getPrice(t.product).regular,"currency"),special:t.productGetters.getPrice(t.product).special&&t.$n(t.productGetters.getPrice(t.product).special,"currency")}}),t._v(" "),r("div",[r("div",{staticClass:"product__rating"},[r("SfRating",{attrs:{score:t.averageRating,max:5}}),t._v(" "),t.totalReviews?r("a",{staticClass:"product__count",attrs:{href:"#"}},[t._v("\n              ("+t._s(t.totalReviews)+")\n            ")]):t._e()],1),t._v(" "),r("SfButton",{staticClass:"sf-button--text",attrs:{"data-cy":"product-btn_read-all"}},[t._v(t._s(t.$t("Read all reviews")))])],1)],1),t._v(" "),r("div",[r("p",{staticClass:"product__description desktop-only"},[t._v("\n          "+t._s(t.description)+"\n        ")]),t._v(" "),r("SfButton",{staticClass:"sf-button--text desktop-only product__guide",attrs:{"data-cy":"product-btn_size-guide"}},[t._v("\n          "+t._s(t.$t("Size guide"))+"\n        ")]),t._v(" "),t.options.size?r("SfSelect",{staticClass:"sf-select--underlined product__select-size",attrs:{"data-cy":"product-select_size",value:t.configuration.size,label:"Size",required:!0},on:{input:function(e){return t.updateFilter({size:e})}}},t._l(t.options.size,(function(e){return r("SfSelectOption",{key:e.value,attrs:{value:e.value}},[t._v("\n            "+t._s(e.label)+"\n          ")])})),1):t._e(),t._v(" "),t.options.color&&t.options.color.length>1?r("div",{staticClass:"product__colors desktop-only"},[r("p",{staticClass:"product__color-label"},[t._v(t._s(t.$t("Color"))+":")]),t._v(" "),t._l(t.options.color,(function(e,i){return r("SfColor",{key:i,staticClass:"product__color",attrs:{"data-cy":"product-color_update",color:e.value},on:{click:function(r){return t.updateFilter({color:e})}}})}))],2):t._e(),t._v(" "),r("SfAddToCart",{staticClass:"product__add-to-cart",attrs:{"data-cy":"product-cart_add",stock:t.stock,disabled:t.loading,canAddToCart:t.stock>0},on:{click:function(e){t.addItem({product:t.product,quantity:parseInt(t.qty)})}},model:{value:t.qty,callback:function(e){t.qty=e},expression:"qty"}})],1),t._v(" "),r("LazyHydrate",{attrs:{"when-idle":""}},[r("SfTabs",{staticClass:"product__tabs",attrs:{"open-tab":1}},[r("SfTab",{attrs:{"data-cy":"product-tab_description",title:"Description"}},[r("div",{staticClass:"product__description"},[t._v("\n                "+t._s(t.$t("Product description"))+"\n            ")]),t._v(" "),t._l(t.properties,(function(e,i){return r("SfProperty",{key:i,staticClass:"product__property",attrs:{name:e.name,value:e.value},scopedSlots:t._u(["Category"===e.name?{key:"value",fn:function(){return[r("SfButton",{staticClass:"product__property__button sf-button--text"},[t._v("\n                  "+t._s(e.value)+"\n                ")])]},proxy:!0}:null],null,!0)})}))],2),t._v(" "),r("SfTab",{attrs:{title:"Read reviews","data-cy":"product-tab_reviews"}},t._l(t.reviews,(function(e){return r("SfReview",{key:t.reviewGetters.getReviewId(e),staticClass:"product__review",attrs:{author:t.reviewGetters.getReviewAuthor(e),date:t.reviewGetters.getReviewDate(e),message:t.reviewGetters.getReviewMessage(e),"max-rating":5,rating:t.reviewGetters.getReviewRating(e),"char-limit":250,"read-more-text":"Read more","hide-full-text":"Read less"}})})),1),t._v(" "),r("SfTab",{staticClass:"product__additional-info",attrs:{title:"Additional Information","data-cy":"product-tab_additional"}},[r("div",{staticClass:"product__additional-info"},[r("p",{staticClass:"product__additional-info__title"},[t._v(t._s(t.$t("Brand")))]),t._v(" "),r("p",[t._v(t._s(t.brand))]),t._v(" "),r("p",{staticClass:"product__additional-info__title"},[t._v(t._s(t.$t("Instruction1")))]),t._v(" "),r("p",{staticClass:"product__additional-info__paragraph"},[t._v("\n              "+t._s(t.$t("Instruction2"))+"\n            ")]),t._v(" "),r("p",{staticClass:"product__additional-info__paragraph"},[t._v("\n              "+t._s(t.$t("Instruction3"))+"\n            ")]),t._v(" "),r("p",[t._v(t._s(t.careInstructions))])])])],1)],1)],1)],1),t._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("RelatedProducts",{attrs:{products:t.relatedProducts,loading:t.relatedLoading,title:"Match it with"}})],1),t._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("InstagramFeed")],1),t._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("MobileStoreBanner")],1)],1)}),[],!1,null,"b3cb1362",null));e.default=N.exports}}]);