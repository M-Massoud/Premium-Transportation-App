<template>
  <div class="flex justify-between items-center">
    <h2 class="text-black text-xl font-medium my-3">Select car class</h2>

    <div class="flex items-center space-x-4">
      <button @click.prevent="prevSlide" class="">
        <img src="../assets/icons/arrow-right.svg" alt="arrow-icon" />
      </button>
      <button @click.prevent="nextSlide" class="">
        <img src="../assets/icons/arrow-left.svg" alt="arrow-icon" />
      </button>
    </div>
  </div>
  <div class="carousel w-full">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :class="[
        'carousel-item',
        'relative',
        'w-full',
        { hidden: currentIndex !== index },
      ]"
    >
      <div class="flex space-x-2">
        <div class="w-1/2 p-3 rounded-xl border-2 border-darkFormGrey text-black">
          <img
            :src="slide.slide1.imgUrl"
            :alt="slide.slide1.alt"
            class="w-full text-center"
          />
          <h6 class="text-base font-semibold">{{ slide.slide1.class }}</h6>
          <p class="text-sm font-light">{{ slide.slide1.car }}</p>
          <div class="my-2 flex space-x-4">
            <div class="flex space-x-2">
              <img src="../assets/icons/users.svg" alt="users-icon" />
              <span class="text-sm">{{ slide.slide1.passengers }}</span>
            </div>
            <div class="flex space-x-2">
              <img src="../assets/icons/bag.svg" alt="users-icon" />
              <span class="text-sm">{{ slide.slide1.bags }}</span>
            </div>
          </div>
          <p class="font-bold mt-6">SAR &nbsp; {{ slide.slide1.price }}</p>
        </div>

        <div
          class="w-1/2 p-3 rounded-xl border-2 border-darkFormGrey text-black relative z-50"
        >
          <img
            :src="slide.slide2.imgUrl"
            :alt="slide.slide2.alt"
            class="w-full text-center"
          />
          <h6 class="text-base font-semibold">{{ slide.slide2.class }}</h6>
          <p class="text-sm font-light">{{ slide.slide2.car }}</p>
          <div class="my-2 flex space-x-4">
            <div class="flex space-x-2">
              <img src="../assets/icons/users.svg" alt="users-icon" />
              <span class="text-sm">{{ slide.slide2.passengers }}</span>
            </div>
            <div class="flex space-x-2">
              <img src="../assets/icons/bag.svg" alt="users-icon" />
              <span class="text-sm">{{ slide.slide2.bags }}</span>
            </div>
          </div>
          <p class="font-bold mt-6">SAR &nbsp; {{ slide.slide2.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const currentIndex = ref(0);
    const slides = [
      {
        slide1: {
          imgUrl: '/src/assets/images/car-1.png',
          alt: 'car image',
          class: 'Pure class',
          car: 'Lucid Air Dream',
          passengers: '2',
          bags: '×2',
          price: '850.50',
        },
        slide2: {
          imgUrl: '/src/assets/images/car-2.png',
          alt: 'car image',
          class: 'Business Class',
          car: 'Mercedes E450 Class',
          passengers: '2',
          bags: '×2',
          price: '240.00',
        },
      },
      {
        slide1: {
          imgUrl: '/src/assets/images/car-3.png',
          alt: 'car image',
          class: 'Mid size luxury',
          car: 'BMW x6',
          passengers: '2',
          bags: '×4',
          price: '1200.00',
        },
        slide2: {
          imgUrl: '/src/assets/images/car-4.png',
          alt: 'car image',
          class: 'Sports Class',
          car: 'Land Rover',
          passengers: '4',
          bags: '×4',
          price: '1240.00',
        },
      },
    ];

    const prevSlide = () => {
      currentIndex.value--;
      if (currentIndex.value < 0) {
        currentIndex.value = slides.length - 1;
      }
    };

    const nextSlide = () => {
      currentIndex.value++;
      if (currentIndex.value >= slides.length) {
        currentIndex.value = 0;
      }
    };

    return {
      currentIndex,
      slides,
      prevSlide,
      nextSlide,
    };
  },
};
</script>
