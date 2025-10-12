//lavet sammen med Yunus Emre Altintas//

function getStartupName() {

    const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
    const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

    const firstRandomWords = firstWords[Math.floor(Math.random() * firstWords.length)];
    const secondRandomWords = secondWords[Math.floor(Math.random() * secondWords.length)]; //kildehenvisning: Chat-gpt hjalp med at finde ud af, hvordan jeg fandt et random nummer//

    return `Your startup name could be: ${firstRandomWords} ${secondRandomWords}`;
}

console.log((getStartupName()))
console.log((getStartupName()))
console.log((getStartupName()))
console.log((getStartupName()))
