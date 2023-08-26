<script lang="ts" setup>
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { useNewsStore } from '~/store'
import { storeToRefs } from 'pinia'
interface Props {
  placeholder: string
}

const props = defineProps<Props>()
const emit = defineEmits(['search'])

const schema = yup.object({
  search: yup.string().required().label('Search'),
})

const store = useNewsStore()
const { search } = storeToRefs(store)

const { handleSubmit, defineInputBinds, errors, setValues } = useForm({
  validationSchema: schema,
})
onMounted(() => {
  setValues({
    search: search.value,
  })
})

const onSubmit = handleSubmit((values) => {
  search.value = values.search
  emit('search')
})

const searchField = defineInputBinds('search')
</script>

<template>
  <div class="mb-4">
    <form @submit.prevent="onSubmit" class="flex gap-2 justify-center">
      <input
        v-bind="searchField"
        :placeholder="placeholder"
        class="transition-all ease-in-out duration-300 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-darken block w-full p-2.5 pl-8 focus:ring-0 focus:outline-none"
        :class="errors.search && 'border-red-500 focus:border-red-500'"
      />

      <AtomsButton
        label="Seach"
        color="#0F2435"
        :primary="true"
        type="submit"
      />
    </form>
    <span
      class="text-red-500 text-xs transition-all duration-300 ease-in-out z-[0] flex gap-1 items-center absolute"
      :class="
        errors.search
          ? 'translate-y-0 opacity-100'
          : 'translate-y-[-10px] opacity-0'
      "
      >{{ errors.search }}</span
    >
  </div>
</template>
