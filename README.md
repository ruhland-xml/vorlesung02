# XML-Anwendungen Vorlesung 02

## Übungen Lesen einer xml-Datei mit NodeJS

Wir nutzen das npm Paket `fast-xml-parser`

```batch
npm init -y
npm i -D fast-xml-parser
```

Der `fast-xml-parser` wurde gewählt, da er eine sehr hohe download-Zahl besitzt und ein aktuelles npm Paket ist.

Ausserdem wurde eine `.gitignore` Datei angelegt mit dem Inhalt `node_modules` so dass die Pakete einfach mit `$npm update` aktualisiert werden können.