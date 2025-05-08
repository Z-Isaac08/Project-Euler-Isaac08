> **Titre :**  Somme des termes pairs de la suite de Fibonacci
> **Langage :** JavaScript  

## Énoncé du problème

Chaque nouveau terme dans la séquence de Fibonacci est généré en ajoutant les deux termes précédents. En commençant par 1 et 2, les 10 premiers termes seront:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89,

En considérant les termes dans la séquence de Fibonacci dont les valeurs ne dépassent pas n, trouver la somme des termes à valeurs paires.

**Objectif :**  
Trouver la somme de tous les nombres paires de la suite de fibonnaci dont les valeurs sont inférieurs à <n>

## Approche utilisée

1. Générer les termes de la suite de Fibonacci **jusqu’à la limite `n`**.
2. Stocker la suite dans un tableau.
3. Parcourir ce tableau et **additionner uniquement les termes pairs**.

## Exécution

Tu peux exécuter ce script avec **Node.js** :

```bash
node index.js
```