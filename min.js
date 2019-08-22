/*! (c) Andrea Giammarchi - ISC */
function getCEClass(e){var t=customElements,r=e.nodeName;if(-1<r.indexOf("-")){var i=t.get(r);if(i)return i}if(-1<(r=e.getAttribute("is")||"").indexOf("-"))return t.get(r);for(var n=e.cloneNode(!1),o=n.attributes,u=o.length;u--;n.removeAttributeNode(o[u]));return t.get(/is=("|')([^\1]+)\1/.test(n.outerHTML)&&RegExp.$2)}
