const words = [
    "pippo",
    "PLUTO",
    "Paperino"
]
console.log(words);

const newWords = words.map(function (word) {
    word = word.toLowerCase();
    // console.log(word);

    word = word.split('');
    word[0] = word[0].toUpperCase();
    word = word.join('');
    // console.log(word);
    // console.log(word[0]);

    return word;
});
console.log(newWords);