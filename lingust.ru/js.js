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

async function showWord() {
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
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }