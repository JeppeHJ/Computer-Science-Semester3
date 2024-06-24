let randomString = "Jeppe er sej hehe lol lol";

function calculateDifferentWords(string) {
    let listOfWords = string.split(' ');
    let map = new Map();

    for (let i = 0; i < listOfWords.length; i++) {
        map.set(listOfWords[i]);
    }
    return map.size;
}

console.log(calculateDifferentWords(randomString));