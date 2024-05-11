<template>
  <dialog id="paymentsModal" class="modal modal-overlay">
    <div class="modal-box bg-white w-96">
      <form method="dialog">
        <button class="">
          <img src="../assets/icons/close.svg" />
        </button>
      </form>
      <h4 class="font-semibold text-3xl text-black mt-2">Payment Method</h4>
      <p class="text-black my-1 w-5/6 font-normal text-sm">
        Please select payment method for your next request
      </p>
      <ul class="mt-4">
        <li
          v-for="method in paymentMethods"
          class="py-4 flex border-b border-gray-100"
        >
          <div class="w-8 flex items-center">
            <img
              :src="`/src/assets/icons/${method.icon}.svg`"
              alt="payment method image"
            />
          </div>
          <span
            class="text-black ml-6 text-right"
            :class="[method.selected ? 'font-bold' : 'font-medium']"
            >{{ method.text }}</span
          >
          <img
            v-if="method.selected"
            class="ml-auto"
            src="../assets/icons/tick-circle.svg"
            alt="checkmark icon"
          />
        </li>

        <button class="flex pt-4 space-x-7 pb-1">
          <img src="../assets/icons/add.svg" alt="add method icon" />
          <span class="text-black font-medium"> Add payment method </span>
        </button>
      </ul>
    </div>
  </dialog>
</template>

<script setup>
const paymentMethods = [
  {
    icon: 'empty-wallet',
    text: 'Balance . SAR 20,450.00',
    selected: false,
  },
  {
    icon: 'visa',
    text: 'Visa . 5766',
    selected: true,
  },
  {
    icon: 'american-express',
    text: 'Amex . 5736',
    selected: false,
  },
];
</script>

<style></style>
