'use strict';

const song = require('./mia_and_sebastian_theme');

const songArr = song.MIA_AND_SEBASTIAN_THEME.split('');
let newChord = '-';
const transposed = songArr.map((c, i) => {
	if (parseInt(c) >= 0) {
		newChord = (parseInt(c) + 3).toString();
	} else {
		newChord = '-';
	}
	if (i % 54 === 0 && i !== 0) {
		newChord += '\n';
	}
	return newChord;
})

console.log(transposed.join(''));