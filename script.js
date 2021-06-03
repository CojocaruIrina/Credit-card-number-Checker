// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

const invalidBatch = [invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery3, mystery4];




const validateCred = arr => {
  newArray = [];
  for (let i = 0; i<= arr.length-1; i++) {
    newArray[i] = arr[i];
  }
  for (let j= newArray.length-2; j>= 0; j=j-2) {
    newArray[j] = newArray[j] *2
    if(newArray[j] > 9) {
      newArray[j] = newArray[j] -9
    }
  }
  let sum = 0;
  for (let i=0; i< newArray.length; i++){
    sum += newArray[i];
  }
  if(sum % 10 === 0) {
    return true;
  } else { 
    return false; 
  
  }

};

// Function that checks if the credit card numbers are valid by returning true or false
const fromInvalidToValid = arr3 => {
  newValidCards = [];
   let n = Math.floor(Math.random() * 16);
    let sum = 0;
  for (let i=0; i< arr3.length; i++) {
   
  if(validateCred(arr3[i]) === false) {
   sum +=n[i]; 
   if (sum % 10 == 0 ) {
    newValidCards.push(sum);  }
   }  
    } 
   
 return newValidCards
 };

console.log(fromInvalidToValid(invalid1));




// function that checks if the credit card numbers are invalid and returns a nested array of invalid cards

const findInvalidCards = cards => {
  invalidCards = [];
  for (let i = 0; i< cards.length; i++){
    if (validateCred(cards[i]) === false){
      invalidCards.push(cards[i])
    }
  }
return invalidCards
};
console.log(findInvalidCards(batch));


//Function that returns an array of companies with invalid card numbers
const idInvalidCardCompanies = nestedArray => {
  companies= [];
  firstDigit = 0;
  nestedArray.forEach(element => {
    firstDigit = element[0];
    if(firstDigit === 3) {
       return companies.push('Amex')
    } else if (firstDigit === 4){
      return companies.push('Visa')
    } else if (firstDigit === 5) {
      return companies.push('MasterCard')
} else if (firstDigit === 6) {
  return companies.push('Discover')
}
  });
  return companies;

};
console.log(idInvalidCardCompanies(invalidBatch));