# XML-Anwendungen Vorlesung 02 vom 23.03.2022

## Übungen Lesen einer xml-Datei mit NodeJS

Wir nutzen das npm Paket `xml2js`

```batch
npm init -y
npm i -D xml2js
```

Der `xml2js` wurde gewählt, da er eine sehr hohe download-Zahl besitzt und ein aktuelles npm Paket ist.

Ausserdem wurde eine `.gitignore` Datei angelegt mit dem Inhalt `node_modules` so dass die Pakete einfach mit `$npm update` aktualisiert werden können.

## Probleme mit xml

XML-Parser wie z.B. der von `xml2js` sind gewöhnlich sehr restriktiv, d.h. sie untersuchen die xml-Datei zuerst ob sie auch *valid* sind. Kleine Fehler wie z.B. das *&* Zeichen bewirken einen Fehler beim Parsen.

Beispiel für das index.js

```javascript
const {parseString} = require('xml2js');
const xml = `
<?XML version="1.0" encoding="UTF-8" standalone="yes"?>
<katalog>
    <firma>
        <name>Ruhland&Söhne GMBH</name>
        <adresse>02826 Görlitz, Brückenstraße 1</adresse>
        <kontakte>
            <1>+49 177 7848970</1>
            <2>+49 3581 374 4302</2>
        </kontakte>
    </firma>
</katalog>
`;

parseString(xml, function (err, result) {
    if ( err !== null )
        console.log(err.message);
    else
        console.log(result);
    });
```