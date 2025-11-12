function largestPrimeFactor(n) {
  let factor = 2;
  while (factor * factor <= n) {
    if (n % factor === 0) {
      n /= factor;
    } else {
      factor++;
    }
  }
  return n;
}

module.exports = { largestPrimeFactor };

if (require.main === module) {
  const number = 600851475143;
  const result = largestPrimeFactor(number);
  console.log(`The largest prime factor of the ${number} is: ${result}`);
}
