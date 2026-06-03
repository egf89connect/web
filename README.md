# Castro Pintures — Guia d'edició i publicació

Benvingut/da! Aquesta guia t'explica com canviar els textos, el telèfon o les fotos sense tocar res tècnic.

---

## ✏️ On es canvia tot: el fitxer `lib/manifest.js`

**Obre aquest fitxer amb el Bloc de notas** (clic dret → Abrir con → Bloc de notas).

Trobaràs totes les dades de la web allà dintre. Canvia el que necessitis i desa (Ctrl+S). Torna al navegador i refresca (F5) per veure els canvis.

---

## 📞 Canviar el telèfon

Busca la línia:

```
phone: "+34 600 000 000",
```

Canvia-la pel teu número real. Fes el mateix a les dues línies de sota:

```
phoneDisplay: "600 000 000",
whatsapp: "34600000000",
```

La línia `whatsapp` ha d'anar **sense el +** i sense espais (exemple: `34612345678`).

---

## 📸 Canviar les fotos de la galeria

A la secció `gallery:` del fitxer, trobaràs línies com:

```js
{ url: "https://...", alt: "Descripció de la foto" },
```

Substitueix la URL per la de la teva foto. Pots pujar les teves fotos reals a:
- La mateixa carpeta del projecte (p. ex. `assets/img/foto1.jpg`) i posar `url: "assets/img/foto1.jpg"`
- Qualsevol servei d'allotjament d'imatges (Google Drive públic, Imgur, etc.)

---

## 🖼️ Canviar la foto de fons del Hero

Obre `css/styles.css`, busca la línia:

```css
background-image: url('https://images.unsplash.com/photo-15860232...');
```

Canvia la URL per la foto que vulguis (mateixa carpeta o URL externa).

---

## 🔗 Canviar les zones de servei

Al fitxer `lib/manifest.js`, busca `zonesServei:` i afegeix o treu ciutats de la llista.

---

## 🚀 Pujar la web a Hostinger

1. Entra al teu panell de Hostinger
2. Ve a **Gestor de fitxers** (File Manager) → carpeta `public_html`
3. **Elimina** els fitxers que ja hi hagi (si la carpeta és buida, millor)
4. **Arrossega** tota la carpeta `Web Castro` (o el seu contingut) a `public_html`
5. Assegura't que `index.html` queda directament dins `public_html` (no dins una subcarpeta)
6. Refresca el navegador amb el teu domini — la web ja és en línia!

---

## ❓ Preguntes freqüents

**La web es veu bé al meu ordinador però no en línia?**
Comprova que l'`index.html` estigui directament a `public_html`, no dins d'una altra carpeta.

**Com afegeixo un servei nou?**
Al fitxer `manifest.js`, copia un bloc de la secció `services:` i canvia els valors (nom, descripció, etc.).

**Les animacions no funcionen?**
La web funciona perfectament sense animacions. Comprova la connexió a internet (les animacions necessiten carregar GSAP des d'internet la primera vegada).

---

*Web creada per a Castro Pintures · 2026*
