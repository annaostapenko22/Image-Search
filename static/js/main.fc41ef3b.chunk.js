(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{102:function(e,t,a){e.exports={Button:"LoadMore_Button__2ypV7"}},104:function(e,t,a){e.exports=a(236)},134:function(e,t){},136:function(e,t){},170:function(e,t){},171:function(e,t){},21:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2NvDl",ImageGalleryItem:"ImageGallery_ImageGalleryItem__17uA_",ImageGalleryItem_image:"ImageGallery_ImageGalleryItem_image__4fzV7","ImageGalleryItem-image":"ImageGallery_ImageGalleryItem-image__30a9D",Overlay:"ImageGallery_Overlay__nzZ2V",Modal:"ImageGallery_Modal__20BRP"}},235:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(100),c=a.n(o),l=a(53),s=a(13),i=a(14),u=a(16),m=a(15),p=a(17),h=a(51),g=a.n(h),d=a(52),f=a.n(d);f.a.defaults.baseURL="https://pixabay.com/api/";var b="14452993-a97f0aeb82bfc4ebb60896535",y=a(28),_=a.n(y),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onHandleSubmit=function(e){e.preventDefault(),a.props.value(a.state.value),a.setState({value:""})},a.onHandleChange=function(e){a.setState({value:e.target.value})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:_.a.Searchbar},r.a.createElement("form",{className:"SearchForm",onSubmit:this.onHandleSubmit},r.a.createElement("button",{type:"submit",className:_.a.SearchForm_button},r.a.createElement("span",{className:_.a.SearchForm_button_label},"Search")),r.a.createElement("input",{className:_.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.onHandleChange,value:this.state.value,onKeyDown:function(){return console.log("WOKRRR")}})))}}]),t}(n.Component),I=a(21),S=a.n(I),O=a(101),E=a.n(O),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isModalOpened:!1,source:null},a.openModal=function(e){a.setState({isModalOpened:!0});var t=e.target.getAttribute("data-source");a.setState({source:t})},a.closeModal=function(e){"IMG"!==e.target.nodeName&&a.setState({isModalOpened:!1})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("keydown",this.onKeyPressed.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyPressed.bind(this))}},{key:"onKeyPressed",value:function(e){27===e.keyCode&&this.setState({isModalOpened:!1})}},{key:"render",value:function(){var e=this,t=this.props.items,a=this.state.isModalOpened;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement("div",{className:S.a.Overlay,onClick:function(t){return e.closeModal(t)},onKeyDown:this.onKeyPressed},r.a.createElement("div",{className:S.a.Modal,id:"modal"},r.a.createElement("img",{src:this.state.source,alt:"",id:"modalIMG",onKeyDown:function(){return console.log("work")}}))),r.a.createElement("ul",{className:S.a.ImageGallery},t.map((function(t){return r.a.createElement("li",{key:E.a.generate(),className:S.a.ImageGalleryItem,onClick:function(t){return e.openModal(t)}},r.a.createElement("img",{src:t.webformatURL,"data-source":t.largeImageURL,className:S.a.ImageGalleryItem_image,alt:"image"}))}))))}}]),t}(n.Component),k=a(34),w=a.n(k),G=a(102),L=a.n(G),F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={page:a.props.currentPage},a.handleClick=function(){a.setState((function(e){return{page:e.page+1}})),console.log("page",a.state)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("render")}},{key:"componentDidUpdate",value:function(e,t){t.page!==this.state.page&&this.props.page(this.state.page)}},{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:L.a.Button,onClick:function(){return e.handleClick()}},"Load more")}}]),t}(n.Component),M=a(103),C=a.n(M),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={imgItems:[],value:"",page:1,isLoading:!1,hasError:!1},a.onSubmit=function(e){a.setState({value:e})},a.incrementPage=function(e){a.setState({page:e})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this;t.value===this.state.value&&t.page===this.state.page||(t.value!==this.state.value&&this.setState({imgItems:[],page:1}),this.setState({isLoading:!0}),function(e){var t,a,n=arguments;return g.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.length>1&&void 0!==n[1]?n[1]:1,r.next=3,g.a.awrap(f.a.get("?q=".concat(e,"&page=").concat(t,"&key=").concat(b,"&image_type=photo&orientation=horizontal&per_page=12")));case 3:return a=r.sent,r.abrupt("return",a.data.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}})));case 5:case"end":return r.stop()}}))}(this.state.value,this.state.page).then((function(e){a.setState((function(t){return{imgItems:[].concat(Object(l.a)(t.imgItems),Object(l.a)(e)),isLoading:!1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}},{key:"render",value:function(){var e=this.state.isLoading;return console.log(this.state.imgItems),r.a.createElement("div",{className:w.a.App},r.a.createElement(v,{value:this.onSubmit}),r.a.createElement(j,{items:this.state.imgItems}),this.state.imgItems.length>0&&r.a.createElement(F,{page:this.incrementPage,currentPage:this.state.page}),e&&r.a.createElement(C.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3,className:w.a.Loader}))}}]),t}(n.Component);a(235);c.a.render(r.a.createElement(N,{className:"App"}),document.getElementById("root"))},28:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__rmC3y",SearchForm:"Searchbar_SearchForm__3BtIZ",SearchForm_button:"Searchbar_SearchForm_button__1uYd5",SearchForm_button_label:"Searchbar_SearchForm_button_label__R6mGq",SearchForm_input:"Searchbar_SearchForm_input__8Xocl"}},34:function(e,t,a){e.exports={App:"App_App__3duCJ",Loader:"App_Loader__EhjDc"}}},[[104,1,2]]]);
//# sourceMappingURL=main.fc41ef3b.chunk.js.map