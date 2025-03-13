<template>
  <div>
    <meta name="description" :content="description">
    <meta name="keywords" :content="keywords">
    <meta property="og:title" :content="title">
    <meta property="og:description" :content="description">
    <meta property="og:image" :content="image">
    <meta property="og:url" :content="url">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" :content="title">
    <meta name="twitter:description" :content="description">
    <meta name="twitter:image" :content="image">
  </div>
</template>

<script>
export default {
  name: 'SeoManager',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    keywords: {
      type: String,
      default: 'VeveFit, treino, barriga negativa, diástase, exercícios, saúde, bem-estar'
    },
    schema: {
      type: Object,
      required: true
    }
  },
  mounted() {
    // Injetar o schema JSON dinamicamente
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(this.schema);
    document.head.appendChild(script);

    // Atualizar o título da página
    document.title = this.title;
  },
  beforeUnmount() {
    // Limpar o script quando o componente for desmontado
    const scripts = document.head.getElementsByTagName('script');
    for (let script of scripts) {
      if (script.getAttribute('type') === 'application/ld+json') {
        document.head.removeChild(script);
      }
    }
  }
}
</script> 