define(function(){"use strict";var a={openGhost:function(){return['<div class="copy-locale-overlay-content grid">','   <div class="grid-row">','       <p class="info">',this.sandbox.translate("content.contents.settings.copy-locale.info"),"       </p>","   </div>",'   <div class="grid-row">','       <div class="custom-radio">','           <input type="radio" name="action" id="copy-locale-new" checked="checked"/>','           <span class="icon"></span>',"       </div>",'       <label for="copy-locale-new">',this.sandbox.translate("content.contents.settings.copy-locale.new"),"       </label>","   </div>",'   <div class="grid-row">','       <div class="custom-radio">','           <input type="radio" name="action" id="copy-locale-copy"/>','           <span class="icon"></span>',"       </div>",'       <label for="copy-locale-copy">',this.sandbox.translate("content.contents.settings.copy-locale.copy"),"       </label>",'       <div id="copy-locale-overlay-select" />',"   </div>","</div>"].join("")}},b=function(a,b,c,d,e){d||(d="node");var f=this.sandbox.dom.createElement('<div class="overlay-container"/>'),g=[{type:"cancel",align:"left"}];this.sandbox.dom.append(this.$el,f),c&&g.push({type:"ok",align:"right",text:this.sandbox.translate("content.contents.settings."+d+".ok")}),this.sandbox.start([{name:"overlay@husky",options:{openOnStart:!0,removeOnClose:!0,cssClass:"node",el:f,container:this.$el,instanceName:d,skin:"wide",slides:[{title:this.sandbox.translate(a),data:b,buttons:g,okCallback:e}]}}])};return{openGhost:function(c){var d=this.sandbox.data.deferred();return b.call(this,"content.contents.settings.copy-locale.title",a.openGhost.call(this),!0,"copy-locale-overlay",function(){var a=this.sandbox.dom.prop("#copy-locale-copy","checked"),b=this.sandbox.dom.data("#copy-locale-overlay-select","selectionValues");return!a||b&&0!==b.length?void d.resolve(a,b[0]):!1}.bind(this)),this.sandbox.once("husky.select.copy-locale-to.selected.item",function(){this.sandbox.dom.prop("#copy-locale-copy","checked",!0)}.bind(this)),this.sandbox.start([{name:"select@husky",options:{el:"#copy-locale-overlay-select",instanceName:"copy-locale-to",defaultLabel:this.sandbox.translate("content.contents.settings.copy-locale.select-default"),data:c.concreteLanguages}}]),d.promise()}}});