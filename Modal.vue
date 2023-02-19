<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" v-if="isOpen" @click.self="">
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
  isOpen: {
    type: BooleanConstructor;
    required: true;
  };
  onClose: {
    type: FunctionConstructor;
    required: true;
  };
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
 
})
</script>
