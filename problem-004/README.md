# Projet Euler - Problème 4

> **Titre :**  Le plus grand palindrome 

> **Langage :** JavaScript  

## Énoncé du problème

Un nombre palindromique se lit de la même façon dans les deux sens. Le plus grand palindrome fabriqué à partir du produit de deux nombres à 2 chiffres est 9009 91 x 99.

**Objectif :**  
Trouvez le plus grand palindrome fabriqué à partir du produit de deux nombres n-digit.

## Approche utilisée

1. **Définir une fonction `isPalindrome(n)`**  
   Elle vérifie si un nombre se lit pareil à l’envers.

2. **Déterminer les bornes :**
   - Le plus petit nombre à `n` chiffres : `Math.pow(10, n - 1) ou ou 10 ** (n - 1)`
   - Le plus grand nombre à `n` chiffres : `Math.pow(10, n) - 1 ou 10 ** n - 1`

3. **Parcourir tous les produits possibles**  
   Boucles imbriquées de `i` et `j` entre ces bornes.

4.  **Tester chaque produit avec `isPalindrome`**
   - Si oui, vérifier s’il est plus grand que le maximum actuel.
   - Mettre à jour si nécessaire.

## Exécution

Tu peux exécuter ce script avec **Node.js** :

```bash
cd problem-004
node index.js
```
