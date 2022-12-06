function donePassword(passwordLength) {
  const consonantArray = [];
  consonantArray.push(
    "ble",
    "ple",
    "dle",
    "tle",
    "gle",
    "fle",
    "cle",
    "ckle",
    "stle",
    "zle"
  );

  const vowelArray = [];
  vowelArray.push(
    "ai",
    "au",
    "ay",
    "aw",
    "ea",
    "ee",
    "ei",
    "ie",
    "oa",
    "oo",
    "ou",
    "ow",
    "are",
    "ar",
    "ere",
    "ire",
    "ure"
  );

  const numberChars = "0,1,2,3,4,5,6,7,8,9";
  const numberArray = numberChars.split(",");
  const letterChars =
    "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
  const letterArray = letterChars.split(",");

  let password = "";

  const consonantChars = letterArray + numberArray + consonantArray;
  const vowelChars = letterArray + numberArray + vowelArray;

  // Чередование согласных и гласных сочетаний

  for (let i = 0; i < passwordLength; i++) {
    if (i % 2 === 0) {
      let randomNumber = Math.floor(Math.random() * consonantChars.length);

      password += consonantChars[randomNumber];
    }

    if (i % 2 == 0) {
      let randomNumber = Math.floor(Math.random() * vowelChars.length);

      password += vowelChars[randomNumber];
    }
  }
  return password;
}
console.log(donePassword(12));

export default { donePassword };
