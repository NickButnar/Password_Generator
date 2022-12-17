const donePassword = (passwordLength, number) => {
  const letterChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";

  let resultDonePassword = "";
  let resultLetterPassword = "";
  let resultNumbersPassword = "";

  if (number > 0 && number <= passwordLength) {
    for (let i = 0; i < number; i++) {
      let randomNumberOfNumbers = Math.floor(
        Math.random() * numberChars.length
      );
      resultNumbersPassword += numberChars[randomNumberOfNumbers];
    }
  }

  if (number === 0 || number <= passwordLength) {
    for (let i = 0; i < passwordLength - number; i++) {
      let randomNumberOfLetters = Math.floor(
        Math.random() * letterChars.length
      );
      resultLetterPassword += letterChars[randomNumberOfLetters];
    }
  }

  resultDonePassword = resultNumbersPassword + resultLetterPassword;
  return resultDonePassword;
};

console.log(donePassword(6, 2));

export default { donePassword };
