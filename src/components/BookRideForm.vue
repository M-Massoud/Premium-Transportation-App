<template>
  <form>
    <div class="bg-formGrey mb-10">
      <label class="text-black">Ride type</label>
      <input class="bg-transparent" placeholder="Select type of ride" />
    </div>

    <div class="dropdown w-full">
      <div
        tabindex="0"
        role="button"
        class="flex items-center p-2 bg-formGrey rounded-md border-2 border-transparent focus:border-black"
      >
        <p class="flex flex-col w-full space-y-0">
          <label class="text-xs font-medium text-black">Ride type</label>
          <input
            class="bg-transparent cursor-pointer placeholder:font-light placeholder:text-sm"
            placeholder="Select type of ride"
            disabled
          />
        </p>
        <img src="../assets/icons/arrow-down-black.svg" />
      </div>

      <ul
        tabindex="0"
        class="dropdown-content z-[1] mt-4 menu p-2 shadow bg-white rounded-md w-full"
      >
        <li
          v-for="option in rideOptions"
          class="py-2 px-3 text-black text-sm font-normal hover:cursor-pointer hover:bg-black hover:rounded-md hover:text-white hover:font-semibold"
        >
          {{ option }}
        </li>
      </ul>
    </div>

    <div class="flex items-center space-x-2 mt-4">
      <input
        class="w-5 h-5 checkbox rounded-md bg-formGrey"
        type="checkbox"
        id="ride-book-owner"
        value="Jack"
        v-model="checkedNames"
      />
      <label class="text-sm text-black" for="ride-book-owner"
        >This ride book for another person</label
      >
    </div>
  </form>
</template>
<script setup>
const rideOptions = [
  'Airport Pickup',
  'Airport Drop-off',
  'For a Day',
  'By Hours',
  'City to city',
];
</script>
