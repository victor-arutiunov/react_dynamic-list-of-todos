(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),c=a.n(s),l=a(1),o=a(2),i=a(4),u=a(3),d=(a(12),a(13),function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e.data}))}),m=(a(14),function(e){var t=e.todos,a=e.selectUser;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"TodoList__item TodoList__item--".concat(e.completed?"checked":"unchecked")},r.a.createElement("label",null,e.completed?r.a.createElement("input",{type:"checkbox",checked:!0,readOnly:!0}):r.a.createElement("input",{type:"checkbox",readOnly:!0,onChange:function(t){a(e.userId,t)}}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button"},"User\xa0#",e.userId))})))))}),p=(a(15),"https://mate-api.herokuapp.com/users"),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={selectedUser:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(e,t){var a=this;d("".concat(p,"/").concat(this.props.userId)).then((function(e){a.setState({selectedUser:e})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;e.userId!==this.props.userId&&d("".concat(p,"/").concat(this.props.userId)).then((function(e){a.setState({selectedUser:e})}))}},{key:"render",value:function(){var e=this.state.selectedUser;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",e.id)),r.a.createElement("h3",{className:"CurrentUser__name"},e.name),r.a.createElement("p",{className:"CurrentUser__email"},e.email),r.a.createElement("p",{className:"CurrentUser__phone"},e.phone),r.a.createElement("button",{type:"button",onClick:this.props.clearUser},"Clear")))}}]),a}(r.a.Component),f="https://mate-api.herokuapp.com/todos",v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,titleFilter:"",todoStatus:"all"},e.selectUser=function(t,a){a.target.checked?e.setState({selectedUserId:t}):e.setState({selectedUserId:0})},e.clearUser=function(){e.setState({selectedUserId:0})},e.inputHandler=function(t){e.setState({titleFilter:t.target.value})},e.selectHandler=function(t){e.setState({todoStatus:t.target.value})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;d(f).then((function(t){e.setState({todos:t})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.todos!==this.state.todos&&d(f).then((function(e){var t=e.filter((function(e){return!Object.values(e).includes(null)})).filter((function(e){return e.title.includes(a.state.titleFilter)})).filter((function(e){switch(a.state.todoStatus){case"all":case e.completed.toString():return!0;default:return!1}}));a.setState({todos:t})}))}},{key:"render",value:function(){var e=this.state,t=e.todos,a=e.selectedUserId,n=e.titleFilter;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"searchWrap"},r.a.createElement("label",{htmlFor:""},"TODO name:",r.a.createElement("input",{type:"text",value:n,onChange:this.inputHandler})),r.a.createElement("select",{onChange:this.selectHandler},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:!0},"Finished"),r.a.createElement("option",{value:!1},"Unfinished"))),r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(m,{todos:t,selectUser:this.selectUser})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},a?r.a.createElement(h,{userId:a,clearUser:this.clearUser}):"No user selected")))}}]),a}(r.a.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.171f3acc.chunk.js.map