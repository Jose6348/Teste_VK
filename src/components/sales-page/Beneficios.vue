<template>
  <section id="beneficios" class="section bg-gray-50">
    <div class="container">
      <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
        <h2 class="section-title text-primary">
          Por que escolher a VeveFit?
        </h2>
        <p class="text-lg text-gray-600">
          Descubra os diferenciais que tornam nossa metodologia única e eficaz
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Benefício 1 -->
        <div class="card p-8 text-center animate-fade-in" style="animation-delay: 0.2s">
          <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Resultados Rápidos</h3>
          <p class="text-gray-600">
            Metodologia comprovada para alcançar seus objetivos em tempo recorde, com resultados visíveis já nos primeiros 30 dias.
          </p>
        </div>

        <!-- Benefício 2 -->
        <div class="card p-8 text-center animate-fade-in" style="animation-delay: 0.4s">
          <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Acompanhamento Personalizado</h3>
          <p class="text-gray-600">
            Treinamento adaptado às suas necessidades e objetivos específicos, com suporte contínuo dos nossos especialistas.
          </p>
        </div>

        <!-- Benefício 3 -->
        <div class="card p-8 text-center animate-fade-in" style="animation-delay: 0.6s">
          <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Garantia de Resultados</h3>
          <p class="text-gray-600">
            Compromisso com seu sucesso e satisfação, com garantia de resultados ou seu dinheiro de volta.
          </p>
        </div>
      </div>

      <!-- Benefícios Adicionais -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md animate-fade-in" style="animation-delay: 0.8s">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-2 text-gray-800">Treinos Flexíveis</h4>
              <p class="text-gray-600">
                Treine no seu ritmo e no seu tempo, com acesso 24/7 à plataforma.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md animate-fade-in" style="animation-delay: 1s">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-2 text-gray-800">Material Exclusivo</h4>
              <p class="text-gray-600">
                Acesso a vídeos, apostilas e materiais exclusivos para maximizar seus resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BenefitsSection'
}
</script> 