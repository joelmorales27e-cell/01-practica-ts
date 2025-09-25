function reemplazar(txt: string, buscar: string, nuevo: string): string {
  return txt.replace(buscar, nuevo);
}
console.log("29:", reemplazar("Me gusta fortnite", "fortnite", "Minecraft"));