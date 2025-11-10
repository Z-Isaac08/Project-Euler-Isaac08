# 🧩 Problème 004 - Le plus grand palindrome produit

## 📋 Énoncé

Un nombre **palindromique** se lit de la même manière de gauche à droite et de droite à gauche.
Le plus grand palindrome obtenu par le produit de deux nombres à 2 chiffres est **9009 = 91 × 99**.

**Objectif :** Trouver le plus grand palindrome obtenu par le produit de deux nombres à `n` chiffres.

---

## 🛠️ Solution

Ce dossier contient une solution au **problème 004 du Project Euler**, implémentée en **C**.

### 📁 Fichier

- **`main.c`** : Contient le code source de la solution.

---

## ▶️ Exécution

Assure-toi d’avoir un compilateur **C (comme GCC)** installé, puis compile et exécute un problème avec :

```bash
cd c/probleme-004
gcc main.c -o probleme-004
./probleme-004
```

---

## 📖 Explications

1. Définir une fonction `isPalindrome(n)` pour vérifier si un nombre se lit dans les deux sens.
2. Déterminer les bornes :

   - Plus petit nombre à `n` chiffres : `10 ** (n - 1)`
   - Plus grand nombre à `n` chiffres : `10 ** n - 1`

3. Parcourir tous les produits possibles de deux nombres à `n` chiffres.
4. Tester chaque produit avec `isPalindrome` et mettre à jour le maximum si nécessaire.

---

## 🔍 Résultat attendu

Pour `n = 3`, la solution devrait retourner : **`906609`**

---

## 📚 Ressources

- [Project Euler - Problem 4](https://projecteuler.net/problem=4)
