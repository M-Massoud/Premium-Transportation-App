<template>
  <div class="book-ride-page pt-6 px-4 lg:px-24">
    <div class="bg-white lg:w-2/6 shadow-primary rounded-2xl">
      <h1 class="text-black text-2xl font-semibold px-4 pt-4">Book a Ride</h1>
      <BookRideForm />
    </div>
  </div>
</template>

<script setup>
import BookRideForm from '../components/BookRideForm.vue';
</script>
