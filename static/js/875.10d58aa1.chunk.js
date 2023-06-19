"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[875],{245:function(e,n,t){t.d(n,{Z:function(){return u}});var r,a=t(168),i=t(444).ZP.div(r||(r=(0,a.Z)(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #000000aa;\n  color: white;\n"]))),s=t(184),u=function(){return(0,s.jsx)(i,{children:(0,s.jsx)("span",{children:"...LOADING"})})}},875:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(861),a=t(439),i=t(757),s=t.n(i),u=t(245),c=t(184),o=function(e){var n=e.movieDetails,t=n.poster,r=n.year,a=n.genresList,i=n.vote,s=n.title,u=n.overview;return(0,c.jsxs)("div",{style:{display:"flex",gap:20},children:[(0,c.jsx)("img",{src:t,alt:s}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("h2",{children:[s," (",r,")"]}),(0,c.jsxs)("p",{children:["User Score: ",i,"%"]}),(0,c.jsx)("p",{children:"Overview"}),(0,c.jsx)("p",{children:u}),(0,c.jsx)("p",{children:"Genres:"}),(0,c.jsx)("p",{children:a})]})]})},p=t(791),f=t(689),l=t(87),v=t(390),d=function(){var e,n,t=(0,f.UO)().movieId,i=(0,f.TH)(),d=(0,p.useRef)(null!==(e=null===(n=i.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),h=(0,p.useState)(null),x=(0,a.Z)(h,2),m=x[0],g=x[1],w=(0,p.useState)(!1),j=(0,a.Z)(w,2),k=j[0],y=j[1];return(0,p.useEffect)((function(){if(t){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n,r,a,i,u,c,o,p,f,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,(0,v.Y5)(t);case 4:n=e.sent,r=n.title,a=n.overview,i=n.release_date,u=n.vote_average,c=n.genres,o=(0,v.Qk)(n.poster_path),p=new Date(i).getFullYear(),f=c.map((function(e){return e.name})).join(", ")||"No info",l=Math.round(10*u),g({poster:o,year:p,genresList:f,vote:l,title:r,overview:a}),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.prev=15,y(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,13,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("section",{children:(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:"Movie Details"}),k&&(0,c.jsx)(u.Z,{}),(0,c.jsx)(l.rU,{to:d.current,children:"GO BACK"}),m&&(0,c.jsx)(o,{movieDetails:m}),(0,c.jsxs)("nav",{children:[(0,c.jsx)(l.OL,{to:"cast",children:"Cast"}),(0,c.jsx)(l.OL,{to:"reviews",children:"Reviews"})]}),(0,c.jsx)(p.Suspense,{fallback:null,children:(0,c.jsx)(f.j3,{})})]})})})}},390:function(e,n,t){t.d(n,{Bt:function(){return l},Pv:function(){return o},Qk:function(){return v},Tg:function(){return c},Y5:function(){return p},wL:function(){return f}});var r=t(861),a=t(757),i=t.n(a),s=t(243),u="09d7a3eefc954f8342048cf5b31d1e79";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:u,language:"en-US"},e.next=3,s.Z.get("/trending/movie/day",{params:n});case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:u,language:"en-US",include_adult:!1,query:n},e.next=3,s.Z.get("search/movie",{params:t});case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:u,language:"en-US"},e.next=3,s.Z.get("movie/".concat(n),{params:t});case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:u,language:"en-US"},e.next=3,s.Z.get("movie/".concat(n,"/credits"),{params:t});case 3:return r=e.sent,e.abrupt("return",r.data.cast.map((function(e){return{id:e.id,name:e.name,poster:v(e.profile_path)}})).slice(0,10));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:u,language:"en-US"},e.next=3,s.Z.get("movie/".concat(n,"/reviews"),{params:t});case 3:return r=e.sent,e.abrupt("return",r.data.results.map((function(e){return{id:e.id,name:e.author,content:e.content}})).slice(0,10));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(e){return e?"https://image.tmdb.org/t/p/w500"+e:"https://fakeimg.pl/400x600/6693ba/ffffff?text=No+Poster&font=lobster"}}}]);
//# sourceMappingURL=875.10d58aa1.chunk.js.map