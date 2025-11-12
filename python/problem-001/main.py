def MultiplesOf3And5(limit):
  total = 0
  for number in range(limit):
    if number % 3 == 0 or number % 5 == 0 : 
      total += number
  return total

if __name__ == "__main__" :
  number = 1000
  result = MultiplesOf3And5(number)
  print(f"The sum of all multiples of 3 or 5 below {number} is: {result}")