const allTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bill = [125, 555, 44];
const tip = [allTip(bill[0]), allTip(bill[1]), allTip(bill[2])];
const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];

console.log(bill, tip, total);
console.log(` the bills are ${bill}, tips are ${tip} and Total ${totals}`);
