#include <stdio.h>

long long MultiplesOf3And5(int limit) {
  long long total = 0;
  for (int number = 0; number < limit; ++number) {
    if (number % 3 == 0 || number % 5 == 0) {
      total += number;
    }
  }
  return total;
}

int main(void) {
  printf("%lld\n", MultiplesOf3And5(1000));
  return 0;
}
