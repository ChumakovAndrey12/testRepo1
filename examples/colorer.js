'use strict'

const NAME = 'My name is Chumakov Andrew. Nice to meet you!'
const COLORS = [
	'black',
	'red',
	'green',
	'yellow',
	'blue',
	'magenta',
	'cyan',
	'white'
];

const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`;

const colorize = name => {
	let res = '';
	const letters = name.split('');
	let color = 0;

	for (const letter of letters) {
		res += colorer(letter, ++color);
		if (color > COLORS.length) color = 0;
	}
	return res;
};

console.log(colorize(NAME));


