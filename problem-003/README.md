> **Titre :**  Le plus grand diviseur premier 
> **Langage :** JavaScript  

## Énoncé du problème

Les principaux facteurs de 13195 sont 5, 7, 13 et 29.

Quel est le facteur premier le plus important du nombre donné ?

**Objectif :**  
Trouver le plus grand de tous les facteurs premiers d'un nombre <n>

## Approche utilisée

1. Commencez par le plus petit facteur premier (2).
2. Si le facteur actuel au carré est inférieur ou égal à `n`, divisez `n` par le facteur :
   - S'il divise `n`, divisez `n` par le facteur.
   - Sinon, incrémentez le facteur.
3. Lorsque la boucle se termine, `n` est le plus grand facteur premier.

## Exécution

Tu peux exécuter ce script avec **Node.js** :

```bash
node index.js
```
