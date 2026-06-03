/**
 * =====================================================
 *  CASTRO PINTURES — FITXER DE CONFIGURACIÓ EDITABLE
 *  Edita aquest fitxer amb el Bloc de notas per
 *  canviar textos, telèfon, serveis i galeria.
 *  Desa i refresca el navegador per veure els canvis.
 * =====================================================
 */
(function () {
  window.__CASTRO_PINTURES__ = {

    /* ── MARCA ─────────────────────────────────────── */
    brand: {
      name:      "Castro Pintures",
      tagline:   "Transformem espais, creem llars.",
      kicker:    "Pintura i Alta Decoració · Acabats Professionals",
      year:      "2016",
      zona:      "Catalunya",
      phone:     "+34 600 000 000",           // ← CANVIA EL TELÈFON AQUÍ
      phoneDisplay: "600 000 000",
      whatsapp:  "34600000000",               // ← CANVIA (sense + ni espais)
      instagram: "@castropintures",
      igUrl:     "https://instagram.com/castropintures",
      horari:    "Dl–Dv: 8:00–19:00 · Ds: 9:00–14:00",
    },

    /* ── ZONA DE SERVEI ─────────────────────────────── */
    zonesServei: [
      "Barcelona", "Hospitalet de Llobregat",
      "Badalona", "Sabadell", "Terrassa",
      "Cornellà de Llobregat", "Sant Cugat del Vallès",
      "Rubí", "Mollet del Vallès", "Granollers",
    ],

    /* ── SERVEIS / ACABATS (10 targetes) ─────────────── */
    services: [
      {
        id: "interiors",
        name: "Pintura d'Interiors",
        type: "Residencial",
        subtitle: "Llars amb personalitat",
        desc: "Pintura plàstica mat de màxima cobertura, colors personalitzats i protecció absoluta de l'entorn durant tota l'obra.",
        bg: "#F0EAE1",
        icon: "roller",
      },
      {
        id: "alta-decoracio",
        name: "Alta Decoració",
        type: "Premium",
        subtitle: "Efectes i textures úniques",
        desc: "Estucs venecians, terres i parets de microciment i revestiments decoratius per a espais exclusius.",
        bg: "#EAD7CE",
        icon: "spatula",
      },
      {
        id: "paper-pintat",
        name: "Col·locació de Paper Pintat",
        type: "Detall",
        subtitle: "Muralisme i patrons",
        desc: "Instal·lació perfecta de papers pintats i vinils de disseny, quadrant patrons al mil·límetre.",
        bg: "#E3ECE4",
        icon: "plan",
      },
      {
        id: "alisat",
        name: "Alisat de Parets",
        type: "Preparació",
        subtitle: "Adéu al gotelé",
        desc: "Eliminació de gotelé i restauració de superfícies fins a aconseguir un acabat completament llis i sedós.",
        bg: "#DEE5EB",
        icon: "trowel",
      },
      {
        id: "esmaltat",
        name: "Esmaltats i Envernissats",
        type: "Fusta i Metall",
        subtitle: "Protecció i brillantor",
        desc: "Tractament de portes, finestres, baranes i mobiliari amb esmalts d'alta resistència i acabat perfecte.",
        bg: "#F4EBE8",
        icon: "brush",
      },
      {
        id: "facanes",
        name: "Pintura de Façanes",
        type: "Exterior",
        subtitle: "Resistència a la intempèrie",
        desc: "Revestiments impermeables i elàstics per protegir i embellir l'exterior del teu edifici anys i anys.",
        bg: "#EAECE6",
        icon: "building",
      },
      {
        id: "industrial",
        name: "Pintura Industrial",
        type: "Grans Superfícies",
        subtitle: "Eficiència i durabilitat",
        desc: "Solucions per a naus, pàrquings i oficines amb pintures epoxi, antilliscants i senyalització vial.",
        bg: "#E3E8EA",
        icon: "warehouse",
      },
      {
        id: "antihumitat",
        name: "Tractaments Antihumitat",
        type: "Solucions",
        subtitle: "Sanejament de superfícies",
        desc: "Diagnòstic i aplicació de pintures impermeabilitzants i tractaments contra la floridura i les eflorescències.",
        bg: "#EFEBE4",
        icon: "shield",
      },
      {
        id: "microciment",
        name: "Microciment",
        type: "Continuïtat",
        subtitle: "Superfícies sense juntes",
        desc: "Aplicació de microciment en banys, cuines i terres per a un estil modern, minimalista i fàcil de netejar.",
        bg: "#E5E3DF",
        icon: "layers",
      },
      {
        id: "assessorament",
        name: "Assessorament de Color",
        type: "Disseny",
        subtitle: "Troba el teu to ideal",
        desc: "Ajuda professional per triar la paleta cromàtica que millor s'adapta a la llum i l'ambient de la teva llar.",
        bg: "#EBECE3",
        icon: "palette",
      },
    ],

    /* ── GALERIA (fotos reals de Castro Pintures) ──────── */
    gallery: [
      // Fila 1 — façanes i exteriors
      { url: "assets/img/p01.jpg", alt: "Façana bicolor gris i blanc acabat impecable" },
      { url: "assets/img/p02.jpg", alt: "Façana residencial blanca rehabilitada" },
      { url: "assets/img/p03.jpg", alt: "Façana crema i marró acabat professional" },
      { url: "assets/img/p04.jpg", alt: "Xalet modern pintura exterior amb piscina" },
      { url: "assets/img/p10.jpg", alt: "Coberta pintada tractament impermeabilitzant" },
      // Fila 2 — interiors i decoració
      { url: "assets/img/p07.jpg", alt: "Passadís llarg amb emmotllures beige elegant" },
      { url: "assets/img/foto1.jpg", alt: "Passadís amb emmotllures i pintura premium" },
      { url: "assets/img/p06.jpg", alt: "Paper pintat de punts de colors habitació" },
      { url: "assets/img/p08.jpg", alt: "Paret textura microciment gris beige" },
      { url: "assets/img/foto3.jpg", alt: "Acabat venecià daurat paret saló" },
      // Fila 3 — treballs especials i professionals
      { url: "assets/img/p05.jpg", alt: "Escales microciment terra i parets" },
      { url: "assets/img/p09.jpg", alt: "Local comercial restaurant pintura blanca" },
      { url: "assets/img/foto2.jpg", alt: "Professional aplicant alisat de parets" },
      { url: "assets/img/foto4.jpg", alt: "Pintura industrial exterior nau" },
      { url: "assets/img/foto5.jpg", alt: "Façana metàl·lica pintada" },
    ],

    /* ── RESSENYES GOOGLE ───────────────────────────────
       Canvia els textos, noms i estrelles (màxim 5)
       per les ressenyes reals dels teus clients.
    ─────────────────────────────────────────────────── */
    reviews: [
      {
        name:  "Yolanda M.C.",
        stars: 5,
        date:  "Fa 8 mesos",
        text:  "Nos han pintado la fachada de casa y han hecho un trabajo excelente, son muy profesionales, muy limpios y de trato muy formal, son un equipo estupendo, todos, sin duda volveremos a contar con ellos para futuros proyectos."
      },
      {
        name:  "Jorge Ortiz",
        stars: 5,
        date:  "Fa un any",
        text:  "Pintaron la casa y esmaltaron las puertas. Les dejé las llaves y se encargaron de todo. Jordi gran profesional y entregado a su trabajo. Buena gente y de proximidad. Lo recomiendo al 100%."
      },
      {
        name:  "Jesús Panchón Gordillo",
        stars: 5,
        date:  "Fa un any",
        text:  "Jordi ha hecho un trabajo maravilloso!! Gran profesional, excelente trato, y sobre todo es una persona de confianza. Lo recomiendo 100%."
      },
      {
        name:  "Nuria Soltero",
        stars: 5,
        date:  "Fa un any",
        text:  "Jordi es muy profesional. Siempre puntual y se preocupa de que todo quede a la perfección. No dudaré en contratar sus servicios en el futuro. 100% recomendable!!!"
      },
      {
        name:  "Giovanna Sabater Martínez",
        stars: 5,
        date:  "Fa 11 mesos",
        text:  "Excepcional; en un día techo de planta industrial perfectamente lacado; vamos ahora a por fachada! Sublime!"
      },
      {
        name:  "Monica Cases",
        stars: 5,
        date:  "Fa 10 mesos",
        text:  "Acabaron con el gotelé de toda la casa, incluso en el techo!!! No quedó ni rastro, ya no es ni un recuerdo. Buen trabajo!"
      },
    ],

    /* ── WHATSAPP ── missatge pre-escrit ─────────────── */
    waMessage: "Hola! He vist la vostra web i m'agradaria demanar un pressupost sense compromís. El meu projecte és:",

  };
})();
