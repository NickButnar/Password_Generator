function donePassword(pswrdLength) {
  const numCHars = "0123456789";
  const symbolChars = "!@#$%^&*()";
  const letterChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  allChars = numCHars + symbolChars + letterChars;
  noNumberChars = symbolChars + letterChars;

  numbers = true; //false
  let password = "";

  if (numbers === true) {
    for (let i = 0; i < pswrdLength; i++) {
      let randomNumber = Math.floor(Math.random() * allChars.length);

      password += allChars[randomNumber];
    }
    return password;
  }
  if (numbers === false) {
    for (let i = 0; i < pswrdLength; i++) {
      let randomNumber = Math.floor(Math.random() * noNumberChars.length);

      password += noNumberChars[randomNumber];
    }
    return password;
  }
}
console.log(donePassword(12));

// export function donePassword(pswrdLength);
