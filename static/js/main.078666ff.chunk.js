(this["webpackJsonptree-visualizer"]=this["webpackJsonptree-visualizer"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,i){e.exports=i(28)},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),s=i(7),r=i.n(s),o=i(1),l=i(3),c=i(6),m=i(4),u=i(2),v=i(5);i(19),i(20);var d=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(m.a)(t).call(this,e))).visualizer=i.props.visualizer,i.trees={BST:{name:"Binary Search Tree",operations:["Insert","Remove","Search","Traversals"]},AVL:{name:"AVL Tree",operations:["Insert","Remove","Search"]},RBT:{name:"Red-Black Tree",operations:["Insert","Remove","Search"]},BHP:{name:"Binary Heap",operations:["Insert","Top"]}},i.traversals=["Pre-Order","In-Order","Post-Order","Level Order"],i.state={active_tree:i.visualizer.state.menu_key},i}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"navbar-wrapper"},n.a.createElement("div",{className:"navbar-logo"},n.a.createElement("a",{href:"/"},n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"logo-text"},"Tree Visualizer"),n.a.createElement("code",{className:"ascii-logo"},n.a.createElement("span",null,"                                                                                                                                                                       \n                                                                                                                                                                       \n                                                                                                                                                                       \n                                                                                            *****( *,/,*(/*                                                            \n                                                                    ,,   . */            (#(##/##/#/((/(,,,                                                            \n                                                                .*,*/(*/*((*/*#(((**    *////%%##/((/(#((%#* *                                                         \n                                                            .*#/(###/(/##%(#(#&%(*/*/((//(#*/(#((*(((/*/*(##(////                                                      \n                                                            ((#(((%/((((#(#(##(**(((#(#/*/#*#(((%%%//((#%(%#%(%%/(#(*   ,                                              \n                                                        ,(##(#%(###%%#&(%%&%/%(#%%#&%%%#(((#(*/%(&%&&%##(%(&&%%%(/#(%((/*,                                             \n                                                    ,** .*/#/((#%#&&%%&*(//(##&&%%&%((##/%#((((/&%//(*(/(&%%###%%%%&%///*.                                             \n                                                ,, *#(((/(%*#%%&%%%#@@@&%##(%(#/%#%&%#%&&&&@#%##//##(##/(/*&&&&#&%#&/(&//,*                                            \n                                            ./##%%%#%%%#((#&&&&&@@&@&/#(##%#%%(&@&%%%##&&%&&%#@%%%%%&(&(#(((#&&%@%#(#%&(#(&(/*                                         \n                                            /*(((%#&%(%#(((#((&%@&@@@&(#(#%%&%&&@&%###%&%/%##%@&@@&##((#/#(*%%%#%(%(/@@#%%(*                                           \n                                        **/((##%#(((%##((#(((##@@&&(#(%%&&%&@&%&%#&%&%#(%/&%%(&&&@/%&&&&&&%(%%&%#&&&&@%%&&%(/##,                                       \n                                        ./(%((###&&(@(/(#%%&&%%%#%(#%@%#&&@&@&@##(#%#%#%&(@%&&&&&&%%&(##&(#(&&@@&@@@&%%#,                                              \n                                        #((#&%%&%&&&&%%&%%&&&@&&&/#(%#%%&%@@%@%##%%%%(%&%%&@&%&%%%##%#%((##(#%(%&&((%@&&#%&(%#                                         \n                                        ,(#%%&&&&&&&&@&&@@@@&@&@&%(##&%@&%&&&@@#%%&%&&/(#(/#&&&@#((##(%#&&(/%&&(%#(#/#(&%%/(,                                          \n                                        ./#%#&&%&%#%@@@&&@&@&%&%#&&&@@@@@@@@@@(#/(#@(#(&&&&@@%&(%%#%#%#((%&%%/(###((%%(/#&%%%##,.                                      \n                                        .(*%#&&%@&&(/(%##%@@@&@&&&&@%##&&*#%(%%&&@&@@@(&%&&&&&/@&&&%@@&((#(#/&%%&&(%&&&(&/*/.                                          \n                                    (/(((#.((%%@%##&&(%%%(%&%&&%#((%###%%%&&@@@%%%@&&&@@&%&&&%#&@@@%&&&&&@&(%&&&%#%%(%%&&%#%%%%(#/#/*                                  \n                                    ,(%#/(##((#@@@@#&&&&%%&&&((###%&%%@@#&&%%%&&&%@@&@&%&&&&&@#&@@@@#,#%%&%&@%&%&&%###(&@&%@%*(*.                                      \n                                    (/#/((####%##&%&&@(&%&&%&%&%%/%(%%%(&&&@&&@&&&&&&&&@@&(@&&@&&@%%%&%&&@%%(&&%%###%#@&@/&(..                                         \n                                ,((/##@@#&&@@&%&%%%@%##&&&@((%/%%(%#%&%%%&&@&&&@@%@&&(&((@&&&@%&&&&%&&%&@%#%@%&@&@%%&&%(#&%%###%#&((((// ,                             \n                                    ###&&@/%%%&%@@&@@&&%&&&&%#%@&@&%##%%&@&&@@%#%#%%%&%(##%%%#%@@&&&&&&@%@%&&@@&&%%%%#%(//&%((((%((/(#%#/(#((.                         \n                        */,((%//(#(((%&@&%&@@&%&@@%&%#@@%%&&@@@@@@%&&%&&@&&%%#%&%##%%%&@&%%%&&@&&%&(&&&&&&&&&(&&&(&(&##%%(#(&((%(##(//#                                \n                        ,((#(((#%##((/&%&/((/###&@@&&&@@&@&&&&@&@&@@%@&@@@&%@##%%(%#%@&@@@&((%@&%&(((&&@&#%&%%%##@&&%#%&%/%&@&@%@&&%%%##(#((*                          \n                        (##&####%&@@&@(%#&&%(#%#%%@&@%&&@&@&&&&@@@&&%%&&&&%%@#%#@%%&@&%(&&%/%%%%&%%%@@&@&&&&%%&&%%&%@%@%&(%@&@%&&&&&(%#%%%%/                           \n                        . (%&%#%&&@%&&&@@@%#&&%%%&%((&%#%##&@@&@&&%@&&%%&&%&&%&&&%%&%##/(/%(#&&%#%(((&(&%&&@&@#(&@&%(#%((%((#&@&%%%#(/%%&//*                           \n                        #%#,%/#(&(%@/ (#%&@%%&&(&%##&%@&&%&%@&@@@##&&&%&%&&&&(%#(#(//((%#%@&@@%%&&&&@%&&&@&%%##&&%@&%(@%%%%%#%((#%/#&%*                                \n                                (#%&&&&&&%%%/(%@@&%%%%#/(&%%%&@&&@@&@%%%&&%&&&@####(&&%%%%%#@&@&(%%##@&@&&%%&&&&@@&&&%&&@&&@(@%%%%&&/%%&%#&&&(// /                     \n                                #%%(##%%/ %/(#%&&&.* /%(,(,%%,,(&./&%&@&@%@&&*  %&%/% % &%&&&%%%&(&%%#((.@%@&%.&@#,#&&&&&&%%#%#&&&&@%%###%(.                           \n                                ./ ,* *#  .  %(&(,%%,/.*#  &**@@@&,%&&&&&&%%%  ..&&&&.(#&@&%@%%%&%%#%%#*%%      *. ... %%(&*&%(&/%%#&&%&%&%.(                          \n                                    *,%       /       #%%%&%&&,#%#&&&%(# %%%%  %&&%&&&&,.*% %     .*        , %#.. (/%@%(%%&&&(/..&%%%#&%%#(*                          \n                                                            *# (#*    .      *%%%%&&%&%%.    %/      /           .(#,*(@@*#//#%%%,  (,/##*,                            \n                                                                %*                %%&&%%#   %#,                  /.%(##&,%%      .#%**                                 \n                                                                                    .%%%%##%#.                      %/ /  ,.        .                                  \n                                                                                    %%%&%(                                                                             \n                                                                                    %#%%%,                                                                             \n                                                                                    %##%%,                                                                             \n                                                                                    %##%#(                                                                             \n                                                                                    %#%%%(                                                                             \n                                                                                    (#%%%#                                                                             \n                                                                                    ###%%%%*                                                                           \n                                                                    ...,,,,**/(((((##%#%#%###(#(....                                                                    "))))),n.a.createElement("div",{id:"tree-dropdown",className:"dropdown"},n.a.createElement("a",{className:"dropdown-toggle",href:"# "},this.state.active_tree?this.trees[this.state.active_tree].name:"Select..",n.a.createElement("i",{className:"fa fa-caret-down"})),n.a.createElement("ul",{className:"dropdown-menu"},Object.keys(this.trees).map((function(t,i){return n.a.createElement("li",{className:"dropdown-menu-option",key:i},n.a.createElement("a",{href:"# ",onClick:function(){return e.visualizer.changeTree(t)}},e.trees[t].name))})))),this.state.active_tree&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"operations-dropdown",className:"dropdown"},n.a.createElement("a",{className:"dropdown-toggle",href:"# "},"Operations",n.a.createElement("i",{className:"fa fa-caret-down"})),n.a.createElement("ul",{className:"dropdown-menu"},this.trees[this.state.active_tree].operations.map((function(t,i){return"Traversals"===t?n.a.createElement("li",{id:"traversals-submenu",className:"dropdown-menu-option submenu",key:i},n.a.createElement("a",{className:"submenu-toggle",href:"# "},t,n.a.createElement("i",{className:"fa fa-caret-down"})),n.a.createElement("ul",{className:"dropdown-menu submenu-dropdown"},e.traversals.map((function(t,i){return n.a.createElement("li",{className:"dropdown-menu-option",key:i},n.a.createElement("a",{href:"# ",onClick:function(){return e.visualizer.performOperation(t)}},t))})))):n.a.createElement("li",{className:"dropdown-menu-option",key:i},n.a.createElement("a",{href:"# ",onClick:function(){return e.visualizer.performOperation(t)}},t))})))),n.a.createElement("div",{id:"generate-tree",className:"navbar-button"},n.a.createElement("button",{onClick:function(){return e.visualizer.performOperation("Generate")}},"Generate")),n.a.createElement("div",{id:"reset-tree",className:"navbar-button"},n.a.createElement("button",{onClick:function(){return e.visualizer.performOperation("Reset")}},"Reset")),n.a.createElement("div",{id:"tooltips-toggle"},n.a.createElement("span",{className:"tooltips-text"},"Tooltips:"),n.a.createElement("label",{className:"switch"},n.a.createElement("input",{type:"checkbox",onClick:this.visualizer.toggleTooltips}),n.a.createElement("span",{className:"slider round"}))),n.a.createElement("div",{id:"about-information"},n.a.createElement("div",{className:"info-icon-wrapper"},n.a.createElement("i",{className:"fas fa-info"})),n.a.createElement("div",{className:"about-dialogue"},n.a.createElement("p",null,"Project repository can be found ",n.a.createElement("a",{href:"https://github.com/jkelaty/tree-visualizer",target:"_blank",rel:"noopener noreferrer"},"here")),n.a.createElement("p",null,"Created by Jonathan Kelaty"))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.active_tree!==e.visualizer.state.menu_key?{active_tree:e.visualizer.state.menu_key}:null}}]),t}(n.a.Component),h=i(12),p=i(30),f=(i(21),function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={active:i.props.active,operation:i.props.operation,step:i.props.step},i}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.active?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"tooltips"},n.a.createElement("div",null,"Tooltips active"),n.a.createElement("div",null,this.state.operation," : ",this.state.step),n.a.createElement("button",{onClick:this.props.next},"Next"))):null}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.active!==e.active?{active:e.active}:null}}]),t}(n.a.Component)),g=(i(22),function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(m.a)(t).call(this,e))).value=null,i.state={operation:i.props.operation,callback:i.props.callback},i.updateInputValue=i.updateInputValue.bind(Object(u.a)(i)),i.confirm=i.confirm.bind(Object(u.a)(i)),i.cancel=i.cancel.bind(Object(u.a)(i)),i}return Object(v.a)(t,e),Object(l.a)(t,[{key:"updateInputValue",value:function(e){this.value=parseInt(e.target.value)}},{key:"confirm",value:function(){this.state.callback(this.value)}},{key:"cancel",value:function(){this.state.callback(null)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"prompt-container"},n.a.createElement("div",{id:"input-container"},n.a.createElement("div",{id:"input-message"},"Please select element:"),n.a.createElement("input",{id:"input-number",onChange:this.updateInputValue,type:"number",step:"1"}),n.a.createElement("button",{id:"input-confirm",className:"input-prompt-button",onClick:this.confirm},this.state.operation),n.a.createElement("button",{id:"input-cancel",className:"input-prompt-button",onClick:this.cancel},"Cancel")),n.a.createElement("div",{id:"prompt-background",onClick:this.cancel})))}}]),t}(n.a.Component));i(23);function y(e){return n.a.createElement(n.a.Fragment,null,e.message?n.a.createElement("div",{id:"error-message"},n.a.createElement("p",null,e.message)):null)}var k=function(){function e(){Object(o.a)(this,e),this.queue=[]}return Object(l.a)(e,[{key:"empty",value:function(){return!this.queue.length}},{key:"push",value:function(e){this.queue.push(e)}},{key:"front",value:function(){return this.queue.shift()}},{key:"size",value:function(){return this.queue.length}}]),e}();i(24);var b=function e(t){Object(o.a)(this,e),this.value=t,this.left=null,this.right=null,this.animations={initial:{node:{active:!1,delay:0},line:{active:!1,delay:0}},visited:{node:{active:!1,delay:0},line:{active:!1,delay:0}},success:{node:{active:!1,delay:0},line:{active:!1,delay:0}},removed:{node:{active:!1,delay:0},line:{active:!1,delay:0}}},this.moveAnimations={active:!1,delay:0,css:{entering:{},entered:{},exiting:{},exited:{}}}},E=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(m.a)(t).call(this,e))).initialStateOperation="Initial",i.visibleClasses={appearDone:"visible",enterDone:"visible",exit:"visible"},i.operationSteps={Initial:["Initial"],Generate:["Reset","Generate"],Reset:["Hide","Reset"],Insert:["Input","Insert","Complete"],Remove:["Input","Remove 1","Remove 2","Remove 3","Remove 4","Complete"],Search:["Input","Search"],"Pre-Order":["Traverse"],"In-Order":["Traverse"],"Post-Order":["Traverse"],"Level Order":["Traverse"]},i.name="BinarySearchTree",i.key="BST",i.root=null,i.removeValue=null,i.targetValue=null,i.targetNode=null,i.timeout=0,i.input=!1,i.waiting=!1,i.errorMessage={message:"",key:null},i.state={operation:i.initialStateOperation,step:0,tooltips:!1,destroy:!0},i.receiveInput=i.receiveInput.bind(Object(u.a)(i)),i.advanceOperationStepFromTooltips=i.advanceOperationStepFromTooltips.bind(Object(u.a)(i)),i}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({operation:"Generate",step:0})}},{key:"shouldComponentUpdate",value:function(e,t){return!!t.destroy||(!this.waiting||this.state.tooltips!==t.tooltips||e.operation!==this.initialStateOperation&&e.operation!==this.state.operation&&(this.errorMessage.message="Error: Tree performing operation",this.errorMessage.key=(new Date).getTime(),!0))}},{key:"render",value:function(){return this.performOperationStep(),n.a.createElement(n.a.Fragment,null,this.input?n.a.createElement(g,{operation:this.state.operation,callback:this.receiveInput}):null,n.a.createElement(y,{message:this.errorMessage.message,key:this.errorMessage.key}),n.a.createElement("div",{id:this.name,className:"tree",style:{transform:this.getScaleFactor()}},this.Tree()),n.a.createElement(f,{active:this.state.tooltips,operation:this.state.operation,step:this.state.step,next:this.advanceOperationStepFromTooltips}))}},{key:"componentDidUpdate",value:function(){this.advanceOperationStep()}},{key:"performOperationStep",value:function(){switch(this.state.operation){case"Generate":this.GenerateTree();break;case"Reset":this.ResetTree();break;case"Insert":this.InsertInTree();break;case"Remove":this.RemoveFromTree();break;case"Search":this.SearchTree();break;case"Pre-Order":case"In-Order":case"Post-Order":case"Level Order":this.TraverseTree();break;case"Initial":default:this.InitialTree()}}},{key:"advanceOperationStep",value:function(){if(this.state.operation!==this.initialStateOperation)if(this.state.step>=this.operationSteps[this.state.operation].length-1){if(!this.waiting){var e=this;e.waiting=!0,setTimeout((function(){e.waiting=!1,e.state.tooltips&&"Generate"!==e.state.operation&&"Reset"!==e.state.operation||e.setState({operation:"Initial",step:0})}),e.timeout)}}else{if("Input"===this.operationSteps[this.state.operation][this.state.step])return;if(!this.waiting){var t=this;t.waiting=!0,setTimeout((function(){t.waiting=!1,t.state.tooltips&&"Generate"!==t.state.operation&&"Reset"!==t.state.operation||t.setState({step:t.state.step+1})}),t.timeout)}}}},{key:"advanceOperationStepFromTooltips",value:function(){this.state.step>=this.operationSteps[this.state.operation].length-1?this.setState({operation:"Initial",step:0}):this.setState({step:this.state.step+1})}},{key:"insertNumElements",value:function(e){for(var t=0;t<e;++t){var i=(a=1,n=150,Math.floor(Math.random()*(n-a+1)+a));this.insert(i)?this.height()>5&&(this.root=this.remove(i),--t):--t}var a,n}},{key:"reset",value:function(){this.root=null}},{key:"height",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.root;return null===e?0:Math.max(this.height(e.left),this.height(e.right))+1}},{key:"contains",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root;return!!t&&(e<t.value?this.contains(e,t.left):!(e>t.value)||this.contains(e,t.right))}},{key:"insert",value:function(e){if(null===this.root)return this.root=new b(e),!0;for(var t=this.root;;){if(t.value===e)return!1;if(t.value<e){if(null===t.right)return t.right=new b(e),!0;t=t.right}else{if(null===t.left)return t.left=new b(e),!0;t=t.left}}}},{key:"remove",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root;if(e){if(null===t)return t;if(e<t.value)t.left=this.remove(e,t.left);else if(e>t.value)t.right=this.remove(e,t.right);else{if(null===t.left)return t.right;if(null===t.right)return t.left;t.value=this.inOrderSuccessor(t.right),t.right=this.remove(t.value,t.right)}return t}}},{key:"inOrderSuccessor",value:function(e){return null!==e.left?this.inOrderSuccessor(e.left):e.value}},{key:"getScaleFactor",value:function(){var e=(window.innerWidth-20)/(70*Math.pow(2,this.height()-1));return"scale("+(e>1?1:e)+")"}},{key:"Tree",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.root,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.height(),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"root";if(a===i)return null;var r=this.Tree(t?t.left:null,i,a+1,"left"),o=this.Tree(t?t.right:null,i,a+1,"right"),l=["node-wrapper",s].join(" ");if(null===t)return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:l,"node-value":"null"},n.a.createElement("div",{className:"node-value"}),r,o));var c={width:t===this.root?70*Math.pow(2,i-1)+"px":null};return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{in:t.moveAnimations.active,timeout:t.moveAnimations.delay,appear:!0},(function(m){return n.a.createElement("div",{className:l,"node-value":t.value,"node-layer":i-a,style:t!==e.root||t.moveAnimations.active?t.moveAnimations.css[m]:c},n.a.createElement(p.a,{in:t.animations.initial.node.active,timeout:t.animations.initial.node.delay,classNames:e.visibleClasses,appear:!0},n.a.createElement("div",{className:"node-value"},e.getNodeHover(t.value),e.getCricle(t))),r,o,e.getConnectingLine(t,s))})))}},{key:"getCricle",value:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("svg",{className:"circle node-value-circle",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("circle",{className:"circle node-circle initial",r:"24",cx:"25",cy:"25",fill:"none"}),n.a.createElement(p.a,{in:e.animations.visited.node.active,timeout:e.animations.visited.node.delay,classNames:this.visibleClasses,appear:!0},n.a.createElement("svg",{className:"circle node-circle-traversal",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("circle",{className:"circle node-circle-background visited",r:"24",cx:"25",cy:"25",fill:"none"}),n.a.createElement("circle",{className:"circle node-circle visited",r:"24",cx:"25",cy:"25",fill:"none"}))),n.a.createElement(p.a,{in:e.animations.success.node.active,timeout:e.animations.success.node.delay,classNames:this.visibleClasses,appear:!0},n.a.createElement("svg",{className:"circle node-circle-traversal",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("circle",{className:"circle node-circle-background success",r:"24",cx:"25",cy:"25",fill:"none"}),n.a.createElement("circle",{className:"circle node-circle success",r:"24",cx:"25",cy:"25",fill:"none"}))),n.a.createElement(p.a,{in:e.animations.removed.node.active,timeout:e.animations.removed.node.delay,classNames:this.visibleClasses,appear:!0},n.a.createElement("svg",{className:"circle node-circle-traversal",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("circle",{className:"circle node-circle-background removed",r:"24",cx:"25",cy:"25",fill:"none"}),n.a.createElement("circle",{className:"circle node-circle removed",r:"24",cx:"25",cy:"25",fill:"none"}))),n.a.createElement("text",{className:"text node-value-text",x:"50%",y:"50%",fill:"black",textAnchor:"middle",dominantBaseline:"central"},e.value)))}},{key:"getNodeHover",value:function(e){var t=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"node-hover"},n.a.createElement("i",{className:"fas fa-search",onClick:function(){return t.searchNode(e)}}),n.a.createElement("span",{className:"search"},n.a.createElement("svg",{className:"circle",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("circle",{className:"circle node-hover-circle",r:"24",cx:"25",cy:"25",fill:"none"}))),n.a.createElement("i",{className:"fas fa-trash",onClick:function(){return t.deleteNode(e)}}),n.a.createElement("span",{className:"trash"},n.a.createElement("svg",{className:"circle",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("circle",{className:"circle node-hover-circle",r:"24",cx:"25",cy:"25",fill:"none"})))))}},{key:"getConnectingLine",value:function(e,t){return"left"===t||"right"===t?n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{in:e.animations.initial.line.active,timeout:e.animations.initial.line.delay,classNames:this.visibleClasses,appear:!0},n.a.createElement("svg",{className:"line node-line",xmlns:"http://www.w3.org/2000/svg"},this.getLine(t,"initial"),n.a.createElement(p.a,{in:e.animations.visited.line.active,timeout:e.animations.visited.line.delay,classNames:this.visibleClasses,appear:!0},this.getLine(t,"visited")),n.a.createElement(p.a,{in:e.animations.success.line.active,timeout:e.animations.success.line.delay,classNames:this.visibleClasses,appear:!0},this.getLine(t,"success")),n.a.createElement(p.a,{in:e.animations.removed.line.active,timeout:e.animations.removed.line.delay,classNames:this.visibleClasses,appear:!0},this.getLine(t,"removed"))))):null}},{key:"getLine",value:function(e,t){var i=["line",t].join(" ");return"left"===e?n.a.createElement("line",{className:i,x1:"0",y1:"50",x2:"100%",y2:"0"}):"right"===e?n.a.createElement("line",{className:i,x1:"0",y1:"0",x2:"100%",y2:"50"}):null}},{key:"InitialTree",value:function(){this.removeValue=null,this.targetValue=null,this.targetNode=null,this.timeout=0,this.input=!1,this.waiting=!1,this.setHideTraversalAnimations(),this.setHideMoveAnimations(),document.querySelector(".moved")&&document.querySelector(".moved").classList.remove("moved")}},{key:"GenerateTree",value:function(){switch(this.operationSteps[this.state.operation][this.state.step]){case"Reset":this.root?(this.setHideAnimations(),this.timeout=1e3):this.timeout=0;break;case"Generate":this.reset(),this.insertNumElements(15),this.setGenerationAnimations();break;default:this.InitialTree()}}},{key:"ResetTree",value:function(){switch(this.operationSteps[this.state.operation][this.state.step]){case"Hide":this.root?(this.setHideAnimations(),this.timeout=1e3):this.timeout=0;break;case"Reset":this.reset(),this.timeout=0;break;default:this.InitialTree()}}},{key:"InsertInTree",value:function(e){switch(this.operationSteps[this.state.operation][this.state.step]){case"Input":this.input=!0;break;case"Insert":this.targetValue&&(this.contains(this.targetValue)?(this.targetValue=null,this.errorMessage.message="Error: Tree already contains element",this.errorMessage.key=(new Date).getTime()):(this.insert(this.targetValue),this.timeout=this.setInsertAnimations()));break;case"Complete":this.targetValue&&(this.setInsertionCompleteAnimations(),this.timeout=5e3);break;default:this.InitialTree()}}},{key:"RemoveFromTree",value:function(){switch(this.operationSteps[this.state.operation][this.state.step]){case"Input":this.root?this.input=!0:(this.errorMessage.message="Error: Tree is empty",this.errorMessage.key=(new Date).getTime());break;case"Remove 1":this.targetValue&&(this.contains(this.targetValue)?this.timeout=this.setRemoveAnimations()+3e3:(this.targetValue=null,this.errorMessage.message="Error: Tree does not contain element",this.errorMessage.key=(new Date).getTime()));break;case"Remove 2":this.targetValue&&(this.timeout=this.setMoveSubtreeAnimations()+3e3);break;case"Remove 3":this.targetValue&&(this.targetNode?this.timeout=this.setRemoveAnimations()+3e3:this.timeout=0);break;case"Remove 4":this.targetValue&&(this.targetNode?this.timeout=this.setMoveSubtreeAnimations()+3e3:this.timeout=0);break;case"Complete":this.targetValue&&(this.root=this.remove(this.removeValue),this.setHideMoveAnimations(),this.setHideTraversalAnimations(),document.querySelector(".root").classList.add("moved"),this.timeout=2e3);break;default:this.InitialTree()}}},{key:"SearchTree",value:function(){switch(this.operationSteps[this.state.operation][this.state.step]){case"Input":this.root?this.input=!0:(this.errorMessage.message="Error: Tree is empty",this.errorMessage.key=(new Date).getTime());break;case"Search":if(this.targetValue&&(this.timeout=this.setSearchAnimations()+7e3,!this.contains(this.targetValue))){var e=this;setTimeout((function(){e.errorMessage.message="Tree does not contain element",e.errorMessage.key=(new Date).getTime(),e.forceUpdate()}),e.timeout-6e3)}break;default:this.InitialTree()}}},{key:"TraverseTree",value:function(){if(this.root)switch(this.state.operation){case"Pre-Order":case"In-Order":case"Post-Order":this.timeout=this.setDFSTraversalAnimations(this.state.operation)+5e3;break;case"Level Order":this.timeout=this.setBFSTraversalAnimations()+5e3;break;default:this.InitialTree()}else this.errorMessage.message="Error: Tree is empty",this.errorMessage.key=(new Date).getTime()}},{key:"receiveInput",value:function(e){this.targetValue=e,this.input=!1,"Remove"===this.state.operation?this.deleteNode(e):this.setState({step:this.state.step+1})}},{key:"searchNode",value:function(e){this.targetValue=e,this.setState({operation:"Search",step:1})}},{key:"deleteNode",value:function(e){this.targetValue=e,this.removeValue=e,this.targetNode=this.root,this.setState({operation:"Remove",step:1})}},{key:"setGenerationAnimations",value:function(){var e=new k;e.push(this.root);for(var t=150;!e.empty();){var i=e.front();if(i){for(var a in e.push(i.left),e.push(i.right),i.animations.initial)i.animations.initial[a].active=!0,i.animations.initial[a].delay=t;t+=200}}}},{key:"setHideAnimations",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.root;if(null!==e){for(var t in e.animations)for(var i in e.animations[t])e.animations[t][i].active=!1,e.animations[t][i].delay=150;this.setHideAnimations(e.left),this.setHideAnimations(e.right)}}},{key:"setHideTraversalAnimations",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.root;if(null!==e){for(var t in e.animations)for(var i in e.animations[t])"initial"===t?(e.animations[t][i].active=!0,e.animations[t][i].delay=0):(e.animations[t][i].active=!1,e.animations[t][i].delay=150);this.setHideTraversalAnimations(e.left),this.setHideTraversalAnimations(e.right)}}},{key:"setHideMoveAnimations",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.root;null!==e&&(e.moveAnimations.active=!1,e.moveAnimations.delay=0,e.moveAnimations.css={entering:{},entered:{},exiting:{},exited:{}},this.setHideMoveAnimations(e.left),this.setHideMoveAnimations(e.right))}},{key:"setDFSTraversalAnimations",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:150;if(null===t)return i;var a=t===this.root?i:i+1e3;return t.animations.visited.node.active=!0,t.animations.visited.node.delay=a+500,t.animations.visited.line.active=!0,t.animations.visited.line.delay=a,"Pre-Order"===e&&(a+=1e3,t.animations.success.node.active=!0,t.animations.success.node.delay=a),a=this.setDFSTraversalAnimations(e,t.left,a),"In-Order"===e&&(a+=1e3,t.animations.success.node.active=!0,t.animations.success.node.delay=a),a=this.setDFSTraversalAnimations(e,t.right,a),"Post-Order"===e&&(a+=1e3,t.animations.success.node.active=!0,t.animations.success.node.delay=a),t.animations.success.line.active=!0,t.animations.success.line.delay=a,a}},{key:"setBFSTraversalAnimations",value:function(){var e=new k,t=150;for(this.root&&(e.push(this.root),this.root.animations.visited.node.active=!0,this.root.animations.visited.node.delay=t);!e.empty();){var i=e.front();if(i){if(i.left)for(var a in e.push(i.left),t+=1e3,i.left.animations.visited)i.left.animations.visited[a].active=!0,i.left.animations.visited[a].delay=t;if(i.right)for(var n in e.push(i.right),t+=1e3,i.right.animations.visited)i.right.animations.visited[n].active=!0,i.right.animations.visited[n].delay=t;for(var s in t+=1e3,i.animations.success)i.animations.success[s].active=!0,i.animations.success[s].delay=t}}return t}},{key:"setSearchAnimations",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.root,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150;if(this.targetValue&&e){var i=t;return this.targetValue===e.value?(e.animations.success.node.active=!0,e.animations.success.node.delay=t+1250):i=this.targetValue<e.value?this.setSearchAnimations(e.left,t+1e3):this.setSearchAnimations(e.right,t+1e3),e.animations.visited.node.active=!0,e.animations.visited.node.delay=t+500,e.animations.visited.line.active=!0,e.animations.visited.line.delay=t,i}return t}},{key:"setInsertAnimations",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.root,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150;if(this.targetValue&&e){var i=t;return this.targetValue===e.value?(this.targetNode=e,i):(i=this.targetValue<e.value?this.setInsertAnimations(e.left,t+1e3):this.setInsertAnimations(e.right,t+1e3),e.animations.visited.node.active=!0,e.animations.visited.node.delay=t+500,e.animations.visited.line.active=!0,e.animations.visited.line.delay=t,i)}return t}},{key:"setInsertionCompleteAnimations",value:function(){var e=this.targetNode;e&&(e.animations.initial.node.active=!0,e.animations.initial.node.delay=650,e.animations.initial.line.active=!0,e.animations.initial.line.delay=150,e.animations.success.node.active=!0,e.animations.success.node.delay=1250)}},{key:"setRemoveAnimations",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.targetNode,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150;return this.targetValue&&e?(e.animations.visited.node.active=!0,e.animations.visited.node.delay=t+500,e.animations.visited.line.active=!0,e.animations.visited.line.delay=t,this.targetValue!==e.value?this.targetValue<e.value?this.setRemoveAnimations(e.left,t+1e3):this.setRemoveAnimations(e.right,t+1e3):(e.animations.success.node.active=!1,e.animations.success.node.delay=t,e.animations.success.line.active=!1,e.animations.success.line.delay=t,e.animations.removed.node.active=!0,e.animations.removed.node.delay=t+1500,e.animations.removed.line.active=!0,e.animations.removed.line.delay=t+1e3,e.animations.initial.node.active=!1,e.animations.initial.node.delay=t+1500,e.animations.initial.line.active=!1,e.animations.initial.line.delay=t+1500,this.targetNode=e,t)):t}},{key:"setMoveSubtreeAnimations",value:function(){var e=this.targetNode,t=0;if(e)if(null===e.left||null===e.right)e.animations.initial.line.active=!0,e.animations.initial.line.delay=3e3,e.animations.visited.node.active=!1,e.animations.visited.node.delay=150,e.animations.visited.line.active=!1,e.animations.visited.line.delay=150,e.animations.removed.node.active=!1,e.animations.removed.node.delay=150,e.animations.removed.line.active=!1,e.animations.removed.line.delay=150,e.animations.success.line.active=!0,e.animations.success.line.delay=3500,null===e.left&&null===e.right?(e.animations.initial.line.active=!1,e.animations.initial.line.delay=0,e.animations.success.line.active=!1,e.animations.success.line.delay=0,1===document.querySelectorAll('.node-wrapper[node-layer="1"]').length&&parseInt(document.querySelector('.node-wrapper[node-layer="1"]').attributes["node-value"].value)===e.value&&(this.root.moveAnimations.active=!0,this.root.moveAnimations.delay=1e3,this.root.moveAnimations.css.entering={width:document.querySelector(".root").offsetWidth+"px"},this.root.moveAnimations.css.entered={width:document.querySelector(".root").offsetWidth/2+"px"})):(null===e.left?(e.right.animations.initial.line.active=!1,e.right.animations.initial.line.delay=150,e.right.moveAnimations.active=!0,e.right.moveAnimations.delay=1e3,e.right.moveAnimations.css.entered={width:"100%",zIndex:"1000",transform:"translate(-50%, -50px)"},t=this.setMoveSubtreeCompleteAnimations(e.right)):null===e.right&&(e.left.animations.initial.line.active=!1,e.left.animations.initial.line.delay=150,e.left.moveAnimations.active=!0,e.left.moveAnimations.delay=1e3,e.left.moveAnimations.css.entered={width:"100%",zIndex:"1000",transform:"translate(0, -50px)"},t=this.setMoveSubtreeCompleteAnimations(e.left)),document.querySelectorAll('.node-wrapper[node-value="'+e.value+'"] .node-wrapper[node-layer="1"]').length===document.querySelectorAll('.node-wrapper[node-layer="1"]').length&&(this.root.moveAnimations.active=!0,this.root.moveAnimations.delay=1e3,this.root.moveAnimations.css.entering={width:document.querySelector(".root").offsetWidth+"px"},this.root.moveAnimations.css.entered={width:document.querySelector(".root").offsetWidth/2+"px"})),this.targetNode=null;else{var i=this.setInOrderSuccessorAnimations(e.right);i+=1e3,e.animations.visited.node.active=!1,e.animations.visited.node.delay=i,e.animations.visited.line.active=!1,e.animations.visited.line.delay=i,e.animations.removed.node.active=!1,e.animations.removed.node.delay=i,e.animations.removed.line.active=!1,e.animations.removed.line.delay=i,i+=1e3,e.animations.initial.node.active=!0,e.animations.initial.node.delay=i,e.animations.initial.line.active=!0,e.animations.initial.line.delay=i+500,i+=1e3,e.animations.success.node.active=!0,e.animations.success.node.delay=i+500,e.animations.success.line.active=!0,e.animations.success.line.delay=i,t=i}return t}},{key:"setMoveSubtreeCompleteAnimations",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4e3,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=t;return e&&(i?(e.animations.success.node.active=!0,e.animations.success.node.delay=t):(e.animations.success.node.active=!0,e.animations.success.node.delay=t,e.animations.success.line.active=!0,e.animations.success.line.delay=t),a=Math.max(this.setMoveSubtreeCompleteAnimations(e.left,t+300,!1),this.setMoveSubtreeCompleteAnimations(e.right,t+300,!1))),a}},{key:"setInOrderSuccessorAnimations",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150;return e.animations.visited.node.active=!0,e.animations.visited.node.delay=t+500,e.animations.visited.line.active=!0,e.animations.visited.line.delay=t,e.left?this.setInOrderSuccessorAnimations(e.left,t+1e3):(e.animations.success.node.active=!0,e.animations.success.node.delay=t+1500,e.animations.success.line.active=!0,e.animations.success.line.delay=t+1e3,document.querySelector('.node-wrapper[node-value="'+this.targetValue+'"]>.node-value .node-value-text').textContent=e.value,this.targetNode=e,this.targetValue=e.value,t+1500)}}],[{key:"getDerivedStateFromProps",value:function(e,t){if("Destroy"===e.operation)return{operation:"Reset",step:0,destroy:!0};if("Initial"!==e.operation){if("Initial"===t.operation)return{operation:e.operation,tooltips:e.tooltips};if(e.tooltips!==t.tooltips)return{tooltips:e.tooltips}}else if(e.tooltips!==t.tooltips)return{tooltips:e.tooltips};return null}}]),t}(n.a.Component),w=(i(27),function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(m.a)(t).call(this,e))).initialStateOperation="Initial",i.state={tree:"BST",menu_key:"BST",operation:i.initialStateOperation,tooltips:!1,key:null},i.performOperation=i.performOperation.bind(Object(u.a)(i)),i.toggleTooltips=i.toggleTooltips.bind(Object(u.a)(i)),i.changeTree=i.changeTree.bind(Object(u.a)(i)),i}return Object(v.a)(t,e),Object(l.a)(t,[{key:"performOperation",value:function(e){this.setState({operation:e})}},{key:"toggleTooltips",value:function(){this.setState({tooltips:!this.state.tooltips})}},{key:"changeTree",value:function(e){var t=this,i=(new Date).getTime();this.setState({operation:"Destroy",menu_key:e,key:i}),setTimeout((function(){t.state.key===i&&t.setState({tree:e})}),1500)}},{key:"Tree",value:function(){return n.a.createElement(n.a.Fragment,null,"BST"===this.state.tree?n.a.createElement(E,{operation:this.state.operation,tooltips:this.state.tooltips}):null)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{visualizer:this}),this.Tree())}},{key:"componentDidUpdate",value:function(){this.state.operation!==this.initialStateOperation&&this.setState({operation:this.initialStateOperation})}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.078666ff.chunk.js.map