class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  each(callback) {
    this.nodes.forEach(callback);
  }

  html(string) {
    if (typeof string === 'undefined' ) {
      return this.nodes[0].innerHTML;
    } else {
      this.each(node => {
        node.innerHTML = string;
      });
    }
  }

  empty() {
    this.html('');
  }

  append(children) {
    if (this.nodes.length === 0) return;

    if (typeof children === 'object' &&
        !(children instanceof DOMNodeCollection)) {
      children = window.$f(children);
    }

    if (typeof children ==='string'){
      this.each(node => {
        node.innerHTML += children;
      });
    }
    else if (children instanceof DOMNodeCollection){
      this.each(node => {
        children.each(childNode => {
          node.innerHTML += childNode.outerHTML;
        });
      });
    }
  }

  attr(key, value) {
    if (typeof value === "string") {
      this.each( node => node.setAttribute(key, value) );
    } else {
      return this.nodes[0].getAttribute(key);
    }
  }

  addClass(newClass) {
    this.each(node => node.classList.add(newClass));
  }

  removeClass(oldClass) {
    this.each(node => node.classList.remove(oldClass));
  }

  toggleClass(className) {
    this.each(node => {
      node.classList.toggle(className);
    });
  }

  children(){
    let children = [];
    this.each(node => {
      let childNodes = Array.from(node.children);
      children = children.concat(childNodes);
    });
    return new DOMNodeCollection(children);
  }

  parent(){
    let parents = [];
    for(let i = 0; i < this.nodes.length; i++) {
      let parent = this.nodes[i].parentElement;
      if (parents.includes(parent)){
        continue;
      } else {
        parents.push(this.nodes[i].parentElement);
      }
    }
    return new DOMNodeCollection(parents);
  }

  eq(integer) {
    let node = this.nodes[integer];
    return new DOMNodeCollection([node]);
  }

  find(selector) {
    let collection = [];
    this.each(node => {
      let nodeList =  node.querySelectorAll(selector);
      collection = collection.concat(Array.from(nodeList));
    });
    return new DOMNodeCollection(collection);
  }

  remove() {
    this.each(node => node.parentNode.removeChild(node));
  }

  on(eventType, eventCallback) {
    this.each(node => {
      node.addEventListener(eventType, eventCallback);
      const eventKey = `eventCache-${eventType}`;
      if (typeof node[eventKey] === "undefined") {
        node[eventKey] = [];
      }
      node[eventKey].push(eventCallback);
    });
  }

  off(eventType) {
    this.each(node => {
      const eventKey = `eventCache-${eventType}`;
      if (node[eventKey]) {
        node[eventKey].forEach(eventCallback => {
          node.removeEventListener(eventType, eventCallback);
        });
      }
      node[eventKey] = [];
    });
  }
}
