const LETTERCHARS = Array.from(
  "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
);

const NUMBERCHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SYMBOLCHARS = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "+"];

const ALLCHARS = [...LETTERCHARS, ...NUMBERCHARS, ...SYMBOLCHARS];

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

const getRandomIndexOfElement = (item, options) => {
  if (options.numbers && options.symbols == true) {
    const randomIndex = Math.floor(Math.random() * ALLCHARS.length);
    return ALLCHARS[randomIndex];
  }

  if (options.numbers == false) {
    const randomIndex = Math.floor(
      Math.random() * (LETTERCHARS.length + SYMBOLCHARS.length)
    );
    return (LETTERCHARS.length + SYMBOLCHARS.length)[randomIndex];
  }
  if (options.symbols == false) {
    const randomIndex = Math.floor(
      Math.random() * (LETTERCHARS.length + NUMBERCHARS.length)
    );
    return (LETTERCHARS.length + NUMBERCHARS.length)[randomIndex];
  }

  if (options.numbers && options.symbols == false) {
    const randomIndex = Math.floor(Math.random() * LETTERCHARS.length);
    return LETTERCHARS.length[randomIndex];
  }
};

function generatePassword(options) {
  let password = "";
  const preparedOptions = prepareOptions(options);
  checkError(preparedOptions);
  password = Array.from({ length: preparedOptions.passwordLength }, (x) =>
    getRandomIndexOfElement(x, preparedOptions)
  );

  return password.join("");
}

console.log(generatePassword(prepareOptions));

export default generatePassword;
