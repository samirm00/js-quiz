# JS Quiz


> A simple JavaScript quiz build using Javascript , HTML and  CSS

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

A simple JavaScript Quiz build using `JS`,`CSS` and `HTML` , the main goal is separate the code into different files `views`, `data`,`handlers`,`listeners` and build an interactive Quiz and add the important variables to the program `state`.

## Screenshots
![Example screenshot](img/screenShot.png)

## Technologies
* JavaScript
* HTML
* CSS
* VSC code


## Setup
open index.html in your browser and enjoy! playing the drum 

## Code Examples

```js
'use strict';


import { logger } from '/lib/logger.js';
import { data , questions} from '../data.js';

import {setNextQuestion} from './setNextQuestion.js'



/**
 * a higher order function (handler)
 * ---------------------------------
 * 1- hide the start button 
 * 2- shuffle the question so they appear in a different order 
 * 3- show the question 
 * call {setNextQuestion()}
 *
 */
export function startGame (){
    const message = `Welcome to JS quiz \n Here are the rules:\n 1- Don't select the same answer twice. \n 2- If all your answers are wrong , you will not get a feedback back about how many question(s) you answered.\n 3- If you answer is correct, you will see green color.\n 4- if you answer is wrong, you will see red color.` ;
    alert(message);
    document.getElementById('start-btn').classList.add('hide') ;
    document.getElementById('exit').classList.add('hide');
    document.getElementById('question-correct').classList.add('hide');
    data.shuffledQuestions = questions.sort(() => Math.random() - .5) ; 
    const initialQuestionIndex = data.currentQuestionIndex = 0  ;
    const initialNumberOfQuestion = data.questionNumber = 1 ;
    const initialCorrectQuestion = data.questionCorrect = 1;
    document.getElementById('question-container').classList.remove('hide');
    setNextQuestion();
  
    logger.add({
        handler: 'startGame',
        initialQuestionIndex,
        initialNumberOfQuestion,
        initialCorrectQuestion,
     
      });



};
```


## Features
List of features ready and TODOs for future development

* 
* 
* 

To-do list:

* 
* 

## Status
Project is: _in progress_

## Inspiration

from `WebDevSimplified`

## Contact
By [@Group2] 

question

<details>
<summary>answer & explanation</summary>

Answer : `JS` stands for JavaScript 

Answer : `JS` JavaScript was created by Brendan Eich in 1995

Answer : An `IIFE` (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 

Answer : According to `Northeastern University` in Canada the most popular programming language in 2020 is `Python`

Answer : JavaScript was originally called  `Mocha`, then renamed to `LiveScript`, and then renamed to `JavaScript`.

Answer : We can read and write the properties of an object using the `dot (.)` notation.

Answer : A prompt allows the user to enter input by providing a text box. Label and box will be provided to enter the text or number.

Answer : `===` check the `values` and `types` .

</details>
