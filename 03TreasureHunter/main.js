//Lavet sammen med Yunus Emre Altintas//

const island = ['-', 'T', '-', '-', '-'];

console.log(`There are ${island.length} moves in the island`)

let countTreasure = 0;

for (let i = 0; i < island.length; i++) {
    if (island[i] === "T") {
        console.log(`Treasure found at move ${i + 1}:)`);
        countTreasure++;
    } else {
        console.log("No treasure found :(");
    }
}

console.log(`There were ${countTreasure} in the island`)
