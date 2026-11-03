// Copia o app web (raiz do repositório) para www/, que o Capacitor empacota no APK.
import { cpSync, rmSync, mkdirSync } from "node:fs";
const files = ["index.html", "manifest.webmanifest", "sw.js", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png"];
rmSync("www", { recursive: true, force: true });
mkdirSync("www");
for (const f of files) cpSync(f, "www/" + f);
cpSync("vendor", "www/vendor", { recursive: true });
console.log("www/ pronto");
