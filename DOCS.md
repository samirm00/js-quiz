<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [startGame.js](#srchandlersstartGamejs)
- [init](#init)
  - [index.js](#srcinitindexjs)
- [listeners](#listeners)
  - [startGameClick.js](#srclistenersstartGameClickjs)
- [logic](#logic)
- [views](#views)
- [data.js](#srcdatajs)

<!-- END TOC -->

<!-- BEGIN DOCS -->

---

# Handlers

Handler function define user interactions. They will:

- read user input from events and from the DOM
- read and modify program data variables
- process user data with logic functions
- update the DOM to show changes to the user
- log any important information for developers

---

### [./src/handlers/startGame.js](./src/handlers/startGame.js?study)

<a name="startGame"></a>

## startGame()

## a higher order function (handler)

1- hide the start button
2- shuffle the question so they appear in a different order
3- show the question
call {setNextQuestion()}

[TOP](#DOCS)

---

---

# init

---

### [./src/init/index.js](./src/init/index.js?study)

[TOP](#DOCS)

---

---

# Listeners

Event listeners are used to connect handler functions to user interactions with the DOM.

You can use the same handler in many different listeners, or add more than one listeners to the same DOM element.

---

### [./src/listeners/startGameClick.js](./src/listeners/startGameClick.js?study)

<a name="startGameClick call the handler {StartGame _new } to start the quiz 
a"></a>

## startGameClick call the handler {StartGame () } to start the quiz

a

[TOP](#DOCS)

---

---

# Logic

Logic functions are pure functions. They take primitives, objects or arrays as arguments and they return primitives, objects or arrays. Handlers will use logic functions to transform user input.

Logic functions will _never_ ...

- read from the DOM
- write to the DOM
- use events
- use prompt/alert/confirm
- use data that is not passed as a parameter

[TOP](#DOCS)

---

---

# Views

View functions are pure functions used to render JS data into DOM elements. They take primitives, objects or arrays as arguments and they return primitives, objects or arrays. Handlers will use view functions to render program state and update the UI.

VIEW functions will _never_ ...

- read from the DOM
  - they will create _new_ DOM elements
- write to the DOM
  - they return a DOM element that the handler will append
- use events
- use prompt/alert/confirm
- use data that is not passed as a parameter

[TOP](#DOCS)

---

---

## [./src/data.js](./src/data.js?study)

## Constants

<dl>
<dt><a href="#data">data</a></dt>
<dd><p>data that is saved and used between user interactions</p>
</dd>
<dt><a href="#questions">questions</a></dt>
<dd><h2 id="questions-array">Questions array </h2>
</dd>
</dl>

<a name="data"></a>

## data

data that is saved and used between user interactions

**Properties**

| Name                  | Type                | Description                                      |
| --------------------- | ------------------- | ------------------------------------------------ |
| @shuffledQuestion     | <code>number</code> | make sure , that the questions have random order |
| @currentQuestionIndex | <code>number</code> | the index of the current question                |

<a name="questions"></a>

## questions

## Questions array

**Properties**

| Name | Type                | Description                                                                    |
| ---- | ------------------- | ------------------------------------------------------------------------------ |
| each | <code>object</code> | object contains @question {string} and @answers {array} of objects (string)    |

<!-- END DOCS -->
