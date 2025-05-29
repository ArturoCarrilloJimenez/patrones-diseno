/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 */

/**
 * 	!Descripción:
  1.	Completen las clases SalesReport e InventoryReport para implementar 
      la interfaz Report, generando el contenido de cada reporte en el método generate.
	  
  2.	Implementen las clases SalesReportFactory e InventoryReportFactory 
      para crear instancias de SalesReport y InventoryReport, respectivamente.

	3.	Prueben el programa generando diferentes tipos de reportes usando
      el prompt para seleccionar el tipo de reporte.
 */

import { COLORS } from "../helpers/colors.ts";

// Genero una interfaz del tipo que quiero con los métodos comunes
interface Reporte {
  gerente(): void;
}

// Genero los tipos que implementan la interfaz
class SaleReporte implements Reporte {
  gerente(): void {
    console.log("reporte de sala");
  }
}

class InventoryReporte implements Reporte {
  gerente(): void {
    console.log("reporte de inventario");
  }
}

// Clase abstracta para la creación de un objeto y unas subclases se encargan de generar la clase especifica
abstract class ReporteFactory {
  abstract createReporte(): Reporte;

  generateReport() {
    const report = this.createReporte()
    report.gerente()
  }
}

// Subclases que se encarga de genera el objeto indicado
class SaleReporteFactory extends ReporteFactory {
  override createReporte(): Reporte {
    return new SaleReporte();
  }
}

class InventarioReporteFactory extends ReporteFactory {
  override createReporte(): Reporte {
    return new InventoryReporte();
  }
}


function main() {
  let report: ReporteFactory

  const typeReport = prompt('De que tipo es el reporte (sala/inventario)')

  switch (typeReport) {
    case "sala":
      report = new SaleReporteFactory();
      break;
    case "inventario":
      report = new InventarioReporteFactory();
      break;

    default:
      throw new Error('Tipo no valido');
  }

  report.generateReport()
}

main();
