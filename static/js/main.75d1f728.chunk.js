(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{105:function(e,t,n){e.exports=n(181)},110:function(e,t,n){},111:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(53),c=n.n(o),s=(n(110),n(3)),i=n(8),u=n(5),l=n(4),f=(n(111),n(54)),v=n(13),m=n.n(v),h=(n(52),function(e){var t=e.event,n=t.summary,o=t.location,c=t.start,s=(t.end,t.htmlLink),i=t.description,u=Object(a.useState)(!1),l=Object(f.a)(u,2),v=l[0],h=l[1],d=m()(c.dateTime,"YYYY-MM-DD HH:mm").toDate();return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"event__Overview"},r.a.createElement("h2",{className:"event__Overview--name"},n),r.a.createElement("p",{className:"event__Overview--localDate"},"".concat(d)),o&&r.a.createElement("p",{className:"event__Overview--venue"},"@",n," | ",o),v&&r.a.createElement("button",{className:"details-btn",onClick:function(){return h(!v)}},"hide details"),!v&&r.a.createElement("button",{className:"details-btn",onClick:function(){return h(!v)}},"show details")),v&&r.a.createElement("div",{className:"event__Details"},r.a.createElement("h3",null,"About event:"),r.a.createElement("h4",null,r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},"See details on Google Calendar")),r.a.createElement("p",{className:"event__Details--description",dangerouslySetInnerHTML:{__html:i}})))}),d=function(e){var t=e.events;return t?r.a.createElement("ul",{className:"EventList"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h,{event:e}))}))):null},p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(p),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(p),E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="red",a.fontSize="12px",a}return n}(p),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],infoText:"",warningText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n})},e.handleItemClicked=function(t,n,a){e.setState({query:t,suggestions:[]}),e.props.updateEvents(n,a)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(g,{text:this.state.infoText}),r.a.createElement("label",null,"City:",r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:this.props.defaultCity})),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:5},e.handleInputChanged=function(t){var n=t.target.value;e.props.updateEvents(null,n),e.setState({numberOfEvents:n}),n<1?e.setState({infoText:"Select number from 1 to 32"}):e.setState({infoText:""})},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,"Number of Events: "),r.a.createElement("input",{type:"text",id:"numberOfEvents__input",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),r.a.createElement(b,{text:this.state.infoText}))}}]),n}(a.Component),y=n(9),k=n.n(y),x=n(17),j=n(28),S=n.n(j),C=function(){var e=Object(x.a)(k.a.mark((function e(){var t,n,a,r,o,c=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:5,console.log(t),e.next=4,_();case 4:if(!(n=e.sent)){e.next=13;break}return a="https://f1k17pnw2a.execute-api.us-east-1.amazonaws.com/dev/api/get-events/".concat(n,"/").concat(t),e.next=9,S.a.get(a);case 9:return r=e.sent,o=r.data.events,r.data&&localStorage.setItem("lastEvents",JSON.stringify(o)),e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(x.a)(k.a.mark((function e(){var t,n,a,r,o,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("access_token");case 2:return t=e.sent,e.next=5,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()}));case 5:if(n=e.sent,"invalid_token"!==n.error&&t){e.next=19;break}return a=new URLSearchParams(window.location.search),e.next=11,a.get("code");case 11:if(r=e.sent){e.next=18;break}return e.next=15,S.a.get("https://f1k17pnw2a.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 15:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 18:return e.abrupt("return",N(r));case 19:return e.abrupt("return",t);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(x.a)(k.a.mark((function e(t){var n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://f1k17pnw2a.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],page:null,defaultCity:"",offlineText:"",numberOfEvents:5},e.offLineAlert=function(){!1===navigator.onLine?e.setState({offlineText:"You appear to be offline, this list is cached. Please connect to the internet for an updated list."}):e.setState({offlineText:""})},e.countEventsOnADate=function(t){return e.state.events.filter((function(e){return e.start.dateTime===t})).length},e.getData=function(){var t=m()().add(7,"d").format("YYYY-MM-DD HH:mm"),n=e.state.events.filter((function(e){return m()(e.start.dateTime,"YYYY-MM-DD HH:mm").toDate()<=t}));return console.log("next7Days",n),n},e.updateEvents=function(t,n){t?C(n).then((function(n){return e.setState({events:n.events.filter((function(e){return e.location===t}))})})):C(n).then((function(t){return e.setState({events:t.events,numberOfEvents:n})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;C().then((function(t){return e.setState({events:t.events})})),window.addEventListener("online",this.offLineAlert())}},{key:"render",value:function(){return console.log("STATE#############",this.state.events),r.a.createElement("div",{className:"App"},r.a.createElement(w,{updateEvents:this.updateEvents,defaultCity:this.state.defaultCity}),r.a.createElement(E,{text:this.state.offlineText}),r.a.createElement(O,{updateEvents:this.updateEvents,numberOfEvents:2}),r.a.createElement(d,{events:this.state.events}))}}]),n}(a.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetup","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()}},[[105,1,2]]]);
//# sourceMappingURL=main.75d1f728.chunk.js.map