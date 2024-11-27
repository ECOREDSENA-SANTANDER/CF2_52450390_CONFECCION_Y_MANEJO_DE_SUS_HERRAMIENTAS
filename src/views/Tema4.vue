<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Corte y confección del pantalón
    
    p.mb-4(data-aos="fade-right") El pantalón es la prenda de vestir inferior, más importante en el vestuario masculino. Para su confección se debe tener en cuenta una serie de operaciones. A continuación, se identifican las partes del pantalón.

    .row.justify-content-center.mb-5
      .col-lg-7
        .cajon.color-primario.p-4.mb-4
          ImagenInfografica.color-acento-contenido.text-center
            template(v-slot:imagen)
              figure
                img.mb-4(src='@/assets/curso/temas/Tema4/img01.svg', alt='')

            .tarjeta.color-primario.p-3(x="19%" y="29%" numero="1")
              h5.mb-2 Cierre.
            .tarjeta.color-primario.p-3(x="29%" y="17%" numero="2")
              h5.mb-2 Bolsillo delantero.
            .tarjeta.color-primario.p-3(x="75%" y="26%" numero="3")
              h5.mb-2 Bolsillos posteriores.
            .tarjeta.color-primario.p-3(x="3%" y="41%" numero="4")
              h5.mb-2 Cerrada de costados.
            .tarjeta.color-primario.p-3(x="20%" y="59%" numero="5")
              h5.mb-2 Cerrada de entrepierna.
            .tarjeta.color-primario.p-3(x="92%" y="6%" numero="6")
              h5.mb-2 Preparación de pasadores.
            .tarjeta.color-primario.p-3(x="77%" y="6%" numero="7")
              h5.mb-2 Montaje de pretina.
            .tarjeta.color-primario.p-3(x="14%" y="7%" numero="8")
              h5.mb-2 Ojalada y botonada.
            .tarjeta.color-primario.p-3(x="13%" y="94%" numero="9")
              h5.mb-2 Ruedo.

           
    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1  Montaje de cierre

    p.mb-4 El montaje del cierre es la primera operación que se realiza en proceso de la confección del pantalón. En el siguiente video se presenta la manera de colocar una cremallera:
    figure(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/4pMSfzpnmYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: 13 2 a Montaje de Cremallera Aletilla y Aletillón

    separador
    #t_4_2.titulo-segundo.mb-5
      h2 4.2  Bolsillo lateral
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bg4.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.d-none.d-lg-block.ps-lg-5
              img.img-a.img-t.mbt(src="@/assets/curso/temas/Tema4/img02.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 El bolsillo lateral consta de un falso, una vista, dos fondos de bolsillo y la pernera delantera 
                  p.mb-3 Consulta el siguiente material complementario para comprender el proceso de confección del bolsillo lateral para pantalón.
                .col-lg-auto.pe-lg-5
                  a.boton.color-acento-botones(href="https://youtu.be/zozv1G9Yk_M" target="_blank")
                    span Ir al sitio
                    i.fas.fa-file-download

    separador
    #t_4_3.titulo-segundo.mb-5
      h2 4.3  Bolsillos posteriores

    p.mb-4 A los bolsillos posteriores se les realiza el dobladillo en la boca de éstos y se ubican en la parte superior de la pernera posterior, entrándole 1 cm sobre el contorno menos en la boca así:
    .row.justify-content-center.mb-5
      .col-lg-7
        .cajon.color-primario.p-4.mb-4
          .titulo-sexto.color-primario(data-aos='fade-right')
            h5 Figura 8. 
            span Pegado de bolsillo.
          img.mb-4(src='@/assets/curso/temas/Tema4/img03.svg', alt='En la figura se ilustra la manera como se debe pegar el bolsillo del pantalón.')



    separador
    #t_4_4.titulo-segundo.mb-5
      h2 4.4  Tiro posterior
    p.mb-4 Habiendo ya pegado los bolsillos posteriores se precede a unir los tiros en la fileteadora con puntada de seguridad, enfrentando derecho con derecho las perneras posteriores.
    
    separador
    #t_4_5.titulo-segundo.mb-5
      h2 4.5 Cerrada de los costados
    p.mb-4 Teniendo ya preparadas las perneras delanteras y posteriores, se unen enfrentándolas derecho con derecho y se cose en la fileteadora con puntada de seguridad.

    separador
    #t_4_6.titulo-segundo.mb-5
      h2 4.6 Cerrada de la entrepierna
    p.mb-4 Al tener listos los costados, se procede a terminar de cerrar el pantalón:

    .bloque-texto-g.fondo-b.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/Tema4/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-5.my-5
        p.mb-5(data-aos="fade-right") Las piezas anterior y posterior de cada pierna se unen por la costura de entrepierna. Se colocan ambas piezas resultantes haciendo coincidir la cruz de la entrepierna, se sujetan con alfileres para coser la curvatura entera utilizando una maquina fileteadora con puntada de seguridad.
            
    separador
    #t_4_7.titulo-segundo.mb-5
      h2 4.7  Pasadores
    p.mb-4 Se realiza una tira completa y se sacan 5 pasadores de 8 cm (la medida da cada pasador corresponde a el ancho de la pretina + 5 cm).
    p Estudiemos los pasos para la elaboración de los pasadores:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .row
          .col-lg-2.col-3
            img.mb-4(src='@/assets/curso/temas/Tema4/1.svg', alt='')
          .col-lg-11 #[b 1.] Se filetea cualquiera de los dos orillos de la tira para < pasador.
        .py-2
      .col-lg-6
        .row
          .col-lg-2.col-3
            img.mb-4(src='@/assets/curso/temas/Tema4/2.svg', alt='')
          .col-lg-11 #[b 2.] Se redobla la tira dejando el filete por fuera y guardando la zona rustica.
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .row
          .col-lg-2.col-3
            img.mb-4(src='@/assets/curso/temas/Tema4/3.svg', alt='')
          .col-lg-11 #[b 3.] Se cose con pespunte a ¼ a cada lado.
        .py-2
      .col-lg-6
        .row
          .col-lg-2.col-3
            img.mb-4(src='@/assets/curso/temas/Tema4/4.svg', alt='')
          .col-lg-11 #[b 4.] Se cortan 5 pasadores. La medida depende del ancho de pretina + 5 cm. 
    
    separador
    #t_4_6.titulo-segundo.mb-5
      h2 4.8  Pretina

    p.mb-4 Para la elaboración de la pretina, se deben seguir los siguientes seis pasos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.fondo-rosa
        .row
          .col-lg-12
            .tarjeta.fondo-rosa.p-4
              SlyderA(tipo="b").fondo-blan.p-4
                .row.justify-content-center.align-items-center
                  .col-md-7.mb-5.mb-md-0
                    h5 Paso 1
                    p Luego de haber cerrado los costados, se continúa montando la pretina, haciendo coincidir el piquete de mitad de pretina con el de la mitad de las perneras posteriores, ubicando el derecho de tela de la pretina con el revés de tela del pantalón.
                  .col-md-3.col-8
                    figure
                      img.mb-4(src='@/assets/curso/temas/Tema4/1.png', alt='')
                .row.justify-content-center.align-items-center.p-4
                  .col-md-7.mb-4.mb-md-0
                    h5 Paso 2
                    p Se fija la pretina a la cintura del pantalón, ya sea con alfileres o con bastas, para evitar perder el centro de estas dos piezas, ya que si no tenemos precaución nos queda faltando pretina en alguno de los dos lados para realizar las puntas o extremos de las pretinas.
                  .col-md-3.col-8
                    figure
                      img.mb-4(src='@/assets/curso/temas/Tema4/2.png', alt='')
                .row.justify-content-center.align-items-center.p-4
                  .col-md-7.mb-4.mb-md-0
                    h5 Paso 3
                    p Ahora se cose a máquina con puntada recta y a 1 cm de distancia de los orillos, siempre rematando al inicio y al final del trayecto, en este paso se fija la pretina al pantalón.
                  .col-md-3.col-8
                    figure
                      img.mb-4(src='@/assets/curso/temas/Tema4/3.png', alt='')
                .row.justify-content-center.align-items-center.p-4
                  .col-md-7.mb-4.mb-md-0
                    h5 Paso 4
                    p Una vez hecho este procedimiento, la otra parte de la pretina se monta sobre el derecho del pantalón, se dobla 1 cm hacia adentro y se cose a medio centímetro desde el borde de ésta.
                  .col-md-3.col-8
                    figure
                      img.mb-4(src='@/assets/curso/temas/Tema4/4.png', alt='')
                .row.justify-content-center.align-items-center.p-4
                  .col-md-7.mb-4.mb-md-0
                    h5 Paso 5
                    p Después de haber montado la pretina, se hacen las esquinas, puntas o cabezas en cada extremo de ella, doblando ½ cm y cosiendo sobre el orillo.
                  .col-md-3.col-8
                    figure
                      img.mb-4(src='@/assets/curso/temas/Tema4/5.png', alt='')
                .row.justify-content-center.align-items-center.p-4
                  .col-md-7.mb-4.mb-md-0
                    h5 Paso 6
                    p Por último, se hace el ojal y se coloca el botón.
                  .col-md-3.col-8
                    figure
                      img.mb-4(src='@/assets/curso/temas/Tema4/6.png', alt='')
                    
            
    separador
    #t_4_9.titulo-segundo.mb-5
      h2 4.9 Ruedo

    p.mb-4 Por último, se realiza el ruedo y se cose con puntada recta doblando un centímetro, redoblando otro para dar un mejor acabado.







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
