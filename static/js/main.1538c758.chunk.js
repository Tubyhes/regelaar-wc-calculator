(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,a,t){e.exports=t(75)},61:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),o=t.n(r),i=(t(61),t(122)),c=t(123),m=t(119),s=t(54),u=t(33),h=t(22),d=t(45),p=t(34),E=t(16),w=t(46),b=t(118),g=t(76),v=t(124),_=t(120),f=t(125),C=t(121),k=t(112),M=t(117),j=t(116),y=t(114),O=t(115),x=function(e){function a(){return Object(u.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement(k.a,{size:"small"},l.a.createElement(y.a,null,l.a.createElement(O.a,null,l.a.createElement(j.a,null),l.a.createElement(j.a,{colspan:3},"Man"),l.a.createElement(j.a,{colspan:1},"Vrouw / GN"),l.a.createElement(j.a,{colspan:2},"Wasbak")),l.a.createElement(O.a,null,l.a.createElement(j.a,null),l.a.createElement(j.a,null,"WC"),l.a.createElement(j.a,null,"EN Urinoir"),l.a.createElement(j.a,null,"OF Plasgoot (meter)"),l.a.createElement(j.a,null,"WC"),l.a.createElement(j.a,null,"Man"),l.a.createElement(j.a,null,"Vrouw / GN"))),l.a.createElement(M.a,null,this.props.rows.map(function(e){return l.a.createElement(O.a,{key:e.method},l.a.createElement(j.a,null,e.name),l.a.createElement(j.a,null,e.men_wc),l.a.createElement(j.a,null,e.men_urinoir),l.a.createElement(j.a,null,e.men_plasgoot),l.a.createElement(j.a,null,e.women_wc),l.a.createElement(j.a,null,e.men_wasbak),l.a.createElement(j.a,null,e.women_wasbak))})))}}]),a}(l.a.Component),W=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={visitors:1e4,participants:10,personnel:50,female:50,duration:8,alcohol:!0},t.handlePeopleChange=t.handlePeopleChange.bind(Object(E.a)(t)),t.handleFemaleChange=t.handleFemaleChange.bind(Object(E.a)(t)),t.handleDurationChange=t.handleDurationChange.bind(Object(E.a)(t)),t.handleAlcoholChange=t.handleAlcoholChange.bind(Object(E.a)(t)),t}return Object(w.a)(a,e),Object(h.a)(a,[{key:"handlePeopleChange",value:function(e){isNaN(parseInt(e.target.value))||this.setState(Object(s.a)({},e.target.name,parseInt(e.target.value)))}},{key:"handleFemaleChange",value:function(e){var a=parseInt(e.target.value);!isNaN(a)&&a>=0&&a<=100&&this.setState({female:e.target.value})}},{key:"handleDurationChange",value:function(e){isNaN(parseInt(e.target.value))||this.setState({duration:parseInt(e.target.value)})}},{key:"handleAlcoholChange",value:function(e){this.setState({alcohol:e.target.checked})}},{key:"render",value:function(){var e=this.state.visitors+this.state.participants+this.state.personnel,a=e*(100-this.state.female)*.01,t=e*this.state.female*.01,n=(this.state.duration>=8?1:this.state.duration>=6?.8:this.state.duration>=4?.75:.7)*(this.state.alcohol?1:.5),r={};this.state.duration>=6&&this.state.alcohol?(r.wc_male=400,r.urinoir_male=100,r.wc_female=75):this.state.duration>=6?(r.wc_male=425,r.urinoir_male=125,r.wc_female=85):(r.wc_male=500,r.urinoir_male=150,r.wc_female=100);var o={name:"Australisch Model",men_wc:Math.round(a/500*n),men_urinoir:Math.round(a/500*3*n),men_plasgoot:Math.round(a/500*1.5*n),women_wc:Math.round(t/100*n),men_wasbak:Math.round(a/500*n),women_wasbak:Math.round(t/500*n)},i={name:"UK Model",men_wc:Math.round(a/r.wc_male),men_urinoir:Math.round(a/r.urinoir_male),men_plasgoot:Math.round(a/r.urinoir_male/2),women_wc:Math.round(t/r.wc_female),men_wasbak:Math.round(a/r.wc_male/10),women_wasbak:Math.round(t/r.wc_female/10)},c={name:"UK Kampeerterrein",men_wc:Math.round(a/150),men_urinoir:Math.round(a/250),men_plasgoot:Math.round(a/500),women_wc:Math.round(t/75),men_wasbak:Math.round(a/1500),women_wasbak:Math.round(t/750)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{container:!0,spacing:2},l.a.createElement(b.a,{item:!0,xs:12},l.a.createElement(g.a,{variant:"h5"},"Toilet Calculator ")),l.a.createElement(b.a,{item:!0,xs:12},l.a.createElement(v.a,{id:"visitors",name:"visitors",label:"Aantal Bezoekers",type:"number",fullWidth:!0,value:this.state.visitors,onChange:this.handlePeopleChange})),l.a.createElement(b.a,{item:!0,xs:12},l.a.createElement(v.a,{id:"participants",name:"participants",label:"Aantal Deelnemers",type:"number",fullWidth:!0,value:this.state.participants,onChange:this.handlePeopleChange})),l.a.createElement(b.a,{item:!0,xs:12},l.a.createElement(v.a,{id:"personnel",name:"personnel",label:"Aantal Personeel",type:"number",fullWidth:!0,value:this.state.personnel,onChange:this.handlePeopleChange})),l.a.createElement(b.a,{item:!0,xs:12},l.a.createElement(v.a,{label:"Totaal Mensen",fullWidth:!0,disabled:!0,value:e})),l.a.createElement(b.a,{item:!0,xs:6},l.a.createElement(v.a,{label:"% Vrouw / GN",type:"number",fullWidth:!0,value:this.state.female,onChange:this.handleFemaleChange})),l.a.createElement(b.a,{item:!0,xs:6},l.a.createElement(v.a,{label:"% Man",type:"number",fullWidth:!0,disabled:!0,value:100-this.state.female})),l.a.createElement(b.a,{item:!0,xs:12},l.a.createElement(v.a,{id:"duration",name:"duration",label:"Duur van Evenement (in uren)",type:"number",fullWidth:!0,value:this.state.duration,onChange:this.handleDurationChange})),l.a.createElement(b.a,{item:!0,xs:12},l.a.createElement(_.a,{control:l.a.createElement(f.a,{checked:this.state.alcohol,onChange:this.handleAlcoholChange,value:"checkedB",color:"primary"}),label:"Redelijk veel Drank"}))),l.a.createElement(C.a,{variant:"middle"}),l.a.createElement(b.a,{container:!0,spacing:2},l.a.createElement(b.a,{item:!0,xs:12},l.a.createElement(g.a,{variant:"h5"},"Uitkomst")),l.a.createElement(b.a,{item:!0,xs:12},l.a.createElement(x,{rows:[o,i,c]}))))}}]),a}(l.a.Component),N=Object(i.a)(function(e){return{root:{padding:e.spacing(3,2)}}});function A(){var e=N();return l.a.createElement(c.a,{maxWidth:"md"},l.a.createElement(m.a,{className:e.root},l.a.createElement(W,null)))}t(74);var P=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[56,1,2]]]);
//# sourceMappingURL=main.1538c758.chunk.js.map