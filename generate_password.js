const LETTERCHARS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const NUMBERCHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SYMBOLCHARS = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "+"];

const ALLCHARS = [LETTERCHARS + NUMBERCHARS + SYMBOLCHARS];

const options = {
  passwordLength: 12,
  numbers: true,
  symbols: true,
};

const checkError = (options) => {
  const { passwordLength, numbers, symbols } = options;
  if (numbers + symbols > passwordLength) {
    throw new Error("Сумма цифр и символов превышает длину пароля");
  }

  if (numbers == false && symbols == false) {
    throw new Error(
      "Цифры и символы имеют значение False. Нет допустимых символов для генерации пароля"
    );
  }
};

function generatePassword(options) {
  let password = "";
  checkError(options);

  ALLCHARS.forEach(function (element) {
    const RandomIndexOfElement = Math.floor(Math.random() * ALLCHARS.length);
    password += ALLCHARS[RandomIndexOfElement];
  });
  return password;
}

console.log(generatePassword(options));

export default { checkError, generatePassword };
