## Les fonctions de Twig Helper

Pour les feuilles de style, utilisez `{{ encore_entry_link_tags() }}` et `{{ encore_entry_script_tags() }}`. 

Dans les nouveaux projets Symfony, le javascript bloc est à l'intérieur de la balise `<head>`. En outre, Encore affichera un `defer` attribut sur chaque balise script.
Pour modifier ce comportement : `config/packages/webpack_encore.yaml`, modifier `defer: true`

```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>{% block title %}Welcome!{% endblock %}</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 128 128%22><text y=%221.2em%22 font-size=%2296%22>⚫️</text></svg>">
        {# Run `composer require symfony/webpack-encore-bundle` to start using Symfony UX #}
        {% block stylesheets %}
            {{ encore_entry_link_tags('app') }}
        {% endblock %}

        {% block javascripts %}
            {{ encore_entry_script_tags('app') }}
        {% endblock %}
    </head>
    <body>
        {% block body %}{% endblock %}
    </body>
</html>
```

## Utilisation de --watch

Encore démarre, construit et attend d'autres changements. Le HMR ne semble pas fonctionner, nécessite l'actualisation du navigateur pour visualiser les changements.

`npm run watch`

## import/export

Avec export, il est possible de séparer son code dans plusieurs fichiers

Avec `export` (fonction nommée)
````javascript
export function getNiceMessage (exclamationCount) {
    return 'Hello Webpack Encore! Edit me in assets/js/app.js'+'!'.repeat(exclamationCount)
}
````
````javascript
import {getNiceMessage} from "./js/get_nice_message";
````

Avec `export default` (fonction anonyme)
````javascript
export default function (exclamationCount) {
return 'Hello Webpack Encore! Edit me in assets/js/app.js'+'!'.repeat(exclamationCount)
}
````
````javascript
import getNiceMessage from "./js/get_nice_message";
````

Contrairement à PHP, en JavaScript, chaque fichier que vous souhaitez utiliser ailleurs doit exporter quelque chose, comme une fonction, un objet ou même une chaîne.

## Installation de Bootstrap

`npm install bootstrap`

Load bootstrap Javascript (app.js)
```javascript
import 'bootstrap';
```
Load bootstrap CSS (app.css)
```css
@import '~bootstrap';
```