(this["webpackJsonpclient-list"]=this["webpackJsonpclient-list"]||[]).push([[0],{46:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},55:function(e,t,n){},60:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),s=n(8),c=n.n(s),a=(n(46),n(47),n(48),n(9)),o=(n(49),n(15)),d=n(16),l=n(18),u=n(17),h=(n(50),n(78)),p=n(80),j=n(12),v=n(19),b=(n(51),n(79)),f=n(10);var O,C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2?arguments[2]:void 0,r={method:t,headers:{"Content-Type":"application/json"}};return n&&(r.body=JSON.stringify(n)),fetch(e,r).then((function(e){return e.json()})).then((function(e){if(e.error)throw e.error;return e}))},m="ERROR",g="LOADING",x="GET_CLIENTS_SUCCESS",y="GET_PROVIDERS_SUCCESS",S="ADD_PROVIDER_SUCCESS",P="ADD_CLIENT_SUCCESS",L="EDIT_CLIENT_SUCCESS",k="EDIT_PROVIDER_SUCCESS",w="REMOVE_PROVIDER_SUCCESS",M="REMOVE_CLIENT_SUCCESS";O="https://client-list-api.herokuapp.com";var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="".concat(O,"/client"),n="?";for(var r in e)n="?".concat(r,"=").concat(e[r],"&");return"?"===n&&(n=""),function(e){e({type:g}),C(t+n).then((function(t){e({type:x,clientList:t})})).catch((function(t){e({type:m,errorMessage:t.message})}))}},N=function(e){return function(t){t({type:g}),C("".concat(O,"/provider"),"POST",e).then((function(e){t({type:S,provider:e})})).catch((function(e){t({type:m,errorMessage:e.message})}))}},_=(n(55),n(22)),R=n(23),D=n(1),A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={checkbox:!1,edit:!1,inputValue:e.props.provider.name},e.handleCheck=function(t){e.props.handleCheck(t),e.setState({checkbox:!e.state.checkbox})},e.handleKeyDown=function(t){if("Enter"===t.key){var n={name:e.state.inputValue,_id:e.props.provider._id};e.props.editProvider(n),e.setState({edit:!1})}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.checkedProvider&&this.props.checkedProvider.includes(this.props.provider.name)?this.setState({checkbox:!0}):this.setState({checkbox:!1})}},{key:"render",value:function(){var e=this,t=this.props.provider;return Object(D.jsxs)("div",{className:"provWrapper",children:[Object(D.jsxs)("div",{className:"provName",children:[Object(D.jsx)("input",{name:t.name,type:"checkbox",id:t.name,onChange:function(t){return e.handleCheck(t)},checked:this.state.checkbox}),this.state.edit?Object(D.jsx)("input",{className:"editInput",type:"text",value:this.state.inputValue,onChange:function(t){return e.setState({inputValue:t.target.value})},onKeyDown:this.handleKeyDown}):Object(D.jsx)("label",{htmlFor:t.name,children:t.name})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("button",{onClick:function(){return e.setState({edit:!e.state.edit})},children:Object(D.jsx)(_.a,{icon:R.a,color:"#210794"})}),Object(D.jsx)("button",{onClick:function(){return e.props.removeProvider(t)},children:Object(D.jsx)(_.a,{icon:R.c,color:"#ce0f0f"})})]})]},t._id)}}]),n}(i.a.Component),T={editProvider:function(e){return function(t){t({type:g}),C("".concat(O,"/provider/").concat(e._id),"PUT",e).then((function(e){t({type:k,provider:e})})).catch((function(e){t({type:m,errorMessage:e.message})}))}},removeProvider:function(e){return function(t){t({type:g}),C("".concat(O,"/provider/").concat(e._id),"DELETE").then((function(n){t({type:w,provider:e})})).catch((function(e){t({type:m,errorMessage:e.message})}))}},getClients:E},I=Object(f.b)((function(e){return{providerList:e.providerList}}),T)(A),H=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).handleChange=function(e,t){i.setState(Object(v.a)({},t,e.target.value))},i.handleCheck=function(e){var t=new Set(i.state.selectedProviders);t.has(e.target.name)?t.delete(e.target.name):t.add(e.target.name),i.setState({selectedProviders:t})},i.addProvider=function(){var e=i.state.newProvider,t=i.props.providerList.find((function(t){return t.name===e}));e.trim()&&void 0===t?(i.props.addProvider({name:i.state.newProvider.trim()}),i.setState({newProvider:""})):t&&a.b.error("Provider must be unique \u2757\u2757\u2757")},i.addClient=function(){var e=i.state,t=e.email,n=e.name,r=e.phone;if(!t||/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(t))if(!r||/^\d+$/.test(r))if(n&&t&&r){var s=Object(j.a)(i.state.selectedProviders).map((function(e){return{name:e}})),c={name:i.state.name,email:i.state.email,phone:+i.state.phone,providers:s};i.props.addClient(c),i.props.onClose()}else a.b.error("All fields marked with * are required \u2757\u2757\u2757");else a.b.error("Phone must contain only numbers \u2757\u2757\u2757");else a.b.error("Write valid email address \u2757\u2757\u2757")},i.inputRef=Object(r.createRef)(),i.state={name:"",email:"",phone:"",newProvider:"",selectedProviders:new Set},i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.inputRef.current.focus()}},{key:"render",value:function(){var e=this,t=this.props.onClose;return Object(D.jsx)("div",{children:Object(D.jsxs)(b.a,{dialogClassName:"size",centered:!0,show:!0,onHide:t,children:[Object(D.jsx)(b.a.Header,{closeButton:!0,children:Object(D.jsx)(b.a.Title,{children:"Add new Client"})}),Object(D.jsxs)(b.a.Body,{children:[Object(D.jsxs)("div",{className:"inputs",children:[Object(D.jsx)("input",{ref:this.inputRef,type:"text",placeholder:"Name *",value:this.state.name,onChange:function(t){return e.handleChange(t,"name")}}),Object(D.jsx)("input",{type:"email",placeholder:"Email *",value:this.state.email,onChange:function(t){return e.handleChange(t,"email")}}),Object(D.jsx)("input",{type:"text",placeholder:"Phone *",value:this.state.phone,onChange:function(t){return e.handleChange(t,"phone")}}),Object(D.jsxs)("div",{className:"addProvider",children:[Object(D.jsx)("input",{type:"text",placeholder:"Providers",value:this.state.newProvider,onChange:function(t){return e.handleChange(t,"newProvider")}}),Object(D.jsx)(p.a,{onClick:this.addProvider,children:"Add provider"})]})]}),Object(D.jsx)("div",{className:"providerList",children:this.props.providers.map((function(t){return Object(D.jsx)("div",{children:Object(D.jsx)(I,{provider:t,handleCheck:e.handleCheck})},t._id)}))})]}),Object(D.jsxs)(b.a.Footer,{children:[Object(D.jsx)(p.a,{variant:"danger",className:"butn",onClick:t,children:"Cancel"}),Object(D.jsx)(p.a,{variant:"primary",onClick:this.addClient,children:"Add Client"})]})]})})}}]),n}(i.a.PureComponent),U={addProvider:N,addClient:function(e){return function(t){t({type:g}),C("".concat(O,"/client"),"POST",e).then((function(e){t({type:P,client:e})})).catch((function(e){t({type:m,errorMessage:e.message})}))}}},V=Object(f.b)((function(e){return{providerList:e.providerList}}),U)(H),z=n(6);function F(e){return Object(D.jsxs)(b.a,{centered:!0,show:!0,onHide:e.handleClose,children:[Object(D.jsx)(b.a.Header,{closeButton:!0,children:Object(D.jsx)(b.a.Title,{children:"Are you sure you want to delete client?"})}),Object(D.jsxs)(b.a.Footer,{children:[Object(D.jsx)(p.a,{onClick:e.handleClose,children:"Close"}),Object(D.jsx)(p.a,{variant:"danger",onClick:e.removeClient,children:"Delete"})]})]})}var B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).editChangeHandler=function(e,t){r.setState(Object(v.a)({},t,e.target.value))},r.addProvider=function(){var e=r.state.newProvider,t=r.props.providerList.find((function(t){return t.name===e}));e.trim()&&void 0===t?(r.props.addProvider({name:r.state.newProvider.trim()}),r.setState({newProvider:""})):t&&a.b.error("Provider must be unique \u2757\u2757\u2757")},r.handleCheck=function(e){var t=new Set(r.state.selectedProviders);t.has(e.target.name)?t.delete(e.target.name):t.add(e.target.name),r.setState({selectedProviders:t})},r.editClient=function(){var e=r.state,t=e.email,n=e.name,i=e.phone;if(t&&n&&i){if(!t||/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(t))if(!i||/^\d+$/.test(i))if(n&&t&&i){var s=Object(j.a)(r.state.selectedProviders).map((function(e){return{name:e}})),c={name:r.state.name,email:r.state.email,phone:r.state.phone,_id:r.state._id,providers:s};r.props.editClient(c),r.props.onClose()}else a.b.error("All fields marked with * are required \u2757\u2757\u2757");else a.b.error("Phone must contain only numbers \u2757\u2757\u2757");else a.b.error("Write valid email address \u2757\u2757\u2757")}else a.b.error("All fields marked with * are required \u2757\u2757\u2757")},r.toggleConfirm=function(){r.setState({showConfirm:!r.state.showConfirm})},r.removeClient=function(){r.props.removeClient(r.state._id),r.toggleConfirm(),r.props.onClose()},r.inputRef=i.a.createRef(),r.state=Object(z.a)(Object(z.a)({},r.props.client),{},{showConfirm:!1,selectedProviders:new Set}),r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.inputRef.current.focus(),this.setState({selectedProviders:new Set(Object(j.a)(this.state.providers.map((function(e){return e.name}))))})}},{key:"render",value:function(){var e=this;return Object(D.jsxs)("div",{children:[Object(D.jsxs)(b.a,{centered:!0,show:!0,onHide:this.props.onClose,children:[Object(D.jsx)(b.a.Header,{closeButton:!0,children:Object(D.jsx)(b.a.Title,{children:"Edit Client"})}),Object(D.jsxs)(b.a.Body,{children:[Object(D.jsxs)("div",{className:"inputs",children:[Object(D.jsx)("input",{ref:this.inputRef,type:"text",placeholder:"Name *",value:this.state.name,onChange:function(t){return e.editChangeHandler(t,"name")}}),Object(D.jsx)("input",{type:"text",placeholder:"Email *",value:this.state.email,onChange:function(t){return e.editChangeHandler(t,"email")}}),Object(D.jsx)("input",{type:"text",placeholder:"Phone *",value:this.state.phone,onChange:function(t){return e.editChangeHandler(t,"phone")}}),Object(D.jsxs)("div",{className:"addProvider",children:[Object(D.jsx)("input",{type:"text",placeholder:"Providers",value:this.state.newProvider,onChange:function(t){return e.editChangeHandler(t,"newProvider")}}),Object(D.jsx)(p.a,{onClick:this.addProvider,children:"Add provider"})]})]}),Object(D.jsx)("div",{className:"providerList",children:this.props.providerList.map((function(t){return Object(D.jsx)(I,{provider:t,checkedProvider:e.state.providers.map((function(e){return e.name})),handleCheck:e.handleCheck})}))})]}),Object(D.jsx)(b.a.Footer,{children:Object(D.jsxs)("div",{className:"btns",children:[Object(D.jsx)(p.a,{variant:"danger",onClick:this.toggleConfirm,children:"Delete Client"}),Object(D.jsxs)("div",{children:[Object(D.jsx)(p.a,{onClick:this.props.onClose,children:"Cancel"}),Object(D.jsx)(p.a,{onClick:this.editClient,children:"Edit Client"})]})]})})]}),this.state.showConfirm&&Object(D.jsx)(F,{handleClose:this.toggleConfirm,removeClient:this.removeClient})]})}}]),n}(i.a.PureComponent),Z={addProvider:N,editClient:function(e){return function(t){t({type:g}),C("".concat(O,"/client/").concat(e._id),"PUT",e).then((function(e){t({type:L,client:e})})).catch((function(e){t({type:m,errorMessage:e.message})}))}},removeClient:function(e){return function(t){t({type:g}),C("".concat(O,"/client/").concat(e),"DELETE").then((function(n){t({type:M,id:e})})).catch((function(e){t({type:m,errorMessage:e.message})}))}}},$=Object(f.b)((function(e){return{providerList:e.providerList,errorMessage:e.errorMessage}}),Z)(B),q=n(34),G=(n(60),n(41)),K=n(77),J=n(81);var W={getClients:E},Q=Object(f.b)(null,W)((function(e){var t=Object(r.useState)(""),n=Object(q.a)(t,2),i=n[0],s=n[1],c=Object(r.useState)(""),a=Object(q.a)(c,2),o=a[0],d=a[1],l=function(){var t={};i&&(t.search=i),o&&(t.sort=o),e.getClients(t)};return Object(D.jsxs)("div",{className:"advanced",children:[Object(D.jsx)("div",{className:"search",children:Object(D.jsxs)(K.a,{className:"mb-3",children:[Object(D.jsx)(J.a,{placeholder:"Search","aria-label":"Recipient's username","aria-describedby":"basic-addon2",onChange:function(e){return s(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&l()}}),Object(D.jsx)(K.a.Append,{children:Object(D.jsx)(p.a,{onClick:l,variant:"outline-primary",children:Object(D.jsx)(_.a,{icon:R.b,color:"#210794"})})})]})}),Object(D.jsx)("div",{className:"sort",children:Object(D.jsx)(G.a,{placeholder:"Sort",options:[{label:"A-Z",value:"a-z"},{label:"Z-A",value:"z-a"}],isClearable:!0,isSearchable:!1,onChange:function(t){if(t){d(t.value);var n={sort:t.value};e.getClients(n)}else d(""),e.getClients()}})})]})})),X=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).toggleNewClientModal=function(){e.setState({openNewClientModal:!e.state.openNewClientModal})},e.openNewClientModal=function(){e.props.getProviders(),e.setState({openNewClientModal:!e.state.openNewClientModal})},e.toggleEdit=function(t){e.props.getProviders(),e.setState({editClient:t})},e.state={openNewClientModal:!1,editClient:null},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.getClients()}},{key:"render",value:function(){var e=this,t=this.props.clientList;return Object(D.jsxs)("div",{className:"back",children:[Object(D.jsx)(Q,{}),Object(D.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(D.jsxs)("thead",{children:[Object(D.jsx)("tr",{children:Object(D.jsx)("th",{colSpan:"5",children:Object(D.jsxs)("div",{className:"clientHeader",children:[Object(D.jsx)("h4",{children:"Clients"}),Object(D.jsx)(p.a,{onClick:this.openNewClientModal,children:"New Client"})]})})}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{children:"Name"}),Object(D.jsx)("th",{children:"Email"}),Object(D.jsx)("th",{children:"Phone"}),Object(D.jsx)("th",{children:"Providers"}),Object(D.jsx)("th",{})]})]}),Object(D.jsx)("tbody",{children:t.map((function(t){return Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:t.name}),Object(D.jsx)("td",{children:t.email}),Object(D.jsx)("td",{children:t.phone}),Object(D.jsx)("td",{children:t.providers.map((function(e){return e.name})).join(", ")}),Object(D.jsx)("td",{children:Object(D.jsx)(p.a,{onClick:function(){return e.toggleEdit(t)},children:"Edit"})})]},t._id)}))})]}),this.state.openNewClientModal&&Object(D.jsx)(V,{onClose:this.toggleNewClientModal,providers:this.props.providerList}),this.state.editClient&&Object(D.jsx)($,{client:this.state.editClient,onClose:function(){return e.toggleEdit(null)}})]})}}]),n}(i.a.PureComponent),Y={getClients:E,getProviders:function(){var e="".concat(O,"/provider");return function(t){t({type:g}),C(e).then((function(e){t({type:y,providerList:e})})).catch((function(e){t({type:m,errorMessage:e.message})}))}}},ee=Object(f.b)((function(e){return{clientList:e.clientList,addClientSuccess:e.addClientSuccess,editClientSuccess:e.editClientSuccess,providerList:e.providerList}}),Y)(X),te=(n(73),function(){return Object(D.jsx)("div",{className:"loader"})});var ne=Object(f.b)((function(e){return{errorMessage:e.errorMessage,successMessage:e.successMessage,loading:e.loading}}))((function(e){return e.errorMessage&&a.b.error(e.errorMessage),e.successMessage&&a.b.success(e.successMessage),Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)(ee,{}),Object(D.jsx)(a.a,{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),e.loading&&Object(D.jsx)(te,{})]})})),re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),s(e),c(e)}))},ie=n(35),se=(n(74),n(40)),ce={clientList:[],providerList:[],client:null,errorMessage:"",successMessage:"",loading:!1,addClientSuccess:!1,editClientSuccess:!1,editProviderSuccess:!1,addProviderSuccess:!1},ae=[se.a];var oe=ie.a.apply(void 0,ae),de=Object(ie.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(z.a)(Object(z.a)({},e),{},{loading:!0,addClientSuccess:!1,editClientSuccess:!1,errorMessage:"",successMessage:""});case"ERROR":return Object(z.a)(Object(z.a)({},e),{},{errorMessage:"\u274c\u274c\u274c "+t.errorMessage,loading:!1});case x:return Object(z.a)(Object(z.a)({},e),{},{clientList:t.clientList,loading:!1});case y:return Object(z.a)(Object(z.a)({},e),{},{providerList:t.providerList,loading:!1});case S:var n=[].concat(Object(j.a)(e.providerList),[t.provider]);return Object(z.a)(Object(z.a)({},e),{},{providerList:n,loading:!1,successMessage:"\u2705\u2705\u2705 Provider added successfully!!!",addProviderSuccess:!0});case P:var r=[].concat(Object(j.a)(e.clientList),[t.client]);return Object(z.a)(Object(z.a)({},e),{},{clientList:r,loading:!1,successMessage:"\u2705\u2705\u2705 Client added successfully!!!",addClientSuccess:!0});case w:for(var i=e.providerList.filter((function(e){return e._id!==t.provider._id})),s=e.clientList.map((function(e){return e.providers})),c=0;c<s.length;c++){var a=s[c].map((function(e){return e._id===t.provider._id})),o=a.indexOf(!0);-1!==o&&e.clientList[c].providers.splice(o,1)}return Object(z.a)(Object(z.a)({},e),{},{providerList:i,clientList:Object(j.a)(e.clientList),loading:!1,successMessage:"\ud83d\uddd1\ud83d\uddd1\ud83d\uddd1 Provider deleted successfully!!!"});case M:var d=e.clientList.filter((function(e){return e._id!==t.id}));return Object(z.a)(Object(z.a)({},e),{},{clientList:d,loading:!1,successMessage:"\ud83d\uddd1\ud83d\uddd1\ud83d\uddd1 Client deleted successfully!!!"});case L:var l=Object(j.a)(e.clientList),u=l.findIndex((function(e){return e._id===t.client._id}));return l[u]=t.client,Object(z.a)(Object(z.a)({},e),{},{clientList:l,loading:!1,successMessage:"\ud83d\udd8d\ud83d\udd8d\ud83d\udd8d Client edited successfully!!!",editClientSuccess:!0});case k:var h=Object(j.a)(e.providerList),p=h.findIndex((function(e){return e._id===t.provider._id}));h[p]=t.provider;for(var v=e.clientList.map((function(e){return e.providers})),b=0;b<v.length;b++){var f=v[b].map((function(e){return e._id===t.provider._id})),O=f.indexOf(!0);-1!==O&&(e.clientList[b].providers[O]=t.provider)}return Object(z.a)(Object(z.a)({},e),{},{providerList:h,loading:!1,successMessage:"\ud83d\udd8d\ud83d\udd8d\ud83d\udd8d Provider edited successfully!!!",editProviderSuccess:!0});default:return e}}),oe);c.a.render(Object(D.jsx)(f.a,{store:de,children:Object(D.jsx)(ne,{})}),document.getElementById("root")),re()}},[[75,1,2]]]);
//# sourceMappingURL=main.c12b9f34.chunk.js.map