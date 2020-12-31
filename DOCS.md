<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [startGame.js](#srchandlersstartGamejs)
  - [showQuestion.js](#srchandlersshowQuestionjs)
  - [setNextQuestion.js](#srchandlerssetNextQuestionjs)
  - [selectAnswer.js](#srchandlersselectAnswerjs)
- [init](#init)
  - [index.js](#srcinitindexjs)
- [listeners](#listeners)
  - [startGameClick.js](#srclistenersstartGameClickjs)
  - [setNextQuestionClick.js](#srclistenerssetNextQuestionClickjs)
- [logic](#logic)
- [views](#views)
  - [clearStatusClass.js](#srcviewsclearStatusClassjs)
  - [setStatusClass.js](#srcviewssetStatusClassjs)
  - [resetState.js](#srcviewsresetStatejs)
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

### [./src/handlers/showQuestion.js](./src/handlers/showQuestion.js?study)

<a name="showQuestion"></a>

## showQuestion()

## (handler)

- remove class `hide` from `question number`
- change `question number` inner text to question number /8 .
- create a button for each answer
- if the answer is correct add `correct` class
- add the answer buttons to the answer-buttons `div`


### [./src/handlers/setNextQuestion.js](./src/handlers/setNextQuestion.js?study)

<a name="setNextQuestion"></a>

## setNextQuestion()

## (handler)


- call `resetState()`
- call `showQuestion()`


### [./src/handlers/selectAnswer.js](./src/handlers/selectAnswer.js?study)

<a name="selectAnswer"></a>

## selectAnswer()

## (handler)


- if the selected answer is correct remove class `hide` from `question-correct`
- change the inner text of  `question-correct` to `you got number correct answer(s) from 8`
- create button for each answer 
- if there is more question(s) then remove `hide` class from `next-btn`
- if there is no more question then change the `start` button inner text to `restart`
- f there is no more question remove class `hide` from the `Exit` button.

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


<a name="startGameClick call the handler {StartGame _new } to start the quiz" 
></a>

## startGameClick call the handler {StartGame () } to start the quiz


### [./src/listeners/setNextQuestionClick.js](./src/listeners/setNextQuestionClick.js?study)

<a name="setNextQuestionClick call the handler {setNextQuestion _new } to set the next question"
></a>

## setNextQuestionClick call the handsetNextQuestion () } to set the next question

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


### [./src/views/clearStatusClass.js](./src/views/clearStatusClass.js?study)

<a name="clearStatusClass"></a>

## clearStatusClass 

- remove class `correct` from the element. 
- remove class `wrong` from the element. 


### [./src/views/setStatusClass.js](./src/views/setStatusClass.js?study)

<a name="setStatusClass"></a>

## setStatusClass 

- add class `correct` if the button selected is correct, else add class `wrong`

### [./src/views/resetState.js](./src/views/resetState.js?study)

<a name="resetState"></a>

## resetState 

- add `hide` class to the `next` button
- if there is an answer in the answer-buttons `div` remove it 

TOP](#DOCS)

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
| @questionNumber       | <code>number</code> | the question number                              |
| @questionCorrect      | <code>number</code> | the number of the correct question(s)            |

<a name="questions"></a>

## questions

## Questions array

**Properties**

| Name | Type                | Description                                                                    |
| ---- | ------------------- | ------------------------------------------------------------------------------ |
| each | <code>object</code> | object contains @question {string} and @answers {array} of objects (string)    |

<!-- END DOCS -->
