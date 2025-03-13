<template>
  <section class="py-20 bg-black">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="text-center lg:text-left">
          <img 
            src="@/assets/images/garantia-7-dias.svg" 
            alt="Garantia de 7 dias" 
            class="w-[400px] mx-auto lg:mx-0"
          />
        </div>

        <div class="text-white space-y-6">
          <h2 class="text-4xl font-bold mb-6">
            EXPERIMENTE POR 7 DIAS <span class="text-white">SEM COMPROMISSO</span>
          </h2>
          
          <p class="text-lg">
            Se você ainda tá em dúvida se a Plataforma VeveFit é pra você, eu te convido a fazer a sua inscrição, experimentar todo o conteúdo que está liberado para você na aula exclusiva de alunas. Pode ir fazendo os treinos e degustando tudo.
          </p>

          <p class="text-[#FF1F7D] text-xl font-bold">
            Se em 7 dias, você achar que a Plataforma não é para você, eu te devolvo todo o seu investimento.
          </p>

          <p class="text-lg">
            Sem burocracia, você nem precisa se justificar. Eu faço isso porque confio no meu método e sei que você não vai se decepcionar, seu risco é zero. Mas claro, a escolha é sua.
          </p>

          <p class="text-[#FF1F7D] text-xl">
            Pra fazer a sua degustação gratuita de 7 dias, clica aqui embaixo e faça já a sua inscrição.
          </p>

          <div class="pt-4">
            <a 
              href="#matricula" 
              class="inline-block bg-green-500 text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-green-600 transition-colors w-full text-center"
            >
              QUERO EXPERIMENTAR POR 7 DIAS
            </a>
          </div>

          <p class="text-center text-sm pt-4">
            Receba seu acesso imediatamente após a confirmação do pagamento
          </p>

          <div class="flex justify-center gap-8 pt-6">
            <img src="/src/assets/images/payment/compra-segura.png" alt="Compra 100% Segura" class="h-8" />
            <img src="/src/assets/images/payment/renovacao-automatica.png" alt="Renovação Automática" class="h-8" />
            <img src="/src/assets/images/payment/garantia-incondicional.png" alt="Garantia Incondicional" class="h-8" />
            <img src="/src/assets/images/payment/pix.png" alt="Pague com PIX" class="h-8" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GarantiaSection'
}
</script> 