function multiplesOf3Or5(number) { 
  let somme = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 ===0) {
      somme += i ;
    }
  }

  return somme;
}

module.exports = { multiplesOf3Or5 };

if (require.main === module) {
  const number = 1000;
  const result = multiplesOf3Or5(number);
  console.log(`The sum of all multiples of 3 or 5 below ${number} is: ${result}`);
}


