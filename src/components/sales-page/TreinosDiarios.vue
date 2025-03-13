<template>
  <section class="section bg-white">
    <div class="container">
      <div class="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
        <h2 class="section-title text-primary">
          TREINOS DIÁRIOS DE 5 A 20 MINUTOS
        </h2>
        <h3 class="text-2xl font-semibold mb-4 text-gray-800">
          COM FOCO NA ESTÉTICA DA BARRIGA FEMININA
        </h3>
        <h3 class="text-2xl font-semibold mb-8 text-gray-800">
          ATRAVÉS DA ATIVAÇÃO DO TRANSVERSO ABDOMINAL
        </h3>
        <p class="text-xl text-gray-600">
          Veja como funciona a jornada da sua transformação em 3 passos simples
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="card group animate-fade-in" style="animation-delay: 0.2s">
          <div class="relative overflow-hidden">
            <img 
              src="@/assets/images/training/identificacao-barriga.jpg" 
              alt="Identificação do tipo de barriga" 
              class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="p-6">
            <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <span class="text-2xl font-bold text-accent">1</span>
            </div>
            <p class="text-lg text-gray-700">
              Aprenda a identificar o seu tipo de barriga e os programas mais indicados para você na Plataforma VeveFit
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="card group animate-fade-in" style="animation-delay: 0.4s">
          <div class="relative overflow-hidden">
            <img 
              src="@/assets/images/training/avaliacao-diafragma.jpg" 
              alt="Avaliação do diafragma" 
              class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="p-6">
            <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <span class="text-2xl font-bold text-accent">2</span>
            </div>
            <p class="text-lg text-gray-700">
              Aprenda a avaliar, liberar o seu diafragma e respirar da forma correta
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="card group animate-fade-in" style="animation-delay: 0.6s">
          <div class="relative overflow-hidden">
            <img 
              src="@/assets/images/training/ativacao-transverso.jpg" 
              alt="Ativação do transverso" 
              class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="p-6">
            <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <span class="text-2xl font-bold text-accent">3</span>
            </div>
            <p class="text-lg text-gray-700">
              Aprenda a ativar o transverso abdominal para perder 4 a 12 cm de barriga em apenas 3 meses.
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 animate-fade-in" style="animation-delay: 0.8s">
        <a href="#planos" class="btn btn-success text-lg">
          QUERO MUDAR MEU CORPO COM A VEVE
        </a>
      </div>

      <p class="text-center mt-8 text-gray-600">
        Receba seu acesso imediatamente após a confirmação do pagamento
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TreinosDiarios'
}
</script> 