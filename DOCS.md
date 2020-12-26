<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [startGame.js](#srchandlersstartGamejs)
  - [setNextQuestion.js](#srchandlerssetNextQuestionjs)
- [init](#init)
  - [index.js](#srcinitindexjs)
- [listeners](#listeners)
  - [startGameClick.js](#srclistenersstartGameClickjs)
  - [setNextQuestionClick.js](#srclistenerssetNextQuestionClickjs)
- [logic](#logic)
  
- [views](#views)
  - [clearStatusClass.js](#srcviewsclearStatusClassjs)
  - [resetState.js](#srcviewsresetStatejs)
  - [setStatusClass.js](#srcviewssetStatusClassjs)


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

## artifyHandler

creates a mirror-image rendering of the user input and displays the growing artwork

| Param | Type               | Description                                                |
| ----- | ------------------ | ---------------------------------------------------------- |
| event | <code>click</code> | triggered whenever a user click on the start button        |

---

### [./src/handlers/setNextQuestion.js](./src/handlers/setNextQuestion.js?study)

<a name="setNextQuestion"></a>

## changeSeparatorHandler

changes the program's separator value

| Param | Type               | Description                                                 |
| ----- | ------------------ | ----------------------------------------------------------- |
| event | <code>click</code> | triggered whenever a user click on the next question        |

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

<a name="change startGameClick
calls handler that start the game"></a>

## startGameClick

calls handler that start the game

---

### [./src/listeners/setNextQuestionClick.js](./src/listeners/setNextQuestionClick.js?study)

<a name="setNextQuestionClick
calls the reverseHandler when a user click on the next button"></a>

## setNextQuestionClick

calls the the handler when the user click on the next button

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

---


### [./src/views/clearStatusClass.js](./src/views/clearStatusClass.js?study)

<a name="clearStatusClass"></a>

## clear the element class 

remove class form an element 

**Returns**: <code>HTMLPreElement</code> - a PRE element with the rendered string content

| Param     | Type                              | Description                                                                       |
| --------- | --------------------------------- | --------------------------------------------------------------------------------- |
| element   | remove classes                    | remove class correct or class wrong from elements                                 |


### [./src/views/setStatusClass.js](./src/views/setStatusClass.js?study)

<a name="setStatusClass "></a>

## add class 

add class correct to the element if it is correct else add class wrong 

**Returns**: 

| Param     | Type                              | Description                                                                       |
| --------- | --------------------------------- | --------------------------------------------------------------------------------- |
| element   | button                            | the selected element                                                              |
| correct   | class                             | add class correct if the selected element is correct or add class wrong           |


### [./src/views/resetState.js](./src/views/resetState.js?study)

<a name="resetState "></a>

## remove class or element child 

remove class from the body and remove the answer child 

**Returns**: 



[TOP](#DOCS)

---

---

## [./src/data.js](./src/data.js?study)

## Constants

<dl>
<dt><a href="#data">data</a></dt>
<dd><p>data that is saved and used between user interactionss</p>
</dd>
<dt><a href="#quizData">quizData</a></dt>
<dd></dd>
</dl>

<a name="data"></a>

## data {object}

data that is saved and used between user interactionss

**Properties**

| Name                      | Type                              | Description                          |
| ---------                 | --------------------------------- | ------------------------------------ |
|   shuffledQuestions       | number                            | the full user artwork                |
| currentQuestionIndex      | number                            | all the lines that have been entered |

<a name="quizData"></a>

## questions 



## questions  {array of object }

data that is saved and used between user interactionss

**Properties**

| Name                      | Type                              | Description                          |
| ---------                 | --------------------------------- | ------------------------------------ |
|   question                | object                            | the quiz question                    |
| answers                   | array                             | the possible answers                 |
<!-- END DOCS -->
