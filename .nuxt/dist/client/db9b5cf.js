(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{444:function(e,t,r){var content=r(490);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("51f32aa2",content,!0,{sourceMap:!1})},445:function(e,t,r){var content=r(492);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("b8650e5e",content,!0,{sourceMap:!1})},489:function(e,t,r){"use strict";r(444)},490:function(e,t,r){var n=r(10)(!1);n.push([e.i,"@media (min-width:1024px){.smartphone-only[data-v-78de70ab]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-78de70ab]{display:none!important}}.title[data-v-78de70ab]{--heading-title-font-weight:var(--font-weight--semibold);--section-margin:var(--spacer-xl) 0;--section-content-margin:var(--spacer-xl) 0;--heading-title-font-size:var(--h2-font-size)}@media (min-width:1024px){.title[data-v-78de70ab]{--section-margin:var(--spacer-2xl) 0;--section-content-margin:var(--spacer-2xl) 0}}.grid[data-v-78de70ab]{display:flex;max-height:20.625rem;width:100%;justify-content:center;margin:0}@media (min-width:1024px){.grid[data-v-78de70ab]{max-height:40.625rem;max-width:60rem;margin:0 auto}}.grid__row[data-v-78de70ab]{display:flex;flex-direction:column}.grid__row+.grid__row[data-v-78de70ab]{margin-left:var(--spacer-xs)}@media (min-width:1024px){.grid__row+.grid__row[data-v-78de70ab]{margin-left:var(--spacer-sm)}}.grid__col[data-v-78de70ab]{width:10rem;height:10rem}@media (min-width:1024px){.grid__col[data-v-78de70ab]{width:29.375rem;height:29.375rem}.grid__col.small[data-v-78de70ab]{height:10rem}}.grid__col+.grid__col[data-v-78de70ab]{margin-top:var(--spacer-xs)}@media (min-width:1024px){.grid__col+.grid__col[data-v-78de70ab]{margin-top:var(--spacer-sm)}}",""]),e.exports=n},491:function(e,t,r){"use strict";r(445)},492:function(e,t,r){var n=r(10)(!1);n.push([e.i,"@media (min-width:1024px){.smartphone-only[data-v-69dcf472]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-69dcf472]{display:none!important}}.banner-app[data-v-69dcf472]{--banner-title-margin:var(--spacer-base) 0 var(--spacer-xl) 0;--banner-padding:0 0 var(--spacer-2xl);--banner-title-font-size:var(--h1-font-size);--banner-subtitle-font-size:var(--font-size--xl);--banner-title-font-weight:var(--font-weight--semibold);--banner-subtitle-font-weight:var(--font-weight--medium);--banner-title-text-transform:capitalize;--banner-title-text-transform:none;--banner-background-size:contain;--banner-background-position:right;display:block;min-height:26.25rem;max-width:77.5rem;margin:0 auto;padding:5.625rem 31.25rem 0 5.625rem}.banner-app__call-to-action[data-v-69dcf472]{display:flex;flex-wrap:nowrap}.banner-app__button[data-v-69dcf472]{--image-width:10.875rem;--image-height:3.5625rem;pointer-events:visible}.banner-app__button+.banner-app__button[data-v-69dcf472]{margin:0 0 0 var(--spacer-base)}",""]),e.exports=n},541:function(e,t,r){"use strict";var n=r(3),o=r(806),l=r(102),c={name:"InstagramFeed",components:{SfSection:o.a,SfImage:l.a},setup:function(){var e=Object(n.ref)(!1),t=function(t){e.value=t.matches};return Object(n.onMounted)((function(){e.value=Math.max(document.documentElement.clientWidth,window.innerWidth)<=1023,window.matchMedia("(max-width: 1023px)").addListener(t)})),Object(n.onBeforeUnmount)((function(){window.matchMedia("(max-width: 1023px)").removeListener(t)})),{isMobile:e}}},d=(r(489),r(2)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("SfSection",{staticClass:"title",attrs:{"title-heading":"Share Your Look","subtitle-heading":"#YOURLOOK"}},[r("div",{staticClass:"grid grid-images"},[r("div",{staticClass:"grid__row"},[r("div",{staticClass:"grid__col"},[e.isMobile?r("SfImage",{attrs:{src:"/homepage/imageAm.webp",width:160,height:160}},[e._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageAd.webp",width:470,height:470}},[e._v("katherina_trn")])],1),e._v(" "),r("div",{staticClass:"grid__col small"},[e.isMobile?r("SfImage",{attrs:{src:"/homepage/imageBm.webp",width:160,height:160}},[e._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageCd.webp",width:470,height:160}},[e._v("katherina_trn")])],1)]),e._v(" "),r("div",{staticClass:"grid__row"},[r("div",{staticClass:"grid__col small"},[e.isMobile?r("SfImage",{attrs:{src:"/homepage/imageCm.webp",width:160,height:160}},[e._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageBd.webp",width:470,height:160}},[e._v("katherina_trn")])],1),e._v(" "),r("div",{staticClass:"grid__col"},[e.isMobile?r("SfImage",{attrs:{src:"/homepage/imageDm.webp",width:160,height:160}},[e._v("katherina_trn")]):r("SfImage",{attrs:{src:"/homepage/imageDd.webp",width:470,height:470}},[e._v("katherina_trn")])],1)])])])}),[],!1,null,"78de70ab",null);t.a=component.exports},542:function(e,t,r){"use strict";var n=r(807),o=r(102),l=r(23),c={name:"AppStoreBanner",components:{SfBanner:n.a,SfImage:o.a,SfButton:l.a}},d=(r(491),r(2)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("SfBanner",{staticClass:"sf-banner--left desktop-only banner-app",attrs:{image:"/homepage/bannerD.png",subtitle:"Fashon to take away",title:"Download our application to your mobile"},scopedSlots:e._u([{key:"call-to-action",fn:function(){return[r("div",{staticClass:"banner-app__call-to-action"},[r("SfButton",{staticClass:"banner-app__button sf-button--pure",attrs:{"aria-label":"Go to Apple Product"},on:{click:function(){}}},[r("SfImage",{attrs:{src:"/homepage/apple.png"}})],1),e._v(" "),r("SfButton",{staticClass:"banner-app__button sf-button--pure",attrs:{"aria-label":"Go to Google Product"},on:{click:function(){}}},[r("SfImage",{attrs:{src:"/homepage/google.png"}})],1)],1)]},proxy:!0}])})}),[],!1,null,"69dcf472",null);t.a=component.exports},564:function(e,t,r){var content=r(682);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(11).default)("8d10d466",content,!0,{sourceMap:!1})},681:function(e,t,r){"use strict";r(564)},682:function(e,t,r){var n=r(10)(!1);n.push([e.i,"@media (min-width:1024px){.smartphone-only[data-v-8e9ae294]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-8e9ae294]{display:none!important}}#home[data-v-8e9ae294]{box-sizing:border-box;padding:0 var(--spacer-sm)}@media (min-width:1024px){#home[data-v-8e9ae294]{max-width:1240px;padding:0;margin:0 auto}}.hero[data-v-8e9ae294]{margin:var(--spacer-xl) auto var(--spacer-lg);--hero-item-background-position:center}.hero[data-v-8e9ae294]  .sf-link:hover{color:var(--c-white)}@media (min-width:1024px){.hero[data-v-8e9ae294]{margin:var(--spacer-xl) auto var(--spacer-2xl)}}.hero .sf-hero-item[data-v-8e9ae294]:nth-child(2n){--hero-item-background-position:left}@media (max-width:1023px){.hero .sf-hero-item[data-v-8e9ae294]:nth-child(2n){--hero-item-background-position:30%;--hero-item-wrapper-text-align:right;--hero-item-subtitle-width:100%;--hero-item-title-width:100%;--hero-item-wrapper-padding:var(--spacer-sm) var(--spacer-sm) var(--spacer-sm) var(--spacer-2xl)}}[data-v-8e9ae294] .sf-hero__controls{--hero-controls-display:none}.banner-grid[data-v-8e9ae294]{--banner-container-width:50%;margin:var(--spacer-xl) 0}.banner-grid[data-v-8e9ae294]  .sf-link:hover{color:var(--c-white)}@media (min-width:1024px){.banner-grid[data-v-8e9ae294]{margin:var(--spacer-2xl) 0}.banner-grid[data-v-8e9ae294]  .sf-link{--button-width:auto}}.banner__tshirt[data-v-8e9ae294]{background-position:0}@media (min-width:1024px){.banner-central[data-v-8e9ae294]{--banner-container-flex:0 0 70%}}.similar-products[data-v-8e9ae294]{display:flex;justify-content:space-between;align-items:center;padding-bottom:var(--spacer-2xs);--heading-padding:0;border-bottom:1px solid var(--c-light)}@media (min-width:1024px){.similar-products[data-v-8e9ae294]{border-bottom:0;justify-content:center;padding-bottom:0}}.call-to-action[data-v-8e9ae294]{background-position:100%;margin:var(--spacer-xs) 0}@media (min-width:1024px){.call-to-action[data-v-8e9ae294]{margin:var(--spacer-xl) 0 var(--spacer-2xl) 0}}.carousel[data-v-8e9ae294]{margin:0 calc(var(--spacer-sm)*-1) 0 0}@media (min-width:1024px){.carousel[data-v-8e9ae294]{margin:0}}.carousel__item[data-v-8e9ae294]{margin:1.375rem 0 2.5rem}@media (min-width:1024px){.carousel__item[data-v-8e9ae294]{margin:var(--spacer-xl) 0 var(--spacer-xl) 0}}.carousel__item__product[data-v-8e9ae294]{--product-card-add-button-transform:translate3d(0,30%,0)}",""]),e.exports=n},800:function(e,t,r){"use strict";r.r(t);var n=r(790),o=r(807),l=r(787),c=r(806),d=r(793),m=r(786),h=r(102),f=r(808),v=r(118),w=r(638),_=r(23),x=r(541),k=r(542),S=r(159),y={name:"Home",components:{InstagramFeed:x.a,SfHero:n.a,SfBanner:o.a,SfCallToAction:l.a,SfSection:c.a,SfCarousel:d.a,SfProductCard:m.a,SfImage:h.a,SfBannerGrid:f.a,SfHeading:v.a,SfArrow:w.a,SfButton:_.a,MobileStoreBanner:k.a,LazyHydrate:S.a},data:function(){return{heroes:[{title:"Colorful summer dresses are already in store",subtitle:"SUMMER COLLECTION 2019",buttonText:"Learn more",background:"#eceff1",image:"/homepage/bannerH.webp",link:"/c/women/women-clothing-shirts"},{title:"Colorful summer dresses are already in store",subtitle:"SUMMER COLLECTION 2019",buttonText:"Learn more",background:"#efebe9",image:"/homepage/bannerA.webp",link:"/c/women/women-shoes-sandals",className:"sf-hero-item--position-bg-top-left sf-hero-item--align-right"},{title:"Colorful summer dresses are already in store",subtitle:"SUMMER COLLECTION 2019",buttonText:"Learn more",background:"#fce4ec",image:"/homepage/bannerB.webp",link:"/c/women/women-clothing-dresses"}],banners:[{slot:"banner-A",subtitle:"Dresses",title:"Cocktail & Party",description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",buttonText:"Shop now",image:{mobile:"/homepage/bannerB.webp",desktop:"/homepage/bannerF.webp"},class:"sf-banner--slim desktop-only",link:"/c/women/women-clothing-skirts"},{slot:"banner-B",subtitle:"Dresses",title:"Linen Dresses",description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",buttonText:"Shop now",image:"/homepage/bannerE.webp",class:"sf-banner--slim banner-central desktop-only",link:"/c/women/women-clothing-dresses"},{slot:"banner-C",subtitle:"T-Shirts",title:"The Office Life",image:"/homepage/bannerC.webp",class:"sf-banner--slim banner__tshirt",link:"/c/women/women-clothing-shirts"},{slot:"banner-D",subtitle:"Summer Sandals",title:"Eco Sandals",image:"/homepage/bannerG.webp",class:"sf-banner--slim",link:"/c/women/women-shoes-sandals"}],products:[{title:"Cream Beach Bag",image:"/homepage/productA.webp",price:{regular:"50.00 $"},rating:{max:5,score:4},isOnWishlist:!0},{title:"Cream Beach Bag",image:"/homepage/productB.webp",price:{regular:"50.00 $"},rating:{max:5,score:4},isOnWishlist:!1},{title:"Cream Beach Bag",image:"/homepage/productC.webp",price:{regular:"50.00 $"},rating:{max:5,score:4},isOnWishlist:!1},{title:"Cream Beach Bag",image:"/homepage/productA.webp",price:{regular:"50.00 $"},rating:{max:5,score:4},isOnWishlist:!1},{title:"Cream Beach Bag",image:"/homepage/productB.webp",price:{regular:"50.00 $"},rating:{max:5,score:4},isOnWishlist:!1},{title:"Cream Beach Bag",image:"/homepage/productC.webp",price:{regular:"50.00 $"},rating:{max:5,score:4},isOnWishlist:!1},{title:"Cream Beach Bag",image:"/homepage/productA.webp",price:{regular:"50.00 $"},rating:{max:5,score:4},isOnWishlist:!1},{title:"Cream Beach Bag",image:"/homepage/productB.webp",price:{regular:"50.00 $"},rating:{max:5,score:4},isOnWishlist:!1}]}},methods:{toggleWishlist:function(e){this.products[e].isOnWishlist=!this.products[e].isOnWishlist}}},C=(r(681),r(2)),component=Object(C.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"home"}},[r("LazyHydrate",{attrs:{"when-idle":""}},[r("SfHero",{staticClass:"hero"},e._l(e.heroes,(function(e,i){return r("SfHeroItem",{key:i,class:e.className,attrs:{title:e.title,subtitle:e.subtitle,"button-text":e.buttonText,background:e.background,image:e.image}})})),1)],1),e._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("SfBannerGrid",{staticClass:"banner-grid",attrs:{"banner-grid":1},scopedSlots:e._u([e._l(e.banners,(function(e){return{key:e.slot,fn:function(){return[r("SfBanner",{key:e.slot,class:e.class,attrs:{title:e.title,subtitle:e.subtitle,description:e.description,"button-text":e.buttonText,image:e.image}})]},proxy:!0}}))],null,!0)})],1),e._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("div",{staticClass:"similar-products"},[r("SfHeading",{attrs:{title:"Match with it",level:3}}),e._v(" "),r("nuxt-link",{staticClass:"smartphone-only",attrs:{to:e.localePath("/c/women")}},[e._v("See all")])],1)]),e._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("SfCarousel",{staticClass:"carousel",attrs:{settings:{peek:16,breakpoints:{1023:{peek:0,perView:2}}}},scopedSlots:e._u([{key:"prev",fn:function(e){var t=e.go;return[r("SfArrow",{staticClass:"sf-arrow--left sf-arrow--long",attrs:{"aria-label":"prev"},on:{click:function(e){return t("prev")}}})]}},{key:"next",fn:function(e){var t=e.go;return[r("SfArrow",{staticClass:"sf-arrow--right sf-arrow--long",attrs:{"aria-label":"next"},on:{click:function(e){return t("next")}}})]}}])},[e._v(" "),e._v(" "),e._l(e.products,(function(t,i){return r("SfCarouselItem",{key:i,staticClass:"carousel__item"},[r("SfProductCard",{staticClass:"carousel__item__product",attrs:{"data-cy":"home-url_product",title:t.title,image:t.image,"regular-price":t.price.regular,"max-rating":t.rating.max,"score-rating":t.rating.score,"show-add-to-cart-button":!0,"is-on-wishlist":t.isOnWishlist,link:"/"},on:{"click:wishlist":function(t){return e.toggleWishlist(i)}}})],1)}))],2)],1),e._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("SfCallToAction",{staticClass:"call-to-action",attrs:{title:"Subscribe to Newsletters","button-text":"Subscribe",description:"Be aware of upcoming sales and events. Receive gifts and special offers!",image:"/homepage/newsletter.webp"}})],1),e._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("InstagramFeed")],1),e._v(" "),r("LazyHydrate",{attrs:{"when-visible":""}},[r("MobileStoreBanner")],1)],1)}),[],!1,null,"8e9ae294",null);t.default=component.exports}}]);