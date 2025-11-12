function isPalindrome(n) {
  const str = n.toString();
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

function largestPalindromeProduct(n) {
  let largestPalindrome = 1;

  for (let i = 1; i < 10 ** n; i++) {
    for (let e = 1; e < 10 ** n; e++) {
      const number = i * e;
      if (isPalindrome(number) & (number > largestPalindrome)) {
        largestPalindrome = number;
      }
    }
  }
  return largestPalindrome;
}

largestPalindromeProduct(3);

module.exports = { largestPalindromeProduct };

if (require.main === module) {
  const digits = 3;
  const result = largestPalindromeProduct(digits);
  console.log(`The largest palindrome made from the product of two ${digits}-digit numbers is: ${result}`);
}