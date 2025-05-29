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
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Menu {
  prepare(): void;
}

class PlatoCombinado implements Menu {
  prepare(): void {
    console.log("El plato combinado esta en preparación");
  }
}

class Ración implements Menu {
  prepare(): void {
    console.log("La ración esta en preparación");
  }
}

abstract class Restaurant {
  abstract createMenu(): Menu;

  orderMenu() {
    const menu = this.createMenu();
    menu.prepare();
  }
}

class RacionesSection extends Restaurant {
  override createMenu(): Menu {
    return new Ración();
  }
}

class PlatosCombinadosSection extends Restaurant {
  override createMenu(): Menu {
    return new PlatoCombinado();
  }
}

function main() {
  let restaurant: Restaurant;

  const restaurantSection = prompt(
    "¿A que sección del restaurante iras? (raciones / platos combinados)"
  );

  switch (restaurantSection) {
    case "raciones":
      restaurant = new RacionesSection();
      break;

    case "platos combinados":
      restaurant = new PlatosCombinadosSection();
      break;

    default:
      throw new Error("Opción no valida");
  }

  restaurant.orderMenu()
}

main();
