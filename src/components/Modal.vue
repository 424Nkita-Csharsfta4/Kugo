<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" v-if="isOpen" @click.self="closeModal">
    <div class="flex items-center justify-center min-h-screen">
      <div class="bg-white rounded-lg shadow-lg p-6">
       <slot/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default defineComponent({
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
  },
  setup(props: ModalProps) {
    const isOpen = ref(false)

    watch(() => props.isOpen, () => {
      isOpen.value = props.isOpen
    })

    function closeModal() {
      props.onClose()
    }

    return {
      isOpen,
      closeModal,
    }
  },
})
</script>
