// showWord();
async function asyncReadFile(filename) {
    try {
    const response = await fetch(filename);
    const contents = await response.text();
    const words = contents.split(/\r?\n/);
    return words;
    } catch (err) {
    console.log(err);
    }
}


var e, value;
var eCh, valueCh;
value = "a1"
valueCh = "u1"

function selectGrade() {
    e = document.getElementById("grade");
    value = e.value;
    eCh = document.getElementById("unite");
    valueCh = eCh.value;
    showWord();
}

async function showWord() {
    const words = await asyncReadFile('dictionaries/' + value + valueCh + '.txt');
    const num = document.getElementById("number_of_words");
    const len = words.length;
    const randomIndex = Math.floor(Math.random() * len);
    let word;
    let myArray
    num.innerHTML = randomIndex + 1 + " / " + len;
    word = words[randomIndex];
    myArray = word.split(".");
    console.log(myArray[0] + " - " + myArray[1])
    document.getElementById('word').innerHTML = myArray[0][0].toUpperCase() + myArray[0].slice(1);
    document.getElementById('def').innerHTML = myArray[1][0].toUpperCase() + myArray[1].slice(1);
}