<template>
  <nav class="flex bg-black mx-auto container">
    <div class="py-4">
      <img src="../assets/images/cabrio-logo.png" alt="cabrio-logo" />
    </div>
    <div class="flex space-x-10 ml-24 py-4">
      <RouterLink
        before
        class="text-white font-normal"
        active-class="font-semibold after:content-[''] after:w-1.5 after:h-1.5 after:bg-white after:rounded after:block after:mx-auto after:mt-1.5"
        v-for="route in navbarRoutes"
        :to="route.path"
        :key="route.name"
      >
        {{ route.name }}
      </RouterLink>
    </div>
    <!-- user details -->
    <div
      class="text-white ml-auto flex space-x-5 divide-x divide-white divide-opacity-30"
    >
      <div class="text-right py-4">
        <h4 class="text-xs font-normal">Balance</h4>
        <p class="font-semibold">50.600.0 SAR</p>
      </div>
      <div class="text-right pl-5 py-4 flex items-center">
        <div class="flex space-x-3">
          <img src="../assets/images/Khuzimah.png" alt="cabrio-logo" />
          <div>
            <h4 class="text-base">Khuzimah A.</h4>
            <p class="text-xs text-left font-light">Cabrio Co.</p>
          </div>
        </div>
        <div class="dropdown dropdown-end ml-24">
          <div tabindex="0" role="button" class="">
            <img src="../assets/icons/arrow-down.svg" />
          </div>
          <ul
            tabindex="0"
            class="dropdown-content mt-10 -mr-6 z-[1] menu p-3 shadow bg-white rounded-lg w-60"
          >
            <RouterLink class="text-black flex py-3" to="">
              <img src="../assets/icons/setting.svg" class="mr-3" />
              <li class="font-medium">Profile Settings</li>
            </RouterLink>
            <hr />
            <RouterLink class="text-black flex py-3" to="">
              <img src="../assets/icons/translate.svg" class="mr-3" />
              <li class="font-medium">العربية</li>
            </RouterLink>
            <button
              class="mt-2 py-2 rounded-md border-2 border-black text-black font-bold"
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { navbarRoutes } from '../router';
</script>
