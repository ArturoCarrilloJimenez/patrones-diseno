/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creaciones que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Documento {
  private title: string;
  private description: string;
  private autor: string;

  constructor(title: string, description: string, autor: string) {
    this.title = title;
    this.description = description;
    this.autor = autor;
  }

  clone() {
    return new Documento(this.title, this.description, this.autor);
  }

  displayInfo() {
    console.log(this.title + " - " + this.description + " - " + this.autor);
  }
}

function main() {
  const document = new Documento("prueba", "description", "autor");

  document.displayInfo();
}
