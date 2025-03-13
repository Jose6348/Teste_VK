<template>
  <Transition name="notification">
    <div
      v-if="show"
      :class="[
        'fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md',
        typeClasses[type]
      ]"
      role="alert"
      :aria-live="type === 'error' ? 'assertive' : 'polite'"
    >
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <component :is="icon" class="h-5 w-5" />
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium">
            {{ title }}
          </p>
          <p class="mt-1 text-sm">
            {{ message }}
          </p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'info',
      validator: value => ['success', 'error', 'warning', 'info'].includes(value)
    },
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  computed: {
    typeClasses() {
      return {
        success: 'bg-green-50 text-green-800 border border-green-200',
        error: 'bg-red-50 text-red-800 border border-red-200',
        warning: 'bg-yellow-50 text-yellow-800 border border-yellow-200',
        info: 'bg-blue-50 text-blue-800 border border-blue-200'
      }
    },
    icon() {
      const icons = {
        success: 'CheckCircleIcon',
        error: 'XCircleIcon',
        warning: 'ExclamationIcon',
        info: 'InformationCircleIcon'
      }
      return icons[this.type]
    }
  }
}
</script>

<style scoped>
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style> 