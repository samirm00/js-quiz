'use strict';

import { startGame } from '../handlers/startGame.js';

/**
 * @name startGameClick call the handler {StartGame () } to start the quiz 
 * a
 */
document
  .getElementById('start-btn')
  .addEventListener('click', startGame);
