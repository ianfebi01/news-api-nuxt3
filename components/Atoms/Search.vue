<script lang="ts" setup>
interface Props {
  placeholder: string;
  modelValue: string;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

const data = useVModel(props, "modelValue", emit);
</script>

<template>
  <input
    v-model="data"
    :placeholder="placeholder"
    class="transition-all ease-in-out duration-300 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-darken block w-full p-2.5 pl-8 focus:ring-0 focus:outline-none"
  />
</template>
