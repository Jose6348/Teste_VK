<template>
  <section id="contato" class="py-16 bg-gray-50">
    <div class="container-custom">
      <h2 class="section-title text-veve-primary">
        Entre em Contato
      </h2>
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <form class="space-y-4">
            <div>
              <label class="block text-gray-700 mb-2">Nome</label>
              <input type="text" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-veve-primary focus:ring-2 focus:ring-veve-primary/20">
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Email</label>
              <input type="email" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-veve-primary focus:ring-2 focus:ring-veve-primary/20">
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Mensagem</label>
              <textarea class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-veve-primary focus:ring-2 focus:ring-veve-primary/20" rows="4"></textarea>
            </div>
            <button type="submit" class="btn-primary w-full">Enviar Mensagem</button>
          </form>
        </div>
        <div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold mb-4">Informações de Contato</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-veve-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+55 (11) 99999-9999</span>
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-veve-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contato@vevefit.com</span>
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-veve-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection'
}
</script> 