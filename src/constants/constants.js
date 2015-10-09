const LOCAL_STORAGE_KEY = `whosRoundIsIt`;
const DRINKS = [`beer`, `wine`, 'whiskey', 'cocktails'];

const PHRASES = {
	Entry: {
		title: [`Fancy a drink?`, `Thirsty?`, `Pint?`, `Feeling parched?`, `What's your posion?`, 'Drink?', 'Choose a drink' ]
	},
	beer: {
		title: `Who's a lad?`,
		chooseButton: `Choose a lad`,
		continueRound: [`One more round?`, `Cheeky pint?`, `Another?`, `A quick one?`, `Still a lad?`, `Shots?`, `Go on...`, `Feeling good?`, `Pint?`]
	},
	wine: {
		title: `Who's a lass?`,
		chooseButton: `Choose a lass`,
		continueRound: [`Another glass?`, `A little top up?`, `Be naughty`]
	},
	whiskey: {
		title: `Strong.`,
		chooseButton: `Man up`,
		continueRound: [`Another one?`, `Keep going?`, `Dont stop now...`]
	},
	cocktails: {
		title: `Cocktails...`,
		chooseButton: `Go on then`,
		continueRound: [`Change it up?`, `One more?`, `Happy hour?`, 'Refreshing']
	}
};

module.exports = {
  LOCAL_STORAGE_KEY: LOCAL_STORAGE_KEY,
  DRINKS: DRINKS,
  PHRASES: PHRASES
};