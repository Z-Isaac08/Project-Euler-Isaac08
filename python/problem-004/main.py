def isPalindrome(n) : 
  n_str = str(n)
  return n_str == n_str[::-1]

def largestPalindromeProduct(digits):
  max_palindrome = 0
  lower_limit = 10**(digits - 1)
  upper_limit = 10**digits

  for i in range(lower_limit, upper_limit) : 
    for j in range(i, upper_limit) : 
      product = i * j
      if isPalindrome(product) and product > max_palindrome :
        max_palindrome = product
  
  return max_palindrome

if __name__ == "__main__" :
  digits = 3
  result = largestPalindromeProduct(digits)
  print(f"The largest palindrome made from the product of two {digits}-digit numbers is: {result}")