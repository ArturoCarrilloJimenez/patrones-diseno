/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

import { COLORS } from "../helpers/colors.ts";

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface PlatoPrincipal {
  prepare(): void;
}

interface Bebida {
  llenar(): void;
}

class PlatoCombinado implements PlatoPrincipal {
  prepare(): void {
    console.log("preparando plato combinado");
  }
}

class Racion implements PlatoPrincipal {
  prepare(): void {
    console.log("preparando ración");
  }
}

class Agua implements Bebida {
  llenar(): void {
    console.log("sirviendo vaso de agua");
  }
}

class Refresco implements Bebida {
  llenar(): void {
    console.log("llenado lata de refresco");
  }
}

interface RestaurantFactory {
  createMenu(): PlatoPrincipal;
  createBebida(): Bebida;
}

class FastFodRestaurantFactory implements RestaurantFactory {
  createBebida(): Bebida {
    return new Refresco();
  }
  createMenu(): PlatoPrincipal {
    return new PlatoCombinado();
  }
}

class TraditionalRestaurantFactory implements RestaurantFactory {
  createBebida(): Bebida {
    return new Agua();
  }
  createMenu(): PlatoPrincipal {
    return new Racion();
  }
}

function main(factory: RestaurantFactory) {
  factory.createMenu().prepare();
  factory.createBebida().llenar();
}

console.log('Fast Fod');
main(new FastFodRestaurantFactory());

console.log('Raciones');
main(new TraditionalRestaurantFactory());
