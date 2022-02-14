(this["webpackJsonp12-react-redux"]=this["webpackJsonp12-react-redux"]||[]).push([[0],{30:function(e,t,i){},31:function(e,t,i){},35:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),r=i(17),c=i.n(r),s=(i(30),i(31),i(10)),a=i(11),l=i(12),j=i(14),v=i(19),b=i(8);function d(e){return function(t){return fetch("http://www.omdbapi.com/?s=".concat(e,"&apikey=e7549ca3")).then((function(e){return e.json()})).then((function(e){t({type:"GET_MOVIES",payload:e})}))}}function u(e){return function(t){return fetch("http://www.omdbapi.com/?i=".concat(e,"&apikey=e7549ca3")).then((function(e){return e.json()})).then((function(e){t({type:"GET_MOVIE_DETAIL",payload:e})}))}}function h(e){return{type:"ADD_MOVIE_FAVORITE",payload:e}}function O(e){return{type:"REMOVE_MOVIE_FAVORITE",payload:e}}var m={moviesFavourites:[],moviesLoaded:[],movieDetail:{}};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;return"ADD_MOVIE_FAVORITE"===t.type?Object(b.a)(Object(b.a)({},e),{},{moviesFavourites:e.moviesFavourites.concat(t.payload)}):"GET_MOVIES"===t.type?Object(b.a)(Object(b.a)({},e),{},{moviesLoaded:t.payload.Search}):"GET_MOVIE_DETAIL"===t.type?Object(b.a)(Object(b.a)({},e),{},{movieDetail:t.payload}):"REMOVE_MOVIE_FAVORITE"===t.type?Object(b.a)(Object(b.a)({},e),{},{moviesFavourites:e.moviesFavourites.filter((function(e){return e.imdbID!==t.payload}))}):e},f=i(23),x="undefined"!==typeof window&&window.__REDUX_DEVSTOOLS_EXTENSION_COMPOSE__||v.b,y=Object(v.c)(p,x(Object(v.a)(f.a))),M=i(13),g=i(9),D=(i(35),i(1)),F=function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(s.a)(this,i),n=t.call(this,e),console.log("Ya!!!!",n.props.favorites),n}return Object(a.a)(i,[{key:"removeMovieFavorite",value:function(e){this.props.removeMovieFavorite(e)}},{key:"render",value:function(){var e=this;return Object(D.jsx)("section",{id:"search-box",children:Object(D.jsxs)("div",{id:"results",children:[Object(D.jsx)("h4",{children:"My Favorites"}),this.props.favorites.map((function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(D.jsxs)("div",{className:i%2===0?"result result-acent":"result",children:[Object(D.jsx)(g.b,{to:"/movie/".concat(t.imdbID),children:Object(D.jsx)("a",{children:t.Title})}),e.props.favorites.some((function(e){return e.imdbID===t.imdbID}))?Object(D.jsx)("button",{id:"btn-favorite",onClick:function(){return e.removeMovieFavorite(e.props.movie.imdbID)},children:Object(D.jsx)("i",{class:"bi bi-heart-fill"})}):Object(D.jsx)("button",{id:"btn-favorite",onClick:function(){return e.removeMovieFavorite(e.props.movie.imdbID)},children:Object(D.jsx)("i",{class:"bi bi-heart"})}),Object(D.jsx)("p",{children:t.Plot})]})}))]})})}}]),i}(n.Component);var E=Object(M.b)((function(e){return{movies:e.moviesLoaded,movie:e.movieDetail,favorites:e.moviesFavourites}}),(function(e){return{addMovieFavorite:function(t){return e(h(t))},getMovies:function(t){return e(d(t))},getMovieDetail:function(t){return e(u(t))},removeMovieFavorite:function(t){return e(O(t))}}}))(F),I=(i(43),i(44),function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).props.getMovieDetail(n.props.match.params.id),n}return Object(a.a)(i,[{key:"addFavorite",value:function(e){this.props.addMovieFavorite(e)}},{key:"removeMovieFavorite",value:function(e){this.props.removeMovieFavorite(e)}},{key:"render",value:function(){var e=this;return Object(D.jsxs)("section",{id:"movie-box",children:[Object(D.jsx)("aside",{id:"img-movie-box",children:Object(D.jsx)("img",{src:this.props.movie.Poster,alt:"",id:"img-movie"})}),Object(D.jsxs)("aside",{id:"box-movie-description",children:[Object(D.jsx)("div",{class:"box-title-movie",children:Object(D.jsxs)("h1",{children:[this.props.movie.Title,this.props.favorites.some((function(t){return t.imdbID===e.props.movie.imdbID}))?Object(D.jsx)("button",{id:"btn-favorite",onClick:function(){return e.removeMovieFavorite(e.props.movie.imdbID)},children:Object(D.jsx)("i",{class:"bi bi-heart-fill"})}):Object(D.jsx)("button",{id:"btn-favorite",onClick:function(){return e.addFavorite(e.props.movie)},children:Object(D.jsx)("i",{class:"bi bi-heart"})})]})}),Object(D.jsx)("p",{children:this.props.movie.Plot}),Object(D.jsx)("br",{}),Object(D.jsxs)("div",{id:"awards-box",children:[Object(D.jsx)("h4",{children:"Awards"}),Object(D.jsxs)("p",{children:[Object(D.jsx)("i",{class:"bi bi-award"})," ",this.props.movie.Awards]})]}),Object(D.jsx)("br",{}),Object(D.jsxs)("div",{class:"movie-table",children:[Object(D.jsx)("span",{class:"movie-table-title",children:"Year:"}),Object(D.jsx)("span",{children:this.props.movie.Year})]}),Object(D.jsxs)("div",{class:"movie-table",children:[Object(D.jsx)("span",{class:"movie-table-title",children:"Genre:"}),Object(D.jsx)("span",{children:this.props.movie.Genre})]}),Object(D.jsxs)("div",{class:"movie-table",children:[Object(D.jsx)("span",{class:"movie-table-title",children:"Director:"}),Object(D.jsx)("span",{children:this.props.movie.Director})]}),Object(D.jsxs)("div",{class:"movie-table",children:[Object(D.jsx)("span",{class:"movie-table-title",children:"Actors:"}),Object(D.jsx)("span",{children:this.props.movie.Actors})]}),Object(D.jsxs)("div",{class:"movie-table",children:[Object(D.jsx)("span",{class:"movie-table-title",children:"Writer:"}),Object(D.jsx)("span",{children:this.props.movie.Writer})]}),Object(D.jsxs)("div",{class:"movie-table",children:[Object(D.jsx)("span",{class:"movie-table-title",children:"Languages:"}),Object(D.jsx)("span",{children:"English"})]}),Object(D.jsxs)("button",{id:"btn-share-movie",children:["Share this movie ",Object(D.jsx)("i",{class:"bi bi-share-fill"})]})]})]})}}]),i}(o.a.Component));var k=Object(M.b)((function(e){return{movies:e.moviesLoaded,movie:e.movieDetail,favorites:e.moviesFavourites}}),(function(e){return{addMovieFavorite:function(t){return e(h(t))},getMovies:function(t){return e(d(t))},getMovieDetail:function(t){return e(u(t))},removeMovieFavorite:function(t){return e(O(t))}}}))(I),w=function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={title:""},n}return Object(a.a)(i,[{key:"handleChange",value:function(e){this.setState({title:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.getMovies(this.state.title),this.setState({title:""})}},{key:"render",value:function(){var e=this,t=this.state.title;return Object(D.jsx)("div",{children:Object(D.jsxs)("section",{id:"search-box",children:[Object(D.jsxs)("form",{action:"#",id:"form-search",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(D.jsx)("input",{type:"text",placeholder:"Search a movie",id:"input-search",autoComplete:"off",value:t,onChange:function(t){return e.handleChange(t)}}),Object(D.jsx)("input",{type:"button",value:"Search",id:"btn-search"})]}),Object(D.jsxs)("div",{id:"results",children:[Object(D.jsx)("h4",{children:"Result of your search"}),this.props.movies.map((function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(D.jsx)("div",{className:i%2===0?"result result-acent":"result",children:Object(D.jsxs)(g.b,{to:"/movie/".concat(t.imdbID),children:[Object(D.jsxs)("a",{href:"movie.html",children:[t.Title,e.props.favorites.some((function(e){return e.imdbID===t.imdbID}))?Object(D.jsx)("i",{className:"bi bi-heart-fill"}):Object(D.jsx)("i",{className:"bi bi-heart"})]}),Object(D.jsxs)("p",{children:[t.Year," | ",t.Type]})]})})}))]})]})})}}]),i}(n.Component);var _=Object(M.b)((function(e){return{movies:e.moviesLoaded,favorites:e.moviesFavourites}}),(function(e){return{addMovieFavorite:function(t){return e(h(t))},getMovies:function(t){return e(d(t))}}}))(w),C=i.p+"static/media/logo.b8e9d89f.svg";i(45);function T(){return Object(D.jsxs)("header",{children:[Object(D.jsx)(g.b,{to:"/",children:Object(D.jsx)("img",{src:C,alt:"",id:"logo"})}),Object(D.jsxs)("ul",{id:"link-box",children:[Object(D.jsx)("li",{children:Object(D.jsx)(g.c,{exact:!0,to:"/",activeClassName:"linkActive",children:"Home"})}),Object(D.jsx)("li",{children:Object(D.jsx)(g.c,{to:"/favs",activeClassName:"linkActive",children:"Favorites"})})]})]})}var S=i(3),V=(i(46),function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return Object(D.jsxs)("footer",{children:[Object(D.jsx)("h6",{children:"Cristian Nazareno Gonzalez"}),Object(D.jsx)("h6",{children:"Homework 12 del Modulo 2 de Henry"})]})}}]),i}(n.Component));var A=function(){return Object(D.jsxs)(o.a.Fragment,{children:[Object(D.jsx)(T,{}),Object(D.jsx)(S.a,{exact:!0,path:"/",component:_}),Object(D.jsx)(S.a,{path:"/favs",component:E}),Object(D.jsx)(S.a,{path:"/movie/:id",component:k}),Object(D.jsx)(V,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(D.jsx)(M.a,{store:y,children:Object(D.jsx)(g.a,{children:Object(D.jsx)(A,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.864fe593.chunk.js.map