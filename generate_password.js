const letter = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

const LETTERCHARS = Array.from(letter);
const NUMBERCHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SYMBOLCHARS = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "+"];

const ALLCHARS = [...LETTERCHARS, ...NUMBERCHARS, ...SYMBOLCHARS];

let PASSWORD = "";

const options = {
  passwordLength: 12,
  numbers: true,
  symbols: true,
};

const checkError = (options) => {
  if (typeof options == "undefined") {
    options = {
      passwordLength: 12,
      numbers: true,
      symbols: true,
    };
  }

  if (typeof options["numbers"] !== "boolean") {
    throw new Error("Значения numbers и symbols должны быть типа boolean");
  }
  if (typeof options["symbols"] !== "boolean") {
    throw new Error("Значения numbers и symbols должны быть типа boolean");
  }
};

const getRandomIndexOfElement = () => {
  const randomIndex = Math.floor(Math.random() * ALLCHARS.length);
  PASSWORD += ALLCHARS[randomIndex];
};

function generatePassword(options) {
  checkError(options);
  Array.from({ length: 12 }, getRandomIndexOfElement);
  getRandomIndexOfElement(NUMBERCHARS);
  return PASSWORD;
}

console.log(generatePassword());

export default generatePassword;
