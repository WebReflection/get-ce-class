function getCEClass(el) {
  /*! (c) Andrea Giammarchi - ISC */
  var ce = customElements;
  var nodeName = el.nodeName;

  // HTMLELement extends, considering special non-CE cases
  if (-1 < nodeName.indexOf('-')) {
    var Class = ce.get(nodeName);
    if (Class)
      return Class;
  }

  // nodes live before definition
  nodeName = el.getAttribute('is') || '';
  if (-1 < nodeName.indexOf('-'))
    return ce.get(nodeName);

  // nodes created after definition
  for (var
    clone = el.cloneNode(false),
    attributes = clone.attributes,
    i = attributes.length;
    i--;
    // drop all exposed attributes
    clone.removeAttributeNode(attributes[i])
  );

  // return the name exposed via outerHTML, if any, or undefined
  if (/is=("|')([^\1]+)\1/.test(clone.outerHTML))
    return ce.get(RegExp.$2);
}
module.exports = getCEClass;
