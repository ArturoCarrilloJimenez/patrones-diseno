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
 */

import { COLORS } from "../helpers/colors.ts";

//! Tarea: crear un QueryBuilder para construir consultas SQL
/**
 * Debe de tener los siguientes métodos:
 * - constructor(table: string)
 * - select(fields: string[]): QueryBuilder -- si no se pasa ningún campo, se seleccionan todos con el (*)
 * - where(condition: string): QueryBuilder - opcional
 * - orderBy(field: string, order: string): QueryBuilder - opcional
 * - limit(limit: number): QueryBuilder - opcional
 * - execute(): string - retorna la consulta SQL
 * 
 ** Ejemplo de uso:
  const usersQuery = new QueryBuilder("users") // users es el nombre de la tabla
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log('Consulta: ', usersQuery);
  // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
 */

//! Solución

class QueryBuilder {
  private table: string;
  private fields?: string[] = [];
  private conditions?: string[] = [];
  private orderFiel?: string;
  private orderType?: string;
  private maxRegister?: number;

  constructor(table) {
    this.table = table;
  }

  select(...fields: string[]): QueryBuilder {
    this.fields = fields;
    return this;
  }

  where(condition: string): QueryBuilder {
    this.conditions?.push(condition);
    return this;
  }

  orderBy(fiel: string, orderType: string): QueryBuilder {
    this.orderFiel = fiel;
    this.orderType = orderType;
    return this;
  }

  limit(limit: number): QueryBuilder {
    this.maxRegister = limit;
    return this;
  }

  execute() {
    const select =
      this.fields && this.fields.length <= 0
        ? `* `
        : `${this.fields!.join(", ")}`;

    const orderBy =
      this.orderFiel && this.orderType
        ? `ORDER BY ${this.orderFiel} ${this.orderType}`
        : "";

    const limit = this.maxRegister ? `LIMIT ${this.maxRegister}` : ''

    return `SELECT ${select} FROM ${this.table}${
      this.conditions ? " WERE " + this.conditions.join(" AND ") : ""
    } ${orderBy} ${limit}`;
  }
}

function main() {
  const usersQuery = new QueryBuilder("users")
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log("Consulta: ", usersQuery);
}

main();
