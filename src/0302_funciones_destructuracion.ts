/**
 * ============================================================================
 * RETO 0302: Funciones Tipadas & Destructuracion de Objetos
 * Modulo: Programacion Movil - 3° Bachillerato Tecnico (UETS)
 * Semana 03 WWRR (0302 funciones y destructuracion)
 * ============================================================================
 *
 * CONTEXTO / MISION:
 * Las pantallas de tu app movil reciben objetos (usuario, producto, carrito) y deben
 * extraer solo lo necesario. Con la destructuracion evitas el ruido de
 * `props.nombre`, `props.curso` en cada linea y tus funciones quedan limpias.
 *
 * INSTRUCCIONES:
 * 1. Implementa `saludarEstudiante` recibiendo el objeto destructurado.
 * 2. Implementa `calcularTotalCarrito` sumando precio * cantidad con destructuracion.
 * 3. Ejecuta en tu terminal: `pnpm run start:0302` para verificar los tests.
 */

// ============================================================================
// PASO 1: Saludo con Parametro Destructurado
// ============================================================================
export interface FichaEstudiante {
  nombre: string;
  curso: "3E1" | "3E2";
}

/**
 * TODO: Implementa `saludarEstudiante`.
 * Debe recibir el objeto `FichaEstudiante` YA destructurado en el parametro
 * (es decir, el parametro se escribe `{ nombre, curso }: FichaEstudiante`).
 * Formato requerido:
 * `[SALUDO] Hola NOMBRE del curso CURSO`
 * (Ejemplo: `[SALUDO] Hola Mateo Vintimilla del curso 3E1`)
 */
export function saludarEstudiante({ nombre, curso }: FichaEstudiante): string {
  // TODO: Escribe tu logica con Template Strings y reemplaza el return "":
  return "";
}

// ============================================================================
// PASO 2: Total del Carrito con Destructuracion en el Recorrido
// ============================================================================
export interface ItemCarrito {
  readonly id: string;
  titulo: string;
  precio: number;
  cantidad: number;
}

/**
 * TODO: Implementa la funcion `calcularTotalCarrito`.
 * Reglas:
 * 1. Recibe `items`: un arreglo inmutable (`readonly ItemCarrito[]`).
 * 2. Si el arreglo esta vacio, retornar 0.
 * 3. Recorre el arreglo destructurando cada item (`{ precio, cantidad }`) y acumula
 *    `precio * cantidad` de cada uno.
 * 4. Retorna el total redondeado a 2 decimales: Number(total.toFixed(2)).
 */
export function calcularTotalCarrito(items: readonly ItemCarrito[]): number {
  // TODO: Escribe tu logica aqui y reemplaza el return 0:
  return 0;
}
