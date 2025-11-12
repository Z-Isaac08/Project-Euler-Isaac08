def sum_of_even_fibonacci(n):
  if n <= 1:
    return 0

  fib1, fib2 = 1, 2 
  even_sum = 0

  while fib2 <= n:
    if fib2 % 2 == 0: 
      even_sum += fib2
    fib1, fib2 = fib2, fib1 + fib2 
  return even_sum

if __name__ == "__main__" :
  number = 4000000
  result = sum_of_even_fibonacci(4000000)
  print(f"The sum of even Fibonacci numbers not exceeding {number} is: {result}")