<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="@/assets/images/profile/veve-profile.jpg" 
            alt="Verônica Motta - VeveFit" 
            class="rounded-2xl shadow-xl w-full"
          />
        </div>

        <div>
          <h2 class="text-4xl font-bold mb-8 text-[#4A0B2D]">
            QUEM É VEVE FIT?
          </h2>
          
          <div class="space-y-6 text-lg text-gray-700">
            <p>
              Verônica Motta, mais conhecida como Veve Fit, educadora física, trabalha há 20 anos com saúde e autoestima de mulheres através do exercício físico, especialista em barriga negativa e diástase feminina.
            </p>
            
            <p>
              É considerada a maior autoridade do Brasil em Hipopressivos. Ela faz parte do Conselho Internacional e é a profissional com mais alunas no mundo, sendo a que mais formou profissionais no Brasil.
            </p>

            <p>
              Conhecida nas redes sociais como VeveFit, o seu perfil no Instagram (@vevefit) conta hoje com mais de 1 milhão seguidores.
            </p>

            <p>
              Viveu na pele a transformação trazida pelo método hipopressivo após descobrir uma diástase abdominal, por consequência da sua segunda gestação. Ao alcançar um resultado nunca antes atingido através do método, passou a ter como missão transformar a autoestima do maior número possível de mulheres e, por isso, criou o treinamento online Barriga Negativa.
            </p>

            <p>
              E agora, com sua própria plataforma de cursos – a Plataforma Vevefit – ela vem trazer o seu melhor para você! Você poderá ser treinada pela maior referência em barriga negativa do Brasil.
            </p>
          </div>

          <div class="mt-8 flex items-center space-x-6">
            <a 
              href="https://instagram.com/vevefit" 
              target="_blank"
              class="text-[#FF1F7D] hover:text-[#E01B6F] transition-colors duration-300"
            >
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#planos" class="inline-block bg-[#FF1F7D] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E01B6F] transition-colors duration-300">
              QUERO TREINAR COM A VEVE
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'QuemEVeveFit'
}
</script> 