const LOCAL_STORAGE_KEY = `whosRoundIsIt`;
const DRINKS = [`beer`, `wine`, 'whiskey', 'cocktails', 'champagne'];

const PHRASES = {
	Entry: {
		title: [`Fancy a drink?`, `Thirsty?`, `Pint?`, `Feeling parched?`, `What's your posion?`, 'Drink?', 'Choose a drink' ]
	},
	beer: {
		title: `Who's a lad?`,
		endTitle: 'Oh dear...',
		chooseButton: `Choose a lad`,
		continueRound: [`One more round?`, `Cheeky pint?`, `Another?`, `A quick one?`, `Still a lad?`, `Shots?`, `Go on...`, `Feeling good?`, `Pint?`]
	},
	wine: {
		title: `Who's a lass?`,
		endTitle: 'More?',
		chooseButton: `Choose a lass`,
		continueRound: [`Another glass?`, `A little top up?`, `Be naughty`, 'It\'s not done yet']
	},
	whiskey: {
		title: `Strong.`,
		endTitle: 'You\'re probably drunk...',
		chooseButton: `Man up`,
		continueRound: [`Another one?`, `Keep going?`, `Dont stop now...`]
	},
	cocktails: {
		title: `Cocktails...`,
		endTitle: 'I want another one!',
		chooseButton: `Go on then`,
		continueRound: [`Change it up?`, `One more?`, `Happy hour?`, 'Refreshing', 'Spend more money?']
	},
	champagne: {
		title: `Flashy git.`,
		endTitle: 'Any money left?',
		chooseButton: `Clear out my bank`,
		continueRound: [`Spend more money?`, `Another bottle?`, `Drunk or rich?`, 'Refreshing...', 'more!']
	}
};

module.exports = {
  LOCAL_STORAGE_KEY: LOCAL_STORAGE_KEY,
  DRINKS: DRINKS,
  PHRASES: PHRASES
};