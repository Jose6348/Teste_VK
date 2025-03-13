<template>
  <header class="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300" :class="{ 'bg-white shadow-md': isScrolled }">
    <nav class="container py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="flex items-center space-x-2">
          <img 
            src="../../assets/images/Thumb-Plataforma-1.jpg" 
            alt="VeveFit" 
            class="h-12 w-auto"
          />
          <span class="text-2xl font-bold text-primary">VeveFit</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in menuItems" 
            :key="item.href"
            :href="item.href" 
            class="text-gray-600 hover:text-accent transition-colors duration-300 font-medium"
          >
            {{ item.label }}
          </a>
          <a 
            href="#planos" 
            class="btn btn-primary"
          >
            Começar Agora
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6" 
            :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6" 
            :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-show="isMenuOpen" 
        class="md:hidden mt-4"
        :class="{ 'animate-fade-in': isMenuOpen }"
      >
        <div class="flex flex-col space-y-4 bg-white rounded-lg shadow-lg p-4">
          <a 
            v-for="item in menuItems" 
            :key="item.href"
            :href="item.href" 
            class="text-gray-600 hover:text-accent transition-colors duration-300 font-medium py-2"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
          <a 
            href="#planos" 
            class="btn btn-primary w-full"
            @click="closeMenu"
          >
            Começar Agora
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
      menuItems: [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Benefícios', href: '#beneficios' },
        { label: 'Planos', href: '#planos' },
        { label: 'Depoimentos', href: '#depoimentos' },
        { label: 'Contato', href: '#contato' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 20
    }
  }
}
</script> 