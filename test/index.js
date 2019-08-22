global.customElements = {
  registry: Object.create(null),
  get(name) {
    return this.registry[name];
  }
};

class Node {
  constructor(details) {
    Object.assign(this, {attributes: []}, details);
  }
  cloneNode() {
    return this;
  }
  getAttribute(name) {
    const attr = this.attributes.find(attr => attr.name === name);
    return attr ? attr.value : null;
  }
}

class OK {}

const getCEClass = require('../cjs');

console.assert(getCEClass(new Node({nodeName: 'nope'})) === undefined, 'no CE named nope');
console.assert(getCEClass(new Node({nodeName: 'ok-1'})) === undefined, 'no CE named ok-1');

customElements.registry['ok-2'] = OK;
console.assert(getCEClass(new Node({nodeName: 'ok-2'})) === OK, 'ok-2 as name');

console.assert(getCEClass(new Node({nodeName: 'p', attributes: [{name: 'is', value: 'ok-2'}]})) === OK, 'ok-2 as is attribute');




