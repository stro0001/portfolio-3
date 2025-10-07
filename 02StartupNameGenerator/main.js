//Let's create a function that can generate startup names//

function getStartupName(){

const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

const firstRandomWords= firstWords[Math.floor(Math.random()*firstWords.length)];
const secondRandomWords = secondWords[Math.floor(Math.random()* secondWords.length)];

return `Your startup name could be: ${firstRandomWords} ${secondRandomWords}`;
}

console.log((getStartupName()))
console.log((getStartupName()))
console.log((getStartupName()))
console.log((getStartupName()))
