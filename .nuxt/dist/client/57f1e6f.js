(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{444:function(t,e,r){var content=r(490);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("51f32aa2",content,!0,{sourceMap:!1})},445:function(t,e,r){var content=r(492);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("b8650e5e",content,!0,{sourceMap:!1})},489:function(t,e,r){"use strict";r(444)},490:function(t,e,r){var n=r(10)(!1);n.push([t.i,"@media (min-width:1024px){.smartphone-only[data-v-78de70ab]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-78de70ab]{display:none!important}}.title[data-v-78de70ab]{--heading-title-font-weight:var(--font-weight--semibold);--section-margin:var(--spacer-xl) 0;--section-content-margin:var(--spacer-xl) 0;--heading-title-font-size:var(--h2-font-size)}@media (min-width:1024px){.title[data-v-78de70ab]{--section-margin:var(--spacer-2xl) 0;--section-content-margin:var(--spacer-2xl) 0}}.grid[data-v-78de70ab]{display:flex;max-height:20.625rem;width:100%;justify-content:center;margin:0}@media (min-width:1024px){.grid[data-v-78de70ab]{max-height:40.625rem;max-width:60rem;margin:0 auto}}.grid__row[data-v-78de70ab]{display:flex;flex-direction:column}.grid__row+.grid__row[data-v-78de70ab]{margin-left:var(--spacer-xs)}@media (min-width:1024px){.grid__row+.grid__row[data-v-78de70ab]{margin-left:var(--spacer-sm)}}.grid__col[data-v-78de70ab]{width:10rem;height:10rem}@media (min-width:1024px){.grid__col[data-v-78de70ab]{width:29.375rem;height:29.375rem}.grid__col.small[data-v-78de70ab]{height:10rem}}.grid__col+.grid__col[data-v-78de70ab]{margin-top:var(--spacer-xs)}@media (min-width:1024px){.grid__col+.grid__col[data-v-78de70ab]{margin-top:var(--spacer-sm)}}",""]),t.exports=n},491:function(t,e,r){"use strict";r(445)},492:function(t,e,r){var n=r(10)(!1);n.push([t.i,"@media (min-width:1024px){.smartphone-only[data-v-69dcf472]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-69dcf472]{display:none!important}}.banner-app[data-v-69dcf472]{--banner-title-margin:var(--spacer-base) 0 var(--spacer-xl) 0;--banner-padding:0 0 var(--spacer-2xl);--banner-title-font-size:var(--h1-font-size);--banner-subtitle-font-size:var(--font-size--xl);--banner-title-font-weight:var(--font-weight--semibold);--banner-subtitle-font-weight:var(--font-weight--medium);--banner-title-text-transform:capitalize;--banner-title-text-transform:none;--banner-background-size:contain;--banner-background-position:right;display:block;min-height:26.25rem;max-width:77.5rem;margin:0 auto;padding:5.625rem 31.25rem 0 5.625rem}.banner-app__call-to-action[data-v-69dcf472]{display:flex;flex-wrap:nowrap}.banner-app__button[data-v-69dcf472]{--image-width:10.875rem;--image-height:3.5625rem;pointer-events:visible}.banner-app__button+.banner-app__button[data-v-69dcf472]{margin:0 0 0 var(--spacer-base)}",""]),t.exports=n},541:function(t,e,r){"use strict";var n=r(3),o=r(806),c=r(102),d={name:"InstagramFeed",components:{SfSection:o.a,SfImage:c.a},setup:function(){var t=Object(n.ref)(!1),e=function(e){t.value=e.matches};return Object(n.onMounted)((function(){t.value=Math.max(document.documentElement.clientWidth,window.innerWidth)<=1023,window.matchMedia("(max-width: 1023px)").addListener(e)})),Object(n.onBeforeUnmount)((function(){window.matchMedia("(max-width: 1023px)").removeListener(e)})),{isMobile:t}}},l=(r(489),r(2)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfSection",{staticClass:"title",attrs:{"title-heading":"Share Your Look","subtitle-heading":"#YOURLOOK"}},[r("div",{staticClass:"grid grid-images"},[r("div",{staticClass:"grid__row"},[r("div",{staticClass:"grid__col"},[t.isMobile?r("SfImage",{attrs:{src:"/homepage/imageAm.webp",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageAd.webp",width:470,height:470}},[t._v("katherina_trn")])],1),t._v(" "),r("div",{staticClass:"grid__col small"},[t.isMobile?r("SfImage",{attrs:{src:"/homepage/imageBm.webp",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageCd.webp",width:470,height:160}},[t._v("katherina_trn")])],1)]),t._v(" "),r("div",{staticClass:"grid__row"},[r("div",{staticClass:"grid__col small"},[t.isMobile?r("SfImage",{attrs:{src:"/homepage/imageCm.webp",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageBd.webp",width:470,height:160}},[t._v("katherina_trn")])],1),t._v(" "),r("div",{staticClass:"grid__col"},[t.isMobile?r("SfImage",{attrs:{src:"/homepage/imageDm.webp",width:160,height:160}},[t._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageDd.webp",width:470,height:470}},[t._v("katherina_trn")])],1)])])])}),[],!1,null,"78de70ab",null);e.a=component.exports},542:function(t,e,r){"use strict";var n=r(807),o=r(102),c=r(23),d={name:"AppStoreBanner",components:{SfBanner:n.a,SfImage:o.a,SfButton:c.a}},l=(r(491),r(2)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfBanner",{staticClass:"sf-banner--left desktop-only banner-app",attrs:{image:"/homepage/bannerD.png",subtitle:"Fashon to take away",title:"Download our application to your mobile"},scopedSlots:t._u([{key:"call-to-action",fn:function(){return[r("div",{staticClass:"banner-app__call-to-action"},[r("SfButton",{staticClass:"banner-app__button sf-button--pure",attrs:{"aria-label":"Go to Apple Product"},on:{click:function(){}}},[r("SfImage",{attrs:{src:"/homepage/apple.png"}})],1),t._v(" "),r("SfButton",{staticClass:"banner-app__button sf-button--pure",attrs:{"aria-label":"Go to Google Product"},on:{click:function(){}}},[r("SfImage",{attrs:{src:"/homepage/google.png"}})],1)],1)]},proxy:!0}])})}),[],!1,null,"69dcf472",null);e.a=component.exports},620:function(t,e,r){var content=r(771);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("aa827eb2",content,!0,{sourceMap:!1})},624:function(t,e,r){var content=r(779);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("417d5b16",content,!0,{sourceMap:!1})},770:function(t,e,r){"use strict";r(620)},771:function(t,e,r){var n=r(10)(!1);n.push([t.i,"@media (min-width:1024px){.smartphone-only[data-v-c78fb59e]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-c78fb59e]{display:none!important}}.section[data-v-c78fb59e]{margin-top:var(--spacer-base)}.carousel[data-v-c78fb59e]{margin:0 calc(var(--spacer-sm)*-1) 0 0}@media (min-width:1024px){.carousel[data-v-c78fb59e]{margin:0}}.carousel__item[data-v-c78fb59e]{margin:1.9375rem 0 2.4375rem}",""]),t.exports=n},778:function(t,e,r){"use strict";r(624)},779:function(t,e,r){var n=r(10)(!1);n.push([t.i,"@media (min-width:1024px){.smartphone-only[data-v-b3cb1362]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-b3cb1362]{display:none!important}}#product[data-v-b3cb1362]{box-sizing:border-box}@media (min-width:1024px){#product[data-v-b3cb1362]{max-width:1272px;margin:0 auto}}@media (min-width:1024px){.product[data-v-b3cb1362]{display:flex}}.product__info[data-v-b3cb1362]{margin:var(--spacer-sm) auto}@media (min-width:1024px){.product__info[data-v-b3cb1362]{max-width:32.625rem;margin:0 0 0 7.5rem}}.product__header[data-v-b3cb1362]{--heading-title-color:var(--c-link);--heading-title-font-weight:var(--font-weight--bold);--heading-padding:0;margin:0 var(--spacer-sm);display:flex;justify-content:space-between}@media (min-width:1024px){.product__header[data-v-b3cb1362]{--heading-title-font-weight:var(--font-weight--semibold);margin:0 auto}}.product__drag-icon[data-v-b3cb1362]{-webkit-animation:moveicon-data-v-b3cb1362 1s ease-in-out infinite;animation:moveicon-data-v-b3cb1362 1s ease-in-out infinite}.product__price-and-rating[data-v-b3cb1362]{margin:0 var(--spacer-sm) var(--spacer-base);align-items:center}@media (min-width:1024px){.product__price-and-rating[data-v-b3cb1362]{display:flex;justify-content:space-between;margin:var(--spacer-sm) 0 var(--spacer-lg) 0}}.product__rating[data-v-b3cb1362]{display:flex;align-items:center;justify-content:flex-end;margin:var(--spacer-xs) 0 var(--spacer-xs)}.product__count[data-v-b3cb1362]{font:var(--font-weight--normal) var(--font-size--sm)/1.4 var(--font-family--secondary);font:var(--count-font,var(--count-font-weight,var(--font-weight--normal)) var(--count-font-size,var(--font-size--sm))/var(--count-font-line-height,1.4) var(--count-font-family,var(--font-family--secondary)));color:var(--c-text);text-decoration:none;margin:0 0 0 var(--spacer-xs)}.product__description[data-v-b3cb1362]{font:var(--font-weight--light) var(--font-size--base)/1.6 var(--font-family--primary);font:var(--product-description-font,var(--product-description-font-weight,var(--font-weight--light)) var(--product-description-font-size,var(--font-size--base))/var(--product-description-font-line-height,1.6) var(--product-description-font-family,var(--font-family--primary)))}.product__select-size[data-v-b3cb1362]{margin:0 var(--spacer-sm)}@media (min-width:1024px){.product__select-size[data-v-b3cb1362]{margin:0}}.product__colors[data-v-b3cb1362]{font:var(--font-weight--normal) var(--font-size--lg)/1.6 var(--font-family--secondary);font:var(--product-color-font,var(--product-color-font-weight,var(--font-weight--normal)) var(--product-color-font-size,var(--font-size--lg))/var(--product-color-font-line-height,1.6) var(--product-color-font-family,var(--font-family--secondary)));display:flex;align-items:center;margin-top:var(--spacer-xl)}.product__color-label[data-v-b3cb1362]{margin:0 var(--spacer-lg) 0 0}.product__color[data-v-b3cb1362]{margin:0 var(--spacer-2xs)}.product__add-to-cart[data-v-b3cb1362]{margin:var(--spacer-base) var(--spacer-sm) 0}@media (min-width:1024px){.product__add-to-cart[data-v-b3cb1362]{margin-top:var(--spacer-2xl)}}.product__compare[data-v-b3cb1362],.product__guide[data-v-b3cb1362],.product__save[data-v-b3cb1362]{display:block;margin:var(--spacer-xl) 0 var(--spacer-base) auto}.product__compare[data-v-b3cb1362]{margin-top:0}.product__tabs[data-v-b3cb1362]{margin:var(--spacer-lg) auto var(--spacer-2xl);--tabs-title-font-size:var(--font-size--lg)}@media (min-width:1024px){.product__tabs[data-v-b3cb1362]{margin-top:var(--spacer-2xl)}}.product__property[data-v-b3cb1362]{margin:var(--spacer-base) 0}.product__property__button[data-v-b3cb1362]{--button-font-size:var(--font-size--base)}.product__review[data-v-b3cb1362]{padding-bottom:24px;border-bottom:1px solid var(--c-light);margin-bottom:var(--spacer-base)}.product__additional-info[data-v-b3cb1362]{color:var(--c-link);font:var(--font-weight--light) var(--font-size--sm)/1.6 var(--font-family--primary);font:var(--additional-info-font,var(--additional-info-font-weight,var(--font-weight--light)) var(--additional-info-font-size,var(--font-size--sm))/var(--additional-info-font-line-height,1.6) var(--additional-info-font-family,var(--font-family--primary)))}.product__additional-info__title[data-v-b3cb1362]{font-weight:var(--font-weight--normal);font-size:var(--font-size--base);margin:0 0 var(--spacer-sm)}.product__additional-info__title[data-v-b3cb1362]:not(:first-child){margin-top:3.5rem}.product__additional-info__paragraph[data-v-b3cb1362]{margin:0}.product__gallery[data-v-b3cb1362]{flex:1}.breadcrumbs[data-v-b3cb1362]{margin:var(--spacer-base) auto var(--spacer-lg)}@-webkit-keyframes moveicon-data-v-b3cb1362{0%{transform:translateZ(0)}50%{transform:translate3d(0,30%,0)}to{transform:translateZ(0)}}@keyframes moveicon-data-v-b3cb1362{0%{transform:translateZ(0)}50%{transform:translate3d(0,30%,0)}to{transform:translateZ(0)}}",""]),t.exports=n},792:function(t,e,r){"use strict";r.r(e);r(32),r(18),r(20),r(15),r(12),r(22);var n=r(13),o=(r(30),r(8)),c=(r(619),r(769),r(38),r(87),r(410)),d=r(635),l=r(244),v=r(118),f=r(160),m=r(465),_=r(401),h=r(636),y=r(789),w=r(809),x=r(19),S=r(102),C=r(807),k=r(810),z=r(811),O=r(637),j=r(23),I=r(541),P=r(793),R=r(786),G=r(806),B=r(409),$=r(17),M={name:"RelatedProducts",setup:function(){return{productGetters:$.f}},components:{SfCarousel:P.a,SfProductCard:R.a,SfSection:G.a,SfLoader:B.a},props:{title:String,products:Array,loading:Boolean}},A=(r(770),r(2)),L=Object(A.a)(M,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfSection",{staticClass:"section",attrs:{"title-heading":t.title}},[r("SfLoader",{class:{loading:t.loading},attrs:{loading:t.loading}},[r("SfCarousel",{staticClass:"carousel",attrs:{"data-cy":"related-products-carousel",settings:{peek:16,breakpoints:{1023:{peek:0,perView:2}}}}},t._l(t.products,(function(e,i){return r("SfCarouselItem",{key:i,staticClass:"carousel__item"},[r("SfProductCard",{attrs:{title:t.productGetters.getName(e),image:t.productGetters.getCoverImage(e),"regular-price":t.$n(t.productGetters.getPrice(e).regular,"currency"),"special-price":t.productGetters.getPrice(e).special&&t.$n(t.productGetters.getPrice(e).special,"currency"),link:t.localePath("/p/"+t.productGetters.getId(e)+"/"+t.productGetters.getSlug(e))}})],1)})),1)],1)],1)}),[],!1,null,"c78fb59e",null).exports,D=r(3),F=r(9),T=r(542),H=r(159);function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function Z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var J={name:"Product",transition:"fade",setup:function(t,e){var r=Object(D.ref)(1),n=e.root.$route.params.id,c=Object($.k)("products"),d=c.products,l=c.search,v=Object($.k)("relatedProducts"),f=v.products,m=v.search,_=v.loading,h=Object($.h)(),y=h.addItem,w=h.loading,x=Object($.l)("productReviews"),S=x.reviews,C=x.search,k=Object(D.computed)((function(){return $.f.getFiltered(d.value,{master:!0,attributes:e.root.$route.query})[0]})),z=Object(D.computed)((function(){return $.f.getAttributes(d.value,["color","size"])})),O=Object(D.computed)((function(){return $.f.getAttributes(k.value,["color","size"])})),j=Object(D.computed)((function(){return $.f.getCategoryIds(k.value)})),I=Object(D.computed)((function(){return $.g.getItems(S.value)})),P=Object(D.computed)((function(){return $.f.getGallery(k.value).map((function(img){return{mobile:{url:img.small},desktop:{url:img.normal},big:{url:img.big}}}))}));Object(F.onSSR)(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l({id:n});case 2:return t.next=4,m({catId:[j.value[0]],limit:8});case 4:return t.next=6,C({productId:n});case 6:case"end":return t.stop()}}),t)}))));return{updateFilter:function(filter){e.root.$router.push({path:e.root.$route.path,query:Z(Z({},O.value),filter)})},configuration:O,product:k,reviews:I,reviewGetters:$.g,averageRating:Object(D.computed)((function(){return $.f.getAverageRating(k.value)})),totalReviews:Object(D.computed)((function(){return $.f.getTotalReviews(k.value)})),relatedProducts:Object(D.computed)((function(){return $.f.getFiltered(f.value,{master:!0})})),relatedLoading:_,options:z,qty:r,addItem:y,loading:w,productGetters:$.f,productGallery:P}},components:{SfAlert:c.a,SfColor:d.a,SfProperty:l.a,SfHeading:v.a,SfPrice:f.a,SfRating:m.a,SfSelect:_.a,SfAddToCart:h.a,SfTabs:y.a,SfGallery:w.a,SfIcon:x.a,SfImage:S.a,SfBanner:C.a,SfSticky:k.a,SfReview:z.a,SfBreadcrumbs:O.a,SfButton:j.a,InstagramFeed:I.a,RelatedProducts:L,MobileStoreBanner:T.a,LazyHydrate:H.a},data:function(){return{stock:5,properties:[{name:"Product Code",value:"578902-00"},{name:"Category",value:"Pants"},{name:"Material",value:"Cotton"},{name:"Country",value:"Germany"}],description:"Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",detailsIsActive:!1,brand:"Brand name is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.",careInstructions:"Do not wash!",breadcrumbs:[{text:"Home",route:{link:"#"}},{text:"Category",route:{link:"#"}},{text:"Pants",route:{link:"#"}}]}}},N=(r(778),Object(A.a)(J,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"product"}},[r("SfBreadcrumbs",{staticClass:"breadcrumbs desktop-only",attrs:{breadcrumbs:t.breadcrumbs}}),t._v(" "),r("div",{staticClass:"product"},[r("LazyHydrate",{attrs:{"when-idle":""}},[r("SfGallery",{staticClass:"product__gallery",attrs:{images:t.productGallery}})],1),t._v(" "),r("div",{staticClass:"product__info"},[r("div",{staticClass:"product__header"},[r("SfHeading",{staticClass:"sf-heading--no-underline sf-heading--left",attrs:{title:t.productGetters.getName(t.product),level:3}}),t._v(" "),r("SfIcon",{staticClass:"product__drag-icon smartphone-only",attrs:{icon:"drag",size:"xxl",color:"var(--c-text-disabled)"}})],1),t._v(" "),r("div",{staticClass:"product__price-and-rating"},[r("SfPrice",{attrs:{regular:t.$n(t.productGetters.getPrice(t.product).regular,"currency"),special:t.productGetters.getPrice(t.product).special&&t.$n(t.productGetters.getPrice(t.product).special,"currency")}}),t._v(" "),r("div",[r("div",{staticClass:"product__rating"},[r("SfRating",{attrs:{score:t.averageRating,max:5}}),t._v(" "),t.totalReviews?r("a",{staticClass:"product__count",attrs:{href:"#"}},[t._v("\n              ("+t._s(t.totalReviews)+")\n            ")]):t._e()],1),t._v(" "),r("SfButton",{staticClass:"sf-button--text",attrs:{"data-cy":"product-btn_read-all"}},[t._v(t._s(t.$t("Read all reviews")))])],1)],1),t._v(" "),r("div",[r("p",{staticClass:"product__description desktop-only"},[t._v("\n          "+t._s(t.description)+"\n        ")]),t._v(" "),r("SfButton",{staticClass:"sf-button--text desktop-only product__guide",attrs:{"data-cy":"product-btn_size-guide"}},[t._v("\n          "+t._s(t.$t("Size guide"))+"\n        ")]),t._v(" "),t.options.size?r("SfSelect",{staticClass:"sf-select--underlined product__select-size",attrs:{"data-cy":"product-select_size",value:t.configuration.size,label:"Size",required:!0},on:{input:function(e){return t.updateFilter({size:e})}}},t._l(t.options.size,(function(e){return r("SfSelectOption",{key:e.value,attrs:{value:e.value}},[t._v("\n            "+t._s(e.label)+"\n          ")])})),1):t._e(),t._v(" "),t.options.color&&t.options.color.length>1?r("div",{staticClass:"product__colors desktop-only"},[r("p",{staticClass:"product__color-label"},[t._v(t._s(t.$t("Color"))+":")]),t._v(" "),t._l(t.options.color,(function(e,i){return r("SfColor",{key:i,staticClass:"product__color",attrs:{"data-cy":"product-color_update",color:e.value},on:{click:function(r){return t.updateFilter({color:e})}}})}))],2):t._e(),t._v(" "),r("SfAddToCart",{staticClass:"product__add-to-cart",attrs:{"data-cy":"product-cart_add",stock:t.stock,disabled:t.loading,canAddToCart:t.stock>0},on:{click:function(e){t.addItem({product:t.product,quantity:parseInt(t.qty)})}},model:{value:t.qty,callback:function(e){t.qty=e},expression:"qty"}})],1),t._v(" "),r("LazyHydrate",{attrs:{"when-idle":""}},[r("SfTabs",{staticClass:"product__tabs",attrs:{"open-tab":1}},[r("SfTab",{attrs:{"data-cy":"product-tab_description",title:"Description"}},[r("div",{staticClass:"product__description"},[t._v("\n                "+t._s(t.$t("Product description"))+"\n            ")]),t._v(" "),t._l(t.properties,(function(e,i){return r("SfProperty",{key:i,staticClass:"product__property",attrs:{name:e.name,value:e.value},scopedSlots:t._u(["Category"===e.name?{key:"value",fn:function(){return[r("SfButton",{staticClass:"product__property__button sf-button--text"},[t._v("\n                  "+t._s(e.value)+"\n                ")])]},proxy:!0}:null],null,!0)})}))],2),t._v(" "),r("SfTab",{attrs:{title:"Read reviews","data-cy":"product-tab_reviews"}},t._l(t.reviews,(function(e){return r("SfReview",{key:t.reviewGetters.getReviewId(e),staticClass:"product__review",attrs:{author:t.reviewGetters.getReviewAuthor(e),date:t.reviewGetters.getReviewDate(e),message:t.reviewGetters.getReviewMessage(e),"max-rating":5,rating:t.reviewGetters.getReviewRating(e),"char-limit":250,"read-more-text":"Read more","hide-full-text":"Read less"}})})),1),t._v(" "),r("SfTab",{staticClass:"product__additional-info",attrs:{title:"Additional Information","data-cy":"product-tab_additional"}},[r("div",{staticClass:"product__additional-info"},[r("p",{staticClass:"product__additional-info__title"},[t._v(t._s(t.$t("Brand")))]),t._v(" "),r("p",[t._v(t._s(t.brand))]),t._v(" "),r("p",{staticClass:"product__additional-info__title"},[t._v(t._s(t.$t("Instruction1")))]),t._v(" "),r("p",{staticClass:"product__additional-info__paragraph"},[t._v("\n              "+t._s(t.$t("Instruction2"))+"\n            ")]),t._v(" "),r("p",{staticClass:"product__additional-info__paragraph"},[t._v("\n              "+t._s(t.$t("Instruction3"))+"\n            ")]),t._v(" "),r("p",[t._v(t._s(t.careInstructions))])])])],1)],1)],1)],1),t._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("RelatedProducts",{attrs:{products:t.relatedProducts,loading:t.relatedLoading,title:"Match it with"}})],1),t._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("InstagramFeed")],1),t._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("MobileStoreBanner")],1)],1)}),[],!1,null,"b3cb1362",null));e.default=N.exports}}]);