(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{107:function(e,t,n){e.exports=n(187)},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(54),c=n.n(o),i=(n(112),n(3)),s=n(6),l=n(5),u=n(4),d=(n(113),n(114),n(13)),m=n.n(d),h=(n(53),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=t.summary,a=t.location,o=t.start,c=t.htmlLink,i=t.description,s=m()(o.dateTime,"YYYY-MM-DD HH:mm").toDate(),l=this.state.showDetails;return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"event__Overview"},r.a.createElement("h2",{className:"event__Overview--name"},n),r.a.createElement("p",{className:"event__Overview--localDate"},"".concat(s)),a&&r.a.createElement("p",{className:"event__Overview--venue"},"@",n," | ",a),l&&r.a.createElement("button",{className:"details-btn",onClick:function(){return e.setState({showDetails:!l})}},"hide details"),!l&&r.a.createElement("button",{className:"details-btn",onClick:function(){return e.setState({showDetails:!l})}},"show details")),l&&r.a.createElement("div",{className:"event__Details"},r.a.createElement("h3",null,"About event:"),r.a.createElement("h4",null,r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"See details on Google Calendar")),r.a.createElement("p",{className:"event__Details--description",dangerouslySetInnerHTML:{__html:i}})))}}]),n}(a.Component)),f=function(e){var t=e.events;return t?r.a.createElement("ul",{className:"EventList"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h,{event:e}))}))):null},v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(v),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(v),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="red",a.fontSize="12px",a}return n}(v),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={locations:e.props.locations,query:"",suggestions:[],infoText:"",warningText:"",showSuggestions:!1},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));return e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state.showSuggestions;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(p,{text:this.state.infoText}),r.a.createElement("label",null,r.a.createElement("h4",null,"City Search"),r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:"Search for a city"})),r.a.createElement("ul",{className:t?"suggestions showSuggestions":"display-none"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)})),r.a.createElement("li",{onClick:function(){return e.handleItemClicked("all")}},r.a.createElement("b",null,"See all cities"))))}}]),n}(a.Component),y=n(55),E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.props.updateEvents(null,n),e.setState({numberOfEvents:n}),n<1?e.setState({infoText:"Select number from 1 to 32"}):e.setState({infoText:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.numberOfEvents;return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,"Number of Events: "),r.a.createElement(y.DebounceInput,{type:"text",id:"numberOfEvents__input",debounceTimeout:300,value:e,onChange:this.handleInputChanged}),r.a.createElement(g,{text:this.state.infoText}))}}]),n}(a.Component),k=n(9),O=n.n(k),S=n(17),j=n(56),x=[{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200622T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-22T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-22T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-06-22T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200623T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-23T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-23T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-06-23T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}}],T=n(18),C=n.n(T),D=n(29),N=n.n(D),Z=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},_=function(e){var t=e.map((function(e){return e.location}));return Object(j.a)(new Set(t))},M=function(){var e=Object(S.a)(O.a.mark((function e(){var t,n,a,r,o,c=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>0&&void 0!==c[0]?c[0]:32,C.a.start(),!window.location.href.startsWith("http://localhost")){e.next=5;break}return C.a.done(),e.abrupt("return",{events:x,locations:_(x)});case 5:return e.next=7,A();case 7:if(!(n=e.sent)){e.next=17;break}return Z(),a="https://f1k17pnw2a.execute-api.us-east-1.amazonaws.com/dev/api/get-events/".concat(n,"/").concat(t),e.next=13,N.a.get(a);case 13:return(r=e.sent).data&&(o=_(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),C.a.done(),e.abrupt("return",{events:r.data.events,locations:o});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(S.a)(O.a.mark((function e(){var t,n,a,r,o,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("access_token");case 2:return t=e.sent,e.next=5,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e}));case 5:if(n=e.sent,"invalid_token"!==n.error&&t){e.next=20;break}return localStorage.removeItem("access_token"),a=new URLSearchParams(window.location.search),e.next=12,a.get("code");case 12:if(r=e.sent){e.next=19;break}return e.next=16,N.a.get("https://f1k17pnw2a.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 16:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 19:return e.abrupt("return",I(r));case 20:return e.abrupt("return",t);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(S.a)(O.a.mark((function e(t){var n,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://f1k17pnw2a.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],page:null,currentLocation:"all",offlineText:"",numberOfEvents:32,locations:[]},e.countEventsOnADate=function(t){return e.state.events.filter((function(e){return e.start.dateTime===t})).length},e.getData=function(){var t=m()().add(7,"d").format("YYYY-MM-DD HH:mm"),n=e.state.events.filter((function(e){return m()(e.start.dateTime,"YYYY-MM-DD HH:mm").toDate()<=t}));return console.log("next7Days",n),n},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,o=a.numberOfEvents;t?M(o).then((function(n){return e.setState({events:"all"===t?n.events:n.events.filter((function(e){return e.location===t})),currentLocation:t})})):M(n).then((function(a){return e.setState({events:"all"===r?a.events:a.events.filter((function(e){return e.location===t})),numberOfEvents:n})}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;M().then((function(t){e.setState({events:t.events,locations:t.locations})}))}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.numberOfEvents,a=e.offlineText,o=e.events;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Meet App"),r.a.createElement("h4",null,"Choose your nearest city"),r.a.createElement(b,{updateEvents:this.updateEvents,locations:t}),r.a.createElement(w,{text:a}),r.a.createElement(E,{updateEvents:this.updateEvents,numberOfEvents:n}),r.a.createElement(f,{events:o}))}}]),n}(a.Component),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetup","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}},[[107,1,2]]]);
//# sourceMappingURL=main.35f50da3.chunk.js.map