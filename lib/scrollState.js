// Objeto mutable a propósito: el progreso de scroll cambia en cada frame,
// así que lo leemos por referencia (en useFrame y en un rAF propio) en vez
// de pasarlo por React state, que re-renderizaría toda la app 60 veces por segundo.

export const scrollState = {
  progress: 0, // 0 -> 1, recorrido total de la página
  velocity: 0, // -1 -> 1 aprox, útil para dar "peso" a la cámara
};

// Referencia a la instancia de Lenis, para que Nav pueda pedirle scrollTo()
// sin tener que levantar la instancia hasta un Context.
export const lenisRef = { current: null };
