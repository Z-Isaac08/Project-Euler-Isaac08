# 🧩 Problème 002 - Somme des termes pairs de Fibonacci

## 📋 Énoncé

Chaque nouveau terme de la suite de Fibonacci est obtenu en additionnant les deux termes précédents.
En commençant par **1** et **2**, les dix premiers termes sont :
**1, 2, 3, 5, 8, 13, 21, 34, 55, 89**

En considérant les termes de la suite de Fibonacci dont la valeur ne dépasse pas `n`, il s’agit de **trouver la somme de tous les termes pairs**.

**Objectif :** Calculer la somme de tous les nombres pairs de la suite de Fibonacci dont la valeur est inférieure à `n`.

---

## 🛠️ Solution

Ce dossier contient une solution au **problème 002 du Project Euler**, implémentée en **JavaScript**.

### 📁 Fichier

* **`index.js`** : Contient le code source de la solution.

---

## ▶️ Exécution

Assure-toi d’avoir **Node.js** installé, puis exécute la commande suivante dans ton terminal :

```bash
cd problem-002
node index.js
```

---

## 📖 Explications

1. Générer les termes de la suite de Fibonacci jusqu’à la limite `n`
2. Conserver uniquement les termes pairs
3. Additionner ces termes pour obtenir la somme finale

---

## 🔍 Résultat attendu

Pour `n = 4 000 000`, la solution devrait retourner : **`4613732`**

---

## 📚 Ressources

- [Project Euler - Problem 2](https://projecteuler.net/problem=2)
