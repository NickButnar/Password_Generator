const LETTERCHARS = Array.from(
  "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
);

const NUMBERCHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SYMBOLCHARS = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "+"];

const ALLCHARS = [...LETTERCHARS, ...NUMBERCHARS, ...SYMBOLCHARS];
const NO_NUMBERS_ARRAY = [...LETTERCHARS, ...SYMBOLCHARS];
const NO_SYMBOLS_ARRAY = [...LETTERCHARS, ...NUMBERCHARS];

const checkError = (options) => {
  if (typeof options["numbers"] !== "boolean") {
    throw new Error("Значения numbers и symbols должны быть типа boolean");
  }
  if (typeof options["symbols"] !== "boolean") {
    throw new Error("Значения numbers и symbols должны быть типа boolean");
  }
  if (typeof options["passwordLength"] !== "number") {
    throw new Error("Значение passwordLength должно быть типа number");
  }
};

const prepareOptions = (options) => {
  return {
    passwordLength: 12,
    numbers: true,
    symbols: true,
    ...options,
  };
};

const getRandomIndexOfArray = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const fillPasswordArray = (item, options) => {
  if (!options.numbers && !options.symbols) {
    return getRandomIndexOfArray(LETTERCHARS);
  }

  if (!options.numbers) {
    return getRandomIndexOfArray(NO_NUMBERS_ARRAY);
  }

  if (!options.symbols) {
    return getRandomIndexOfArray(NO_SYMBOLS_ARRAY);
  }

  return getRandomIndexOfArray(ALLCHARS);
};

function generatePassword(options) {
  const preparedOptions = prepareOptions(options);

  checkError(preparedOptions);

  const passwordArray = Array.from(
    { length: preparedOptions.passwordLength },
    (x) => fillPasswordArray(x, preparedOptions)
  );

  return passwordArray.join("");
}

console.log(
  generatePassword({ passwordLength: 12, numbers: true, symbols: true })
);

export default generatePassword;
