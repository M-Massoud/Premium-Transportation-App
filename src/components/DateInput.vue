<template>
  <div
    class="flex divide-x *:px-2 first:*:pl-0 last:*:pr-0 w-full px-3 py-3 bg-formGrey rounded-md overflow-hidden"
  >
    <div class="w-1/2 flex justify-between items-center">
      <div>
        <label class="text-xs font-medium text-black">Date</label>
        <input
          class="bg-transparent placeholder:font-light placeholder:text-sm placeholder:text-gray-500 block p-0 -my-1 text-black text-sm font-medium max-w-24"
          placeholder="Pickup Date"
          type="text"
          disabled
          :value="dayjs(date).format('DD MMM. YYYY')"
        />
      </div>

      <VDatePicker
        class="shadow-sm z-[1000]"
        v-model="date"
        color="black"
        :min-date="new Date()"
        :available-dates="{ start: new Date(), end: null }"
      >
        <template #default="{ togglePopover }">
          <button @click.prevent="togglePopover">
            <img src="/icons/calendar.svg" />
          </button>
        </template>
      </VDatePicker>
    </div>

    <div class="w-1/2 flex justify-between items-center">
      <div>
        <label class="text-xs font-medium text-black">Time</label>
        <input
          class="bg-transparent placeholder:font-light placeholder:text-sm placeholder:text-gray-500 block p-0 -my-1 text-black text-sm font-medium max-w-24"
          placeholder="Pickup Time"
          type="text"
          :value="dayjs(date).format('hh:mm A')"
          disabled
        />
      </div>

      <VDatePicker
        class="shadow-sm z-[1000]"
        v-model="date"
        mode="time"
        color="black"
      >
        <template #default="{ togglePopover }">
          <button @click.prevent="togglePopover">
            <img src="/icons/clock.svg" />
          </button>
        </template>
      </VDatePicker>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';
const date = ref(new Date());
</script>

<style>
.vc-container * {
  font-family: 'Outfit', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.vc-container {
  border: none !important;
}

.vc-weekday {
  color: #737373;
  font-size: 12px !important;
  font-weight: semibold !important;
}

.vc-black {
  --vc-accent-50: black;
  --vc-accent-100: black;
  --vc-accent-200: black;
  --vc-accent-300: black;
  --vc-accent-400: black;
  --vc-accent-500: black;
  --vc-accent-600: black;
  --vc-accent-700: black;
  --vc-accent-800: black;
  --vc-accent-900: black;
}

.vc-header .vc-title-wrapper {
  position: absolute;
  font-size: 18px;
  font-weight: bold;
}

.vc-arrow.vc-next:hover {
  background-color: transparent;
}

.vc-header .vc-arrow.vc-arrow.vc-next:hover {
  background: transparent;
}

.vc-arrow.vc-next svg {
  display: none;
}

.vc-arrow.vc-prev {
  display: none !important;
}

.vc-arrow.vc-next::before {
  content: '';
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  background-image: url(/icons/arrow-left-calendar.svg);
  background-color: #f1f1f1;
  background-position: center;
  display: block;
  border-radius: 6px;
}

.vc-popover-content-wrapper.is-interactive {
  z-index: 110;
}
</style>
