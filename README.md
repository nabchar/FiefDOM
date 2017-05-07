# fiefDOM

fiefDOM is a lightweight JavaScript library with cross-browser functionality that simplifies processing AJAX requests, event handling, as well as DOM traversal and manipulation. The libraries user-friendly syntax allows developers to gain intuitive control over the DOM, while its minimal design helps to decrease file size and loading time.

[DEMO]:(https://github.com/nabchar/FiefDOM_demo)

## Getting Started:

### Download & Installation

Get started with fiefDOM by downloading or cloning this repo and adding lib/fiefDOM.js in script tag to the head of your root HTML page.

  ```html
  <head>
    <meta charset="utf-8">
    <script type="text/javascript" src="./lib/fiefDOM.js"   charset="utf-8"></script>
    ...
  </head>
  ```

You can test that the install was successful by entering the following command in your console:

  ```js
  $f(() => alert('Fe-fi-fo-fum, methinks I smell one more fresh download of fiefDOM') )
  ```

## fiefDOM API

### DOMNodeCollection
This library make use of DOMNodeCollections, a custom class containing any number of HTML Elements that preserves the original tree structure of the DOM.

## fiefDOM API

### Basics

- `$f(arg)`: The wrapper `$f` is used to create a new instance of a DOMNodeCollection. If the argument is a function, it is stored in a queue and executed only after the document has fully loaded. If the argument is a CSS selector or an HTML element, `$f` will return a DOMNodeCollection of all the HTML elements in the DOM that include that given argument.

- `$f.extend(...args)`: Returns merged JavaScript objects

### Simplified AJAX in fiefDOM

- `$f.ajax(options)`: Sends an ajax request with default values for contentType, method, url, data, and success and error callbacks.


### Manipulation and Traversal
fiefDOM endeavors to simplify manipulation and traversal by frequently combining getter and setter logic into a single intuitive function. Please consult the following as a reference.

- `html(string)`: Replaces the inner HTML of each element in a DOMNodeCollection. If no arguments are given, it will return the inner HTML of the element.

- `empty()`: Clears the inner HTML of the element.

- `append(children)`: Will add the children to the end of the element. The children can be an HTML element, a string or a DOMNodeCollection.

- `attr(key, value)`: If both arguments are given, an HTML class with the given value will be set on the element. If only the first argument is given, the value of the given className will be returned if it exists.

- `addClass(...classNames)`: Add one or more classes to all the elements in a DOMNodeCollection.  

- `removeClass(...classNames)`: Removes classes from a node. Multiple classes may be added or removed at once.

- `toggle(className)`: Adds or removes a className from a node based on its previous value.

- `children()`: Returns an array of all children of the node.

- `parent()`: Returns the parent of the node.

- `find(selector)`: Returns an array of all elements that contain the provided CSS selector.

- `remove()`: Removes all children from the element.

### Event Handling

-  `on(eventType, eventCallback)`: Places an event listener on a node collection that executes the given callback when triggered.

- `off(eventType)`: Removes the event listener of the event type specified.

## FiefDOM in Action
[DEMO]:(https://github.com/nabchar/FiefDOM_demo)
A simple implementation of the classic game Snake is available as a demo.
To view this demo, navigate to repo in the link above, clone the repo, and open the html file locally.
