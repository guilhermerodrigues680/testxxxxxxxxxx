(function(t){function e(e){for(var o,r,a=e[0],c=e[1],l=e[2],C=0,d=[];C<a.length;C++)r=a[C],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},s={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1614:function(t,e,n){},1837:function(t,e,n){t.exports=n.p+"img/neuco-smart-parking-preview.2e6d8c83.jpg"},1854:function(t,e,n){},"25a3":function(t,e,n){},2795:function(t,e,n){"use strict";n("7b01")},"2f20":function(t,e,n){"use strict";n("1614")},"4aa2":function(t,e,n){},"4f6d":function(t,e,n){t.exports=n.p+"img/neuco-white-logo.e877615d.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("LandingPage")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"landing-page"},[n("Header"),n("HeroSection"),n("AboutUsSection",{attrs:{id:"15dfb042-about-us-section"}}),n("SolutionsSection",{attrs:{id:"15dfb042-solution-section"}}),n("OurStepsSection",{attrs:{id:"15dfb042-our-steps-section"}}),n("HireUsSection",{attrs:{id:"15dfb042-hire-us-section"}}),n("Footer")],1)},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{class:{"header--scrolled":t.scrolledThePage}},[o("div",{staticClass:"header-container"},[o("div",{staticClass:"logo"},[o("img",{attrs:{src:n("4f6d"),alt:"logo"}})]),o("div",{staticClass:"nav"},[o("Nav")],1)])])},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.menuIsVisible,expression:"menuIsVisible"}],staticClass:"toggler",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.menuIsVisible)?t._i(t.menuIsVisible,null)>-1:t.menuIsVisible},on:{change:function(e){var n=t.menuIsVisible,o=e.target,s=!!o.checked;if(Array.isArray(n)){var i=null,r=t._i(n,i);o.checked?r<0&&(t.menuIsVisible=n.concat([i])):r>-1&&(t.menuIsVisible=n.slice(0,r).concat(n.slice(r+1)))}else t.menuIsVisible=s}}}),t._m(0),n("div",{staticClass:"menu",on:{click:function(e){return t.closeMenu()}}},[n("NavLinks",{on:{"link-click":function(e){return t.closeMenu()}}})],1)])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"hamburger"},[n("span")])}],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{on:{click:function(e){return e.stopPropagation(),t.scrollBehaviorToId("15dfb042-home")}}},[t._v("Home")]),n("li",{on:{click:function(e){return e.stopPropagation(),t.scrollBehaviorToId("15dfb042-about-us-section")}}},[t._v("Sobre")]),n("li",{on:{click:function(e){return e.stopPropagation(),t.scrollBehaviorToId("15dfb042-solution-section")}}},[t._v("Soluções")]),n("li",{on:{click:function(e){return e.stopPropagation(),t.scrollBehaviorToId("15dfb042-our-steps-section")}}},[t._v("Nossos Passos")]),n("li",{on:{click:function(e){return e.stopPropagation(),t.scrollBehaviorToId("15dfb042-hire-us-section")}}},[t._v("Contrate-nos")])])},p=[];function f(t){var e=document.getElementById(t);if(!e)throw new Error('Não foi encontrado um elemento com id "'.concat(t,'"'));e.scrollIntoView({behavior:"smooth"})}var h={scrollBehaviorToId:f},v={name:"NavLinks",methods:{emitLinkClick:function(t){this.$emit("link-click",t)},scrollBehaviorToId:function(t){this.emitLinkClick(t),h.scrollBehaviorToId(t)}}},m=v,b=n("2877"),L=Object(b["a"])(m,d,p,!1,null,null,null),g=L.exports,_={name:"Nav",components:{NavLinks:g},data:function(){return{menuIsVisible:!1}},watch:{menuIsVisible:function(t){t?document.documentElement.classList.add("noscroll"):document.documentElement.classList.remove("noscroll")}},methods:{closeMenu:function(){this.menuIsVisible=!1}}},w=_,V=(n("d8af"),Object(b["a"])(w,u,C,!1,null,"3f2a1b1b",null)),x=V.exports,M=n("0f32"),H=n.n(M),y={name:"Header",components:{Nav:x},data:function(){return{scrolledThePage:!1,throttled:null}},created:function(){this.throttled=H()(this.handleScroll,250),document.addEventListener("scroll",this.throttled)},beforeDestroy:function(){document.removeEventListener("scroll",this.throttled)},methods:{handleScroll:function(){this.scrolledThePage=document.documentElement.scrollTop>=16}}},k=y,S=(n("ed41"),Object(b["a"])(k,c,l,!1,null,"6b282ba8",null)),Z=S.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"hero",attrs:{id:"15dfb042-home"}},[o("div",{staticClass:"hero-container"},[o("div",{staticClass:"hero-image-container"},[o("img",{attrs:{src:n("c21e"),alt:"cérebro dentro de varios círculos"}})]),o("div",{staticClass:"hero-text"},[o("h1",[t._v("Nós construímos software para o seu negócio.")]),o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien neque, accumsan ac lobortis nec.")]),o("div",{staticClass:"button-container"},[o("button",{staticClass:"btn btn--secondary-outline btn--hover-shadow btn--block btn-md--default",on:{click:function(e){return t.goToAboutUsSection()}}},[t._v("Saber mais")]),o("button",{staticClass:"btn bg-secondary text-white btn--hover-shadow btn--block btn-md--default",on:{click:function(e){return t.goToHireUsSection()}}},[t._v("Contrate-nos")])])])])])},I=[],O={name:"HeroSection",methods:{goToHireUsSection:function(){h.scrollBehaviorToId("15dfb042-hire-us-section")},goToAboutUsSection:function(){h.scrollBehaviorToId("15dfb042-about-us-section")}}},P=O,T=(n("b505"),Object(b["a"])(P,E,I,!1,null,"59d7ccf1",null)),j=T.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"about-container"},[t._m(0),o("VideoPreview",{attrs:{dark:"",videoThumbnail:n("69f2"),videoThumbnailAlt:"logo NEUCO"}})],1)])},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-text"},[n("hr",{staticClass:"short-hr-line short-hr-line--center bg-primary"}),n("h2",{staticClass:"title-h2 text-secondary"},[t._v("Sobre a NEUCO")]),n("h1",{staticClass:"title-h1 text-primary"},[t._v("Quem somos nós")]),n("p",{staticClass:"title-description"},[t._v("A Neuco é uma empresa especializada em inteligência artificial que acredita no trabalho em conjunto entre pessoas e robôs. "),n("span",[t._v("Assista o vídeo abaixo e entenda nossa visão e missão")]),t._v(".")])])}],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-preview",class:{"video-preview--light":!t.dark,"video-preview--dark":t.dark}},[n("div",{staticClass:"play-icon",class:{"play-icon--light":!t.dark,"play-icon--dark":t.dark}},[n("svg",{attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z"}})])]),n("img",{attrs:{src:t.videoThumbnail,alt:t.videoThumbnailAlt}})])},B=[],U={name:"VideoPreview",props:{videoThumbnail:String,videoThumbnailAlt:String,dark:Boolean}},F=U,q=(n("75b6"),Object(b["a"])(F,$,B,!1,null,"752fa091",null)),D=q.exports,G={name:"AboutUsSection",components:{VideoPreview:D}},z=G,J=(n("d14d"),Object(b["a"])(z,N,A,!1,null,"82565720",null)),Q=J.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"section-wrapper"},[t._m(0),o("VideoPreview",{attrs:{videoThumbnail:n("1837"),videoThumbnailAlt:"logo NEUCO"}})],1)])},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"solution-text"},[n("hr",{staticClass:"short-hr-line bg-secondary"}),n("h2",{staticClass:"title-h2 text-white"},[t._v("Nossas Soluções")]),n("h1",{staticClass:"title-h1 text-secondary"},[t._v("Neuco Smart Parking")]),n("p",{staticClass:"title-description text-white"},[t._v("Solução de Automação para Gestão e Controle de Estacionamentos.")])])}],K={name:"SolutionsSection",components:{VideoPreview:D}},W=K,X=(n("2f20"),Object(b["a"])(W,R,Y,!1,null,"6bf1ee6e",null)),tt=X.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"section-wrapper"},[t._m(0),n("div",{staticClass:"step-icon-container-wrapper"},[n("StepIconContainer",{staticClass:"step-icon-container"})],1)])])},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-container"},[n("hr",{staticClass:"short-hr-line short-hr-line--center bg-primary"}),n("h2",{staticClass:"title-h2 text-secondary"},[t._v("Nossos Passos")]),n("h1",{staticClass:"title-h1 text-primary"},[t._v("Conheça o ciclo de um projeto da NEUCO")])])}],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"steps-container",class:{"steps-container-in-viewport":t.elementInViewport}},[n("div",{staticClass:"card"},[n("div",{staticClass:"icon-shape"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})])]),n("h4",[t._v("Pesquisa")]),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien neque, accumsan ac lobortis nec.")])]),n("div",{staticClass:"card"},[n("div",{staticClass:"icon-shape"},[n("svg",{attrs:{viewBox:"0 0 981 622",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M151.46 15.41C105.86 95.32 1.81002 281.96 1.04002 285.21C0.460022 288.66 5.64002 292.49 37.06 311.85C59.29 325.26 75.58 334.08 77.88 333.69C80.75 333.31 100.49 299.77 161.04 192.27C204.54 114.85 239.99 50.09 239.8 48.75C239.23 45.68 166.79 0.649971 162.58 0.649971C161.24 0.659971 156.25 7.35998 151.46 15.41Z",fill:"currentColor"}}),n("path",{attrs:{d:"M779.6 23.46C751.05 41.09 743.19 46.84 743.38 49.9C743.57 55.07 899.36 331.97 903.19 334.07C906.83 335.99 979.26 292.68 980.99 287.51C982.52 282.53 824.24 1.80002 819.45 1.23002C817.54 1.04002 799.72 11 779.6 23.46Z",fill:"currentColor"}}),n("path",{attrs:{d:"M481.05 79.41C451.16 81.9 420.5 86.88 404.59 91.87C392.71 95.7 388.69 98 383.32 104.13C372.4 116.97 327.56 180.59 314.91 201.28C303.6 219.68 302.84 221.78 302.65 232.9C302.46 244.21 302.65 244.97 308.02 247.46C314.92 250.91 337.15 248.04 353.05 241.52C375.85 232.32 404.98 207.99 420.31 184.99L427.02 175.03L450.78 167.36C463.81 163.14 476.27 159.7 478.37 159.7C485.08 159.7 565.75 203.2 610.01 230.79C652.93 257.43 731.11 313.19 775.57 349.02L798.18 367.42L806.23 363.01C818.88 355.73 832.1 345 849.35 327.75L865.44 311.46L804.5 203.58C771.16 144.18 743.18 94.93 742.42 93.97C741.65 93.2 733.8 94.54 724.98 96.65C703.33 102.21 685.51 100.87 642.58 91.09C592.95 79.59 573.6 77.29 534.12 77.48C515.16 77.69 491.4 78.46 481.05 79.41Z",fill:"currentColor"}}),n("path",{attrs:{d:"M176.56 205.88L113.91 317.22L123.87 328.9C129.43 335.42 138.05 346.15 143.22 352.66C148.39 359.37 152.8 364.73 153.18 364.73C153.56 364.73 157.78 361.86 162.38 358.21C188.06 338.67 225.42 349.4 241.52 380.82L246.12 390.02L254.74 378.33C265.85 363.19 277.16 357.06 294.4 357.06C324.87 357.06 349.78 381.97 350.16 413.01L350.35 426.04H357.44C368.36 426.04 387.33 436.77 395.76 448.08C404.19 459 409.56 474.72 408.41 485.45L407.84 492.73L416.46 494.07C436.01 496.94 452.87 508.82 461.68 526.26C470.88 544.27 470.11 563.63 459.38 579.53C455.74 585.09 453.44 590.07 454.21 590.84C454.98 591.61 461.3 594.1 468.2 596.4C513.61 610.96 550.98 614.22 569.18 605.21C578.95 600.23 597.35 582.79 596.2 579.34C595.82 578.19 574.16 567.08 547.72 554.24C521.47 541.4 499.24 530.09 498.47 528.75C495.6 524.34 496.94 518.02 501.73 514.95C506.33 511.88 507.67 512.46 558.64 537.18C613.83 564.01 620.15 566.11 639.7 563.24C651.77 561.32 660.78 553.08 664.61 540.44C669.98 522.43 673.81 525.88 606.74 487.17C573.21 467.82 544.27 450.38 542.55 448.46C540.63 446.73 539.1 443.86 539.1 442.33C539.1 437.92 546.77 431.41 550.6 432.37C552.52 432.95 582.6 449.81 617.48 469.93C680.14 506.14 680.72 506.53 692.02 506.53C706.39 506.53 714.63 503.66 722.68 496.18C730.15 489.28 733.22 480.28 732.26 467.63L731.69 458.24L658.87 414.36C618.82 390.21 584.9 368.75 583.37 366.65C581.26 363.59 581.26 361.67 582.8 358.03C587.21 348.45 592.19 350.75 674.59 400.38L752.77 447.33L767.14 446.76C778.45 446.38 782.85 445.23 787.83 441.78C802.01 431.43 806.03 410.16 796.26 395.6C789.94 386.21 766.94 367.05 716.35 329.3C634.54 268.16 575.14 230.41 495.42 189.4L477.6 180.2L459.78 185.57L441.77 190.94L428.74 207.23C396.74 247.09 352.67 270.66 313.77 268.55C298.82 267.78 293.08 265.1 285.41 254.75C282.15 250.53 281.39 246.89 281.58 235.78C281.77 215.47 289.05 201.1 323.93 151.47C332.74 139.01 339.83 128.09 339.83 127.52C339.83 126.75 329.29 124.45 316.45 122.54C285.79 117.94 271.04 113.34 253.98 102.99C246.32 98.39 239.8 94.56 239.61 94.56C239.42 94.55 211.06 144.56 176.56 205.88Z",fill:"currentColor"}}),n("path",{attrs:{d:"M178.48 371.44C171.97 375.08 148.4 407.27 145.9 415.7C141.11 433.52 157.01 455.75 177.33 459.39C189.79 461.69 196.3 457.09 212.4 435.63C225.62 417.62 226.77 415.51 226.77 406.89C226.77 395.01 224.28 388.3 216.61 380.25C205.88 368.95 189.98 365.31 178.48 371.44Z",fill:"currentColor"}}),n("path",{attrs:{d:"M283.11 378.92C278.89 380.84 267.4 395.02 243.06 428.17C224.28 453.66 207.8 476.84 206.46 479.53C197.07 497.54 214.32 525.14 236.16 527.24C252.64 528.77 254.94 526.66 283.68 487.57C332.16 421.65 330.24 424.91 330.24 414.75C330.25 390.03 303.42 369.53 283.11 378.92Z",fill:"currentColor"}}),n("path",{attrs:{d:"M340.78 448.09C335.22 450.96 284.25 518.03 279.08 529.34C270.46 548.31 287.13 574.95 308.97 577.05C325.07 578.58 327.56 576.48 353.81 540.45C388.88 492.16 387.73 494.08 387.73 482.77C387.73 470.51 381.98 459.77 371.44 452.49C361.86 445.79 348.83 443.88 340.78 448.09Z",fill:"currentColor"}}),n("path",{attrs:{d:"M398.65 517.65C391.75 521.87 357.64 568.62 354.96 577.44C350.74 591.24 360.52 609.63 376.42 617.87C385.43 622.47 394.62 622.47 402.48 618.06C409.95 614.03 444.44 568.05 447.32 558.27C450.19 548.69 446.74 537 437.93 527.23C426.44 514.39 410.15 510.37 398.65 517.65Z",fill:"currentColor"}})])]),n("h4",[t._v("Proposta e Contrato")]),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien neque, accumsan ac lobortis nec.")])]),n("div",{staticClass:"card"},[n("div",{staticClass:"icon-shape"},[n("svg",{attrs:{width:"123",height:"102",viewBox:"0 0 123 102",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.34 0H119.54C121.38 0 122.88 1.5 122.88 3.34V80.32C122.88 82.16 121.38 83.66 119.54 83.66H3.34C1.5 83.66 0 82.16 0 80.32V3.34C0 1.5 1.5 0 3.34 0ZM91.58 27.97L102.08 28C102.07 30.8 100.94 33.48 98.95 35.45C98.48 35.91 97.96 36.33 97.41 36.7L91.58 27.97ZM31.13 19.72H34.33C34.5 19.72 34.64 19.86 34.64 20.03V31.43C34.64 31.6 34.5 31.74 34.33 31.74H31.13C30.96 31.74 30.82 31.6 30.82 31.43V20.03C30.82 19.86 30.96 19.72 31.13 19.72ZM16.65 15.87H19.85C20.02 15.87 20.16 16.01 20.16 16.18V31.44C20.16 31.61 20.02 31.75 19.85 31.75H16.65C16.48 31.75 16.34 31.61 16.34 31.44V16.18C16.34 16.01 16.48 15.87 16.65 15.87ZM23.89 13.7H27.09C27.26 13.7 27.4 13.84 27.4 14.01V31.44C27.4 31.61 27.26 31.75 27.09 31.75H23.89C23.72 31.75 23.58 31.61 23.58 31.44V14.01C23.58 13.84 23.72 13.7 23.89 13.7ZM16.84 61.37C16.14 61.37 15.58 60.8 15.58 60.09C15.58 59.39 16.15 58.81 16.84 58.81H106.25C106.95 58.81 107.51 59.38 107.51 60.09C107.51 60.79 106.94 61.37 106.25 61.37H16.84ZM16.63 52.07C15.93 52.07 15.37 51.5 15.37 50.79C15.37 50.09 15.94 49.51 16.63 49.51H52.48C53.18 49.51 53.74 50.08 53.74 50.79C53.74 51.49 53.17 52.07 52.48 52.07H16.63ZM57.4 52.07C56.7 52.07 56.14 51.5 56.14 50.79C56.14 50.09 56.71 49.51 57.4 49.51H106.25C106.95 49.51 107.51 50.08 107.51 50.79C107.51 51.49 106.94 52.07 106.25 52.07H57.4ZM16.63 43.76C15.93 43.76 15.37 43.19 15.37 42.48C15.37 41.78 15.94 41.2 16.63 41.2H70.79C71.49 41.2 72.05 41.77 72.05 42.48C72.05 43.18 71.48 43.76 70.79 43.76H16.63ZM90.5 25.88L89.94 14.65C89.93 14.43 90.1 14.24 90.32 14.23C90.38 14.23 90.46 14.22 90.55 14.22C90.62 14.22 90.7 14.22 90.78 14.22C93.86 14.19 96.7 15.35 98.81 17.3C100.93 19.25 102.32 21.97 102.54 25.05C102.56 25.27 102.39 25.46 102.17 25.48L90.94 26.28C90.72 26.3 90.53 26.13 90.51 25.91C90.5 25.9 90.5 25.89 90.5 25.88ZM90.76 15.02L91.28 25.45L101.7 24.71C101.41 22.01 100.14 19.62 98.26 17.9C96.29 16.09 93.65 15 90.78 15.03L90.76 15.02ZM89.24 27.48L94.87 37.23C93.16 38.22 91.22 38.74 89.24 38.74C83.02 38.74 77.98 33.7 77.98 27.48C77.98 21.89 82.08 17.15 87.61 16.34L89.24 27.48ZM46.29 88.27H76.59C76.67 93.51 78.83 98.21 84.68 101.9H38.2C42.88 98.51 46.31 94.39 46.29 88.27ZM10.05 6.29H112.84C114.47 6.29 115.79 7.62 115.79 9.24V66.76C115.79 68.38 114.46 69.71 112.84 69.71H10.05C8.43 69.71 7.1 68.38 7.1 66.76V9.24C7.09 7.62 8.42 6.29 10.05 6.29Z",fill:"currentColor"}})])]),n("h4",[t._v("UI Design")]),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien neque, accumsan ac lobortis nec.")])]),n("div",{staticClass:"card"},[n("div",{staticClass:"icon-shape"},[n("svg",{attrs:{viewBox:"0 0 123 102",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.34 0H119.54C121.38 0 122.88 1.5 122.88 3.34V80.32C122.88 82.16 121.38 83.66 119.54 83.66H3.34C1.5 83.66 0 82.16 0 80.32V3.34C0 1.5 1.5 0 3.34 0ZM81.7 67.73L65.64 58V51.83L81.7 42.1V49.43L71.94 54.93L81.7 60.43V67.73ZM91.67 67.73L107.73 58V51.83L91.67 42.1V49.43L101.43 54.93L91.67 60.43V67.73ZM38.64 43.98L42.47 47.81C43.48 48.82 43.48 50.47 42.47 51.47L39.39 54.55C40.24 56.14 40.89 57.85 41.3 59.65H45.29C46.71 59.65 47.88 60.82 47.88 62.24V67.65C47.88 69.07 46.71 70.24 45.29 70.24H40.93C40.54 71.52 40.04 72.74 39.42 73.9H114.93C116.55 73.9 117.88 72.57 117.88 70.95V8.19C117.88 6.57 116.56 5.24 114.93 5.24H7.96C6.33 5.24 5 6.57 5.01 8.19V42.8C6.02 42.01 7.51 42.07 8.43 43.01L11.51 46.09C13.1 45.24 14.81 44.59 16.61 44.18V40.19C16.61 38.77 17.78 37.61 19.2 37.61H24.61C26.03 37.61 27.2 38.78 27.2 40.2V44.55C28.96 45.09 30.63 45.85 32.15 46.81L34.97 43.98C35.99 42.97 37.63 42.97 38.64 43.98ZM21.22 52.3C27.82 52.3 33.17 57.65 33.17 64.26C33.17 68.22 31.25 71.73 28.28 73.9H14.16C11.19 71.73 9.27 68.22 9.27 64.26C9.27 57.65 14.62 52.3 21.22 52.3ZM13.65 24.25H21.32C21.91 24.25 22.39 24.75 22.39 25.32V27.5C22.39 28.08 21.89 28.57 21.32 28.57H13.65C13.07 28.57 12.58 28.09 12.58 27.5V25.32C12.57 24.73 13.05 24.25 13.65 24.25ZM26.35 13.12H56.03C56.62 13.12 57.1 13.61 57.1 14.19V16.37C57.1 16.96 56.61 17.44 56.03 17.44H26.35C25.76 17.44 25.28 16.96 25.28 16.37V14.19C25.28 13.6 25.76 13.12 26.35 13.12ZM13.65 13.12H21.32C21.91 13.12 22.39 13.6 22.39 14.19V16.37C22.39 16.96 21.91 17.44 21.32 17.44H13.65C13.06 17.44 12.58 16.96 12.58 16.37V14.19C12.57 13.6 13.05 13.12 13.65 13.12ZM38.36 24.25H87.61C88.2 24.25 88.68 24.75 88.68 25.32V27.5C88.68 28.07 88.18 28.57 87.61 28.57H38.36C37.78 28.57 37.29 28.09 37.29 27.5V25.32C37.29 24.73 37.77 24.25 38.36 24.25ZM26.21 24.25H33.88C34.47 24.25 34.95 24.75 34.95 25.32V27.5C34.95 28.08 34.45 28.57 33.88 28.57H26.21C25.63 28.57 25.14 28.09 25.14 27.5V25.32C25.13 24.73 25.62 24.25 26.21 24.25ZM46.29 88.27H76.59C76.67 93.51 78.83 98.2 84.68 101.9H38.2C42.88 98.51 46.31 94.39 46.29 88.27Z",fill:"currentColor"}})])]),n("h4",[t._v("Desenvolvimento")]),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien neque, accumsan ac lobortis nec.")])]),n("div",{staticClass:"card"},[n("div",{staticClass:"icon-shape"},[n("svg",{attrs:{viewBox:"0 0 440 374",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M439.9 78.7111C439.526 76.5691 438.114 74.7531 436.13 73.8611L274.576 1.14706C272.224 0.0870596 269.467 0.505059 267.536 2.21706L220 44.2931L172.464 2.21706C170.534 0.506059 167.776 0.0870596 165.425 1.14706L3.86899 73.8611C1.88699 74.7531 0.473994 76.5691 0.0989944 78.7111C-0.276006 80.8511 0.432994 83.0391 1.99299 84.5531L53.026 134.055L24.252 184.861C22.471 188.007 23.569 192.001 26.709 193.792L54.673 209.752V275.023C54.673 277.365 55.921 279.53 57.947 280.701L216.715 372.551C217.732 373.138 218.865 373.433 220.001 373.433C221.084 373.433 222.166 373.158 223.147 372.621C223.145 372.625 223.139 372.631 223.138 372.635L382.053 280.702C384.079 279.531 385.327 277.366 385.327 275.024V209.753L413.293 193.793C416.433 192.002 417.53 188.008 415.748 184.862L386.976 134.056L438.007 84.5541C439.567 83.0391 440.277 80.8511 439.9 78.7111ZM278.612 180.567L226.56 150.416V63.6971L364.689 133.141L278.612 180.567ZM75.311 133.142L213.442 63.6971V150.416L161.388 180.567L75.311 133.142ZM18.063 81.8611L166.942 14.8531L208.396 51.5441L62.453 124.918L18.063 81.8611ZM38.892 185.639L63.746 141.752L210.156 222.417L177.673 264.844L38.892 185.639ZM213.44 355.497L67.793 271.239V217.241L176.146 279.08C177.167 279.663 178.285 279.943 179.394 279.943C181.377 279.943 183.326 279.043 184.608 277.37L213.441 239.711L213.44 355.497ZM220 212.861L174.804 187.96L220 161.78L265.196 187.96L220 212.861ZM372.206 271.239L226.56 355.497V239.71L255.393 277.369C256.673 279.042 258.622 279.942 260.607 279.942C261.713 279.942 262.834 279.662 263.855 279.079L372.206 217.24V271.239ZM401.109 185.639L262.328 264.843L229.844 222.416L376.255 141.751L401.109 185.639ZM377.548 124.918L231.604 51.5441L273.056 14.8531L421.937 81.8611L377.548 124.918Z",fill:"currentColor"}})])]),n("h4",[t._v("Produto")]),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien neque, accumsan ac lobortis nec.")])])])},st=[],it={name:"StepIconContainer",data:function(){return{elementInViewport:!1,throttled:null}},created:function(){this.throttled=H()(this.handleScroll,250),document.addEventListener("scroll",this.throttled)},beforeDestroy:function(){document.removeEventListener("scroll",this.throttled)},methods:{handleScroll:function(){var t=window.innerHeight,e=this.$el.getBoundingClientRect().top,n=150;this.elementInViewport=e<t-n}}},rt=it,at=(n("f80c"),Object(b["a"])(rt,ot,st,!1,null,"8154dcb6",null)),ct=at.exports,lt={name:"OurStepsSection",components:{StepIconContainer:ct}},ut=lt,Ct=(n("2795"),Object(b["a"])(ut,et,nt,!1,null,"05457ff4",null)),dt=Ct.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"section-wrapper"},[t._m(0),n("form",{staticClass:"contact-form",on:{submit:function(t){return t.preventDefault(),function(){}.apply(null,arguments)}}},[n("input",{attrs:{type:"text",placeholder:"Nome"}}),n("input",{attrs:{type:"text",placeholder:"E-mail"}}),n("input",{attrs:{type:"text",placeholder:"Assunto"}}),n("textarea",{attrs:{placeholder:"Mensagem"}}),n("input",{staticClass:"btn btn--block btn--hover-tertiary bg-secondary text-white",attrs:{type:"submit",value:"Enviar"}})])])])},ft=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-text"},[n("hr",{staticClass:"short-hr-line short-hr-line--center bg-secondary"}),n("h2",{staticClass:"title-h2 text-white"},[t._v("Fale Conosco / Contato / Contrate-nos")]),n("h1",{staticClass:"title-h1 text-secondary"},[t._v("Gostaríamos muito de lhe conhecer")]),n("p",{staticClass:"title-description text-white"},[t._v("Gostaríamos muito de lhe conhecer e possivelmente estabelecermos uma parceria! Então, entre em contato conosco que faremos tudo para lhe entregar a melhor solução!")])])}],ht={name:"HireUsSection"},vt=ht,mt=(n("bdfb"),Object(b["a"])(vt,pt,ft,!1,null,"5c175e54",null)),bt=mt.exports,Lt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("div",{staticClass:"footer-wrapper"},[o("div",{staticClass:"logo"},[o("img",{attrs:{src:n("4f6d"),alt:"logo"}})]),o("div",{staticClass:"nav"},[o("NavLinks")],1),o("p",{staticClass:"copyright-text"},[t._v(t._s("Copyright© "+(new Date).getFullYear()+" Neuco Neural Corporation. Todos os direitos reservados."))])])])},gt=[],_t={name:"Footer",components:{NavLinks:g}},wt=_t,Vt=(n("a77d"),Object(b["a"])(wt,Lt,gt,!1,null,"59239112",null)),xt=Vt.exports,Mt={name:"LandingPage",components:{Header:Z,HeroSection:j,AboutUsSection:Q,SolutionsSection:tt,OurStepsSection:dt,HireUsSection:bt,Footer:xt}},Ht=Mt,yt=(n("c7e2"),Object(b["a"])(Ht,r,a,!1,null,"20ad3995",null)),kt=yt.exports,St={name:"App",components:{LandingPage:kt}},Zt=St,Et=Object(b["a"])(Zt,s,i,!1,null,null,null),It=Et.exports,Ot=n("7707"),Pt=n.n(Ot);n("f95d");o["a"].config.productionTip=!1,Pt.a.polyfill(),document.body.addEventListener("touchstart",(function(){}),!1),new o["a"]({render:function(t){return t(It)}}).$mount("#app")},"69f2":function(t,e,n){t.exports=n.p+"img/neuco-black-logo.db12e124.svg"},"6afa":function(t,e,n){},"75b6":function(t,e,n){"use strict";n("6afa")},"7b01":function(t,e,n){},"8adb":function(t,e,n){},a77d:function(t,e,n){"use strict";n("1854")},b505:function(t,e,n){"use strict";n("4aa2")},b5fc:function(t,e,n){},b6d2:function(t,e,n){},bdfb:function(t,e,n){"use strict";n("b6d2")},c21e:function(t,e,n){t.exports=n.p+"img/brain-within-several-circles.033ac5fa.svg"},c7e2:function(t,e,n){"use strict";n("f8f2")},d14d:function(t,e,n){"use strict";n("b5fc")},d8af:function(t,e,n){"use strict";n("25a3")},ed41:function(t,e,n){"use strict";n("f66f")},f66f:function(t,e,n){},f80c:function(t,e,n){"use strict";n("8adb")},f8f2:function(t,e,n){},f95d:function(t,e,n){}});
//# sourceMappingURL=app.53327bde.js.map