function fiboEvenSum(n) {
  let somme = 0;
  let fiboSequence = [1, 2];

  while (true) {
    const nextTerm =
      fiboSequence[fiboSequence.length - 1] +
      fiboSequence[fiboSequence.length - 2];

    if (nextTerm > n) break;

    fiboSequence.push(nextTerm);
  }

  for (let i = 0; i < fiboSequence.length; i++) {
    if (fiboSequence[i] % 2 === 0) {
      somme += fiboSequence[i];
    }
  }

  return somme;
}
