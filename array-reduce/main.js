const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const getSum = (prevNum, currentNum) => { return prevNum + currentNum; };
const sum = numbers.reduce(getSum);
console.log('sum:', sum);

const getProduct = (prevNum, currentNum) => { return prevNum * currentNum; };
const product = numbers.reduce(getProduct);
console.log('product:', product);

let total = 0;
const getBalance = (prevType, currentType) => {
  if (currentType.type === 'deposit') {
    total = total + currentType.amount;
  } else {
    total = total - currentType.amount;
  }
  return total;
};
const balance = account.reduce(getBalance, total);
console.log('balance:', balance);

const obj = {};
const getTraits = (prevTrait, currenTrait) => {
  Object.assign(obj, currenTrait);
  return obj;
};
const composite = traits.reduce(getTraits, obj);
console.log('composite:', composite);
