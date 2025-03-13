<template>
  <section class="section bg-white">
    <div class="container">
      <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
        <h2 class="section-title text-primary">
          Resultados Reais
        </h2>
        <p class="text-lg text-gray-600">
          Veja as transformações de nossas alunas e inspire-se para começar sua jornada
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <!-- Before/After Image 1 -->
        <div class="relative group animate-fade-in" style="animation-delay: 0.2s">
          <div class="aspect-square rounded-lg overflow-hidden">
            <img 
              src="@/assets/images/transformation/antes-1.jpg" 
              alt="Transformação 1" 
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center p-4">
            <span class="text-white text-xl font-bold mb-2">Antes</span>
            <span class="text-white/80 text-sm text-center">
              Perda de 8cm de circunferência abdominal em 3 meses
            </span>
          </div>
        </div>

        <!-- Before/After Image 2 -->
        <div class="relative group animate-fade-in" style="animation-delay: 0.4s">
          <div class="aspect-square rounded-lg overflow-hidden">
            <img 
              src="@/assets/images/transformation/depois-1.jpg" 
              alt="Transformação 2" 
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center p-4">
            <span class="text-white text-xl font-bold mb-2">Depois</span>
            <span class="text-white/80 text-sm text-center">
              Resultados após seguir o método VeveFit
            </span>
          </div>
        </div>

        <!-- Before/After Image 3 -->
        <div class="relative group animate-fade-in" style="animation-delay: 0.6s">
          <div class="aspect-square rounded-lg overflow-hidden">
            <img 
              src="@/assets/images/transformation/antes-2.jpg" 
              alt="Transformação 3" 
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center p-4">
            <span class="text-white text-xl font-bold mb-2">Antes</span>
            <span class="text-white/80 text-sm text-center">
              Perda de 12cm de circunferência abdominal em 3 meses
            </span>
          </div>
        </div>

        <!-- Before/After Image 4 -->
        <div class="relative group animate-fade-in" style="animation-delay: 0.8s">
          <div class="aspect-square rounded-lg overflow-hidden">
            <img 
              src="@/assets/images/transformation/depois-2.jpg" 
              alt="Transformação 4" 
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center p-4">
            <span class="text-white text-xl font-bold mb-2">Depois</span>
            <span class="text-white/80 text-sm text-center">
              Resultados após seguir o método VeveFit
            </span>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-12 animate-fade-in" style="animation-delay: 1s">
        <a href="#planos" class="btn btn-primary text-lg">
          QUERO ALCANÇAR ESSES RESULTADOS
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GallerySection'
}
</script> 