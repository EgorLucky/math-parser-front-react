(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(22),s=n.n(a),i=n(9),c=n(10),o=n(12),u=n(15),l=n(14),p=n(0);var h=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 MathParser!"}),Object(p.jsx)("p",{children:"\u042d\u0442\u043e\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0430 \u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0444\u043e\u0440\u043c\u0443\u043b."}),Object(p.jsxs)("p",{children:["\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b: +, -, /,*.",Object(p.jsx)("br",{}),"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438:"]}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"^ - \u0432\u043e\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u0441\u0442\u0435\u043f\u0435\u043d\u044c;"}),Object(p.jsx)("li",{children:"e - \u0447\u0438\u0441\u043b\u043e e;"}),Object(p.jsx)("li",{children:'pi - \u0447\u0438\u0441\u043b\u043e "\u043f\u0438";'}),Object(p.jsx)("li",{children:"exp(n) - e^n"}),Object(p.jsx)("li",{children:"cos(x)"}),Object(p.jsx)("li",{children:"sin(x)"}),Object(p.jsx)("li",{children:"tg(x)"}),Object(p.jsx)("li",{children:"ctg(x)"}),Object(p.jsx)("li",{children:"log(a, b), \u0433\u0434\u0435 a - \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043b\u043e\u0433\u0430\u0440\u0438\u0444\u043c\u0430"})]}),Object(p.jsx)("p",{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439:"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"(1+2*cos(pi/2))^2"}),Object(p.jsx)("li",{children:'(x-y)*(cos(0)) (\u043f\u0435\u0440\u0435\u0434 \u043d\u0430\u0436\u0430\u0442\u0438\u0435\u043c \u043a\u043d\u043e\u043f\u043a\u0438 "\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c" \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b x \u0438 \u0443)'}),Object(p.jsx)("li",{children:'2 + 0.5 + 2.5*cos(pi) - log(2, 8) + sin(x) + tg(x)^2 (\u043f\u0435\u0440\u0435\u0434 \u043d\u0430\u0436\u0430\u0442\u0438\u0435\u043c \u043a\u043d\u043e\u043f\u043a\u0438 "\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c" \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 x)'})]})]})};var d=function(e){var t=e.id,n=e.name,r=e.value;return Object(p.jsxs)("div",{className:"parameter-parent-div",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"\u0418\u043c\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430:"}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{defaultValue:n,onChange:function(n){return e.onTextChanged(n,t,"name")}}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{defaultValue:r,onChange:function(n){return e.onTextChanged(n,t,"value")}})]}),Object(p.jsx)("button",{onClick:function(){return e.deleteParameter(t)},className:"parameter-delete-button",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440"})]},t)};var x=function(e){return Object(p.jsx)("table",{className:"computed-function-table",border:"1",cellSpacing:"0",children:Object(p.jsxs)("tbody",{children:[Object(p.jsx)("tr",{children:Object(p.jsx)("td",{colSpan:"2",children:e.functionNotation})}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:"}),Object(p.jsx)("td",{children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})]}),e.parametersAndValues.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:[" ",e.parameters," "]}),Object(p.jsxs)("td",{children:[" ",e.value," "]})]},e.id)}))]})})};var j=function(){return Object(p.jsx)("div",{className:"loader"})},m=n(3),b=n.n(m),f=n(7),v={mathParserServiceUrlProd:"https://mathparser.herokuapp.com",mathParserServiceUrlLocal:"http://localhost:5000"},O={setConfiguration:function(e,t){this.serviceHost="production"===t?e.mathParserServiceUrlProd:e.mathParserServiceUrlLocal},getLast:function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.serviceHost+"/api/math/getLast?limit="+t);case 2:return n=e.sent,e.next=5,g(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),computeExpression:function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={expression:t,parameters:n},e.next=3,this.myFetch("/api/math/computeExpression",r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}(),computeFunctionValues:function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={expression:t,parametersTable:n},e.next=3,this.myFetch("/api/math/computeFunctionValues",r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}(),myFetch:function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.serviceHost+t,{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(n)});case 2:return r=e.sent,e.next=5,g(r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()};function g(e){return C.apply(this,arguments)}function C(){return(C=Object(f.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null,200!==t.status&&!t.headers.get("content-type").includes("application/json")){e.next=7;break}return e.next=4,t.json();case 4:n=e.sent,e.next=10;break;case 7:return e.next=9,t.text();case 9:n=e.sent;case 10:return r={status:t.status,content:n,contentType:t.headers.get("content-type")},e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}O.setConfiguration(v,"production");var y=function(){function e(t){Object(i.a)(this,e),this.indexComponent=t}return Object(c.a)(e,[{key:"addParameter",value:function(){var e=this,t=this.indexComponent.state.parametersArray;if(5!==t.length){var n={deleteParameter:function(t){return e.deleteParameter(t)},key:0===t.length?1:t[t.length-1].key+1,name:"",value:"",onTextChanged:function(t,n,r){return e.parameterTextChanged(t,n,r)}};t.push(n),this.indexComponent.setState({parametersArray:t})}else alert("\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 5 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432!")}},{key:"parameterTextChanged",value:function(e,t,n){this.indexComponent.state.parametersArray.filter((function(e){return e.key===t}))[0][n]=e.currentTarget.value,this.indexComponent.setState({parametersArray:this.indexComponent.state.parametersArray})}},{key:"deleteParameter",value:function(e){var t=this.indexComponent.state.parametersArray.filter((function(t){return t.key!==e}));this.indexComponent.setState({parametersArray:t})}},{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getLast(20);case 2:t=e.sent,n=0,r=t.content.map((function(e){e.id=n++;var t=0;return e.parametersAndValues.map((function(e){return e.id=t++})),e})),this.indexComponent.setState({lastComputedFunctions:r});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"computeButtonClicked",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t,n,r,a,s,i,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.indexComponent.state.expression,n=this.indexComponent.state.parametersArray.map((function(e){return{variableName:e.name,value:e.value}})),this.indexComponent.setState({isComputing:!0}),r=null,e.prev=4,e.next=7,O.computeExpression(t,n);case 7:r=e.sent,e.next=17;break;case 10:return e.prev=10,e.t0=e.catch(4),this.indexComponent.setState({isComputing:!1}),a="\u041e\u0448\u0438\u0431\u043a\u0430!",e.t0 instanceof TypeError&&"Failed to fetch"===e.t0.message&&(a+=" \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0432\u0430\u0448\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0441\u0435\u0442\u0438."),this.indexComponent.setState({computeResult:a}),e.abrupt("return");case 17:200===r.status?this.indexComponent.setState({isComputing:!1,computeResult:null===(s=r)||void 0===s||null===(i=s.content)||void 0===i?void 0:i.result}):r.contentType.includes("json")&&void 0!==(null===(c=r)||void 0===c||null===(o=c.content)||void 0===o?void 0:o.message)?this.indexComponent.setState({computeResult:"\u041e\u0448\u0438\u0431\u043a\u0430! \u041e\u0442\u0432\u0435\u0442 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430: "+r.content.message,isComputing:!1}):(this.indexComponent.setState({computeResult:"\u041e\u0448\u0438\u0431\u043a\u0430!",isComputing:!1}),console.log(r.content)),this.componentDidMount();case 19:case"end":return e.stop()}}),e,this,[[4,10]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onExpressionChange=function(e){return r.setState({expression:e.currentTarget.value})},r.computeButtonClicked=function(){return r.handler.computeButtonClicked()},r.addParameter=function(){return r.handler.addParameter()},r.componentDidMount=function(){return r.handler.componentDidMount()},r.state={parametersArray:[],lastComputedFunctions:[],isComputing:!1,computeResult:"",expression:""},r.handler=new y(Object(o.a)(r)),r}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(h,{}),"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435:",Object(p.jsx)("br",{}),Object(p.jsx)("textarea",{className:"index-expression-textarea",onChange:this.onExpressionChange,defaultValue:this.state.expression}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{disabled:this.state.isComputing,onClick:this.computeButtonClicked,children:"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c"}),Object(p.jsx)("button",{id:"addParameterButton",onClick:this.addParameter,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440"}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{id:"parameters",children:this.state.parametersArray.map((function(e){return Object(p.jsx)(d,{id:e.key,name:e.name,value:e.value,deleteParameter:e.deleteParameter,onTextChanged:e.onTextChanged},e.key)}))}),this.state.isComputing&&Object(p.jsx)(j,{})||Object(p.jsx)("p",{children:this.state.computeResult}),Object(p.jsx)("a",{href:"chart",children:"\u0417\u0434\u0435\u0441\u044c \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0433\u0440\u0430\u0444\u0438\u043a"}),Object(p.jsx)("h3",{children:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438:"}),Object(p.jsxs)("div",{id:"lastComputedFunctions",children:[0===this.state.lastComputedFunctions.length&&Object(p.jsx)(j,{}),this.state.lastComputedFunctions.map((function(e){return Object(p.jsx)(x,{functionNotation:e.functionNotation,parametersAndValues:e.parametersAndValues},e.id)}))]})]})}}]),n}(r.Component),S=n(18),w=n.n(S);O.setConfiguration(v,"production");var N=null,F=function(){function e(t){Object(i.a)(this,e),this.chartComponent=t}return Object(c.a)(e,[{key:"draw",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t,n,r,a,s,i,c,o,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getLabels(),this.chartComponent.setState({isComputing:!0}),n=null,r="",e.prev=4,e.next=7,this.getPoints(t);case 7:n=e.sent,e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(4),r="\u041e\u0448\u0438\u0431\u043a\u0430!",e.t0 instanceof TypeError&&"Failed to fetch"===e.t0.message&&(r+=" \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0432\u0430\u0448\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0441\u0435\u0442\u0438."),this.chartComponent.setState({errorMessage:r,isComputing:!1}),e.abrupt("return");case 16:if(200===n.status){e.next=20;break}return n.contentType.includes("json")&&void 0!==(null===(a=n)||void 0===a||null===(s=a.content)||void 0===s?void 0:s.message)?r="\u041e\u0448\u0438\u0431\u043a\u0430! \u041e\u0442\u0432\u0435\u0442 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430: "+n.content.message:(r="\u041e\u0448\u0438\u0431\u043a\u0430!",console.log(n.content)),this.chartComponent.setState({errorMessage:r,isComputing:!1}),e.abrupt("return");case 20:this.chartComponent.setState({errorMessage:""}),i=n.content.result.map((function(e){return{x:e.parameters[0].value,y:e.value}})),null!=N&&N(),c={labels:t,datasets:[{label:"mathFunction",function:function(e){return i.filter((function(t){return t.x===e})).map((function(e){return e.y}))},borderColor:"rgba(255, 206, 86, 1)",data:[],fill:!1}]},w.a.pluginService.register({beforeInit:function(e){for(var t=e.config.data,n=function(e){for(var n=0;n<t.labels.length;n++){(0,t.datasets[e].function)(t.labels[n]).map((function(n){return t.datasets[e].data.push(n)}))}},r=0;r<t.datasets.length;r++)n(r)}}),o=document.getElementById("myChart"),u=new w.a(o,{type:"line",data:c,options:{scales:{yAxes:[{ticks:{beginAtZero:!1}}],xAxes:[{ticks:{beginAtZero:!1}}]}}}),N=function(){return u.destroy()},this.chartComponent.setState({isComputing:!1,errorMessage:r});case 29:case"end":return e.stop()}}),e,this,[[4,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"getLabels",value:function(){var e=this.chartComponent.state,t=e.xMin,n=e.xMax,r=e.xStep;if(isNaN(t)||isNaN(n)||isNaN(r))return[0,1,2,3,4,5];for(var a=[],s=t;s<n;s+=r)a.push(s);return a.push(n),a}},{key:"getPoints",value:function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.chartComponent.state.expression,r=t.map((function(e){return[{variableName:"x",value:e}]})),e.next=4,O.computeFunctionValues(n,r);case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onExpressionChange=function(e){return r.setState({expression:e.currentTarget.value})},r.onXMinChange=function(e){return r.onNumberFieldChanged("xMin",e)},r.onXMaxChange=function(e){return r.onNumberFieldChanged("xMax",e)},r.onXStepChange=function(e){return r.onNumberFieldChanged("xStep",e)},r.draw=function(){return r.handler.draw()},r.state={isComputing:!1,errorMessage:"",expression:"x^2",xMin:-15,xMax:15,xStep:1},r.handler=new F(Object(o.a)(r)),r.canvasStyle={width:"400px",height:"400px"},r}return Object(c.a)(n,[{key:"onNumberFieldChanged",value:function(e,t){var n={};n[e]=Number(t.currentTarget.value),this.setState(n)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:"\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0433\u0440\u0430\u0444\u0438\u043a\u0430"}),Object(p.jsx)("a",{href:"/",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(p.jsx)("br",{}),"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 f(x):",Object(p.jsx)("br",{}),Object(p.jsx)("textarea",{onChange:this.onExpressionChange,className:"chart-expression-textarea",defaultValue:this.state.expression}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"chart-2d-parameter-div",children:[Object(p.jsxs)("div",{children:["\u041e\u0431\u043b\u0430\u0441\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0439",Object(p.jsx)("br",{}),"\u043e\u0442:",Object(p.jsx)("input",{onChange:this.onXMinChange,defaultValue:this.state.xMin}),Object(p.jsx)("br",{}),"\u0434\u043e:",Object(p.jsx)("input",{onChange:this.onXMaxChange,defaultValue:this.state.xMax}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{children:["\u0441 \u0448\u0430\u0433\u043e\u043c:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{onChange:this.onXStepChange,defaultValue:this.state.xStep}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{disabled:this.state.isComputing,onClick:this.draw,children:"\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c"})]})]}),Object(p.jsx)("br",{}),this.state.isComputing&&Object(p.jsx)(j,{}),this.state.errorMessage,Object(p.jsx)("canvas",{id:"myChart",style:this.canvasStyle})]})}}]),n}(r.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))},A=n(23),T=n(2);s.a.render(Object(p.jsx)(A.a,{children:Object(p.jsxs)(T.c,{children:[Object(p.jsx)(T.a,{exact:!0,path:"/",component:k}),Object(p.jsx)(T.a,{path:"/chart",component:M})]})}),document.getElementById("root")),P(console.log)}},[[38,1,2]]]);
//# sourceMappingURL=main.91000681.chunk.js.map