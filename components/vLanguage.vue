<template>
  <div>
    <Listbox v-model="selectedValueRef" class="">
      <div class="relative mt-1">
        <div class="ml-6 mb-[7px]">
          <ListboxLabel class="text-lg">
            {{ label }}
            <span v-if="required" class="text-red">*</span>
          </ListboxLabel>
        </div>
        <ListboxButton
          class="relative hover:cursor-pointer w-full cursor-default h-12 bg-white rounded-[200px] py-3 pl-6 pr-[21px] text-left focus:outline-none"
        >
          <span class="block truncate text-dark font-semibold text-base">
            {{ selectedValueRef?.name || selectedValueRef || items[0].name }}
          </span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center"
          >
            <nuxt-icon
              class="arrow__bottom-icon pr-[21px]"
              name="arrows-chevron-bottom"
            />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 z-[110] max-h-60 w-full overflow-auto rounded-[18px] py-3 bg-white text-base focus:outline-none"
          >
            <ListboxOption
              v-for="item in items"
              :key="item.name"
              v-slot="{ active, selected }"
              :value="item"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-blue bg-opacity-10 text-dark' : 'text-dark',
                  'relative cursor-default select-none py-2 pl-6 '
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate'
                  ]"
                >
                  {{ item.name }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions
} from '@headlessui/vue'

defineProps({
  label: {
    type: String,
    default: 'Статус вакансии'
  },
  required: {
    type: Boolean,
    default: false
  },
  items: {
    type: Array,
    required: true
  }
})
const selectedValueRef = ref()
defineExpose({
  selectedValueRef
})

// const selectedPerson = ref(people[0])
</script>
<style>
.arrow__bottom-icon > svg {
  width: 24px;
  height: 24px;
  color: #09101d;
}
</style>
