const LOCAL_STORAGE_KEY = 'whosRoundIsIt';
const DRINKS = ['beer', 'wine'];

const PHRASES = {
	Entry: {
		title: 'What do you fancy?'
	},
	beer: {
		title: `Who's a lad`,
		continueRound: ['One more round?', 'Another?', 'A quick one?', 'Still a lad?', 'Shots?', 'Go on...', 'Feeling good?', 'Pint?']
	},
	wine: {
		title: `Who's a lass`,
		continueRound: ['Another glass?', 'A little top up?', 'Be naughty']
	}
};

module.exports = {
    LOCAL_STORAGE_KEY: LOCAL_STORAGE_KEY,
    DRINKS: DRINKS,
    PHRASES: PHRASES
};