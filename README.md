FESD FET Week 4

Mark Szymanski  3:24 PM
Hi all, attached are notes/outline from topic 4. The repository has been updated with examples, including an additional demo app in more of an OO-style akin to what you see in the "Teams" app in the videos. It demonstrates using classes and components, where we have a clearer separation between state and rendering, and where components are responsible for drawing themselves and managing events. This starts to get us towards the React way of thinking about app design. Hope these prove useful! (edited) 
topic-4-notes.md 
# Topic 4: Document Object Model (DOM) and JavaScript
​
* Introduction to the DOM
    * Concept
        * Provides the programming interface for HTML documents
        * Manipulable, in-memory representation of HTML document, organized as a tree structure
            * By "manipulable" we specifically mean that we can connect to and modify it with JavaScript
        * Browsers differ in DOM implementation and degree of standards conformance, but they all make web pages accessible to JS with the DOM
        * Fundamental DOM data types (we'll deal with the first four most often) ([see reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#important_data_types)):
            * Document: root of the DOM tree; represents any web page loaded in the browser
            * Node: *abstract* base class for many DOM objects, including Document and Element
            * Element: general  base class for all element objects, such as HTMLElement
            * NodeList: array-like list of nodes; note distinction between *static* and *live* NodeLists
            * Attribute: object representing element attributes (Attr)
            * NamedNodeMap: collection of Attr objects; always *live*
    * Practical skills
        * Navigating the DOM in dev tools
        * Reading documentation and applying the information
            * https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
            * https://developer.mozilla.org/en-US/docs/Web/API/Document
            * https://developer.mozilla.org/en-US/docs/Web/API/Element
            * https://developer.mozilla.org/en-US/docs/Web/API/NodeList
        * Basic methods to get node references 
            * `document.getElementById`
            * `document.getElementsByTagName`
            * `document.getElementsByClassName`
            * `document.querySelectorAll`
        * Retrieving, manipulating & adding content
            * Simple example: using `Element.innerHTML` (see https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
            * Adding more complex elements: process is basically to create your object, then insert it into the right place in the DOM
                * `document.createElement` and `Node.appendChild`; `Node.removeChild`; `Node.firstChild`
                * `HTMLInputElement.value` (see https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
                * Tables: `HTMLTableElement.insertRow`, `HTMLTableRowElement.insertCell`
                    * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
                    * https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
        * Events and event listeners
            * Good intro: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
            * Events as signals that your code can "listen" for and respond to
            * Core concepts for event objects
                * "Bubbling" and capture
                    * Capturing phase: outermost ancestor to innermost
                    * Bubbling phase: innermost to outermost (this is what you'll encounter when registering events with modern browsers)
                        * Strategic advantage: "event delegation"
            * Adding and removing listeners: `addEventListener`, `removeEventListener`
