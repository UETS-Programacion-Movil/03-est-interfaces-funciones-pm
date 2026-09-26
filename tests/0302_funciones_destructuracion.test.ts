import {
  saludarEstudiante,
  calcularTotalCarrito,
  type ItemCarrito
} from "../src/0302_funciones_destructuracion.js";

console.log("=================================================================");
console.log("RETO 0302 - Funciones Tipadas & Destructuración (Semana 03 WWRR)");
console.log("=================================================================\n");

let testsFallidos = 0;

function assert(condicion: boolean, descripcion: string, pista?: string) {
  if (condicion) {
    console.log(`  ✅ [PASÓ]: ${descripcion}`);
  } else {
    console.log(`  ❌ [FALLÓ]: ${descripcion}`);
    if (pista) console.log(`     👉 PISTA: ${pista}`);
    testsFallidos++;
  }
}

console.log("🔍 Verificando Paso 1: saludarEstudiante() con destructuración...");
assert(
  saludarEstudiante({ nombre: "Mateo Vintimilla", curso: "3E1" }) === "[SALUDO] Hola Mateo Vintimilla del curso 3E1",
  "Saludo generado correctamente para 3E1",
  "Usa: `[SALUDO] Hola ${nombre} del curso ${curso}` con el parámetro destructurado"
);
assert(
  saludarEstudiante({ nombre: "Ana Morales", curso: "3E2" }) === "[SALUDO] Hola Ana Morales del curso 3E2",
  "Saludo generado correctamente para 3E2"
);

console.log("\n🔍 Verificando Paso 2: calcularTotalCarrito()...");
assert(calcularTotalCarrito([]) === 0, "Carrito vacío retorna 0", "Verifica el if (items.length === 0)");
const carrito1: readonly ItemCarrito[] = [
  { id: "C1", titulo: "Cuaderno UETS", precio: 10, cantidad: 2 },
  { id: "C2", titulo: "Esfero azul", precio: 5.50, cantidad: 1 }
];
assert(calcularTotalCarrito(carrito1) === 25.50, "Carrito (10x2 + 5.50x1) totaliza $25.50", "Acumula precio * cantidad destructurando { precio, cantidad }");
const carrito2: readonly ItemCarrito[] = [
  { id: "C3", titulo: "Regla metálica", precio: 9.99, cantidad: 3 }
];
assert(calcularTotalCarrito(carrito2) === 29.97, "Carrito (9.99x3) totaliza $29.97 redondeado", "Usa Number(total.toFixed(2))");

console.log("\n-----------------------------------------------------------------");
if (testsFallidos === 0) {
  console.log("🎉 ¡FELICITACIONES! Has completado el Reto 0302 con 100% de éxito.");
  console.log("👉 Ejecuta pnpm test para la evaluación consolidada de la Semana 03.\n");
  process.exit(0);
} else {
  console.log(`⚠️ Tienes ${testsFallidos} prueba(s) pendiente(s). Completa tu código en src/0302_funciones_destructuracion.ts y vuelve a ejecutar.`);
  process.exit(1);
}
