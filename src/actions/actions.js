let Reflux = require('reflux');

import { LOCAL_STORAGE_KEY, DRINKS } from '../constants/constants';


let Actions = Reflux.createActions({
  'addName' : {},
  'chooseLad' : {},
  'clearLads' : {},
  'mixDrinks': {},
  'chooseDrink': {}
});

export default Actions;
