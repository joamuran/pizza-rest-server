# Api d'exemple d'una pizzeria

Aquesta aplicació implementa un servidor web amb ExpressJS, que ofereix una API REST amb els següents endpoints:

* `/api/pizzeria/pizzes`: Obté una llista de pizzes. El mètode suporta paginació amb:
    * `/api/pizzeria/pizzes?pageNumber=num`: On num és el número de pàgina. Si no s'especifica, és la primera, i per defecte mostra 10 registres.
* `/api/pizzeria/entrants`: Obté una llista dels entrants. El mètode suporta paginació de la mateixa manera que les pizzes.
* `/api/pizzeria/begudes`: Obté una llista de les begudes. El mètode suporta paginació de la mateixa manera que les pizzes.

# Exemples en format XML

Al directori public/xml s'ha incorporat també un fitxer en format XML per a pizzes.

