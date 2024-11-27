<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Corte y confección de la falda 

    p.mb-4 Para el corte de la falda se deben seguir los siguientes pasos: 

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        PasosA.color-acento-contenido.mb-0(tipo="n")
          .row
            .col-lg
              h3 Paso 1
              p.mb-4 Se debe marca los moldes en la tela elegida para confeccionar la falda, asegurándose que se tengan los incrementos para costura.   
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/Tema1/img01.png', alt='')
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img.mb-4(src='@/assets/curso/temas/Tema1/img02.png', alt='')
            .col-lg
              h3.le Paso 2
              p.le Se deben cortar cada una de las piezas y asegurarse de marcar sobre la tela los piquetes, la profundidad de pinza y el piquete de mitad de cintura en pretina. 
          .row.mb-4
            .col-lg
              h3 Paso 3
              p Organizar todas las piezas ya cortadas y dejarlas listas para confeccionarlas. 
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/Tema1/img03.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bg4.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.d-none.d-lg-block.ps-lg-5
              img.img-a.img-t.mbt(src="@/assets/curso/temas/Tema1/img04.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 Para comprender mejor los pasos para el corte de una falda, visita el siguiente enlace
                .col-lg-auto.pe-lg-5
                  a.boton.color-acento-botones(href="https://youtu.be/X3NRIdplZok" target="_blank")
                    span Ir al sitio
                    i.fas.fa-file-download 
    
    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1  Pinzas 
    
    p.mb-4 Las pinzas son las que permiten que la falda tenga una mejor horma y la silueta sea más perfecta. A continuación, se estudia el paso a paso de la elaboración de las pinzas de la falda:
  
    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-lg-7.mb-4
        LineaTiempoD.color-acento-botones.activo
          
          p(numero="1" titulo="Paso 1") Coser a máquina la prenda asegurándose que esté correctamente enhebrada, con el color del hilo similar al de la tela a cocer y que su puntada sea de 3,5 de largo, en el selector de puntada de la maquina plana. 
          .row.justify-content-center(numero="2" titulo="Paso 2")
            .col-md-12.mb-4.mb-md-0
              p Revisar si el delantero y los dos posteriores tienen marcados los piquetes y la profundidad de pinza. 
            .col-md-6
              .titulo-sexto.color-primario(data-aos='fade-right')
                h5 Figura 1.
                span Piquetes y profundidad.
              figure
                img(src='@/assets/curso/temas/Tema1/img05.png', alt='En la figura se señalan los piquetes y la profundidad de la pinza.')
          
          .row.justify-content-center(numero="3" titulo="Paso 3")
            .col-md-12.mb-4.mb-md-0
              p Doblar la tela derecho con derecho, encarando los piquetes de la pinza.
              .titulo-sexto.color-primario(data-aos='fade-right')
                h5 Figura 2.
                span Encarado piquetes.
            
            .col-md-2.col-4
              figure
                img(src='@/assets/curso/temas/Tema1/img06.png', alt='En la figura se ilustra la tela doblada.')
          
          .row.justify-content-center(numero="4" titulo="Paso 4")
            .col-md-12.mb-4.mb-md-0
              p Desde el orillo de la cintura, partiendo sobre los piquetes, se debe cocer asegurando con remate al comienzo y terminando en diagonal, exactamente en el punto que indica profundidad de pinza. También con remate.
              .titulo-sexto.color-primario(data-aos='fade-right')
                h5 Figura 3.
                span Pinza
            .col-md-2.col-4 
              figure
                img(src='@/assets/curso/temas/Tema1/img07.png', alt='La figura ilustra la falta doblada y presentada por el derecho')
          
          .row.justify-content-center(numero="5" titulo="Paso 5")
            .col-md-12.mb-4.mb-md-0
              p De esta forma debe quedar la pinza ya terminada. Así queda por el derecho de la tela:  
            .col-md-2.col-4
              figure
                img(src='@/assets/curso/temas/Tema1/img08.png', alt='Texto que describa la imagen')
      .col-lg-5.mb-4.col-8
        figure
          img(src="@/assets/curso/temas/Tema1/img09.png", alt="alt")(data-aos="zoom-in")
    
    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2  Filetear piezas 


    p.mb-4 Las piezas deben ser fileteadas para dar un mejor acabado y evitar que se desflequen. Descubramos cuales y por donde se filetean las piezas de la falda.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/Tema1/img10.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center Las piezas de la falda que se filetean son: el delantero y los dos posteriores. 
    
      .col-md-6.col-lg-4.col-12.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/Tema1/img11.svg' alt='')
          .tarjeta.bg3
            .p-4.my-3
              p.mb-0.text-center Al delantero se le filetean los costados y el ruedo. Los posteriores, se filetean en costados, centro atrás y ruedo. La cintura como va entalegada con la pretina no es necesario filetearla. 

    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3  Cierre 

    p.mb-4 El cierre va ubicado en el centro atrás o en uno de los costados, eso varía según lo desee la persona que a la que se le va a confeccionar la prenda, para una falda básica se recomienda un cierre de 18cm de largo. A continuación, se presentan los pasos a seguir para colocar un cierre de falda.
    

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-7
        .tarjeta.fondo-slyder.p-4
          PasosB.color-primario.fondoblanco.p-4
            .row.justify-content-center(titulo="Paso 1")
              .col-md-7.mb-4.mb-md-0
                p Se toman los dos posteriores. 

            .row.justify-content-center(titulo="Paso 2")
              .col-md-11.mb-4.mb-md-0
                p Se ubica el cierre en el vértice de cintura - centro atrás. El doblez derecho de la abertura de la falda, se monta sobre la parte derecha de la cremallera topando con los dientes y se cose con puntada recta. 
        
            .row.justify-content-center(titulo="Paso 3")
              .col-md-11.mb-4.mb-md-0
                p El doblez izquierdo de la abertura de la falda, debe tapar la parte izquierda de la cremallera topándose con el doblez derecho de la abertura de la falda. Se continúa cociendo con puntada recta, rematando al inicio y al final de la costura.  

    separador
    #t_1_4.titulo-segundo.mb-5(data-aos="fade-down")
      h2 1.4.  Costados 

    p.mb-4 Los costados son los que unen la pieza delantera con los posteriores y permiten que la falda quede cerrada. 
    p Conoceremos el procedimiento a seguir para la unida o cerrada de costados:
    
    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        PasosA.color-acento-contenido.mb-0(tipo="n")
          .row
            .col-lg
              h3 Paso 1
              p.mb-4 Una vez puesta la cremallera, procedemos a encarar la parte delantera y posterior de la falda, haciendo que coincida derecho, con derecho la tela. 
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/Tema1/img12.png', alt='')
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img.mb-4(src='@/assets/curso/temas/Tema1/img13.png', alt='')
            .col-lg
              h3.le Paso 2
              p.le Luego se cose en la maquina plana y con puntada recta, a 1cm de distancia del orillo de los costados. 
          .row.mb-4
            .col-lg
              h3 Paso 3
              p Siempre se debe rematar al iniciar y al finalizar el trayecto a cocer. 
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/Tema1/img14.png', alt='')
    
    separador
    #t_1_5.titulo-segundo.mb-5(data-aos="fade-down")
      h2 1.5.  Pretina 
      
    p La pretina es la que rodea la falda. A esta pieza, se le realiza un ojal y se le coloca un botón para ajustar la cintura para evitar que se caiga. Además, da el acabado a la parte superior de esta prenda. 
    p.mb-4 Conozcamos el procedimiento a seguir para el ensamble de la pretina en la falda.

    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-lg-7.mb-4
        LineaTiempoD.color-acento-botones.activo
          p(numero="1" titulo="Paso 1") Luego de haber cerrado los costados, se monta la pretina, haciendo coincidir el piquete de mitad de pretina con el de la mitad del delantero de la falda, ubicando el derecho de tela de la pretina con el revés de tela de la falda. 
          p(numero="2" titulo="Paso 2") Se cose a máquina con puntada recta y a 1 cm de distancia de los orillos, siempre rematando al inicio y al final del trayecto, en este paso estamos fijando la pretina de la falda. 
          p(numero="3" titulo="Paso 3") Una vez hecho este procedimiento, la otra parte de la pretina se monta sobre el derecho de la falda,  se dobla 1cm hacia adentro y se cose a ½ cm desde el borde de ésta. 
          p(numero="4" titulo="Paso 4") Después de haber montado la pretina, se hacen las esquinas, puntas o cabezas en cada extremo de ella, doblado ½ cm y cociendo sobre el orillo. 
          p(numero="5" titulo="Paso 5") Por último, se hace el ojal y se coloca el botón.   
      .col-lg-5.mb-4.col-8
        figure
          img(src="@/assets/curso/temas/Tema1/img15.png", alt="alt")(data-aos="zoom-in")

    separador
    #t_1_6.titulo-segundo.mb-5(data-aos="fade-down")
      h2 1.6.  Ruedo 

    p El ruedo es el orillo y el que da el acabado a la parte inferior de la falda. Esta operación se puede realizar con aguja manual o en máquina. Y es la última del proceso de confección de la falda básica.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
