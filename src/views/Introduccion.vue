<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-4  
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/4.png' alt='') 
      .col-lg-8.my-lg-0.my-3
        p La implementación de comunicaciones unificadas y sistemas de seguridad representa un pilar fundamental en la gestión de infraestructura empresarial moderna, donde la conectividad y la protección de la información son esenciales para garantizar operaciones fluidas y seguras. Este componente formativo profundiza en las tecnologías y estrategias necesarias para integrar redes de comunicación confiables y sistemas de seguridad efectivos en distintos entornos.
        .row.justify-content-center.bg1.p-4.brad.mb-4
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/5.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 El contenido inicia con un análisis de la telefonía IP, abordando los conceptos de #[i Voice Over] IP (VoIP), los protocolos de señalización y los criterios de calidad de servicio que permiten comunicaciones de voz de alta fidelidad a través de redes IP. A continuación, se estudian las comunicaciones unificadas, que integran diversos sistemas de mensajería y colaboración para mejorar la eficiencia operativa en las organizaciones, promoviendo un ambiente de trabajo más conectado y productivo.

    .row.justify-content-center.align-items-end.mb-4     
      .col.pt-lg-0.pt-md-4
        p El módulo también examina aspectos de seguridad electrónica, tales como los sistemas de CCTV, control de acceso y alarmas, que proporcionan medidas de protección robustas y eficaces en tiempo real. Estos sistemas contribuyen a prevenir incidentes y a responder de manera oportuna a amenazas de seguridad.
        .bg2.p-4.j1
          p.mb-0 Para finalizar, se exploran los centros de control y la gestión de incidentes, apoyados por herramientas de analítica de video. Estos elementos permiten una supervisión continua de la infraestructura y una capacidad de respuesta ante emergencias, asegurando así la continuidad operativa y la seguridad de los activos empresariales.

      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/6.png' alt='')  

    h5.mb-4.text-center.bg1.p-3 ¡Bienvenido a al mundo de la implementación de comunicaciones unificadas y sistemas de seguridad!

    .row.justify-content-center.align-items-center        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/GDCz6IX7ktc?si=zQ1jNI4gbds6MHP3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
          figcaption Video. Implementación de comunicaciones unificadas y sistemas de seguridad     

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
