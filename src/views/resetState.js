'use strict';

import {clearStatusClass} from './clearStatusClass.js'

/**
 * function use to remove the  original answers created in HTML 
 * -----------------------------------------------------------
 * 1- remove the body style 
 * 2- hide the next button
 * 3- if there is any child in the answer remove it.( clear the answer)
 */

export function resetState (){
  clearStatusClass(document.body);
  document.getElementById('next-btn').classList.add('hide');
  while(document.getElementById('answer-buttons').firstChild){
    document.getElementById('answer-buttons').removeChild(document.getElementById('answer-buttons').firstChild);
  }

};