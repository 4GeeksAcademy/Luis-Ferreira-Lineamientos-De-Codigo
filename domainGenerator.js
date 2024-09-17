/*let marcas = ["tech", "sol", "group"];

let adj = ["fast", "smart", "secure"];

let dominioComercial = [".com", ".net", ".org"];

for (let marca of marcas) {
  for (let adjetivo of adj) {
    for (let dominio of dominioComercial) {
      console.log("www." + marca + adjetivo + dominio);
    }
  }
}*/

function generatorDomains(brands, adjectives, tlds) {
  //Se crea una función para volver  utiliza y se cuida la indentación mediante dar formato a documento con Prettier.
  let domains = []; // Se guarda en una variable que podemos reutilizar dentro de la función.

  for (let brand of brands) {
    for (let adj of adjectives) {
      for (let tld of tlds) {
        domains.push(`www.${brand}${adj}${tld}`); // Se usa Template Literals, para hacer más simple la lectura.
      }
    }
  }
  return domains;
}

let brands = ["tech", "sol", "group"]; // Se reutilizan los arrays, pero se acortan la variables y busque la palabra mas corta en Inglés.

let adjectives = ["fast", "smart", "secure"];

let tlds = [".com", ".net", ".org"];
let generatedDomains = generatorDomains(brands, adjectives, tlds); 
generatedDomains.forEach((domain) => console.log(domain));
