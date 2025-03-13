<template>
  <section class="relative min-h-screen bg-gradient-to-br from-[#4A0B2D] to-[#FF1F7D] overflow-hidden">
    <!-- SEO Manager -->
    <SeoManager
      title="VeveFit - Treino para Perder Medidas"
      description="Tenha acesso ao único treino capaz de te fazer perder de 4 a 12 centímetros de volume abdominal em apenas 3 meses!"
      :url="currentUrl"
    />

    <div class="container mx-auto px-4 py-12 relative z-10">
      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <!-- Left Content -->
        <div class="text-white space-y-6">
          <!-- Logo -->
          <div class="mb-8">
            <img src="@/assets/images/logo-vevefit.png" alt="Plataforma VeveFit" class="h-12" />
          </div>
          
          <!-- Main Heading -->
          <div class="bg-[#C4004F] inline-block p-4 rounded-lg mb-4">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Tenha acesso ao único treino capaz de te fazer perder de 4 a 12 centímetros de volume abdominal em apenas 3 meses!
            </h1>
          </div>
          
          <!-- Subheading -->
          <p class="text-xl md:text-2xl text-white/90">
            Perca barriga diminuindo medidas em tempo recorde, com um protocolo de treinos que gasta menos de 20 minutos do seu dia.
          </p>

          <!-- Video Section -->
          <div class="relative w-full aspect-video bg-black/20 rounded-lg overflow-hidden mt-8">
            <div class="absolute inset-0 flex items-center justify-center">
              <button 
                @click="playVideo"
                class="bg-[#C4004F] rounded-full p-8 hover:bg-[#D4105F] transition-colors"
              >
                <span class="text-white text-lg font-medium">Clique para ouvir</span>
              </button>
            </div>
          </div>

          <!-- CTA Button -->
          <a 
            href="#matricula" 
            class="inline-block bg-green-500 text-white text-xl font-bold py-4 px-8 rounded-full mt-8 hover:bg-green-600 transition-colors w-full text-center uppercase"
          >
            QUERO GARANTIR MINHA VAGA AGORA
          </a>
        </div>

        <!-- Right Content - Image -->
        <div class="relative hidden lg:block">
          <img 
            src="@/assets/images/WhatsApp Image 2025-03-13 at 13.12.05.jpeg" 
            alt="Verônica Motta - VeveFit" 
            class="w-full"
          />
        </div>
      </div>
    </div>

    <!-- WhatsApp Button -->
    <WhatsAppButton phoneNumber="5511999999999" />
  </section>
</template>

<script>
import SeoManager from '@/components/common/SeoManager.vue'
import WhatsAppButton from '@/components/common/WhatsAppButton.vue'

export default {
  name: 'HeroSection',
  components: {
    SeoManager,
    WhatsAppButton
  },
  data() {
    return {
      currentUrl: window.location.href
    }
  },
  methods: {
    playVideo() {
      // Implement video play functionality
      console.log('Play video')
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}

@media (min-width: 1024px) {
  .container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style> 