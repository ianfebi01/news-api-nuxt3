<template>
  <button
    :type="type"
    :class="classes"
    class="cursor-pointer font-medium border border-none rounded-[8px] bg-[#55BDB3] inline-block text-white px-6 py-2 text-14 hover:brightness-95 transition-all duration-300 ease-in-out"
    @click="onClick"
    :style="style"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string
    /**
     * primary or secondary button
     */
    primary?: boolean
    /**
     * size of the button
     */
    size?: 'small' | 'medium' | 'large'
    /**
     * background color of the button
     */
    color?: string
    type?: 'button' | 'submit' | 'reset' | undefined
    disabled?: boolean
  }>(),
  { primary: false, color: '#55BDB3', type: 'button', disabled: false }
)

const emit = defineEmits<{
  (e: 'click', id: number): void
}>()

const classes = computed(() => ({
  [`button--${props.size || 'medium'}`]: true,
  ['brightness-50 hover:brightness-50 cursor-default']: props.disabled,
}))

const style = computed(() => {
  if (props.primary) {
    return {
      backgroundColor: props.color,
      color: '#fff',
    }
  } else {
    return {
      backgroundColor: '#fff',
      color: props.color,
      border: '2px solid' + props.color,
    }
  }
})

const onClick = () => {
  emit('click', 1)
}
</script>
<style lang="scss" scoped>
.button {
  &--small {
    @apply h-[38px];
  }
  &--medium {
    @apply h-[44px];
  }
  &--large {
    @apply h-[50px];
  }
}
</style>
