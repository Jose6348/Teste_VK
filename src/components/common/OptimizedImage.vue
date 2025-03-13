<template>
  <img
    :src="src"
    :srcset="srcset"
    :sizes="sizes"
    :alt="alt"
    :loading="loading"
    class="w-full h-full object-cover"
    @error="handleError"
    :class="className"
  />
</template>

<script>
export default {
  name: 'OptimizedImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    sizes: {
      type: String,
      default: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    },
    className: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loading: 'lazy',
      error: false
    }
  },
  computed: {
    srcset() {
      if (this.error) return ''
      const baseUrl = this.src.replace(/\.[^/.]+$/, '')
      return `
        ${baseUrl}-300.webp 300w,
        ${baseUrl}-600.webp 600w,
        ${baseUrl}-900.webp 900w,
        ${baseUrl}-1200.webp 1200w
      `
    }
  },
  methods: {
    handleError() {
      this.error = true
      this.loading = 'eager'
    }
  }
}
</script> 