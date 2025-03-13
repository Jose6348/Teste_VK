<template>
  <section id="sobre" class="section bg-white">
    <div class="container">
      <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
        <h2 class="section-title text-primary">
          Sobre a VeveFit
        </h2>
        <p class="text-lg text-gray-600">
          Transformando vidas através de uma metodologia única e comprovada
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1 animate-fade-in" style="animation-delay: 0.2s">
          <div class="space-y-6">
            <p class="text-lg text-gray-600">
              A VeveFit é mais do que uma academia - é uma comunidade dedicada a transformar vidas através do fitness. Nossa metodologia única combina treinamento personalizado, nutrição adequada e suporte emocional para garantir resultados reais.
            </p>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="text-3xl font-bold text-accent mb-2">3+</div>
                <div class="text-gray-600">Anos de Experiência</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="text-3xl font-bold text-accent mb-2">1000+</div>
                <div class="text-gray-600">Alunas Satisfeitas</div>
              </div>
            </div>

            <ul class="space-y-4">
              <li class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-gray-700">Metodologia comprovada cientificamente</span>
              </li>
              <li class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-gray-700">Profissionais especializados</span>
              </li>
              <li class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-gray-700">Ambiente acolhedor e motivador</span>
              </li>
            </ul>

            <div class="pt-4">
              <a href="#planos" class="btn btn-primary">
                Comece Sua Transformação
              </a>
            </div>
          </div>
        </div>

        <div class="order-1 md:order-2 animate-fade-in" style="animation-delay: 0.4s">
          <div class="relative">
            <div class="absolute -inset-4 bg-accent/10 rounded-2xl transform rotate-3"></div>
            <div class="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop" 
                alt="VeveFit - Transforme sua vida" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script> 