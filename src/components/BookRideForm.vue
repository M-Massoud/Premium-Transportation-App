<template>
  <form>
    <div class="book-form-scrollable overflow-y-auto">
      <div class="dropdown w-full">
        <div
          tabindex="0"
          role="button"
          class="flex items-center p-2 bg-formGrey rounded-md border-2 border-formGrey focus:border-black"
        >
          <p class="flex flex-col w-full space-y-0">
            <label class="text-xs font-medium text-black">Ride type</label>
            <input
              class="bg-transparent cursor-pointer placeholder:font-light placeholder:text-sm placeholder:text-gray-500"
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

      <div class="flex items-center justify-between mt-4">
        <p class="flex items-center space-x-2">
          <input
            class="w-5 h-5 checkbox rounded-md bg-formGrey"
            type="checkbox"
            id="ride-book-owner"
            value="Jack"
            v-model="checkedNames"
          />
          <label class="flex items-center text-sm text-black" for="ride-book-owner"
            >Name-Board
            <div class="lg:tooltip" data-tip="More info about name board">
              <img
                class="ml-2"
                src="../assets/icons/info-circle.svg"
                alt="info-icon"
              />
            </div>
          </label>
        </p>
        <span class="text-sm text-black font-medium"> SAR 0.0 </span>
      </div>

      <div class="flex items-center justify-between mt-4">
        <p class="flex items-center space-x-2">
          <input
            class="w-5 h-5 checkbox rounded-md bg-formGrey"
            type="checkbox"
            id="ride-book-owner"
            value="Jack"
            v-model="checkedNames"
          />
          <label class="text-sm text-black" for="ride-book-owner"
            >Childe's seat</label
          >
        </p>
        <span class="text-sm text-black font-medium"> SAR 130.0 </span>
      </div>

      <div class="flex items-center justify-between mt-4">
        <p class="flex items-center space-x-2">
          <input
            class="w-5 h-5 checkbox rounded-md bg-formGrey"
            type="checkbox"
            id="ride-book-owner"
            value="Jack"
            v-model="checkedNames"
          />
          <label class="text-sm text-black" for="ride-book-owner"
            >Altanfithi Accsess</label
          >
        </p>
        <span class="text-sm text-black font-medium"> SAR 2,000.0 </span>
      </div>

      <div class="flex items-center justify-between mt-4">
        <p class="flex items-center space-x-2">
          <input
            class="w-5 h-5 checkbox rounded-md bg-formGrey"
            type="checkbox"
            id="ride-book-owner"
            value="Jack"
            v-model="checkedNames"
          />
          <label class="flex items-center text-sm text-black" for="ride-book-owner"
            >Additional car for luggages
            <div class="lg:tooltip" data-tip="This will cost more money">
              <img
                class="ml-2"
                src="../assets/icons/info-circle.svg"
                alt="info-icon"
              />
            </div>
          </label>
        </p>
        <span class="text-sm text-black font-medium"> SAR 250.0 </span>
      </div>

      <div
        class="bg-formGrey flex flex-col p-3 my-4 rounded-md border-2 border-formGrey focus:border-black focus-within:border-2 focus-within:border-black"
      >
        <label for="special-comment" class="text-xs font-medium text-black"
          >A special comment</label
        >
        <textarea
          rows="4"
          id="special-comment"
          class="bg-transparent resize-none placeholder:font-light placeholder:text-sm placeholder:text-gray-500 focus:border-0 focus:outline-none text-black"
          placeholder="Luggage information, special needs or tasks for driver"
        />
      </div>

      <h2 class="text-black text-xl font-medium my-3">Summary</h2>

      <div class="flex flex-col space-y-2">
        <p class="flex text-black text-sm font-medium">
          Services <span class="inline-block ml-auto">SAR 450.0</span>
        </p>
        <p class="flex text-black text-sm font-medium">
          Additions fees <span class="inline-block ml-auto">SAR 2,000.0</span>
        </p>
        <p class="flex text-black text-sm font-medium">
          VAT <span class="inline-block ml-auto">SAR 100.0</span>
        </p>
        <p class="flex text-black text-sm font-bold">
          Total <span class="inline-block ml-auto">SAR 100.0</span>
        </p>
      </div>
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
