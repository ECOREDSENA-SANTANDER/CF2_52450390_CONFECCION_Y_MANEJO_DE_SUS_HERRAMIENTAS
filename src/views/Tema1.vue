<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Corte y herramientas
    
    p.mb-4(data-aos="fade-right") ¿Qué es el corte? 
    p.mb-4(data-aos="fade-left") El corte es la #[b separación de la tela] o cuero en piezas diferentes, las cuales conforman en su conjunto una prenda de vestir o calzar. La oficina en que se cortan prendas de vestir, también recibe el nombre de #[b “Corte”]. 
    p.mb-4(data-aos="fade-right") El corte siempre va antes que la confección y para realizar ambos, corte y confección necesitamos de las siguientes #[b herramientas:]

    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-lg-7.mb-4
        LineaTiempoD.color-acento-botones.activo
          p(numero="1" titulo="Tijeras de tela") Las tijeras de tela, como su nombre lo indica son para cortar única y exclusivamente tela, ya que si las usamos para cortar otro tipo de materiales, se puede dañar el filo a las cuchillas, también se recomienda no dejarlas caer ya que se desajustan y comienzan a fallar.
          p(numero="2" titulo="Tijeras de papel") Las tijeras de papel, como su nombre lo indica son para cortar papel y éstas si pueden ser usadas en otro tipo de materiales tales como el plástico o el cartón.
          p(numero="3" titulo="Alfileres") Los alfileres es recomendable que sean de cabeza grande y puntiagudos, sí los alfileres tiene la punta chata o partida pueden romper los tejidos de la tela en la cual los estemos pinchando.
          p(numero="4" titulo="Tiza para confección") La tiza es usada para marcar los moldes y señas en la tela.
          p(numero="5" titulo="Pinzas para enhebrado") Las pinzas para enhebrado son usadas principalmente para pasar el hilo por los loopers  en el momento de enhebrar las máquinas especialmente la máquina fileteadora y/o recubridora.
          p(numero="6" titulo="Mesa para corte") Esta mesa además de ser usada para cortar la tela, también es usada para apoyar las piezas para ser acomodadas o empalmadas para realizar partes del proceso de confección.
          p(numero="7" titulo="Pulidora") Con la pulidora, además de cortar las hebras de hilo sobrantes en el proceso de confección, su puede pulir la prenda cuando ya está terminada.
          p(numero="8" titulo="Metro") El metro o cinta métrica es usada para dar medidas exactas en el momento de ser necesario en cualquiera de los procedimientos de la confección.
          p(numero="9" titulo="Aguja de mano") Esta aguja es una herramienta que se utiliza en caso de que sea necesario bastear la pieza a confeccionar.
          p(numero="10" titulo="Agujas para máquinas") Por el contrario de las agujas de mano, las agujas de la máquina son unas de las herramientas más importantes en el momento de usar cualquiera de las máquinas de coser y cada una de ellas requiere de una aguja especial.
          p(numero="11" titulo="Hilos") Además de la máquina y las agujas, los hilos son otra herramienta importante ya que gracias a ellos logramos dejar unidas cada una de las piezas de una prenda de vestir, Los hilos más comunes en la confección son el hilo de algodón, el poliéster y el nylon.
          p(numero="12" titulo="Destornilladores") Los destornilladores se necesitan para el cambio de agujas y para realizar ajustes ocasionales a las máquinas, por eso es necesario tener en diferentes tamaños y diferentes puntas.
          p(numero="13" titulo="Caja bobina") La caja bobina es una herramienta usada en la parte inferior de la máquina plana y es la que recibe y hace que el carretel con hilo sean los que entrelacen la puntada. 
      .col-7.col-lg-5.col-md-7
        figure
          img(src="@/assets/curso/temas/img1.png", alt="alt")(data-aos="zoom-in")

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
