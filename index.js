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