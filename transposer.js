'use strict';

const _ = require('lodash');
const song = require('./mia_and_sebastian_theme');

const songArr = song.MIA_AND_SEBASTIAN_THEME.split('');

const notesLow = {
  C: {
    stringLine: 3,
    fret: 0,
  },
  Db: {
    stringLine: 3,
    fret: 1,
  },
  D: {
    stringLine: 3,
    fret: 2,
  },
  E: {
    stringLine: 2,
    fret: 0,
  },
  F: {
    stringLine: 2,
    fret: 1,
  },
  Gb: {
    stringLine: 2,
    fret: 2,
  },
  G: {
    stringLine: 2,
    fret: 3,
  },
  Ab: {
    stringLine: 1,
    fret: 1,
  },
  A: {
    stringLine: 1,
    fret: 0,
  },
  Bb: {
    stringLine: 1,
    fret: 1,
  },
  B: {
    stringLine: 1,
    fret: 2,
  }
};

const notesMid = {
  C: {
    stringLine: 3,
    fret: 3,
  },
  Db: {
    stringLine: 3,
    fret: 4,
  },
  D: {
    stringLine: 3,
    fret: 5,
  },
  E: {
    stringLine: 3,
    fret: 6,
  },
  F: {
    stringLine: 3,
    fret: 7,
  },
  Gb: {
    stringLine: 3,
    fret: 8,
  },
  G: {
    stringLine: 3,
    fret: 9,
  },
  Ab: {
    stringLine: 3,
    fret: 10,
  },
  A: {
    stringLine: 3,
    fret: 11,
  },
  Bb: {
    stringLine: 3,
    fret: 12,
  },
  B: {
    stringLine: 3,
    fret: 13,
  }
}

function getChord(tab) {
  let chordsOnly = tab;
  _.pull(chordsOnly, '-', '(X2)');
}

let newChord = '-';
let notesOnly = songArr;
getChord(notesOnly);
console.log('notesOnly: ', notesOnly.join('\n'));
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
});

console.log(transposed.join(''));
