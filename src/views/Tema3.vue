<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Corte y confección de la camisa


    #t_3_1.titulo-segundo.mb-5
      h2 3.1  Preparación de las piezas

    p.mb-4 La camisa es la prenda de vestir superior más importante en el vestuario formal masculino. Antes de iniciar con el estudio de la preparación de las piezas de la camisa, identifiquemos en la siguiente imagen, las piezas que la componen:

    .row.justify-content-center.mb-5
      .col-lg-7
        .cajon.color-primario.p-4.mb-4
          .titulo-sexto.color-primario(data-aos='fade-right')
            h5 Figura 5.
            span Piezas de la blusa.
          img.mb-4(src='@/assets/curso/temas/Tema3/img01.png', alt='En la imagen se señalan las piezas que conforman la camisa: cuello, mangas, espalda, bolsillo, delanteros y perilla.')
    p.mb-4 Teniendo preparadas y listas todas las piezas de la camisa, se procede al ensamble.
    
    separador
    #t_3_1_1
    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 3.1.1  Preparación del cuello
    
    p.mb-4(data-aos="fade-left") Analicemos el paso a paso de un trazado manual:

    .row.justify-content-center(data-aos="fade-down")
      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia1(src='@/assets/curso/temas/Tema3/1.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b a.] Se toman las tres piezas (2 cuellos en tela y 1 cuello en entretela), se unen colocando las dos en tela, derecho con derecho y se cose por el contorno a 1 cm.

      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia(src='@/assets/curso/temas/Tema3/2.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b b.] Se hacen descargues en las esquinas y se voltea el cuello.

      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia(src='@/assets/curso/temas/Tema3/3.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b c.] Se pespunta en el contorno volteado.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia1(src='@/assets/curso/temas/Tema3/4.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b d.] Ahora se toma la banda, haciendo el dobladillo en la parte inferior a una sola de las tapas, doblando 1cm y cosiendo en puntada recta.

      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia(src='@/assets/curso/temas/Tema3/5.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b e.] Se toma el cuello ya pespuntado y listo, y se hace “sanduche” con las 2 tapas de la banda.

      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia(src='@/assets/curso/temas/Tema3/6.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b f.] Se cose a 1 cm por la parte inferior del cuello y la banda se cose por la parte superior, siempre uniendo todas las piezas.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia1(src='@/assets/curso/temas/Tema3/7.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b g.] Luego de unir la banda con el cuello se voltea y se pespunta a 1 / 16.

      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img.icono-cambia(src='@/assets/curso/temas/Tema3/8.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center #[b h.]  Ya tenemos listo el cuello para ensamblarlo a la camisa.

    separador
    #t_3_1_2
    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 3.1.2  Preparación de la perilla
    
    p.mb-4(data-aos="fade-left") Para la preparación, dobla la perilla según los piquetes, redobla el centímetro que guarda, pespunta a 1 / 16 desde el escote del cuello hasta el ruedo y por último realiza los ojales.
    
    separador
    #t_3_1_3
    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 3.1.3 Preparación y ensamble del bolsillo
    
    p.mb-4(data-aos="fade-left") Analicemos a través de los siguiente, la preparación y el ensamble del bolsillo:
    .bloque-texto-g.fondo-b.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-5.my-5
        p.mb-5(data-aos="fade-right") Se dobla la boca del bolsillo hacia adentro según los piquetes, es importante redoblar el centímetro, se cose con puntada recta y a 1 / 16.
    .row.fondo1.align-items-center.p-3.mb-4(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

        
    separador
    #t_3_1_4
    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 3.1.4 Delanteros y espalda  
    p.mb-4 Los delanteros son las piezas frontales de la camisa. El izquierdo es donde comúnmente va el bolsillo y es utilizado para ensamblar las otras piezas que lleva la camisa. <br>La espalda es la pieza opuesta al delantero y es usada en el momento del ensamble de la camisa.
        
    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2. Ensamble

    p.mb-4 El ensamble de la camisa consta en unir y acoplar las piezas necesarias, encajándolas entre sí, dando como resultado una prenda terminada.  
    
    .row.justify-content-center.mb-5
      .col-lg-7
        .cajon.color-primario.p-4.mb-4
          .titulo-sexto.color-primario(data-aos='fade-right')
            h5 Figura 6.
            span Ensamble de la camisa.
          img.mb-4(src='@/assets/curso/temas/Tema3/img03.svg', alt='En la figura se ilustran las partes de la camisa por separado(mangas, delanteros, espalda, cuello), y luego todas las partes ensambladas formado la prenda.')   
        
        
    separador
    #t_3_2_1
    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 3.2.1 Ensamble de la espalda
    p.mb-4 A continuación, se presenta el ensamble de la espalda en tres pasos:
        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        ol.lista-ol--cuadro
          li
          .lista-ol--cuadro__vineta
            span 1
          |Se perfilan las piezas para eliminar el exceso y se emparejan los ruedos, hombros, escotes para crear asimetría en la prenda.
          hr
          li
          .lista-ol--cuadro__vineta
            span 2
          |En la maquina fileteadora, la cual debe estar enhebrada con puntada de seguridad, para evitar pasar la maquina plana a 1 cm.
          hr
          li
          .lista-ol--cuadro__vineta
            span 3
          |Se cose uniendo el delantero con espalda, en la zona de los hombros.


      .col-lg-2.col-sm-8
        img.mb-4(src='@/assets/curso/temas/Tema3/img04.png', alt='') 
        
    separador
    #t_3_2_2
    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 3.2.2 Ensamble de las mangas
    p.mb-4 El ensamble de la camisa es posible hacerlo en dos pasos:
        
    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-lg-7.mb-4
        LineaTiempoD.color-acento-botones.activo
          p(numero="1" titulo="Paso 1") Se ubica la sisa completa del delantero y la espalda en la base de la máquina.
          p(numero="2" titulo="Paso 2") Se toma la maga y se filetea sobre todo el contorno de sisa, uniendo la manga con el delantero y la espalda de costado a costado. Esta operación se repite en ambos lados.
      .col-lg-5.mb-4.col-8
        figure
          img(src="@/assets/curso/temas/Tema3/img05.png", alt="alt")(data-aos="zoom-in")    
    
    separador
    #t_3_2_3
    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 3.2.3 Ensamble de delanteros
    p.mb-4 Analicemos el ensamble de los delanteros, en los siguientes dos pasos:  
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.col-sm-5.mb-2
        img(src='@/assets/curso/temas/Tema3/img06.png' alt='')
      .col-lg-9
        .tarjeta.fondo-slyder2.p-4
          SlyderA.fondoblanco.p-4
            .row.justify-content-center.align-items-center
              .col-md-2.mb-4.col-5
                figure
                  img.img(src='@/assets/curso/temas/Tema3/img07.svg', alt='Texto que describa la imagen')
              .col-md-8
                p #[b Paso 1.]  Se enfrentan derecho con derecho los ruedos de la manga y se casan las costuras de la sisa.
           
            .row.justify-content-center.align-items-center
              .col-md-2.mb-4.col-5
                figure
                  img.img(src='@/assets/curso/temas/Tema3/img08.svg', alt='Texto que describa la imagen')
              .col-md-8
                p #[b Paso 2.]   Se filetea con puntada de seguridad, desde el ruedo de la manga, sobre todo el costado, hasta el ruedo del largo de camisa. Esta misma operación se realiza en el otro costado, solo que, comenzando desde el ruedo hacia la manga, para así tapar la cadeneta de la puntada de seguridad y que el derecho de la puntada del filete, queden hacia el frente de la camisa.
        
        
    separador
    #t_3_2_4
    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 3.2.4  Ensamble del cuello
    p.mb-4 Para realizar el ensamble del cuello, se deben seguir los siguientes 4 pasos:   
        
    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        PasosA.color-acento-contenido.mb-0(tipo="n")
          .row
            .col-lg
              h3 Paso 1
              p.mb-4 Se toma el cuello, la camisa y se une, uno de los extremos del cuello con la perilla siempre ubicando las piezas derecho con derecho.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/Tema3/img9.png', alt='')
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img.mb-4(src='@/assets/curso/temas/Tema3/img99.png', alt='')
            .col-lg
              h3.le Paso 2
              p.le Se cose sobre todo el contorno del escode de cuello a 1 cm con puntada recta, sin ir a coser la parte dobladillada, rematando al iniciar y al finalizar la operación.
          .row.mb-4
            .col-lg
              h3 Paso 3
              p Por último, se organizan las esquinas para entalegar el cuello, guardando la pestaña que se generó en el momento de la unión del cuello con la camisa.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/Tema3/img999.png', alt='')     
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img.mb-4(src='@/assets/curso/temas/Tema3/img10.png', alt='')
            .col-lg
              h3.le Paso 4
              p.le Se realiza un pespunte guardando la pestaña y tapando la costura, sobre la parte de la banda a la que se le realizó un dobladillo en el momento de la preparación, haciendo un pequeño remate al inicio y al final de la costura.
        
        
    separador
    #t_3_3.titulo-segundo.mb-5
      h2 3.3  Los ruedos

    p.mb-4 Los ruedos de las mangas y el ruedo que indica largo de camisa se realizan de forma diferente, pero lo hace la misma operaria y es una de las últimas operaciones de la camisa.

        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.col-sm-6
        img.mb-4(src='@/assets/curso/temas/Tema3/img11.png', alt='')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-verde")
          .row.justify-content-center(titulo="Ruedo que indica largo de camisa")
            .col-md-11.mb-4.mb-md-0
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  |1. Se toma la parte inferior de la camisa, dobla 1 cm y se redobla otro para evitar que se desfleque.
                li 
                  i.fas.fa-angle-right
                  |2. Se cose sobre todo el ruedo con puntada recta a 1 / 16 si dejar de redoblar, rematando al inicio y al final de la operación.  
          
          .row.justify-content-center(titulo="Ruedo de manga")
            .col-md-11.mb-4.mb-md-0
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  |1. Se toma el ruedo de cualquiera de las dos mangas de la camisa, se dobla 1 cm y luego se redobla 2 cm más, este ruedo se realiza de forma circular.
                li 
                  i.fas.fa-angle-right
                  |2. Se cose con pespunte a 1 / 16 por todo el contorno del ruedo de la manga, montando la costura final sobre la costura inicial generando así el remate y un mejor acabado.
  
          
        
    separador
    #t_3_4.titulo-segundo.mb-5
      h2 3.4  Terminación

    p.mb-4 La terminación es el último proceso que se le realiza a la prenda y consta de:   
    SlyderF(columnas="col-lg-6 col-xl-4 col-md-6").mb-3
      .tarjeta.b1.p-5
        .row.justify-content-center
          .col-12.p-4.my-4
            h4.text-center.bg-naranja.p-1 Pulida
            p.text-center(data-aos="fade-right") La pulida consta en quitar los hilos sobrantes e impurezas con las que queda la prenda luego del ensamble.
      .tarjeta.b1.p-5
        .row.justify-content-center
          .col-12.p-4.my-4
            h4.text-center.bg-naranja.p-1 Planchado
            p.text-center(data-aos="fade-right") El planchado se realiza con una plancha preferiblemente de vapor para dar una excelente presentación a la prenda.
      .tarjeta.b1.p-5
        .row.justify-content-center
          .col-12.p-4.my-4
            h4.text-center.bg-naranja.p-1 Empaque
            p.text-center(data-aos="fade-right") Finalmente se, le colocan las etiquetas con su respectiva referencia y talla a la prenda, se empaca y esta lista la camisa.
    
    p.mb-4 Se sugiere revisar el siguiente video para mayor claridad en los procesos de confección de una camisa:

     figure(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/x7d_FSKU5_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Confección de CAMISA CLÁSICA MASCULINA - DIY - Paso a paso
        
        
        
        
    

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
