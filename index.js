const miPlaylist = [
    {
      titulo: "Capas de software",
      url: "https://www.youtube.com/watch?v=-Mg1ivgT_gM",
      resumen: "Este video explica las diferentes capas de software y su importancia en el desarrollo.",
      tags: ["Software", "Capas", "Programación", "Apx"],
      visto: true,
      dificultad: 3
    },
    {
      titulo: "¿Siempre hay que aprender?",
      url: "https://www.youtube.com/watch?v=juA0mBB7vgc",
      resumen: "En este video se reflexiona sobre la importancia del aprendizaje continuo en la tecnología.",
      tags: ["Aprendizaje", "Tecnología", "Apx"],
      visto: false,
      dificultad: 2
    },
    {
      titulo: "Aprender programación de forma autodidacta",
      url: "https://www.youtube.com/watch?v=qDM4Fm7RRBY",
      resumen: "Se aborda cómo aprender programación de manera autodidacta y los recursos disponibles.",
      tags: ["Programación", "Autodidacta", "Apx"],
      visto: true,
      dificultad: 4
    },
    {
      titulo: "Aprende programación usando un ROADMAP",
      url: "https://www.youtube.com/watch?v=E3M13dqxdJs",
      resumen: "En este video se explica cómo seguir un roadmap para aprender a programar.",
      tags: ["Roadmap", "Programación", "Apx"],
      visto: true,
      dificultad: 3
    },
    {
      titulo: "Plataformas de cursos",
      url: "https://www.youtube.com/watch?v=OZ-kqPl7SD0",
      resumen: "Se presenta una comparativa de las mejores plataformas para aprender programación.",
      tags: ["Plataformas", "Cursos", "Apx"],
      visto: false,
      dificultad: 2
    }
  ];
  
  // Reporte
  console.log("Total de videos en la playlist:", miPlaylist.length);
  
  // Datos del primer video
  console.log("Primer video - Título:", miPlaylist[0].titulo);
  console.log("Primer video - URL:", miPlaylist[0].url);
  console.log("Primer video - Resumen:", miPlaylist[0].resumen);
  
  // Datos del último video
  const ultimoVideo = miPlaylist[miPlaylist.length - 1];
  console.log("Último video - Título:", ultimoVideo.titulo);
  console.log("Último video - URL:", ultimoVideo.url);
  console.log("Último video - Resumen:", ultimoVideo.resumen);
  