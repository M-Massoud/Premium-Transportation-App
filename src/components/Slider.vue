<template>
  <div class="flex justify-between items-center">
    <h2 class="text-black text-xl font-medium my-3">Select car class</h2>

    <div class="flex items-center space-x-4">
      <button @click.prevent="prevSlide" class="">
        <img src="/icons/arrow-right.svg" alt="arrow-icon" />
      </button>
      <button @click.prevent="nextSlide" class="">
        <img src="/icons/arrow-left.svg" alt="arrow-icon" />
      </button>
    </div>
  </div>

  <div class="w-full flex">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :class="[
        'relative',
        'w-full',
        'even:ml-2',
        { hidden: Math.floor(index / 2) !== currentIndex },
      ]"
      @click="selectSlide(slide, index)"
    >
      <div
        class="p-3 rounded-xl border-2 border-darkFormGrey text-black relative cursor-pointer"
        :class="{ 'border-4 border-black': selectedIndex == index }"
      >
        <div class="absolute top-2 right-2 z-100">
          <div class="tooltip tooltip-left" data-tip="More info">
            <img class="ml-2" src="/icons/info-circle.svg" alt="info-icon" />
          </div>
        </div>
        <img :src="slide.imgUrl" :alt="slide.alt" class="w-full text-center" />
        <h6 class="text-base font-semibold">{{ slide.class }}</h6>
        <p class="text-sm font-light">{{ slide.car }}</p>
        <div class="my-2 flex space-x-4">
          <div class="flex space-x-2">
            <img src="/icons/users.svg" alt="users-icon" />
            <span class="text-sm">{{ slide.passengers }}</span>
          </div>
          <div class="flex space-x-2">
            <img src="/icons/bag.svg" alt="users-icon" />
            <span class="text-sm">{{ slide.bags }}</span>
          </div>
        </div>
        <p class="font-bold mt-6">SAR &nbsp; {{ slide.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const selectedIndex = ref(null);
const currentIndex = ref(0);

const slides = [
  {
    imgUrl: '/images/car-1.png',
    alt: 'car image',
    class: 'Pure class',
    car: 'Lucid Air Dream',
    passengers: '2',
    bags: '×2',
    price: '850.50',
  },
  {
    imgUrl: '/images/car-2.png',
    alt: 'car image',
    class: 'Business Class',
    car: 'Mercedes E450 Class',
    passengers: '2',
    bags: '×2',
    price: '240.00',
  },
  {
    imgUrl: '/images/car-3.png',
    alt: 'car image',
    class: 'Mid size luxury',
    car: 'BMW x6',
    passengers: '2',
    bags: '×4',
    price: '1200.00',
  },
  {
    imgUrl: '/images/car-4.png',
    alt: 'car image',
    class: 'Sports Class',
    car: 'Land Rover',
    passengers: '4',
    bags: '×4',
    price: '1240.00',
  },
];

const prevSlide = () => {
  currentIndex.value--;
  if (currentIndex.value * 2 < 0) {
    currentIndex.value = slides.length - 1;
  }
};

const nextSlide = () => {
  currentIndex.value++;
  if (currentIndex.value * 2 >= slides.length) {
    currentIndex.value = 0;
  }
};

const selectSlide = (slide, index) => {
  selectedIndex.value = index;
};
</script>
