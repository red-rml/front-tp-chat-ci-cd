This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome !

## CI/CD

### Intégration Continue

Ce projet utilise GitHub Actions pour automatiser le processus d'intégration continue (CI).
Le workflow CI est déclenché automatiquement sur chaque pull request.

#### Étapes pour la CI

Voici comment reproduire les étapes du CI localement :

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/Pellegrin69/nodejs_mongodb.git
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Linter le code**
   ```bash
   npm run lint
   ```

4. **Lancer le test**
   ```bash
   npm test
   ```

### Déploiement Continu (CD)

Le déploiement continu permet de créer une nouvelle image Docker et de la pousser sur Docker Hub.
Le workflow est déclenché si une Pull Request est faite sur GitHub vers la branche *main* et si le job *build* du CI a
réussi.

### Livraison Continue (CD)

#### Étapes de Déploiement

1. **Créer une Nouvelle Branche de Fonctionnalité**
    - Si vous travaillez sur une nouvelle fonctionnalité, créez une nouvelle branche de fonctionnalité en utilisant la
      commande `git checkout -b ma-nouvelle-fonctionnalite`.


2. **Effectuer les Modifications Nécessaires**
    - Apportez les modifications nécessaires à l'application.


3. **Commit et Push des Modifications**
    - Effectuez un commit de vos modifications avec `git commit -m "Description du changement"`.
    - Poussez les modifications vers le dépôt distant avec `git push origin ma-nouvelle-branche` (si vous travaillez sur
      une nouvelle branche).


4. **Créer une Pull Request (PR)**
    - Créez une Pull Request pour fusionner vos modifications dans la branche principale.


5. **Attente des Résultats du CI/CD**
    - Attendez que le processus CI/CD s'exécute automatiquement sur votre Pull Request.
    - Vérifiez que le CI est réussi avant de poursuivre.


6. **Fusionner la Pull Request**
    - Une fois le CI réussi, demandez à un collègue de confiance de revoir votre PR.
    - Fusionnez la PR dans la branche principale.


7. **Créer un Tag pour la Nouvelle Version**
    - Utilisez la commande `git tag -a v1.2.3 -m "Description de la version"` pour créer un nouveau tag.
      Remplacez `v1.2.3` par la version appropriée.


8. **Pousser le Tag vers GitHub**
    - Poussez le tag vers GitHub avec `git push origin v1.2.3`.


9. **Attente du Déploiement Automatique (CD)**
    - Attendez que le processus de déploiement continu (CD) soit déclenché automatiquement pour le tag que vous avez
      créé.


10. **Vérifier le Déploiement**
    - Une fois le CD réussi, vérifiez que la nouvelle version de l'application est déployée conformément aux modalités
      spécifiées dans le README.


11. **Célébrer le Succès !**
    - Félicitations ! Vous avez déployé avec succès la nouvelle version de l'application.