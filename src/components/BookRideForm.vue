<template>
  <form class="relative" onsubmit="handleSubmit">
    <div class="p-4 book-form-scrollable" :class="{ 'overflow-y-auto': rideType }">
      <Dropdown
        label="Ride type"
        :options="rideOptions"
        icon="arrow-down-black"
        :input="rideType"
        placeholder="Select type of ride"
        @handleSelect="handleSelectOption"
        :dropdownIsClosed="dropdownIsClosed"
      >
        <li
          role="button"
          v-for="option in rideOptions"
          class="py-2 px-3 text-black text-sm font-normal hover:cursor-pointer hover:bg-black hover:rounded-md hover:text-white hover:font-semibold"
          :class="{
            'bg-black rounded-md text-white font-semibold': option == rideType,
          }"
          @click.prevent="() => handleSelectOption(option, 'ride-type')"
        >
          {{ option }}
        </li>
      </Dropdown>

      <div v-show="rideType">
        <div class="flex items-center space-x-2 my-2">
          <input
            class="w-5 h-5 checkbox rounded-md bg-formGrey"
            type="checkbox"
            id="ride-book-owner"
            v-model="checkboxesValues.forAnother"
          />
          <label class="text-sm text-black" for="ride-book-owner"
            >This ride book for another person</label
          >
        </div>

        <Dropdown
          label="From"
          :options="fromLocationOptions"
          icon="arrow-down-black"
          :input="fromLocation"
          placeholder="Select airport"
          @handleSelect="handleSelectOption"
          :dropdownIsClosed="dropdownIsClosed"
        >
          <li
            role="button"
            v-for="option in fromLocationOptions"
            class="py-2 px-3 text-black text-sm font-normal hover:cursor-pointer hover:bg-black hover:rounded-md hover:text-white"
            :class="{
              'bg-black rounded-md text-white font-semibold': option == fromLocation,
            }"
            @click.prevent="() => handleSelectOption(option, 'from-location')"
          >
            <p class="my-0 py-0 text-sm font-medium">{{ option.city }}</p>
            <p class="my-0 py-0 text-xs font-light hover:text-xs hover:font-light">
              {{ option.place }}
            </p>
          </li>
        </Dropdown>

        <Dropdown
          label="To"
          :options="toLocationOptions"
          icon="map-pin"
          :input="toLocation"
          placeholder="Select destination"
          @handleSelect="handleSelectOption"
          :dropdownIsClosed="dropdownIsClosed"
        >
          <li
            role="button"
            v-for="option in toLocationOptions"
            class="py-2 px-3 text-black text-sm font-normal hover:cursor-pointer hover:bg-black hover:rounded-md hover:text-white hover:font-semibold"
            :class="{
              'bg-black rounded-md text-white font-semibold': option == toLocation,
            }"
            @click.prevent="() => handleSelectOption(option, 'to-location')"
          >
            {{ option }}
          </li>
        </Dropdown>

        <DateInput class="my-1.5" />

        <div
          class="bg-formGrey flex flex-col p-3 mt-3 my-1.5 rounded-md border-2 border-formGrey focus:border-black focus-within:bg-white focus-within:border-2 focus-within:border-black"
        >
          <label for="special-comment" class="text-xs font-medium text-black"
            >Flight number</label
          >
          <input
            v-model="flightNumber"
            placeholder="Enter flight number"
            class="bg-transparent placeholder:font-light placeholder:text-sm placeholder:text-gray-500 text-black font-medium text-sm focus:outline-none"
          />
        </div>
        <p v-if="flightNumberError.isError" class="text-sm text-nowrap text-red-600">
          {{ flightNumberError.message }}
        </p>

        <Slider />

        <h3 class="mt-4 text-sm text-right">Fees</h3>

        <div class="flex items-center justify-between mt-4">
          <p class="flex items-center space-x-2">
            <input
              class="w-5 h-5 checkbox rounded-md bg-formGrey"
              type="checkbox"
              id="name-board"
              v-model="checkboxesValues.nameBoard"
            />
            <label class="flex items-center text-sm text-black" for="name-board"
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
              id="child-seat"
              v-model="checkboxesValues.childSeat"
            />
            <label class="text-sm text-black" for="child-seat">Childe's seat</label>
          </p>
          <span class="text-sm text-black font-medium"> SAR 130.0 </span>
        </div>

        <div class="flex items-center justify-between mt-4">
          <p class="flex items-center space-x-2">
            <input
              class="w-5 h-5 checkbox rounded-md bg-formGrey"
              type="checkbox"
              id="altanfithi-access"
              v-model="checkboxesValues.altanfithiAccsess"
            />
            <label class="text-sm text-black" for="altanfithi-access"
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
              id="additional-luggages"
              v-model="checkboxesValues.additionalLuggages"
            />
            <label
              class="flex items-center text-sm text-black"
              for="additional-luggages"
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
          class="bg-formGrey flex flex-col p-3 my-4 rounded-md border-2 border-formGrey focus:border-black focus-within:bg-white focus-within:border-2 focus-within:border-black"
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
    </div>

    <div class="mt-6 p-4 form-submit-button">
      <p class="flex text-black text-sm font-medium">
        Payment Method
        <span class="inline-block ml-auto font-bold">Balance . SAR20,450.00</span>
      </p>
      <button
        class="mt-2 py-2 rounded-md text-white font-bold bg-black w-full disabled:bg-formGrey disabled:text-gray-200"
        :onclick="e => showPaymentsModal(e)"
        :disabled="!rideType || !fromLocation || !toLocation"
      >
        Submit
      </button>
    </div>

    <PaymentMethodsModal />
  </form>
