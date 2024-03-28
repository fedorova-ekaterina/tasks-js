//task1

const string = "Привет! Как дела?";
const getVowels = (str) => {
  const vowels = ['а', 'е', 'о', 'у', 'и', 'ы', 'э', 'ю', 'я'];
  const result = str.split('').filter((item) => vowels.includes(item)).join('');
  return result;
}

console.log(getVowels(string));

//task2

const workers = [
    {"name":"John","salary":200},
    {"name":"Mike","salary":1800},
    {"name":"Linda","salary":1200}];

const getWorthyWorkers = (arr) => {
    const result = arr.filter((worker) => worker['salary'] > 1000).map((worker) => worker.name);
    return result;
  }
  
console.log(getWorthyWorkers(workers));

//task3

const path = "/users/download/index.html";
const isHtml = (path) => {
    return path.slice(-5) === '.html';
}

console.log(isHtml(path));

//task4

const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];
const isEven = (num) => {
    return num % 2 === 0;
};

const filterArray = (arr, func) => {
    return arr.filter(func);
}

console.log(filterArray(mixedArray, isEven));