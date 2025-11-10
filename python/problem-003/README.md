# 🧩 Problème 003 - Le plus grand facteur premier

## 📋 Énoncé

Les facteurs premiers de **13195** sont **5**, **7**, **13** et **29**.

Le but est de déterminer **le plus grand facteur premier** d’un nombre donné `n`.

**Objectif :** Trouver le plus grand facteur premier du nombre `n`.

---

## 🛠️ Solution

Ce dossier contient une solution au **problème 003 du Project Euler**, implémentée en **Python**.

### 📁 Fichier

- **`main.py`** : Contient le code source de la solution.

---

## ▶️ Exécution

Assure-toi d’avoir **Python** installé, puis exécute un problème avec :

```bash
cd problem-003
python main.py
```

---

## 📖 Explications

1. Initialiser le facteur à `2` (le plus petit nombre premier).
2. Tant que le carré du facteur est inférieur ou égal à `n` :

   - Si `n` est divisible par le facteur, diviser `n` par ce facteur.
   - Sinon, incrémenter le facteur.

3. Lorsque la boucle se termine, `n` contient le **plus grand facteur premier**.

---

## 🔍 Résultat attendu

Pour `n = 600851475143`, la solution devrait retourner : **`6857`**

---

## 📚 Ressources

- [Project Euler - Problem 3](https://projecteuler.net/problem=3)
