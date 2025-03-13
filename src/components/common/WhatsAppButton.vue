<template>
  <a 
    :href="whatsappLink" 
    target="_blank"
    rel="noopener noreferrer" 
    class="fixed bottom-4 right-4 z-50 bg-green-500 text-white rounded-full p-4 flex items-center space-x-2 hover:bg-green-600 transition-colors shadow-lg"
  >
    <span class="text-sm whitespace-nowrap">{{ message }}</span>
    <i class="fab fa-whatsapp text-2xl"></i>
    <span v-if="showNotification" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {{ notificationCount }}
    </span>
  </a>
</template>

<script>
export default {
  name: 'WhatsAppButton',
  props: {
    phoneNumber: {
      type: String,
      required: true
    },
    message: {
      type: String,
      default: 'Dúvidas? Entre em contato!'
    },
    showNotification: {
      type: Boolean,
      default: true
    },
    notificationCount: {
      type: Number,
      default: 1
    }
  },
  computed: {
    whatsappLink() {
      const baseUrl = 'https://wa.me/'
      const formattedPhone = this.phoneNumber.replace(/\D/g, '')
      return `${baseUrl}${formattedPhone}`
    }
  }
}
</script> 