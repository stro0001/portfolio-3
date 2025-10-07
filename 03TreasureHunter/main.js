// You are on a small island, and there's a treasure box hidden somewhere! Your job is to move around the island to find it//
//- The island is represented by a 1D array of 5 elements//
//- One of these elements is the hidden treasure (T), and the rest are empty (-).//

const island = ['-', 'T', '-', '-', '-'];

//Log out how many moves there are in the island - level 1//
console.log(`There are ${island.length} moves in the island`)

//For each move log the following out - level 2: If there is a treasure log out: Treasure found at move 3 :) If there is not a treasure log out: No treasure found :(//
for(let i=0;i<island.length; i++){
if(island[i]==="T"){
    console.log(`Treasure found at move ${i+1}:)`);
}else{
    console.log("No treasure found :(");
}
}
