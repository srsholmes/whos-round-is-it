let Reflux = require('reflux');

import { LOCAL_STORAGE_KEY, DRINKS } from '../constants/constants';


let Actions = Reflux.createActions({
  'addName' : {},
  'chooseLad' : {},
  'clearLads' : {},
  'mixDrinks': {},
  'chooseDrink': {}
});


Actions.chooseDrink.listen((i) => {
	document.querySelector('[property="og:image"]').setAttribute('content', `http://www.whosalad.uk/share-${DRINKS[i]}.png`);
	console.log(document.querySelector('[property="og:image"]'));
});

export default Actions;
