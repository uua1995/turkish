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

async function showRandomWord() {
    const words = await asyncReadFile('lingust_words.txt');
    const defs = await asyncReadFile('lingust_words.txt')
    const num = document.getElementById("number_of_words");
    const len = words.length;

    var randomIndex = Math.floor(Math.random()* (len / 2)); 
    var randomIndex2 = randomIndex - 1;

    if(randomIndex % 2 == 0){
       if(randomIndex == (len / 2)){
        randomIndex  = randomIndex - 1;
        randomIndex2 = randomIndex - 1
       }else{
        randomIndex  = randomIndex + 1;
        randomIndex2 = randomIndex - 1
       }
    }

    let word, def;
    num.innerHTML = randomIndex + 1 + " / " + len / 2;
    word = words[randomIndex];
    def = defs[randomIndex2];
    document.getElementById('word').innerHTML = def;
    document.getElementById('def').innerHTML = "";
    sleep(2000).then(() => { 
    document.getElementById('def').innerHTML = word;
    });
}

let currentQuiz = -2;

async function loadWords() {
    const words = await asyncReadFile('lingust_words.txt');
    const defs = await asyncReadFile('lingust_words.txt')
    const num = document.getElementById("number_of_words");
    const len = words.length;
    num.innerHTML = currentQuiz + 1 + " / " + len / 2;
    document.getElementById('word').innerHTML = words[currentQuiz]
    // document.getElementById('def').innerHTML = words[currentQuiz + 1]
    document.getElementById('def').innerHTML = "";
    sleep(2000).then(() => { 
        document.getElementById('def').innerHTML = words[currentQuiz + 1];
    });
    console.log(words[currentQuiz]);
}

async function nextWord(){
    const words = await asyncReadFile('lingust_words.txt');
    const len = words.length;
    currentQuiz += 2;
    if (currentQuiz < len) {
        loadWords();
    } else {
        alert("Tebrikler! Bu kelime dağarcığını tamamladınız!")
    }
}

function saveWord(){
    let tr = document.getElementById('def').innerHTML;
    let qr = document.getElementById('word').innerHTML;
    // let savedWords = document.querySelector(".savedWords");
    let sw = document.createElement("strong");
    sw.innerText = qr + " - " + tr;
    document.getElementById("myDIV").appendChild(sw);
    console.log(qr + " - " + tr);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// function editOrder(){
//         if (document.getElementById('order').style.color == 'white') {
//             document.getElementById('order').style.color = "black";
//         } else {
//             // document.getElementById('order').style.color = "#fff";
//             console.log("Qalay");
//         }
// }