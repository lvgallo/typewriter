const sentence = "hello there from lighthouse labs\n";

let words = sentence.split('');

for (let i = 0; i <words.length; i++){
  loopWords(words[i])
  
function loopWords(word) {
    setTimeout(function() {
      process.stdout.write(word);
    }, i * 1000);
  }
};
