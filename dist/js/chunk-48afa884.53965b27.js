(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48afa884"],{"0803":function(t,e,s){"use strict";var n=s("86b5"),i=s.n(n);i.a},"0a55":function(t,e,s){},1148:function(t,e,s){"use strict";var n=s("a691"),i=s("1d80");t.exports="".repeat||function(t){var e=String(i(this)),s="",o=n(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(s+=e);return s}},"159b":function(t,e,s){var n=s("da84"),i=s("fdbc"),o=s("17c2"),a=s("9112");for(var r in i){var c=n[r],l=c&&c.prototype;if(l&&l.forEach!==o)try{a(l,"forEach",o)}catch(u){l.forEach=o}}},"17c2":function(t,e,s){"use strict";var n=s("b727").forEach,i=s("b301");t.exports=i("forEach")?function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1dde":function(t,e,s){var n=s("d039"),i=s("b622"),o=s("60ae"),a=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],s=e.constructor={};return s[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2085:function(t,e,s){},2473:function(t,e,s){},2538:function(t,e,s){},3243:function(t,e,s){"use strict";var n=s("a1df"),i=s.n(n);i.a},"408a":function(t,e,s){var n=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"4de4":function(t,e,s){"use strict";var n=s("23e7"),i=s("b727").filter,o=s("d039"),a=s("1dde"),r=a("filter"),c=r&&!o((function(){[].filter.call({length:-1,0:1},(function(t){throw t}))}));n({target:"Array",proto:!0,forced:!r||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4f20":function(t,e,s){"use strict";var n=s("faa7"),i=s.n(n);i.a},6568:function(t,e,s){"use strict";var n=s("acc0"),i=s.n(n);i.a},"6d71":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods"},t._l(t.goods,(function(t,e){return s("goods-list-item",{key:e,attrs:{"goods-item":t}})})),1)},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods-item",on:{click:t.itemClick}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.showImage,expression:"showImage"}],on:{load:t.imageLoad}}),s("div",{staticClass:"goods-info"},[s("p",[t._v(t._s(t.goodsItem.title))]),s("span",{staticClass:"price"},[t._v(t._s(t.goodsItem.price))]),s("span",{staticClass:"collect"},[t._v(t._s(t.goodsItem.cfav))])])])},a=[],r=(s("c975"),{name:"GoodsListItem",props:{goodsItem:{type:Object,default:function(){return{}}}},computed:{showImage:function(){return this.goodsItem.image||this.goodsItem.show.img}},methods:{imageLoad:function(){this.$bus.$emit("itemImageLoad")},itemClick:function(){0===this.$route.path.indexOf("/home")&&this.$router.push("/detail/"+this.goodsItem.iid)}}}),c=r,l=(s("9e85"),s("2877")),u=Object(l["a"])(c,o,a,!1,null,"2086d8d9",null),f=u.exports,d={name:"GoodsList",props:{goods:{type:Array,default:function(){return[]}}},components:{GoodsListItem:f}},h=d,m=(s("e9d6"),Object(l["a"])(h,n,i,!1,null,"cf5b2186",null));e["a"]=m.exports},"770a":function(t,e,s){},"7a74":function(t,e,s){t.exports=s.p+"img/back.26df9036.svg"},"7f2e":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"detail"}},[s("detail-nav-bar",{ref:"nav",staticClass:"detail-nav",on:{titleClick:t.titleClick}}),s("scroll",{ref:"scroll",staticClass:"content",attrs:{probeType:3},on:{scroll:t.contentScroll}},[s("detail-swiper",{attrs:{"top-images":t.topImages}}),s("detail-goods-info",{attrs:{goods:t.goods}}),s("detail-shop-info",{attrs:{shop:t.shop}}),s("detail-info",{attrs:{detailInfo:t.detailInfo},on:{imageLoad:t.imageLoad}}),s("detail-param-info",{ref:"params",attrs:{paramInfo:t.paramInfo}}),s("comment-info",{ref:"comments",attrs:{"comment-info":t.commentInfo}}),s("goods-list",{ref:"recommends",attrs:{goods:t.recommends}})],1),s("detail-bottom-bar",{on:{addToCart:t.addToCart,buy:t.buy}}),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isBackTopShow,expression:"isBackTopShow"}],nativeOn:{click:function(e){return t.backClick(e)}}})],1)},i=[],o=(s("a4d3"),s("4de4"),s("e439"),s("dbb4"),s("b64b"),s("e25e"),s("159b"),s("ade3")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",{scopedSlots:t._u([{key:"left",fn:function(){return[n("img",{staticClass:"back",attrs:{src:s("7a74")},on:{click:t.backClick}})]},proxy:!0},{key:"center",fn:function(){return[n("div",{staticClass:"title"},t._l(t.titles,(function(e,s){return n("div",{key:s,staticClass:"title-item",class:{active:s===t.currentIndex},on:{click:function(e){return t.titleClick(s)}}},[t._v(t._s(e))])})),0)]},proxy:!0}])})],1)},r=[],c=s("a7ac"),l={name:"DetailNavBar",components:{NavBar:c["a"]},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{titleClick:function(t){this.currentIndex=t,this.$emit("titleClick",t)},backClick:function(){this.$router.go(-1)}}},u=l,f=(s("b405"),s("2877")),d=Object(f["a"])(u,a,r,!1,null,"22878202",null),h=d.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("swiper",{staticClass:"swiper-image",scopedSlots:t._u([{key:"default",fn:function(){return t._l(t.topImages,(function(e,n){return s("swiper-item",{key:n,scopedSlots:t._u([{key:"default",fn:function(){return[s("a",{attrs:{href:e}},[s("img",{attrs:{src:e}})])]},proxy:!0}],null,!0)})}))},proxy:!0}])})],1)},p=[],v=s("dc2c"),g={name:"DetailSwiper",props:{topImages:{type:Array,default:function(){return[]}}},components:{Swiper:v["a"],SwiperItem:v["b"]}},b=g,_=(s("0803"),Object(f["a"])(b,m,p,!1,null,"1e8350c2",null)),C=_.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.goods).length?s("div",[s("div",{staticClass:"goods-title"},[t._v(t._s(t.goods.title))]),s("div",{staticClass:"goods-price"},[s("span",{staticClass:"new-price"},[t._v(t._s(t.goods.newPrice))]),s("strike",{staticClass:"old-price"},[t._v(t._s(t.goods.oldPrice))]),t.goods.discount?s("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))]):t._e()],1),s("div",{staticClass:"goods-columns"},[t._l(t.goods.columns,(function(e,n){return s("span",{key:n},[t._v(t._s(e))])})),s("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])],2),s("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return s("div",{key:e},[s("img",{attrs:{src:t.goods.services[e-1].icon}}),s("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},y=[],w={name:"DetailGoodsInfo",props:{goods:{type:Object,default:function(){return{}}}}},x=w,k=(s("80e3"),Object(f["a"])(x,I,y,!1,null,"508ac9c8",null)),O=k.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.shop).length?s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-head"},[s("img",{attrs:{src:t.shop.logo}}),s("a",{attrs:{href:t.shop.shopUrl}},[t._v(t._s(t.shop.name))])]),s("div",{staticClass:"shop-overview"},[s("div",{staticClass:"overview-line"}),s("div",{staticClass:"shop-sells"},[s("div",{staticClass:"shop-num"},[t._v(t._s(t._f("sellsCountFilter")(t.shop.sells)))]),s("span",[t._v("总销量")])]),s("div",{staticClass:"shop-goods"},[s("div",{staticClass:"shop-num"},[t._v(t._s(t.shop.goodsCount))]),s("span",[t._v("全部宝贝")])]),s("div",{staticClass:"shop-des"},t._l(t.shop.score,(function(e,n){return s("div",{key:n,staticClass:"project-des"},[s("span",[t._v(t._s(e.name))]),s("span",{staticClass:"low",class:{high:e.isBetter}},[t._v(t._s(e.score))]),e.isBetter?s("span",{staticClass:"lowBg",class:{highBg:e.isBetter}},[t._v("高")]):s("span",{staticClass:"lowBg",class:{highBg:e.isBetter}},[t._v("低")])])})),0)]),s("a",{attrs:{href:t.shop.shopUrl}},[s("div",{staticClass:"go-shop"},[t._v("进店逛逛")])])]):t._e()},j=[],$=(s("b680"),{name:"DetailShopInfo",props:{shop:{type:Object,default:function(){return{}}}},filters:{sellsCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}}),S=$,D=(s("4f20"),Object(f["a"])(S,T,j,!1,null,"0d66bb62",null)),E=D.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detailInfo).length?s("div",{staticClass:"detail-info"},[s("div",{staticClass:"info-desc",attrs:{"clear-fix":""}},[s("div",{staticClass:"start"}),s("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),s("div",{staticClass:"end"})]),s("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),s("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,(function(e,n){return s("img",{key:n,attrs:{src:e},on:{load:t.imgLoad}})})),0)]):t._e()},B=[],N={name:"DetailInfo",props:{detailInfo:{type:Object,default:function(){return{}}}},methods:{imgLoad:function(){this.$emit("imageLoad")}}},L=N,Y=(s("3243"),Object(f["a"])(L,P,B,!1,null,"40a41bcb",null)),W=Y.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?s("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(e,n){return s("table",{key:n,staticClass:"info-size"},t._l(e,(function(e,n){return s("tr",{key:n},t._l(e,(function(e,n){return s("td",{key:n},[t._v(t._s(e))])})),0)})),0)})),s("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(e,n){return s("tr",{key:n},[s("td",{staticClass:"info-param-key"},[t._v(t._s(e.key))]),s("td",{staticClass:"param-value"},[t._v(t._s(e.value))])])})),0),0!==t.paramInfo.image.length?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},G=[],X={name:"DetailParamInfo",props:{paramInfo:{type:Object,default:function(){return{}}}}},M=X,R=(s("e973"),Object(f["a"])(M,F,G,!1,null,"b79b50e8",null)),z=R.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-bar"},[t._m(0),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"cart",on:{click:t.addToCart}},[t._v("加入购物车")]),s("div",{staticClass:"buy",on:{click:t.buy}},[t._v("购买")])])])},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bar-item bar-left"},[s("div",[s("i",{staticClass:"icon service"}),s("span",{staticClass:"text"},[t._v("客服")])]),s("div",[s("i",{staticClass:"icon shop"}),s("span",{staticClass:"text"},[t._v("店铺")])]),s("div",[s("i",{staticClass:"icon select"}),s("span",{staticClass:"text"},[t._v("收藏")])])])}],J={name:"DetailBottomBar",methods:{addToCart:function(){this.$emit("addToCart")},buy:function(){this.$emit("buy")}}},q=J,H=(s("9f1f"),Object(f["a"])(q,U,A,!1,null,"45741ac6",null)),K=H.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info"},[t._m(0),s("div",{staticClass:"info-user"},[s("img",{attrs:{src:t.commentInfo.user.avatar}}),s("span",[t._v(t._s(t.commentInfo.user.uname))])]),s("div",{staticClass:"info-detail"},[s("p",[t._v(t._s(t.commentInfo.content))]),s("div",{staticClass:"info-other"},[s("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),s("span",[t._v(t._s(t.commentInfo.style))])]),s("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return s("img",{key:e,attrs:{src:t}})})),0)])]):t._e()},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-header"},[s("div",{staticClass:"header-title"},[t._v("用户评价")]),s("div",{staticClass:"header-more"},[t._v("更多")])])}],Z=s("90b9"),tt={name:"DetailCommentInfo",props:{commentInfo:{type:Object,default:function(){return{}}}},filters:{showDate:function(t){var e=new Date(1e3*t);return Object(Z["b"])(e,"yyyy/MM/dd")}}},et=tt,st=(s("9c26"),Object(f["a"])(et,Q,V,!1,null,"32f451d5",null)),nt=st.exports,it=s("eecb4"),ot=s("6d71"),at=s("5d17"),rt=s("2f62");s("b0c0");function ct(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var lt=s("1bab");function ut(t){return Object(lt["a"])({url:"/detail",params:{iid:t}})}function ft(){return Object(lt["a"])({url:"./recommend"})}var dt=function t(e,s,n){ct(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.lowNowPrice=e.lowNowPrice,this.columns=s,this.services=n,this.realPrice=e.lowNowPrice,this.discount=e.discountDesc,this.discountBgColor=e.discountBgColor},ht=function t(e){ct(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods,this.shopUrl=e.shopUrl},mt=function t(e,s){ct(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables};function pt(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function vt(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?pt(Object(s),!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):pt(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var gt={name:"Detail",data:function(){return{iid:null,topImages:[],goods:{},shop:{},detailInfo:{},paramInfo:{},commentInfo:{},recommends:[],themeTopYs:[],getThemeTopYs:null,currentIndex:0}},components:{DetailNavBar:h,DetailSwiper:C,DetailGoodsInfo:O,DetailShopInfo:E,DetailInfo:W,DetailParamInfo:z,DetailBottomBar:K,Scroll:at["a"],CommentInfo:nt,GoodsList:ot["a"]},mixins:[it["b"],it["a"]],created:function(){var t=this;this.iid=this.$route.params.iid,ut(this.iid).then((function(e){var s=e.result;t.topImages=e.result.itemInfo.topImages,t.goods=new dt(s.itemInfo,s.columns,s.shopInfo.services),t.shop=new ht(s.shopInfo),t.detailInfo=s.detailInfo,t.paramInfo=new mt(s.itemParams.info,s.itemParams.rule),0!==s.rate.cRate&&(t.commentInfo=s.rate.list[0]),ft().then((function(e){t.recommends=e.data.list}))})),this.$nextTick((function(){}))},mounted:function(){var t=this;this.getThemeTopYs=Object(Z["a"])((function(){t.themeTopYs=[],t.themeTopYs.push(0),t.themeTopYs.push(t.$refs.params.$el.offsetTop),t.themeTopYs.push(t.$refs.comments.$el.offsetTop),t.themeTopYs.push(t.$refs.recommends.$el.offsetTop)}),300)},destroyed:function(){this.$bus.$off("itemImageLoad",this.itemImageListener)},methods:vt({},Object(rt["b"])(["addCart"]),{imageLoad:function(){this.$refs.scroll.refresh(),this.getThemeTopYs()},titleClick:function(t){this.$refs.scroll.scrollTo(0,-this.themeTopYs[t],300)},contentScroll:function(t){this.isBackTopShow=t.y<-1e3;var e=-t.y,s=this.themeTopYs.length-1;for(var n in this.themeTopYs)n=parseInt(n),e>=this.themeTopYs[n]&&e<this.themeTopYs[n+1]&&this.currentIndex!==n?(this.currentIndex=n,this.$refs.nav.currentIndex=n):e>=this.themeTopYs[s]&&this.currentIndex!==s&&(this.currentIndex=s,this.$refs.nav.currentIndex=s)},addToCart:function(){var t=this,e={};e.image=this.topImages[0],e.title=this.goods.title,e.desc=this.goods.desc,e.price=this.goods.lowNowPrice,e.iid=this.iid,this.addCart(e).then((function(e){t.$toast.show(e,2e3)}))},buy:function(){this.$toast.show("非常抱歉~暂不支持购买",2e3)}})},bt=gt,_t=(s("6568"),Object(f["a"])(bt,n,i,!1,null,"4fef161c",null));e["default"]=_t.exports},"80e3":function(t,e,s){"use strict";var n=s("2085"),i=s.n(n);i.a},"86b5":function(t,e,s){},"9c26":function(t,e,s){"use strict";var n=s("b6ce"),i=s.n(n);i.a},"9c3a":function(t,e,s){"use strict";var n=s("a4f4"),i=s.n(n);i.a},"9e85":function(t,e,s){"use strict";var n=s("2473"),i=s.n(n);i.a},"9f1f":function(t,e,s){"use strict";var n=s("f803"),i=s.n(n);i.a},a1df:function(t,e,s){},a4f4:function(t,e,s){},acc0:function(t,e,s){},b0c0:function(t,e,s){var n=s("83ab"),i=s("9bf2").f,o=Function.prototype,a=o.toString,r=/^\s*function ([^ (]*)/,c="name";!n||c in o||i(o,c,{configurable:!0,get:function(){try{return a.call(this).match(r)[1]}catch(t){return""}}})},b405:function(t,e,s){"use strict";var n=s("770a"),i=s.n(n);i.a},b64b:function(t,e,s){var n=s("23e7"),i=s("7b0b"),o=s("df75"),a=s("d039"),r=a((function(){o(1)}));n({target:"Object",stat:!0,forced:r},{keys:function(t){return o(i(t))}})},b680:function(t,e,s){"use strict";var n=s("23e7"),i=s("a691"),o=s("408a"),a=s("1148"),r=s("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,s){return 0===e?s:e%2===1?u(t,e-1,s*t):u(t*t,e/2,s)},f=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},d=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));n({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,s,n,r,c=o(this),d=i(t),h=[0,0,0,0,0,0],m="",p="0",v=function(t,e){var s=-1,n=e;while(++s<6)n+=t*h[s],h[s]=n%1e7,n=l(n/1e7)},g=function(t){var e=6,s=0;while(--e>=0)s+=h[e],h[e]=l(s/t),s=s%t*1e7},b=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==h[t]){var s=String(h[t]);e=""===e?s:e+a.call("0",7-s.length)+s}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(e=f(c*u(2,69,1))-69,s=e<0?c*u(2,-e,1):c/u(2,e,1),s*=4503599627370496,e=52-e,e>0){v(0,s),n=d;while(n>=7)v(1e7,0),n-=7;v(u(10,n,1),0),n=e-1;while(n>=23)g(1<<23),n-=23;g(1<<n),v(1,1),g(2),p=b()}else v(0,s),v(1<<-e,0),p=b()+a.call("0",d);return d>0?(r=p.length,p=m+(r<=d?"0."+a.call("0",d-r)+p:p.slice(0,r-d)+"."+p.slice(r-d))):p=m+p,p}})},b6ce:function(t,e,s){},cf92:function(t,e,s){"use strict";var n=s("2538"),i=s.n(n);i.a},dbb4:function(t,e,s){var n=s("23e7"),i=s("83ab"),o=s("56ef"),a=s("fc6a"),r=s("06cf"),c=s("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,s,n=a(t),i=r.f,l=o(n),u={},f=0;while(l.length>f)s=i(n,e=l[f++]),void 0!==s&&c(u,e,s);return u}})},dc2c:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"hy-swiper"}},[s("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),s("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e,n){return s("div",{key:n,staticClass:"indi-item",class:{active:n===t.currentIndex-1}})}))):t._e()],2)],2)},i=[],o=(s("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),100)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var s=e[0].cloneNode(!0),n=e[this.slideCount-1].cloneNode(!0);t.insertBefore(n,e[0]),t.appendChild(s),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,s=this.distance+e;this.setTransform(s)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),a=o,r=(s("9c3a"),s("2877")),c=Object(r["a"])(a,n,i,!1,null,"37ad2772",null),l=c.exports,u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slide"},[t._t("default")],2)},f=[],d={name:"Slide"},h=d,m=(s("cf92"),Object(r["a"])(h,u,f,!1,null,"36a08ae0",null)),p=m.exports;s.d(e,"a",(function(){return l})),s.d(e,"b",(function(){return p}))},e25e:function(t,e,s){var n=s("23e7"),i=s("e583");n({global:!0,forced:parseInt!=i},{parseInt:i})},e439:function(t,e,s){var n=s("23e7"),i=s("d039"),o=s("fc6a"),a=s("06cf").f,r=s("83ab"),c=i((function(){a(1)})),l=!r||c;n({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e583:function(t,e,s){var n=s("da84"),i=s("58a8").trim,o=s("5899"),a=n.parseInt,r=/^[+-]?0[Xx]/,c=8!==a(o+"08")||22!==a(o+"0x16");t.exports=c?function(t,e){var s=i(String(t));return a(s,e>>>0||(r.test(s)?16:10))}:a},e784:function(t,e,s){},e973:function(t,e,s){"use strict";var n=s("0a55"),i=s.n(n);i.a},e9d6:function(t,e,s){"use strict";var n=s("e784"),i=s.n(n);i.a},f803:function(t,e,s){},faa7:function(t,e,s){}}]);
//# sourceMappingURL=chunk-48afa884.53965b27.js.map