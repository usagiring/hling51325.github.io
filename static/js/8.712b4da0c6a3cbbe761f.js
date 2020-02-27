webpackJsonp([8],{"0pP6":function(t,e,a){"use strict";function n(t){a("ia6D")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("Lg5j"),i=a("44st"),s=a("VU/8"),o=n,l=s(r.a,i.a,!1,o,"data-v-4566b12f",null);e.default=l.exports},"44st":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"font-size":"14px"},attrs:{id:"calculator"}},[a("div",{staticClass:"header"},[a("span",{staticClass:"label"},[t._v("计算公式: ")]),a("span",[t._v("技能伤害")]),t._v("*\n        (1-副本减伤+玩家造伤)*\n        暴击伤害*\n        (1+属性造伤)*\n        (1+武器增伤)*\n        (1+0.02*等级差)*\n        (1-防御减伤)*\n        (1-副本特减)*\n        (1-韧性+穿透)*\n        (1+属性增伤)*\n        (1+技能增伤)*\n        (1+武器属性对应)*\n        (1-怪物属性对应)*\n            "),a("Tooltip",{attrs:{content:"普通攻击没有浮动，最终伤害不计算浮动"}},[a("span",{staticClass:"tip"},[t._v("伤害浮动(0.9~1.1)")])])],1),t._v(" "),a("div",{staticClass:"header"},[a("span",{staticStyle:{color:"red","font-size":"16px"}},[t._v("最终伤害:")]),t._v(" "),a("span",{staticStyle:{color:"red","font-size":"16px"}},[t._v(t._s(t.damage))]),t._v(" "),a("span",{staticStyle:{"margin-left":"20px"}},[a("Button",{on:{click:t.setBaseDamage}},[t._v("设置基础值")]),t._v(" "),this.baseDamage?a("span",[a("Button",{on:{click:t.setTableData}},[t._v("对比")]),t._v(" "),a("span",{class:this.curRate>=0?"up":"down",staticStyle:{"margin-left":"10px"}},[t._v("\n              "+t._s(t.curRate)+"%\n               ")])],1):t._e()],1)]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"item-container"},[a("Tooltip",{attrs:{content:"技能面板伤害或者表伤",placement:"top"}},[a("span",{staticClass:"label tip"},[t._v("技能伤害:")])]),t._v(" "),a("InputNumber",{attrs:{min:0,step:1e4},model:{value:t.skillDamage,callback:function(e){t.skillDamage=e},expression:"skillDamage"}})],1),t._v(" "),a("div",{staticClass:"item-container"},[a("span",{staticClass:"label"},[t._v("副本减伤:")]),t._v(" "),a("InputNumber",{attrs:{formatter:function(t){return t+"%"},parser:function(t){return t.replace("%","")}},model:{value:t.normalReduction,callback:function(e){t.normalReduction=e},expression:"normalReduction"}}),t._v(" "),a("span",{staticClass:"label margin-left"},[t._v("玩家造伤:")]),t._v(" "),a("InputNumber",{attrs:{formatter:function(t){return t+"%"},parser:function(t){return t.replace("%","")}},model:{value:t.normalAdd,callback:function(e){t.normalAdd=e},expression:"normalAdd"}})],1),t._v(" "),a("div",{staticClass:"item-container"},[a("span",{staticClass:"label"},[t._v("暴击伤害:")]),t._v(" "),a("InputNumber",{attrs:{min:0,step:10,formatter:function(t){return t+"%"},parser:function(t){return t.replace("%","")}},model:{value:t.criticalDamage,callback:function(e){t.criticalDamage=e},expression:"criticalDamage"}})],1),t._v(" "),a("div",{staticClass:"item-container"},[a("Tooltip",{attrs:{content:"对XX属性造成XX%伤害",placement:"top"}},[a("span",{staticClass:"label tip"},[t._v("属性造伤:")])]),t._v(" "),a("InputNumber",{attrs:{min:0,formatter:function(t){return t+"%"},parser:function(t){return t.replace("%","")}},model:{value:t.elementAdd,callback:function(e){t.elementAdd=e},expression:"elementAdd"}})],1),t._v(" "),a("div",{staticClass:"item-container"},[a("Tooltip",{attrs:{content:"主武器伤害增加，来源：冒险之路、金武等",placement:"top"}},[a("span",{staticClass:"label tip"},[t._v("武器增伤:")])]),t._v(" "),a("InputNumber",{attrs:{min:0,formatter:function(t){return t+"%"},parser:function(t){return t.replace("%","")}},model:{value:t.armorAdd,callback:function(e){t.armorAdd=e},expression:"armorAdd"}})],1),t._v(" "),a("div",{staticClass:"item-container"},[a("Tooltip",{attrs:{content:"与怪物或者玩家的等级差",placement:"top"}},[a("span",{staticClass:"label tip"},[t._v("等级差:")])]),t._v(" "),a("InputNumber",{model:{value:t.levelDiff,callback:function(e){t.levelDiff=e},expression:"levelDiff"}})],1),t._v(" "),a("div",{staticClass:"item-container"},[a("Tooltip",{attrs:{placement:"top"}},[a("span",{staticClass:"label tip"},[t._v("副本特减:")]),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[t._v("副本特殊减伤")])])]),t._v(" "),a("InputNumber",{attrs:{min:0,formatter:function(t){return t+"%"},parser:function(t){return t.replace("%","")}},model:{value:t.extraReduction,callback:function(e){t.extraReduction=e},expression:"extraReduction"}})],1),t._v(" "),a("div",{staticClass:"item-container"},[a("Poptip",{attrs:{placement:"top-end"}},[a("span",{staticClass:"label second",staticStyle:{cursor:"pointer"}},[t._v("怪物防御:")]),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[t._v("计算公式： 防御值*(1-百分比破防)-定值破防)/系数")]),t._v(" "),a("p",[t._v("怪物防御到数据库查，系数一般取28000")]),t._v(" "),a("div",{staticClass:"item-container"},[a("span",{staticClass:"label"},[t._v("防御值:")]),t._v(" "),a("InputNumber",{attrs:{step:1e3,min:0},model:{value:t.def,callback:function(e){t.def=e},expression:"def"}})],1),t._v(" "),a("div",{staticClass:"item-container"},[a("span",{staticClass:"label"},[t._v("系数:")]),t._v(" "),a("InputNumber",{model:{value:t.defNumber,callback:function(e){t.defNumber=e},expression:"defNumber"}})],1),t._v(" "),a("div",{staticClass:"item-container"},[a("span",{staticClass:"label"},[t._v("百分比破防:")]),t._v(" "),a("InputNumber",{attrs:{step:5,min:0,max:50,formatter:function(t){return t+"%"},parser:function(t){return t.replace("%","")}},model:{value:t.defBrokenPer,callback:function(e){t.defBrokenPer=e},expression:"defBrokenPer"}})],1),t._v(" "),a("div",{staticClass:"item-container"},[a("span",{staticClass:"label"},[t._v("定值破防:")]),t._v(" "),a("InputNumber",{attrs:{step:100},model:{value:t.defBroken,callback:function(e){t.defBroken=e},expression:"defBroken"}})],1)])]),t._v(" "),a("InputNumber",{attrs:{formatter:function(t){return t+"%"},parser:function(t){return t.replace("%","")}},on:{change:t.defChange},model:{value:t.monsterDef,callback:function(e){t.monsterDef=e},expression:"monsterDef"}})],1),t._v(" "),a("div",{staticClass:"item-container"},[a("Tooltip",{attrs:{content:"XX属性的伤害提高",placement:"top"}},[a("span",{staticClass:"label tip"},[t._v("属性增伤:")])]),t._v(" "),a("InputNumber",{attrs:{formatter:function(t){return t+"%"},parser:function(t){return t.replace("%","")}},model:{value:t.elementPlus,callback:function(e){t.elementPlus=e},expression:"elementPlus"}})],1),t._v(" "),a("div",{staticClass:"item-container"},[a("Tooltip",{attrs:{content:"特定技能的伤害提高",placement:"top"}},[a("span",{staticClass:"label tip"},[t._v("技能增伤:")])]),t._v(" "),a("InputNumber",{attrs:{formatter:function(t){return t+"%"},parser:function(t){return t.replace("%","")}},model:{value:t.skillPlus,callback:function(e){t.skillPlus=e},expression:"skillPlus"}})],1),t._v(" "),a("div",{staticClass:"item-container"},[a("span",{staticClass:"label"},[t._v("韧性:")]),t._v(" "),a("InputNumber",{attrs:{formatter:function(t){return t+"%"},parser:function(t){return t.replace("%","")}},model:{value:t.tenacity,callback:function(e){t.tenacity=e},expression:"tenacity"}}),t._v(" "),a("Tooltip",{attrs:{content:"如果没有韧性，穿透不生效",placement:"top"}},[a("span",{staticClass:"label margin-left tip"},[t._v("穿透:")])]),t._v(" "),a("InputNumber",{attrs:{formatter:function(t){return t+"%"},parser:function(t){return t.replace("%","")}},model:{value:t.penetration,callback:function(e){t.penetration=e},expression:"penetration"}})],1),t._v(" "),a("div",{staticClass:"item-container"},[a("Tooltip",{attrs:{content:"武器属性增伤20%",placement:"top"}},[a("Checkbox",{staticClass:"tip",model:{value:t.armorAffect,callback:function(e){t.armorAffect=e},expression:"armorAffect"}},[t._v("武器属性对应")])],1)],1),t._v(" "),a("div",{staticClass:"item-container"},[a("Tooltip",{attrs:{content:"怪物属性减伤25%",placement:"top"}},[a("Checkbox",{staticClass:"tip",model:{value:t.monsterAffect,callback:function(e){t.monsterAffect=e},expression:"monsterAffect"}},[t._v("怪物属性对应")])],1)],1),t._v(" "),a("div",{staticStyle:{margin:"20px 0","border-top":"1px dashed #bbb"}}),t._v(" "),a("div",{staticClass:"item-container"},[a("div",{staticStyle:{display:"inline-block",width:"500px"}},[a("span",{staticStyle:{color:"red","font-size":"16px"}},[t._v("连击期望伤害:")]),t._v(" "),a("span",{staticStyle:{color:"red","font-size":"16px"}},[t._v(t._s(t.combooDamage))])]),t._v(" "),a("div",{staticStyle:{display:"inline-block"}},[a("span",{staticStyle:{color:"red","font-size":"16px"}},[t._v("最高伤害:")]),t._v(" "),a("span",{staticStyle:{color:"red","font-size":"16px"}},[t._v(t._s(t.topDamage))])])]),t._v(" "),a("div",{staticClass:"item-container"},[a("Table",{attrs:{columns:t.columns2,data:t.data2}}),t._v(" "),a("Button",{staticStyle:{width:"100%","margin-top":"2px"},attrs:{type:"ghost"},on:{click:t.addRow}},[a("Icon",{staticStyle:{"font-size":"16px"},attrs:{type:"plus-round"}})],1)],1)]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"item-container"},[t._v("基础值："+t._s(t.baseDamage))]),t._v(" "),a("Table",{attrs:{columns:t.columns1,data:t.data1}})],1)])},r=[],i={render:n,staticRenderFns:r};e.a=i},Lg5j:function(t,e,a){"use strict";e.a={name:"calculator",created:function(){},data:function(){function t(){for(var t=0;t<a.data2.length;t++){for(var e=1,n=0;n<t;n++)e+=a.data2[n].c*a.data2[n].p/100;var r=a.data2[t].c*a.data2[t].p/100/e;a.data2[t].rate=(100*r).toFixed(2)+"%"}}var e=this,a=this;return{skillDamage:1e5,normalReduction:60,normalAdd:60,criticalDamage:300,elementAdd:0,armorAdd:0,levelDiff:0,extraReduction:84,elementPlus:0,skillPlus:0,tenacity:0,penetration:0,armorAffect:!0,monsterAffect:!1,def:0,defNumber:28e3,defBrokenPer:0,defBroken:0,baseDamage:null,columns1:[{title:"伤害值",key:"damage"},{title:"收益率",key:"rate"},{title:"",key:"action",render:function(t,a){return t("Icon",{props:{type:"minus-round",size:"18",color:"gray"},style:{cursor:"pointer"},on:{click:function(){e.remove(a.index)}}})}}],data1:[],defTemp:75,columns2:[{title:"系数",key:"c",render:function(e,n){return e("InputNumber",{props:{min:0,step:.1,value:a.data2[n.index].c},on:{"on-change":function(e){var r=a.data2[n.index];r.c=e,r.oldRate=(r.c*r.p).toFixed(2)+"%",t()}}})}},{title:"概率",key:"p",render:function(e,n){return e("InputNumber",{props:{min:0,step:10,value:a.data2[n.index].p,formatter:function(t){return t+"%"},parser:function(t){return t.replace("%","")}},on:{"on-change":function(e){var r=a.data2[n.index];r.p=e,r.oldRate=(r.c*r.p).toFixed(2)+"%",t()}}})}},{title:"备注",key:"remark",render:function(t,e){return t("Input",{props:{value:a.data2[e.index].remark},on:{"on-blur":function(t){a.data2[e.index].remark=t.target.value}}})}},{title:"期望收益",key:"rate"},{title:"原收益",key:"oldRate"},{title:"",key:"action",render:function(t,a){return t("Icon",{props:{type:"minus-round",size:"18",color:"gray"},style:{cursor:"pointer"},on:{click:function(){e.removeData2(a.index)}}})}}],data2:[{c:1.1,p:10,remark:"狂热",rate:"11%",oldRate:"11%"}]}},methods:{setBaseDamage:function(){var t=this;this.baseDamage=this.damage,this.data1.forEach(function(e){e.rate=(100*(e.damage/t.baseDamage-1)).toFixed(2)})},setTableData:function(){var t={damage:this.damage,rate:this.curRate};this.data1.push(t)},remove:function(t){this.data1.splice(t,1)},removeData2:function(t){this.data2.splice(t,1)},defChange:function(t){console.log(t)},addRow:function(){var t={c:1,p:10,remark:""},e=this.data2.reduce(function(t,e){return t+e.c*e.p/100},1),a=t.c*t.p+"%",n=t.c*t.p/100/e;t.rate=(100*n).toFixed(2)+"%",t.oldRate=a,this.data2.push(t)}},computed:{damage:function(){return(Number(this.skillDamage)*(1-(Number(this.normalReduction)-Number(this.normalAdd))/100)*(Number(this.criticalDamage)/100)*(1+Number(this.elementAdd)/100)*(1+Number(this.armorAdd)/100)*(1+.02*Number(this.levelDiff))*(1-Number(this.extraReduction)/100)*(1-Number(this.monsterDef)/100)*(1+Number(this.elementPlus)/100)*(1+Number(this.skillPlus)/100)*(this.tenacity?1-(Number(this.tenacity)-Number(this.penetration))/100<=0?.01:1-(Number(this.tenacity)-Number(this.penetration))/100:1)*(this.armorAffect?1.2:1)*(this.monsterAffect?.75:1)).toFixed(2)},monsterDef:{get:function(){var t=this.defTemp;if(this.def){var e=(this.def*(1-this.defBrokenPer/100)-this.defBroken)/this.defNumber*100;e<75?t=e.toFixed(2):(this.defTemp=75,t=75)}return Number(t)},set:function(t){this.def=0,this.defTemp=t}},curRate:function(){return this.baseDamage&&this.damage?(100*(this.damage/this.baseDamage-1)).toFixed(2):0},combooDamage:function(){var t=this.data2.reduce(function(t,e){return t+e.c*e.p/100},1);return(this.damage*t).toFixed(2)},topDamage:function(){var t=this.data2.reduce(function(t,e){return t+e.c},1);return(this.damage*t).toFixed(2)}},components:{}}},ia6D:function(t,e,a){var n=a("wo62");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("5cb12c57",n,!0,{})},wo62:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,".tip[data-v-4566b12f]{font-size:14px;color:blue}.label[data-v-4566b12f]{display:inline-block;width:70px}.margin-left[data-v-4566b12f]{margin-left:10px}.item-container[data-v-4566b12f]{margin:5px}.container[data-v-4566b12f]{margin-left:50px;display:inline-block;width:40%;vertical-align:top}.header[data-v-4566b12f]{margin:25px 0 25px 55px}.second[data-v-4566b12f]{color:green}.up[data-v-4566b12f]{color:red}.down[data-v-4566b12f]{color:blue}.trash[data-v-4566b12f]{font-size:16px}","",{version:3,sources:["/Users/tianzechun/tokine/Tokine/src/components/Calculator.vue"],names:[],mappings:"AACA,sBACE,eAAgB,AAChB,UAAY,CACb,AACD,wBACE,qBAAsB,AACtB,UAAY,CACb,AACD,8BACE,gBAAkB,CACnB,AACD,iCACE,UAAY,CACb,AACD,4BACE,iBAAkB,AAClB,qBAAsB,AACtB,UAAW,AACX,kBAAoB,CACrB,AACD,yBACE,uBAAyB,CAC1B,AACD,yBACE,WAAa,CACd,AACD,qBACE,SAAW,CACZ,AACD,uBACE,UAAY,CACb,AACD,wBACE,cAAgB,CACjB",file:"Calculator.vue",sourcesContent:["\n.tip[data-v-4566b12f] {\n  font-size: 14px;\n  color: blue;\n}\n.label[data-v-4566b12f] {\n  display: inline-block;\n  width: 70px;\n}\n.margin-left[data-v-4566b12f] {\n  margin-left: 10px;\n}\n.item-container[data-v-4566b12f] {\n  margin: 5px;\n}\n.container[data-v-4566b12f] {\n  margin-left: 50px;\n  display: inline-block;\n  width: 40%;\n  vertical-align: top;\n}\n.header[data-v-4566b12f] {\n  margin: 25px 0 25px 55px;\n}\n.second[data-v-4566b12f] {\n  color: green;\n}\n.up[data-v-4566b12f] {\n  color: red;\n}\n.down[data-v-4566b12f] {\n  color: blue;\n}\n.trash[data-v-4566b12f] {\n  font-size: 16px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=8.712b4da0c6a3cbbe761f.js.map