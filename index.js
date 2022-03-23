var parseString = require('xml2js').parseString;
var xml = `
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
        console.log(err);
    else
        console.log(result);
});