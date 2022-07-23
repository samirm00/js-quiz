<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [selectAnswer.js](#srchandlersselectAnswerjs)
  - [setNextQuestion.js](#srchandlerssetNextQuestionjs)
  - [showQuestion.js](#srchandlersshowQuestionjs)
  - [startGame.js](#srchandlersstartGamejs)
- [init](#init)
  - [index.js](#srcinitindexjs)
- [listeners](#listeners)
  - [setNextQuestionClick.js](#srclistenerssetNextQuestionClickjs)
  - [startGameClick.js](#srclistenersstartGameClickjs)
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

### [./src/handlers/selectAnswer.js](./src/handlers/selectAnswer.js?study)

<a name="selectAnswer"></a>

## selectAnswer(1-)

function has one parameter if the clicked answer button is correct then add correct class {green color} to the body and to the selected button

| Param | Type               | Description                                                                                                                                                                                                                                                                                                                                                                         |
| ----- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1-    | <code>event</code> | if the clicked button is correct then add correct class to the body 2- if the clicked button is correct then add correct class to the button clicked 3- if the question numbers are more than the question index + 1 (we still have question left) then show the next button 4- if there is no question left then change the start button inner text to restart and show the button |

---

### [./src/handlers/setNextQuestion.js](./src/handlers/setNextQuestion.js?study)

<a name="setNextQuestion"></a>

## setNextQuestion()

Higher order function call two function one handler {showQuestion()} and one view function {resetState()}

---

### [./src/handlers/showQuestion.js](./src/handlers/showQuestion.js?study)

<a name="showQuestion"></a>

## showQuestion({array)

function with one parameter creates a button for each question text and if the answer is correct add correct class {green color}

| Param  | Type                  | Description                                                                                                                                                                                                                                                                                                                                                                  |
| ------ | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {array | <code>question</code> | of objects} 1- select each question text from the object 2- for each question answer create a button and add the answer text to button inner text 3- add class 'btn' for each button 4- if the answer click is correct then add correct class to that button {green color} 5- add event listener to {selectAnswer ()} and append the buttons created to answer-buttons 'DIV' |

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

### [./src/listeners/setNextQuestionClick.js](./src/listeners/setNextQuestionClick.js?study)

<a name="setNextQuestionClick call the handler {setNextQuestion_new} to prepare the next question"></a>

## setNextQuestionClick call the handler {setNextQuestion()} to prepare the next question

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

---

### [./src/views/clearStatusClass.js](./src/views/clearStatusClass.js?study)

<a name="clearStatusClass"></a>

## clearStatusClass(remove)

| Param  | Type                 | Description                                                                                                                                                                                    |
| ------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| remove | <code>element</code> | correct and wrong classes styles ---------------------------------------------------------- function use to remove the class style correct {green color} and wrong {red color} from an element |

---

### [./src/views/resetState.js](./src/views/resetState.js?study)

<a name="resetState"></a>

## resetState()

## function use to remove the original answers created in HTML

1- remove the body style
2- hide the next button
3- if there is any child in the answer remove it.( clear the answer)

---

### [./src/views/setStatusClass.js](./src/views/setStatusClass.js?study)

<a name="setStatusClass"></a>

## setStatusClass(element, correct)

function takes to parameters

| Param   | Type                 | Description                                                                                                                                              |
| ------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| element | <code>element</code> |                                                                                                                                                          |
| correct | <code>class</code>   | 1- clear the element previous style 2- if the element is correct add correct style {green color } 3- if the element is wrong add wrong style {red color} |

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
| each | <code>object</code> | object contains @question {string} and @answers {array} of objects {{} string} |

<!-- END DOCS -->
