'use strict';

import {resetState} from '../views/resetState.js'
import {showQuestion} from './showQuestion.js'
import {data } from '../data.js'

/**
 * Higher order function call two function one handler {showQuestion()} and one view function {resetState()}
 */

export function setNextQuestion(){
    resetState ();
    showQuestion(data.shuffledQuestions [data.currentQuestionIndex])


    
  }