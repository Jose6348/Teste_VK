<template>
  <div class="min-h-screen">
    <Header />
    <Hero />
    <Sobre />
    <QuemEVeveFit />
    <MetodoBarrigaNegativa />
    <InformativoBarriga />
    <TreinosDiarios />
    <Beneficios />
    <Galeria />
    <Depoimentos />
    <GarantiaSection />
    <Planos />
    <Contato />
    <Footer />
  </div>
</template>

<script>
import Header from './sales-page/Header.vue'
import Hero from './sales-page/Hero.vue'
import Sobre from './sales-page/Sobre.vue'
import QuemEVeveFit from './sales-page/QuemEVeveFit.vue'
import MetodoBarrigaNegativa from './sales-page/MetodoBarrigaNegativa.vue'
import InformativoBarriga from './sales-page/InformativoBarriga.vue'
import TreinosDiarios from './sales-page/TreinosDiarios.vue'
import Beneficios from './sales-page/Beneficios.vue'
import Galeria from './sales-page/Galeria.vue'
import Depoimentos from './sales-page/Depoimentos.vue'
import GarantiaSection from './sales-page/Garantia.vue'
import Planos from './sales-page/Planos.vue'
import Contato from './sales-page/Contato.vue'
import Footer from './sales-page/Footer.vue'

export default {
  name: 'SalesPage',
  components: {
    Header,
    Hero,
    Sobre,
    QuemEVeveFit,
    MetodoBarrigaNegativa,
    InformativoBarriga,
    TreinosDiarios,
    Beneficios,
    Galeria,
    Depoimentos,
    GarantiaSection,
    Planos,
    Contato,
    Footer
  }
}
</script> 