</template>

<script setup>
import { ref, watch } from 'vue';
import Dropdown from './Dropdown.vue';
import Slider from './Slider.vue';
import DateInput from './DateInput.vue';
import PaymentMethodsModal from './PaymentMethodModal.vue';
import * as yup from 'yup';
import { validationSchema } from '../utils/bookrideValidationSchema.js';

const rideType = ref('');
const fromLocation = ref('');
const toLocation = ref('');
const flightNumber = ref('');
const flightNumberError = ref({
  isError: false,
  message: '',
});

const checkboxesValues = ref({
  forAnother: false,
  nameBoard: false,
  childSeat: false,
  altanfithiAccsess: false,
  additionalLuggages: false,
});
const emits = defineEmits(['handleSelectOption']);
const dropdownIsClosed = ref(false);

const rideOptions = [
  'Airport Pickup',
  'Airport Drop-off',
  'For a Day',
  'By Hours',
  'City to city',
];

const fromLocationOptions = [
  {
    city: 'Riyadh (RUH)',
    place: 'King Fahd International Airport',
    shortcut: 'RUH',
  },
  {
    city: 'Jeddah (JED) ',
    place: 'King Abdulaziz International Airport',
    shortcut: 'JED',
  },
  {
    city: 'Dammam (DMM)',
    place: 'King Fahd International ',
    shortcut: 'RUH',
  },
];

const toLocationOptions = [
  'Al Thoumamah Rd, An Narjis, Uthman Ibn Affan Rd',
  'King Fahd Road',
  'Tahlia Street',
  'Prince Mohammed bin Abdulaziz Street',
];

const handleSelectOption = (option, input) => {
  switch (input) {
    case 'ride-type':
      rideType.value = option;
      break;
    case 'from-location':
      fromLocation.value = `${option.shortcut} - ${option.place}`;
      break;
    case 'to-location':
      toLocation.value = option;
      break;
  }

  dropdownIsClosed.value = true;
  setTimeout(() => {
    dropdownIsClosed.value = false; // to reset the dropdown hidden style
  }, 100);
};

const showPaymentsModal = e => {
  e.preventDefault();
  paymentsModal.showModal();
};

watch(flightNumber, async (newValue, oldValue) => {
  try {
    await validationSchema.validate({ flightNumber: newValue });
    flightNumberError.value = { isError: false, message: '' };
  } catch (error) {
    flightNumberError.value = { isError: true, message: error.message };
  }
});

const handleSubmit = e => {};
</script>
