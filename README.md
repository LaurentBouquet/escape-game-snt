# Escape Game SNT

> Merci à Nat-Faeeria (https://gitlab.com/Nat-Faeeria/escape-game-snt) d'avoir initié ce projet.
  Je m'en suis inspiré et l'ai modifié pour l'adapter à mon contexte de classe de SNT, tout en conservant la licence GNU GPL 3.0.

Ce site est un escape game prévu pour 45 minutes pour une introduction à la nouvelle matière SNT en Seconde.

Je n'ai pas encore testé ce programme avec mes classes, la rentrée venant juste de commencer. 

# Recommandations

Vous pouvez prendre ce code tel quel et le mettre sur un serveur web en ligne, ou utiliser UWamp (ou autre) pour disposer d'un serveur portable sur clé usb en classe (et ainsi éviter des problèmes en cas de connexion à Internet défaillante)

Je vous conseille d'obfusquer et de minifier les fichiers JS présentés, pour éviter que des élèves un peu plus initiés que les autres aillent y chercher des réponses. 

Il suffit de changer l'attribut 'src' des balises '<\script>' des pages html et de mettre les versions obfusquées ('*_obs') des fichiers JS. Ce n'est pas la version par défaut, étant une copie de travail et non de production.

# Notice pour les profs

Disponible [ici] (https://gitlab.com/Nat-Faeeria/escape-game-snt/blob/master/notice.pdf)
Attention ! La notice est DANS les sources du jeu, il faudra penser à l'enlever quand vous le déployez !

# Version live

Disponible [ici](http://escape-game-snt.ga)

# Licence

Ce programme est sous [licence GNU GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.html)
Vous pouvez l'utiliser, le distribuer, le modifier librement, à condition que ce que vous produisiez à partir de ce programme soit aussi sous cette licence.

# Améliorations à venir

Le code est en v0.1, pas du tout propre (beaucoup de duplications en js et css)

Aucun processus d'automatisation du build (minification, obfuscation, ...) n'a été mis en place pour l'instant

L'accessibilité n'a pas encore été travaillée
