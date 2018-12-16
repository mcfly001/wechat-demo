 const xml2js = require('xml2js')

 const xmlToJson = xml => {
   return new Promise((resolve, reject) => {
     xml2js.parseString(xml, {trim: true},  (err, content) => {
       if(err) reject(err)
       else{
        resolve(content)
       }
     })
   })
 }

 const jsonToXml = result => {
  const builder = new xml2js.Builder()
  return builder.buildObject(result)
 }

 module.exports = {
  xmlToJson,
  jsonToXml
 }