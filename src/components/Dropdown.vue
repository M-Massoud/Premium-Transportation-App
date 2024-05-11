<template>
  <div class="dropdown w-full my-1.5">
    <div
      ref="dropdownRef"
      tabindex="0"
      role="button"
      class="flex items-center p-2 bg-formGrey rounded-md border-2 border-formGrey focus:border-black focus:bg-white"
    >
      <p class="flex flex-col w-full space-y-0">
        <label class="text-xs font-medium text-black">{{ props.label }}</label>
        <input
          class="bg-transparent cursor-pointer placeholder:font-light placeholder:text-sm placeholder:text-gray-500 text-black font-medium text-sm"
          :placeholder="props.placeholder"
          :value="input.length > 32 ? input.substring(0, 32) + '...' : input"
          :v-model="input"
          disabled
        />
      </p>
      <img :src="`/icons/${props.icon}.svg`" alt="icon" />
    </div>

    <ul
      tabindex="0"
      class="dropdown-content z-[1] mt-4 menu p-2 shadow bg-white rounded-md w-full"
      :class="{
        hidden: dropdownIsClosed == true,
      }"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps([
  'label',
  'options',
  'icon',
  'input',
  'placeholder',
  'dropdownIsClosed',
]);
const emits = defineEmits(['handleSelect']);
</script>
