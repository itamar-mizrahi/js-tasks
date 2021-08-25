let number=9;

function intToRoman(number) {
    let roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let romanNumber = '';
  
    for (let i of Object.keys(roman)) {
      let repeatTime = Math.floor(number / roman[i]);
      number -= repeatTime * roman[i];
      romanNumber += i.repeat(repeatTime);
    }
  
    return romanNumber;
  }

  console.log(intToRoman(number));