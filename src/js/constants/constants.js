	const LOCAL_STORAGE_KEY = `whosRoundIsIt`;
const DRINKS = [`beer`, `wine`, 'shots', 'cocktails', 'champagne'];

const PHRASES = {
	Entry: {
		title: [`Fancy a drink?`, `Thirsty?`, `Pint?`, `Feeling parched?`, `What's your poison?`, 'Drink?', 'Choose a drink' ]
	},
	beer: {
		title: `Who's a lad?`,
		endTitle: 'Be more laddy...',
		placeholder: 'Whack in the lads names...',
		chooseButton: `Choose a lad`,
		continueRound: [`One more round?`, `Cheeky pint?`, `Another?`, `A quick one?`, `Still a lad?`, `Shots?`, `Go on...`, `Feeling good?`, `Pint?`]
	},
	wine: {
		title: `Who's a lass?`,
		endTitle: 'More?',
		placeholder: 'Put in the lady\'s names...',
		chooseButton: `Choose a lass`,
		continueRound: [`Another glass?`, `A little top up?`, `Be naughty`, 'It\'s not done yet']
	},
	shots: {
		title: `Shots?`,
		endTitle: 'You\'re probably drunk...',
		placeholder: 'Who\'s going to play?',
		chooseButton: `Man up`,
		continueRound: [`Another one?`, `Keep going?`, `Dont stop now...`]
	},
	cocktails: {
		title: `Cocktails?`,
		endTitle: 'Again!',
		placeholder: 'Who fancies a cocktail?',
		chooseButton: `Go on then`,
		continueRound: [`Change it up?`, `One more?`, `Happy hour?`, 'Refreshing', 'Spend more money?']
	},
	champagne: {
		title: `Celebrating?`,
		endTitle: 'Any money left?',
		placeholder: 'Who\'s playing the game?',
		chooseButton: `Clear out my bank`,
		continueRound: [`Spend more money?`, `Another bottle?`, `Drunk or rich?`, 'Refreshing...', 'more!']
	}
};

module.exports = {
  LOCAL_STORAGE_KEY: LOCAL_STORAGE_KEY,
  DRINKS: DRINKS,
  PHRASES: PHRASES
};
