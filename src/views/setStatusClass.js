'use strict';

import {clearStatusClass} from './clearStatusClass.js'

/**
 * function takes to parameters 
 * @param {DOM element } element 
 * @param {class} correct 
 * 1- clear the element previous  style
 * 2- if the element is correct add correct style {green color }
 * 3- if the element is wrong add wrong style {red color}
 */

export function setStatusClass (element , correct){
    clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
};