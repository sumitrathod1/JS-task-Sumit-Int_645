const calcAverage = (a, b, c) => (a + b + c) / 3;

const calAvg = function (a, b, c) {
  return (a + b + c) / 3;
};

let Dolphinsscore = calAvg(44, 23, 71);
let Koalasscore = calAvg(65, 54, 49);
console.log(Dolphinsscore, Koalasscore);

const checkWinner = function (avgScrDol, avgScrKol) {
  if (avgScrDol >= 2 * avgScrKol) {
    console.log(`Dolphins win  (${avgScrDol} vs. ${avgScrKol})`);
  } else if (avgScrKol >= 2 * avgScrDol) {
    console.log(`Koalas win  (${avgScrKol} vs. ${avgScrDol})`);
  } else {
    console.log("No team wins");
  }
};
checkWinner(Dolphinsscore, Koalasscore);
checkWinner(576, 111);

Dolphinsscore = calAvg(85, 54, 41);
Koalasscore = calAvg(23, 34, 27);
console.log(Dolphinsscore, Koalasscore);
checkWinner(Dolphinsscore, Koalasscore);
