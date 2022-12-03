let pswrdLength = prompt("Желаемая длина пароля (введите количество символов)");
console.log(pswrdLength);

let numbers = prompt("Использовать цифры? (Ответ: Да или Нет)");
console.log(numbers);

const numCHars = "0123456789";
const symbolChars = "!@#$%^&*()";
const letterChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
allChars = numCHars + symbolChars + letterChars;
noNumberChars = symbolChars + letterChars;

let password = "";

if (numbers === "Да") {
  for (let i = 0; i < pswrdLength; i++) {
    let randomNumber = Math.floor(Math.random() * allChars.length);

    password += allChars[randomNumber];
  }
  console.log(password);
}
if (numbers === "Нет") {
  for (let i = 0; i < pswrdLength; i++) {
    let randomNumber = Math.floor(Math.random() * noNumberChars.length);

    password += noNumberChars[randomNumber];
  }
  console.log(password);
}
