const words = [
    "pippo",
    "PLUTO",
    "Paperino"
]
console.log(words);

for (let i = 0; i < words.length; i++) {
    let newWord = words[i].toLowerCase();

    words[i] = newWord;
    // console.log(newWord);
}
// console.log(words);

const newWords = []
words.forEach(word => {
    word = word.split('');
    // console.log(word);

    const letterUpper = word[0].toUpperCase();
    word[0] = letterUpper
    // console.log(letterUpper);

    word = word.join('');
    // console.log(word);

    newWords.push(word)
});

console.log(newWords);