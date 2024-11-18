<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Máquinas Básicas
    
    p.mb-4(data-aos="fade-right") Las máquinas básicas para elaborar prendas en tejido plano como: camisas, blusas, faldas y pantalones, son la máquina plana industrial, la máquina familiar y la fileteadora.
    p.mb-0(data-aos="fade-left") A continuación se presentan las características de cada una:
    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Máquina plana industrial
    
    p.mb-4(data-aos="fade-right") Las figuras que se presentan a continuación ilustran la máquina plana y las partes del cabezote:
    
    
    .bloque-texto-g.fondo-b.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-5.my-5
        h4.mb-4 Para tener en cuenta
          br
          br
        p.mb-5(data-aos="fade-right") El enhebrador y tensor, generalmente se ubican en la parte superior y proveen de hilo a la confección; la zona de selección de puntadas, es donde se encuentra el catálogo de puntadas a realizarse.

    .row.fondo1.align-items-center.p-3.mb-4(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

        .row.justify-content-center.align-items-end(data-aos="fade-right")
          .col-lg-6
            .titulo-sexto.color-secundario.mb-5
              h5 Figura 1. 
              | Partes de la maquina básica.
            img.img-a.img-t.mb-4(src='@/assets/curso/temas/img3.svg', alt='En la figura se señalan las siguientes partes de la máquina básica: -Boton de encendido - Motor interno -Pedal de velocidad -Base de trabajo -El arrastre y pie -Aguja -Bobina')
            figcaption.whi Fuente SENA

    .row.justify-content-start.mb-5
      .col-lg-6(data-aos="fade-right")
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img4.svg', alt='')
        p.mb-4 #[b 1. Botón de encendido:] el botón de encendido, sirve para conectar o desconectar el motor de la máquina a través de él.
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img5.svg', alt='')
        p.mb-4 #[b 2. Motor interno:] el motor interno costa de una correa de transmisión, también llamada faja, la cual es el nexo entre el cabezal y el motor, este último transmite fuerza por medio de un movimiento de rotación hasta la polea del volante y esta acoplada al eje del volante.
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img6.svg', alt='')
        p.mb-4 #[b 3. Pedal de velocidad:] el pedal de velocidad es la parte de la máquina ligada al motor por una barra o cadena, su función es poner la máquina en movimiento y controlar la velocidad de sus puntadas.
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img7.svg', alt='')
        p.mb-4 #[b 4. Base de trabajo:] es la parte donde está asentado el cabezote, es de madera recubierta con formica, sus patas son de metal y su función es soportar el material a confeccionar.
      .col-lg-6(data-aos="fade-left")
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img8.svg', alt='')
        p.mb-4 #[b 5. El arrastre y pie:] tienen un mecanismo mediante el cual la tela es arrastrada y movida hacia adelante, sobre la base de la máquina.
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img9.svg', alt='')
        p.mb-4 #[b 6. Aguja_] la aguja produce una serie de puntadas de acuerdo con la selección efectuada por el o la costurera(o). Generalmente se ejecuta la puntada doble llamada de pespunte.
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img10.svg', alt='')
        p.mb-4 #[b 7. Bobina:] la bobina se encuentra en la parte inferior de la máquina en la zona de carga para el hilo secundario. 

    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 Partes del cabezote de la máquina plana 

    p.mb-4(data-aos="fade-right") Estudiemos las partes del cabezote de la máquina plana

    .row.justify-content-center.align-items-end.mb-4(data-aos="fade-right")
      .col-lg-6
        .titulo-sexto.color-secundario.mb-2
          h5 Figura 2. 
          | Partes del cabezote de la maquina plana.
        img.img-a.img-t.mb-0(src='@/assets/curso/temas/img24.png', alt='En la figura se identifican cada una de las partes de la máquina.')
        figcaption.whi Fuente SENA

    .row.justify-content-start.mb-4
      .col-lg-6(data-aos="fade-right")
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img11.svg', alt='')
        p.mb-4 #[b 1. Barra De La Aguja:] es la que sostiene la aguja en su extremo y permite que la aguja suba y baje. Posee un tornillo que permite el ingreso de la aguja y la asegura. En algunas máquinas el orificio dentro del cual se instala la aguja no es circular sino, que tiene una parte plana que debe coincidir con la parte plana de la aguja.
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img12.svg', alt='')
        p.mb-4 #[b 2. Palanca Tira hilo:] como su nombre lo indica es la palanca que tira el hilo que viene del carretel para suministrarlo a la aguja.
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img13.svg', alt='')
        p.mb-4 #[b 3. Devanador de Bobina:] es un pequeño mecanismo que sirve para enrollar en forma acelerada el hilo que necesita en la bobina o carretel. Viene ubicado en el frente o en la parte superior.
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img14.svg', alt='')
        p.mb-4 #[b 4. Tensor Superior:] está compuesto por dos discos en medio del cual pasa el hilo para poder graduar la tensión del mismo. La graduación se produce por medio de un tornillo de mano que además tiene un resorte que amortigua la fuerza que hace la palanca tira hilo.
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img15.svg', alt='')
        p.mb-4 #[b 5. Cigüeñal:] es un eje interno, con codos que transforma un movimiento rectilíneo en circular.
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img16.svg', alt='')
        p.mb-4 #[b 6. Volante y tornillo aislador:] el volante es la rueda que recibe el movimiento de la correa y lo transmite a los mecanismos interiores del cabezote. También puede ser movido por la mano cuando se va a levantar la aguja. En el centro del volante hay un tornillo de mano que sirve para desconectar el movimiento de los mecanismos interiores.
        p.mb-4 Cuando quieras impedir que la aguja suba y baje, afloje el tornillo y la aguja permanecerá quieta, aunque el volante esté en movimiento. Esto lo hacemos, por ejemplo, cuando vamos a devanar. 
      .col-lg-6(data-aos="fade-left")
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img17.svg', alt='')
        p.mb-4 #[b 7. Bielas:] en las máquinas, esta barra que sirve para transformar el movimiento de vaivén en otro de rotación, o viceversa. 
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img18.svg', alt='')
        p.mb-4 #[b 8. Correa:] en las máquinas, sirve para transmitir el movimiento rotativo de una rueda o polea a otra. 
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img19.svg', alt='')
        p.mb-4 #[b 9. Mecanismo vertical:] mecanismo para el movimiento vertical del arrástratela. 
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img20.svg', alt='')
        p.mb-4 #[b 10. Mecanismo horizontal:] mecanismo para el movimiento horizontal del arrástratela. 
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img21.svg', alt='')
        p.mb-4 #[b 11. Barra De La Aguja:] es la que sostiene la aguja en su extremo y permite que la aguja suba y baje. Posee un tornillo que permite el ingreso de la aguja y la asegura. En algunas máquinas el orificio dentro del cual se instala la aguja no es circular sino, que tiene una parte plana que debe coincidir con la parte plana de la aguja. 
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img22.svg', alt='')
        p.mb-4 #[b 12. Dientes Arrastradores:] son los que desplazan la tela hacia atrás a medida que la aguja y la caja bobina tejen la puntada.
        img.img-a.img-t.mb-3.left(src='@/assets/curso/temas/img23.svg', alt='')
        p.mb-4 #[b 13. Caja bobina y Lanzadera interior:] la caja bobina y la lanzadera son las encargadas de entrelazar el hilo interno con el de la aguja. Este enlace nos dirige al movimiento de esta imagen.  

    p.mb-4(data-aos="fade-right") Su función es sostener la tela contra la planchuela mientras se realiza la costura. Se maneja manualmente mediante una palanca ubicada detrás del cabezote. Al subir la palanca sube el prénsatelas. La presión del prénsatelas se puede graduar de acuerdo al grosor de la tela con un tornillo ubicado en la parte de arriba del cabezote.
    p.mb-0(data-aos="fade-left") Para telas delgadas se utiliza poca presión y se debe aumentar para telas más gruesas. Si el pie prénsatela no está colocado con la orientación correcta, la aguja puede golpearlo y doblarse o romperse, y podría causar lesiones.

    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Máquina familiar

    p.mb-4(data-aos="fade-right") Las máquinas de coser familiares, cosen cualquier tipo de tela y ejecutan una gran variedad de puntadas, incluso bordan. Con ellas es posible coser a máquina desde servilletas, uniformes, disfraces, hasta vestidos de novias.
    p.mb-4(data-aos="fade-left") A continuación se mencionan sus partes.

    .row.fondo1.align-items-center.p-3.mb-4(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

        .row.justify-content-center.align-items-end(data-aos="fade-right")
          .col-lg-8
            .titulo-sexto.color-secundario.mb-5
              h5 Figura 3. 
              | Partes de la maquina familiar.
            img.img-a.img-t.mb-4(src='@/assets/curso/temas/img25.svg', alt='En la figura se mencionan las diferentes partes de la Maquina familiar: -Botón de puntada reversa -Selector de longitud de puntada -Tope del canillero -Eje del devanador de canillas -Porta carretes -Ajuste tensión del hilo superior -Guía hilos del hilo de la canilla -Palanca tira-hilos -Tapa frontal -Cortahílos -Placa de aguja -Mesa supletoria -Selector de puntada ')

    .col-lg-5.mb-sm-0(data-aos="fade-right")
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta
            span 1
          | Botón de puntada reversa. 
        li 
          .lista-ol--cuadro__vineta
            span 2
          | Selector de longitud de puntada. 
        li 
          .lista-ol--cuadro__vineta
            span 3
          | Tope del canillero. 
        li 
          .lista-ol--cuadro__vineta
            span 4
          | Eje del devanador de canillas.
        li 
          .lista-ol--cuadro__vineta
            span 5
          | Porta carretes. 
        li 
          .lista-ol--cuadro__vineta
            span 6
          | Ajuste tensión del hilo superior. 
        li 
          .lista-ol--cuadro__vineta
            span 7
          | Guía hilos del hilo de la canilla.
        li 
          .lista-ol--cuadro__vineta
            span 8
          | Palanca tira-hilos.
        li 
          .lista-ol--cuadro__vineta
            span 9
          | Tapa frontal.
        li 
          .lista-ol--cuadro__vineta
            span 10
          | Cortahílos.
        li 
          .lista-ol--cuadro__vineta
            span 11
          | Placa de aguja.
        li 
          .lista-ol--cuadro__vineta
            span 12
          | Mesa supletoria.
        li 
          .lista-ol--cuadro__vineta
            span 13
          | Selector de puntada.   

    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Fileteadora 
    
    p.mb-4(data-aos="fade-right") La máquina #[b fileteadora], también llamada #[b remalladora], es muy útil en la confección de ropa por el buen acabado que da a las prendas, su función es #[b cortar, coser, filetear] y así tener un cocido más pulido. Esta máquina es muy importante en la confección de prendas de tejido de punto tales como la ropa interior y deportiva. 
    p.mb-4(data-aos="fade-right") #[b ¿Cómo es el enhebrado en una máquina fileteadora?]

    .bloque-texto-g.fondo-b.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img26.png')})`}"
      )
      .bloque-texto-g__texto.p-5.my-5
        p.mb-4 Los hilos superiores se enhebran parecidos a la máquina de coser plana. La máquina fileteadora puede ser trabajada con cuatro hilos; pero si es solo para filetear, se trabaja tan solo con tres de ellos, que son los hilos que realizan los orillos.

    .row.fondo1.align-items-center.p-3.mb-4(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

        .row.justify-content-center.align-items-end(data-aos="fade-right")
          .col-lg-8
            .titulo-sexto.color-secundario.mb-5
              h5 Figura 4. 
              | Secuencia de hilos superiores.
            img.img-a.img-t.mb-4(src='@/assets/curso/temas/img27.svg', alt='La figura presenta la manera como se deben disponer los hilos para lograr un buen enhebrado.')
            figcaption.whi Fuente SENA

    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 Hilos inferiores 
    
    p.mb-4(data-aos="fade-right") El enhebrado de los hilos inferiores o puntada de seguridad es un poco más complicado. Para lograr éste enhebrado, son necesarios los otros dos que hacen la costura recta de cadeneta, la cual es llamada puntada de seguridad.

    .row.fondo1.align-items-center.p-3.mb-4(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

        .row.justify-content-center.align-items-end(data-aos="fade-right")
          .col-lg-8
            .titulo-sexto.color-secundario.mb-5
              h5 Figura 5. 
              | Disposición de hilos inferiores.
            img.img-a.img-t.mb-4(src='@/assets/curso/temas/img28.svg', alt='En la figura se presenta el paso del hilo para lograr el enhebrado de la puntada de seguridad.')
            figcaption.whi Fuente SENA

    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 Vista de la puntada 

    p.mb-4(data-aos="fade-right") Analiza estas imágenes, que nos dan una idea de la puntada de una fileteadora:
    
    .row.justify-content-center.align-items-end(data-aos="fade-right")
      .col-lg-8
        .titulo-sexto.color-secundario.mb-5
          h5 Figura 6. 
          | Puntada de seguridad.
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/img29.svg', alt='La imagen ilustra una puntada de seguridad.')
        figcaption.whi Fuente SENA
</template>

<script>
export default {
  name: 'Tema2',
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
