<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tipos de corte
    
    p.mb-4(data-aos="fade-right") Existen dos tipos de corte: el corte manual y el corte industrial. Pero ¿cuál es el corte industrial? 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.bg1.p-4
        .row.justify-content-center.align-items-center.my-5
          .col-lg-10
            .bg2.p-4.pe-5
              .row.justify-content.align-items-center
                .col-lg-11
                  .row.justify-content-center.align-items-center
                    .col-lg-2
                      img.img-a.img-t.mb-4(src='@/assets/curso/temas/img31.svg', alt='')
                    .col-lg-10.pe-lg-5
                      p.mb-0.pe-lg-5 El corte industrial, es el que se realiza cortando muchas tallas y capas de tela a la vez, para lograr esto es necesario usar una máquina cortadora, de la cual existen muchos tipos, las mas comunes son, la cortadora vertical y la cortadora circular. Analicemos cada una:
          .col-lg-3.sob.d-none.d-lg-block
            img(src="@/assets/curso/temas/img30.svg", alt="alt").img250
  
    p.mb-4(data-aos="fade-right") A continuación se analizan cada una de ellas:

    .row.justify-content-center(data-aos="fade-down")
      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img32.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              h4.mb-4.text-center Cortadora vertical 
              p.mb-0.text-center Con la cortadora vertical se puede cortar la cantidad de capas necesarias, siempre y cuando, el espesor del tendido de capas de tela sea mayor a 6 pulgadas y menor a 14 pulgas. 
    
      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img33.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              h4.mb-4.text-center Cortadora circular 
              p.mb-0.text-center Este tipo de cortadoras es usado para cortes más pequeños, ósea que la cantidad de capas de tela debe tener un alto menor a 4 pulgadas.

      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img34.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              h4.mb-4.text-center Corte manual 
              p.mb-0.text-center El corte manual es el que se realiza con tijeras, especialmente para tela, y se corta una sola capa. Es recomendable no dejar caer las tijeras, ya que se pueden despuntar y desajustar, además no se deben cortar otros tipos de materiales con ellas porque pueden perder su filo. 

    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Ubicación de moldes para corte industrial
    
    p.mb-4(data-aos="fade-left") La ubicación de moldes para el corte industrial es llamado trazo y éste se realiza de las siguientes dos formas:
    
    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 Trazo sistematizado

    SlyderF(columnas="col-lg-6 col-xl-4 col-md-6").mb-3
      .tarjeta.b1.p-5
        .row.justify-content-center
          .col-12.p-4.my-4
            p.text-center(data-aos="fade-right") #[b a.] Se realizan los moldes en cualquier programa de diseño asistido por computador.
      .tarjeta.b1.p-5
        .row.justify-content-center
          .col-12.p-4.my-4
            p.text-center(data-aos="fade-right") #[b b.] Se da la información requerida para realizar el trazo, tales como: tallas, cantidades por talla, ancho de tela, material o tela a cortar.
      .tarjeta.b1.p-5
        .row.justify-content-center
          .col-12.p-4.my-4
            p.text-center(data-aos="fade-right") #[b c.] Se importan los moldes desde este mismo programa pero en el archivo de trazo.
      .tarjeta.b1.p-5
        .row.justify-content-center
          .col-12.p-4.my-4
            p.text-center(data-aos="fade-right") #[b d.] Se realiza el trazo, buscando organizar los moldes de la manera mas ordenada posible para evitar los desperdicios de tela.
      .tarjeta.b1.p-5
        .row.justify-content-center
          .col-12.p-4.my-4
            p.text-center(data-aos="fade-right") #[b e.] Se imprime el trazo en papel craf, en una impresora gigante llamada plotter.
      .tarjeta.b1.p-5
        .row.justify-content-center
          .col-12.p-4.my-4
            p.text-center(data-aos="fade-right") #[b f.] Teniendo en cuenta el largo y ancho del trazo ya realizado, se hacen las señas en la mesa de corte, para ubicar las capas de telas necesarias y así efectuar el corte.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bg4.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.d-none.d-lg-block.ps-lg-5
              img.img-a.img-t.mbt(src="@/assets/curso/temas/img35.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-2 Consulte el siguiente video, para tener una descripción más detallada del trazo sistematizado: 
                  h4.mb-3 #[b OPTITEX - MARKER Trazo de patrones]
                .col-lg-auto.pe-lg-5
                  a.boton.color-acento-botones(href="https://youtu.be/fscxWYsenLE" target="_blank")
                    span Ir al sitio
                    i.fas.fa-file-download

    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 Corte con trazo manual 
    
    p.mb-4(data-aos="fade-left") Analicemos el paso a paso de un trazado manual

    .row.justify-content-center(data-aos="fade-down")
      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia1(src='@/assets/curso/temas/img36.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b a.] Se realizan los moldes en cartón.
    
      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia(src='@/assets/curso/temas/img37.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b b.] Se realiza el trazo, marcando cada uno de los moldes en papel craf de 1,50mt de ancho, teniendo en cuenta el ancho de la tela y buscando organizar los moldes de la manera mas ordenada para evitar desperdicios de tela.

      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia(src='@/assets/curso/temas/img38.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b c.] Teniendo en cuenta el largo y ancho del trazo ya realizado, se hacen las señas en la mesa de corte, para ubicar las capas de telas necesarias y así efectuar el corte.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia1(src='@/assets/curso/temas/img39.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b d.] Luego de tener el tendido listo, se monta el trazo impreso.
    
      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia(src='@/assets/curso/temas/img40.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b e.] Se pina el trazo para evitar que en el momento del corte se mueva el papel y quede mal cortada la pieza.

      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia(src='@/assets/curso/temas/img41.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b f.] Luego de pinar todas las piezas a cortar, se procede a amolar o afilar las cuchillas de la máquina cortadora.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia1(src='@/assets/curso/temas/img42.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b g.] Para evitar accidente es recomendable usar el guante protector, en la mano contraria a la que manipula la máquina cortadora.
    
      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia(src='@/assets/curso/temas/img43.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b h.] Teniendo listo el tendido, la máquina y habiéndose colocado el guante, se procede a cortar.

      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia(src='@/assets/curso/temas/img44.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b i.] Luego de tener todas las piezas cortadas, se tiquetean cada una de las capas de tela de cada pieza, ya que con esto evitamos que en el momento de confeccionar la prenda no se vallan a revolver las tallas y/o colores de las telas.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia(src='@/assets/curso/temas/img45.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b j.] Por último se amarran todas las piezas de cada una de las tallas por prenda.
  
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bg4.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.d-none.d-lg-block.ps-lg-5
              img.img-a.img-t.mbt(src="@/assets/curso/temas/img46.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-2 Consulte el video para entender más sobre trazo manual 
                .col-lg-auto.pe-lg-5
                  a.boton.color-acento-botones(href="https://youtu.be/2EkELdwTkew" target="_blank")
                    span Ir al sitio
                    i.fas.fa-file-download

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        .bg4.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.d-none.d-lg-block.ps-lg-5
              img.img-a.img-t.mbt(src="@/assets/curso/temas/img47.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-2 Consulte el video para conocer la maquina cortadora 
                .col-lg-auto.pe-lg-5
                  a.boton.color-acento-botones(href="https://youtu.be/V3zxsruHRyI" target="_blank")
                    span Ir al sitio
                    i.fas.fa-file-download

    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Ubicación de moldes para corte manual 

    p.mb-4(data-aos="fade-right") La ubicación de los moldes para realizar el corte manual, es rápida y fácil. Lo único que no se puede olvidar en el momento de ubicar los moldes sobre la tela, es, conservar la línea de aplome del molde, paralelo al orillo de la tela. El corte manual, es el que se realiza con tijeras, por lo tanto se corta una sola capa.

    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-0(tipo="n")
          .row
            .col-lg
              h3 Paso 1
              p.mb-4 Se extiende la tela sobre una mesa que abarque el ancho de la tela a cortar y se ubican los moldes.  
              p.mb-4 Siempre se debe respetar el hilo de tela o aplome del molde.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img48.svg', alt='')
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img.mb-4(src='@/assets/curso/temas/img49.svg', alt='')
            .col-lg
              h3.le Paso 2
              p.le Se fija el molde con alfileres o se marca con tiza para confección en la tela.  
          .row
            .col-lg
              h3 Paso 3
              p Luego de tener marcado el molde sobre la tela, se procede a cortar cada una de las piezas necesarias para la confección de una sola prenda. 
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img50.svg', alt='')
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img.mb-4(src='@/assets/curso/temas/img51.svg', alt='')
            .col-lg
              h3.le Paso 4
              p.le ¡Listo! se puede comenzar a confeccionar. 


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
