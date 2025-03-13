<template>
  <div class="app">
    <SalesPage />
  </div>
</template>

<script>
import SalesPage from './components/SalesPage.vue'

export default {
  name: 'App',
  components: {
    SalesPage
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import './assets/styles/main.css';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Utility Classes */
.text-primary { color: var(--primary); }
.text-accent { color: var(--accent); }
.text-success { color: var(--success); }
.text-white { color: var(--white); }

.bg-primary { background-color: var(--primary); }
.bg-accent { background-color: var(--accent); }
.bg-success { background-color: var(--success); }
.bg-white { background-color: var(--white); }
.bg-gray-50 { background-color: var(--gray-50); }
.bg-gray-100 { background-color: var(--gray-100); }

/* Responsive Container */
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
</style>
