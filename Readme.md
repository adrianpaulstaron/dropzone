# Lifen Frontend Challenge (React / Electron)

Challenge réalisé dans le cadre d'une candidature pour le [poste de Junior Software Engineer](https://www.welcometothejungle.co/fr/me/applications#c/lifen-3f80914cc3bafb18d5c7ef45) chez Lifen.  
Les instructions se trouvent en readme dans chaque répertoire.  
  
Ce projet a été l'occasion pour moi de découvrir Electron, que je n'avais jamais utilisé auparavant.

## Notes sur les technologies utilisées
J'ai utilisé le framework React avec Reactstrap,  
le composant open-source [react-dropzone](https://github.com/react-dropzone/react-dropzone),  
Electron à partir du niveau 4,    
[chokidar](https://github.com/paulmillr/chokidar) pour l'observation du répertoire d'upload au niveau 5.

## Lancement (partie React, niveaux 1 à 3)
Dans chaque répertoire:  
`npm install`  
`npm start`  
  
## Partie Electron (partie Electron, niveaux 4 et 5)
À partir du niveau 4, il est nécessaire d'avoir installé le package [foreman](https://www.theforeman.org/) pour lancer l'application.  
`npm install -g foreman`  
    
Il est également nécessaire d'être sous Unix pour faire fonctionner les niveaux 4 et 5 (donc sous macOS ou Linux par exemple).  
    
Le répertoire observé au niveau 5 s'appelle FHIR et se trouve à la racine du projet.
