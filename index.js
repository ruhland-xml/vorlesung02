var parser = require('fast-xml-parser');

xmlData = `
<results>
  <books>
   <bookinfo>
        <name>1</dbname>
   </bookinfo>
   <bookinfo>
     <name>2</dbname>
   </bookinfo>
   <bookinfo>
     <name>3</dbname>
   </bookinfo>
 </books>
</results>
`
var jsonObj = parser.parse(xmlData);
