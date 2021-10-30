(this["webpackJsonpcryptocurrency-portfolio"]=this["webpackJsonpcryptocurrency-portfolio"]||[]).push([[0],{102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(22),a=(c(69),c(70),c(71),c(6)),i=(c(72),c(10)),o=c(7),u=c(112),j=(c(80),c(114)),l=c(116),d=c(117),b=c(1),O=function(e){var t=Object(n.useState)(""),c=Object(a.a)(t,2),r=c[0],s=c[1];return Object(b.jsxs)(j.a,{show:!0,children:[Object(b.jsxs)(j.a.Header,{children:[Object(b.jsx)(j.a.Title,{children:"Add to portfolio"}),Object(b.jsx)(u.a,{onClick:function(){return e.showModal(!1)},variant:"primary",children:"close"})]}),Object(b.jsxs)(j.a.Body,{children:[Object(b.jsxs)("div",{children:["Do you want to add ",Object(b.jsx)("strong",{children:e.assets.name})," to your portfolio"]}),Object(b.jsx)("div",{children:Object(b.jsx)(l.a,{className:"mb-3",children:Object(b.jsx)(d.a,{type:"number",value:r,onChange:function(e){Number(e.currentTarget.value)>-1&&s(e.currentTarget.value)}})})})]}),Object(b.jsx)(j.a.Footer,{children:Object(b.jsx)(u.a,{onClick:function(){return r&&e.addAssetsHandler(Number(r))},variant:"primary",children:"Add"})})]})},p=c(26),f=c(2),h={portfolio:[],percent:0,currentAssetSessions:0},x=r.a.memo((function(e){var t=e.item,c=Object(n.useState)(!1),r=Object(a.a)(c,2),s=r[0],j=r[1],l=Object(i.b)(),d=Object(o.g)();return Object(b.jsxs)("div",{className:"main__body",children:[s&&Object(b.jsx)(O,{assets:t,addAssetsHandler:function(e){var c={assetId:t.id,count:e,price:Number(t.priceUsd)*e};l({type:"PORTFOLIO/ADD-ASSET",asset:c}),j(!s)},showModal:j}),Object(b.jsxs)("div",{className:"main__body__block",children:[Object(b.jsx)("p",{children:t.rank}),Object(b.jsx)("p",{children:t.name}),Object(b.jsxs)("p",{children:["$",(+t.priceUsd).toFixed(2)]}),Object(b.jsx)(u.a,{className:"block_btn",onClick:function(){return e=t.id,d.push("/currency-info/".concat(e));var e},variant:"outline-primary",children:"More info"}),Object(b.jsx)(u.a,{className:"block_btn",onClick:function(){j(!0)},variant:"outline-primary",children:"Buy currency"})]})]})})),m=c(62),v=c.n(m).a.create({baseURL:"https://api.coincap.io/v2/"}),S=function(){return v.get("assets")},y=function(e){return v.get("assets/".concat(e,"/history"),{params:{interval:"d1"}})},T=function(){return v.get("https://api.coincap.io/v2/assets?limit=3")},A={status:"loading",error:null},g=function(e){return{type:"APP/SET-APP-STATUS",status:e}},N={dataAssets:[],timestamp:null,chartData:[],topAssets:[]},P=c(113),C=(c(102),function(){return Object(b.jsx)("div",{className:"preloader",children:Object(b.jsx)(P.a,{animation:"border",variant:"primary"})})}),_=(c(103),function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),c=[],n=1;n<=t;n++)c.push(n);return Object(b.jsx)("div",{className:"paginator",children:c.map((function(t){return Object(b.jsx)("span",{className:e.currentPage===t?"paginator__selected":"paginator__unselected",onClick:function(){return e.onPageChange(t)},children:t},t)}))})}),E=c(115),R=(c(104),function(e){var t=Object(n.useState)(!0),c=Object(a.a)(t,2),r=c[0],s=c[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(E.a,{className:"alert",show:r,variant:"primary",children:[Object(b.jsx)(E.a.Heading,{children:"Server error, please repeat later"}),Object(b.jsx)(u.a,{onClick:function(){s(!1)},variant:"outline-primary",children:"Close Alert!"})]})})}),k=function(){var e=Object(i.b)();Object(n.useEffect)((function(){e((function(e){e(g("loading")),S().then((function(t){var c=t.data,n=c.data,r=c.timestamp;e(function(e,t){return{type:"CRYPT/SET-CURRENT-ASSETS",data:e,timestamp:t}}(n,r)),e(g("succeeded"))})).catch((function(t){e(g("failed"))}))}))}),[e]);var t=Object(i.c)((function(e){return e.cryptocurrencyList.dataAssets})),c=Object(n.useState)(1),r=Object(a.a)(c,2),s=r[0],o=r[1],u=Object(i.c)((function(e){return e.app.status})),j=t.length,l=10*s,d=l-10,O=t.slice(d,l);return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)(_,{onPageChange:function(e){o(e)},totalCount:j,pageSize:10,currentPage:s}),"failed"===u&&Object(b.jsx)(R,{}),Object(b.jsxs)("div",{className:"main__header",children:[Object(b.jsx)("p",{className:"main__header-text",children:"Rank"}),Object(b.jsx)("p",{className:"main__header-text",children:"Rank"}),Object(b.jsx)("p",{className:"main__header-text",children:"Price"})]}),"loading"===u?Object(b.jsx)(C,{}):O.map((function(e){return Object(b.jsx)(x,{item:e},e.id)}))]})},F=(c(105),function(){var e=Object(i.c)((function(e){return e.cryptocurrencyList.topAssets})),t=Object(i.c)((function(e){return e.portfolio})),c=t.portfolio,r=t.percent,a=t.currentAssetSessions,o=Object(i.b)();Object(n.useEffect)((function(){o((function(e){e(g("loading")),T().then((function(t){var c=t.data.data;e(function(e){return{type:"CRYPT/SET-TOP-DATA-ASSETS",data:e}}(c)),e(g("succeeded"))})).catch((function(t){e(g("failed"))}))}))}),[o]);var u=c&&c.reduce((function(e,t){return e+Number(t.price)}),0).toFixed(2);return Object(b.jsxs)("div",{className:"header",children:[e.map((function(e){return Object(b.jsxs)("div",{className:"header__assets",children:[Object(b.jsx)("p",{className:"header__assets-text",children:e.name}),Object(b.jsxs)("p",{className:"header__assets-text",children:["$",(+e.priceUsd).toFixed(2)]})]},e.id)})),Object(b.jsxs)("div",{className:"header__totalCounts",children:[Object(b.jsxs)("p",{className:"header__totalCounts-text",children:["Wallet:",u,"USD"]}),Object(b.jsxs)("p",{className:"header__totalCounts-text",children:["Session:",a.toFixed(2),"USD"]}),Object(b.jsxs)("p",{className:"header__totalCounts-text",children:[r!==1/0&&r.toFixed(2),"% "]})]}),Object(b.jsx)(s.b,{className:"header__link",to:"/portfolio",children:" My Portfolio"})]})}),I=(c(106),c(107),function(e){var t=e.asset,c=e.currentAssets,r=Object(n.useState)(""),s=Object(a.a)(r,2),o=s[0],j=s[1],O=Object(n.useState)(!1),p=Object(a.a)(O,2),f=p[0],h=p[1],x=Object(i.c)((function(e){return e.cryptocurrencyList.dataAssets})),m=Object(i.b)();return Object(b.jsxs)("div",{className:"wallet",children:[Object(b.jsxs)(u.a,{onClick:function(){return h(!f)},variant:"primary",children:["Change ",t.assetId]}),f?Object(b.jsxs)(l.a,{className:"mb-3",children:[Object(b.jsx)(l.a.Text,{children:t.assetId}),Object(b.jsx)(l.a.Text,{children:t.count}),Object(b.jsx)(d.a,{type:"number",value:o,onChange:function(e){+e.currentTarget.value>-1&&j(e.currentTarget.value)}}),Object(b.jsx)(u.a,{variant:"primary",onClick:function(){return function(e){var n=c.find((function(t){return t.assetId===e})),r=x.find((function(t){if(t.id===e)return t.priceUsd}));if(n&&r){var s={assetId:e,count:Number(o),price:Number(r.priceUsd)*Number(o)};if(t.count<s.count)return;m(function(e){return{type:"PORTFOLIO/UPDATE-PERCENT",asset:e}}(s)),m(function(e){return{type:"PORTFOLIO/REMOVE-ASSET",asset:e}}(s))}h(!1)}(t.assetId)},children:"delete"})]}):Object(b.jsxs)("div",{className:"wallet__block",children:[Object(b.jsx)("span",{children:t.assetId}),Object(b.jsxs)("span",{children:["$",t.price.toFixed(1)]}),Object(b.jsx)("span",{children:t.count})]})]})}),U=function(){var e=Object(i.c)((function(e){return e.portfolio.portfolio})),t=Object(o.g)();return Object(b.jsxs)(j.a,{show:!0,children:[Object(b.jsxs)(j.a.Header,{children:[Object(b.jsx)(j.a.Title,{children:"My Portfolio"}),Object(b.jsx)("button",{onClick:function(){return t.goBack()},type:"button",className:"btn btn-outline-primary",children:"Go back"})]}),Object(b.jsx)(j.a.Body,{children:e.filter((function(e){return 0!==e.count})).map((function(t){return Object(b.jsx)(I,{currentAssets:e,asset:t},t.assetId)}))}),Object(b.jsx)(j.a.Footer,{})]})},w=(c(108),c(64)),D=c(65),L=c.n(D),H=(c(109),function(e){var t=e.data,c={series:[{type:"area",data:t&&t.map((function(e){return+e.priceUsd}))}]};return Object(b.jsx)(L.a,{highcharts:w,options:c})}),M=function(){var e=Object(o.h)().id,t=Object(i.c)((function(e){return e.cryptocurrencyList})),c=Object(i.b)(),r=Object(o.g)();return Object(n.useEffect)((function(){c(function(e){return function(t){t(g("loading")),y(e).then((function(e){var c=e.data.data;t(function(e){return{type:"CRYPT/SET-DATA-CHART",data:e}}(c)),t(g("succeeded"))})).catch((function(e){t(g("failed"))}))}}(e))}),[c,e]),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){r.goBack()},type:"button",className:"btn btn-outline-primary",children:"Go back"}),Object(b.jsxs)("table",{className:"table table-hover table-sm",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"table-primary",children:[Object(b.jsx)("th",{scope:"col",children:"Rank"}),Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Price"}),Object(b.jsx)("th",{scope:"col",children:"Market Cap"}),Object(b.jsx)("th",{scope:"col",children:"VWAP(24Hr)"}),Object(b.jsx)("th",{scope:"col",children:"Supply"}),Object(b.jsx)("th",{scope:"col",children:"Volume(24Hr)"}),Object(b.jsx)("th",{scope:"col",children:"Change(24Hr)"})]})}),Object(b.jsx)("tbody",{children:t.dataAssets.filter((function(t){return t.id===e})).map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{scope:"row",children:e.rank}),Object(b.jsx)("td",{children:e.name}),Object(b.jsxs)("td",{children:["$",(+e.priceUsd).toFixed(5)]}),Object(b.jsxs)("td",{children:["$",(+e.marketCapUsd).toFixed(5)]}),Object(b.jsxs)("td",{children:["$",(+e.vwap24Hr).toFixed(2)]}),Object(b.jsxs)("td",{children:[(+e.supply).toFixed(5),"B"]}),Object(b.jsxs)("td",{children:[(+e.volumeUsd24Hr).toFixed(5),"B"]}),Object(b.jsxs)("td",{children:[(+e.changePercent24Hr).toFixed(2),"%"]})]},e.id)}))})]}),Object(b.jsx)(H,{data:t.chartData})]})},B=function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(F,{}),Object(b.jsx)(o.b,{children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(o.a,{to:"/table"})}}),Object(b.jsx)(o.b,{path:"/portfolio",render:function(){return Object(b.jsx)(U,{})}}),Object(b.jsx)(o.b,{path:"/table",render:function(){return Object(b.jsx)(k,{})}}),Object(b.jsx)(o.b,{path:"/currency-info/:id",render:function(){return Object(b.jsx)(M,{})}})]})})]})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,118)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))},$=c(17),J=c.n($),V=c(45),z=c(66),G=Object(V.b)({cryptocurrencyList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CRYPT/SET-CURRENT-ASSETS":return Object(f.a)(Object(f.a)({},e),{},{dataAssets:t.data,timestamp:t.timestamp});case"CRYPT/SET-DATA-CHART":return Object(f.a)(Object(f.a)({},e),{},{chartData:t.data});case"CRYPT/SET-TOP-DATA-ASSETS":return Object(f.a)(Object(f.a)({},e),{},{topAssets:t.data});default:return e}},portfolio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PORTFOLIO/SET-ASSETS":return Object(f.a)(Object(f.a)({},e),{},{portfolio:[].concat(Object(p.a)(e.portfolio),Object(p.a)(t.assets))});case"PORTFOLIO/ADD-ASSET":var c=e.portfolio.reduce((function(e,t){return e+t.price}),0),n=e.portfolio.find((function(e){return e.assetId===t.asset.assetId}));return n?(e.portfolio.forEach((function(e){e.assetId===t.asset.assetId&&(e.count=e.count+t.asset.count,e.price=e.price+t.asset.price)})),Object(f.a)(Object(f.a)({},e),{},{currentAssetSessions:e.currentAssetSessions+c,percent:100*t.asset.price/c,portfolio:Object(p.a)(e.portfolio)})):Object(f.a)(Object(f.a)({},e),{},{currentAssetSessions:e.currentAssetSessions+t.asset.price,percent:100*t.asset.price/t.asset.price,portfolio:[].concat(Object(p.a)(e.portfolio),[t.asset])});case"PORTFOLIO/UPDATE-PERCENT":var r=e.portfolio.reduce((function(e,t){return e+t.price}),0);return Object(f.a)(Object(f.a)({},e),{},{currentAssetSessions:e.currentAssetSessions-t.asset.price,percent:100*t.asset.price/r});case"PORTFOLIO/REMOVE-ASSET":return Object(f.a)(Object(f.a)({},e),{},{portfolio:e.portfolio.map((function(e){return e.assetId===t.asset.assetId?Object(f.a)(Object(f.a)({},e),{},{count:e.count-t.asset.count,price:e.price-t.asset.price}):e}))});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-APP-STATUS":return Object(f.a)(Object(f.a)({},e),{},{status:t.status});case"APP/SET-APP-ERROR":return Object(f.a)(Object(f.a)({},e),{},{error:t.error});default:return e}}}),W=Object(V.c)(G,function(){try{var e=localStorage.getItem("portfolioAssets");if(null===e)return;return function(e){var t=JSON.parse(e),c=t.portfolio.portfolio.filter((function(e){return 0!==e.count}));return Object(f.a)(Object(f.a)({},t),{},{portfolio:Object(f.a)(Object(f.a)({},t.portfolio),{},{portfolio:c})})}(e)}catch(t){return}}(),Object(V.a)(z.a));W.subscribe((function(){!function(e){try{var t=Object(f.a)(Object(f.a)({},e),{},{portfolio:Object(f.a)(Object(f.a)({},e.portfolio),{},{percent:0,currentAssetSessions:0})}),c=JSON.stringify(t);localStorage.setItem("portfolioAssets",c)}catch(n){return console.log(n)}}(Object(f.a)(Object(f.a)({},W.getState()),{},{portfolio:W.getState().portfolio}))})),window.store=W,J.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(s.a,{children:Object(b.jsx)(i.a,{store:W,children:Object(b.jsx)(B,{})})})}),document.getElementById("root")),Y()},69:function(e,t,c){},70:function(e,t,c){},72:function(e,t,c){},80:function(e,t,c){}},[[110,1,2]]]);
//# sourceMappingURL=main.68307d4c.chunk.js.map