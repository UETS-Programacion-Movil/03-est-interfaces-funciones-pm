/**
 * ============================================================================
 * RETO 0301: De Clases Java POO a Interfaces TypeScript & Duck Typing
 * Modulo: Programacion Movil - 3° Bachillerato Tecnico (UETS)
 * Semana 03 WWRR (0301 interfaces)
 * ============================================================================
 *
 * CONTEXTO / MISION:
 * En 2° de Bachillerato aprendiste Java con clases de 35 lineas llenas de getters,
 * setters y constructores. En desarrollo movil moderno con React Native, modelamos
 * las entidades usando `interface` limpias y seguras.
 *
 * INSTRUCCIONES:
 * 1. Define la interface `PerfilUsuario` para reemplazar la clase Java antigua.
 * 2. Implementa `formatearPerfilUsuario` para visualizar el perfil en pantalla.
 * 3. Define la interface `ProductoItem` y programa el calculo de precios con descuento.
 * 4. Ejecuta en tu terminal: `pnpm run start:0301` para verificar los tests.
 */

// ============================================================================
// CODIGO JAVA ANTIGUO DE REFERENCIA (OBSERVA EL BOILERPLATE):
// ============================================================================
/*
public class UsuarioJava {
    private final String id;
    private String nombreCompleto;
    private String correo;
    private String telefono; // Opcional
    private String rol; // "ADMIN" | "DOCENTE" | "ESTUDIANTE"

    public UsuarioJava(String id, String n, String c, String r) {
        this.id = id; this.nombreCompleto = n; this.correo = c; this.rol = r;
    }
    // + 25 lineas de Getters y Setters...
}
*/

// ============================================================================
// PASO 1: Define la interface `PerfilUsuario` en TypeScript
// ============================================================================
// TODO: Define la interface `PerfilUsuario` con los siguientes campos y modificadores:
// - `id`: de tipo string e INMUTABLE (usa `readonly`)
// - `nombreCompleto`: de tipo string
// - `correo`: de tipo string
// - `telefono`: de tipo string y OPCIONAL (usa `?`)
// - `rol`: de tipo literal `"ADMIN" | "DOCENTE" | "ESTUDIANTE"`

export interface PerfilUsuario {
  // TODO: Declara aqui los 5 campos listados arriba (id, nombreCompleto, correo, telefono?, rol)
}

// TODO: Completa la variable constante `usuarioEjemplo` asignando valores validos:
export const usuarioEjemplo: PerfilUsuario = {
  id: "UETS-2026-001",
  nombreCompleto: "",                                // TODO: Llena tu nombre completo
  correo: "estudiante@est.salesianos.edu.ec",        // TODO: Tu correo institucional
  rol: "ESTUDIANTE"
} as PerfilUsuario;

/**
 * TODO: Implementa `formatearPerfilUsuario`.
 * Formato requerido:
 * `[PERFIL] ID (ROL): NOMBRE - CORREO`
 * (Ejemplo: `[PERFIL] UETS-2026-001 (ESTUDIANTE): Carlos Andrade - carlos@est.salesianos.edu.ec`)
 */
export function formatearPerfilUsuario(usuario: PerfilUsuario): string {
  // TODO: Escribe tu logica con Template Strings y reemplaza el return "":
  return "";
}

// ============================================================================
// PASO 2: Interface `ProductoItem` y Funcion de Descuento
// ============================================================================
// TODO: Define la interface `ProductoItem` con:
// - `id`: string (readonly)
// - `titulo`: string
// - `precio`: number
// - `disponible`: boolean
// - `descuentoPorcentaje`: number (opcional ?)

export interface ProductoItem {
  // TODO: Declara aqui los 5 campos listados arriba (id, titulo, precio, disponible, descuentoPorcentaje?)
}

/**
 * TODO: Implementa la funcion `calcularPrecioFinal`.
 * Reglas:
 * 1. Si el producto NO esta disponible (`!producto.disponible`), retornar 0.
 * 2. Si tiene `descuentoPorcentaje` mayor a 0, restar ese porcentaje al precio original:
 *    descuento = producto.precio * (producto.descuentoPorcentaje / 100)
 *    precioFinal = producto.precio - descuento
 * 3. Si no tiene descuento o es 0, retornar el precio original.
 * 4. Retornar el numero redondeado a 2 decimales: Number(precioFinal.toFixed(2)).
 */
export function calcularPrecioFinal(producto: ProductoItem): number {
  // TODO: Escribe tu logica aqui y reemplaza el return 0:
  return 0;
}
