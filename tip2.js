const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bill = [125, 555, 44];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const totals = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];

console.log(bills, tips, totals);
