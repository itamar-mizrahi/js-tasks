/*let findArmstrong =function(number){
    let powNumber=0,remainder=0,sumNumber=0;tempNum=number;
    if (number<100 || number>=1000){
        console.log(`${number} is not a 3 digit number`);
        return;
    }
    while (tempNum>0){
        remainder=tempNum%10;
        powNumber=Math.pow(remainder,3);
        sumNumber=sumNumber+powNumber;
        tempNum=Math.floor(tempNum/10);
    }
    if (number==sumNumber){
        return true;
    }
    else{ 
        return false;
    }
 }
console.log(findArmstrong(153));
*/
let find3DigitArmstrong =function(){
    let numbers=[];
    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            for(let k=0; k<10; k++){
                checkPow=Math.pow(i,3)+Math.pow(j,3)+Math.pow(k,3);
                checkDigit=Number(`${i}${j}${k}`);
                if (checkDigit==checkPow && checkPow>99){
                     numbers.push(checkPow);
                }
            }
        }
    }
    return numbers;
}

console.log(find3DigitArmstrong());
