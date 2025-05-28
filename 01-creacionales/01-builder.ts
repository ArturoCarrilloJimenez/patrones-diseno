/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

type typeCar = "undefined" | "sub" | "turismo" | "4x4";

class Car {
  public motor: string = "motor sin definer";
  public color: string = "color sin definer";
  public type: typeCar = "undefined";
  public compite?: boolean = false;

  displayCar() {
    console.log(`Este vinculo cuenta con:
      Motor ${this.motor}
      chasis ${this.color}
      tipo ${this.type}
      turbo ${this.compite}
      `);
  }
}

class CarBuilder {
  private car: Car;

  constructor() {
    this.car = new Car();
  }

  setMotor(motor: string): CarBuilder {
    this.car.motor = motor;
    return this;
  }

  setColor(color: string): CarBuilder {
    this.car.color = color;
    return this;
  }

  setCompite(compite: boolean): CarBuilder {
    this.car.compite = compite;
    return this;
  }

  setType(type: typeCar): CarBuilder {
    this.car.type = type;
    return this;
  }

  build() {
    return this.car;
  }
}

function main() {
  const car: Car = new CarBuilder()
    .setMotor("v8 porche")
    .setColor("black")
    .setType("sub")
    .build();

    car.displayCar()

    const basicCar: Car = new CarBuilder()
      .setMotor("1.9 gasolina")
      .setColor("red")
      .setType("turismo")
      .setColor('grey')
      .build();

      basicCar.displayCar();
}

main();
