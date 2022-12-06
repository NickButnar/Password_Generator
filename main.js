const generatedPassword = function donePassword(passwordLength) {
  const numCHars = "0123456789";
  const digraphsChars =
    "eeeaaiauayoioyooowoaoualkeerturetionssionchckbtghwrworwar";

  const allChars = numCHars + digraphsChars;
  const noNumberChars = digraphsChars;

  let numbers = true;
  let password = "";

  if (numbers) {
    for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * allChars.length);

      password += allChars[randomNumber];
    }

    return password;
  }

  if (numbers === false) {
    for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * noNumberChars.length);

      password += noNumberChars[randomNumber];
    }

    return password;
  }
};

console.log(generatedPassword(12));

export default { generatedPassword };
