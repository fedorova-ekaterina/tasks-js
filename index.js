const string = "Привет! Как дела?";
const getVowels = (str) => {
  const vowels = ['а', 'е', 'о', 'у', 'и', 'ы', 'э', 'ю', 'я'];
  const result = str.split('').filter((item) => vowels.includes(item)).join('');
  return result;
}

console.log(getVowels(string));